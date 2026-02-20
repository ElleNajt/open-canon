// Goldberg Variations - Dramatic Transformation
// Bold shift: minor mode, rhythmic momentum, new texture

setcps(84/60/4)

// Transformed bass - now in minor with driving rhythm
$: note("[g2 g2 g2] [f2 ~] [eb2 eb2] [d2 d2 d2] [c3 ~] [ab2 ab2] [bb2 bb2 bb2] [eb2 ~ ~]")
  .slow(2)
  .sound("sawtooth")
  .lpf(600)
  .lpq(2)
  .gain(0.45)
  .room(0.3)
  .attack(0.005)
  .release(0.2)

// Soprano becomes an urgent, syncopated cry
$: note("[~ eb6] [d6 c6 bb5] [~ g5 ab5] [bb5 ~ ab5] [g5 f5 ~] [eb5 f5 g5] [f5 ~ d5] [eb5 ~ ~ ~]")
  .slow(2)
  .sound("square")
  .lpf(2200)
  .gain(0.3)
  .attack(0.002)
  .decay(0.1)
  .sustain(0.4)
  .release(0.4)
  .room(0.35)

// Drop the gentle inner voice, add pulsing fifths
$: note("[eb4,bb4] ~ [d4,ab4] ~ [c4,g4] ~ [bb3,f4] ~")
  .slow(2)
  .sound("pulse")
  .gain(0.2)
  .lpf(sine.range(400, 1800).slow(8))
  .attack(0.01)
  .release(0.15)

// New element: ghostly high harmonics
$: note("<g6 f6 eb6 d6 c6 ab5 bb5 eb6>")
  .slow(4)
  .sound("sine")
  .gain(0.12)
  .delay(0.4)
  .delaytime(0.5)
  .delayfeedback(0.5)
  .room(0.5)