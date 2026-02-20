setcps(80/60/4)

$: stack(
    note("g3 gb3 e3 d3 b2 c3 d3 g2").gain(0.7).sound("sine").delay(0.4).dt(0.6).dfb(0.7),
    note("g2 gb2 e2 d2 b1 c2 d2 g1").gain(0.5).sound("supersaw").crush(12).drive(0.8)
  )
  .slow(3)
  .lpf(sine.range(150, 2800).slow(6))
  .vowel("a i")
  .room(0.7)

$: s("bd*4 sn:1").gain(0.9)
  .delay(0.5).dt(0.3).dfb(0.8)
  .lpf(square.range(80, 1200).slow(6))
  .every(3, (p) => p.crush(8))
  .room(0.5)

$: note("c4").sound("sawtooth").gain(0.6)
  .octave(3).chop(16).speed(2)
  .phaser(0.7).phaserdepth(15)
  .every(2, (p) => p.detune(perlin.range(-30, 30).slow(12)))
  .room(0.4)

$: s("hh:2*8").gain(0.4)
  .pan(rand.mul(0.7).add(0.15))
  .crush(12)
  .every(2, (p) => p.djf(rand))
  .room(0.3)

$: stack(
  note("c5").sound("triangle").gain(0.35).slow(3),
  note("g5").sound("pulse").gain(0.3).slow(7)
).room(0.8).delay(0.7).dt(0.35).dfb(0.85)

$: note("c3 e3 g3 c4").sound("sawtooth").gain(0.55)
  .octave(2)
  .lpf(sine.range(80, 1000).slow(12))
  .delay(0.7).dt(0.3).dfb(0.75)
  .room(0.6)