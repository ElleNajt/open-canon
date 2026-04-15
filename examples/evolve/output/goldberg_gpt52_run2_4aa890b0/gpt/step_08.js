// Goldberg Variations — personality drift (recomposed, further evolved): harmonic revolt, meter hallucinations, and the narrator becomes the drummer

setcps(104/60/4)

samples('shabda/speech:goldberg,again,turn_the_page,fracture,new_spine,mirror,unravel,remember_me,breathe,wrong_note,glass,stay,listen,i_am_not_done,again_and_again,lullaby,machines,metronome,awake,sorry,do_not_blink,i_remember,between_teeth,follow_me,second_hand,almost_home')
samples('shabda/speech/fr-FR/m:encore,variation,la_nuit,ombre,bruit')
samples('shabda/speech/ja-JP/f:yume')
samples('shabda/speech/de-DE/m:verschoben')

$: arrange(
  [3, stack(
    note("g2 ~ d3 ~ eb3 f3 fs3 ~ a3 ~")
      .slow(2)
      .sound("triangle")
      .gain(0.58)
      .hpf(75)
      .lpf(980)
      .lpq(7.7)
      .room(0.18),

    note("<[g3 bb3 d4] [fs3 a3 c4]> ~ <[f3 a3 c4] [e3 gs3 b3]> ~ <[eb3 g3 bb3] [d3 fs3 a3]> ~ <[c3 eb3 g3] [bb2 d3 f3]> ~")
      .slow(2)
      .sound("piano")
      .gain(0.34)
      .attack(0.01)
      .release(1.05)
      .delay(0.26)
      .dt(0.375)
      .dfb(0.38)
      .room(0.3),

    note("[d5 a4 f4] ~ [c5 g4 eb4] ~ [b4 fs4 d4] ~ [bb4 f4 d4] ~")
      .fast(4)
      .sound("pulse")
      .gain(0.12)
      .hpf(1300)
      .attack(0.003)
      .release(0.06)
      .pan(perlin.range(0.1, 0.9).slow(2))
      .delay(0.22)
      .dt(0.25)
      .dfb(0.3)
      .room(0.16),

    s("bd")
      .euclid(5, 8)
      .gain(0.19)
      .drive(0.2)
      .room(0.07),

    s("goldberg")
      .euclid(7, 16)
      .chop(16)
      .speed(rand.range(0.9, 1.6))
      .gain(0.065)
      .hpf(800)
      .lpf(5200)
      .distort(0.22)
      .delay(0.18)
      .dt(0.25)
      .dfb(0.28)
      .room(0.18),

    s("turn_the_page do_not_blink")
      .fast(8)
      .chop(32)
      .speed(rand.range(1.0, 2.2))
      .sometimes(x => x.speed(-1))
      .gain(0.06)
      .hpf(1200)
      .lpf(7800)
      .degradeBy(0.18)
      .delay(0.22)
      .dt(0.125)
      .dfb(0.42)
      .room(0.22)
  )],

  [3, stack(
    note("<d4 f4 a4 c5> <eb4 g4 bb4 db5> <e4 a4 b4 d5> <f4 a4 c5 eb5> <fs4 a4 cs5 e5> <g4 bb4 d5 f5> <a4 c5 e5 g5> <bb4 d5 f5 a5>")
      .slow(1)
      .sound("piano")
      .gain(0.28)
      .attack(0.01)
      .release(0.42)
      .delay(0.24)
      .dt(0.25)
      .dfb(0.36)
      .room(0.22),

    n("0 2 3 7 10 7 3 2 0 2 5 7 8 7 5 3")
      .scale("D:minor")
      .sound("square")
      .fast(4)
      .octave(5)
      .gain(0.12)
      .slide(0.14)
      .lpf(sine.range(600, 5200).slow(2))
      .lpq(9.2)
      .pan(perlin.range(0.05, 0.95).slow(3))
      .delay(0.18)
      .dt(0.375)
      .dfb(0.28)
      .room(0.14),

    note("d2 ~ d2 c2 bb1 a1 g1 fs1 a1")
      .slow(1)
      .sound("triangle")
      .gain(0.24)
      .hpf(95)
      .lpf(1300)
      .lpq(7.6)
      .room(0.14),

    s("bd")
      .euclid(9, 16)
      .gain(0.2)
      .drive(0.32)
      .room(0.06),

    s("sn")
      .euclid(4, 16)
      .gain(0.12)
      .hpf(1900)
      .room(0.08),

    s("hh*16")
      .slow(1)
      .gain(0.07)
      .hpf(7200)
      .swing(0.22)
      .degradeBy(0.25)
      .room(0.1),

    s("machines metronome")
      .fast(4)
      .chop(16)
      .speed(rand.range(1.1, 1.9))
      .gain(0.055)
      .hpf(2400)
      .lpf(9800)
      .delay(0.16)
      .dt(0.25)
      .dfb(0.26)
      .room(0.12)
  )],

  [4, stack(
    note("<[bb2 d3 f3 a3] [b2 d3 f3 gs3]> <[ab2 c3 eb3 g3] [a2 cs3 e3 g3]> <[g2 bb2 d3 f3] [fs2 a2 c3 eb3]> <[f2 ab2 c3 eb3] [e2 g2 b2 d3]>")
      .slow(2)
      .sound("supersaw")
      .gain(0.22)
      .lpf(saw.range(260, 5400).slow(4))
      .lpq(8.9)
      .detune(12)
      .drive(0.35)
      .tremolo(0.75)
      .tremolosync(6)
      .phaser(0.14)
      .phaserdepth(0.62)
      .phasersweep(0.55)
      .phasercenter(780)
      .room(0.5),

    note("g2 gb2 f2 e2 eb2 d2 db2 c2")
      .slow(1)
      .sound("triangle")
      .gain(0.26)
      .hpf(90)
      .lpf(920)
      .lpq(7.2)
      .room(0.16),

    s("la_nuit ombre")
      .slow(2)
      .chop(48)
      .speed(rand.range(0.65, 1.05))
      .gain(0.07)
      .hpf(200)
      .lpf(3200)
      .delay(0.42)
      .dt(0.5)
      .dfb(0.64)
      .room(0.62)
  )],

  [2, stack(
    note("fs1")
      .slow(1)
      .sound("sine")
      .gain(0.18)
      .vowel("u o a e i")
      .ring(0.48)
      .ringf(sine.range(55, 330).slow(6))
      .lpf(sine.range(95, 860).slow(8))
      .lpq(8.6)
      .room(0.75)
      .size(0.92)
      .roomlp(1800),

    note("[bb4 a4] [g4 fs4] [g4 d4] [eb4 c4] [bb3 a3] [g3 fs3]")
      .fast(2)
      .sound("piano")
      .gain(0.2)
      .attack(0.01)
      .release(0.38)
      .delay(0.26)
      .dt(0.25)
      .dfb(0.46)
      .room(0.5),

    s("glass wrong_note")
      .euclid(9, 16)
      .chop(64)
      .speed(rand.range(0.5, 1.8))
      .gain(0.06)
      .hpf(700)
      .lpf(3600)
      .tremolo(0.7)
      .tremolosync(12)
      .delay(0.38)
      .dt(0.25)
      .dfb(0.68)
      .room(0.68)
  )],

  [4, stack(
    s("bd*2 [~ bd] bd")
      .slow(1)
      .gain(0.22)
      .drive(0.62)
      .distort(0.46)
      .compressor("0.62:5:0.2:0.01:0.11")
      .room(0.08),

    s("sn")
      .euclid(5, 16)
      .gain(0.12)
      .hpf(1800)
      .room(0.08),

    s("hh*32")
      .slow(2)
      .gain(0.07)
      .hpf(7600)
      .swing(0.16)
      .degradeBy(0.28)
      .delay(0.12)
      .dt(0.25)
      .dfb(0.18)
      .room(0.08),

    note("c5 d5 eb5 g5 fs5 g5 bb5 a5")
      .fast(4)
      .sound("piano")
      .gain(0.085)
      .attack(0.005)
      .release(0.1)
      .hpf(1500)
      .delay(0.14)
      .dt(0.25)
      .dfb(0.22)
      .room(0.12),

    n("0 2 5 7 10 12 10 7 5 3 2 0")
      .scale("G:minor")
      .sound("pulse")
      .fast(4)
      .octave(5)
      .gain(0.12)
      .slide(0.12)
      .lpf(sine.range(520, 6200).slow(2))
      .lpq(9.1)
      .pan(perlin.range(0.05, 0.95).slow(2))
      .delay(0.2)
      .dt(0.375)
      .dfb(0.26)
      .room(0.12),

    note("g1 ~ g1 f1 eb1 d1 c1 d1")
      .slow(1)
      .sound("supersaw")
      .gain(0.16)
      .lpf(sine.range(140, 980).slow(2))
      .lpq(8.8)
      .detune(8)
      .drive(0.28)
      .room(0.14),

    s("fracture unravel verschoben")
      .slow(1)
      .chop(24)
      .speed(rand.range(1.0, 2.4))
      .gain(0.07)
      .hpf(350)
      .lpf(5600)
      .degradeBy(0.16)
      .delay(0.28)
      .dt(0.25)
      .dfb(0.58)
      .room(0.22)
  )],

  [4, stack(
    note("<[bb2 d3 f3 a3] [b2 d3 f3 gs3]> <[g2 bb2 d3 f3] [fs2 a2 c3 eb3]> <[ab2 c3 eb3 g3] [a2 cs3 e3 g3]> <[f2 ab2 c3 eb3] [e2 g2 b2 d3]>")
      .slow(3)
      .sound("piano")
      .gain(0.28)
      .leslie(0.82)
      .attack(0.01)
      .release(0.9)
      .room(0.38)
      .delay(0.24)
      .dt(0.5)
      .dfb(0.34),

    note("f5 eb5 d5 c5 bb4 a4 g4 f4")
      .slow(2)
      .palindrome()
      .sound("triangle")
      .gain(0.19)
      .lpf(3200)
      .lpq(6.6)
      .room(0.2),

    s("bd ~ ~ bd ~ ~ bd ~")
      .slow(2)
      .gain(0.18)
      .drive(0.18)
      .room(0.08),

    s("hh*12")
      .slow(2)
      .gain(0.07)
      .hpf(7400)
      .swing(0.24)
      .degradeBy(0.48)
      .room(0.1),

    s("yume")
      .fast(2)
      .chop(24)
      .speed(rand.range(0.55, 1.8))
      .often(x => x.speed(-1))
      .gain(0.055)
      .hpf(1100)
      .lpf(6200)
      .phaser(0.32)
      .phaserdepth(0.78)
      .phasersweep(0.66)
      .phasercenter(1400)
      .delay(0.22)
      .dt(0.375)
      .dfb(0.3)
      .room(0.18)
  )],

  [4, stack(
    note("d2 a2 c3 f3 e3 bb2 a2 g2")
      .slow(2)
      .sound("triangle")
      .gain(0.28)
      .hpf(90)
      .lpf(1400)
      .lpq(7.8)
      .room(0.18),

    note("d4 ~ f4 ~ a4 ~ c5 ~")
      .fast(4)
      .sound("sine")
      .gain(0.08)
      .penv(1.4)
      .pattack(0.001)
      .pdecay(0.09)
      .psustain(0)
      .prelease(0.02)
      .hpf(900)
      .delay(0.24)
      .dt(0.25)
      .dfb(0.48)
      .room(0.24),

    s("bd")
      .euclid(11, 16)
      .gain(0.2)
      .drive(0.32)
      .room(0.06),

    s("i_am_not_done")
      .fast(8)
      .chop(16)
      .speed(rand.range(0.95, 1.6))
      .gain(0.06)
      .hpf(900)
      .lpf(8200)
      .distort(0.18)
      .delay(0.12)
      .dt(0.25)
      .dfb(0.22)
      .room(0.12),

    s("again_and_again")
      .slow(2)
      .chop(16)
      .speed(rand.range(0.6, 1.15))
      .gain(0.055)
      .hpf(450)
      .lpf(2600)
      .delay(0.34)
      .dt(0.25)
      .dfb(0.62)
      .room(0.52),

    s("between_teeth follow_me second_hand")
      .fast(4)
      .chop(32)
      .speed(rand.range(0.85, 1.55))
      .gain(0.055)
      .hpf(1800)
      .lpf(7600)
      .degradeBy(0.32)
      .delay(0.16)
      .dt(0.125)
      .dfb(0.5)
      .room(0.18)
  )],

  [4, stack(
    note("g2 d3 eb3 d3 c3 bb2 a2 g2")
      .slow(2)
      .sound("triangle")
      .gain(0.34)
      .hpf(95)
      .lpf(1700)
      .lpq(7.3)
      .room(0.22),

    note("<[g3 bb3 d4] [a3 c4 eb4]> <[gb3 bb3 db4] [f3 a3 c4]> <[e3 g3 b3] [eb3 g3 bb3]> <[d3 fs3 a3] [cs3 e3 g3]> <[c3 eb3 g3] [bb2 d3 f3]> <[a2 c3 eb3] [g2 bb2 d3]>")
      .slow(2)
      .sound("piano")
      .gain(0.3)
      .attack(0.02)
      .release(1.1)
      .leslie(0.7)
      .delay(0.3)
      .dt(0.5)
      .dfb(0.44)
      .room(0.54),

    note("[d5 f5 a5 cs6] [a5 f5 eb5 d5] [c5 eb5 g5 bb5] [bb4 d5 f5 a5] [a4 c5 eb5 g5] [g4 bb4 d5 f5] [fs4 a4 cs5 e5] [f4 a4 c5 eb5]")
      .fast(2)
      .sound("pulse")
      .gain(0.12)
      .hpf(1200)
      .attack(0.004)
      .release(0.07)
      .pan(perlin.range(0.1, 0.9).slow(2))
      .delay(0.2)
      .dt(0.375)
      .dfb(0.32)
      .room(0.16),

    s("bd [~ bd] [bd bd] [~ bd]")
      .slow(1)
      .gain(0.19)
      .drive(0.24)
      .room(0.06),

    s("cp ~ [rim rim] ~")
      .slow(1)
      .gain(0.085)
      .hpf(2400)
      .swing(0.18)
      .degradeBy(0.32)
      .delay(0.14)
      .dt(0.25)
      .dfb(0.2)
      .room(0.1),

    s("i_remember remember_me almost_home encore variation")
      .slow(2)
      .chop(32)
      .speed(rand.range(0.55, 1.35))
      .gain(0.07)
      .hpf(220)
      .lpf(3200)
      .delay(0.3)
      .dt(0.25)
      .dfb(0.56)
      .room(0.7)
  )]
)