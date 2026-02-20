setcps(120/60/4)

let upperVoice = x => x
  .sound("triangle")
  .gain(0.44)
  .attack(0.02)
  .decay(0.22)
  .sustain(0.12)
  .release(0.18)
  .lpf(sine.range(1800, 3200).slow(31))
  .room(0.32)
  .size(0.65)

let lowerVoice = x => x
  .sound("square")
  .gain(0.34)
  .attack(0.025)
  .decay(0.2)
  .sustain(0.16)
  .release(0.12)
  .lpf(1200)
  .lpq(3)
  .room(0.28)
  .size(0.6)

let bassVoice = x => x
  .sound("sine")
  .gain(0.52)
  .attack(0.04)
  .decay(0.3)
  .sustain(0.28)
  .release(0.22)
  .lpf(500)
  .room(0.2)
  .size(0.55)

let innerVoice = x => x
  .sound("triangle")
  .gain(0.28)
  .attack(0.03)
  .decay(0.25)
  .sustain(0.14)
  .release(0.15)
  .lpf(2000)
  .room(0.3)
  .size(0.62)

// Upper voice — melodic subject
$: note("~!40 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!15")
  .slow(208/8/4)
  .apply(upperVoice)
  .pan(sine.range(0.22, 0.42).slow(23))
  .orbit(1)

// Middle voice — answer at lower fifth, canon at half bar offset
$: note("~!8 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!15")
  .slow(208/8/4)
  .apply(lowerVoice)
  .pan(sine.range(0.58, 0.78).slow(19))
  .orbit(2)

// Inner voice — fills the harmonic middle, slower motion
$: note("~!16 b4 ~!15 a4 ~!15 g4 ~!15 fs4 ~!15 g4 ~!15 e4 ~!15 d4 ~!15 b4 ~!7")
  .slow(208/8/4)
  .apply(innerVoice)
  .pan(sine.range(0.4, 0.6).slow(17))
  .orbit(3)

// Bass continuo — slow harmonic pedal, slight rhythmic shaping
$: note("<g2 g2 d3 d3 g2 a2 b2 b2 c3 c3 d3 d3 g2 g2 d2 d2>")
  .slow(16)
  .apply(bassVoice)
  .pan(0.5)
  .orbit(4)

// Shimmer layer — high octave, sparse and wet
$: note("~!40 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!15")
  .slow(208/8/4)
  .sound("sine")
  .gain(0.14)
  .attack(0.06)
  .decay(0.4)
  .sustain(0.08)
  .release(0.3)
  .transpose(12)
  .lpf(5000)
  .delay(0.5)
  .delaytime(0.5)
  .delayfeedback(0.38)
  .room(0.55)
  .size(0.82)
  .pan(sine.range(0.35, 0.65).slow(37))
  .orbit(5)