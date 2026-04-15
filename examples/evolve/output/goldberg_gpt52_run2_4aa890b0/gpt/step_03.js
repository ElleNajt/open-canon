// Goldberg Variations — personality drift (rewritten): fractures, modulations, and a new spine

setcps(84/60/4)

samples('shabda/speech:goldberg,again,turn_the_page,fracture,new_spine')
samples('shabda/speech/fr-FR/m:encore,variation,la_nuit')
samples('shabda/speech/ja-JP/f:yume')

$: arrange(
  [4, stack(
    note("g2 d3 eb3 d3 gb2 d3 c3 b2")
      .slow(1)
      .sound("triangle")
      .gain(0.52)
      .lpf(1500)
      .lpq(7.5)
      .room(0.14),

    s("bd")
      .euclid(5, 8)
      .gain(0.18)
      .room(0.06),

    s("hh*8")
      .gain(0.1)
      .hpf(6500)
      .swing(0.08)
      .room(0.05),

    s("goldberg")
      .slow(2)
      .chop(16)
      .speed(rand.range(0.85, 1.15))
      .gain(0.06)
      .hpf(280)
      .lpf(3000)
      .room(0.22)
  )],

  [4, stack(
    note("[eb3 g3 bb3] [f3 a3 c4] [gb3 bb3 db4] [f3 a3 c4]")
      .slow(1)
      .sound("piano")
      .gain(0.34)
      .delay(0.26)
      .dt(0.375)
      .dfb(0.32)
      .room(0.26),

    note("eb2 bb1 c2 db2")
      .slow(1)
      .sound("square")
      .gain(0.21)
      .lpf(sine.range(260, 2200).slow(4))
      .lpq(8.5)
      .room(0.1),

    s("sn")
      .euclid(3, 8)
      .fast(2)
      .gain(0.11)
      .hpf(1500)
      .room(0.1),

    s("hh*16")
      .gain(0.09)
      .hpf(7200)
      .degradeBy(0.25)
      .room(0.06)
  )],

  [4, stack(
    note("c3 eb3 g3 bb3")
      .slow(2)
      .sound("supersaw")
      .gain(0.26)
      .lpf(saw.range(140, 2400).slow(6))
      .lpq(9)
      .drive(0.34)
      .room(0.36),

    s("cp [~ cp] cp ~")
      .slow(1)
      .gain(0.09)
      .hpf(1400)
      .room(0.12),

    s("mt*8")
      .slow(1)
      .gain(0.08)
      .hpf(1800)
      .degradeBy(0.25)
      .room(0.1),

    s("encore fracture")
      .slow(2)
      .chop(32)
      .speed(rand.range(-1.2, 1.2))
      .gain(0.07)
      .hpf(240)
      .lpf(3400)
      .delay(0.32)
      .dt(0.25)
      .dfb(0.48)
      .room(0.4)
  )],

  [4, stack(
    n("0 2 4 7 9 11 9 7")
      .scale("Bb:major")
      .sound("pulse")
      .slow(1)
      .octave(6)
      .gain(0.16)
      .hpf(950)
      .attack(0.005)
      .release(0.11)
      .juxBy(0.35, x => x.pan(0.12).delay(0.2).dt(0.375).dfb(0.22))
      .pan(perlin.range(0.2, 0.8).slow(3))
      .delay(0.22)
      .dt(0.375)
      .dfb(0.3)
      .room(0.16),

    note("bb2 f3 g3 d3 eb3 c3 bb2 ~")
      .slow(1)
      .sound("triangle")
      .gain(0.32)
      .hpf(110)
      .lpf(1250)
      .lpq(7)
      .room(0.2),

    s("bd [~ bd] bd ~")
      .slow(1)
      .gain(0.19)
      .drive(0.18)
      .room(0.06),

    s("oh")
      .euclid(3, 8)
      .slow(1)
      .gain(0.07)
      .hpf(5200)
      .degradeBy(0.35)
      .room(0.18),

    note("d5 f5 a5 g5")
      .slow(2)
      .sound("sine")
      .gain(0.06)
      .ring(0.35)
      .ringf(1200)
      .hpf(700)
      .delay(0.25)
      .dt(0.25)
      .dfb(0.35)
      .room(0.2)
  )],

  [4, stack(
    note("g2")
      .slow(1)
      .sound("sine")
      .gain(0.2)
      .vowel("u o a e i")
      .ring(0.25)
      .ringf(sine.range(90, 420).slow(6))
      .lpf(sine.range(140, 1200).slow(8))
      .lpq(8.5)
      .room(0.6)
      .size(0.92)
      .roomlp(2200),

    note("d4 e4 gb4 a4 bb4 a4 gb4 e4")
      .slow(4)
      .sound("piano")
      .gain(0.19)
      .attack(0.02)
      .release(0.8)
      .phaser(0.25)
      .phaserdepth(0.75)
      .phasersweep(0.7)
      .phasercenter(900)
      .delay(0.4)
      .dt(0.5)
      .dfb(0.55)
      .room(0.5),

    s("oh")
      .euclid(3, 16)
      .gain(0.06)
      .hpf(5200)
      .degradeBy(0.55)
      .room(0.35),

    s("la_nuit yume")
      .slow(8)
      .chop(32)
      .speed(rand.range(0.5, 0.9))
      .gain(0.06)
      .hpf(260)
      .lpf(2400)
      .room(0.6)
  )],

  [4, stack(
    s("bd*4")
      .gain(0.24)
      .drive(0.35)
      .distort(0.3)
      .compressor("0.6:4:0.2:0.01:0.12")
      .room(0.08),

    s("sn")
      .euclid(7, 16)
      .gain(0.13)
      .hpf(1800)
      .room(0.08),

    s("hh*32")
      .gain(0.09)
      .hpf(6500)
      .crush(6)
      .degradeBy(0.25)
      .room(0.05),

    note("g2 ~ g2 a2 bb2 ~ c3 d3")
      .slow(1)
      .sound("supersaw")
      .gain(0.24)
      .lpf(saw.range(110, 1500).slow(2))
      .lpq(9)
      .drive(0.42)
      .slide(0.25)
      .delay(0.18)
      .dt(0.25)
      .dfb(0.28)
      .room(0.18),

    n("0 7 6 4 3 2 1")
      .scale("G:minor")
      .sound("sine")
      .fast(2)
      .octave(7)
      .gain(0.07)
      .fm(3.2)
      .fmh(2)
      .fmenv(0.8)
      .fmattack(0.01)
      .fmdecay(0.12)
      .fmsustain(0)
      .fmrelease(0.02)
      .hpf(1200)
      .pan(perlin.range(0.1, 0.9).slow(1))
      .delay(0.2)
      .dt(0.375)
      .dfb(0.24)
      .room(0.14)
  )],

  [4, stack(
    note("[g3 bb3 d4] [a3 c4 e4] [bb3 d4 f4] [g3 bb3 d4]")
      .slow(2)
      .sound("piano")
      .gain(0.3)
      .leslie(0.55)
      .room(0.34)
      .delay(0.18)
      .dt(0.5)
      .dfb(0.26),

    note("d4 eb4 g4 f4 eb4 d4 c4 bb3")
      .slow(1)
      .sound("triangle")
      .gain(0.2)
      .lpf(1900)
      .lpq(6)
      .room(0.3),

    s("bd ~ ~ bd")
      .slow(2)
      .gain(0.14)
      .room(0.12),

    s("[rim ~ rim rim]")
      .slow(2)
      .gain(0.08)
      .hpf(2500)
      .pan(sine.range(0.2, 0.8).slow(2))
      .room(0.12),

    s("turn_the_page again")
      .slow(2)
      .chop(16)
      .speed(rand.range(0.8, 1.02))
      .gain(0.07)
      .hpf(260)
      .lpf(2400)
      .room(0.45)
  )],

  [4, stack(
    note("g2 a2 bb2 d3 c3 bb2 a2 g2")
      .slow(4)
      .palindrome()
      .sound("piano")
      .gain(0.26)
      .attack(0.02)
      .release(0.9)
      .room(0.5)
      .delay(0.22)
      .dt(0.5)
      .dfb(0.32),

    s("hh*16")
      .slow(2)
      .gain(0.07)
      .hpf(7200)
      .degradeBy(0.6)
      .room(0.28),

    s("goldberg new_spine")
      .slow(8)
      .chop(64)
      .speed(rand.range(-0.9, -0.6))
      .gain(0.06)
      .hpf(200)
      .lpf(2200)
      .delay(0.35)
      .dt(0.25)
      .dfb(0.55)
      .room(0.65),

    s("cb")
      .euclid(5, 16)
      .slow(2)
      .gain(0.06)
      .hpf(2000)
      .delay(0.25)
      .dt(0.375)
      .dfb(0.35)
      .room(0.3)
  )]
)