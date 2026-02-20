setcps(108/60/4)

$: n("[0 3] 5 ~ <0 10> [7 8] 5 ~").scale("g:minor")
  .s("square")
  .slow(2)
  .release(0.1)
  .sustain(0)
  .lpf(saw.range(400, 6000).slow(8))
  .lpq(5)
  .shape(0.2)
  .pan(perlin.slow(12).range(0.1, 0.9))
  .delay(0.5)
  .dfb(0.6)
  .dt(1/4)
  .room(0.4)
  .gain(0.45)

$: n("<0 0 0 3> <-4 -4 -4 -7>").octave(1).scale("g:minor")
  .s("sine")
  .slow(2)
  .release(0.8)
  .lpf(250)
  .shape(0.4)
  .gain(0.8)

$: stack(
  s("bd ~ [~ bd] ~"),
  s("~ sn ~ [sn/2 sn]"),
  s("~ hh ~ hh")
    .release(0.1)
    .gain(0.6)
).compressor().swing(0.05).hpf(50).gain(0.9)