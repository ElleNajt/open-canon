samples('shabda/speech/en-GB/f:drifting,breathe')
samples('shabda/speech/fr-FR/m:lumiere,infini')
setcps(128/60/4)

$: stack(
  stack(
    euclid(4,16,"bd").gain(0.95),
    s("~ cp").late(0.05).room(0.3).gain(0.7),
    s("hh*16").degradeBy(0.2).pan(sine.range(0.3,0.7).fast(8)),
    euclid(3,8,"rim").delay(0.4).dt("3/16").dfb(0.3).gain(0.6)
  )
    .gain(0.85)
    .drive(0.25)
    .hpf(30),

  note("c2 [~ eb2] [~ c2] f2 c2 [~ bb1] [g1 c2] ~")
    .sound("saw")
    .lpf(saw.range(150, 1400).fast(2))
    .lpq(5)
    .attack(0.01)
    .decay(0.15)
    .sustain(0)
    .release(0.1)
    .gain(0.85)
    .drive(0.4)
    .pan(0.45)
    .room(0.2),

  note("c5 eb5 g5 bb5 f4 ab4 c5 eb5").fast(2)
    .sound("pulse")
    .vowel("o a")
    .lpf(sine.range(500, 3500).slow(4))
    .lpq(3)
    .attack(0.02)
    .decay(0.1)
    .sustain(0.4)
    .release(0.3)
    .delay(0.6)
    .dt("3/8")
    .dfb(0.5)
    .gain(0.6)
    .jux(x => x.rev().pan(0.8).add(12)),

  note("c6 ~ ~ g5 ~ ~ eb6 d6 ~ ~ bb5 ~ ~ c6 ~ ~")
    .sound("sine")
    .fmi(3)
    .fmh(2)
    .attack(0.3)
    .decay(1.5)
    .sustain(0.6)
    .release(3)
    .gain(0.75)
    .room(0.95)
    .size(0.9)
    .pan(0.2)
    .jux(x => x.add(7).late(0.33).pan(0.85)),

  s("drifting infini breathe lumiere")
    .chop(8)
    .iter(4)
    .speed(0.8)
    .bpf(1500)
    .bpq(5)
    .gain(0.8)
    .delay(0.5)
    .dt("1/4")
    .dfb(0.6)
    .room(0.7)
    .jux(x => x.speed(1.2).striate(16))
)