// BWV 1087 Canon 4

// Baroque style voices
let upperVoice = x => x
  .sound("triangle")
  .gain(0.3)
  .lpf(1200)
  .lpq(2)
  .room(0.1)
  .detune(perlin.range(-12,12).slow(8))

let lowerVoice = x => x
  .sound("square")
  .gain(0.45)
  .hpf(90)
  .phaser(0.25)
  .phaserdepth(0.4)
  .room(0.2)

let bassVoice = x => x
  .sound("sine")
  .gain(0.3)
  .hpf(50)
  .lpf(450)
  .lpq(1.5)
  .room(0.5)

setcps(128/60/4)

let upperNotes = note("~!8 d5 ~!7 e5 ~!7 fs5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 fs5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 fs5 ~!7 g5 ~!15")

let lowerNotes = note("~!8 g5 ~!7 fs5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 fs5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 fs5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 fs5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 fs5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!15")

// Track 1
$: upperNotes
  .slow(4)
  .apply(upperVoice)
  .pan(0.25)
  .swing(0.04)

// Track 2
$: stack(
  lowerNotes
    .slow(4)
    .apply(lowerVoice)
    .pan(0.75)
    .swing(0.04),
  lowerNotes
    .sub(12)
    .slow(4)
    .apply(bassVoice)
    .pan(0.5)
    .swing(0.04)
  )