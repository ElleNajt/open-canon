samples('shabda/speech/en-GB/f:time,fades,shadows')
setcps(135/60/4)

$: stack(
  s("bd(5,8) bd(3,8,2)")
    .gain(0.8)
    .lpf(300)
    .lpq(2)
    .room(0.2),

  s("~ cp ~ [cp cp]")
    .gain(0.6)
    .room(0.4)
    .delay(0.2)
    .dt("1/8")
    .dfb(0.3),

  s("hh*8")
    .ply("1 2 1 4")
    .hpf(3000)
    .gain(0.25)
    .pan(perlin)
    .phaser(0.4),

  note("<c2 f1 eb2 g1>")
    .euclid(5,8)
    .sound("supersaw")
    .lpf(sine.range(100, 1800).fast(2))
    .lpq(3)
    .crush(4)
    .attack(0.01)
    .decay(0.12)
    .sustain(0.2)
    .release(0.1)
    .gain(0.55),

  n("0 2 3 7 0 7 10 12")
    .scale("C:minor")
    .sound("pulse")
    .lpf(4000)
    .lpq(1)
    .attack(0.01)
    .decay(0.15)
    .gain(0.25)
    .jux(x => x.rev().late(0.125).octave(5)),

  note("<c4 f3 g3 c4> <eb4 ab3 bb3 eb4>")
    .slow(2)
    .sound("triangle")
    .fm(3)
    .fmh(1.25)
    .fmenv(2)
    .fmattack(0.1)
    .fmdecay(0.5)
    .attack(0.05)
    .decay(0.4)
    .sustain(0.4)
    .release(1.5)
    .room(0.8)
    .size(0.8)
    .gain(0.35)
    .jux(x => x.add(note("0.1"))),

  s("time ~ shadows fades")
    .speed(perlin.range(0.5, 2.5).fast(4))
    .striate(16)
    .gain(0.45)
    .pan(rand)
    .delay(0.6)
    .dt("1/6")
    .dfb(0.5)
)