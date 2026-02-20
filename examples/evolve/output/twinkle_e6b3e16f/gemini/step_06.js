setcps(80/60/4)

$: note("g4 f4 d#4 c4 g4 a#4 c5 a#4")
  .s("sawtooth")
  .slow(2)
  .every(2, fn => fn.transpose(-5))
  .lpf(sine.range(500, 2500).slow(2))
  .lpq(4)
  .shape(0.2)
  .gain(0.4)
  .pan(perlin.slow(11).range(0.1, 0.9))
  .delay(0.5)
  .dfb(0.55)
  .dt(3/16)
  .room(0.3)

$: n("[c2*2, <~ c2>] [f1*2, <~ f1>] [g1*2, <~ g1>] [a#1*2, <~ a#1>]")
  .s("supersaw")
  .release(0.05)
  .attack(0.01)
  .lpf(400)
  .lpenv(600)
  .lpdecay(0.15)
  .lpq(5)
  .drive(0.2)
  .gain(0.5)

$: stack(
  s("bd ~ [bd bd] ~").gain(1.2),
  s("~ ~ [sn cp] ~").hpf(100).gain(0.9),
  s("[hh hh hh oh]*2").hpf(7000).gain(0.6)
).compressor().compressorRatio(6).swing(0.1).room(0.15)