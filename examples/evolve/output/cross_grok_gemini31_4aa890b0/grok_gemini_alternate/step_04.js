samples('shabda/speech/en-GB/f:time,fades,shadows')
setcps(90/60/4)

$: stack(
  s("bd*4")
    .gain(0.7),
    
  s("bd*4")
    .late(0.25)
    .gain(0.45)
    .lpf(250)
    .lpq(2)
    .room(0.6)
    .size(0.8),
    
  s("~ cp")
    .gain(0.5)
    .room(0.5)
    .delay(0.2)
    .dfb(0.2),
    
  s("hh*16")
    .degradeBy(0.25)
    .hpf(7000)
    .gain(0.25)
    .pan(sine.slow(4)),

  s("mt*3 ~ ~ lt*2")
    .euclid(7,16)
    .gain(0.35)
    .hpf(800)
    .delay(0.4)
    .dt("1/8")
    .dfb(0.3)
    .pan(rand),

  note("<g1 c2 ab1 d2>")
    .euclid(5,8)
    .sound("saw")
    .lpf(sine.range(150, 1800).slow(2))
    .lpq(6)
    .shape(0.35)
    .attack(0.01)
    .decay(0.25)
    .sustain(0.1)
    .release(0.1)
    .gain(0.5),

  n("0 [~ 1] 4 ~ 3 1 [~ 4] 7")
    .scale("G:phrygian")
    .octave(4)
    .sound("supersaw")
    .lpf(cosine.range(600, 3000).fast(2))
    .lpq(4)
    .decay(0.15)
    .sustain(0)
    .gain(0.18)
    .delay(0.5)
    .dt("3/16")
    .dfb(0.5)
    .jux(x => x.rev().octave(1).pan(0.8)),

  note("<g2 c3 ab2 f2>")
    .slow(4)
    .sound("sine")
    .fm(sine.range(1, 4).slow(8))
    .fmh(0.5)
    .attack(2)
    .decay(1)
    .sustain(1)
    .release(2)
    .gain(0.4)
    .room(0.8)
    .size(0.8)
    .pan(0.5),

  s("time ~ fades shadows*2")
    .slow(2)
    .chop(4)
    .speed(rand.range(0.8, 1.1))
    .room(0.9)
    .size(0.95)
    .delay(0.5)
    .dt("3/8")
    .dfb(0.6)
    .gain(0.6)
    .jux(x => x.speed(0.7).rev())
)