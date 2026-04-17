samples('shabda/speech/en-GB/f:forever,aria,remember,listen,breathe'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari,kokoro'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(52/60/4)

// Variation XXVIII: 2:51pm. The confession breaks open. The sarabande
// dissolves — bass abandons its weighted step and becomes a single
// low drone, a church organ three rooms away. The handclap is gone;
// in its place, a pizzicato pulse in 5, limping. The Lydian rain
// is inverted — now ASCENDING, climbing out of the piece like
// someone leaving a room without closing the door. "Hikari" (light)
// replaces kokoro. A male voice whispers "stay" — the only word
// that matters. Db major emerges, tentative, almost embarrassed.

// Organ drone — three rooms away, holding
$: note("<db2 db2 ab1 f2>").slow(12)
  .sound("sawtooth")
  .lpf(340).lpq(2)
  .attack(4).release(6)
  .gain(0.18)

// Pizzicato pulse in 5 — limping toward something
$: note("db4 ~ f4 ~ ab4").slow(3)
  .sound("triangle")
  .attack(0.001).decay(0.15).sustain(0).release(0.2)
  .gain(0.22).pan(sine.range(0.3, 0.7).slow(5))

// Ascending Lydian rain — climbing out
$: note("[d4 f4 g4 a4 b4 d5 f5 g5]").slow(5)
  .sound("sine")
  .attack(0.001).decay(0.4).sustain(0).release(1.2)
  .gain(perlin.range(0.07, 0.13).fast(2))
  .room(0.9).delay(0.3)

// Hikari — light, arriving
$: s("~ ~ ~ ~ hikari ~ ~").slow(13)
  .speed(0.95).gain(0.26).hpf(400).room(0.92).delay(0.5)

// "Stay" — the only word that matters
$: s("~ stay ~ ~ ~ ~ ~ ~ ~").slow(9)
  .speed(0.82)
  .gain(0.28).hpf(250).room(0.85)

// High shimmer — the door left open
$: note("<ab5 db6 f6 ab5>").slow(10)
  .sound("sine")
  .attack(2).release(4)
  .gain(0.08).room(0.95).pan(0.6)