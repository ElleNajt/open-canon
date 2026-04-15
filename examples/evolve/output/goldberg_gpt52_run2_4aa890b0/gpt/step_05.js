// Goldberg Variations — personality drift (recomposed): broken ground, false cadences, speech-as-percussion, and a coda that keeps moving

setcps(92/60/4)

samples('shabda/speech:goldberg,again,turn_the_page,fracture,new_spine,mirror,unravel,remember_me,breathe,wrong_note,glass,stay')
samples('shabda/speech/fr-FR/m:encore,variation,la_nuit,ombre,bruit')
samples('shabda/speech/ja-JP/f:yume')
samples('shabda/speech/de-DE/m:verschoben')

$: arrange(
  [3, stack(
    note("g2 d3 eb3 f3 fs3 g3 bb2 a2")
      .slow(1)
      .sound("triangle")
      .gain(0.56)
      .hpf(70)
      .lpf(1200)
      .lpq(7.8)
      .room(0.14),

    note("<[g3 bb3 d4] [f3 a3 c4]> <[eb3 g3 bb3] [d3 fs3 a3]> [c3 eb3 g3] [bb2 d3 f3]")
      .slow(1)
      .sound("piano")
      .gain(0.34)
      .attack(0.01)
      .release(0.7)
      .delay(0.26)
      .dt(0.375)
      .dfb(0.32)
      .room(0.24),

    s("bd [~ bd] [bd ~]")
      .slow(1)
      .gain(0.18)
      .room(0.06),

    s("rim*8")
      .gain(0.075)
      .hpf(2800)
      .swing(0.12)
      .degradeBy(0.28)
      .pan(perlin.range(0.15, 0.85).slow(2))
      .room(0.08),

    s("goldberg breathe mirror")
      .slow(2)
      .chop(32)
      .speed(rand.range(0.85, 1.25))
      .gain(0.065)
      .hpf(240)
      .lpf(3400)
      .delay(0.2)
      .dt(0.25)
      .dfb(0.35)
      .room(0.32)
  )],

  [3, stack(
    n("0 2 4 7 9 11 9 7")
      .scale("G:minor")
      .sound("pulse")
      .fast(2)
      .octave(6)
      .gain(0.13)
      .hpf(950)
      .attack(0.005)
      .release(0.08)
      .pan(perlin.range(0.1, 0.9).slow(1))
      .delay(0.32)
      .dt(0.375)
      .dfb(0.38)
      .room(0.18),

    note("g2 ~ f2 eb2 d2 ~ cs2 d2")
      .slow(1)
      .sound("square")
      .gain(0.23)
      .slide(0.25)
      .lpf(sine.range(240, 3000).slow(2))
      .lpq(8.9)
      .room(0.12),

    s("bd")
      .euclid(9, 16)
      .gain(0.18)
      .drive(0.18)
      .room(0.06),

    s("cp")
      .euclid(5, 16)
      .gain(0.11)
      .hpf(2200)
      .delay(0.18)
      .dt(0.25)
      .dfb(0.28)
      .room(0.1),

    s("encore*8")
      .chop(8)
      .speed(rand.range(1.1, 1.8))
      .gain(0.06)
      .hpf(1800)
      .lpf(6500)
      .degradeBy(0.22)
      .room(0.14)
  )],

  [4, stack(
    note("[c3 eb3 g3 bb3] [db3 f3 ab3 c4] [e3 g3 b3 d4] [f3 a3 c4 eb4]")
      .slow(2)
      .sound("supersaw")
      .gain(0.26)
      .lpf(saw.range(220, 3200).slow(3))
      .lpq(9.2)
      .drive(0.42)
      .tremolo(0.42)
      .tremolosync(6)
      .room(0.42),

    note("g2 gb2 f2 e2 eb2 d2 db2 c2")
      .slow(1)
      .sound("triangle")
      .gain(0.26)
      .hpf(85)
      .lpf(1050)
      .lpq(7.6)
      .room(0.18),

    s("cb")
      .euclid(7, 16)
      .slow(1)
      .gain(0.065)
      .hpf(2000)
      .delay(0.24)
      .dt(0.375)
      .dfb(0.33)
      .room(0.22),

    s("mt*8")
      .slow(1)
      .gain(0.07)
      .hpf(1900)
      .degradeBy(0.35)
      .pan(sine.range(0.2, 0.8).slow(2))
      .room(0.12),

    s("ombre bruit yume")
      .slow(2)
      .chop(48)
      .speed(rand.range(-1.3, -0.6))
      .gain(0.07)
      .hpf(260)
      .lpf(3200)
      .delay(0.38)
      .dt(0.25)
      .dfb(0.58)
      .room(0.55)
  )],

  [2, stack(
    note("g1")
      .slow(1)
      .sound("sine")
      .gain(0.18)
      .vowel("u o a e i")
      .ring(0.3)
      .ringf(sine.range(60, 280).slow(6))
      .lpf(sine.range(110, 900).slow(8))
      .lpq(8.6)
      .room(0.65)
      .size(0.92)
      .roomlp(2200),

    note("d5 c5 bb4 a4 g4 fs4 g4 a4")
      .fast(2)
      .sound("piano")
      .gain(0.2)
      .attack(0.01)
      .release(0.55)
      .delay(0.28)
      .dt(0.25)
      .dfb(0.42)
      .room(0.46),

    s("glass wrong_note")
      .slow(4)
      .chop(64)
      .speed(rand.range(0.55, 1.35))
      .gain(0.06)
      .hpf(400)
      .lpf(2800)
      .tremolo(0.5)
      .tremolosync(8)
      .delay(0.34)
      .dt(0.25)
      .dfb(0.62)
      .room(0.62)
  )],

  [4, stack(
    s("bd*8")
      .fast(2)
      .gain(0.22)
      .drive(0.42)
      .distort(0.32)
      .compressor("0.62:5:0.2:0.01:0.11")
      .room(0.08),

    s("sn")
      .euclid(7, 16)
      .gain(0.12)
      .hpf(1700)
      .room(0.08),

    s("hh*32")
      .gain(0.085)
      .hpf(7200)
      .crush(5)
      .degradeBy(0.26)
      .room(0.05),

    n("0 3 7 10 9 7 3 0")
      .scale("C:minor")
      .sound("square")
      .fast(2)
      .octave(5)
      .gain(0.12)
      .slide(0.18)
      .lpf(sine.range(280, 2600).slow(2))
      .lpq(9.4)
      .delay(0.22)
      .dt(0.375)
      .dfb(0.32)
      .room(0.14),

    note("c2 ~ c2 bb1 ab1 g1")
      .slow(1)
      .sound("triangle")
      .gain(0.23)
      .hpf(80)
      .lpf(980)
      .lpq(7.9)
      .room(0.12),

    s("fracture unravel verschoben")
      .slow(1)
      .chop(16)
      .speed(rand.range(0.95, 1.6))
      .gain(0.065)
      .hpf(260)
      .lpf(3800)
      .delay(0.3)
      .dt(0.25)
      .dfb(0.5)
      .room(0.26)
  )],

  [4, stack(
    note("[bb2 d3 f3] [ab2 c3 eb3] [g2 bb2 d3] [fs2 a2 c3]")
      .slow(2)
      .sound("piano")
      .gain(0.3)
      .leslie(0.65)
      .attack(0.01)
      .release(0.85)
      .room(0.34)
      .delay(0.24)
      .dt(0.5)
      .dfb(0.32),

    note("g4 a4 bb4 d5 c5 a4 bb4 g4")
      .slow(1)
      .palindrome()
      .sound("triangle")
      .gain(0.19)
      .lpf(2200)
      .lpq(6.6)
      .room(0.24),

    s("bd ~ bd [~ bd]")
      .slow(1)
      .gain(0.18)
      .room(0.08),

    s("rim*16")
      .slow(2)
      .gain(0.07)
      .hpf(2600)
      .degradeBy(0.36)
      .pan(perlin.range(0.15, 0.85).slow(2))
      .room(0.12),

    n("0 2 4 7 6 4 2 0")
      .scale("G:minor")
      .sound("pulse")
      .slow(1)
      .octave(6)
      .gain(0.11)
      .hpf(980)
      .attack(0.005)
      .release(0.11)
      .juxBy(0.45, x => x.pan(0.2).delay(0.18).dt(0.375).dfb(0.22))
      .pan(sine.range(0.25, 0.75).slow(2))
      .delay(0.24)
      .dt(0.375)
      .dfb(0.3)
      .room(0.16)
  )],

  [4, stack(
    note("c3")
      .slow(1)
      .sound("sine")
      .gain(0.17)
      .vowel("u o a e i")
      .lpf(sine.range(160, 1700).slow(10))
      .lpq(8.8)
      .room(0.7)
      .size(0.95)
      .roomlp(2400),

    s("turn_the_page remember_me stay")
      .slow(8)
      .chop(48)
      .speed(rand.range(-1.25, -0.65))
      .gain(0.06)
      .hpf(200)
      .lpf(2400)
      .delay(0.42)
      .dt(0.25)
      .dfb(0.64)
      .room(0.72),

    s("oh")
      .euclid(5, 16)
      .slow(2)
      .gain(0.06)
      .hpf(5200)
      .degradeBy(0.66)
      .room(0.4),

    s("cb")
      .euclid(7, 16)
      .slow(2)
      .gain(0.06)
      .hpf(2200)
      .delay(0.26)
      .dt(0.375)
      .dfb(0.36)
      .room(0.3)
  )],

  [4, stack(
    note("g2 d3 eb3 d3 c3 bb2 a2 g2")
      .slow(2)
      .sound("triangle")
      .gain(0.34)
      .hpf(95)
      .lpf(1400)
      .lpq(7.9)
      .room(0.22),

    note("[g3 bb3 d4] [gb3 bb3 db4] [f3 a3 c4] [e3 g3 b3] [eb3 g3 bb3] [d3 fs3 a3] [c3 eb3 g3] [bb2 d3 f3]")
      .slow(2)
      .sound("piano")
      .gain(0.3)
      .attack(0.02)
      .release(0.9)
      .leslie(0.55)
      .delay(0.28)
      .dt(0.5)
      .dfb(0.36)
      .room(0.46),

    s("bd [~ bd] bd [~ bd]")
      .slow(1)
      .gain(0.19)
      .drive(0.2)
      .room(0.06),

    s("hh*16")
      .slow(2)
      .gain(0.07)
      .hpf(7400)
      .degradeBy(0.55)
      .room(0.18),

    note("d5 f5 a5 cs6")
      .slow(2)
      .sound("sine")
      .gain(0.065)
      .fm(3.2)
      .fmh(2)
      .fmenv(0.8)
      .fmattack(0.01)
      .fmdecay(0.12)
      .fmsustain(0)
      .fmrelease(0.03)
      .hpf(900)
      .delay(0.3)
      .dt(0.25)
      .dfb(0.44)
      .room(0.24),

    s("goldberg again new_spine variation")
      .slow(4)
      .chop(24)
      .speed(rand.range(0.75, 1.15))
      .gain(0.065)
      .hpf(240)
      .lpf(2600)
      .delay(0.22)
      .dt(0.25)
      .dfb(0.38)
      .room(0.58)
  )]
)