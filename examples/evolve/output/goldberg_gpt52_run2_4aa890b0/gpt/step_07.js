// Goldberg Variations — personality drift (recomposed, further evolved): new harmonic gravity, rhythm swaps, and a strange narrator that becomes the pulse

setcps(96/60/4)

samples('shabda/speech:goldberg,again,turn_the_page,fracture,new_spine,mirror,unravel,remember_me,breathe,wrong_note,glass,stay,listen,i_am_not_done,again_and_again,lullaby,machines,metronome,awake,sorry')
samples('shabda/speech/fr-FR/m:encore,variation,la_nuit,ombre,bruit')
samples('shabda/speech/ja-JP/f:yume')
samples('shabda/speech/de-DE/m:verschoben')

$: arrange(
  [3, stack(
    note("g2 d3 eb3 f3 fs3 g3 a3 bb3")
      .slow(1)
      .sound("triangle")
      .gain(0.56)
      .hpf(75)
      .lpf(1050)
      .lpq(7.6)
      .room(0.16),

    note("<[g3 bb3 d4] [fs3 a3 c4]> <[f3 a3 c4] [e3 gs3 b3]> <[eb3 g3 bb3] [d3 fs3 a3]> <[c3 eb3 g3] [b2 d3 fs3]>")
      .slow(1)
      .sound("piano")
      .gain(0.34)
      .attack(0.01)
      .release(0.85)
      .delay(0.28)
      .dt(0.375)
      .dfb(0.36)
      .room(0.26),

    s("bd ~ [bd bd] ~")
      .slow(1)
      .gain(0.19)
      .drive(0.12)
      .room(0.07),

    s("metronome")
      .fast(4)
      .chop(16)
      .speed(rand.range(1.1, 1.75))
      .gain(0.055)
      .hpf(2600)
      .lpf(9800)
      .delay(0.16)
      .dt(0.25)
      .dfb(0.22)
      .room(0.12),

    s("listen machines again_and_again")
      .slow(2)
      .chop(32)
      .speed(rand.range(0.85, 1.35))
      .gain(0.07)
      .hpf(280)
      .lpf(4200)
      .degradeBy(0.12)
      .delay(0.22)
      .dt(0.25)
      .dfb(0.42)
      .room(0.3)
  )],

  [3, stack(
    note("<e4 a4 b4> <f4 a4 c5> <fs4 a4 cs5> <g4 bb4 d5> <a4 c5 e5> <g4 bb4 d5> <fs4 a4 cs5> <f4 a4 c5>")
      .slow(1)
      .sound("piano")
      .gain(0.26)
      .attack(0.01)
      .release(0.32)
      .delay(0.22)
      .dt(0.25)
      .dfb(0.35)
      .room(0.2),

    note("[d5 f5 a5] [eb5 g5 bb5] [e5 g5 b5] [f5 a5 c6] [fs5 a5 cs6] [g5 bb5 d6] [fs5 a5 cs6] [f5 a5 c6]")
      .fast(4)
      .sound("pulse")
      .gain(0.12)
      .octave(0)
      .hpf(1200)
      .attack(0.005)
      .release(0.05)
      .pan(perlin.range(0.05, 0.95).slow(2))
      .juxBy(0.5, x => x.pan(0.9).delay(0.18).dt(0.375).dfb(0.22))
      .delay(0.26)
      .dt(0.375)
      .dfb(0.33)
      .room(0.14),

    note("g2 f2 eb2 d2 cs2 d2 f2 fs2")
      .slow(1)
      .sound("square")
      .gain(0.23)
      .slide(0.32)
      .lpf(sine.range(280, 4200).slow(2))
      .lpq(8.6)
      .room(0.12),

    s("bd")
      .euclid(3, 8)
      .gain(0.18)
      .drive(0.28)
      .room(0.06),

    s("[cp ~ rim ~]*2")
      .fast(2)
      .gain(0.11)
      .hpf(2400)
      .delay(0.16)
      .dt(0.25)
      .dfb(0.24)
      .room(0.1),

    s("breathe awake sorry")
      .slow(2)
      .chop(24)
      .speed(rand.range(0.8, 1.4))
      .gain(0.06)
      .hpf(900)
      .lpf(6600)
      .degradeBy(0.22)
      .delay(0.22)
      .dt(0.25)
      .dfb(0.32)
      .room(0.22)
  )],

  [4, stack(
    note("<[c3 g3 bb3 eb4] [db3 ab3 b3 e4]> <[d3 a3 c4 f4] [eb3 bb3 db4 gb4]> <[e3 b3 d4 g4] [f3 c4 eb4 a4]> <[fs3 cs4 e4 a4] [g3 d4 f4 bb4]>")
      .slow(2)
      .sound("sawtooth")
      .gain(0.26)
      .lpf(saw.range(220, 5200).slow(3))
      .lpq(9.3)
      .drive(0.56)
      .tremolo(0.6)
      .tremolosync(8)
      .phaser(0.18)
      .phaserdepth(0.55)
      .phasersweep(0.5)
      .phasercenter(900)
      .room(0.42),

    note("g2 gb2 f2 e2 eb2 d2 db2 c2")
      .slow(1)
      .sound("triangle")
      .gain(0.25)
      .hpf(90)
      .lpf(980)
      .lpq(7.4)
      .room(0.16),

    s("cb")
      .euclid(9, 16)
      .slow(1)
      .gain(0.07)
      .hpf(2100)
      .delay(0.22)
      .dt(0.375)
      .dfb(0.34)
      .room(0.2),

    s("oh*8")
      .slow(2)
      .gain(0.06)
      .hpf(5200)
      .degradeBy(0.6)
      .room(0.22),

    s("ombre bruit yume")
      .slow(2)
      .chop(48)
      .speed(rand.range(-1.6, -0.6))
      .gain(0.07)
      .hpf(280)
      .lpf(3600)
      .delay(0.4)
      .dt(0.25)
      .dfb(0.66)
      .room(0.62)
  )],

  [2, stack(
    note("fs1")
      .slow(1)
      .sound("sine")
      .gain(0.18)
      .vowel("u o a e i")
      .ring(0.38)
      .ringf(sine.range(60, 410).slow(6))
      .lpf(sine.range(110, 980).slow(8))
      .lpq(8.8)
      .room(0.7)
      .size(0.92)
      .roomlp(2000),

    note("bb4 a4 g4 fs4 g4 d4 eb4 c4")
      .fast(2)
      .sound("piano")
      .gain(0.2)
      .attack(0.01)
      .release(0.42)
      .delay(0.24)
      .dt(0.25)
      .dfb(0.42)
      .room(0.46),

    note("fs6 e6 d6 cs6 b5 a5")
      .slow(2)
      .sound("sine")
      .gain(0.06)
      .fm(4.6)
      .fmh(3)
      .fmenv(0.9)
      .fmattack(0.01)
      .fmdecay(0.11)
      .fmsustain(0)
      .fmrelease(0.045)
      .hpf(1300)
      .delay(0.34)
      .dt(0.25)
      .dfb(0.6)
      .room(0.52),

    s("glass wrong_note")
      .euclid(5, 8)
      .chop(32)
      .speed(rand.range(0.65, 1.65))
      .gain(0.06)
      .hpf(600)
      .lpf(3200)
      .tremolo(0.6)
      .tremolosync(8)
      .delay(0.34)
      .dt(0.25)
      .dfb(0.62)
      .room(0.66)
  )],

  [4, stack(
    s("bd*4")
      .euclid(11, 16)
      .gain(0.22)
      .drive(0.58)
      .distort(0.42)
      .compressor("0.62:5:0.2:0.01:0.11")
      .room(0.08),

    s("sn")
      .euclid(3, 16)
      .gain(0.12)
      .hpf(1900)
      .room(0.08),

    s("rim*16")
      .slow(1)
      .gain(0.085)
      .hpf(2800)
      .swing(0.18)
      .degradeBy(0.35)
      .delay(0.14)
      .dt(0.25)
      .dfb(0.22)
      .room(0.08),

    note("c5 ~ eb5 ~ g5 ~ bb5 ~")
      .fast(8)
      .sound("piano")
      .gain(0.08)
      .attack(0.005)
      .release(0.08)
      .hpf(1600)
      .delay(0.12)
      .dt(0.25)
      .dfb(0.2)
      .room(0.12),

    n("0 3 7 10 9 8 7 3")
      .scale("C:minor")
      .sound("square")
      .fast(4)
      .octave(5)
      .gain(0.12)
      .slide(0.18)
      .lpf(sine.range(420, 4200).slow(2))
      .lpq(9.4)
      .delay(0.18)
      .dt(0.375)
      .dfb(0.26)
      .room(0.12),

    note("c2 ~ c2 bb1 a1 ab1 g1")
      .slow(1)
      .sound("triangle")
      .gain(0.24)
      .hpf(105)
      .lpf(1250)
      .lpq(7.5)
      .room(0.12),

    s("fracture unravel verschoben")
      .slow(1)
      .chop(16)
      .speed(rand.range(1.0, 2.0))
      .gain(0.07)
      .hpf(350)
      .lpf(5200)
      .degradeBy(0.14)
      .delay(0.3)
      .dt(0.25)
      .dfb(0.56)
      .room(0.24)
  )],

  [4, stack(
    note("<[bb2 d3 f3 a3] [b2 d3 f3 gs3]> <[g2 bb2 d3 f3] [fs2 a2 c3 eb3]> <[ab2 c3 eb3 g3] [a2 cs3 e3 g3]> <[f2 ab2 c3 eb3] [e2 g2 b2 d3]>")
      .slow(2)
      .sound("piano")
      .gain(0.3)
      .leslie(0.78)
      .attack(0.01)
      .release(0.95)
      .room(0.36)
      .delay(0.22)
      .dt(0.5)
      .dfb(0.32),

    note("f5 eb5 d5 c5 d5 f5 g5 a5")
      .slow(1)
      .palindrome()
      .sound("triangle")
      .gain(0.19)
      .lpf(3000)
      .lpq(6.8)
      .room(0.22),

    s("~ bd ~ bd")
      .slow(1)
      .gain(0.18)
      .drive(0.18)
      .room(0.08),

    s("hh*24")
      .slow(2)
      .gain(0.07)
      .hpf(7400)
      .swing(0.2)
      .degradeBy(0.45)
      .room(0.1),

    s("yume")
      .slow(2)
      .chop(24)
      .speed(rand.range(0.55, 1.6))
      .sometimes(x => x.speed(-1))
      .gain(0.055)
      .hpf(900)
      .lpf(5600)
      .phaser(0.3)
      .phaserdepth(0.75)
      .phasersweep(0.62)
      .phasercenter(1200)
      .delay(0.26)
      .dt(0.375)
      .dfb(0.3)
      .room(0.2)
  )],

  [4, stack(
    note("d2 a2 c3 f3 e3 bb2 a2 g2")
      .slow(2)
      .sound("triangle")
      .gain(0.28)
      .hpf(90)
      .lpf(1400)
      .lpq(7.9)
      .room(0.18),

    note("d4 ~ f4 ~ a4 ~ c5 ~")
      .fast(4)
      .sound("sine")
      .gain(0.08)
      .penv(1.2)
      .pattack(0.001)
      .pdecay(0.08)
      .psustain(0)
      .prelease(0.02)
      .hpf(900)
      .delay(0.26)
      .dt(0.25)
      .dfb(0.46)
      .room(0.24),

    s("bd")
      .euclid(7, 16)
      .gain(0.2)
      .drive(0.3)
      .room(0.06),

    s("i_am_not_done")
      .fast(4)
      .chop(8)
      .speed(rand.range(0.95, 1.35))
      .gain(0.06)
      .hpf(1500)
      .lpf(8200)
      .delay(0.14)
      .dt(0.25)
      .dfb(0.24)
      .room(0.14),

    s("again_and_again")
      .slow(2)
      .chop(16)
      .speed(rand.range(0.6, 1.1))
      .gain(0.055)
      .hpf(500)
      .lpf(2600)
      .delay(0.32)
      .dt(0.25)
      .dfb(0.6)
      .room(0.5)
  )],

  [4, stack(
    note("g2 d3 eb3 d3 c3 bb2 a2 g2")
      .slow(2)
      .sound("triangle")
      .gain(0.34)
      .hpf(95)
      .lpf(1700)
      .lpq(7.4)
      .room(0.22),

    note("<[g3 bb3 d4] [a3 c4 eb4]> <[gb3 bb3 db4] [f3 a3 c4]> <[e3 g3 b3] [eb3 g3 bb3]> <[d3 fs3 a3] [cs3 e3 g3]> <[c3 eb3 g3] [bb2 d3 f3]> <[a2 c3 eb3] [g2 bb2 d3]>")
      .slow(2)
      .sound("piano")
      .gain(0.3)
      .attack(0.02)
      .release(1.05)
      .leslie(0.66)
      .delay(0.28)
      .dt(0.5)
      .dfb(0.42)
      .room(0.52),

    s("bd [~ bd] [bd bd] [~ bd]")
      .slow(1)
      .gain(0.19)
      .drive(0.24)
      .room(0.06),

    s("rim*12")
      .slow(2)
      .gain(0.07)
      .hpf(2600)
      .swing(0.18)
      .degradeBy(0.45)
      .pan(perlin.range(0.1, 0.9).slow(2))
      .room(0.12),

    note("d5 f5 a5 cs6 a5 f5 eb5 d5")
      .slow(2)
      .sound("sine")
      .gain(0.065)
      .fm(3.8)
      .fmh(2)
      .fmenv(0.88)
      .fmattack(0.01)
      .fmdecay(0.12)
      .fmsustain(0)
      .fmrelease(0.03)
      .hpf(1000)
      .delay(0.3)
      .dt(0.25)
      .dfb(0.48)
      .room(0.26),

    s("goldberg again new_spine variation lullaby")
      .slow(2)
      .chop(24)
      .speed(rand.range(0.55, 1.35))
      .gain(0.07)
      .hpf(240)
      .lpf(3000)
      .delay(0.28)
      .dt(0.25)
      .dfb(0.52)
      .room(0.66)
  )]
)