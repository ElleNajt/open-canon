$: s("bd:3 bd:1 ~ bd:2").slow(1.5)
  .shape(0.3).room(0.2).gain(0.85)

$: s("sn:2 ~ sn:4 sn:1").slow(1.5)
  .delay(0.3).delaytime(0.375).hpf(200).gain(0.7)

$: note("<c2 g1 eb2 bb1>").sound("sawtooth")
  .lpf(sine.range(300, 1200).slow(8)).slow(1.5)
  .attack(0.01).release(0.4).gain(0.5)

$: note("[~ c4] [eb4 ~] [g4 bb4] [~ c5]").sound("triangle")
  .slow(3).delay(0.4).delaytime(0.5)
  .pan(sine.range(0.3, 0.7).slow(4)).gain(0.35)

$: s("hh:1*3 hh:2 oh:1 ~").slow(1.5)
  .gain(sine.range(0.2, 0.45).fast(2))
  .pan(rand.range(0.2, 0.8)).hpf(6000)