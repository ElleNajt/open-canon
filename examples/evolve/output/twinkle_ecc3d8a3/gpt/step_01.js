// Twinkle Twinkle Little Star — evolved

setcps(80/60/4)

// Melody
$: note("c4 c4 g4 g4 a4 a4 g4 ~ f4 f4 e4 e4 d4 d4 c4 ~ g4 g4 f4 f4 e4 e4 d4 ~ g4 g4 f4 f4 e4 e4 d4 ~ c4 c4 g4 g4 a4 a4 g4 ~ f4 f4 e4 e4 d4 d4 c4 ~")
  .sound("triangle")
  .gain(0.8)
  .room(0.18).size(0.22)

// Simple piano harmony
$: note("<c3 e3> <g3 c4> <f3 a3> <g3 b3>").sound("piano")
  .gain(0.55)
  .hold(0.95)
  .room(0.27).size(0.28)
  .slow(8)

// Gentle pulse bass
$: note("c2 ~ g2 ~ f2 ~ c2 ~").sound("sine")
  .gain(0.32)
  .attack(0.01).decay(0.1).release(0.2)
  .room(0.10)
  .slow(4)

// Soft snare accent every other bar
$: stack([
  s("bd ~ ~ ~").gain(0.12).room(0.1),
  s("~ ~ sn ~").gain(0.09).room(0.2)
]).slow(2)