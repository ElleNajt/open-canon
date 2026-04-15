samples('shabda/speech/en-GB/f:drifting,breathe')
samples('shabda/speech/fr-FR/m:lumiere,infini')
setcps(112/60/4)

$: stack(
  stack(
    euclid(7,16,"bd"),
    s("[cp ~ rim cp] ~"),
    s("hh*8, oh*8").degradeBy(0.35).pan(rand)
  )
    .gain(0.8)
    .shape(0.25)
    .lpf(6000)
    .drive(0.15)
    .swing(0.12),

  note("c2 g2 ~ eb2 ~ f2 c2 d2 ~")
    .sound("saw")
    .lpf(cosine.range(300,2000).slow(4))
    .lpq(4)
    .attack(0.015)
    .decay(0.25)
    .sustain(0.2)
    .release(0.2)
    .gain(0.7)
    .drive(0.3)
    .pan(0.4),

  note("[eb5 g5 bb5] c6 ~ [bb5 g5 eb5] d5 f5 [g5 ~]")
    .sound("sine")
    .fmi(sine.range(0.5,3).slow(1.5))
    .fmh(1.99)
    .attack(0.005)
    .decay(0.2)
    .sustain(0.05)
    .gain(0.65)
    .room(0.75)
    .size(0.8)
    .delay(0.45)
    .dt("3/16")
    .dfb(0.35)
    .pan(tri.range(0.1,0.9).slow(2))
    .phaser(0.3),

  note("c3 [eb3 g3 bb3] [d4 f4 ab4] [c4 eb4 g4]")
    .slow(2)
    .sound("supersaw")
    .voicing()
    .arp("updown")
    .lpf(1800)
    .lpq(2)
    .attack(0.08)
    .release(1.5)
    .room(0.95)
    .size(0.92)
    .gain(0.52)
    .tremolo(0.45)
    .tremolosync(0.2),

  s("lumiere*8")
    .chop(16)
    .speed(perlin.range(0.4,0.9).slow(2))
    .gain(0.7)
    .room(0.6)
    .jux(x => x.hurry(1.618).pan(0.9).speed(1.2)),

  s("infini ~ [breathe drifting]")
    .slow(4)
    .striate(8)
    .speed(saw.range(0.7,1.3).slow(3))
    .gain(0.8)
    .pan(0.2)
    .delay(0.5)
    .dt("3/8")
    .dfb(0.25)
    .ring(0.2)
)