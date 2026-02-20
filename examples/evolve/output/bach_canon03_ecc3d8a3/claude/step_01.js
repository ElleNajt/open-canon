setcps(120/60/4)

let upperVoice = x => x
  .sound("triangle")
  .gain(0.42)
  .attack(0.015)
  .decay(0.18)
  .sustain(0.15)
  .release(0.12)
  .lpf(2800)
  .room(0.25)
  .size(0.6)

let lowerVoice = x => x
  .sound("square")
  .gain(0.38)
  .attack(0.02)
  .decay(0.2)
  .sustain(0.18)
  .release(0.1)
  .lpf(1400)
  .room(0.22)
  .size(0.55)

let bassVoice = x => x
  .sound("sine")
  .gain(0.5)
  .attack(0.03)
  .decay(0.25)
  .sustain(0.3)
  .release(0.18)
  .lpf(600)
  .room(0.18)
  .size(0.5)

// Upper voice — melodic subject, slight canon delay
$: note("~!40 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!15")
  .slow(208/8/4)
  .apply(upperVoice)
  .pan(sine.range(0.25, 0.45).slow(23))
  .orbit(1)

// Middle voice — answer at lower fifth
$: note("~!8 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!15")
  .slow(208/8/4)
  .apply(lowerVoice)
  .pan(sine.range(0.55, 0.75).slow(19))
  .orbit(2)

// Bass continuo — slow harmonic pedal
$: note("<g2 d3 g2 a2 b2 c3 d3 g2>")
  .slow(8)
  .apply(bassVoice)
  .pan(0.5)
  .orbit(3)

// Ornamental echo layer — sparse, high shimmer
$: note("~!40 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!15")
  .slow(208/8/4)
  .sound("sine")
  .gain(0.18)
  .attack(0.04)
  .decay(0.3)
  .sustain(0.1)
  .release(0.2)
  .transpose(12)
  .lpf(4000)
  .delay(0.4)
  .delaytime(0.375)
  .delayfeedback(0.35)
  .room(0.45)
  .size(0.75)
  .pan(0.5)
  .orbit(4)