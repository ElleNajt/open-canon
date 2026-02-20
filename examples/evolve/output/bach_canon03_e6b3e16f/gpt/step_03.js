// BWV 1087 Canon 3

// Baroque style voices
let upperVoice = x => x
  .sound("triangle")
  .gain(0.42)
  .attack(0.025)
  .decay(0.14)
  .sustain(0.23)
  .lpf(2200)
  .room(0.23)

let lowerVoice = x => x
  .sound("square")
  .gain(0.42)
  .attack(0.04)
  .decay(0.19)
  .sustain(0.18)
  .lpf(1200)
  .room(0.18)

setcps(116/60/4)

// Track 1
$: note("~!40 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!15")
  .slow(208/8/4)
  .apply(upperVoice)
  .pan(0.13)
  .room(0.23)
  .degradeBy(0.05)
  .every(16, x => x.lpf(1400).gain(0.36))

// Track 2
$: note("~!8 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!15")
  .slow(208/8/4)
  .apply(lowerVoice)
  .pan(0.85)
  .room(0.18)
  .degradeBy(0.04)
  .every(12, x => x.lpf(700).gain(0.33))

// Track 3 — bass, now slightly melodic and more present
$: n("[d2 ~ ~ a2] [d2 ~ fs2 ~] [g2 ~ b1 ~] [d2 ~ a1 ~] [fs2 g2] [b1 a1]")
  .sound("sine")
  .gain(0.23)
  .sustain(0.18)
  .attack(0.015)
  .release(0.28)
  .room(0.27)
  .pan(0.49)
  .lpf(530)
  .every(8, x => x.gain(0.3).octave(0))
  .every(16, x => x.lpf(700).room(0.33))

// Track 4 — subtle texture, sparse dust-style hat
$: s("hh ~ ~ ~ ~").gain(0.10).room(0.23).pan(0.65).degradeBy(0.43)