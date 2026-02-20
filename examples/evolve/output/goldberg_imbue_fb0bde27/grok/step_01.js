samples('shabda/speech:goldberg_variations')
setcps(72/60/4)

$: note("g3 gb3 e3 d3 b2 c3 d3 g2")
  .slow(2)
  .sound("triangle")
  .lpf(sine.range(150,800).slow(4))
  .lpq(3)
  .gain(0.35)

$: note("g2")
  .slow(8)
  .sound("supersaw")
  .gain(0.2)
  .room(0.75)
  .lpf(sine.range(250,900).slow(6))

$: stack(
  s("bd").euclid(3,8).gain(0.45),
  s("sn").euclid(2,8).slow(2).gain(0.35),
  s("hh*8").hpf(4000).gain(0.2)
)

$: note("g4 gb4 e4 d4 b3 c4 d4 g3")
  .slow(2)
  .sound("sawtooth")
  .gain(0.28)
  .phaser(0.25)
  .pan(0.8)
  .hpf(sine.range(600,2000).slow(8))

$: s("goldberg_variations")
  .slow(12)
  .lpf(250)
  .lpq(4)
  .gain(0.12)
  .room(0.9)