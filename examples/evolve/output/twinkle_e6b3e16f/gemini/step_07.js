setcps(75/60/4)

$: note("g4 f4 d#4 c4 g4 a#4 c5 a#4")
  .s("pulse")
  .slow(2)
  .every(2, fn => fn.transpose(7))
  .lpf(sine.range(600, 3000).slow(4))
  .lpq(3)
  .drive(0.4)
  .gain(0.4)
  .pan(perlin.slow(12).range(0.2, 0.8))
  .delay(0.4)
  .dfb(0.45)
  .dt(1/4)
  .room(0.4)

$: n("c2 f1 g1 a#1")
  .s("supersaw")
  .slow(4)
  .release(0.05)
  .attack(0.01)
  .lpf(250)
  .lpenv(800)
  .lpdecay(0.4)
  .lpq(5)
  .drive(0.3)
  .gain(0.55)

$: stack(
  s("bd ~ [~ bd] ~").gain(1.2),
  s("~ ~ sn ~"),
  s("[hh hh] hh [hh oh]").hpf(8000).gain(0.5).velocity(perlin.slow(3).range(0.7, 1))
).compressor().compressorRatio(8).room(0.1)