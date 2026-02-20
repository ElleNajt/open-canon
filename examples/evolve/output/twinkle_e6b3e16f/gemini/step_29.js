setcps(118/60/4)

$: n("[0,3,7,5] [8,10,7,5]").scale("g:minor").slow(2)
  .s("supersaw")
  .attack(0.01)
  .release(0.5)
  .sustain(0)
  .lpf(perlin.range(300, 4000).slow(16))
  .lpq(8)
  .pan(perlin.range(0.2, 0.8).slow(10))
  .delay(0.3).dfb(0.5).dt(3/16)
  .room(0.3)
  .gain(0.4)

$: n("0 0 [~ 0] 5 0 0 [~ 0] 5").scale("g:minor").octave(-2)
  .s("sine")
  .attack(0.01)
  .release(0.3)
  .sustain(0.05)
  .lpf(150).lpenv(1000).lpdecay(0.1)
  .crush(6)
  .gain(0.8)

$: stack(
  s("bd ~ bd [bd bd]"),
  s("~ sn")
    .hpf(200)
    .gain(0.7)
    .delay(0.1).dfb(0.2).dt(1/8),
  s("hh").euclid(7, 8)
    .decay(0.05)
    .hpf(4000)
    .gain(perlin.range(0.3, 0.6).slow(5)),
  s("~ cp ~ cp ~ ~ [~ cp?] ~").gain(0.5).room(0.2)
).compressor()
 .gain(0.9)