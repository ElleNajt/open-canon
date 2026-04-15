// Goldberg Variations — personality drift (evolved): mirror-work, harmonic sabotage, and a coda that won't sit still

setcps(92/60/4)

samples('shabda/speech:goldberg,again,turn_the_page,fracture,new_spine,mirror,unravel,remember_me')
samples('shabda/speech/fr-FR/m:encore,variation,la_nuit,ombre,bruit')
samples('shabda/speech/ja-JP/f:yume')
samples('shabda/speech/de-DE/m:verschoben')

$: arrange(
  [4, stack(
    note("g2 d3 eb3 f3 d3 c3 bb2 a2")
      .slow(1)
      .sound("triangle")
      .gain(0.54)
      .lpf(1300)
      .lpq(7.2)
      .room(0.16),

    note("[g3 bb3 d4] [f3 a3 c4] [eb3 g3 bb3] [d3 f3 a3]")
      .slow(1)
      .sound("piano")
      .gain(0.34)
      .delay(0.22)
      .dt(0.375)
      .dfb(0.28)
      .room(0.22),

    s("bd ~ bd [~ bd]")
      .slow(1)
      .gain(0.18)
      .room(0.06),

    s("hh*8")
      .gain(0.09)
      .hpf(6500)
      .swing(0.1)
      .degradeBy(0.12)
      .room(0.05),

    s("goldberg mirror")
      .slow(2)
      .chop(16)
      .speed(rand.range(0.9, 1.15))
      .gain(0.065)
      .hpf(240)
      .lpf(3200)
      .room(0.28)
  )],

  [4, stack(
    n("0 2 4 7 9 7 4 2")
      .scale("Bb:major")
      .sound("pulse")
      .slow(1)
      .octave(6)
      .gain(0.14)
      .hpf(1000)
      .attack(0.005)
      .release(0.09)
      .pan(perlin.range(0.15, 0.85).slow(2))
      .delay(0.28)
      .dt(0.375)
      .dfb(0.34)
      .room(0.16),

    note("bb1 f2 g2 a2")
      .slow(1)
      .sound("square")
      .gain(0.22)
      .lpf(sine.range(220, 2600).slow(3))
      .lpq(8.6)
      .room(0.12),

    s("bd")
      .euclid(7, 16)
      .gain(0.18)
      .drive(0.16)
      .room(0.06),

    s("[~ sn] sn [~ sn] sn")
      .slow(1)
      .gain(0.12)
      .hpf(1600)
      .room(0.1),

    s("[rim rim ~ rim] [~ rim rim ~]")
      .slow(1)
      .gain(0.075)
      .hpf(2600)
      .pan(sine.range(0.2, 0.8).slow(1))
      .room(0.08)
  )],

  [4, stack(
    note("[c3 eb3 g3] [db3 f3 ab3] [bb2 d3 f3] [c3 eb3 g3]")
      .slow(2)
      .sound("supersaw")
      .gain(0.26)
      .lpf(saw.range(160, 2600).slow(4))
      .lpq(9.1)
      .drive(0.38)
      .tremolo(0.35)
      .tremolosync(6)
      .room(0.38),

    note("g2 ~ g2 f2 eb2 ~ d2 c2")
      .slow(1)
      .sound("triangle")
      .gain(0.26)
      .hpf(90)
      .lpf(1150)
      .lpq(7.4)
      .room(0.18),

    s("cb")
      .euclid(5, 16)
      .slow(1)
      .gain(0.065)
      .hpf(1800)
      .delay(0.18)
      .dt(0.375)
      .dfb(0.28)
      .room(0.24),

    s("ombre bruit")
      .slow(2)
      .chop(32)
      .speed(rand.range(-1.2, -0.7))
      .gain(0.07)
      .hpf(220)
      .lpf(3000)
      .delay(0.34)
      .dt(0.25)
      .dfb(0.52)
      .room(0.5)
  )],

  [4, stack(
    s("bd*4")
      .gain(0.23)
      .drive(0.35)
      .distort(0.28)
      .compressor("0.6:4:0.2:0.01:0.12")
      .room(0.08),

    s("sn")
      .euclid(5, 16)
      .gain(0.13)
      .hpf(1800)
      .room(0.08),

    s("hh*32")
      .gain(0.09)
      .hpf(6800)
      .crush(6)
      .degradeBy(0.22)
      .room(0.05),

    note("g2 ~ g2 a2 bb2 c3 d3 eb3")
      .slow(1)
      .sound("supersaw")
      .gain(0.24)
      .lpf(saw.range(140, 1700).slow(2))
      .lpq(9.2)
      .drive(0.44)
      .slide(0.3)
      .delay(0.16)
      .dt(0.25)
      .dfb(0.26)
      .room(0.16),

    note("d5 f5 g5 a5 bb5 a5 g5 f5")
      .fast(2)
      .sound("sine")
      .gain(0.07)
      .fm(3.6)
      .fmh(2)
      .fmenv(0.85)
      .fmattack(0.01)
      .fmdecay(0.1)
      .fmsustain(0)
      .fmrelease(0.02)
      .hpf(1300)
      .pan(perlin.range(0.1, 0.9).slow(1))
      .delay(0.22)
      .dt(0.375)
      .dfb(0.26)
      .room(0.14)
  )],

  [4, stack(
    note("g1")
      .slow(1)
      .sound("sine")
      .gain(0.19)
      .vowel("u o a e i")
      .ring(0.28)
      .ringf(sine.range(70, 310).slow(6))
      .lpf(sine.range(120, 1100).slow(8))
      .lpq(8.8)
      .room(0.62)
      .size(0.92)
      .roomlp(2300),

    note("g4 <a4 bb4> d5 <c5 bb4> a4")
      .slow(4)
      .sound("piano")
      .gain(0.2)
      .attack(0.02)
      .release(0.9)
      .phaser(0.28)
      .phaserdepth(0.8)
      .phasersweep(0.75)
      .phasercenter(850)
      .delay(0.35)
      .dt(0.5)
      .dfb(0.5)
      .room(0.55),

    s("yume la_nuit verschoben")
      .slow(4)
      .chop(64)
      .speed(rand.range(0.45, 1.25))
      .gain(0.065)
      .vowel("a e i o u")
      .hpf(220)
      .lpf(2600)
      .tremolo(0.4)
      .tremolosync(8)
      .delay(0.38)
      .dt(0.25)
      .dfb(0.56)
      .room(0.62)
  )],

  [4, stack(
    s("bd*4")
      .gain(0.24)
      .drive(0.4)
      .distort(0.33)
      .compressor("0.62:5:0.2:0.01:0.1")
      .room(0.08),

    s("[~ sn] sn [~ sn] sn")
      .fast(2)
      .gain(0.12)
      .hpf(1700)
      .room(0.08),

    s("hh*16")
      .fast(2)
      .gain(0.085)
      .hpf(7000)
      .crush(5)
      .degradeBy(0.18)
      .room(0.05),

    n("0 1 3 6 5 3 1 0")
      .scale("G:minor")
      .sound("square")
      .fast(2)
      .octave(5)
      .gain(0.12)
      .lpf(sine.range(320, 2400).slow(2))
      .lpq(9.4)
      .delay(0.2)
      .dt(0.375)
      .dfb(0.28)
      .room(0.14),

    s("fracture unravel")
      .slow(1)
      .chop(16)
      .speed(rand.range(0.9, 1.4))
      .gain(0.065)
      .hpf(260)
      .lpf(3600)
      .delay(0.28)
      .dt(0.25)
      .dfb(0.45)
      .room(0.26)
  )],

  [4, stack(
    note("[eb3 g3 bb3] [f3 a3 c4] [g3 bb3 d4] [bb3 d4 f4]")
      .slow(2)
      .sound("piano")
      .gain(0.3)
      .leslie(0.6)
      .room(0.34)
      .delay(0.22)
      .dt(0.5)
      .dfb(0.3),

    note("g4 f4 eb4 d4 c4 d4 eb4 f4")
      .slow(1)
      .palindrome()
      .sound("triangle")
      .gain(0.19)
      .lpf(2100)
      .lpq(6.4)
      .room(0.24),

    s("bd ~ ~ bd")
      .slow(2)
      .gain(0.14)
      .room(0.1),

    s("mt*8")
      .slow(1)
      .gain(0.075)
      .hpf(1900)
      .degradeBy(0.3)
      .pan(perlin.range(0.15, 0.85).slow(2))
      .room(0.12),

    n("0 2 4 7 6 4 2 0")
      .scale("G:minor")
      .sound("pulse")
      .slow(1)
      .octave(6)
      .gain(0.11)
      .hpf(950)
      .attack(0.005)
      .release(0.1)
      .juxBy(0.4, x => x.pan(0.2).delay(0.18).dt(0.375).dfb(0.2))
      .pan(sine.range(0.25, 0.75).slow(2))
      .delay(0.22)
      .dt(0.375)
      .dfb(0.28)
      .room(0.16)
  )],

  [4, stack(
    note("c3")
      .slow(1)
      .sound("sine")
      .gain(0.17)
      .vowel("u o a e i")
      .lpf(sine.range(140, 1500).slow(10))
      .lpq(8.7)
      .room(0.68)
      .size(0.95)
      .roomlp(2400),

    s("turn_the_page remember_me")
      .slow(8)
      .chop(32)
      .speed(rand.range(-1.1, -0.7))
      .gain(0.06)
      .hpf(200)
      .lpf(2200)
      .delay(0.4)
      .dt(0.25)
      .dfb(0.6)
      .room(0.7),

    s("oh")
      .euclid(3, 16)
      .slow(2)
      .gain(0.06)
      .hpf(5200)
      .degradeBy(0.62)
      .room(0.38),

    s("cb")
      .euclid(5, 16)
      .slow(2)
      .gain(0.06)
      .hpf(2000)
      .delay(0.25)
      .dt(0.375)
      .dfb(0.32)
      .room(0.28)
  )],

  [4, stack(
    note("g2 d3 eb3 d3 c3 bb2 a2 g2")
      .slow(2)
      .sound("triangle")
      .gain(0.34)
      .hpf(100)
      .lpf(1350)
      .lpq(7.6)
      .room(0.22),

    note("[g3 bb3 d4] [gb3 bb3 db4] [f3 a3 c4] [eb3 g3 bb3]")
      .slow(2)
      .sound("piano")
      .gain(0.3)
      .attack(0.02)
      .release(0.85)
      .leslie(0.5)
      .delay(0.26)
      .dt(0.5)
      .dfb(0.34)
      .room(0.44),

    s("bd [~ bd] bd ~")
      .slow(1)
      .gain(0.19)
      .drive(0.18)
      .room(0.06),

    s("hh*16")
      .slow(2)
      .gain(0.07)
      .hpf(7200)
      .degradeBy(0.5)
      .room(0.18),

    note("d5 f5 a5 g5")
      .slow(2)
      .sound("sine")
      .gain(0.06)
      .ring(0.38)
      .ringf(1150)
      .hpf(650)
      .delay(0.28)
      .dt(0.25)
      .dfb(0.4)
      .room(0.22),

    s("goldberg again new_spine")
      .slow(4)
      .chop(16)
      .speed(rand.range(0.78, 1.05))
      .gain(0.065)
      .hpf(240)
      .lpf(2400)
      .room(0.55)
  )]
)