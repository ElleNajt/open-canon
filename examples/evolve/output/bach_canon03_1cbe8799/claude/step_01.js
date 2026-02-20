setcps(120/60/4)

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
  .gain(0.4)
  .decay(0.15)
  .sustain(0.2)
  .lpf(1200)
  .room(0.2)
  .shape(0.1)

// Track 1 - upper canon voice
$: note("~!40 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!15")
  .slow(208/8/4)
  .apply(upperVoice)
  .pan(0.28)
  .off(0.25, x => x.note(x => x + 7).gain(0.18).pan(0.45))

// Track 2 - lower canon voice
$: note("~!8 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!15")
  .slow(208/8/4)
  .apply(lowerVoice)
  .pan(0.72)

// Track 3 - subtle bass pedal
$: note("<g2 g2 d3 g2>")
  .sound("sine")
  .gain(perlin.range(0.18, 0.28).slow(6))
  .attack(0.1)
  .release(0.6)
  .lpf(400)
  .room(0.3)
  .pan(0.5)