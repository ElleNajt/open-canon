// Goldberg Variations - Ground Bass (BWV 988) - Reimagined + Personality

setcps(82/60/4)

$: stack(
  note("g3 gb3 e3 d3 b2 c3 d3 g2").slow(2)
    .sound("triangle")
    .gain(0.29)
    .room(0.22)
    .lpf(sine.range(350,1700).slow(9))
    .lpq(6.8),

  note("g4 gb4 e4 d4 b3 c4 d4 g3").slow(4)
    .sound("piano")
    .gain(0.12)
    .hpf(330)
    .resonance(6.7)
    .pan(perlin.range(0.15, 0.87).slow(10))
)

$: s("hh*4 [oh cp] hh*3").slow(4)
  .gain(0.13)
  .delay(rand.range(0.09,0.23).slow(5))
  .pan(sine.range(0.13,0.86).slow(11))
  .crush(5)
  .every(4, x => x.rev())

$: note("<g5 e5 d5 b4> <g4 gb4 e4 d4>").slow(8)
  .sound("supersaw")
  .gain(0.13)
  .hpf(420)
  .resonance(5.1)
  .every(2, x => x.rev())
  .room(0.24)
  .pan(sine.range(0.16, 0.83).slow(14))

$: note("<g3 d4> <g2 b3> <gb3 c4> <e3 d4>").slow(16)
  .sound("sine")
  .gain(0.064)
  .lpf(870)
  .room(0.36)
  .pan(cosine.range(0.06,0.94).slow(32))

$: stack(
  s("supersaw*2 ~ pulse [triangle] ~ pulse sawtooth").slow(4)
    .gain(0.12)
    .lpf(rand.range(700,1700).slow(6))
    .resonance(rand.range(2,6).slow(5))
    .pan(perlin.range(0.22, 0.82).slow(7)),
  s("[rd cr]").slow(8)
    .gain(0.07)
    .delay(0.09)
    .room(0.14)
    .pan(sine.range(0.14, 0.72).slow(12))
)

$: s("bd ~ [sn bd] ~ [cp ~ bd] ~ [sn] ~").slow(8)
  .gain(0.15)
  .distort(0.21)
  .room(0.26)
  .every(3, x => x.rev())
  .degradeBy(0.18)