samples('shabda/speech/en-GB/f:forever,aria,remember,listen'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari,kokoro'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(42/60/4)

// Variation XIX: 1:13pm. The cloud breaks — not into sun, but into
// rain. Something shifts. B minor has moved to E minor, a fifth
// lower, a tone darker and warmer at once. The pedal is gone;
// in its place, a plucked figure rises like water finding stones.
// The music-box is silenced — it belonged to a different grief.
// What arrives instead: a slow modal descent, dorian inflected,
// almost a folk song half-remembered. "Hikari" — light — is
// whispered, but the light is inside the rain, not above it.
// And beneath everything, a low pulse returns. Not a heartbeat.
// A footstep. Someone is walking again, slowly, through the wet.

// The footstep — low, soft, returning to motion
$: s("bd ~ ~ ~ ~ ~ bd ~").slow(2)
  .gain(0.32).lpf(140)
  .room(0.5)

// Plucked figure — water finding stones, in E dorian
$: note("<e4 g4 b4 d5 b4 a4 g4 fs4 e4 d4 b3 g3>").slow(7)
  .sound("triangle")
  .fm(2.3).fmh(1.005)
  .gain(0.19)
  .room(0.88).delay(0.38)

// Modal descent — folk song half-remembered
$: note("<e5 ~ d5 b4 ~ a4 g4 ~ fs4 e4 ~ ~>").slow(11)
  .sound("sine")
  .attack(0.4).release(2)
  .gain(0.15)
  .room(0.92)

// Sustained chord — now E minor add9, wider, rain-like
$: note("e2,b2,e3,g3,fs4").slow(13)
  .sound("sawtooth")
  .gain(0.09)
  .lpf(sine.range(300, 900).slow(9)).lpq(2)
  .detune(sine.range(-12, 12).slow(6))

// Hikari — light inside the rain
$: s("~ ~ ~ hikari ~ ~ ~ ~ ~ breathe ~ ~ ~").slow(15)
  .speed(0.78)
  .gain(0.22)
  .hpf(280).lpf(2200)
  .room(0.95)

// Rain itself — high shimmer, granular, scattered
$: s("hh*8").slow(3)
  .gain(perlin.range(0.06, 0.14).fast(4))
  .hpf(5200).pan(sine.range(0.2, 0.8).slow(5))
  .room(0.7)