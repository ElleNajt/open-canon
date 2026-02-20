// Goldberg Variation - Siciliana (A gentle pastoral dance)
// The bass breathes beneath ornamental melodic sighs

setcps(72/60/4)

// Ground bass - softened, with gentle swells
$: note("g3 fs3 e3 d3 b2 c3 d3 g2")
  .slow(2)
  .sound("triangle")
  .gain(sine.range(0.35, 0.5).slow(8))
  .lpf(800)
  .room(0.25)

// Lilting siciliana melody - dotted rhythms suggesting 6/8
$: note("[g5 ~ a5] [b5 ~ a5] [g5 ~ fs5] [e5 ~ d5] [d5 ~ e5] [fs5 ~ e5] [d5 ~ c5] [b4 ~ a4]")
  .slow(2)
  .sound("sine")
  .gain(0.4)
  .attack(0.02)
  .decay(0.3)
  .sustain(0.4)
  .release(0.5)
  .room(0.3)
  .delay(0.15)
  .delaytime(0.375)
  .delayfeedback(0.25)

// Pastoral drone - fifths gently pulsing
$: note("<[g2,d3] [d3,a3]>")
  .slow(4)
  .sound("sawtooth")
  .lpf(400)
  .gain(0.15)
  .attack(0.5)
  .release(1)

// Gentle ornamental turns - like birdsong
$: note("[~ g5 a5 g5] [~ b5 c6 b5] [~ e5 fs5 e5] [~ d5 e5 d5] ~ [~ fs5 g5 fs5] [~ d5 e5 d5] ~")
  .slow(2)
  .sound("sine")
  .gain(0.2)
  .attack(0.01)
  .decay(0.15)
  .sustain(0.2)
  .release(0.3)
  .pan(sine.range(0.3, 0.7).slow(4))
  .room(0.35)