let upperVoice = x => x
  .sound("sawtooth")
  .gain(0.38)
  .attack(0.02)
  .decay(0.18)
  .sustain(0.15)
  .lpf(1800)
  .room(0.15)
  .size(0.4)

let lowerVoice = x => x
  .sound("triangle")
  .gain(0.52)
  .attack(0.08)
  .decay(0.28)
  .sustain(0.40)
  .lpf(sine.range(400, 950).slow(8))
  .room(0.45)
  .size(0.7)

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
  .pan(0.68)
  .delay(0.28)
  .delaytime(0.375)
  .delayfeedback(0.22)

// Track 3 - bass pulse, with gentle pitch alternation added
$: note("<g3 ~ g3 ~> <g3 ~ d4 ~>")
  .sound("square")
  .gain(0.38)
  .attack(0.01)
  .decay(1.3)
  .sustain(0.0)
  .lpf(320)
  .pan(0.5)