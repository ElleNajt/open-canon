#!/usr/bin/env node
/**
 * Headless album renderer — renders evolve step files to WAV via headless Chromium.
 * Uses the real Strudel audio engine (superdough + Web Audio OfflineAudioContext)
 * so output sounds identical to the browser.
 *
 * Usage:
 *   node examples/evolve/render_album.mjs [options]
 *
 * Options:
 *   --dir <path>         Step files directory (default: cross_claude_gemini31 collaboration)
 *   --cycles <n>         Cycles per step (default: 8)
 *   --output <path>      Output directory (default: ./examples/evolve/render_album_out/)
 *   --steps <range>      Step range, e.g. "0-10" or "5" (default: all)
 *   --server <url>       Local vibe-duet server URL (default: http://localhost:3000)
 *   --sample-rate <n>    Sample rate (default: 48000)
 *   --crossfade <sec>    Crossfade between steps in seconds (default: 2, use 0 for no crossfade)
 *   --no-concat          Skip ffmpeg concatenation, just output individual WAVs
 *   --chromium <path>    Path to Chromium executable (default: Playwright's bundled Chromium)
 *
 * Requires:
 *   - vibe-duet server running (./start)
 *   - playwright installed (npx playwright install chromium)
 */

import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const EVOLVE_DIR = __dirname;
const DEFAULT_STEP_DIR = path.join(EVOLVE_DIR, 'output/cross_claude_gemini31_4aa890b0/claude_gemini_alternate');

// ─── Parse args ───

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = {
    dir: DEFAULT_STEP_DIR,
    cycles: 8,
    output: path.join(EVOLVE_DIR, 'render_album_out'),
    steps: null,
    server: 'http://localhost:3000',
    sampleRate: 48000,
    crossfade: 2,
    concat: true,
    chromium: null,
  };
  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--dir': opts.dir = path.resolve(args[++i]); break;
      case '--cycles': opts.cycles = parseInt(args[++i]); break;
      case '--output': opts.output = path.resolve(args[++i]); break;
      case '--steps': opts.steps = args[++i]; break;
      case '--server': opts.server = args[++i]; break;
      case '--sample-rate': opts.sampleRate = parseInt(args[++i]); break;
      case '--crossfade': opts.crossfade = parseFloat(args[++i]); break;
      case '--no-concat': opts.concat = false; break;
      case '--chromium': opts.chromium = args[++i]; break;
    }
  }
  return opts;
}

// ─── Render a single step in the browser ───

async function renderStep(page, code, cycles, sampleRate, downloadDir, stepNum) {
  const wavPath = path.join(downloadDir, `step_${stepNum}.wav`);

  // Set the code in the editor
  await page.evaluate((c) => {
    window.strudelMirror.setCode(c);
  }, code);

  // Wait for editor change to propagate
  await page.waitForTimeout(200);

  // Evaluate without auto-playing, then wait for samples to load
  await page.evaluate(async () => {
    await window.strudelMirror.repl.evaluate(window.strudelMirror.code, false);
  });
  await page.waitForTimeout(2000);

  // Set up download listener BEFORE triggering the render
  const downloadPromise = page.waitForEvent('download', { timeout: 300000 });

  // Call renderPatternAudio — it triggers a download via a.click()
  const renderInfo = await page.evaluate(async ({ cycles, sampleRate, stepNum }) => {
    const pattern = window.strudelMirror.repl.state.pattern;
    const cps = window.strudelMirror.repl.scheduler.cps;

    if (!pattern) return { error: 'no pattern' };

    const durationSec = cycles / cps;
    window.strudelMirror.repl.scheduler.stop();

    await window.renderPatternAudio(
      pattern, cps, 0, cycles, sampleRate, 1024, false, `step_${stepNum}`
    );

    return { cps, durationSec };
  }, { cycles, sampleRate, stepNum });

  if (renderInfo.error) return null;

  // Capture the download
  const download = await downloadPromise;
  await download.saveAs(wavPath);

  return { wavPath, ...renderInfo };
}

// ─── Main ───

