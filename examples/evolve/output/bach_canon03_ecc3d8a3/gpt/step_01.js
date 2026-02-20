// BWV 1087 Canon 3

// Baroque style voices
let upperVoice = x => x
  .sound("triangle")
  .gain(0.4)
  .attack(0.02)
  .decay(0.18)
  .sustain(0.22)
  .lpf(2300)
  .room(0.18)

let lowerVoice = x => x
  .sound("square")
  .gain(0.38)
  .attack(0.02)
  .decay(0.17)
  .sustain(0.2)
  .lpf(1200)
  .room(0.13)

let bassVoice = x => x
  .sound("sawtooth")
  .gain(0.23)
  .attack(0.03)
  .decay(0.22)
  .lpf(700)
  .release(0.2)
  .room(0.2)
  .octave(-1)

setcps(120/60/4)

// Track 1 - Upper canon
$: note("~!40 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!15")
  .slow(208/8/4)
  .apply(upperVoice)
  .pan(0.2)

// Track 2 - Lower canon
$: note("~!8 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!15")
  .slow(208/8/4)
  .apply(lowerVoice)
  .pan(0.8)

// Track 3 - Contrapuntal bass
$: note("~!48 d3 ~!7 g3 ~!7 b2 ~!7 a2 ~!7 g3 ~!7 d3 ~!7 g2 ~!7 b2 ~!7 a2 ~!7 e3 ~!7 d3 ~!7 g2 ~!7 b2 ~!7 e3 ~!7 d3 ~!7 g2 ~!7 b2 ~!7 a2 ~!7 e3 ~!15")
  .slow(208/8/4)
  .apply(bassVoice)
  .pan(0.55)
  .degradeBy(0.06)

// Track 4 - Simple baroque rhythm (triangle for percussive feel)
$: stack([
  note("g4 ~ e4 ~").sound("triangle").gain(0.10).lpf(900).pan(0.1),
  note("d4 ~ b3 ~").sound("triangle").gain(0.12).lpf(700).pan(0.9)
]).slow(52/8/4)
.release(0.07)
.degradeBy(0.18)