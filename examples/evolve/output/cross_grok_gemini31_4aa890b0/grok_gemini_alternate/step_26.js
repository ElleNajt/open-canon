samples('shabda/speech/en-GB/f:drifting,breathe')
samples('shabda/speech/de-DE/m:achtung,fokus,energie')
setcps(134/60/4)

$: stack(
  stack(
    s("bd ~ bd bd ~ bd bd bd").gain(0.95),
    s("~ cp").late(0.04).room(0.4).gain(0.8),
    s("hh*16").pan(perlin.range(0.2, 0.8).fast(4)).gain(0.65).jux(x => x.rev().hurry(2)),
    euclid(3, 8, "lt").gain(0.7).room(0.5).pan(0.3),
    euclid(5, 16, "cb").gain(0.7).delay(0.4).dt("1/4").dfb(0.4).pan(0.7)
  )
    .gain(0.85)
    .drive(0.2)
    .hpf(40),

  note("d2 d3 f2 f3 c2 c3 bb1 [~ d2]")
    .sound("supersaw")
    .lpf(sine.range(200, 1800).fast(4))
    .lpq(8)
    .attack(0.01)
    .decay(0.1)
    .sustain(0.2)
    .release(0.1)
    .shape(0.4)
    .gain(0.85)
    .pan(0.5)
    .jux(x => x.add(12).early(0.125).pan(0.3).gain(0.7)),

  note("[d4 f4 a4 c5] [f4 a4 c5 e5] [g4 bb4 d5 f5] [bb3 d4 f4 a4]")
    .sound("pulse")
    .slow(4)
    .attack(0.1)
    .decay(0.8)
    .sustain(0.6)
    .release(1.5)
    .gain(0.6)
    .room(0.9)
    .size(0.8)
    .fmi(2)
    .lpf(saw.range(600, 3000).slow(2))
    .lpq(5)
    .phaser(1.5).phaserdepth(0.8)
    .pan(0.6),

  note("d5 a5 f5 c6 e5 g5 a5 d6")
    .sound("triangle")
    .fast(2)
    .attack(0.01)
    .decay(0.15)
    .sustain(0.1)
    .release(0.3)
    .gain(0.65)
    .crush(5)
    .delay(0.6)
    .dt("1/6")
    .dfb(0.6)
    .pan(0.4)
    .jux(x => x.add(7).rev().pan(0.8)),

  s("drifting ~ [achtung ~ energie] [fokus breathe]")
    .chop(16)
    .striate(4)
    .speed(saw.range(0.6, 1.2).slow(4))
    .lpf(4000)
    .gain(0.8)
    .room(0.5)
    .delay(0.5)
    .dt("3/8")
    .dfb(0.6)
    .jux(x => x.speed(-0.8).pan(0.85).gain(0.7))
)