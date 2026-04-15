// Goldberg Variations — personality drift: modulations, fractures, and a new spine

setcps(84/60/4)

samples('shabda/speech:goldberg,again,turn_the_page')
samples('shabda/speech/fr-FR/m:encore,variation,la_nuit')
samples('shabda/speech/ja-JP/f:yume')

$: arrange(
  [4, stack(
    note("g2 ~ gb2 d3 ~ e3 d3 c3 b2")
      .slow(1)
      .sound("triangle")
      .gain(0.52)
      .lpf(1400)
      .lpq(7)
      .room(0.14),

    s("bd")
      .euclid(3, 8)
      .gain(0.18)
      .room(0.06),

    s("hh")
      .euclid(5, 8)
      .fast(2)
      .gain(0.11)
      .hpf(6200)
      .room(0.05)
  )],

  [4, stack(
    note("[eb3 g3 bb3] [f3 a3 c4] [g3 bb3 d4] [bb2 d3 f3]")
      .slow(1)
      .sound("piano")
      .gain(0.36)
      .delay(0.22)
      .dt(0.375)
      .dfb(0.28)
      .room(0.26),

    note("eb2 bb2 f2 g2")
      .slow(1)
      .sound("square")
      .gain(0.22)
      .lpf(sine.range(280, 1900).slow(4))
      .lpq(8)
      .room(0.1),

    s("sn ~ sn [sn sn]")
      .slow(1)
      .gain(0.11)
      .hpf(1400)
      .room(0.1),

    s("hh*16")
      .gain(0.09)
      .hpf(7000)
      .degradeBy(0.2)
      .room(0.06)
  )],

  [4, stack(
    note("c3 d3 eb3 g3")
      .slow(2)
      .sound("supersaw")
      .gain(0.26)
      .lpf(saw.range(180, 2600).slow(6))
      .lpq(9)
      .drive(0.3)
      .room(0.38),

    s("goldberg encore la_nuit")
      .slow(2)
      .chop(32)
      .speed(rand.range(-1.1, 1.1))
      .gain(0.08)
      .hpf(240)
      .lpf(3200)
      .delay(0.3)
      .dt(0.25)
      .dfb(0.45)
      .room(0.42),

    s("cr")
      .euclid(3, 8)
      .fast(2)
      .gain(0.07)
      .hpf(5200)
      .room(0.2),

    s("bd*4")
      .gain(0.2)
      .drive(0.22)
      .distort(0.18)
      .room(0.06)
  )],

  [4, stack(
    n("0 2 4 7 9 7 4 2")
      .scale("Bb:major")
      .sound("pulse")
      .slow(1)
      .octave(6)
      .gain(0.17)
      .hpf(900)
      .attack(0.005)
      .release(0.12)
      .pan(perlin.range(0.15, 0.85).slow(3))
      .delay(0.25)
      .dt(0.375)
      .dfb(0.3)
      .room(0.16),

    note("bb2 ~ f3 g3 a3 ~ g3 f3")
      .slow(1)
      .sound("triangle")
      .gain(0.32)
      .hpf(100)
      .lpf(1150)
      .lpq(7)
      .room(0.2),

    s("bd*2")
      .slow(1)
      .gain(0.2)
      .room(0.06),

    s("hh*8")
      .slow(1)
      .gain(0.1)
      .hpf(6500)
      .swing(0.12)
      .room(0.06),

    s("[rim ~ rim rim]*2")
      .slow(1)
      .gain(0.09)
      .hpf(2400)
      .pan(sine.range(0.2, 0.8).slow(2))
      .room(0.08)
  )],

  [4, stack(
    note("g2")
      .slow(1)
      .sound("sine")
      .gain(0.22)
      .vowel("a e i o u")
      .lpf(sine.range(160, 1200).slow(8))
      .lpq(8)
      .room(0.55)
      .size(0.9)
      .roomlp(2400),

    note("d4 e4 gb4 a4 bb4 a4 gb4 e4")
      .slow(2)
      .sound("piano")
      .gain(0.2)
      .attack(0.02)
      .release(0.6)
      .delay(0.38)
      .dt(0.5)
      .dfb(0.52)
      .room(0.45),

    s("~ hh ~ hh")
      .slow(1)
      .gain(0.07)
      .hpf(7500)
      .degradeBy(0.55)
      .room(0.28),

    s("variation yume")
      .slow(4)
      .chop(16)
      .speed(rand.range(0.6, 0.95))
      .gain(0.07)
      .hpf(300)
      .lpf(2600)
      .room(0.5)
  )],

  [4, stack(
    s("bd*4")
      .gain(0.22)
      .drive(0.25)
      .distort(0.22)
      .room(0.08),

    s("hh*16")
      .gain(0.1)
      .hpf(6000)
      .degradeBy(0.15)
      .room(0.05),

    s("sn")
      .euclid(5, 16)
      .gain(0.11)
      .hpf(1600)
      .room(0.08),

    note("g2 g2 d3 eb3")
      .slow(1)
      .sound("supersaw")
      .gain(0.26)
      .lpf(saw.range(140, 1900).slow(2))
      .lpq(9)
      .drive(0.36)
      .slide(0.2)
      .delay(0.15)
      .dt(0.25)
      .dfb(0.25)
      .room(0.22),

    n("0 1 3 4 6 7 9 11")
      .scale("G:minor")
      .sound("square")
      .fast(2)
      .octave(6)
      .gain(0.12)
      .hpf(1000)
      .attack(0.005)
      .release(0.08)
      .penv(0.2)
      .pattack(0.01)
      .pdecay(0.08)
      .psustain(0)
      .prelease(0.01)
      .pan(perlin.range(0.1, 0.9).slow(1))
      .delay(0.18)
      .dt(0.375)
      .dfb(0.22)
      .room(0.12)
  )],

  [4, stack(
    note("g2 a2 bb2 d3 c3 bb2 a2 g2")
      .slow(2)
      .sound("piano")
      .gain(0.32)
      .leslie(0.6)
      .room(0.32)
      .delay(0.2)
      .dt(0.5)
      .dfb(0.28),

    note("d4 ~ eb4 g4 [bb4 a4] g4 eb4 d4")
      .slow(1)
      .sound("triangle")
      .gain(0.22)
      .lpf(2100)
      .lpq(6)
      .room(0.3),

    s("bd ~ ~ bd")
      .slow(1)
      .gain(0.14)
      .room(0.12),

    s("oh*4")
      .gain(0.08)
      .hpf(5200)
      .degradeBy(0.35)
      .room(0.28),

    s("again turn_the_page")
      .slow(2)
      .chop(16)
      .speed(rand.range(0.85, 1.05))
      .gain(0.07)
      .hpf(260)
      .lpf(2400)
      .room(0.4)
  )]
)