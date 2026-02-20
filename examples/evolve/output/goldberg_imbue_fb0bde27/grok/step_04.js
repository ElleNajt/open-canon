samples('shabda/speech:goldberg_variations')
setcps(84/60/4)

$: note("g3 gb3 e3 d3 b2 c3 d3 g2")
  .slow(3)
  .sound("piano")
  .lpf(sine.range(200,1000).slow(4))
  .gain(0.4)
  .detune(sine.range(-8,8).slow(6))

$: note("g2 eb2")
  .slow(6)
  .sound("supersaw")
  .gain(0.3)
  .fmi(sine.range(0.5,5).slow(2))
  .tremolo(sine.range(0.2,0.6).slow(4))

$: stack(
  s("bd").euclid(3,8).gain(0.6),
  s("sn").euclid(2,16).gain(0.45),
  s("hh*8,cp,rim").hpf(4000).gain(0.3)
).room(0.4)
  .swing(0.2)
  .degradeBy(0.12)

$: note("g4 fs4 e4 d4 bb3 c4 d4 g3")
  .slow(2)
  .sound("sawtooth")
  .gain(0.3)
  .lpf(perlin.range(800,3000).slow(3))
  .slide(sine.range(0,-0.015))

$: s("goldberg_variations")
  .slow(12)
  .chop(12)
  .lpf(sine.range(200,800).slow(6))
  .gain(0.18)
  .room(0.7)

$: s("goldberg_variations")
  .chop(16)
  .speed(rand.range(0.8,1.2))
  .lpf(800)
  .gain(0.12)
  .pan(sine.range(0.3,0.7).slow(4))