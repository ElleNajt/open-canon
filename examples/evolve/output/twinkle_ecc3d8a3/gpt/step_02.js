// Twinkle Twinkle Little Star — evolved

setcps(84/60/4)

// Melody: sparkling, light effects
$: note("c4 c4 g4 g4 a4 a4 g4 ~ f4 f4 e4 e4 d4 d4 c4 ~ g4 g4 f4 f4 e4 e4 d4 ~ g4 g4 f4 f4 e4 e4 d4 ~ c4 c4 g4 g4 a4 a4 g4 ~ f4 f4 e4 e4 d4 d4 c4 ~")
  .sound("triangle")
  .gain(0.8)
  .room(0.22).size(0.24)
  .lpf(sine.range(700, 3500).slow(16))
  .delay(0.14)
  .delayfeedback(0.22)

// Piano harmony: more color, gentle swing
$: note("<c3 e3> <g3 c4> <f3 a3> <g3 b3>").sound("piano")
  .gain(0.55)
  .hold(0.95)
  .room(0.31).size(0.32)
  .sustain(0.18)
  .swing(0.14)
  .slow(8)

// Evolving sine bass, subtle vowel filter
$: note("c2 ~ g2 ~ f2 ~ c2 ~").sound("sine")
  .gain(0.36)
  .attack(0.01).decay(0.15).release(0.19)
  .vowel("<u o e a>".slow(8))
  .room(0.13)
  .slow(4)

// Percussion: add hats, more energy in snare
$: stack([
  s("bd ~ ~ ~").gain(0.13).room(0.14),
  s("~ ~ sn ~").gain(0.16).room(0.26),
  s("hh ~ [~ hh] ~").gain(0.08).room(0.08)
]).slow(2)