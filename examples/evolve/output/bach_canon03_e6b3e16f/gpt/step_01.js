// BWV 1087 Canon 3

// Baroque style voices
let upperVoice = x => x
  .sound("triangle")
  .gain(0.45)
  .attack(0.02)
  .decay(0.15)
  .sustain(0.2)
  .lpf(2000)
  .room(0.19)

let lowerVoice = x => x
  .sound("square")
  .gain(0.46)
  .attack(0.04)
  .decay(0.18)
  .sustain(0.21)
  .lpf(1400)
  .room(0.21)

setcps(116/60/4)

// Track 1
$: note("~!40 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!15")
  .slow(208/8/4)
  .apply(upperVoice)
  .pan(0.16)
  .room(0.21)

// Track 2
$: note("~!8 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!15")
  .slow(208/8/4)
  .apply(lowerVoice)
  .pan(0.82)
  .room(0.19)

// New Track 3 — gentle bass pulse
$: n("d2 ~ ~ ~ a2 ~ ~ ~ d2 ~ ~ ~ a2 ~ ~ ~")
  .sound("sine")
  .gain(0.21)
  .sustain(0.11)
  .attack(0.01)
  .release(0.22)
  .room(0.22)
  .pan(0.49)