// Goldberg Variations — mutated ground bass into bold variations

setcps(84/60/4)

samples('shabda/speech:goldberg,again,turn_the_page')

$: arrange(
  [4, stack(
    note("g3 gb3 e3 d3 b2 c3 d3 g2")
      .slow(2)
      .sound("triangle")
      .gain(0.5)
      .room(0.15),

    s("hh*8")
      .gain(0.12)
      .hpf(5500)
      .room(0.05)
  )],

  [4, stack(
    note("[g3 gb3] e3 [d3 ~] b2 c3 [d3 g2]")
      .slow(1)
      .sound("triangle")
      .gain(0.5)
      .lpf(1800)
      .lpq(6)
      .room(0.12),

    s("bd*2")
      .gain(0.18)
      .room(0.05),

    s("rim*8")
      .gain(0.1)
      .hpf(2200)
      .pan(sine.range(0.2, 0.8).slow(4))
      .room(0.08)
  )],

  [4, stack(
    note("g2 d3 e3 gb3 g3 a3 bb3 d4")
      .slow(1)
      .sound("piano")
      .gain(0.38)
      .delay(0.25)
      .dt(0.375)
      .dfb(0.35)
      .room(0.25),

    note("g3 d3 b2 c3 d3 e3 fs3 g3")
      .slow(2)
      .sound("square")
      .gain(0.22)
      .lpf(sine.range(400, 2400).slow(2))
      .lpq(7)
      .room(0.1),

    s("bd*4")
      .gain(0.2)
      .room(0.05),

    s("hh*16")
      .gain(0.09)
      .hpf(6500)
      .degradeBy(0.25)
      .room(0.07)
  )],

  [4, stack(
    note("g2 [g2 g3] d3 e3 gb3 d3 b2")
      .slow(1)
      .sound("supersaw")
      .gain(0.28)
      .lpf(saw.range(300, 3200).slow(4))
      .lpq(8)
      .drive(0.25)
      .delay(0.3)
      .dt(0.25)
      .dfb(0.45)
      .room(0.3),

    n("0 2 4 6 7 9 11 12")
      .scale("G:minor")
      .sound("pulse")
      .slow(1)
      .octave(5)
      .gain(0.18)
      .hpf(800)
      .attack(0.01)
      .release(0.15)
      .pan(perlin.range(0.1, 0.9).slow(2))
      .delay(0.2)
      .dt(0.5)
      .dfb(0.25)
      .room(0.12),

    s("[sn ~ sn sn]*2")
      .slow(1)
      .gain(0.12)
      .hpf(1200)
      .room(0.1),

    s("goldberg again turn_the_page")
      .slow(2)
      .chop(16)
      .speed(rand.range(0.8, 1.15))
      .gain(0.09)
      .hpf(300)
      .lpf(2400)
      .room(0.35)
  )],

  [4, stack(
    note("g2 ~ d3 ~ e3 ~ gb3 ~")
      .slow(1)
      .sound("triangle")
      .gain(0.35)
      .hpf(200)
      .lpf(900)
      .lpq(6)
      .room(0.2),

    s("oh*4")
      .gain(0.08)
      .hpf(4500)
      .degradeBy(0.4)
      .room(0.2),

    n("0 7 5 3 2 1 0")
      .scale("G:minor")
      .sound("piano")
      .slow(2)
      .octave(6)
      .gain(0.22)
      .attack(0.02)
      .release(0.4)
      .room(0.4),

    s("bd*2")
      .gain(0.12)
      .room(0.08)
  )]
)