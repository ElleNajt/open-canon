setcps(80/60/4)

$: note("g4 f4 d#4 c4 g4 a#4 g4 f4")
  .s("triangle")
  .slow(2)
  .every(2, fn => fn.transpose(7))
  .lpf(perlin.range(700, 3000).slow(12))
  .lpq(3)
  .penv(10)
  .pdecay(0.05)
  .gain(0.5)
  .release(0.3)
  .pan(perlin.slow(13).range(0.2, 0.8))
  .delay(0.5)
  .dfb(0.5)
  .dt(3/16)
  .room(0.25)

$: n("c2 f1 g1 a#1").slow(4)
  .s("supersaw")
  .release(0.1)
  .attack(0.01)
  .lpf(300)
  .lpenv(500)
  .lpdecay(0.2)
  .lpq(8)
  .gain(0.6)

$: stack(
  s("bd ~ [bd bd] ~").gain(1.1),
  s("~ ~ sn ~").hpf(100).gain(0.8),
  s("hh*8").gain(perlin.range(0.2,0.5).slow(3)).hpf(9000).release(0.04)
).swing(0.3).room(0.1)