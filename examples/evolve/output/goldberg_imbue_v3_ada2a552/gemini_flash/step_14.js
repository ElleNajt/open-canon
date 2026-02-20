setcps(80/60/4)

$: stack(
    note("g3 gb3 e3 d3 b2 c3 d3 g2").gain(0.6).sound("sine").delay(0.5).dt(0.55).dfb(0.7),
    note("g2 gb2 e2 d2 b1 c2 d2 g1").gain(0.4).sound("supersaw").crush(12).drive(0.8).lpq(5)
  )
  .slow(4)
  .lpf(sine.range(100, 3000).slow(10))
  .vowel("a o")
  .room(0.8)

$: s("bd*4 sn:1").gain(0.8)
  .delay(0.6).dt(0.25).dfb(0.8)
  .lpf(square.range(100, 1500).slow(10))
  .every(4, (p) => p.crush(6))
  .room(0.6)

$: note("c4").sound("sawtooth").gain(0.5)
  .octave(3).chop(8).speed(1.5)
  .phaser(1.5).phaserdepth(25)
  .every(3, (p) => p.detune(perlin.range(-50, 50).slow(8)))
  .room(0.5)

$: s("hh:2*8 cp*2").gain(0.35)
  .pan(rand.mul(0.8).add(0.1))
  .crush(8)
  .every(5, (p) => p.djf(rand))
  .room(0.4)

$: stack(
  note("c5").sound("triangle").gain(0.4).slow(8).detune(30),
  note("g5").sound("pulse").gain(0.35).slow(12).detune(-30)
).room(0.9).delay(0.8).dt(0.6).dfb(0.9)

$: note("c3 e3 g3 c4").sound("sawtooth").gain(0.6)
  .octave(2)
  .lpf(sine.range(60, 1200).slow(16))
  .delay(0.8).dt(0.35).dfb(0.75)
  .room(0.7).jux((p) => p.octave(4).drive(0.3))