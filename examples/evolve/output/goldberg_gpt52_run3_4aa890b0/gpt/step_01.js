// Goldberg Variations - Ground Bass (BWV 988)
// Variations: mood-shifts, reharmonizations, rhythm swaps, and an unexpected voice

setcps(72/60/4)

samples('shabda/speech:aria,mutate,again')

$: arrange(
  [6, stack(
    note("g3 gb3 e3 d3 b2 c3 d3 g2")
      .slow(2)
      .sound("triangle")
      .gain(0.45)
      .room(0.12),

    s("hh*8")
      .gain(0.12)
      .hpf(5000)
      .room(0.05),

    note("<g4 d4 bb3 c4>*2")
      .slow(2)
      .sound("piano")
      .gain(0.22)
      .room(0.2)
      .delay(0.12)
      .dt(0.25)
      .dfb(0.35)
  )],

  [6, stack(
    note("g3 ~ e3 d3 b2 c3 ~ d3 g2")
      .slow(2)
      .sound("pulse")
      .gain(0.5)
      .lpf(900)
      .lpq(6)
      .lpenv(0.6)
      .lpattack(0.01)
      .lpdecay(0.25)
      .lpsustain(0.2)
      .lprelease(0.1)
      .room(0.1),

    s("bd*2 [~ sn] bd*2 sn")
      .fast(2)
      .gain(0.22)
      .room(0.04),

    note("d5 c5 bb4 a4 g4 fs4 g4 d4")
      .slow(2)
      .sound("supersaw")
      .gain(0.18)
      .hpf(200)
      .room(0.25)
      .delay(0.2)
      .dt(0.375)
      .dfb(0.45)
  )],

  [6, stack(
    note("g3 f3 e3 eb3 d3 c3 b2 g2")
      .slow(2)
      .sound("sawtooth")
      .gain(0.42)
      .lpf(700)
      .lpq(7)
      .room(0.08),

    s("bd*4")
      .gain(0.18),

    s("hh*16")
      .gain(0.1)
      .hpf(6000)
      .degradeBy(0.25),

    note("c5 e5 g5 bb5 a5 g5 e5 d5")
      .slow(1)
      .sound("piano")
      .gain(0.2)
      .room(0.3)
      .delay(0.15)
      .dt(0.5)
      .dfb(0.4)
      .off(0.25, x => x.transpose(7).gain(0.12))
  )],

  [6, stack(
    note("g3 gb3 e3 d3 b2 c3 d3 g2")
      .slow(1)
      .sound("triangle")
      .gain(0.35)
      .cutoff(sine.range(200, 2000).slow(4))
      .resonance(8)
      .room(0.15),

    s("[bd*2 bd] sn")
      .fast(2)
      .gain(0.24)
      .distort(0.2),

    s("oh*4")
      .gain(0.11)
      .hpf(3000)
      .room(0.07),

    s("aria mutate again")
      .slow(2)
      .chop(16)
      .speed(rand.range(0.85, 1.15))
      .gain(0.14)
      .hpf(800)
      .delay(0.25)
      .dt(0.25)
      .dfb(0.5)
      .room(0.25)
  )],

  [8, stack(
    note("g2 d3 eb3 f3 g3 bb3 c4 d4")
      .slow(2)
      .sound("sine")
      .gain(0.4)
      .attack(0.02)
      .release(0.3)
      .lpf(1200)
      .room(0.35)
      .size(0.9)
      .roomlp(2500),

    note("g4 bb4 d5 f5 eb5 d5 bb4 g4")
      .slow(4)
      .sound("supersaw")
      .gain(0.16)
      .attack(0.3)
      .release(1)
      .hpf(150)
      .phaser(0.2)
      .phaserdepth(0.7)
      .room(0.4)
      .delay(0.2)
      .dt(0.75)
      .dfb(0.55),

    s("hh*8")
      .gain(0.08)
      .hpf(7000)
      .degradeBy(0.6)
  )]
)