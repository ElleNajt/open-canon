setcps(152/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [g3 bb3 eb4] [eb4 g4 c5] [d4 f4 ab4]").every(8, x=>x.rev().transpose(perlin.range(-0.3,1.2).slow(3.8))).slow(2.1).sound("saw").gain(0.52).lpf(sine.range(120,3400).slow(4.1)).detune(perlin.range(-18,32).slow(7.2)).pan(sine.range(0.2,0.8).slow(8.9))

$: stack(
  s("bd [~ sn bd]").euclid(3,16),
  s("sn").euclid(5,16).gain(0.92),
  s("hh*4 [oh ~ rd ~]").euclid(11,16).gain(0.48).degradeBy(0.28),
  s("cp*3 ~").every(4, x=>x.rev().fast(2.1)),
  s("[mt ht lt]").fast(3.2).gain(0.58)
).gain(0.87).room(0.55).crush(perlin.range(3,14).slow(7.1)).delay(0.45).swing(0.14).phaser(perlin.range(0.2,0.6).slow(5.4))

$: n("[0 3 7 ~] [4 2 7 9] [5 9 ~ 7] [3 0 5 2]").scale("Eb:phrygian").slow(1.9).sound("piano").gain(0.68).fmi(sine.range(0.4,0.92).slow(4.8)).detune(perlin.range(-28,48).slow(5.9)).pan(sine.range(0.1,0.9).slow(9.1)).every(6, x=>x.rev())

$: note("[g4 bb4 d5] [ab4 c5 eb5] [f4 a4 c5 eb5] [g4 bb4 d5]").slow(2.6).sound("supersaw").gain(0.47).attack(0.85).hpf(sine.range(95,720).slow(5.9)).detune(perlin.range(-25,42).slow(4.8)).phaser(perlin.range(0.15,0.55).slow(3.9))

$: note("g1 [bb1 d2 eb2] [d2 f2 ab2] [bb1 g1 d2]").slow(2.5).sound("square").gain(0.6).lpf(perlin.range(280,1450).slow(5.2)).distort(0.48).ring(perlin.range(0.32,0.68).slow(4.3)).pan(rand.range(0.2,0.8))

$: s("ghosts_in_the_machine [evolve ghosts_in_the_machine] evolve ~").slow(3.9).gain(0.67).room(0.85).speed(perlin.range(0.72,1.52).slow(3.4)).chop(rand.range(12,28)).pan(sine.range(0.05,0.95).slow(6.8)).every(7, x=>x.rev().speed(1.2)).degradeBy(0.22)