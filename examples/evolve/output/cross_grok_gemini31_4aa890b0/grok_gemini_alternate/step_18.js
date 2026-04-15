samples('shabda/speech/en-GB/f:drifting,breathe')
samples('shabda/speech/fr-FR/m:lumiere,infini')
setcps(110/60/4)

$: stack(
  stack(
    euclid(5,16,"bd"),
    s("~ cp ~ [cp rim]"),
    s("hh*16").degradeBy(0.4).pan(rand)
  )
    .gain(0.82)
    .shape(0.35)
    .lpf(7500)
    .drive(0.2),

  note("c2 [~ eb2] ~ g1 ~ [f1 c2] d2 ~")
    .sound("saw")
    .lpf(sine.range(200, 1500).fast(2))
    .lpq(5)
    .attack(0.02)
    .decay(0.3)
    .sustain(0.1)
    .release(0.15)
    .gain(0.65)
    .drive(0.4)
    .pan(0.5),

  note("c5 eb5 [g5 ~ g5] f5 ~ d5 ~ [eb5 ~ c5]")
    .sound("sine")
    .fmi(perlin.range(1, 4).slow(2))
    .fmh(2.01)
    .attack(0.01)
    .decay(0.25)
    .sustain(0)
    .gain(0.6)
    .room(0.7)
    .size(0.85)
    .delay(0.5)
    .dt("3/16")
    .dfb(0.4)
    .pan(sine.range(0.2, 0.8).slow(3)),

  note("c4 eb4 g4 ab4")
    .slow(4)
    .sound("piano")
    .rev()
    .room(0.9)
    .size(0.9)
    .gain(0.55)
    .crush(9)
    .hpf(400)
    .lpf(2800),

  s("infini*4")
    .chop(8)
    .speed(0.6)
    .gain(0.65)
    .room(0.5)
    .jux(x => x.hurry(1.5).pan(0.85).rev()),

  s("breathe ~ drifting ~")
    .slow(2)
    .striate(12)
    .speed(saw.range(0.8, 1.2).slow(4))
    .gain(0.75)
    .pan(0.3)
    .delay(0.4)
    .dt("1/4")
    .dfb(0.3)
)