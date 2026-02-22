setcps(80/60/4)

$: stack(
    note("g3 cs3 e3 d3 b2 c3 d3 g2").gain(0.6).sound("sine").delay(0.6).dt(0.6).dfb(0.8),
    note("g2 cs2 e2 d2 b1 c2 d2 g1").gain(0.4).sound("supersaw").crush(10).drive(0.7)
  )
  .slow(6)
  .lpf(sine.range(150, 3500).slow(14)).lpq(6)
  .vowel("a u").room(0.8).phaser(0.2).phaserdepth(12)

$: s("bd*2 sn:2 cp*0.75").gain(0.9)
  .crush(5)
  .delay(0.7).dt(0.3).dfb(0.8)
  .lpf(square.range(200, 1800).slow(10))
  .room(0.6).drive(0.5)

$: note("cs4 fs4 g4").sound("sawtooth").gain(0.5)
  .octave(4).chop(10).speed(1.6).accelerate(0.08)
  .phaser(2.5).phaserdepth(25)
  .every(3, (p) => p.detune(perlin.range(-80, 80).slow(4)))
  .room(0.5).delay(0.4).dt(0.25).dfb(0.6)

$: s("hh*16 cp*8").gain(0.35)
  .pan(rand.mul(0.8).add(0.1))
  .crush(7)
  .every(3, (p) => p.djf(rand))
  .room(0.4).tremolo(0.4).tremolosync(3)

$: stack(
  note("g5").sound("triangle").gain(0.4).slow(12).detune(90),
  note("c6").sound("pulse").gain(0.35).slow(14).detune(-90)
).room(0.9).delay(0.95).dt(0.75).dfb(0.9).lpf(sine.range(1000, 7000).slow(16)).trem(0.35)

$: note("cs3 e3 g3 cs4").sound("sine").gain(0.6)
  .octave(3)
  .lpf(sine.range(80, 1200).slow(12))
  .delay(0.8).dt(0.35).dfb(0.75)
  .room(0.7).jux((p) => p.octave(4).drive(0.3)).tremolo(0.25)