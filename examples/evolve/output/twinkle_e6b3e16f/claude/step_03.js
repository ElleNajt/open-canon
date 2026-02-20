setcps(76/60/4)

$: note("c4 c4 g4 g4 a4 a4 g4 ~ f4 f4 e4 e4 d4 d4 c4 ~ g4 g4 f4 f4 e4 e4 d4 ~ g4 g4 f4 f4 e4 e4 d4 ~ c4 c4 g4 g4 a4 a4 g4 ~ f4 f4 e4 e4 d4 d4 c4 ~")
  .sound("triangle")
  .attack(0.02).release(0.3)
  .lpf(sine.range(900, 3200).slow(20))
  .room(0.55).size(0.75)
  .gain(0.6)
  .off(0.125, x => x.note(x => x + 7).gain(0.28).pan(0.75))
  .off(0.25, x => x.note(x => x + 12).gain(0.15).pan(0.3).delay(0.3).dt(0.375))

$: note("c3 ~ ~ ~ f3 ~ ~ ~ g3 ~ ~ ~ c3 ~ ~ ~ c3 ~ ~ ~ f3 ~ ~ ~ g3 ~ ~ ~ c3 ~ ~ ~")
  .sound("sawtooth")
  .attack(0.08).decay(0.25).sustain(0.55).release(0.5)
  .lpf(sine.range(400, 900).slow(8)).lpq(5)
  .gain(0.42)
  .room(0.2)
  .pan(0.45)

$: note("<c2 c2 f2 g2>")
  .sound("sine")
  .attack(0.01).release(1.1)
  .gain(0.6)
  .slow(2)
  .fmi(sine.range(0.1, 1.2).slow(12))

$: stack(
  s("bd ~ ~ bd:1 bd ~ ~ ~").gain(0.72),
  s("~ ~ sn ~ ~ ~ sn ~").gain(0.68).room(0.2),
  s("hh*8").gain(0.38).hpf(7000).pan(sine.range(0.3, 0.7).slow(3))
).sometimes(x => x.crush(11))