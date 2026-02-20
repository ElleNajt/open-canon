setcps(112/60/4)

// Baroque style voices
let upperVoice = x => x
  .sound("triangle")
  .gain(0.42)
  .attack(0.03)
  .decay(0.18)
  .sustain(0.15)
  .release(0.12)
  .lpf(2200)
  .room(0.25)
  .size(0.5)

let lowerVoice = x => x
  .sound("square")
  .gain(0.38)
  .attack(0.01)
  .decay(0.15)
  .sustain(0.18)
  .release(0.1)
  .lpf(1400)
  .room(0.2)
  .size(0.45)

let bassVoice = x => x
  .sound("sine")
  .gain(0.5)
  .attack(0.04)
  .decay(0.2)
  .sustain(0.3)
  .release(0.15)
  .lpf(800)
  .room(0.18)

// Track 1 - upper voice, slight detune shimmer
$: note("~!40 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!15")
  .slow(208/8/4)
  .apply(upperVoice)
  .pan(0.25)
  .detune(sine.range(-4, 4).slow(13))

// Track 2 - middle voice
$: note("~!8 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!15")
  .slow(208/8/4)
  .apply(lowerVoice)
  .pan(0.75)

// Track 3 - sustained bass pedal, grounds the harmony
$: note("<g2 d3 g2 a2>")
  .slow(6)
  .apply(bassVoice)
  .pan(0.5)
  .lpf(sine.range(400, 900).slow(17))