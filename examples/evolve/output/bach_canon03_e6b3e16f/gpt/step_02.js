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

// Track 2
$: note("~!8 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!15")
  .slow(208/8/4)
  .apply(lowerVoice)
  .pan(0.85)
  .room(0.18)
  .degradeBy(0.04)

// Track 3 — gently evolve bass to more melodic role
$: n("[d2 ~ ~ a2] [d2 ~ fs2 ~] [g2 ~ b1 ~] [d2 ~ a1 ~]")
  .sound("sine")
  .gain(0.19)
  .sustain(0.135)
  .attack(0.012)
  .release(0.23)
  .room(0.23)
  .pan(0.49)
  .lpf(400)
  .every(8, x => x.gain(0.26).octave(0))