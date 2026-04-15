// Goldberg Variations — reimagined ground into bold, shifting variations (evolved)

setcps(78/60/4)

samples('shabda/speech:aria,variation,again,shadow,contrapunkt,gloria,mirror,cadence,awake')

$: arrange(
  [8, stack(
    note("g2 ~ d3 eb3 f3 g3 ~ f3 d3")
      .slow(2)
      .sound("piano")
      .gain(0.2)
      .hpf(55)
      .lpf(2400)
      .lpq(6)
      .room(0.22)
      .delay(0.12)
      .dt(0.375)
      .dfb(0.22),

    note("bb4 a4 g4 d5 c5 bb4 a4 g4")
      .slow(1)
      .sound("sine")
      .gain(0.105)
      .hpf(480)
      .attack(0.005)
      .release(0.3)
      .delay(0.28)
      .dt(0.5)
      .dfb(0.42)
      .room(0.32)
      .pan(0.7)
      .sometimes(x => x.palindrome()),

    s("cb ~ cb [cb cb] ~")
      .fast(2)
      .gain(0.07)
      .hpf(1400)
      .delay(0.16)
      .dt(0.25)
      .dfb(0.25)
      .room(0.12)
      .pan(0.4),

    s("bd ~ ~ bd")
      .gain(0.09)
      .lpf(900)
      .room(0.08)
  )],

  [8, stack(
    note("c2 g2 ab2 g2 f2 eb2 d2 g1")
      .slow(2)
      .sound("pulse")
      .gain(0.36)
      .lpf(680)
      .lpq(7)
      .drive(0.28)
      .room(0.1),

    note("<c4 eb4 g4> <ab3 c4 eb4> <f3 ab3 c4> <g3 bb3 d4>")
      .slow(1)
      .sound("piano")
      .gain(0.16)
      .hpf(120)
      .lpf(3200)
      .lpq(6)
      .attack(0.01)
      .release(0.55)
      .room(0.28)
      .delay(0.18)
      .dt(0.375)
      .dfb(0.35)
      .off(0.5, x => x.transpose(12).gain(0.09).pan(0.82).delay(0.22).dt(0.25).dfb(0.32).room(0.22)),

    note("g4 ab4 g4 f4 eb4 d4 c4 d4")
      .fast(4)
      .sound("triangle")
      .gain(0.085)
      .hpf(260)
      .lpf(sine.range(800, 4600).slow(4))
      .lpq(6)
      .room(0.2)
      .pan(0.25)
      .sometimes(x => x.rev()),

    s("[bd bd] ~ bd ~")
      .gain(0.12)
      .lpf(1200)
      .room(0.05),

    s("rim*8")
      .gain(0.07)
      .hpf(2200)
      .delay(0.14)
      .dt(0.125)
      .dfb(0.22)
      .room(0.08)
      .swing(0.16),

    s("sn")
      .euclid(3, 8)
      .gain(0.075)
      .hpf(1600)
      .room(0.08)
      .off(0.5, x => x.gain(0.065).pan(0.7))
  )],

  [8, stack(
    note("c2 bb1 ab1 g1 f1 g1 ab1 bb1")
      .slow(1)
      .sound("sawtooth")
      .gain(0.34)
      .lpf(perlin.range(220, 1400).slow(2))
      .lpq(8)
      .lpenv(0.65)
      .lpattack(0.01)
      .lpdecay(0.16)
      .lpsustain(0.18)
      .lprelease(0.22)
      .distort(0.28)
      .room(0.07),

    note("<eb4 g4 bb4 d5> <f4 ab4 c5 eb5> <g4 bb4 d5 f5> <d4 f4 ab4 c5>")
      .fast(4)
      .arp("random")
      .sound("square")
      .gain(0.095)
      .hpf(520)
      .lpf(3600)
      .lpq(7)
      .phaser(0.32)
      .phaserdepth(0.7)
      .phasersweep(0.75)
      .phasercenter(950)
      .delay(0.26)
      .dt(0.25)
      .dfb(0.48)
      .room(0.16)
      .pan(0.68)
      .sometimesBy(0.5, x => x.ply(2).gain(0.075)),

    s("hh*16")
      .gain(0.065)
      .hpf(6500)
      .swing(0.18)
      .sometimesBy(0.45, x => x.ply(2).gain(0.058)),

    s("sn")
      .euclid(5, 16)
      .gain(0.075)
      .hpf(1900)
      .room(0.06),

    s("bd*4")
      .gain(0.12)
      .room(0.04)
      .sometimesBy(0.35, x => x.ply(2).gain(0.11)),

    s("cr")
      .euclid(2, 16)
      .gain(0.06)
      .hpf(5200)
      .room(0.18)
      .delay(0.1)
      .dt(0.375)
      .dfb(0.2)
  )],

  [8, stack(
    s("shadow mirror cadence awake")
      .chop(48)
      .striate(12)
      .speed(perlin.range(0.7, 1.35).slow(2))
      .gain(0.115)
      .hpf(320)
      .bpf(sine.range(700, 2400).slow(4))
      .bpq(7)
      .ring(0.38)
      .ringf(155)
      .ringdf(0.32)
      .delay(0.42)
      .dt(0.5)
      .dfb(0.52)
      .room(0.34)
      .juxBy(0.5, x => x.speed(-1).pan(0.12).gain(0.105))
      .sometimes(x => x.rev()),

    note("g2 ~ g2 ~ g2 ~ g2 ~")
      .slow(1)
      .sound("sine")
      .gain(0.085)
      .lpf(180)
      .attack(0.01)
      .release(0.4)
      .tremolo(0.35)
      .tremolosync(6)
      .room(0.25)
      .pan(0.52),

    note("<c4 eb4 g4 bb4> ~ <bb3 d4 f4 ab4> ~")
      .slow(2)
      .sound("supersaw")
      .gain(0.12)
      .lpf(sine.range(600, 2200).slow(8))
      .lpq(8)
      .attack(0.08)
      .release(1)
      .leslie(0.3)
      .lrate(0.45)
      .lsize(0.75)
      .room(0.3)
      .delay(0.18)
      .dt(0.375)
      .dfb(0.36)
      .pan(0.6)
  )],

  [8, stack(
    note("g2 d3 e3 fs3 g3 a3 b2 d3")
      .slow(2)
      .sound("triangle")
      .gain(0.38)
      .lpf(1600)
      .lpq(7)
      .room(0.14)
      .off(0.5, x => x.transpose(12).gain(0.11).lpf(2800).pan(0.78).delay(0.18).dt(0.375).dfb(0.28).room(0.24)),

    note("d5 b4 g4 a4 b4 d5 e5 fs5")
      .fast(2)
      .sound("piano")
      .gain(0.13)
      .hpf(220)
      .room(0.22)
      .delay(0.2)
      .dt(0.25)
      .dfb(0.34)
      .sometimesBy(0.55, x => x.palindrome()),

    note("<g4 b4 d5> <d4 fs4 a4> <e4 g4 b4> <c4 e4 g4>")
      .fast(2)
      .arp("up")
      .sound("supersaw")
      .gain(0.12)
      .lpf(sine.range(1000, 4200).slow(2))
      .lpq(8)
      .attack(0.02)
      .release(0.5)
      .room(0.26)
      .delay(0.16)
      .dt(0.375)
      .dfb(0.33)
      .pan(0.35),

    s("bd*4")
      .gain(0.12)
      .room(0.04),

    s("cp")
      .euclid(4, 8)
      .gain(0.07)
      .hpf(1200)
      .room(0.1)
      .off(0.5, x => x.gain(0.06).pan(0.75)),

    s("oh")
      .euclid(9, 16)
      .gain(0.065)
      .hpf(5200)
      .room(0.12)
      .swing(0.12)
  )],

  [8, stack(
    note("g2 f2 eb2 d2 c2 d2 eb2 f2")
      .slow(4)
      .sound("piano")
      .gain(0.18)
      .hpf(50)
      .lpf(2100)
      .lpq(6)
      .room(0.28)
      .delay(0.16)
      .dt(0.5)
      .dfb(0.28),

    s("aria variation again")
      .slow(2)
      .chop(24)
      .striate(6)
      .speed(perlin.range(0.85, 1.2).slow(2))
      .gain(0.11)
      .hpf(300)
      .bpf(1300)
      .bpq(7)
      .delay(0.34)
      .dt(0.375)
      .dfb(0.45)
      .room(0.36)
      .sometimes(x => x.rev())
      .juxBy(0.5, x => x.speed(-1).pan(0.18).gain(0.1)),

    s("hh*16")
      .gain(0.06)
      .hpf(7200)
      .degradeBy(0.35)
      .swing(0.2),

    s("bd ~ ~ bd")
      .gain(0.11)
      .lpf(950)
      .room(0.08)
      .degradeBy(0.25),

    s("cr")
      .euclid(1, 16)
      .gain(0.06)
      .hpf(4500)
      .room(0.22)
      .delay(0.12)
      .dt(0.5)
      .dfb(0.25)
  )]
)