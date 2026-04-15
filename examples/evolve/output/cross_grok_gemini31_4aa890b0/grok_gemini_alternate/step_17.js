samples('shabda/speech/en-GB/f:drifting,breathe')
samples('shabda/speech/fr-FR/m:lumiere,infini')
setcps(120/60/4)

$: stack(
  stack(
    euclid(5,16,"bd").gain(0.95),
    euclid(3,16,"cp").gain(0.7).room(0.4),
    euclid(7,16,"rim").gain(0.6).pan(0.3)
  )
    .lpf(5500)
    .shape(0.25)
    .drive(0.15)
    .crush(14),

  note("eb2 g2 bb2 eb3 f3 ab2 g2 bb2")
    .fast(2)
    .sound("pulse")
    .lpf(tri.range(150, 2200).slow(4))
    .lpq(4)
    .attack(0.01)
    .decay(0.2)
    .sustain(0)
    .release(0.25)
    .gain(0.5)
    .distort(0.25)
    .pan(0.4),

  note("eb4 g4 bb4 d5 f5 ab5 c6 bb5")
    .fast(2)
    .sound("triangle")
    .attack(0.025)
    .decay(0.08)
    .sustain(0.7)
    .release(0.8)
    .gain(0.5)
    .hpf(180)
    .lpf(3500)
    .room(0.65)
    .jux(x => x.rev().transpose(7).pan(0.85)),

  s("drifting breathe ~ lumiere")
    .slow(2)
    .speed(perlin.range(0.75, 1.15).slow(2))
    .gain(0.75)
    .room(0.88)
    .roomsize(0.75)
    .delay(0.4)
    .dt("1/4")
    .dfb(0.3)
    .hpf(220)
    .jux(x => x.speed(1.1).late(0.15).pan(0.8)),

  s("~ infini drifting infini")
    .slow(4)
    .degradeBy(0.3)
    .gain(0.55)
    .room(0.92)
    .striate(16)
    .speed(saw.range(0.4, 0.8).slow(3))
    .pan(rand.range(0.2, 0.8))
    .phaser(0.35)
    .phasersweep(200)
    .jux(x => x.hurry(1.8).late(0.12)),

  note("eb2~ bb2")
    .slow(8)
    .sound("sine")
    .lpf(320)
    .lpq(2.5)
    .gain(0.28)
    .attack(1.5)
    .decay(0.4)
    .sustain(0.5)
    .release(4)
    .pan(sine.slow(12))
)