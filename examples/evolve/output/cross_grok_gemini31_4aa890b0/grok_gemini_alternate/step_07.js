samples('shabda/speech/en-GB/f:time,fades,shadows')
setcps(140/60/4)

$: stack(
  s("bd*2 bd(3,8) [bd ~ bd]")
    .gain(0.85)
    .lpf(250)
    .lpq(1.5)
    .swing(0.15)
    .room(0.15),

  s("[cp cp ~ cp] ~")
    .gain(0.65)
    .chop(6)
    .room(0.5)
    .delay(0.25)
    .dt("1/8")
    .dfb(0.4),

  s("hh*16")
    .degradeBy(0.2)
    .hpf(3500)
    .gain(0.3)
    .pan(sine.range(0.2,0.8))
    .phaser(0.5)
    .ring(0.3),

  note("c2 e2 g2 a2")
    .euclid(6,8)
    .sound("supersaw")
    .lpf(sine.range(80, 1200).slow(4))
    .lpq(4)
    .attack(0.005)
    .decay(0.2)
    .sustain(0.3)
    .release(0.3)
    .gain(0.6)
    .room(0.3),

  note("<c4 g4 e4 a4> <f4 c5 a4 d5>")
    .slow(2)
    .sound("triangle")
    .fm(4)
    .fmh(1.4)
    .fmenv(2.5)
    .fmattack(0.08)
    .fmdecay(0.6)
    .attack(0.03)
    .decay(0.5)
    .sustain(0.5)
    .release(2)
    .room(0.9)
    .size(0.9)
    .gain(0.45)
    .jux(x => x.rev().add(0.05).pan(0.7)),

  s("time")
    .speed(0.2)
    .lpf(100)
    .lpq(2)
    .gain(0.35)
    .slow(4)
    .room(0.6),

  s("[fades shadows] time ~")
    .speed(perlin.range(0.9, 2.2).fast(3))
    .striate(24)
    .gain(0.5)
    .pan(rand.range(0.1,0.9))
    .delay(0.7)
    .dt("1/7")
    .dfb(0.6)
    .leslie(0.3)
)