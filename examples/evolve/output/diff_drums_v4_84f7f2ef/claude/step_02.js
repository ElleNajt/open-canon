$: s("bd:3 bd:1 ~ bd:2 ~ bd:3 bd:1 bd:2").slow(2)
  .shape(0.4).room(0.35).lpf(180).gain(0.8)

$: s("sn:2 ~ sn:4 ~ sn:1 ~ sn:2 sn:4").slow(2)
  .delay(0.4).delaytime(0.333).hpf(250).gain(0.65)

$: note("<c2 g1 eb2 bb1 f1 c2 ab1 eb2>").sound("sawtooth")
  .lpf(sine.range(200, 900).slow(12)).slow(2)
  .attack(0.02).release(0.6).gain(0.45)

$: note("[~ c4] [eb4 g4] [~ bb4] [c5 ~] [g4 eb4] [~ c4]").sound("sine")
  .slow(4).delay(0.5).delaytime(0.666)
  .lpf(2200).gain(0.3)

$: note("eb5 ~ g5 ~ bb5 c6 ~ g5").sound("triangle")
  .slow(4).attack(0.1).release(1.2)
  .room(0.5).gain(0.2)

$: s("hh:1*2 ~ oh:1 hh:2 ~ hh:1").slow(2)
  .gain(sine.range(0.15, 0.35).slow(3))
  .pan(rand.range(0.25, 0.75)).hpf(7000)