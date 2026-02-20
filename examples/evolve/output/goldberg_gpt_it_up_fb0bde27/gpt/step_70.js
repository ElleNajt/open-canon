setcps(103/60/4)

$: stack(
  note("g3 gb3 e3 <d3 b2> c3 d3 g2").slow(3)
    .sound("triangle")
    .gain(0.38)
    .lpf(sine.range(630, 3820).slow(7))
    .lpq(4.5)
    .every(4, x => x.jux(y => y.rev().pan(0.67))),
  s("bd*3 <bd bd~>")
    .gain(0.19)
    .cutoff(1610)
    .room(0.33)
    .every(3, x => x.jux(y => y.pan(0.88)))
)

$: s("hh cp <cp [cp~]> oh~").slow(5)
  .gain(0.13)
  .pan(sine.range(0.25,0.78).slow(11))
  .cutoff(2990)
  .degradeBy(0.17)
  .every(4, x => x.jux(y => y.rev()))

$: stack(
  note("<c4 e4 g4 eb4 d4 f4 eb4>").slow(8)
    .sound("supersaw")
    .gain(0.18)
    .cutoff(3540)
    .tremolo(0.7)
    .pan(sine.range(0.15,0.92).slow(9)),
  note("a3 <d4~ f4> g3").slow(10)
    .sound("supersaw")
    .gain(0.12)
    .lpf(1330)
    .every(2, x => x.jux(y => y.rev()))
)

$: note("g4 d4 [f4~] <e4 a4>").slow(7)
  .sound("piano")
  .gain(0.18)
  .release(0.7)
  .every(2, x => x.jux(y => y.pan(0.79)))
  .pan(sine.range(0.28,0.77).slow(12))

$: stack(
  note("<b3 g3 eb4 d4> [a3~] <fs3 cs4>").slow(6)
    .sound("pulse")
    .gain(0.13)
    .cutoff(rand.range(1820,3300).slow(5))
    .degradeBy(0.25)
    .pan(cosine.range(0.18,0.9).slow(8)),
  s("supersaw [triangle~] <saw square> [piano~]").slow(7)
    .gain(0.13)
    .cutoff(sine.range(650,3970).slow(12))
    .pan(perlin.range(0.07,0.79).slow(15))
    .every(2, x => x.jux(y => y.rev()))
)

$: s("hh cp <cr~> [hh~ bd]").slow(6)
  .gain(0.11)
  .delay(0.15)
  .delayfeedback(0.23)
  .pan(sine.range(0.13,0.77).slow(10))
  .every(3, x => x.jux(y => y.rev()))