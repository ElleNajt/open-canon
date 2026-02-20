setcps(80/60/4)

stack(
  s("bd*2 ~ sn, bd ~ sn ~, hh*8, hh*8 ~ oh")
    .gain(0.4).room(0.3).pan(0.2).swing(0.05),
  s("~ cp ~ cp, hh*4, ~ hh*2 cp")
    .gain(0.25).pan(0.75),
  note("c2*2 ~ c2 g2, f2 ~ c2 g2 f2")
    .sound("square")
    .lpf(400).lpq(5)
    .attack(0.01).decay(0.2).sustain(0.3).release(0.3)
    .room(0.4).pan(0.2),
  note("c2 e2 g2 ~, f2 a2 c3 ~, g2 b2 d3 ~, f2 a2 c3 ~")
    .sound("sawtooth")
    .detune(20)
    .gain(0.4).lpf(1000).lpq(3)
    .attack(0.02).hold(0.1).decay(0.3).sustain(0.4).release(0.6)
    .room(0.7).pan(0.4),
  note("c4 g4 a4 ~, g4 f4 e4 d4, c4 g4 f4 ~, e4 d4 c4 ~")
    .sound("triangle")
    .attack(0.01).decay(0.1).sustain(0.3).release(0.5)
    .lpf(sine.range(600,2500).slow(16).mul(0.5).add(1200))
    .lpq(4)
    .delay(0.15).dfb(0.4)
    .room(0.8).pan(0.6),
  note("~ g5 b5 ~ d6, ~ e6 d6 ~ b5")
    .sound("supersaw")
    .detune(10)
    .gain(0.3).lpf(2000).hpf(800)
    .tremolo(0.5).tremolosync(4)
    .room(0.6).pan(0.8)
)