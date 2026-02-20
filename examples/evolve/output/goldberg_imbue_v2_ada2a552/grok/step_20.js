setcps(148/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [g3 bb3 eb4] [eb4 g4 bb4] [d4 f4 ab4]").every(4, x=>x.rev().transpose(perlin.range(-0.2,1.0).slow(5))).slow(1.9).sound("saw").gain(0.45).lpf(sine.range(60,4200).slow(4)).tremolo(sine.range(0.2,0.8).slow(5.5)).room(0.45)

$: stack(
  s("bd [~ sn bd]").euclid(3,16),
  s("sn").euclid(5,16).gain(0.9),
  s("hh*4 [oh ~ rd ~]").euclid(11,16).gain(0.4).degradeBy(0.35),
  s("cp*3 ~").every(4, x=>x.rev().fast(2.2)),
  s("[mt ht lt]").fast(3).gain(0.5)
).gain(0.8).room(0.5).shape(rand.range(0.15,0.5)).delay(0.35).dt(0.25).swing(sine.range(0.25,0.5))

$: n("[0 3 7 ~] [4 2 7 9] [5 9 ~ 7] [3 0 5 2]").scale("Eb:phrygian").slow(1.5).sound("piano").gain(0.6).fmi(sine.range(0.25,0.85).slow(4.8)).detune(perlin.range(-30,40).slow(7)).room(0.5)

$: note("[g4 bb4 d5] [ab4 c5 eb5] [f4 a4 c5 eb5] [g4 bb4 d5]").slow(2.7).sound("supersaw").gain(0.42).attack(0.95).hpf(sine.range(100,650).slow(7)).detune(perlin.range(-25,30).slow(4.5)).ring(sine.range(0.2,0.6).slow(3.5))

$: note("g1 [bb1 d2 eb2] [d2 f2 ab2] [bb1 g1 d2]").slow(2.4).sound("square").gain(0.55).lpf(perlin.range(350,1200).slow(5)).distort(0.42).ring(perlin.range(0.2,0.55).slow(4.5)).slide(sine.range(0.005,0.2).slow(8))

$: s("ghosts_in_the_machine [~ evolve] [ghosts_in_the_machine evolve ~]").slow(4.8).gain(0.55).room(0.8).speed(perlin.range(0.65,1.6).slow(3)).chop(rand.range(10,30)).pan(sine.range(0.05,0.95).slow(7)).every(8, x=>x.rev().crush(10)).degradeBy(0.25)