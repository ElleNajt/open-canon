// BWV 1087 Canon 3 - Variation: Descending into shadows

// Darker, more mysterious voicing
let upperVoice = x => x
  .sound("sawtooth")
  .gain(0.35)
  .attack(0.08)
  .decay(0.3)
  .sustain(0.4)
  .release(0.5)
  .lpf(1800)
  .lpq(3)
  .room(0.4)
  .delay(0.2)
  .delaytime(0.375)
  .delayfeedback(0.3)

let lowerVoice = x => x
  .sound("sine")
  .gain(0.5)
  .attack(0.01)
  .decay(0.2)
  .sustain(0.3)
  .lpf(1200)
  .room(0.3)

// New: ominous pedal tone
let pedalTone = x => x
  .sound("triangle")
  .gain(0.25)
  .attack(0.5)
  .decay(0.1)
  .sustain(0.8)
  .release(1)
  .lpf(600)
  .room(0.5)

setcps(80/60/4)

// Track 1 - shifted down, inverted intervals, more chromatic
$: note("~!40 a4 ~!7 gs4 ~!7 f4 ~!7 e4 ~!7 cs4 ~!7 d4 ~!7 e4 ~!7 a3 ~!7 a4 ~!7 gs4 ~!7 f4 ~!7 e4 ~!7 cs4 ~!7 d4 ~!7 e4 ~!7 a3 ~!7 a4 ~!7 gs4 ~!7 f4 ~!7 e4 ~!15")
  .slow(208/8/4)
  .apply(upperVoice)
  .pan(0.25)

// Track 2 - becomes the higher voice, contrary motion
$: note("~!8 e5 ~!7 f5 ~!7 gs5 ~!7 a5 ~!7 cs6 ~!7 b5 ~!7 a5 ~!7 e6 ~!7 e5 ~!7 f5 ~!7 gs5 ~!7 a5 ~!7 cs6 ~!7 b5 ~!7 a5 ~!7 e6 ~!7 e5 ~!7 f5 ~!7 gs5 ~!7 a5 ~!7 cs6 ~!7 b5 ~!7 a5 ~!7 e6 ~!15")
  .slow(208/8/4)
  .apply(lowerVoice)
  .pan(0.75)

// Track 3 - deep sustained pedal on A
$: note("a2")
  .slow(8)
  .apply(pedalTone)
  .pan(0.5)

// Track 4 - ghostly echoes of fragments
$: note("~!16 <e4 a4 cs5> ~!15 <f4 gs4 b4> ~!15 <a3 e4>")
  .slow(16)
  .sound("sine")
  .gain(0.15)
  .attack(0.3)
  .release(1.5)
  .room(0.6)
  .delay(0.4)
  .delaytime(0.5)
  .delayfeedback(0.4)
  .pan(sine.range(0.3, 0.7).slow(8))