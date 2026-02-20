setcps(80/60/4)

$: stack(
    note("g3 gb3 e3 d3 b2 c3 d3 g2").gain(0.7).sound("sine").delay(0.6).dt(0.6).dfb(0.8),
    note("g2 gb2 e2 d2 b1 c2 d2 g1").gain(0.5).sound("supersaw").crush(10).drive(0.9)
  )
  .slow(4)
  .lpf(sine.range(50, 4000).slow(12))
  .vowel("i u")
  .room(0.9)

$: s("bd*4 sn:1").gain(0.9)
  .delay(0.7).dt(0.3).dfb(0.9)
  .lpf(square.range(50, 2000).slow(12))
  .every(3, (p) => p.crush(8))
  .room(0.7)

$: note("c4").sound("sawtooth").gain(0.6)
  .octave(3).chop(16).speed(2)
  .phaser(1.2).phaserdepth(30)
  .every(2, (p) => p.detune(perlin.range(-75, 75).slow(12)))
  .room(0.6)

$: s("hh:2*8 cp*2").gain(0.4)
  .pan(rand.mul(0.9).add(0.05))
  .crush(6)
  .every(4, (p) => p.djf(rand))
  .room(0.5)

$: stack(
  note("c5").sound("triangle").gain(0.5).slow(6).detune(20),
  note("g5").sound("pulse").gain(0.45).slow(10).detune(-20)
).room(1).delay(0.9).dt(0.5).dfb(0.95)

$: note("c3 e3 g3 c4").sound("sawtooth").gain(0.7)
  .octave(2)
  .lpf(sine.range(40, 1500).slow(20))
  .delay(0.9).dt(0.3).dfb(0.85)
  .room(0.8).jux((p) => p.octave(4).drive(0.2))