setcps(76/60/4)

$: note("c4 c4 g4 g4 a4 a4 g4 ~ f4 f4 e4 e4 d4 d4 c4 ~ g4 g4 f4 f4 e4 e4 d4 ~ g4 g4 f4 f4 e4 e4 d4 ~ c4 c4 g4 g4 a4 a4 g4 ~ f4 f4 e4 e4 d4 d4 c4 ~")
  .sound("triangle")
  .attack(0.02).release(0.35)
  .lpf(sine.range(700, 2800).slow(24))
  .room(0.6).size(0.8)
  .gain(0.58)
  .off(0.125, x => x.note(x => x + 7).gain(0.25).pan(0.72).lpf(1800))
  .off(0.25, x => x.note(x => x + 12).gain(0.12).pan(0.28).delay(0.35).dt(0.375).room(0.7))

$: note("c3 ~ ~ ~ f3 ~ ~ ~ g3 ~ ~ ~ c3 ~ ~ ~ c3 ~ ~ ~ f3 ~ ~ ~ g3 ~ ~ ~ c3 ~ ~ ~")
  .sound("sawtooth")
  .attack(0.06).decay(0.3).sustain(0.45).release(0.6)
  .lpf(sine.range(300, 800).slow(12)).lpq(8)
  .gain(0.38)
  .room(0.15)
  .pan(0.42)
  .phaser(0.4).phaserdepth(0.5)

$: note("<c2 c2 f2 f2 g2 g2 c2 f2>")
  .sound("sine")
  .attack(0.01).release(1.3)
  .gain(0.55)
  .fmi(sine.range(0.2, 1.8).slow(16))
  .delay(0.2).dt(0.5).dfb(0.3)

$: stack(
  s("bd ~ ~ bd:1 bd ~ ~ ~").gain(0.7),
  s("~ ~ sn ~ ~ ~ sn ~").gain(0.65).room(0.25).pan(0.52),
  s("hh*8").gain(0.32).hpf(7500).pan(sine.range(0.3, 0.7).slow(4)),
  s("~ ~ ~ ~ ~ ~ ~ oh").gain(0.45).room(0.4).hpf(4000)
).rarely(x => x.crush(10))