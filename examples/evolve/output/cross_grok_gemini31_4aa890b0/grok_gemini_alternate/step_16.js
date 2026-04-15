samples('shabda/speech/en-GB/f:drifting,breathe')
samples('shabda/speech/fr-FR/m:lumiere,infini')
setcps(126/60/4)

$: stack(
  stack(
    s("bd*4").gain(0.95),
    s("~ cp").gain(0.7).room(0.4),
    s("~ rim").fast(2).gain(0.6).pan(0.3)
  )
    .lpf(6000)
    .shape(0.3)
    .drive(0.2),

  s("hh*16")
    .every(4, x => x.degradeBy(0.4))
    .gain(0.45)
    .pan(sine.range(0.3, 0.7).fast(4))
    .hpf(3000)
    .room(0.2),

  note("c2 c2 eb2 c2 d2 bb1 <c2 ab1> g1")
    .fast(2)
    .sound("supersaw")
    .lpf(sine.range(200, 2500).slow(4))
    .lpq(6)
    .attack(0.01)
    .decay(0.1)
    .sustain(0)
    .release(0.1)
    .gain(0.55)
    .distort(0.4)
    .shape(0.3)
    .pan(0.5),

  note("c4 g4 eb5 d5")
    .sound("sine")
    .fast(2)
    .transpose("<0 3 -2 -4>")
    .attack(0.05)
    .release(1.5)
    .gain(0.6)
    .room(0.8)
    .roomsize(0.8)
    .delay(0.6)
    .dt("3/16")
    .dfb(0.5)
    .jux(x => x.transpose(12).pan(0.8)),

  s("breathe ~ ~ lumiere")
    .slow(2)
    .speed(0.8)
    .gain(0.75)
    .room(0.9)
    .roomsize(0.8)
    .delay(0.5)
    .dt("3/8")
    .dfb(0.4)
    .hpf(300)
    .jux(x => x.rev().hurry(1.5).late(0.25)),

  s("infini drifting")
    .slow(4)
    .degradeBy(0.4)
    .gain(0.6)
    .room(0.9)
    .striate(12)
    .speed(cosine.range(0.4, 0.7).slow(3))
    .pan(rand)
    .jux(x => x.hurry(2).late(0.125))
)