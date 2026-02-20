samples('shabda/speech:goldberg_variations')
setcps(88/60/4)

$: note("g3~[gb3 e3] [d3 b2] c3 [d3 g2 fs2]?")
  .slow(4)
  .sound("piano")
  .lpf(sine.range(120,1200).slow(6))
  .gain(0.4)
  .room(0.35)

$: note("g2 [eb2 bb1]")
  .slow(7)
  .sound("supersaw")
  .gain(0.28)
  .fmi(saw.range(0.5,5).slow(3))
  .leslie(sine.range(0.2,0.6))

$: stack(
  s("bd,~bd").euclid(4,8).gain(0.7),
  s("~sn").euclid(3,16).gain(0.45),
  s("hh*8,cp,rim,oh,~hh").hpf(5000).gain(0.28).pan(rand.range(0,1))
).room(0.5)
  .swing(0.28)
  .degradeBy(0.22)
  .every(16, rev)

$: note("g4 [fs4 e4]~d4 [bb3 c4 d4] g3 eb3")
  .slow(2)
  .sound("sawtooth")
  .gain(0.3)
  .lpf(perlin.range(600,2800).slow(3))
  .phaser(sine.range(0.3,0.7))

$: s("goldberg_variations")
  .slow(8)
  .chop(16)
  .speed(sine.range(0.85,1.15))
  .lpf(cosine.range(280,950).slow(6))
  .gain(0.24)

$: s("goldberg_variations")
  .chop(24)
  .speed(rand.range(0.72,1.28))
  .lpf(perlin.range(380,1150).slow(5))
  .gain(0.17)
  .striate(6)
  .delay(0.3)