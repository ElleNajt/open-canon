// BWV 1087 Canon 3

// Baroque style voices
let upperVoice = x => x
  .sound("sawtooth")
  .gain(0.42)
  .attack(0.02)
  .decay(0.15)
  .sustain(0.2)
  .lpf(2400)
  .lpq(2)
  .room(0.25)
  .release(0.1)

let lowerVoice = x => x
  .sound("pulse")
  .gain(0.52)
  .decay(0.15)
  .sustain(0.2)
  .hpf(120)
  .room(0.08)
  .release(0.12)

setcps(126/60/4)

// Track 1
$: note("~!40 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!15")
  .slow(208/8/4)
  .apply(upperVoice)
  .pan(perlin.range(0.2, 0.4).slow(12))
  .swing(0.03)

// Track 2
$: note("~!8 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!15")
  .slow(208/8/4)
  .apply(lowerVoice)
  .pan(0.75)
  .swing(0.03)