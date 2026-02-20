// BWV 1087 Canon 3

// Baroque style voices
let upperVoice = x => x
  .sound("supersaw")
  .gain(0.35)
  .attack(0.02)
  .decay(0.15)
  .lpf(2000)
  .lpq(4)
  .room(0.3)
  .release(0.1)

let lowerVoice = x => x
  .sound("pulse")
  .gain(0.52)
  .attack(0.02)
  .decay(0.15)
  .hpf(120)
  .delay(0.25)
  .dfb(0.3)
  .room(0.05)
  .release(0.12)

setcps(120/60/4)

// Track 1
$: note("~!40 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!15")
  .slow(208/8/4)
  .apply(upperVoice)
  .pan(0.3)
  .swing(0.03)

// Track 2
$: note("~!8 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!15")
  .slow(208/8/4)
  .apply(lowerVoice)
  .pan(perlin.range(0.7, 0.9).slow(8))
  .swing(0.03)