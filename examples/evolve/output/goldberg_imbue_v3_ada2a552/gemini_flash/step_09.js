setcps(72/60/4)

$: stack(
    note("g3 gb3 e3 d3 b2 c3 d3 g2").gain(0.6).sound("sine").delay(0.3).dt(0.7).dfb(0.6),
    note("g2 gb2 e2 d2 b1 c2 d2 g1").gain(0.4).sound("supersaw").crush(12).drive(0.7)
  )
  .slow(2)
  .lpf(sine.range(300, 2000).slow(6))
  .vowel("o")
  .room(0.5)

$: s("bd*4 sn:1").gain(0.8)
  .delay(0.4).dt(0.4).dfb(0.6)
  .lpf(square.range(150, 800).slow(6))
  .every(3, (p) => p.crush(6))
  .room(0.3)

$: note("c4").sound("sawtooth").gain(0.5)
  .octave(2).chop(4).speed(1.5)
  .phaser(0.3).phaserdepth(8)
  .every(2, (p) => p.detune(perlin.range(-15, 15).slow(6)))
  .room(0.2)

$: s("hh:2*8").gain(0.3)
  .pan(rand.mul(0.8).add(0.1))
  .crush(12)
  .every(4, (p) => p.djf(rand))
  .room(0.1)

$: stack(
  note("c5").sound("triangle").gain(0.25).slow(3),
  note("g5").sound("pulse").gain(0.25).slow(7)
).room(0.6).delay(0.7).dt(0.25).dfb(0.7)

$: note("c3 f3 a3").sound("sawtooth").gain(0.4)
  .octave(1)
  .lpf(sine.range(150, 600).slow(12))
  .delay(0.5).dt(0.2).dfb(0.6)
  .room(0.4)