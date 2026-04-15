setcps(92/60/4)

samples('shabda/speech:counterpoint,dissonance,inversion,retrograde,canon,ricercar,subject,fracture,mirror,spiral,again')
samples('shabda/speech/fr-FR/f:attention,machine,silence,vertige,lueur')

$: arrange(
  [8, stack(
    note("c2 [~ c2] eb2 ~ g1 [~ ab1] f1 ~")
      .sound("pulse")
      .gain(0.24)
      .lpf(perlin.range(400, 2400).slow(2))
      .lpq(8)
      .drive(0.65)
      .attack(0.02)
      .release(0.25)
      .pan(saw.range(0.2, 0.8).slow(4)),

    note("c5 ~ [eb5 g5] ~ d5 ~ [f5 ab5] ~")
      .sound("piano")
      .gain(0.22)
      .room(0.8)
      .delay(0.5)
      .dt(0.75)
      .dfb(0.65)
      .off(0.25, x => x.transpose(12).gain(0.12).pan(0.85))
      .pan(0.3),

    s("bd")
      .euclid(3, 8)
      .gain(0.26)
      .drive(0.4)
      .swing(0.15),

    s("hh*8")
      .gain(0.13)
      .hpf(7500)
      .degradeBy(0.2)
      .swing(0.15)
      .pan(tri.range(0.2, 0.8).fast(2)),

    s("attention ~ ~ machine")
      .slow(2)
      .chop(16)
      .begin(rand.range(0.1, 0.5))
      .end(rand.range(0.5, 0.9))
      .speed(rand.range(0.6, 0.9))
      .gain(0.16)
      .delay(0.4)
      .dt(0.5)
      .dfb(0.65)
      .vowel("a i")
      .sometimes(x => x.speed(-0.8))
      .pan(sine.range(0.1, 0.9).fast(2))
  )],

  [8, stack(
    note("[f4 ab4 c5] ~ [eb4 g4 bb4] ~ [db4 f4 ab4] ~ [c4 eb4 g4] ~")
      .slow(2)
      .arp("up")
      .sound("square")
      .gain(0.16)
      .lpf(sine.range(500, 3200).slow(4))
      .lpq(6)
      .room(0.8)
      .tremolo(0.6)
      .tremolosync(8)
      .vowel("o")
      .pan(sine.range(0.1, 0.9).slow(2)),

    note("f5 g5 ab5 c6 bb5 ab5 g5 eb5")
      .fast(2)
      .sound("piano")
      .gain(0.22)
      .room(0.6)
      .delay(0.35)
      .dt(0.375)
      .dfb(0.5)
      .off(0.125, x => x.transpose(-12).gain(0.15).pan(0.75))
      .palindrome()
      .pan(0.3),

    s("rim [~ rim] ~ rim")
      .fast(2)
      .gain(0.14)
      .room(0.4)
      .swing(0.2)
      .pan(saw.range(0.3, 0.7).fast(4)),

    s("counterpoint ~ dissonance ~")
      .slow(2)
      .chop(24)
      .speed(rand.range(0.5, 1.2))
      .gain(0.15)
      .hpf(600)
      .delay(0.3)
      .dt(0.75)
      .dfb(0.4)
      .vowel("u o")
      .jux(x => x.rev().pan(0.9))
  )],

  [8, stack(
    note("f1 ~ c2 ~ ab1 ~ eb2 ~")
      .sound("sine")
      .gain(0.2)
      .fm(12)
      .fmh(1.5)
      .fmenv(0.9)
      .fmattack(0.02)
      .fmdecay(0.8)
      .fmsustain(0.2)
      .fmrelease(3.0)
      .lpf(1200)
      .room(0.8)
      .roomlp(1000)
      .pan(0.5),

    note("f4 ab4 c5 eb5 f5 eb5 c5 ab4")
      .slow(1)
      .sound("supersaw")
      .gain(0.12)
      .lpf(sine.range(400, 2800).slow(4))
      .lpq(7)
      .attack(0.5)
      .release(1.5)
      .delay(0.5)
      .dt(0.5)
      .dfb(0.7)
      .pan(sine.range(0.1, 0.9).slow(3)),

    s("fracture mirror spiral")
      .slow(2)
      .chop(48)
      .striate(12)
      .begin(rand.range(0.1, 0.7))
      .end(rand.range(0.3, 1))
      .speed(rand.range(0.4, 0.9))
      .gain(0.14)
      .crush(4)
      .ring(0.8)
      .ringf(800)
      .ringdf(0.5)
      .hpf(800)
      .pan(tri.range(0.1, 0.9).fast(3))
  )],

  [8, stack(
    note("f1 ~ ab1 c2 ~ eb2 ~ g1")
      .sound("sawtooth")
      .gain(0.2)
      .lpf(1800)
      .lpq(8)
      .drive(0.8)
      .attack(0.01)
      .release(0.3)
      .pan(0.5),

    note("f4 ab4 c5 db5 eb5 c5 bb4 g4")
      .fast(2)
      .sound("square")
      .gain(0.11)
      .lpf(saw.range(800, 7000).slow(2))
      .lpq(6)
      .slide(0.15)
      .delay(0.4)
      .dt(0.125)
      .dfb(0.6)
      .pan(sine.range(0.2, 0.8).fast(2)),

    s("bd [~ bd] ~ bd")
      .fast(2)
      .gain(0.28)
      .drive(0.5)
      .swing(0.15),

    s("~ cp [~ cp] ~")
      .fast(2)
      .gain(0.18)
      .hpf(800)
      .room(0.4)
      .swing(0.15),

    s("hh*16")
      .gain(0.11)
      .hpf(8000)
      .degradeBy(0.25)
      .swing(0.15)
      .pan(saw.range(0.1, 0.9).fast(6)),

    s("inversion retrograde")
      .chop(16)
      .speed(rand.range(0.6, 1.1))
      .gain(0.13)
      .hpf(500)
      .delay(0.4)
      .dt(0.375)
      .dfb(0.6)
      .sometimes(x => x.rev().speed(-0.75))
      .pan(0.65)
  )],

  [8, stack(
    note("[f4 ab4 c5] ~ [eb4 g4 bb4] ~ [db4 f4 ab4] ~ [c4 e4 g4] ~")
      .sound("supersaw")
      .gain(0.14)
      .lpf(sine.range(400, 4200).slow(4))
      .lpq(7)
      .room(0.9)
      .delay(0.3)
      .dt(0.75)
      .dfb(0.6)
      .pan(0.5),

    s("cb*3, rd*4")
      .gain(0.12)
      .room(0.6)
      .hpf(1200)
      .swing(0.2)
      .pan(tri.range(0.1, 0.9).fast(3)),

    s("vertige lueur")
      .slow(4)
      .chop(32)
      .striate(8)
      .begin(rand.range(0.1, 0.6))
      .end(rand.range(0.4, 0.9))
      .speed(rand.range(0.4, 0.8))
      .gain(0.15)
      .hpf(400)
      .crush(3)
      .ring(0.6)
      .ringf(1100)
      .ringdf(0.4)
      .jux(x => x.rev().pan(0.8)),

    note("f3 ~ c4 ~ ab3 ~ e4 ~")
      .slow(2)
      .sound("piano")
      .gain(0.16)
      .room(0.95)
      .roomlp(1000)
      .delay(0.4)
      .dt(1.0)
      .dfb(0.7)
      .pan(sine.range(0.2, 0.8).slow(4))
  )],

  [8, stack(
    note("f4 ab4 c5 eb5 g5 bb5 c6 eb6")
      .arp("up down")
      .fast(8)
      .sound("pulse")
      .gain(0.1)
      .lpf(saw.range(1000, 8000).slow(2))
      .lpq(5)
      .delay(0.5)
      .dt(0.25)
      .dfb(0.7)
      .jux(x => x.transpose(-12).rev().gain(0.12)),

    note("f2 f2 f2 f2 ab2 ab2 c3 c3")
      .sound("sawtooth")
      .fast(2)
      .gain(0.18)
      .lpf(3200)
      .lpq(6)
      .drive(0.85)
      .attack(0.01)
      .release(0.15)
      .pan(0.5),

    s("bd(5,8)")
      .gain(0.28)
      .drive(0.6)
      .swing(0.15),

    s("cp")
      .slow(0.5)
      .late(0.5)
      .gain(0.18)
      .room(0.6)
      .hpf(1000),

    s("hh*16")
      .gain(0.1)
      .hpf(7000)
      .degradeBy(0.1)
      .swing(0.15),

    s("canon subject again")
      .chop(32)
      .speed(rand.range(0.6, 1.4))
      .gain(0.13)
      .vowel("o u")
      .delay(0.4)
      .dt(0.125)
      .dfb(0.6)
      .pan(square.range(0.1, 0.9).fast(4))
  )],

  [8, stack(
    note("f5 ~ ~ c5 ~ ab4 ~ e5")
      .slow(2)
      .sound("piano")
      .gain(0.2)
      .room(0.95)
      .delay(0.6)
      .dt(0.75)
      .dfb(0.8)
      .pan(0.5),

    note("f2 c3 ab3")
      .slow(4)
      .sound("sine")
      .gain(0.18)
      .fm(7)
      .fmh(2.5)
      .fmenv(0.8)
      .fmattack(0.5)
      .fmdecay(2.0)
      .fmsustain(0.15)
      .fmrelease(4.0)
      .room(0.95)
      .roomlp(600)
      .lpf(500)
      .attack(2)
      .release(6)
      .pan(0.5),

    s("ricercar silence")
      .slow(4)
      .chop(8)
      .begin(rand.range(0.2, 0.5))
      .end(rand.range(0.5, 0.8))
      .speed(rand.range(0.4, 0.6))
      .gain(0.14)
      .room(0.95)
      .delay(0.6)
      .dt(0.5)
      .dfb(0.7)
      .hpf(200)
      .sometimes(x => x.speed(-0.5).rev())
      .pan(sine.range(0.1, 0.9).slow(8))
  )]
)
.compressor("0.4:3.5:0.25:0.005:0.15")