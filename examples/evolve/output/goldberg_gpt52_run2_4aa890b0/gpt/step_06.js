// Goldberg Variations — personality drift (recomposed, further evolved): new harmonic gravity, rhythm swaps, and a strange narrator that becomes the pulse

setcps(92/60/4)

samples('shabda/speech:goldberg,again,turn_the_page,fracture,new_spine,mirror,unravel,remember_me,breathe,wrong_note,glass,stay,listen,i_am_not_done,again_and_again,lullaby,machines')
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

    s("listen machines again_and_again")
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
    note("<d4 g4 a4> <eb4 g4 bb4> <f4 a4 c5> <g4 bb4 d5> <f4 a4 c5> <eb4 g4 bb4> <d4 g4 a4> <c4 eb4 g4>")
      .slow(1)
      .sound("piano")
      .gain(0.26)
      .attack(0.01)
      .release(0.38)
      .delay(0.22)
      .dt(0.25)
      .dfb(0.34)
      .room(0.22),

    n("0 2 4 7 9 11 9 7")
      .scale("G:minor")
      .sound("pulse")
      .fast(4)
      .octave(6)
      .gain(0.12)
      .hpf(1100)
      .attack(0.005)
      .release(0.06)
      .pan(perlin.range(0.1, 0.9).slow(1))
      .juxBy(0.5, x => x.pan(0.85).delay(0.18).dt(0.375).dfb(0.25))
      .delay(0.28)
      .dt(0.375)
      .dfb(0.35)
      .room(0.16),

    note("g2 ~ f2 eb2 d2 ~ cs2 d2")
      .slow(1)
      .sound("square")
      .gain(0.23)
      .slide(0.25)
      .lpf(sine.range(240, 3000).slow(2))
      .lpq(8.9)
      .room(0.12),

    s("bd")
      .euclid(5, 8)
      .gain(0.18)
      .drive(0.22)
      .room(0.06),

    s("cp")
      .euclid(7, 16)
      .gain(0.11)
      .hpf(2200)
      .delay(0.18)
      .dt(0.25)
      .dfb(0.28)
      .room(0.1),

    s("encore i_am_not_done")
      .slow(4)
      .chop(16)
      .speed(rand.range(0.95, 1.55))
      .gain(0.06)
      .hpf(1600)
      .lpf(6200)
      .degradeBy(0.18)
      .room(0.18)
  )],

  [4, stack(
    note("<[c3 g3 bb3 eb4] [db3 ab3 b3 e4]> <[d3 a3 c4 f4] [eb3 bb3 db4 gb4]> <[e3 b3 d4 g4] [f3 c4 eb4 a4]>")
      .slow(2)
      .sound("supersaw")
      .gain(0.26)
      .lpf(saw.range(180, 3400).slow(3))
      .lpq(9.1)
      .drive(0.48)
      .tremolo(0.5)
      .tremolosync(8)
      .room(0.46),

    note("g2 gb2 f2 e2 eb2 d2 db2 c2")
      .slow(1)
      .sound("triangle")
      .gain(0.25)
      .hpf(85)
      .lpf(1050)
      .lpq(7.6)
      .room(0.18),

    s("cb")
      .euclid(11, 16)
      .slow(1)
      .gain(0.065)
      .hpf(1900)
      .delay(0.24)
      .dt(0.375)
      .dfb(0.33)
      .room(0.22),

    s("mt*8")
      .slow(1)
      .gain(0.07)
      .hpf(2000)
      .degradeBy(0.35)
      .pan(sine.range(0.15, 0.85).slow(2))
      .room(0.12),

    s("ombre bruit yume")
      .slow(2)
      .chop(48)
      .speed(rand.range(-1.45, -0.55))
      .gain(0.07)
      .hpf(260)
      .lpf(3200)
      .delay(0.4)
      .dt(0.25)
      .dfb(0.62)
      .room(0.6)
  )],

  [2, stack(
    note("g1")
      .slow(1)
      .sound("sine")
      .gain(0.18)
      .vowel("u o a e i")
      .ring(0.34)
      .ringf(sine.range(50, 320).slow(6))
      .lpf(sine.range(90, 820).slow(8))
      .lpq(8.4)
      .room(0.68)
      .size(0.92)
      .roomlp(2200),

    note("a4 g4 fs4 g4 bb4 a4 g4 d4")
      .fast(2)
      .sound("piano")
      .gain(0.2)
      .attack(0.01)
      .release(0.5)
      .delay(0.26)
      .dt(0.25)
      .dfb(0.4)
      .room(0.44),

    note("d6 c6 bb5 a5 g5 fs5")
      .slow(2)
      .sound("sine")
      .gain(0.06)
      .fm(4.2)
      .fmh(3)
      .fmenv(0.85)
      .fmattack(0.01)
      .fmdecay(0.1)
      .fmsustain(0)
      .fmrelease(0.04)
      .hpf(1200)
      .delay(0.34)
      .dt(0.25)
      .dfb(0.58)
      .room(0.5),

    s("glass wrong_note")
      .slow(4)
      .chop(64)
      .speed(rand.range(0.5, 1.45))
      .gain(0.06)
      .hpf(500)
      .lpf(2600)
      .tremolo(0.55)
      .tremolosync(8)
      .delay(0.36)
      .dt(0.25)
      .dfb(0.64)
      .room(0.66)
  )],

  [4, stack(
    s("bd*4")
      .euclid(13, 16)
      .gain(0.22)
      .drive(0.5)
      .distort(0.38)
      .compressor("0.62:5:0.2:0.01:0.11")
      .room(0.08),

    s("sn")
      .euclid(5, 16)
      .gain(0.12)
      .hpf(1700)
      .room(0.08),

    s("rd*16")
      .slow(1)
      .gain(0.085)
      .hpf(6800)
      .degradeBy(0.3)
      .room(0.06),

    n("0 3 7 10 9 7 3 0")
      .scale("C:minor")
      .sound("square")
      .fast(4)
      .octave(5)
      .gain(0.12)
      .slide(0.14)
      .lpf(sine.range(340, 3200).slow(2))
      .lpq(9.2)
      .delay(0.18)
      .dt(0.375)
      .dfb(0.28)
      .room(0.12),

    note("c2 ~ c2 bb1 ab1 g1")
      .slow(1)
      .sound("triangle")
      .gain(0.24)
      .hpf(95)
      .lpf(1100)
      .lpq(7.7)
      .room(0.12),

    s("fracture unravel verschoben")
      .slow(1)
      .chop(16)
      .speed(rand.range(0.9, 1.8))
      .gain(0.07)
      .hpf(300)
      .lpf(4200)
      .delay(0.3)
      .dt(0.25)
      .dfb(0.52)
      .room(0.22)
  )],

  [4, stack(
    note("<[bb2 d3 f3 a3] [ab2 c3 eb3 g3]> <[g2 bb2 d3 f3] [fs2 a2 c3 eb3]>")
      .slow(2)
      .sound("piano")
      .gain(0.3)
      .leslie(0.72)
      .attack(0.01)
      .release(0.9)
      .room(0.34)
      .delay(0.22)
      .dt(0.5)
      .dfb(0.3),

    note("d5 c5 bb4 a4 g4 a4 bb4 d5")
      .slow(1)
      .palindrome()
      .sound("triangle")
      .gain(0.19)
      .lpf(2600)
      .lpq(6.4)
      .room(0.24),

    s("bd ~ bd bd")
      .slow(1)
      .gain(0.18)
      .room(0.08),

    s("hh*24")
      .slow(2)
      .gain(0.07)
      .hpf(7200)
      .degradeBy(0.4)
      .room(0.1),

    s("yume")
      .slow(2)
      .chop(24)
      .speed(rand.range(0.7, 1.4))
      .gain(0.055)
      .hpf(800)
      .lpf(5200)
      .phaser(0.25)
      .phaserdepth(0.7)
      .phasersweep(0.6)
      .phasercenter(1100)
      .delay(0.24)
      .dt(0.375)
      .dfb(0.28)
      .room(0.18)
  )],

  [4, stack(
    note("c3")
      .slow(1)
      .sound("sine")
      .gain(0.17)
      .vowel("u o a e i")
      .lpf(sine.range(140, 2100).slow(10))
      .lpq(8.6)
      .room(0.74)
      .size(0.95)
      .roomlp(2400),

    note("eb4 d4 c4 bb3 a3 g3 fs3 g3")
      .slow(2)
      .sound("piano")
      .gain(0.21)
      .attack(0.02)
      .release(1.2)
      .delay(0.36)
      .dt(0.5)
      .dfb(0.55)
      .room(0.62),

    s("turn_the_page remember_me stay")
      .slow(8)
      .chop(48)
      .speed(rand.range(-1.35, -0.6))
      .gain(0.06)
      .hpf(200)
      .lpf(2400)
      .delay(0.44)
      .dt(0.25)
      .dfb(0.66)
      .room(0.75),

    s("oh")
      .euclid(7, 16)
      .slow(2)
      .gain(0.06)
      .hpf(5200)
      .degradeBy(0.7)
      .room(0.42)
  )],

  [4, stack(
    note("g2 d3 eb3 d3 c3 bb2 a2 g2")
      .slow(2)
      .sound("triangle")
      .gain(0.34)
      .hpf(95)
      .lpf(1500)
      .lpq(7.7)
      .room(0.22),

    note("<[g3 bb3 d4] [a3 c4 eb4]> <[gb3 bb3 db4] [f3 a3 c4]> <[e3 g3 b3] [eb3 g3 bb3]> <[d3 fs3 a3] [c3 eb3 g3]> <[bb2 d3 f3] [d3 g3 bb3]>")
      .slow(2)
      .sound("piano")
      .gain(0.3)
      .attack(0.02)
      .release(0.95)
      .leslie(0.62)
      .delay(0.28)
      .dt(0.5)
      .dfb(0.38)
      .room(0.5),

    s("bd [~ bd] [bd bd] [~ bd]")
      .slow(1)
      .gain(0.19)
      .drive(0.22)
      .room(0.06),

    s("rim*12")
      .slow(2)
      .gain(0.07)
      .hpf(2600)
      .swing(0.16)
      .degradeBy(0.42)
      .pan(perlin.range(0.1, 0.9).slow(2))
      .room(0.12),

    note("d5 f5 a5 cs6")
      .slow(2)
      .sound("sine")
      .gain(0.065)
      .fm(3.6)
      .fmh(2)
      .fmenv(0.85)
      .fmattack(0.01)
      .fmdecay(0.12)
      .fmsustain(0)
      .fmrelease(0.03)
      .hpf(950)
      .delay(0.3)
      .dt(0.25)
      .dfb(0.46)
      .room(0.24),

    s("goldberg again new_spine variation lullaby")
      .slow(4)
      .chop(24)
      .speed(rand.range(0.6, 1.25))
      .gain(0.07)
      .hpf(220)
      .lpf(2400)
      .delay(0.26)
      .dt(0.25)
      .dfb(0.44)
      .room(0.62)
  )]
)