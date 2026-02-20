setcps(72/60/4)

stack(
  s("bd bd ~ sn, bd ~ sn ~, hh*8, hh*8")
    .gain(0.35).room(0.2).pan(0.1),
  s("~ ~ cp ~, hh*4")
    .gain(0.2).pan(0.8),
  note("c2 ~ c2 ~ g2 ~ f2 ~ c2 ~ g2 ~ f2 ~")
    .sound("square")
    .lpf(350).lpq(4)
    .attack(0.01).decay(0.15).sustain(0.2).release(0.4)
    .room(0.5).pan(0.3),
  note("c2 e2 g2 ~, f2 a2 c3 ~, g2 b2 d3 ~, g2 b2 d3 ~")
    .sound("sawtooth")
    .detune(15)
    .gain(0.45).lpf(900)
    .room(0.6).pan(0.5),
  note("c4 c4 g4 g4 a4 a4 g4 ~ f4 f4 e4 e4 d4 d4 c4 ~ g4 g4 f4 f4 e4 e4 d4 ~ g4 g4 f4 f4 e4 e4 d4 ~ c4 c4 g4 g4 a4 a4 g4 ~ f4 f4 e4 e4 d4 d4 c4 ~")
    .sound("triangle")
    .attack(0.005).decay(0.08).sustain(0.4).release(0.8)
    .lpf(sine.range(800,2200).slow(12))
    .lpq(3)
    .room(0.7).pan(0.7)
)