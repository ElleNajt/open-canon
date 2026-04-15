// Goldberg Variations (BWV 988) — Recomposed Variations (evolved)
// Bold reharmonizations, rhythm swaps, and human interruptions

setcps(72/60/4)

samples('shabda/speech:aria,mutate,again,listen,closer,wrong_turn,keep_up')
samples('shabda/speech/fr-FR/m:magnifique,encore,toujours')
samples('shabda/speech/ja-JP/f:kimashita')

$: arrange(
  [6, stack(
    note("g3 d3 eb3 f3 fs3 g3 a3 bb3")
      .slow(2)
      .sound("triangle")
      .gain(0.42)
      .lpf(1300)
      .lpq(6)
      .room(0.12),

    note("[bb4 d5 g5 d5] [b4 d5 fs5 d5] [c5 eb5 g5 eb5] [cs5 e5 a5 e5]")
      .slow(2)
      .sound("piano")
      .gain(0.2)
      .room(0.22)
      .delay(0.16)
      .dt(0.25)
      .dfb(0.35)
      .off(0.5, x => x.transpose(12).gain(0.12).hpf(600)),

    s("hh*12")
      .euclid(9, 12)
      .gain(0.1)
      .hpf(6800)
      .degradeBy(0.18)
      .room(0.05),

    s("aria ~ listen ~")
      .slow(4)
      .chop(16)
      .speed(rand.range(0.85, 1.1))
      .gain(0.11)
      .hpf(900)
      .delay(0.22)
      .dt(0.25)
      .dfb(0.55)
      .room(0.18)
  )],

  [6, stack(
    note("g3 ~ f3 eb3 d3 eb3 c3 ~")
      .slow(2)
      .sound("pulse")
      .gain(0.5)
      .lpf(900)
      .lpq(7)
      .lpenv(0.75)
      .lpattack(0.01)
      .lpdecay(0.2)
      .lpsustain(0.12)
      .lprelease(0.1)
      .room(0.1),

    s("bd*4")
      .gain(0.22)
      .compressor("-18:3:6:0.01:0.12")
      .off(0.5, x => x.gain(0.16).distort(0.18)),

    s("sn*8")
      .euclid(5, 8)
      .fast(2)
      .gain(0.16)
      .hpf(900)
      .room(0.05),

    note("d5 eb5 g5 a5 bb5 a5 g5 fs5")
      .slow(2)
      .sound("supersaw")
      .gain(0.18)
      .slide(0.25)
      .hpf(220)
      .delay(0.24)
      .dt(0.375)
      .dfb(0.5)
      .room(0.22)
      .juxBy(0.5, x => x.transpose(-12).gain(0.12).lpf(1400))
  )],

  [6, stack(
    note("g3 f3 eb3 d3 c3 b2 c3 d3")
      .slow(2)
      .sound("sawtooth")
      .gain(0.44)
      .lpf(680)
      .lpq(8)
      .room(0.08)
      .off(0.25, x => x.transpose(12).gain(0.12).hpf(250)),

    s("mt*6, [~ lt] lt")
      .fast(2)
      .gain(0.14)
      .hpf(500)
      .room(0.05)
      .distort(0.12),

    s("cb*8")
      .euclid(5, 8)
      .fast(2)
      .gain(0.12)
      .hpf(900)
      .room(0.04),

    note("<g4 bb4 d5 g5> <ab4 c5 eb5 ab5> <f4 a4 c5 f5> <fs4 a4 cs5 fs5>")
      .slow(2)
      .arp("up")
      .sound("square")
      .gain(0.16)
      .vowel("a e i o u")
      .cutoff(tri.range(350, 2800).slow(4))
      .resonance(7)
      .delay(0.18)
      .dt(0.5)
      .dfb(0.45)
      .room(0.25)
      .juxBy(0.5, x => x.transpose(7).gain(0.12).hpf(600))
  )],

  [6, stack(
    note("c3 g2 ab2 bb2 c3 eb3 f3 g3")
      .slow(4)
      .sound("sine")
      .gain(0.36)
      .attack(0.03)
      .release(0.7)
      .lpf(950)
      .lpq(6)
      .room(0.45)
      .size(0.95)
      .roomlp(2000),

    note("eb5 f5 g5 bb5 a5 g5 f5 eb5")
      .slow(2)
      .sound("triangle")
      .gain(0.12)
      .attack(0.02)
      .release(0.28)
      .ring(0.4)
      .ringf(sine.range(55, 410).slow(8))
      .hpf(260)
      .delay(0.35)
      .dt(0.25)
      .dfb(0.65)
      .room(0.3)
      .off(0.25, x => x.transpose(12).gain(0.1).hpf(600)),

    s("wrong_turn encore kimashita")
      .slow(2)
      .chop(24)
      .speed(rand.range(0.65, 1.25))
      .gain(0.12)
      .hpf(850)
      .delay(0.38)
      .dt(0.25)
      .dfb(0.7)
      .room(0.42)
      .cut(1)
  )],

  [6, stack(
    note("c3 eb3 g3 f3 db3 f3 ab3 g3")
      .slow(2)
      .sound("pulse")
      .gain(0.46)
      .lpf(820)
      .lpq(7)
      .lpenv(0.7)
      .lpattack(0.005)
      .lpdecay(0.16)
      .lpsustain(0.1)
      .lprelease(0.09)
      .room(0.12)
      .swing(0.16),

    s("bd*8")
      .euclid(5, 8)
      .gain(0.2)
      .distort(0.22)
      .swing(0.16),

    s("hh*16")
      .euclid(13, 16)
      .gain(0.09)
      .hpf(7000)
      .degradeBy(0.28)
      .swing(0.16),

    note("<c5 eb5 g5> <db5 f5 ab5> <bb4 d5 f5> <g4 bb4 d5>")
      .slow(2)
      .arp("down")
      .sound("supersaw")
      .gain(0.17)
      .attack(0.09)
      .release(0.34)
      .hpf(160)
      .leslie(0.4)
      .room(0.3)
      .delay(0.2)
      .dt(0.375)
      .dfb(0.48)
      .off(0.5, x => x.transpose(12).gain(0.12).hpf(500)),

    s("keep_up ~ mutate ~")
      .slow(4)
      .chop(16)
      .speed(rand.range(0.8, 1.15))
      .gain(0.11)
      .hpf(900)
      .delay(0.28)
      .dt(0.25)
      .dfb(0.6)
      .room(0.22)
      .cut(1)
  )],

  [8, stack(
    note("g2 d3 f3 eb3 g3 bb3 c4 d4")
      .slow(2)
      .sound("sine")
      .gain(0.4)
      .attack(0.02)
      .release(0.35)
      .lpf(1150)
      .room(0.35)
      .size(0.9)
      .roomlp(2400)
      .off(0.5, x => x.transpose(12).gain(0.14).hpf(200)),

    note("[g4 bb4 d5 f5] [fs4 a4 cs5 e5] [f4 ab4 c5 eb5] [eb4 g4 bb4 d5]")
      .slow(2)
      .sound("supersaw")
      .gain(0.17)
      .attack(0.1)
      .release(0.5)
      .hpf(180)
      .phaser(0.3)
      .phaserdepth(0.8)
      .delay(0.3)
      .dt(0.75)
      .dfb(0.62)
      .room(0.35)
      .echo(3, 0.25, 0.35)
      .distort(0.16)
      .juxBy(0.5, x => x.transpose(7).gain(0.12).lpf(1600)),

    s("bd*8")
      .euclid(5, 8)
      .fast(2)
      .gain(0.24)
      .distort(0.25)
      .compressor("-16:4:6:0.01:0.12"),

    s("sn*8")
      .euclid(3, 8)
      .fast(2)
      .gain(0.16)
      .hpf(1200)
      .room(0.05),

    s("rd*8")
      .fast(2)
      .gain(0.1)
      .hpf(5000)
      .degradeBy(0.2)
      .room(0.08),

    s("aria listen closer always")
      .slow(2)
      .chop(32)
      .speed(rand.range(0.75, 1.25))
      .gain(0.12)
      .hpf(750)
      .delay(0.4)
      .dt(0.25)
      .dfb(0.7)
      .room(0.42)
      .cut(1)
  )],

  [8, stack(
    note("g2 ~ d3 eb3 ~ f3 eb3 d3 ~")
      .slow(4)
      .palindrome()
      .sound("triangle")
      .gain(0.34)
      .cutoff(sine.range(220, 1700).slow(8))
      .resonance(8)
      .room(0.32)
      .size(0.95)
      .roomlp(1700),

    note("bb4 a4 g4 fs4 g4 d4 eb4 f4")
      .slow(4)
      .sound("piano")
      .gain(0.14)
      .delay(0.24)
      .dt(0.5)
      .dfb(0.55)
      .room(0.38)
      .off(0.5, x => x.transpose(-12).gain(0.1).lpf(1200)),

    note("d5 ~ eb5 ~ f5 ~ g5 ~")
      .slow(2)
      .sound("sine")
      .gain(0.11)
      .attack(0.01)
      .release(0.5)
      .tremolo(0.35)
      .tremolosync(6)
      .hpf(320)
      .delay(0.28)
      .dt(0.75)
      .dfb(0.55)
      .room(0.4),

    s("again ~ toujours ~ aria ~")
      .slow(4)
      .chop(32)
      .speed(rand.range(0.6, 1.1))
      .gain(0.11)
      .hpf(900)
      .delay(0.45)
      .dt(0.75)
      .dfb(0.72)
      .room(0.48)
      .cut(1)
  )],

  [6, stack(
    note("g2 g3 d3 g3 eb3 g3 f3 g3")
      .slow(2)
      .sound("sine")
      .gain(0.34)
      .attack(0.01)
      .release(0.25)
      .lpf(1200)
      .lpq(6)
      .room(0.28)
      .size(0.9)
      .roomlp(2200),

    note("g5 fs5 f5 eb5 d5 cs5 c5 b4")
      .slow(2)
      .sound("square")
      .gain(0.14)
      .slide(0.18)
      .cutoff(perlin.range(400, 3200).slow(6))
      .resonance(8)
      .delay(0.25)
      .dt(0.375)
      .dfb(0.55)
      .room(0.32)
      .ring(0.22)
      .ringf(sine.range(90, 260).slow(4)),

    s("cb*16")
      .euclid(7, 16)
      .gain(0.11)
      .hpf(900)
      .room(0.06),

    s("mutate ~ again ~")
      .slow(2)
      .chop(16)
      .speed(rand.range(0.85, 1.2))
      .gain(0.1)
      .hpf(900)
      .delay(0.3)
      .dt(0.25)
      .dfb(0.62)
      .room(0.3)
      .cut(1)
  )]
)