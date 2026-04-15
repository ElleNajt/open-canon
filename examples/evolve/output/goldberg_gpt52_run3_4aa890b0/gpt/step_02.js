// Goldberg Variations (BWV 988) — Recomposed Variations
// Bold mood-shifts, reharmonizations, rhythm swaps, and a few human interruptions

setcps(72/60/4)

samples('shabda/speech:aria,mutate,again,listen,closer')
samples('shabda/speech/fr-FR/m:magnifique,encore')
samples('shabda/speech/ja-JP/f:kimashita')

$: arrange(
  [6, stack(
    note("g3 d3 eb3 f3 g3 d3 c3 d3")
      .slow(2)
      .sound("triangle")
      .gain(0.42)
      .lpf(1400)
      .lpq(5)
      .room(0.12),

    note("[bb4 d5 g5 d5] [c5 eb5 g5 eb5] [a4 c5 fs5 c5] [bb4 d5 g5 d5]")
      .slow(2)
      .sound("piano")
      .gain(0.2)
      .room(0.22)
      .delay(0.12)
      .dt(0.25)
      .dfb(0.32),

    s("hh*8")
      .gain(0.1)
      .hpf(6500)
      .degradeBy(0.25)
      .room(0.05)
  )],

  [6, stack(
    note("g3 ~ eb3 d3 f3 eb3 c3 d3")
      .slow(2)
      .sound("pulse")
      .gain(0.5)
      .lpf(950)
      .lpq(7)
      .lpenv(0.7)
      .lpattack(0.01)
      .lpdecay(0.22)
      .lpsustain(0.15)
      .lprelease(0.12)
      .room(0.1),

    s("bd*3, [~ sn] sn")
      .fast(2)
      .gain(0.22)
      .room(0.04)
      .compressor("-18:3:6:0.01:0.12"),

    note("d5 c5 bb4 a4 g4 fs4 g4 d4")
      .slow(2)
      .sound("supersaw")
      .gain(0.18)
      .slide(0.2)
      .hpf(220)
      .delay(0.22)
      .dt(0.375)
      .dfb(0.45)
      .room(0.22)
      .off(0.25, x => x.transpose(12).gain(0.12).hpf(500))
  )],

  [6, stack(
    note("g3 f3 e3 eb3 d3 c3 b2 g2")
      .slow(2)
      .sound("sawtooth")
      .gain(0.44)
      .lpf(720)
      .lpq(8)
      .room(0.08),

    s("rim*2 [~ rim] rim, bd*3")
      .fast(2)
      .gain(0.16)
      .hpf(700)
      .distort(0.12)
      .room(0.05),

    note("<g4 bb4 d5 g5> <f4 a4 c5 f5> <eb4 g4 bb4 eb5> <d4 fs4 a4 d5>")
      .slow(2)
      .arp("up")
      .sound("square")
      .gain(0.16)
      .vowel("a e i o u")
      .cutoff(sine.range(300, 2600).slow(4))
      .resonance(7)
      .delay(0.15)
      .dt(0.5)
      .dfb(0.42)
      .room(0.25)
      .juxBy(0.5, x => x.transpose(7).gain(0.12).hpf(600))
  )],

  [6, stack(
    note("g2 d3 eb3 f3 g3 bb3 c4 a3")
      .slow(4)
      .sound("sine")
      .gain(0.36)
      .attack(0.03)
      .release(0.6)
      .lpf(1000)
      .lpq(6)
      .room(0.4)
      .size(0.95)
      .roomlp(2200),

    note("g5 fs5 g5 d5 eb5 d5 c5 bb4")
      .slow(2)
      .sound("triangle")
      .gain(0.12)
      .attack(0.02)
      .release(0.25)
      .ring(0.35)
      .ringf(sine.range(70, 380).slow(8))
      .hpf(300)
      .delay(0.25)
      .dt(0.25)
      .dfb(0.55)
      .room(0.28),

    s("magnifique encore kimashita")
      .slow(2)
      .chop(16)
      .speed(rand.range(0.8, 1.2))
      .gain(0.12)
      .hpf(900)
      .delay(0.3)
      .dt(0.25)
      .dfb(0.6)
      .room(0.35)
  )],

  [6, stack(
    note("g3 d3 f3 eb3 d3 c3 d3 g2")
      .slow(2)
      .sound("pulse")
      .gain(0.46)
      .lpf(850)
      .lpq(7)
      .lpenv(0.65)
      .lpattack(0.005)
      .lpdecay(0.18)
      .lpsustain(0.12)
      .lprelease(0.08)
      .room(0.1)
      .swing(0.12),

    s("bd*4")
      .gain(0.2)
      .distort(0.18)
      .swing(0.12),

    s("hh*16")
      .euclid(11, 16)
      .gain(0.09)
      .hpf(6500)
      .degradeBy(0.35)
      .swing(0.12),

    note("<bb4 d5 g5> <c5 eb5 g5> <d5 fs5 a5> <eb5 g5 bb5>")
      .slow(2)
      .arp("down")
      .sound("supersaw")
      .gain(0.16)
      .attack(0.08)
      .release(0.3)
      .hpf(160)
      .leslie(0.35)
      .room(0.3)
      .delay(0.18)
      .dt(0.375)
      .dfb(0.45)
  )],

  [8, stack(
    note("g2 d3 eb3 f3 g3 bb3 c4 d4")
      .slow(2)
      .sound("sine")
      .gain(0.4)
      .attack(0.02)
      .release(0.35)
      .lpf(1200)
      .room(0.35)
      .size(0.9)
      .roomlp(2500)
      .off(0.5, x => x.transpose(12).gain(0.14).hpf(200)),

    note("[g4 bb4 d5 f5] [a4 c5 eb5 g5] [bb4 d5 f5 a5] [d5 f5 a5 c6]")
      .slow(2)
      .sound("supersaw")
      .gain(0.17)
      .attack(0.12)
      .release(0.45)
      .hpf(180)
      .phaser(0.25)
      .phaserdepth(0.75)
      .delay(0.25)
      .dt(0.75)
      .dfb(0.6)
      .room(0.35)
      .echo(3, 0.25, 0.35)
      .distort(0.12),

    s("[bd*2 bd] sn")
      .fast(2)
      .gain(0.24)
      .distort(0.25)
      .compressor("-16:4:6:0.01:0.12"),

    s("oh*4")
      .gain(0.11)
      .hpf(3200)
      .room(0.08),

    s("aria listen closer mutate again")
      .slow(2)
      .chop(16)
      .speed(rand.range(0.75, 1.25))
      .gain(0.12)
      .hpf(700)
      .delay(0.35)
      .dt(0.25)
      .dfb(0.65)
      .room(0.4)
  )],

  [8, stack(
    note("g2 ~ d3 eb3 ~ f3 eb3 d3 ~")
      .slow(4)
      .palindrome()
      .sound("triangle")
      .gain(0.34)
      .cutoff(sine.range(250, 1800).slow(8))
      .resonance(7)
      .room(0.3)
      .size(0.95)
      .roomlp(1800),

    note("g4 d4 eb4 f4 g4 bb4 a4 g4")
      .slow(4)
      .sound("piano")
      .gain(0.14)
      .delay(0.22)
      .dt(0.5)
      .dfb(0.5)
      .room(0.35)
      .off(0.5, x => x.transpose(-12).gain(0.1).lpf(1200)),

    s("again ~ mutate ~ aria ~")
      .slow(4)
      .chop(32)
      .speed(rand.range(0.6, 1.1))
      .gain(0.11)
      .hpf(900)
      .delay(0.4)
      .dt(0.75)
      .dfb(0.7)
      .room(0.45)
  )]
)