setcps(76/60/4)

$: note("c4 c4 g4 g4 a4 a4 g4 ~ f4 f4 e4 e4 d4 d4 c4 ~ g4 g4 f4 f4 e4 e4 d4 ~ g4 g4 f4 f4 e4 e4 d4 ~ c4 c4 g4 g4 a4 a4 g4 ~ f4 f4 e4 e4 d4 d4 c4 ~")
  .sound("triangle")
  .attack(0.02).release(0.4)
  .lpf(sine.range(600, 2400).slow(32))
  .room(0.7).size(0.85)
  .gain(0.55)
  .off(0.125, x => x.note(x => x + 7).gain(0.22).pan(0.72).lpf(1600))
  .off(0.25, x => x.note(x => x + 12).gain(0.10).pan(0.28).delay(0.4).dt(0.375).room(0.8))
  .phaser(0.25).phaserdepth(0.3).phasersweep(800)

$: note("<c3 ~ ~ ~ f3 ~ ~ ~ g3 ~ ~ ~ c3 ~ ~ ~>".slow(2))
  .sound("sawtooth")
  .attack(0.08).decay(0.4).sustain(0.4).release(0.8)
  .lpf(sine.range(250, 700).slow(16)).lpq(10)
  .gain(0.35)
  .room(0.2)
  .pan(0.38)
  .fmi(sine.range(0.1, 0.6).slow(20))

$: note("<c2 c2 f2 f2 g2 g2 c2 f2>")
  .sound("sine")
  .attack(0.01).release(1.5)
  .gain(0.52)
  .fmi(sine.range(0.3, 2.2).slow(20))
  .fmh(sine.range(1, 2).slow(30))
  .delay(0.25).dt(0.5).dfb(0.35)
  .room(0.15)

$: stack(
  s("bd ~ ~ bd:1 bd ~ ~ ~").gain(0.68),
  s("~ ~ sn ~ ~ ~ sn ~").gain(0.62).room(0.3).pan(0.52).sometimes(x => x.delay(0.2).dt(0.25)),
  s("hh*8").gain(sine.range(0.25, 0.38).slow(8)).hpf(7200).pan(sine.range(0.3, 0.7).slow(3)),
  s("~ ~ ~ ~ ~ ~ ~ oh").gain(0.42).room(0.5).hpf(3800).pan(0.6),
  s("~ ~ ~ cp ~ ~ ~ ~").gain(0.3).room(0.4).lpf(4000).pan(0.45)
).rarely(x => x.crush(10))