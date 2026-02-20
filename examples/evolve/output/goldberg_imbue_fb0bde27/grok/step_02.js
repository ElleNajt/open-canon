samples('shabda/speech:goldberg_variations')
setcps(80/60/4)

$: note("g3 gb3 e3 d3 b2 c3 d3 g2")
  .slow(2)
  .sound("piano")
  .lpf(sine.range(180,900).slow(4))
  .gain(0.4)
  .pan(saw.range(0.25,0.75).slow(12))

$: note("g2")
  .slow(8)
  .sound("supersaw")
  .gain(0.22)
  .room(0.8)
  .detune(sine.range(-7,7))

$: stack(
  s("bd").euclid(3,8).gain(0.5),
  s("sn").euclid(2,8).slow(2).gain(0.38),
  s("hh*8").hpf(4500).gain(0.22)
).room(0.4).swing(0.1)

$: note("g4 gb4 e4 d4 b3 c4 d4 g3")
  .slow(2)
  .sound("sawtooth")
  .gain(0.3)
  .phaser(sine.range(0.2,0.4).slow(6))
  .hpf(sine.range(500,2200).slow(8))

$: s("goldberg_variations")
  .slow(10)
  .lpf(280)
  .gain(0.14)
  .room(0.92)
  .tremolo(0.3)

$: s("goldberg_variations")
  .chop(12)
  .speed("0.92 1.08".slow(4))
  .lpf(500)
  .gain(0.09)
  .pan(0.75)