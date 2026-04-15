setcps(72/60/4)

samples('shabda/speech:quodlibet,da_capo,variatio,clavier,fugue,mirror,ghost,listen')

$: arrange(
  [8, stack(
    note("g3 d3 eb3 fs3 g3 ~ fs3 d3")
      .slow(2)
      .sound("triangle")
      .gain(0.42)
      .lpf(1200)
      .lpq(3)
      .room(0.25),

    note("d5 c5 bb4 a4 g4 a4 bb4 d5")
      .slow(2)
      .sound("piano")
      .gain(0.22)
      .attack(0.01)
      .release(0.4)
      .room(0.35)
      .delay(0.22)
      .dt(0.375)
      .dfb(0.25)
      .jux(x => x.rev()),

    s("cb ~ cb ~")
      .slow(2)
      .gain(0.11)
      .hpf(2500)
      .room(0.2),

    s("hh*8")
      .slow(2)
      .gain(0.075)
      .hpf(7500)
      .degradeBy(0.25),

    s("listen ghost")
      .slow(8)
      .chop(16)
      .speed(rand.range(0.9, 1.05))
      .gain(0.12)
      .vowel("o u a")
      .room(0.45)
      .roomlp(2500)
  )],

  [8, stack(
    note("[bb2 f2] [g2 eb2] [bb2 f2] [a2 f2]")
      .sound("pulse")
      .gain(0.32)
      .lpf(1000)
      .lpq(5)
      .attack(0.005)
      .release(0.08)
      .swing(0.12),

    note("bb3 f3 g3 eb3")
      .chord("major minor minor major")
      .slow(2)
      .sound("piano")
      .voicing()
      .gain(0.2)
      .room(0.3)
      .off(0.5, x => x.transpose(12).gain(0.12).delay(0.25).dt(0.25).dfb(0.35)),

    note("f5 g5 a5 c6 bb5 a5 g5 f5")
      .sound("sawtooth")
      .gain(0.13)
      .lpf(sine.range(700, 4200).slow(4))
      .lpq(6)
      .attack(0.01)
      .release(0.2)
      .delay(0.3)
      .dt(0.25)
      .dfb(0.45)
      .pan(0.65),

    s("bd*4")
      .gain(0.22)
      .drive(0.12),

    s("sn")
      .euclid(5, 16)
      .gain(0.16)
      .room(0.12),

    s("hh")
      .euclid(11, 16)
      .gain(0.085)
      .hpf(6500)
      .swing(0.12)
  )],

  [8, stack(
    note("g2 [~ g2] d2 [eb2 fs2] g2 [a2 bb2] d2 [~ d2]")
      .sound("square")
      .gain(0.32)
      .lpf(850)
      .lpq(6)
      .drive(0.25)
      .attack(0.01)
      .release(0.12)
      .swing(0.1),

    note("g4 bb4 d5 fs5 g5 fs5 d5 bb4 a4 bb4 d5 g5")
      .sound("supersaw")
      .fast(2)
      .gain(0.11)
      .lpf(saw.range(900, 5200).slow(2))
      .lpq(7)
      .delay(0.35)
      .dt(0.125)
      .dfb(0.5)
      .room(0.25)
      .juxBy(0.7, x => x.rev().pan(0.2)),

    s("bd [~ bd] bd bd")
      .fast(2)
      .gain(0.24)
      .drive(0.15),

    s("cp")
      .euclid(3, 8)
      .gain(0.19)
      .room(0.18)
      .off(0.25, x => x.gain(0.12)),

    s("hh*16")
      .gain(0.08)
      .hpf(7000)
      .degradeBy(0.35),

    s("quodlibet variatio")
      .slow(4)
      .chop(32)
      .speed(rand.range(0.8, 1.2))
      .gain(0.14)
      .crush(6)
      .hpf(300)
      .room(0.3)
      .jux(x => x.rev())
  )],

  [8, stack(
    note("g2 ~ d3 ~ eb3 ~ d3 ~")
      .slow(2)
      .sound("sine")
      .gain(0.28)
      .fm(2.2)
      .fmh(2)
      .fmenv(0.9)
      .fmattack(0.02)
      .fmdecay(0.5)
      .fmsustain(0.2)
      .fmrelease(1.2)
      .lpf(sine.range(180, 1200).slow(6))
      .lpq(4)
      .phaser(0.08)
      .phaserdepth(0.7)
      .phasercenter(700)
      .room(0.55)
      .roomlp(2200),

    note("bb4 a4 g4 fs4 g4 d4 eb4 d4")
      .slow(2)
      .sound("piano")
      .gain(0.16)
      .attack(0.02)
      .release(0.6)
      .hpf(200)
      .delay(0.4)
      .dt(0.375)
      .dfb(0.55)
      .room(0.35)
      .jux(x => x.rev()),

    s("cr ~ ~ ~")
      .slow(2)
      .gain(0.08)
      .hpf(5000)
      .room(0.6)
  )],

  [8, stack(
    s("mirror fugue mirror fugue")
      .fast(2)
      .chop(16)
      .speed(rand.range(0.7, 1.3))
      .sometimes(x => x.speed(-1))
      .gain(0.16)
      .ring(0.55)
      .ringf(220)
      .ringdf(0.25)
      .crush(5)
      .hpf(350)
      .delay(0.25)
      .dt(0.125)
      .dfb(0.35)
      .room(0.25),

    s("bd")
      .euclid(7, 16)
      .gain(0.21)
      .drive(0.18),

    s("sn")
      .euclid(3, 8)
      .gain(0.15)
      .room(0.2),

    s("hh")
      .euclid(9, 16)
      .gain(0.08)
      .hpf(8000),

    note("d4 eb4 fs4 g4 a4 g4 fs4 eb4")
      .sound("triangle")
      .gain(0.14)
      .lpf(1600)
      .lpq(4)
      .tremolo(0.4)
      .tremolosync(6)
      .room(0.28)
      .pan(0.35),

    note("g4 bb4 d5 g5")
      .chord("minor minor minor minor")
      .slow(2)
      .sound("piano")
      .voicing()
      .gain(0.18)
      .room(0.4)
      .delay(0.2)
      .dt(0.25)
      .dfb(0.3)
  )],

  [8, stack(
    note("g3 d3 eb3 fs3 g3 a3 bb3 d4")
      .slow(2)
      .transpose(5)
      .sound("triangle")
      .gain(0.4)
      .lpf(1400)
      .lpq(3)
      .room(0.25),

    note("d5 c5 bb4 a4 g4 a4 bb4 d5")
      .slow(2)
      .transpose(5)
      .sound("piano")
      .gain(0.2)
      .attack(0.01)
      .release(0.35)
      .room(0.35)
      .jux(x => x.rev()),

    note("g5 a5 bb5 d6 c6 bb5 a5 g5 fs5 g5 a5 c6")
      .fast(2)
      .transpose(5)
      .sound("supersaw")
      .gain(0.12)
      .lpf(saw.range(1200, 6500).slow(2))
      .lpq(7)
      .drive(0.12)
      .leslie(0.5)
      .lrate(0.6)
      .lsize(0.7)
      .delay(0.4)
      .dt(0.25)
      .dfb(0.5)
      .room(0.3)
      .off(0.5, x => x.transpose(12).gain(0.09).pan(0.25)),

    s("bd*4")
      .gain(0.24)
      .drive(0.16),

    s("sn")
      .euclid(5, 16)
      .gain(0.17)
      .room(0.12),

    s("hh*16")
      .gain(0.085)
      .hpf(7500)
      .degradeBy(0.25)
      .swing(0.1),

    s("da_capo clavier")
      .slow(4)
      .chop(32)
      .speed(rand.range(0.9, 1.15))
      .gain(0.13)
      .hpf(500)
      .room(0.4)
      .delay(0.25)
      .dt(0.375)
      .dfb(0.35)
  )]
)
.compressor("0.55:3:0.2:0.01:0.12")