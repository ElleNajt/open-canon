samples('shabda/speech/en-GB/f:forever,aria,remember,listen'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari,kokoro'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(44/60/4)

// Variation XVIII: 12:47pm. The cloud has thickened into something
// that won't pass. F# minor curdles into B minor — a step further
// into the garden, deeper shade. The limping bass is gone; grief
// has grown tired of pretending to walk. In its place: a pedal tone,
// a low drone held like a breath that never finishes. The bell
// remains but has been struck only once, and we hear it decay
// across the whole cycle. A child's music-box melody appears —
// naive, wrong-footed, heartbreaking in its simplicity. "Kokoro"
// arrives, the Japanese word for heart, whispered so softly it
// might be the room itself speaking. The heartbeat is silent now.
// What replaces it: a single sustained chord, breathing in 13,
// refusing to resolve.

// The pedal — B, held like a held breath
$: note("b1").slow(8)
  .sound("sawtooth")
  .gain(0.18)
  .lpf(sine.range(180, 520).slow(13)).lpq(3)
  .attack(2).release(4)

// Music-box melody — naive, in B minor, wrong-footed
$: note("<b5 d6 fs6 e6 d6 b5 a5 fs5 e5 d5 ~ ~>").slow(9)
  .sound("triangle")
  .fm(1.8).fmh(3.01)
  .gain(0.16)
  .room(0.9).delay(0.45)

// The bell, struck once per long cycle, left to decay
$: note("fs4").slow(11)
  .sound("sine")
  .fm(4).fmh(2.005).fmdecay(2.5)
  .gain(0.22)
  .release(3).room(0.95)

// Sustained breathing chord in 13 — refusing resolution
$: note("b2,d3,fs3,a3").slow(13)
  .sound("sine")
  .gain(0.11)
  .detune(sine.range(-15, 15).slow(7))
  .room(0.95).size(0.95)

// Kokoro — the room speaking its own name for heart
$: s("~ ~ ~ ~ ~ kokoro ~ ~ ~ ~ remember ~").slow(14)
  .speed(0.72)
  .gain(0.2)
  .hpf(350).lpf(1800)
  .room(0.95)

// A single high sparkle — a dust mote catching sun through the cloud
$: s("~ ~ rim ~ ~ ~ ~ ~ ~ rim ~ ~").slow(6).gain(0.08).hpf(4200).room(0.8)