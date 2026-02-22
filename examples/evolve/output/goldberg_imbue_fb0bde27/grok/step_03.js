samples('shabda/speech:goldberg_variations')
setcps(84/60/4)

$: note("g3 gb3 e3 d3 b2 c3 d3 g2")
  .slow(3)
  .sound("piano")
  .lpf(sine.range(150,1200).slow(3))
  .gain(0.35)
  .room(0.6)

$: note("g2")
  .slow(6)
  .sound("supersaw")
  .gain(0.25)
  .detune(sine.range(-12,12))
  .fmi(sine.range(1,4).slow(4))

$: stack(
  s("bd").euclid(4,8).gain(0.55),
  s("sn").euclid(3,16).gain(0.4),
  s("hh*16,cp").hpf(5000).gain(0.25)
).room(0.5)
  .swing(0.15)
  

$: note("g4 fs4 e4 d4 bb3 c4 d4 fs3")
  .slow(2)
  .sound("sawtooth")
  .gain(0.28)
  .phaser(sine.range(0.1,0.5).slow(5))
  .hpf(cosine.range(400,2500).slow(6))

$: s("goldberg_variations")
  .slow(8)
  .lpf(350)
  .gain(0.16)
  .room(0.88)
  .chop(8)

$: s("goldberg_variations")
  .chop(20)
  .speed(perlin.range(0.85,1.15).slow(3))
  .lpf(600)
  .gain(0.1)
  .pan(saw.range(0.2,0.8).slow(8))