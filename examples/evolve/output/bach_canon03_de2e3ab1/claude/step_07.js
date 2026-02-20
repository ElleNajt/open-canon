// BWV 1087 Canon 3 - evolved: upper voice now uses sawtooth with slight detune, lower voice FM narrowed

let upperVoice = x => x
  .sound("sawtooth")
  .gain(0.38)
  .attack(0.02)
  .decay(0.18)
  .sustain(0.15)
  .lpf(2200)
  .room(0.15)
  .size(0.4)

let lowerVoice = x => x
  .sound("sine")
  .gain(0.52)
  .attack(0.06)
  .decay(0.25)
  .sustain(0.35)
  .lpf(600)
  .fm(sine.range(0.15, 0.45).slow(8))
  .room(0.45)
  .size(0.7)

setcps(120/60/4)

// Track 1 - upper canon voice
$: note("~!40 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!15")
  .slow(13)
  .apply(upperVoice)
  .pan(0.28)
  .detune(sine.range(-8, 8).slow(11))

// Track 2 - lower canon voice, offset entry
$: note("~!8 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!15")
  .slow(13)
  .apply(lowerVoice)
  .pan(0.68)