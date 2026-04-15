setcps(92/60/4)

samples('shabda/speech:counterpoint,dissonance,inversion,retrograde,canon,ricercar,subject,fracture,mirror,spiral,again')
samples('shabda/speech/fr-FR/f:attention,machine,silence,vertige,lueur')

$: arrange(
  [8, stack(
    note("c3 [db3 eb3] g2 [bb2 a2] f2 [fs2 g2] eb2 [d2 c2]")
      .sound("pulse")
      .gain(0.22)
      .lpf(perlin.range(300, 3800).slow(2))
      .lpq(7)
      .drive(0.55)
      .attack(0.01)
      .release(0.18)
      .pan(saw.range(0.15, 0.85).slow(4)),

    note("[c5 g4] [eb5 a4] [d5 bb4] [f5 c5] [g5 d5] [eb5 bb4] [d5 a4] [c5 g4]")
      .sound("piano")
      .gain(0.2)
      .room(0.65)
      .delay(0.35)
      .dt(0.375)
      .dfb(0.55)
      .off(0.5, x => x.transpose(12).gain(0.14).pan(0.82))
      .pan(0.28),

    s("bd")
      .euclid(5, 8)
      .gain(0.22)
      .drive(0.35)
      .swing(0.12),

    s("hh*8")
      .gain(0.1)
      .hpf(6500)
      .degradeBy(0.15)
      .swing(0.12)
      .pan(tri.range(0.3, 0.7).fast(2)),

    s("attention ~ machine ~")
      .slow(2)
      .chop(32)
      .begin(rand.range(0, 0.6))
      .end(rand.range(0.4, 1))
      .speed(rand.range(0.75, 1.25))
      .gain(0.14)
      .delay(0.35)
      .dt(0.25)
      .dfb(0.6)
      .vowel("a e")
      .sometimes(x => x.speed(-1))
      .pan(sine.range(0.2, 0.8).fast(2))
  )],

  [8, stack(
    note("[c4 eb4 g4 bb4] [db4 f4 ab4 b4] [c4 eb4 g4 a4] [bb3 d4 f4 a4]")
      .slow(2)
      .arp("up")
      .sound("supersaw")
      .gain(0.14)
      .lpf(sine.range(700, 5200).slow(4))
      .lpq(6)
      .room(0.75)
      .tremolo(0.55)
      .tremolosync(8)
      .pan(sine.range(0.1, 0.9).slow(2)),

    note("c5 d5 eb5 g5 f5 eb5 d5 bb4")
      .scale("C:dorian")
      .fast(2)
      .sound("piano")
      .gain(0.21)
      .room(0.5)
      .delay(0.25)
      .dt(0.375)
      .dfb(0.45)
      .off(0.125, x => x.transpose(7).gain(0.13).pan(0.7))
      .palindrome()
      .pan(0.4),

    s("mt [~ ht] mt ht")
      .fast(2)
      .gain(0.12)
      .hpf(900)
      .swing(0.18)
      .pan(saw.range(0.25, 0.75).fast(4)),

    s("counterpoint dissonance")
      .slow(2)
      .chop(16)
      .speed(rand.range(0.6, 1.4))
      .gain(0.14)
      .hpf(500)
      .delay(0.25)
      .dt(0.5)
      .dfb(0.35)
      .vowel("i o")
      .jux(x => x.rev().pan(0.85))
  )],

  [8, stack(
    note("c2 ~ g2 ~ eb2 ~ bb1 ~")
      .sound("sine")
      .gain(0.18)
      .fm(9)
      .fmh(1.25)
      .fmenv(0.85)
      .fmattack(0.01)
      .fmdecay(0.6)
      .fmsustain(0.15)
      .fmrelease(2.2)
      .lpf(1400)
      .room(0.7)
      .roomlp(1200)
      .pan(0.55),

    note("c5 bb4 g4 eb5 d5 f5 g5 bb5")
      .slow(2)
      .sound("triangle")
      .gain(0.11)
      .lpf(sine.range(900, 4200).slow(2))
      .lpq(5)
      .delay(0.45)
      .dt(0.375)
      .dfb(0.65)
      .tremolo(0.6)
      .tremolosync(6)
      .pan(sine.range(0.2, 0.8).slow(3)),

    s("fracture mirror spiral")
      .slow(2)
      .chop(64)
      .striate(8)
      .begin(rand.range(0, 0.8))
      .end(rand.range(0.2, 1))
      .speed(rand.range(0.5, 1.6))
      .gain(0.12)
      .crush(3)
      .ring(0.7)
      .ringf(1200)
      .ringdf(0.35)
      .hpf(700)
      .pan(tri.range(0.05, 0.95).fast(2))
  )],

  [8, stack(
    note("c2 c2 ~ g1 [bb1 a1] ~ eb2 ~ g1")
      .sound("square")
      .gain(0.22)
      .lpf(2200)
      .lpq(7)
      .drive(0.65)
      .attack(0.01)
      .release(0.12)
      .pan(0.45),

    note("c4 eb4 f4 g4 bb4 a4 g4 f4")
      .fast(2)
      .sound("sawtooth")
      .gain(0.13)
      .lpf(saw.range(600, 6000).slow(2))
      .lpq(5)
      .slide(0.2)
      .delay(0.35)
      .dt(0.25)
      .dfb(0.55)
      .pan(sine.range(0.25, 0.75).fast(2)),

    s("bd bd [~ bd] bd")
      .fast(2)
      .gain(0.23)
      .drive(0.45)
      .swing(0.1),

    s("~ sn ~ sn")
      .fast(2)
      .gain(0.16)
      .hpf(1200)
      .room(0.35)
      .swing(0.1),

    s("hh*16")
      .gain(0.09)
      .hpf(7000)
      .degradeBy(0.18)
      .swing(0.12)
      .pan(saw.range(0.1, 0.9).fast(8)),

    s("inversion retrograde")
      .chop(32)
      .speed(rand.range(0.8, 1.3))
      .gain(0.11)
      .hpf(400)
      .delay(0.3)
      .dt(0.125)
      .dfb(0.5)
      .sometimes(x => x.rev().speed(-1))
      .pan(0.6)
  )],

  [8, stack(
    note("[c4 eb4 g4 bb4] ~ [db4 f4 ab4 b4] ~ [c4 eb4 g4 a4] ~ [bb3 d4 f4 a4] ~")
      .sound("supersaw")
      .gain(0.13)
      .lpf(sine.range(500, 3600).slow(3))
      .lpq(6)
      .room(0.85)
      .delay(0.25)
      .dt(0.75)
      .dfb(0.55)
      .pan(0.5),

    s("cb*4, rd*2")
      .gain(0.1)
      .room(0.55)
      .hpf(900)
      .swing(0.16)
      .pan(tri.range(0.2, 0.8).fast(2)),

    s("vertige lueur")
      .slow(2)
      .chop(24)
      .striate(6)
      .begin(rand.range(0, 0.7))
      .end(rand.range(0.3, 1))
      .speed(rand.range(0.65, 1.35))
      .gain(0.13)
      .hpf(600)
      .crush(2)
      .ring(0.55)
      .ringf(900)
      .ringdf(0.45)
      .jux(x => x.rev().pan(0.85)),

    note("c3 ~ g3 ~ bb3 ~ eb4 ~")
      .slow(2)
      .sound("piano")
      .gain(0.14)
      .room(0.9)
      .roomlp(1200)
      .delay(0.35)
      .dt(0.5)
      .dfb(0.6)
      .pan(sine.range(0.25, 0.75).slow(4))
  )],

  [8, stack(
    note("c3 eb3 g3 bb3 d4 f4 a4 c5")
      .arp("up down")
      .fast(8)
      .sound("sawtooth")
      .gain(0.12)
      .lpf(saw.range(700, 6500).slow(2))
      .lpq(4)
      .delay(0.45)
      .dt(0.25)
      .dfb(0.65)
      .jux(x => x.transpose(12).rev().gain(0.1)),

    note("c2 ~ c2 g1 [bb1 a1] eb2 ~ g1")
      .sound("pulse")
      .fast(2)
      .gain(0.2)
      .lpf(2600)
      .lpq(7)
      .drive(0.7)
      .attack(0.01)
      .release(0.1)
      .pan(0.5),

    s("bd*4")
      .gain(0.25)
      .drive(0.5)
      .swing(0.12),

    s("cp")
      .euclid(3, 8)
      .late(0.5)
      .gain(0.16)
      .room(0.5)
      .hpf(1200),

    s("hh*16")
      .gain(0.09)
      .hpf(6500)
      .degradeBy(0.08)
      .swing(0.12),

    s("canon subject again")
      .chop(16)
      .speed(rand.range(0.85, 1.25))
      .gain(0.12)
      .vowel("a e i o")
      .delay(0.35)
      .dt(0.375)
      .dfb(0.55)
      .pan(sine.range(0.1, 0.9).fast(2))
  )],

  [8, stack(
    note("c4 ~ ~ eb4 ~ g4 ~ d5")
      .slow(2)
      .sound("piano")
      .gain(0.2)
      .room(0.9)
      .delay(0.55)
      .dt(0.75)
      .dfb(0.75)
      .pan(0.5),

    note("c3 g3 eb4")
      .slow(2)
      .sound("sine")
      .gain(0.16)
      .fm(5)
      .fmh(2)
      .fmenv(0.65)
      .fmattack(0.08)
      .fmdecay(1.2)
      .fmsustain(0.12)
      .fmrelease(3.5)
      .room(0.9)
      .roomlp(900)
      .lpf(700)
      .attack(1)
      .release(5)
      .pan(0.55),

    s("ricercar silence")
      .slow(2)
      .chop(12)
      .begin(rand.range(0, 0.6))
      .end(rand.range(0.4, 1))
      .speed(rand.range(0.7, 1.05))
      .gain(0.12)
      .room(0.95)
      .delay(0.4)
      .dt(0.5)
      .dfb(0.55)
      .hpf(300)
      .sometimes(x => x.speed(-1).rev())
      .pan(sine.range(0.2, 0.8).slow(6))
  )]
)
.compressor("0.45:3.2:0.2:0.01:0.12")