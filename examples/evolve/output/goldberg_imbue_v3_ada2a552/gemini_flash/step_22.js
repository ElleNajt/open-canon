setcps(80/60/4)

$: stack(
    note("g3 gb3 e3 d3 b2 c3 d3 g2").gain(0.7).sound("sine").delay(0.6).dt(0.6).dfb(0.75),
    note("g2 gb2 e2 d2 b1 c2 d2 g1").gain(0.5).sound("supersaw").crush(10).drive(0.9)
  )
  .slow(4)
  .lpf(sine.range(150, 4000).slow(12))
  .vowel("o u")
  .room(0.85).phaser(0.5).phaserdepth(20)

$: s("bd*4 sn:1").gain(0.9)
  .delay(0.7).dt(0.3).dfb(0.85)
  .lpf(square.range(120, 1800).slow(12))
  .every(3, (p) => p.crush(5))
  .room(0.7).compressor()

$: note("c4").sound("sawtooth").gain(0.6)
  .octave(3).chop(16).speed(1.25)
  .phaser(1.8).phaserdepth(30)
  .every(2, (p) => p.detune(perlin.range(-75, 75).slow(6)))
  .room(0.6).delay(0.3).dt(0.2).dfb(0.5)

$: s("hh*8 cp*2").gain(0.4)
  .pan(rand.mul(0.9).add(0.05))
  .crush(7)
  .every(4, (p) => p.djf(rand))
  .room(0.5).tremolo(0.5).tremolosync(2)

$: stack(
  note("c5").sound("triangle").gain(0.5).slow(8).detune(40),
  note("g5").sound("pulse").gain(0.4).slow(10).detune(-40)
).room(0.95).delay(0.9).dt(0.7).dfb(0.95).lpf(sine.range(500, 8000).slow(16))

$: note("c3 e3 g3 c4").sound("sawtooth").gain(0.65)
  .octave(2)
  .lpf(sine.range(80, 1500).slow(14))
  .delay(0.9).dt(0.4).dfb(0.8)
  .room(0.75).jux((p) => p.octave(4).drive(0.4)).compressor()