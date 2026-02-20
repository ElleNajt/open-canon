// Goldberg Variation - Siciliana (Pastoral Lament)
// A gentle 6/8 dance with sighing appoggiaturas and tender ornamentation

setcps(54/60/4)

// Ground bass - stretched and deepened
$: note("g2 fs2 e2 d2 b1 c2 d2 g1")
  .slow(4)
  .sound("triangle")
  .gain(0.35)
  .lpf(800)
  .room(0.3)
  .attack(0.02)
  .release(0.8)

// Siciliana melody - dotted rhythms with sighing ornaments
$: note("<[g4 ~ a4] [fs4 ~ g4] [e4 ~ fs4] [d4 ~ e4]> <[b4 ~ c5] [c4 ~ d4] [d4 ~ e4] [g4 ~ ~]>")
  .slow(4)
  .sound("sine")
  .gain(0.28)
  .lpf(2200)
  .attack(0.01)
  .decay(0.3)
  .sustain(0.4)
  .release(0.6)
  .room(0.25)
  .pan(sine.range(0.35, 0.65).slow(8))

// Weeping appoggiaturas - chromatic sighs
$: note("[~ a4 g4] [~ g4 fs4] [~ fs4 e4] [~ e4 d4]")
  .slow(4)
  .late(0.5)
  .sound("sine")
  .gain(0.18)
  .lpf(1800)
  .attack(0.005)
  .release(0.4)
  .pan(0.6)
  .room(0.2)

// Gentle pedal tones - sustained thirds
$: note("<[d4 b3]> <[c4 a3]> <[b3 g3]> <[a3 fs3]>")
  .slow(4)
  .sound("triangle")
  .gain(0.15)
  .lpf(1200)
  .attack(0.1)
  .sustain(0.6)
  .release(1)
  .room(0.35)

// Plaintive oboe-like countermelody
$: note("~ [b4 c5 b4] ~ [a4 b4 a4] ~ [g4 a4 g4] ~ [fs4 g4 fs4]")
  .slow(4)
  .sound("sawtooth")
  .gain(0.12)
  .lpf(1400)
  .lpq(2)
  .attack(0.02)
  .release(0.3)
  .pan(0.35)
  .room(0.2)