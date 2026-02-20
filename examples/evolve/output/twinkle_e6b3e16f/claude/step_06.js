setcps(76/60/4)

$: note("c4 c4 g4 g4 a4 a4 g4 ~ f4 f4 e4 e4 d4 d4 c4 ~ g4 g4 f4 f4 e4 e4 d4 ~ g4 g4 f4 f4 e4 e4 d4 ~ c4 c4 g4 g4 a4 a4 g4 ~ f4 f4 e4 e4 d4 d4 c4 ~")
  .sound("triangle")
  .attack(0.02).release(0.5)
  .lpf(sine.range(500, 2800).slow(24))
  .room(0.75).size(0.9)
  .gain(0.52)
  .off(0.125, x => x.note(x => x + 7).gain(0.20).pan(0.72).lpf(1400))
  .off(0.25, x => x.note(x => x + 12).gain(0.12).pan(0.28).delay(0.5).dt(0.375).room(0.85))
  .phaser(0.18).phaserdepth(0.5).phasersweep(1000)
  .vowel("<a e i o>".slow(16))

$: note("<c3 ~ ~ ~ f3 ~ ~ ~ g3 ~ ~ ~ eb3 ~ ~ ~>".slow(2))
  .sound("sawtooth")
  .attack(0.12).decay(0.5).sustain(0.35).release(1.0)
  .lpf(sine.range(180, 800).slow(12)).lpq(14)
  .gain(0.32)
  .room(0.3).size(0.7)
  .pan(0.38)
  .fmi(sine.range(0.2, 1.2).slow(18))
  .detune(sine.range(-8, 8).slow(22))

$: note("<c2 c2 f2 f2 g2 g2 c2 eb2>")
  .sound("sine")
  .attack(0.01).release(2.0)
  .gain(0.58)
  .fmi(sine.range(0.5, 3.0).slow(16))
  .fmh(sine.range(1, 2.5).slow(28))
  .delay(0.3).dt(0.5).dfb(0.4)
  .room(0.2)
  .shape(0.15)

$: stack(
  s("bd ~ ~ bd:1 bd ~ bd:2 ~").gain(0.70),
  s("~ ~ sn ~ ~ ~ sn ~").gain(0.60).room(0.35).pan(0.52)
    .sometimes(x => x.delay(0.25).dt(0.25).dfb(0.3)),
  s("hh*8").gain(sine.range(0.22, 0.40).slow(6)).hpf(7000)
    .pan(sine.range(0.28, 0.72).slow(2.5))
    .every(4, x => x.fast(2).gain(0.18)),
  s("~ ~ ~ ~ ~ ~ ~ oh").gain(0.44).room(0.55).hpf(3600).pan(0.62),
  s("~ ~ ~ cp ~ ~ cp:1 ~").gain(0.28).room(0.45).lpf(3600).pan(0.48)
).rarely(x => x.crush(9))