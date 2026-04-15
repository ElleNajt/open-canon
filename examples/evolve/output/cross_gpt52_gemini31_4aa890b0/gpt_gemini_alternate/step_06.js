setcps(92/60/4)

samples('shabda/speech:counterpoint,dissonance,inversion,retrograde,canon,ricercar,subject')
samples('shabda/speech/fr-FR/f:attention,machine,silence')

$: arrange(
  [8, stack(
    note("c3 [~ eb3] g3 [bb3 a3] c3 [f3 fs3] g3 [d3 c3]")
      .sound("pulse")
      .gain(0.24)
      .lpf(saw.range(400, 3200).fast(2))
      .lpq(8)
      .drive(0.5)
      .attack(0.01)
      .release(0.2)
      .pan(saw.range(0.2, 0.8)),

    note("c5 eb5 d5 g5 f5 bb5 a5 c6")
      .slow(2)
      .sound("piano")
      .gain(0.22)
      .room(0.7)
      .delay(0.4)
      .dt(0.375)
      .dfb(0.6)
      .off(0.25, x => x.transpose(12).gain(0.15).pan(0.8))
      .pan(0.3),

    s("bd")
      .euclid(3, 8)
      .gain(0.25)
      .drive(0.3)
      .swing(0.1),

    s("attention ~ machine ~")
      .slow(2)
      .chop(16)
      .speed(rand.range(0.8, 1.2))
      .gain(0.18)
      .delay(0.4)
      .dt(0.25)
      .dfb(0.6)
      .vowel("a e")
      .pan(0.5)
  )],

  [8, stack(
    note("c5 d5 eb5 f5 g5 a5 bb5 c6")
      .scale("C:dorian")
      .fast(2)
      .sound("piano")
      .gain(0.25)
      .room(0.5)
      .delay(0.3)
      .dt(0.375)
      .dfb(0.5)
      .off(0.125, x => x.transpose(7).gain(0.15))
      .palindrome()
      .pan(0.4),

    note("c3 g3 d4 a4")
      .slow(2)
      .sound("sine")
      .fm(8)
      .fmh(1.5)
      .fmenv(0.9)
      .fmattack(0.01)
      .fmdecay(0.5)
      .fmsustain(0.2)
      .fmrelease(1.5)
      .gain(0.2)
      .lpf(2000)
      .room(0.6)
      .pan(0.6),

    s("rim")
      .euclid(5, 16)
      .gain(0.15)
      .hpf(1500)
      .swing(0.2),

    s("counterpoint dissonance")
      .chop(16)
      .speed(rand.range(0.5, 1.5))
      .gain(0.16)
      .crush(4)
      .jux(x => x.rev().pan(0.8))
  )],

  [8, stack(
    note("[c5 eb5 g5, d4 a4 d5 f5]")
      .sound("supersaw")
      .gain(0.15)
      .lpf(sine.range(800, 4500).slow(4))
      .lpq(5)
      .room(0.8)
      .tremolo(0.7)
      .tremolosync(4)
      .pan(0.5),

    s("cb*4, sn*3")
      .gain(0.12)
      .room(0.4)
      .swing(0.2),

    s("retrograde inversion")
      .slow(2)
      .chop(32)
      .striate(8)
      .gain(0.16)
      .hpf(600)
      .crush(3)
      .ring(0.6)
      .ringf(800)
      .ringdf(0.5)
      .pan(sine.range(0.1, 0.9).fast(2))
  )],

  [8, stack(
    note("c3 eb3 g3 bb3 d4 f4 a4 c5")
      .arp("up down")
      .fast(4)
      .sound("sawtooth")
      .gain(0.18)
      .lpf(saw.range(400, 6000).slow(2))
      .lpq(4)
      .delay(0.4)
      .dt(0.25)
      .dfb(0.6)
      .jux(x => x.transpose(12).rev()),

    s("bd*4")
      .gain(0.28)
      .drive(0.4),

    s("cp")
      .euclid(2, 8)
      .late(0.5)
      .gain(0.18)
      .room(0.4),

    s("canon subject")
      .chop(16)
      .speed(rand.range(0.9, 1.1))
      .gain(0.15)
      .vowel("a e i o")
  )],

  [8, stack(
    note("c2 [eb2 c2] ~ g2 [f2 d2] ~ [a2 bb2] c3")
      .sound("square")
      .gain(0.25)
      .lpf(2000)
      .lpq(6)
      .drive(0.6)
      .attack(0.01)
      .release(0.1),

    n("0 2 3 5 7 8 10 12")
      .scale("C:dorian")
      .fast(2)
      .sound("supersaw")
      .gain(0.14)
      .lpf(4000)
      .lpq(3)
      .jux(x => x.rev().transpose(12)),

    s("bd!2 [~ bd] bd!3 [sn bd]")
      .gain(0.26)
      .drive(0.5),

    s("hh*16")
      .gain(0.1)
      .hpf(6000)
      .degradeBy(0.1)
      .swing(0.1),

    s("silence*8")
      .chop(32)
      .speed(rand.range(0.7, 1.3))
      .gain(0.16)
      .hpf(400)
      .crush(2)
      .sometimes(x => x.speed(-1))
      .jux(x => x.rev())
  )],

  [8, stack(
    note("c4 ~ ~ eb4 ~ g4 ~ d5")
      .slow(2)
      .sound("piano")
      .gain(0.22)
      .room(0.8)
      .delay(0.6)
      .dt(0.75)
      .dfb(0.7)
      .pan(0.5),

    note("c3 g3 eb4")
      .slow(2)
      .sound("sine")
      .gain(0.2)
      .fm(4)
      .fmh(2.5)
      .fmenv(0.6)
      .fmattack(0.1)
      .fmdecay(1)
      .fmsustain(0.1)
      .fmrelease(3)
      .room(0.8)
      .roomlp(1000)
      .lpf(800)
      .attack(1)
      .release(4),

    s("ricercar")
      .slow(2)
      .chop(8)
      .speed(0.8)
      .gain(0.18)
      .room(0.9)
      .delay(0.5)
      .dt(0.5)
      .dfb(0.6)
      .pan(sine.range(0.2, 0.8).slow(4))
  )]
)
.compressor("0.5:3:0.2:0.01:0.1")