setcps(148/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [g3 bb3 eb4] [eb4 g4 bb4] [d4 f4 ab4]").every(4, x=>x.rev().transpose(perlin.range(-0.1,0.9).slow(6))).slow(1.7).sound("saw").gain(0.42).lpf(sine.range(80,3800).slow(3.8)).tremolo(sine.range(0.25,0.75).slow(6.2)).room(0.4)

$: stack(
  s("bd [~ sn bd]").euclid(3,16),
  s("sn").euclid(5,16).gain(0.85),
  s("hh*4 [oh ~ rd ~]").euclid(11,16).gain(0.38).degradeBy(0.4),
  s("cp*3 ~").every(4, x=>x.rev().fast(2)),
  s("[mt ht lt]").fast(2.8).gain(0.45)
).gain(0.78).room(0.48).shape(rand.range(0.2,0.45)).delay(0.3).dt(0.22).swing(sine.range(0.3,0.45))

$: n("[0 3 7 ~] [4 2 7 9] [5 9 ~ 7] [3 0 5 2]").scale("Eb:phrygian").slow(1.4).sound("piano").gain(0.55).fmi(sine.range(0.3,0.8).slow(5.2)).detune(perlin.range(-25,35).slow(6.5)).room(0.45).pan(sine.range(0.2,0.8).slow(9))

$: note("[g4 bb4 d5] [ab4 c5 eb5] [f4 a4 c5 eb5] [g4 bb4 d5]").slow(2.5).sound("supersaw").gain(0.4).attack(0.9).hpf(sine.range(120,600).slow(6.5)).detune(perlin.range(-20,28).slow(5)).ring(sine.range(0.25,0.55).slow(4))

$: note("g1 [bb1 d2 eb2] [d2 f2 ab2] [bb1 g1 d2]").slow(2.2).sound("square").gain(0.5).lpf(perlin.range(400,1100).slow(4.8)).distort(0.38).ring(perlin.range(0.25,0.5).slow(5)).slide(sine.range(0.01,0.15).slow(7.5))

$: s("ghosts_in_the_machine [~ evolve] [ghosts_in_the_machine evolve ~]").slow(4.5).gain(0.5).room(0.75).speed(perlin.range(0.7,1.5).slow(2.8)).chop(rand.range(12,28)).pan(sine.range(0.1,0.9).slow(6.5)).sometimes(x=>x.rev().crush(12)).degradeBy(0.2)