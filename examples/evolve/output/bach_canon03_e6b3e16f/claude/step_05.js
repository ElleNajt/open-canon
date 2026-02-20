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
  .room(0.3)
  .size(0.55)

let lowerVoice = x => x
  .sound("square")
  .gain(0.35)
  .attack(0.01)
  .decay(0.15)
  .sustain(0.18)
  .release(0.1)
  .lpf(1200)
  .room(0.22)
  .size(0.5)

let bassVoice = x => x
  .sound("sine")
  .gain(0.52)
  .attack(0.06)
  .decay(0.25)
  .sustain(0.35)
  .release(0.2)
  .lpf(700)
  .room(0.15)

let innerVoice = x => x
  .sound("sawtooth")
  .gain(0.22)
  .attack(0.08)
  .decay(0.3)
  .sustain(0.2)
  .release(0.18)
  .lpf(900)
  .lpq(4)
  .room(0.35)
  .size(0.6)

// Track 1 - upper voice, slow shimmer detune
$: note("~!40 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!15")
  .slow(208/8/4)
  .apply(upperVoice)
  .pan(0.22)
  .detune(sine.range(-6, 6).slow(19))
  .juxBy(0.3, x => x.late(0.125).gain(0.18))

// Track 2 - middle voice, panned right
$: note("~!8 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!15")
  .slow(208/8/4)
  .apply(lowerVoice)
  .pan(0.78)
  .phaser(0.4)
  .phaserdepth(0.3)

// Track 3 - slow inner countermelody, fills the harmonic space
$: note("<b3 c4 d4 b3 a3 g3>")
  .slow(8)
  .apply(innerVoice)
  .pan(sine.range(0.35, 0.65).slow(23))
  .lpf(sine.range(600, 1100).slow(11))

// Track 4 - bass pedal with slight breath movement
$: note("<g2 g2 d3 a2>")
  .slow(7)
  .apply(bassVoice)
  .pan(0.5)
  .lpf(sine.range(350, 780).slow(21))
  .off(0.5, x => x.note("<d2 g2 a2 e2>").gain(0.28).lpf(400))