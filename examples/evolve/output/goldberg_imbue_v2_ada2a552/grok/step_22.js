setcps(158/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [g3 bb3 eb4] [eb4 g4 c5] [d4 f4 ab4]").every(4, x=>x.rev().transpose(perlin.range(-0.5,1.2).slow(3.9))).slow(2.2).sound("saw").gain(0.45).lpf(sine.range(90,3600).slow(4.1)).detune(perlin.range(-18,22).slow(7.2)).room(0.45)

$: stack(
  s("bd [~ sn bd]").euclid(3,16),
  s("sn").euclid(5,16).gain(0.85),
  s("hh*4 [oh ~ rd ~]").euclid(11,16).gain(0.42).degradeBy(0.35),
  s("cp*3 ~").every(4, x=>x.rev().fast(2.2)),
  s("[mt ht lt]").fast(3.4).gain(0.52)
).gain(0.82).room(0.48).crush(perlin.range(5,12).slow(7.2)).delay(0.42).dt(0.25)

$: n("[0 3 7 ~] [4 2 7 9] [5 9 ~ 7] [3 0 5 2]").scale("Eb:phrygian").slow(1.7).sound("piano").gain(0.62).fmi(sine.range(0.4,0.85).slow(4.8)).detune(perlin.range(-32,42).slow(5.9)).pan(sine.range(0.2,0.8).slow(8.1)).every(6, x=>x.rev())

$: note("[g4 bb4 d5] [ab4 c5 eb5] [f4 a4 c5 eb5] [g4 bb4 d5]").slow(2.8).sound("supersaw").gain(0.42).attack(0.88).hpf(sine.range(110,720).slow(5.9)).detune(perlin.range(-25,32).slow(5.2)).room(0.38)

$: note("g1 [bb1 d2 eb2] [d2 f2 ab2] [bb1 g1 d2]").slow(2.7).sound("square").gain(0.55).lpf(perlin.range(280,1280).slow(5.4)).distort(0.42).ring(perlin.range(0.3,0.58).slow(4.8)).pan(rand.range(0.3,0.7))

$: s("ghosts_in_the_machine [~ evolve] evolve [ghosts_in_the_machine ~]").slow(4.1).gain(0.62).room(0.78).speed(perlin.range(0.65,1.62).slow(3.5)).chop(rand.range(14,26)).pan(sine.range(0.05,0.95).slow(7.4)).every(5, x=>x.rev().speed(1.1)).degradeBy(0.28)