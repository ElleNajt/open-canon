samples('shabda/speech/en-GB/f:time,fades,shadows')
setcps(100/60/4)

$: stack(
  s("bd*2 [bd bd]")
    .gain(0.75)
    .lpf(200)
    .lpq(2)
    .room(0.4),
    
  s("cp [~ cp]")
    .gain(0.5)
    .room(0.4)
    .delay(0.3)
    .dfb(0.25),
    
  s("hh*16")
    .degradeBy(0.3)
    .hpf(6000)
    .gain(0.2)
    .pan(sine.slow(8))
    .phaser(0.2),
    
  s("sn ~ sn ~")
    .gain(0.4)
    .hpf(300)
    .room(0.3)
    .delay(0.2)
    .dt("1/8")
    .dfb(0.2),

  note("<c2 eb2 g1 bb1>")
    .euclid(6,16)
    .sound("saw")
    .lpf(sine.range(80, 400).slow(4))
    .lpq(3)
    .ring(0.3)
    .attack(0.005)
    .decay(0.1)
    .sustain(0.3)
    .release(0.2)
    .gain(0.6),

  n("0 3 ~ 5 7 ~ 3 0")
    .scale("C:minor")
    .octave(4)
    .sound("pulse")
    .lpf(sine.range(500, 2500).slow(4))
    .lpq(5)
    .decay(0.2)
    .gain(0.2)
    .delay(0.4)
    .dt("1/4")
    .dfb(0.4)
    .jux(x => x.rev().pan(0.8)),

  note("<c3 eb3 g3> <f3 ab3 c4> <g3 bb3 d4>")
    .slow(4)
    .sound("piano")
    .attack(0.02)
    .decay(0.4)
    .sustain(0.2)
    .release(1)
    .gain(0.35)
    .room(0.7)
    .size(0.6),

  s("~ fades time ~ shadows fades ~")
    .slow(1)
    .chop(rand.range(4,16))
    .speed(perlin.range(0.75,1.25).slow(2))
    .gain(0.55)
    .room(0.85)
    .size(0.9)
    .delay(0.4)
    .dt(0.25)
    .dfb(0.4)
    .jux(x => x.speed(0.8).chop(24).pan(0.75))
)