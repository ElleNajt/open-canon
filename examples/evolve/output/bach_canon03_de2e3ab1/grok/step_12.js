// BWV 1087 Canon 4

// Baroque style voices
let upperVoice = x => x
  .sound("triangle")
  .gain(0.3)
  .lpf(1100)
  .lpq(2)
  .room(0.3)
  .detune(perlin.range(-12,12).slow(12))

let lowerVoice = x => x
  .sound("square")
  .gain(0.45)
  .hpf(90)
  .delay(0.25)
  .dfb(0.4)
  .room(0.1)

setcps(128/60/4)

// Track 1
$: note("~!8 d5 ~!7 e5 ~!7 fs5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 fs5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 fs5 ~!7 g5 ~!15")
  .slow(4)
  .apply(upperVoice)
  .pan(0.25)
  .swing(0.04)

// Track 2
$: note("~!8 g5 ~!7 fs5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 fs5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 fs5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 fs5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 fs5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 fs5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!15")
  .slow(4)
  .apply(lowerVoice)
  .pan(perlin.range(0.7,0.9).slow(16))
  .swing(0.04)