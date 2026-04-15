samples('shabda/speech/en-GB/f:drifting,breathe')
samples('shabda/speech/fr-FR/m:lumiere,infini')
setcps(128/60/4)

$: stack(
  stack(
    euclid(5,16,"bd").gain(0.9).swing(0.15),
    s("~ [sn cp]").late(0.04).room(0.35).gain(0.65),
    s("hh*8, oh*8").degradeBy(0.18).pan(perlin.range(0.25,0.75).fast(6)).phaser(0.6),
    euclid(2,8,"rim").delay(0.35).dt("1/8").dfb(0.35).gain(0.55)
  )
    .gain(0.82)
    .drive(0.35)
    .hpf(35),

  note("eb2 [g2 bb2] eb3 g3 [bb3 db4] eb4 [g4 bb4] ~")
    .sound("sawtooth")
    .lpf(tri.range(120, 1300).slow(3))
    .lpq(4.5)
    .attack(0.015)
    .decay(0.12)
    .sustain(0)
    .release(0.12)
    .gain(0.8)
    .drive(0.45)
    .pan(0.42)
    .room(0.25)
    .jux(x => x.rev().add(12).late(0.125)),

  note("[eb3 g3 bb3] [db3 f3 ab3] [c3 eb3 g3] [bb2 db3 f3]")
    .voicing()
    .sound("supersaw")
    .slow(2)
    .detune(25)
    .lpf(700)
    .lpq(2.5)
    .attack(0.8)
    .decay(1.8)
    .sustain(0.6)
    .release(2.5)
    .gain(0.55)
    .room(0.98)
    .size(0.92)
    .leslie(0.7)
    .pan(sine.range(0.3,0.7).slow(12)),

  note("g6 ~ bb6 ~ eb7 ~ db7 ~ [bb6 g6] ~ [eb6 bb5] ~")
    .sound("sine")
    .fmi(4)
    .fmh(1.5)
    .attack(0.25)
    .decay(1.2)
    .sustain(0.7)
    .release(2.8)
    .gain(0.7)
    .room(0.92)
    .size(0.88)
    .pan(0.18)
    .jux(x => x.add(5).late(0.25).pan(0.82)),

  s("breathe*2 drifting [infini lumiere]")
    .chop(rand.range(6,14))
    .iter(3)
    .speed(perlin.range(0.75,1.25))
    .bpf(cosine.range(900,2800).fast(5))
    .bpq(7)
    .gain(0.82)
    .delay(0.45)
    .dt("1/8")
    .dfb(0.65)
    .room(0.65)
    .jux(x => x.speed(-1).striate(12).pan(0.95))
)