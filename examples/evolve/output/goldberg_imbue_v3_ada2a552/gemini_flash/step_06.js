setcps(72/60/4)

$: stack(
    note("g3 gb3 e3 d3 b2 c3 d3 g2").gain(0.7).sound("sine").delay(0.4).dt(0.75).dfb(0.7).trem(0.7).tremolosync(1),
    note("g2 gb2 e2 d2 b1 c2 d2 g1").gain(0.5).sound("supersaw").crush(8).drive(0.8)
  )
  .slow(2)
  .lpf(sine.range(400, 2500).slow(8))
  .vowel("a")
  .room(0.6)
  .pan(sine.range(0.2, 0.8).slow(8))

$: s("bd*4 sn:1").gain(0.9)
  .delay(0.5).dt(0.5).dfb(0.7)
  .crush(12)
  .lpf(square.range(100, 1000).slow(4))
  .room(0.4)

$: note("c4").sound("sawtooth").gain(0.6)
  .octave(1).chop(8).speed(2)
  .phaser(0.5).phaserdepth(10).phasersweep(1)
  .every(2, (p) => p.lpf(500))
  .room(0.3)
  .delay(0.2).dt(0.125).dfb(0.6)