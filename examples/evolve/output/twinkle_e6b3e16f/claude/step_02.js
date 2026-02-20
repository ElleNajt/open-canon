setcps(76/60/4)

$: note("c4 c4 g4 g4 a4 a4 g4 ~ f4 f4 e4 e4 d4 d4 c4 ~ g4 g4 f4 f4 e4 e4 d4 ~ g4 g4 f4 f4 e4 e4 d4 ~ c4 c4 g4 g4 a4 a4 g4 ~ f4 f4 e4 e4 d4 d4 c4 ~")
  .sound("triangle")
  .attack(0.02).release(0.25)
  .lpf(sine.range(1200, 3400).slow(16))
  .room(0.5).size(0.7)
  .gain(0.65)
  .off(0.125, x => x.note(x => x + 7).gain(0.3).pan(0.75))

$: note("c3 ~ ~ ~ f3 ~ ~ ~ g3 ~ ~ ~ c3 ~ ~ ~ c3 ~ ~ ~ f3 ~ ~ ~ g3 ~ ~ ~ c3 ~ ~ ~")
  .sound("sawtooth")
  .attack(0.08).decay(0.2).sustain(0.6).release(0.4)
  .lpf(600).lpq(4)
  .gain(0.45)
  .room(0.15)
  .pan(0.4)

$: note("<c2 c2 f2 g2>")
  .sound("sine")
  .attack(0.01).release(0.8)
  .gain(0.55)
  .slow(2)

$: stack(
  s("bd ~ ~ ~ bd ~ ~ ~").gain(0.7),
  s("~ ~ sn ~ ~ ~ sn ~").gain(0.7),
  s("hh*8").gain(0.45).hpf(6000)
).room(0.12).sometimes(x => x.crush(10))