samples('shabda/speech/en-GB/f:drifting,breathe')
samples('shabda/speech/de-DE/m:achtung,fokus,energie')
setcps(128/60/4)

$: stack(
  stack(
    s("[bd bd ~ bd]*2").gain(0.95),
    s("~ [cp cp cp ~]").late(0.03).room(0.3).gain(0.8),
    s("hh*8").pan(perlin.range(0.25, 0.75).fast(3)).gain(0.7).swing(0.05),
    euclid(4, 8, "lt").gain(0.65).room(0.25).pan(0.25),
    euclid(9, 16, "mt").gain(0.45).delay(0.25).dt("1/8").dfb(0.35).pan(0.75)
  )
    .gain(0.82)
    .distort(0.25)
    .hpf(35),

  note("c2 [e2 g2] c3 <a2 c3> [e3 g3] f2 [g2 b2] ~")
    .sound("sawtooth")
    .lpf(sine.range(180, 2500).fast(6))
    .lpq(7)
    .attack(0.008)
    .decay(0.12)
    .sustain(0)
    .release(0.12)
    .gain(0.8)
    .drive(0.4)
    .pan(0.45)
    .ring(0.3)
    .jux(x => x.add(12).early(0.12).pan(0.55).gain(0.62)),

  note("[c4 e4 g4 b4] [f4 a4 c5 e5] [g4 b4 d5 f5] [a3 c4 e4 g4]")
    .voicing()
    .sound("piano")
    .slow(2)
    .detune(15)
    .lpf(3400)
    .lpq(5)
    .attack(0.005)
    .decay(0.45)
    .sustain(0.55)
    .release(1.3)
    .gain(0.55)
    .room(0.88)
    .size(0.85)
    .pan(sine.range(0.3, 0.7).slow(5)),

  note("g5 ~ c6 ~ e6 ~ g6 ~ [b6 d7] ~ [c7 ~ a6] ~")
    .sound("sine")
    .fmi(saw.range(1.5, 5.5))
    .fmh(1.5)
    .attack(0.015)
    .decay(0.35)
    .sustain(0.15)
    .release(0.55)
    .gain(0.75)
    .room(0.75)
    .size(0.8)
    .pan(0.15)
    .echo(4, 0.25, 0.4)
    .jux(x => x.add(12).late(0.2).pan(0.85)),

  s("[breathe drifting] [achtung energie] fokus")
    .chop(rand.range(5, 14))
    .sometimes(x => x.rev())
    .speed(perlin.range(0.75, 1.35))
    .lpf(2200)
    .gain(0.82)
    .delay(0.45)
    .dt("1/5")
    .dfb(0.55)
    .room(0.65)
    .jux(x => x.striate(10).speed(1.7).pan(0.88).gain(0.68))
)