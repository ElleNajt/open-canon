setcps(84/60/4)

samples('shabda/speech:quodlibet,da_capo,variatio,clavier,fugue,mirror,ghost,listen')

$: arrange(
  [8, stack(
    note("g3 f3 eb3 d3")
      .slow(2)
      .sound("pulse")
      .gain(0.25)
      .lpf(sine.range(400, 1400).slow(4))
      .lpq(6)
      .attack(0.05)
      .release(1.5)
      .room(0.5)
      .pan(0.3),

    note("d5 ~ ~ c5 bb4 ~ a4 ~")
      .sound("piano")
      .gain(0.24)
      .room(0.6)
      .delay(0.4)
      .dt(0.375)
      .dfb(0.45)
      .jux(x => x.rev().transpose(12).pan(0.8)),

    s("cb")
      .euclid(3, 8)
      .gain(0.1)
      .room(0.4)
      .hpf(3000),

    s("listen ~ ghost ~")
      .slow(2)
      .chop(8)
      .speed(rand.range(0.8, 1.2))
      .gain(0.15)
      .vowel("a i")
      .room(0.5)
      .roomlp(2000)
  )],

  [8, stack(
    note("g2 d3 f2 c3 eb2 bb2 d2 a2")
      .sound("sawtooth")
      .gain(0.24)
      .lpf(1200)
      .lpq(4)
      .attack(0.01)
      .release(0.1)
      .swing(0.12)
      .room(0.2),

    note("g3 f3 eb3 d3")
      .chord("minor major major minor")
      .slow(2)
      .sound("piano")
      .voicing()
      .gain(0.22)
      .room(0.4)
      .off(0.25, x => x.transpose(12).gain(0.15).delay(0.25).dt(0.5).dfb(0.3)),

    s("bd")
      .euclid(5, 8)
      .gain(0.22)
      .drive(0.2),

    s("hh*8")
      .gain(0.09)
      .hpf(6000)
      .swing(0.12)
      .degradeBy(0.15)
  )],

  [8, stack(
    note("g2 [~ g2] bb2 [c3 d3] g2 [f2 fs2] g2 [~ d3]")
      .sound("square")
      .gain(0.28)
      .lpf(saw.range(400, 3500).fast(2))
      .lpq(8)
      .drive(0.35)
      .attack(0.01)
      .release(0.15)
      .pan(0.4),

    note("g4 bb4 d5 f5")
      .fast(2)
      .sound("supersaw")
      .gain(0.12)
      .lpf(2000)
      .lpq(4)
      .delay(0.3)
      .dt(0.125)
      .dfb(0.5)
      .jux(x => x.rev().pan(0.8)),

    s("bd [~ bd] bd [~ sn] bd bd [sn bd]")
      .gain(0.25)
      .drive(0.2),

    s("hh*16")
      .gain(0.09)
      .hpf(7500)
      .degradeBy(0.2),

    s("quodlibet*8")
      .speed(1.2)
      .chop(16)
      .gain(0.14)
      .hpf(600)
      .crush(4)
      .pan(rand)
      .jux(x => x.rev())
  )],

  [8, stack(
    note("c3 g3 eb4 d4")
      .slow(2)
      .sound("sine")
      .gain(0.32)
      .fm(4)
      .fmh(1.5)
      .fmenv(0.8)
      .fmattack(0.1)
      .fmdecay(1.5)
      .fmsustain(0.1)
      .fmrelease(2)
      .lpf(sine.range(300, 1500).slow(4))
      .room(0.8)
      .roomlp(1000),

    note("c5 bb4 g4 eb4 d4 f4 eb4 c4")
      .slow(2)
      .sound("piano")
      .gain(0.2)
      .room(0.5)
      .delay(0.4)
      .dt(0.5)
      .dfb(0.6)
      .rev(),

    s("cr")
      .euclid(2, 8)
      .gain(0.08)
      .hpf(4000)
      .room(0.7)
  )],

  [8, stack(
    note("c4 d4 eb4 f4, g4 a4 bb4, eb5 d5")
      .sound("triangle")
      .gain(0.17)
      .lpf(2500)
      .lpq(5)
      .tremolo(0.6)
      .tremolosync(8)
      .room(0.4)
      .pan(sine.range(0.2, 0.8)),

    s("bd")
      .euclid(3, 8)
      .gain(0.24)
      .drive(0.3),
      
    s("sn")
      .euclid(5, 16)
      .gain(0.17)
      .room(0.3),

    s("fugue mirror")
      .fast(2)
      .chop(32)
      .speed(rand.range(0.5, 1.5))
      .gain(0.16)
      .crush(3)
      .ring(0.6)
      .ringf(440)
      .ringdf(0.5)
      .room(0.4)
      .jux(x => x.rev())
  )],

  [8, stack(
    note("g2 d3 f2 bb2 c3 g3 d3 f3")
      .sound("sawtooth")
      .gain(0.25)
      .lpf(1800)
      .lpq(6)
      .drive(0.2)
      .attack(0.01)
      .release(0.15)
      .pan(0.5),

    note("g3 bb3 c4 d4")
      .chord("minor major major minor")
      .sound("supersaw")
      .gain(0.15)
      .lpf(saw.range(800, 6000).fast(2))
      .lpq(3)
      .room(0.4)
      .delay(0.3)
      .dt(0.25)
      .dfb(0.4)
      .jux(x => x.rev()),

    note("g5 bb5 d6 c6 bb5 a5 g5 f5")
      .fast(2)
      .sound("piano")
      .gain(0.21)
      .room(0.35)
      .off(0.25, x => x.transpose(12).gain(0.12)),

    s("bd*4")
      .gain(0.26)
      .drive(0.3),
      
    s("sn")
      .euclid(5, 16)
      .gain(0.18)
      .room(0.2),
      
    s("hh*16")
      .gain(0.09)
      .hpf(8000)
      .swing(0.15)
      .degradeBy(0.1),

    s("da_capo clavier")
      .chop(16)
      .gain(0.15)
      .speed(1.1)
      .hpf(400)
      .delay(0.4)
      .dt(0.375)
      .dfb(0.5)
  )]
)
.compressor("0.55:3:0.2:0.01:0.12")