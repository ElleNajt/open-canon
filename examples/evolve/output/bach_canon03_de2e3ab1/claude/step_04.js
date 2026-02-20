// BWV 1087 Canon 3 - evolved: lower voice becomes sine, upper gains subtle echo

let upperVoice = x => x
  .sound("triangle")
  .gain(0.45)
  .attack(0.02)
  .decay(0.15)
  .sustain(0.2)
  .fm(sine.range(0.1, 0.6).slow(8))
  .room(0.2)
  .size(0.5)

let lowerVoice = x => x
  .sound("sine")
  .gain(0.5)
  .attack(0.04)
  .decay(0.22)
  .sustain(0.3)
  .lpf(700)
  .delay(0.3)
  .delaytime(0.25)
  .delayfeedback(0.25)
  .room(0.5)
  .size(0.75)

setcps(120/60/4)

// Track 1 - upper canon voice
$: note("~!40 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!15")
  .slow(13)
  .apply(upperVoice)
  .pan(0.3)
  .off(0.125, x => x.gain(0.15).pan(0.7).room(0.4))

// Track 2 - lower canon voice, offset entry
$: note("~!8 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!15")
  .slow(13)
  .apply(lowerVoice)
  .pan(0.65)