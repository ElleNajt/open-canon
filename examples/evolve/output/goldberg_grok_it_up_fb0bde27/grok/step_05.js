samples('shabda/speech:goldberg_variations')
setcps(84/60/4)

$: note("g3~gb3 e3 d3 b2 c3 d3 g2 fs2")
  .slow(3)
  .sound("piano")
  .lpf(sine.range(150,1100).slow(5))
  .gain(0.35)
  .phaser(sine.range(0.2,0.8).slow(4))

$: note("g2 eb2 bb1")
  .slow(6)
  .sound("supersaw")
  .gain(0.25)
  .fmi(saw.range(0.8,4.5).slow(2.5))
  .tremolo(sine.range(0.15,0.55).slow(3))

$: stack(
  s("bd,~bd").euclid(3,8).gain(0.65),
  s("sn").euclid(3,16).gain(0.42),
  s("hh*8,cp,rim,oh").hpf(4500).gain(0.26).pan(rand.range(0,1))
).room(0.45)
  .swing(0.22)
  .degradeBy(0.18)

$: note("g4 fs4 e4~d4 bb3 c4 d4 g3 eb3")
  .slow(1.8)
  .sound("sawtooth")
  .gain(0.28)
  .lpf(perlin.range(700,2600).slow(2.8))
  .distort(0.1)

$: s("goldberg_variations")
  .slow(10)
  .chop(10)
  .speed(sine.range(0.88,1.12))
  .lpf(sine.range(250,850).slow(7))
  .gain(0.2)
  .room(0.65)

$: s("goldberg_variations")
  .chop(20)
  .speed(rand.range(0.75,1.25))
  .lpf(perlin.range(350,1100).slow(4.5))
  .gain(0.14)
  .striate(4)