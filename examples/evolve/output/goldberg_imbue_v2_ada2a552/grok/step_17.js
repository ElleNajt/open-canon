setcps(140/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [g3 bb3 eb4] [d4 f4 ab4] [bb4 d5 f5]").every(4, x=>x.rev().transpose(perlin.range(-0.3,1.2).slow(6))).slow(2.1).sound("saw").gain(0.48).lpf(sine.range(80,3800).slow(4)).tremolo(sine.range(0.25,0.75).slow(5)).accelerate(perlin.range(-0.001,0.018))

$: stack(
  s("bd [~ sn bd]").euclid(3,16),
  s("sn").euclid(5,16).gain(0.9),
  s("hh*4 [oh ~ rd ~]").euclid(11,16).gain(0.42).degradeBy(0.3),
  s("cp*3 ~").every(4, x=>x.rev().fast(1.4)),
  s("[mt ht*2 lt]").fast(2.4).gain(0.46)
).gain(0.82).room(0.5).shape(rand.range(0.2,0.45)).delay(0.26).dt(0.22).swing(0.42)

$: n("[0 3 7 ~] [4 2 7] [5 9 ~ 7] [3 0 5]").scale("G:phrygian").slow(1.5).sound("piano").gain(0.58).fmi(sine.range(0.2,0.8).slow(5)).detune(perlin.range(-25,30).slow(6.8)).room(0.4).jux(x=>x.rev().pan(-0.35))

$: note("[g4 bb4 d5] [ab4 c5 eb5] [f4 a4 c5 eb5]").slow(3).sound("supersaw").gain(0.42).attack(0.9).hpf(sine.range(120,550).slow(6.8)).detune(perlin.range(-16,24).slow(5)).room(0.28)

$: note("g1 [bb1 d2 eb2] [d2 f2 bb1 g1]").slow(2.6).sound("square").gain(0.55).lpf(perlin.range(400,850).slow(4.8)).distort(0.45).ring(perlin.range(0.25,0.4).slow(4.2)).slide(sine.range(0,0.15).slow(7.5))

$: s("~ ghosts_in_the_machine evolve [~ ghosts_in_the_machine]").slow(6.2).gain(0.45).room(0.85).speed(perlin.range(0.7,1.45).slow(3)).chop(rand.range(18,28)).pan(sine.range(0.2,0.9).slow(5.2)).crush(rand.range(10,14))