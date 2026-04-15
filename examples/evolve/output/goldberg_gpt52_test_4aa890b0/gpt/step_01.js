// Goldberg Variations — reimagined ground into bold, shifting variations

setcps(72/60/4)

samples('shabda/speech:aria,variation,again')

$: arrange(
  [8, stack(
    note("g3 gb3 e3 d3 b2 c3 d3 g2")
      .slow(2)
      .sound("triangle")
      .gain(0.45)
      .room(0.12),

    s("hh*8")
      .gain(0.08)
      .hpf(7000)
      .room(0.05)
  )],

  [8, stack(
    note("g2 d3 eb3 f3 g3 f3 eb3 d3")
      .slow(2)
      .sound("pulse")
      .gain(0.35)
      .lpf(800)
      .lpq(6)
      .room(0.1),

    note("g4 bb4 d5 f5")
      .arp("down")
      .fast(4)
      .sound("supersaw")
      .gain(0.18)
      .lpf(2200)
      .lpq(7)
      .room(0.22)
      .delay(0.22)
      .dt(0.375)
      .dfb(0.35),

    s("bd*4")
      .gain(0.12)
      .room(0.05),

    s("sn")
      .euclid(3, 8)
      .gain(0.09)
      .hpf(1800)
  )],

  [8, stack(
    note("e2 ~ g2 b2 c3 d3 e3 g2 d2")
      .slow(2)
      .sound("square")
      .gain(0.35)
      .lpf(650)
      .lpq(7)
      .distort(0.15)
      .room(0.08),

    note("c4 e4 g4 b4 d5")
      .arp("random")
      .fast(6)
      .sound("piano")
      .gain(0.12)
      .hpf(400)
      .delay(0.28)
      .dt(0.25)
      .dfb(0.42)
      .room(0.15),

    s("hh*16")
      .gain(0.07)
      .swing(0.12)
      .hpf(6000),

    s("bd [~ bd] bd*2")
      .gain(0.14)
  )],

  [8, stack(
    s("aria variation again")
      .chop(16)
      .speed(perlin.range(0.8, 1.2).slow(4))
      .gain(0.11)
      .hpf(500)
      .delay(0.35)
      .dt(0.5)
      .dfb(0.45)
      .room(0.25)
      .juxBy(0.4, x => x.speed(-1)),

    s("cb*8")
      .gain(0.08)
      .bpf(800)
      .bpq(5)
      .room(0.1),

    note("g4 a4 b4 d5")
      .arp("up")
      .fast(8)
      .sound("triangle")
      .gain(0.09)
      .lpf(sine.range(600, 4000).slow(2))
      .lpq(6)
      .room(0.2)
  )],

  [8, stack(
    note("g2 d3 b2 c3 a2 b2 d3 g2")
      .slow(2)
      .palindrome()
      .sound("triangle")
      .gain(0.42)
      .lpf(1200)
      .lpq(5)
      .room(0.15),

    note("<g4 b4 d5> <fs4 a4 cs5>")
      .slow(1)
      .sound("piano")
      .gain(0.14)
      .room(0.25)
      .delay(0.18)
      .dt(0.375)
      .dfb(0.32),

    s("bd*4")
      .gain(0.12),

    s("oh")
      .euclid(5, 16)
      .gain(0.07)
      .hpf(5000)
  )]
)