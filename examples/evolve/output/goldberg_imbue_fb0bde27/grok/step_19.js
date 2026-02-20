samples('shabda/speech:goldberg_variations,bach')
setcps(122/60/4)

$: note("g3 [ab3 e3 d3 b3~] [bb2 c3 eb3 g3] [d3 g2 fs2 eb3 g2]")
  .slow(2.8)
  .sound("supersaw")
  .lpf(sine.range(120,3400).slow(4.2))
  .gain(0.65)
  .jux(rev)

$: note("g1 [eb2 bb1 ab1 g1] eb1")
  .slow(5.8)
  .sound("sawtooth")
  .gain(0.46)
  .fmi(perlin.range(3,24).slow(3.1))
  .tremolo(sine.range(0.3,0.7).slow(4.5))

$: stack(
  s("bd*2,~bd,bd*3,~").euclid(8,16).gain(0.9),
  s("~sn*3,cp,~sn,rim").euclid(7,16).gain(0.55),
  s("hh*8,~oh*4,rim*4,cp").crush(6).hpf(2600).gain(0.42).pan(saw.range(0,1))
).room(0.72)
  .swing(0.38)
  .degradeBy(0.25)
  .sometimes(rev)

$: note("g4 [fs4 e4 d4 c4 bb3] [c4 eb4 g4 d4] [g3 fs3 eb3]")
  .slow(2.2)
  .sound("pulse")
  .gain(0.52)
  .lpf(perlin.range(180,6000).slow(3.2))
  .detune(rand.range(-25,28))

$: stack(
  s("goldberg_variations")
    .slow(7.5)
    .chop(28)
    .speed(sine.range(0.75,1.35).slow(2))
    .lpf(perlin.range(180,2600).slow(5.2))
    .gain(0.4),
  s("goldberg_variations,bach")
    .chop(25)
    .speed(rand.range(0.65,1.45))
    .vowel("a e o i u")
    .gain(0.35)
).delay(0.52)
  .phaser(sine.range(0.3,0.8).slow(2.8))
  .pan(tri.slow(4.2))
  .room(0.62)

$: s("bach,~goldberg_variations*2")
  .slow(12)
  .speed(rand.range(0.55,1.55))
  .gain(0.36)
  .crush(4)
  .leslie(0.55)