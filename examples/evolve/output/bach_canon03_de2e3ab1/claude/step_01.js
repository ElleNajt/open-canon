// BWV 1087 Canon 3

// Baroque style voices - triangle voice gets a subtle filter sweep
let upperVoice = x => x
  .sound("triangle")
  .gain(0.45)
  .attack(0.02)
  .decay(0.15)
  .sustain(0.2)
  .lpf(sine.range(1800, 3200).slow(8))
  .room(0.25)
  .size(0.6)

let lowerVoice = x => x
  .sound("square")
  .gain(0.5)
  .decay(0.15)
  .sustain(0.2)
  .lpf(1200)

setcps(120/60/4)

// Track 1 - upper canon voice
$: note("~!40 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!15")
  .slow(13)
  .apply(upperVoice)
  .pan(0.3)

// Track 2 - lower canon voice, offset entry
$: note("~!8 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!15")
  .slow(13)
  .apply(lowerVoice)
  .pan(0.7)