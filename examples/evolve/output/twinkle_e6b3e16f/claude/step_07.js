setcps(76/60/4)

$: note("c4 c4 g4 g4 a4 a4 g4 ~ f4 f4 e4 e4 d4 d4 c4 ~ g4 g4 f4 f4 e4 e4 d4 ~ g4 g4 f4 f4 e4 e4 d4 ~ c4 c4 g4 g4 a4 a4 g4 ~ f4 f4 e4 e4 d4 d4 c4 ~")
  .sound("triangle")
  .attack(0.02).release(0.6)
  .lpf(sine.range(400, 2400).slow(32))
  .room(0.8).size(0.92)
  .gain(0.50)
  .off(0.125, x => x.note(x => x + 7).gain(0.18).pan(0.72).lpf(1200))
  .off(0.375, x => x.note(x => x + 19).gain(0.08).pan(0.3).delay(0.4).dt(0.5).room(0.9))
  .phaser(0.14).phaserdepth(0.6).phasersweep(900)
  .vowel("<a e i o u>".slow(20))

$: note("<c3 ~ ~ ~ f3 ~ ~ ~ g3 ~ ~ ~ eb3 ~ ~ ~>".slow(2))
  .sound("supersaw")
  .attack(0.18).decay(0.6).sustain(0.28).release(1.2)
  .lpf(sine.range(160, 700).slow(16)).lpq(10)
  .gain(0.24)
  .room(0.4).size(0.75)
  .pan(0.38)
  .detune(sine.range(-12, 12).slow(26))
  .crush(14)

$: note("<c2 c2 f2 f2 g2 g2 c2 eb2>")
  .sound("sine")
  .attack(0.01).release(2.2)
  .gain(0.55)
  .fmi(sine.range(1.0, 4.0).slow(20))
  .fmh(sine.range(1, 2).slow(32))
  .delay(0.2).dt(0.666).dfb(0.35)
  .room(0.15)
  .shape(0.2)

$: stack(
  s("bd ~ ~ bd:1 bd ~ bd:2 ~").gain(0.68),
  s("~ ~ sn ~ ~ ~ sn ~").gain(0.58).room(0.4).pan(0.52)
    .sometimes(x => x.delay(0.3).dt(0.333).dfb(0.25)),
  s("hh*8").gain(sine.range(0.18, 0.36).slow(7)).hpf(7200)
    .pan(sine.range(0.3, 0.7).slow(3))
    .every(3, x => x.fast(2).gain(0.15))
    .every(7, x => x.rev()),
  s("~ ~ ~ ~ ~ ~ ~ oh").gain(0.40).room(0.6).hpf(3800).pan(0.62),
  s("~ ~ ~ cp ~ ~ cp:1 ~").gain(0.26).room(0.5).lpf(4000).pan(0.48)
    .sometimes(x => x.delay(0.2).dt(0.25))
).rarely(x => x.crush(10))