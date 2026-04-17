samples('shabda/speech/en-GB/f:forever,aria,remember,listen,breathe'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari,kokoro'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(44/60/4)

// Variation XXXI: 3:11pm. Someone has opened a window in the next room.
// The F# minor has collapsed into D — the key of things remembered but
// not mourned. The cello is gone; in its place, a piano plays three
// notes, always the same three, the way a child practices a phrase
// before giving up and going outside. The heartbeats have merged back
// into one, but slower now, the heart of someone sleeping. "Kokoro" —
// heart — speaks once, quietly, and is not answered. The rain has
// stopped being pitched; it is just rain again, falling on a roof
// that belongs to no one we know.

// Piano — three notes, practiced and abandoned
$: note("<d4 fs4 a4 ~ ~ fs4 d4 ~>").slow(11)
  .sound("triangle")
  .lpf(1800).lpq(1.5)
  .attack(0.02).decay(1.4).sustain(0.2).release(3)
  .gain(0.18).room(0.7)

// Low drone — D, the key of remembered things
$: note("d2,a2,d3").slow(14)
  .sound("sawtooth")
  .lpf(sine.range(180, 420).slow(11)).lpq(2)
  .attack(7).release(8)
  .gain(0.13).pan(0.4)

// One slow heartbeat — someone sleeping
$: s("bd ~ ~ ~ ~ ~ ~ ~").slow(5)
  .gain(0.28).lpf(130).room(0.6)

// Kokoro — heart, speaking once, unanswered
$: s("~ ~ ~ ~ ~ ~ ~ kokoro ~ ~ ~ ~ ~ ~ ~ ~").slow(15)
  .speed(0.78).gain(0.22).hpf(350).room(0.95).delay(0.55)

// Rain, unpitched now — just rain
$: s("hh*16").slow(2)
  .gain(perlin.range(0.05, 0.11).slow(5))
  .hpf(2800).lpf(6000)
  .pan(perlin.range(0.25, 0.75).slow(3))
  .room(0.4)