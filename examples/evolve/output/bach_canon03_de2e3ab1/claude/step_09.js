// BWV 1087 Canon 3 - evolved: added a sparse pizzicato pulse on the tonic

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
  .sound("triangle")
  .gain(0.52)
  .attack(0.08)
  .decay(0.28)
  .sustain(0.40)
  .lpf(sine.range(400, 750).slow(6))
  .room(0.45)
  .size(0.7)

setcps(120/60/4)

// Track 1 - upper canon voice
$: note("~!40 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!15")
  .slow(13)
  .apply(upperVoice)
  .pan(0.28)
  .detune(sine.range(-4, 4).slow(9))

// Track 2 - lower canon voice, offset entry
$: note("~!8 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!15")
  .slow(13)
  .apply(lowerVoice)
  .pan(0.68)

// Track 3 - sparse pizzicato pulse on tonic G, every 2 cycles
$: note("g3 ~ ~ ~")
  .sound("triangle")
  .gain(0.30)
  .attack(0.005)
  .decay(0.12)
  .sustain(0.0)
  .release(0.08)
  .lpf(900)
  .pan(sine.range(0.38, 0.62).slow(8))
  .degradeBy(0.3)