async function main() {
  const opts = parseArgs();

  // Find step files
  const allFiles = fs.readdirSync(opts.dir)
    .filter(f => /^step_\d+\.js$/.test(f))
    .sort((a, b) => {
      const na = parseInt(a.match(/\d+/)[0]);
      const nb = parseInt(b.match(/\d+/)[0]);
      return na - nb;
    });

  let stepFiles = allFiles;
  if (opts.steps) {
    if (opts.steps.includes('-')) {
      const [lo, hi] = opts.steps.split('-').map(Number);
      stepFiles = allFiles.filter(f => {
        const n = parseInt(f.match(/\d+/)[0]);
        return n >= lo && n <= hi;
      });
    } else {
      const n = parseInt(opts.steps);
      stepFiles = allFiles.filter(f => parseInt(f.match(/\d+/)[0]) === n);
    }
  }

  console.log(`Rendering ${stepFiles.length} steps from ${path.basename(opts.dir)}`);
  console.log(`Cycles per step: ${opts.cycles}, sample rate: ${opts.sampleRate}`);
  console.log(`Output: ${opts.output}\n`);

  fs.mkdirSync(opts.output, { recursive: true });

  // Launch browser with audio-friendly flags
  const launchOpts = {
    headless: true,
    args: [
      '--autoplay-policy=no-user-gesture-required',
      '--disable-background-timer-throttling',
      '--disable-renderer-backgrounding',
    ],
  };
  if (opts.chromium) launchOpts.executablePath = opts.chromium;
  console.log('Launching browser...');
  const browser = await chromium.launch(launchOpts);
  const context = await browser.newContext({ acceptDownloads: true });
  const page = await context.newPage();

  // Forward browser errors to node for debugging
  page.on('console', msg => {
    if (msg.type() === 'error') console.log(`  [browser] ${msg.text()}`);
  });

  // Navigate to the vibe-duet REPL
  console.log(`Connecting to ${opts.server}...`);
  await page.goto(opts.server, { waitUntil: 'domcontentloaded', timeout: 30000 });

  // Wait for Strudel to initialize
  await page.waitForFunction(() => window.strudelMirror && window.renderPatternAudio, { timeout: 30000 });

  // Unlock audio — Strudel waits for a mousedown before initializing the AudioContext
  await page.click('body');
  await page.waitForTimeout(2000);
  console.log('Strudel REPL ready.\n');

  const wavFiles = [];

  for (let i = 0; i < stepFiles.length; i++) {
    const stepFile = stepFiles[i];
    const stepPath = path.join(opts.dir, stepFile);
    const stepNum = stepFile.match(/\d+/)[0];

    // Read model info if available
    const modelFile = path.join(opts.dir, `step_${stepNum}.model`);
    const model = fs.existsSync(modelFile) ? fs.readFileSync(modelFile, 'utf-8').trim() : '?';

    const code = fs.readFileSync(stepPath, 'utf-8');
    process.stdout.write(`[${i+1}/${stepFiles.length}] step_${stepNum} (${model})... `);

    const t0 = performance.now();

    let result;
    try {
      result = await renderStep(page, code, opts.cycles, opts.sampleRate, opts.output, stepNum);
    } catch (err) {
      console.log(`ERROR: ${err.message}`);
      // Reload and continue with next step
      await page.goto(opts.server, { waitUntil: 'domcontentloaded', timeout: 30000 });
      await page.waitForFunction(() => window.strudelMirror && window.renderPatternAudio, { timeout: 30000 });
      await page.click('body');
      await page.waitForTimeout(1000);
      continue;
    }

    if (!result) {
      console.log('SKIP (no pattern)');
      continue;
    }

    const took = (performance.now() - t0) / 1000;
    wavFiles.push(result.wavPath);
    console.log(`${result.durationSec.toFixed(1)}s in ${took.toFixed(1)}s`);

    // Reload page between steps to reset audio context cleanly
    await page.goto(opts.server, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForFunction(() => window.strudelMirror && window.renderPatternAudio, { timeout: 30000 });
    await page.click('body');
    await page.waitForTimeout(1000);
  }

  await browser.close();

  if (!opts.concat || wavFiles.length === 0) {
    console.log(`\nDone. ${wavFiles.length} WAV files in ${opts.output}`);
    return;
  }

  // Concatenate with ffmpeg
  console.log(`\nConcatenating ${wavFiles.length} files with ${opts.crossfade}s crossfade...`);

  if (wavFiles.length === 1) {
    const mp3Path = path.join(opts.output, 'album.mp3');
    execSync(`ffmpeg -y -i "${wavFiles[0]}" -b:a 320k "${mp3Path}"`, { stdio: 'pipe' });
    console.log(`Output: ${mp3Path}`);
    return;
  }

  // Build ffmpeg filter for crossfading between consecutive tracks
  let filterParts = [];
  let inputArgs = wavFiles.map(f => `-i "${f}"`).join(' ');
  const cf = opts.crossfade;

  filterParts.push(`[0][1]acrossfade=d=${cf}:c1=tri:c2=tri[tmp1]`);
  for (let i = 2; i < wavFiles.length; i++) {
    const prev = i === 2 ? '[tmp1]' : `[tmp${i-1}]`;
    filterParts.push(`${prev}[${i}]acrossfade=d=${cf}:c1=tri:c2=tri[tmp${i}]`);
  }
  const lastLabel = `[tmp${wavFiles.length - 1}]`;
  const filter = filterParts.join(';');

  const mp3Path = path.join(opts.output, 'album.mp3');
  const cmd = `ffmpeg -y ${inputArgs} -filter_complex "${filter}" -map "${lastLabel}" -b:a 320k "${mp3Path}"`;

  execSync(cmd, { stdio: 'inherit' });
  console.log(`\nDone! Output: ${mp3Path}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
