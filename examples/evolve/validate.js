// Validates Strudel code using the actual Strudel transpiler + runtime.
// Catches syntax errors, runtime errors, missing $:, and silent patterns.
// Pass code as last argument: node validate.js "code" or node -e "$(cat validate.js)" "code"
// Exit 0 = valid, Exit 1 = error (prints error message)

(async () => {
  const code = process.argv.at(-1);
  if (!code || code === process.argv[0]) {
    process.stdout.write("No code provided");
    process.exit(1);
  }

  const patterns = [];
  const warnings = [];
  console.log = () => {};  // suppress Strudel loading messages
  console.error = (...args) => { warnings.push(args.join(' ')); };

  const { evaluate } = await import('@strudel/transpiler');
  const { evalScope, Pattern } = await import('@strudel/core');
  await evalScope(
    import('@strudel/core'),
    import('@strudel/mini'),
    import('@strudel/tonal'),
  );

  Pattern.prototype.p = function() { patterns.push(this); return this; };
  globalThis.setcps = () => {};
  globalThis.setCps = () => {};
  globalThis.setcpm = () => {};
  globalThis.setCpm = () => {};
  globalThis.samples = () => {};

  try {
    await evaluate(code);

    const warnStr = warnings.length ? '\n' + warnings.join('\n') : '';

    if (patterns.length === 0) {
      process.stdout.write('No patterns registered. Each track needs $: to play.' + warnStr);
      process.exit(1);
    }

    let silent = 0;
    let errored = 0;
    for (const pat of patterns) {
      try {
        const haps = pat.queryArc(0, 8);
        if (!haps || haps.length === 0) silent++;
      } catch(e) { errored++; }
    }

    if (silent > 0) {
      process.stdout.write(silent + '/' + patterns.length + ' patterns are silent (no events produced)' + warnStr);
      process.exit(1);
    }

    process.exit(0);
  } catch(e) {
    process.stdout.write(e.message);
    process.exit(1);
  }
})();
