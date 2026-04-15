// Goldberg Variations — reimagined ground into bold, shifting variations (evolved)

setcps(78/60/4)

samples('shabda/speech:aria,variation,again,shadow,contrapunkt,gloria')

$: arrange(
  [8, stack(
    note("g2 d3 eb3 f3 g3 f3 eb3 d3")
      .slow(2)
      .sound("piano")
      .gain(0.22)
      .hpf(60)
      .lpf(2600)
      .lpq(6)
      .room(0.18)
      .delay(0.16)
      .dt(0.375)
      .dfb(0.28),

    note("d5 c5 bb4 a4 g4 a4 bb4 c5")
      .slow(2)
      .sound("sine")
      .gain(0.11)
      .hpf(500)
      .attack(0.01)
      .release(0.25)
      .delay(0.24)
      .dt(0.5)
      .dfb(0.35)
      .room(0.3)
      .pan(0.65),

    s("bd ~ bd ~")
      .gain(0.09)
      .lpf(900)
      .room(0.08)
  )],

  [8, stack(
    note("eb2 bb2 c3 g2 ab2 eb2 f2 bb1")
      .slow(2)
      .sound("pulse")
      .gain(0.36)
      .lpf(720)
      .lpq(7)
      .drive(0.25)
      .room(0.1),

    note("<eb4 g4 bb4> <c4 eb4 g4> <ab3 c4 eb4> <bb3 d4 f4>")
      .slow(1)
      .sound("supersaw")
      .gain(0.14)
      .lpf(1800)
      .lpq(8)
      .attack(0.02)
      .release(0.4)
      .room(0.25)
      .delay(0.22)
      .dt(0.375)
      .dfb(0.4)
      .juxBy(0.5, x => x.transpose(12).gain(0.12).pan(0.85)),

    note("g4 f4 eb4 g4 bb4 c5 d5 eb5")
      .fast(4)
      .sound("triangle")
      .gain(0.09)
      .hpf(300)
      .lpf(sine.range(900, 5200).slow(4))
      .lpq(6)
      .room(0.2)
      .pan(0.3),

    s("hh*16")
      .gain(0.07)
      .hpf(6500)
      .swing(0.14),

    s("sn")
      .euclid(5, 16)
      .gain(0.075)
      .hpf(1800)
      .room(0.06),

    s("bd*4")
      .gain(0.11)
      .room(0.04)
  )],

  [8, stack(
    note("c2 g2 ab2 eb2 f2 g2 bb1 g1")
      .slow(2)
      .sound("sawtooth")
      .gain(0.34)
      .lpf(perlin.range(240, 1100).slow(2))
      .lpq(8)
      .lpenv(0.6)
      .lpattack(0.01)
      .lpdecay(0.18)
      .lpsustain(0.2)
      .lprelease(0.25)
      .distort(0.22)
      .room(0.08),

    note("eb4 f4 g4 bb4 c5 bb4 g4 f4")
      .fast(6)
      .sound("square")
      .gain(0.095)
      .hpf(500)
      .lpf(3200)
      .lpq(7)
      .phaser(0.25)
      .phaserdepth(0.6)
      .phasersweep(0.7)
      .phasercenter(900)
      .delay(0.26)
      .dt(0.25)
      .dfb(0.45)
      .room(0.16)
      .pan(0.7),

    s("rim*8")
      .gain(0.075)
      .hpf(2400)
      .delay(0.12)
      .dt(0.125)
      .dfb(0.25)
      .room(0.05),

    s("cp")
      .euclid(3, 8)
      .gain(0.07)
      .hpf(1200)
      .room(0.08)
      .off(0.5, x => x.gain(0.06).pan(0.75)),

    s("mt lt ht lt")
      .fast(2)
      .gain(0.07)
      .bpf(900)
      .bpq(6)
      .room(0.1)
  )],

  [8, stack(
    s("shadow contrapunkt gloria")
      .chop(32)
      .striate(8)
      .speed(perlin.range(0.75, 1.25).slow(2))
      .gain(0.11)
      .hpf(350)
      .bpf(1200)
      .bpq(7)
      .ring(0.35)
      .ringf(170)
      .ringdf(0.3)
      .delay(0.38)
      .dt(0.5)
      .dfb(0.5)
      .room(0.3)
      .juxBy(0.5, x => x.speed(-1).pan(0.15))
      .sometimes(x => x.rev()),

    s("bd*8")
      .gain(0.12)
      .lpf(1100)
      .room(0.05)
      .degradeBy(0.18),

    s("hh*16")
      .gain(0.065)
      .hpf(7000)
      .sometimes(x => x.ply(2).gain(0.06))
      .swing(0.18),

    s("cr")
      .euclid(3, 16)
      .gain(0.06)
      .hpf(5000)
      .room(0.18)
      .delay(0.12)
      .dt(0.375)
      .dfb(0.22),

    note("<eb5 g5 bb5> <d5 fs5 a5>")
      .slow(1)
      .sound("supersaw")
      .gain(0.12)
      .lpf(1600)
      .lpq(8)
      .attack(0.04)
      .release(0.5)
      .leslie(0.35)
      .lrate(0.6)
      .lsize(0.7)
      .room(0.22)
      .pan(0.6)
  )],

  [8, stack(
    note("g2 d3 b2 c3 a2 b2 d3 g2")
      .slow(2)
      .sound("triangle")
      .gain(0.4)
      .lpf(1400)
      .lpq(7)
      .room(0.14)
      .off(0.5, x => x.transpose(12).gain(0.11).lpf(2400).pan(0.75).delay(0.18).dt(0.375).dfb(0.28).room(0.22)),

    note("g4 b4 d5 g5 fs5 e5 d5 b4")
      .fast(4)
      .sound("piano")
      .gain(0.12)
      .hpf(220)
      .room(0.24)
      .delay(0.22)
      .dt(0.25)
      .dfb(0.38)
      .sometimesBy(0.6, x => x.palindrome()),

    note("<g4 b4 d5> <c5 e5 g5> <d5 fs5 a5> <g4 b4 d5>")
      .fast(2)
      .arp("up")
      .sound("supersaw")
      .gain(0.11)
      .lpf(sine.range(900, 3800).slow(2))
      .lpq(8)
      .room(0.25)
      .delay(0.16)
      .dt(0.375)
      .dfb(0.33)
      .pan(0.35),

    s("bd*4")
      .gain(0.12)
      .room(0.04),

    s("sn")
      .euclid(2, 8)
      .gain(0.07)
      .hpf(1600)
      .room(0.06),

    s("oh")
      .euclid(7, 16)
      .gain(0.065)
      .hpf(5200)
      .room(0.1)
  )]
)