setcps(80/60/4)

$: note("c5 c5 g5 g5 a5 a5 g5 ~ f5 f5 e5 e5 d5 d5 c5 ~")
  .sound("triangle")
  .every(4, fn => fn.octave(1))
  .penv(10)
  .pdecay(0.05)
  .gain(0.5)
  .release(0.2)
  .pan(perlin.slow(13).range(0.2, 0.8))
  .delay(0.5)
  .dfb(0.5)
  .dt(3/16)
  .room(0.25)

$: n("c2 f2 g2 c2").slow(8).ply(8)
  .s("pulse")
  .release(0.1)
  .attack(0.01)
  .lpf(350)
  .lpq(8)
  .gain(0.5)

$: stack(
  s("bd*4").gain(1),
  s("~ sn ~ sn").gain(0.7).release(0.1),
  s("~ hh").fast(2).gain(0.4).release(0.04).hpf(9000)
).room(0.1)