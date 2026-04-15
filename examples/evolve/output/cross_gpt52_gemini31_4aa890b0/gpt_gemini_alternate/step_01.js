// Goldberg Variations — recomposed ground into bold variations

setcps(72/60/4)

samples('shabda/speech:goldberg,variations,again,listen')

$: arrange(
  [8, stack(
    note("g3 gb3 e3 d3 b2 c3 d3 g2")
      .slow(2)
      .sound("triangle")
      .gain(0.45)
      .room(0.12),

    note("d4 ~ g4 ~ b3 ~ d4 ~")
      .slow(2)
      .sound("piano")
      .gain(0.22)
      .hold(0.12)
      .room(0.2),

    s("rim ~ ~ ~")
      .slow(2)
      .gain(0.12)
      .room(0.05)
  )],

  [8, stack(
    note("[g3 gb3] [e3 d3] [b2 c3] [d3 g2]")
      .slow(1)
      .sound("pulse")
      .gain(0.35)
      .lpf(1200)
      .lpq(4)
      .attack(0.01)
      .release(0.12),

    note("g4 a4 b4 d5 c5 b4 a4 g4")
      .fast(2)
      .sound("piano")
      .gain(0.18)
      .room(0.25)
      .swing(0.12),

    s("bd*4")
      .gain(0.25),

    s("hh")
      .euclid(11,16)
      .fast(4)
      .gain(0.12)
      .hpf(7000),

    s("sn")
      .euclid(5,16)
      .fast(2)
      .gain(0.16)
      .room(0.1)
  )],

  [8, stack(
    note("g3 f3 eb3 d3 c3 bb2 c3 g2")
      .slow(2)
      .sound("sine")
      .gain(0.4)
      .lpf(sine.range(200,1200).slow(4))
      .lpq(6)
      .room(0.18),

    note("bb3 c4 d4 eb4 f4 g4 f4 eb4")
      .slow(1)
      .sound("triangle")
      .gain(0.14)
      .hpf(120)
      .room(0.3)
      .delay(0.25)
      .dt(0.375)
      .dfb(0.35),

    s("oh ~")
      .slow(1)
      .gain(0.1)
      .hpf(5000)
      .room(0.25)
  )],

  [8, stack(
    note("g2 <gb2 g2> e2 d2 b1 c2 d2 g1")
      .fast(2)
      .sound("square")
      .gain(0.32)
      .lpf(900)
      .lpq(5)
      .drive(0.25)
      .swing(0.16),

    note("g4 b4 d5 g5")
      .sound("supersaw")
      .arp("up")
      .fast(4)
      .gain(0.12)
      .lpf(saw.range(600,4000).slow(2))
      .lpq(7)
      .room(0.25)
      .delay(0.35)
      .dt(0.25)
      .dfb(0.45),

    s("bd bd [~ bd] bd")
      .fast(2)
      .gain(0.28)
      .drive(0.15),

    s("cr*8")
      .fast(2)
      .gain(0.08)
      .hpf(6000),

    s("goldberg variations again listen")
      .slow(8)
      .chop(16)
      .speed(rand.range(0.85,1.15))
      .gain(0.14)
      .vowel("a e i o u")
      .room(0.35)
      .delay(0.4)
      .dt(0.25)
      .dfb(0.4)
  )]
)
.compressor("0.55:3:0.2:0.01:0.12")