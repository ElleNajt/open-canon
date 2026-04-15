setcps(84/60/4)

samples('shabda/speech:quodlibet,da_capo,variatio,clavier,fugue,mirror,ghost,listen')
samples('shabda/speech/de-DE/m:achtung,variation')

$: arrange(
  [8, stack(
    note("g3 f3 eb3 d3")
      .slow(2)
      .palindrome()
      .sound("pulse")
      .gain(0.22)
      .lpf(sine.range(350, 1600).slow(6))
      .lpq(7)
      .attack(0.02)
      .release(1.8)
      .room(0.55)
      .pan(0.25),

    note("d5 f5 eb5 c5 bb4 a4 g4 a4")
      .slow(2)
      .sound("piano")
      .gain(0.22)
      .room(0.65)
      .delay(0.35)
      .dt(0.375)
      .dfb(0.4)
      .off(0.25, x => x.transpose(12).gain(0.14).delay(0.25).dt(0.5).dfb(0.35).pan(0.8))
      .pan(0.4),

    s("cb")
      .euclid(5, 16)
      .gain(0.09)
      .room(0.35)
      .hpf(2800)
      .swing(0.1),

    s("listen ~ ghost ~")
      .slow(2)
      .chop(16)
      .speed(rand.range(0.65, 1.15))
      .gain(0.14)
      .vowel("i o")
      .hpf(250)
      .room(0.55)
      .roomlp(1800)
      .jux(x => x.speed(-1).pan(0.85))
  )],

  [8, stack(
    n("0 0 -2 0 3 2 0 -2")
      .scale("G:minor")
      .octave(2)
      .sound("sawtooth")
      .gain(0.24)
      .lpf(1400)
      .lpq(5)
      .attack(0.01)
      .release(0.12)
      .swing(0.14)
      .room(0.22),

    n("7 5 3 2 0 2 3 5")
      .scale("G:minor")
      .octave(4)
      .sound("supersaw")
      .gain(0.14)
      .lpf(saw.range(900, 5200).slow(4))
      .lpq(4)
      .delay(0.3)
      .dt(0.25)
      .dfb(0.45)
      .room(0.35)
      .jux(x => x.rev().transpose(12).pan(0.8))
      .pan(0.35),

    s("bd")
      .euclid(7, 16)
      .gain(0.23)
      .drive(0.25),

    s("rim")
      .euclid(5, 12)
      .gain(0.11)
      .hpf(2000)
      .room(0.25)
      .swing(0.14),

    s("hh*16")
      .gain(0.085)
      .hpf(7000)
      .degradeBy(0.18)
      .swing(0.14)
  )],

  [8, stack(
    note("~ g4 bb4 d5 ~ f5 eb5 d5")
      .slow(2)
      .sound("piano")
      .gain(0.2)
      .room(0.7)
      .delay(0.45)
      .dt(0.5)
      .dfb(0.62)
      .sometimes(x => x.rev())
      .pan(0.55),

    note("g3 bb3 d4 f4")
      .slow(2)
      .sound("triangle")
      .gain(0.16)
      .lpf(sine.range(500, 2600).slow(8))
      .lpq(6)
      .attack(0.04)
      .release(2)
      .tremolo(0.55)
      .tremolosync(6)
      .room(0.75)
      .roomlp(1400)
      .pan(sine.range(0.15, 0.85).slow(6)),

    s("mirror*4")
      .chop(32)
      .speed(rand.range(0.4, 1.6))
      .gain(0.12)
      .hpf(500)
      .crush(3)
      .ring(0.55)
      .ringf(330)
      .ringdf(0.6)
      .room(0.5)
      .jux(x => x.speed(-1).pan(0.85))
  )],

  [8, stack(
    note("g2 [~ g2] bb2 [c3 d3] g2 [f2 fs2] g2 [~ d3]")
      .sound("square")
      .gain(0.3)
      .lpf(saw.range(350, 4200).fast(2))
      .lpq(8.5)
      .drive(0.4)
      .attack(0.01)
      .release(0.14)
      .pan(0.35),

    note("d5 eb5 f5 g5 a5 bb5 c6 d6")
      .fast(2)
      .sound("supersaw")
      .gain(0.12)
      .lpf(2400)
      .lpq(4)
      .delay(0.35)
      .dt(0.125)
      .dfb(0.55)
      .jux(x => x.rev().transpose(-12).pan(0.82))
      .pan(0.4),

    s("bd bd [~ bd] bd bd [~ sn] bd [sn bd]")
      .gain(0.26)
      .drive(0.28),

    s("sn")
      .euclid(5, 12)
      .gain(0.16)
      .room(0.25)
      .hpf(900),

    s("hh*16")
      .gain(0.09)
      .hpf(7800)
      .degradeBy(0.22)
      .swing(0.16),

    s("quodlibet*8")
      .speed(rand.range(0.9, 1.35))
      .chop(32)
      .gain(0.13)
      .hpf(700)
      .crush(4)
      .pan(rand)
      .sometimes(x => x.speed(-1))
      .jux(x => x.rev())
  )],

  [8, stack(
    note("c3 g3 eb4 d4")
      .slow(2)
      .sound("sine")
      .gain(0.28)
      .fm(5)
      .fmh(2)
      .fmenv(0.85)
      .fmattack(0.05)
      .fmdecay(2)
      .fmsustain(0.08)
      .fmrelease(2.5)
      .lpf(sine.range(250, 1200).slow(6))
      .room(0.85)
      .roomlp(1100)
      .pan(0.5),

    note("c5 ~ bb4 ~ g4 ~ eb4 d4")
      .slow(2)
      .sound("piano")
      .gain(0.18)
      .room(0.65)
      .delay(0.5)
      .dt(0.5)
      .dfb(0.7)
      .rev()
      .pan(0.45),

    s("achtung variation")
      .slow(2)
      .chop(16)
      .speed(rand.range(0.65, 1.05))
      .gain(0.12)
      .hpf(250)
      .vowel("u o")
      .room(0.75)
      .roomlp(1500)
      .sometimes(x => x.speed(-1).delay(0.35).dt(0.375).dfb(0.55)),

    s("cr")
      .euclid(3, 16)
      .gain(0.08)
      .hpf(5000)
      .room(0.75)
  )],

  [8, stack(
    n("0 2 3 5 7 5 3 2")
      .scale("G:minor")
      .octave(2)
      .sound("sawtooth")
      .gain(0.25)
      .lpf(sine.range(800, 2400).fast(2))
      .lpq(6)
      .drive(0.25)
      .attack(0.01)
      .release(0.12)
      .pan(0.5),

    note("g3 bb3 d4 f4")
      .chord("minor")
      .sound("supersaw")
      .gain(0.16)
      .lpf(saw.range(1200, 7000).fast(4))
      .lpq(3.5)
      .room(0.45)
      .delay(0.35)
      .dt(0.25)
      .dfb(0.5)
      .palindrome()
      .jux(x => x.rev().transpose(12).pan(0.8))
      .pan(0.35),

    note("d5 f5 eb5 c5 bb4 a4 g4 f4")
      .fast(2)
      .sound("piano")
      .gain(0.2)
      .room(0.4)
      .off(0.25, x => x.transpose(12).gain(0.12).delay(0.25).dt(0.5).dfb(0.35).pan(0.8))
      .sometimes(x => x.rev()),

    s("bd*8")
      .gain(0.26)
      .drive(0.3),

    s("sn")
      .euclid(7, 16)
      .gain(0.17)
      .room(0.25),

    s("hh*16")
      .gain(0.09)
      .hpf(8200)
      .swing(0.16)
      .degradeBy(0.12),

    s("da_capo clavier fugue variatio")
      .chop(32)
      .speed(rand.range(0.8, 1.4))
      .gain(0.14)
      .hpf(450)
      .crush(3)
      .delay(0.45)
      .dt(0.375)
      .dfb(0.55)
      .sometimes(x => x.speed(-1).rev().pan(0.85))
      .pan(0.55)
  )]
)
.compressor("0.55:3:0.2:0.01:0.12")