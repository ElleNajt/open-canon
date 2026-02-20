setcps(80/60/4)

$: stack(
    note("g3 cs3 e3 d3 b2 c3 d3 g2").gain(0.6).sound("sine").delay(0.5).dt(0.5).dfb(0.7),
    note("g2 cs2 e2 d2 b1 c2 d2 g1").gain(0.4).sound("supersaw").crush(8).drive(0.7)
  )
  .slow(4)
  .lpf(sine.range(120, 3500).slow(10)).lpq(4)
  .vowel("i o")
  .room(0.8).phaser(0.2).phaserdepth(10)

$: s("bd*2 sn:2 cp*0.75").gain(0.8)
  .crush(4)
  .delay(0.6).dt(0.25).dfb(0.8)
  .lpf(square.range(100, 1500).slow(10))
  .room(0.6).drive(0.5)

$: note("cs4").sound("sawtooth").gain(0.5)
  .octave(3).chop(12).speed(1.2).accelerate(0.02)
  .phaser(1.5).phaserdepth(25)
  .every(3, (p) => p.detune(perlin.range(-50, 50).slow(5)))
  .room(0.5).delay(0.2).dt(0.15).dfb(0.4)

$: s("hh*8 cp*4").gain(0.3)
  .pan(rand.mul(0.8).add(0.1))
  .crush(6)
  .every(3, (p) => p.djf(rand))
  .room(0.4).tremolo(0.4).tremolosync(3)

$: stack(
  note("g5").sound("triangle").gain(0.4).slow(12).detune(60),
  note("c6").sound("pulse").gain(0.3).slow(14).detune(-60)
).room(0.9).delay(0.8).dt(0.6).dfb(0.9).lpf(sine.range(600, 7000).slow(18))

$: note("cs3 e3 g3 cs4").sound("sawtooth").gain(0.6)
  .octave(2)
  .lpf(sine.range(70, 1200).slow(12))
  .delay(0.8).dt(0.35).dfb(0.75)
  .room(0.7).jux((p) => p.octave(3).drive(0.3)).compressor()