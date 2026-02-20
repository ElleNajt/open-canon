setcps(155/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [g3 bb3 eb4] [eb4 g4 c5] [d4 f4 ab4]").every(4, x=>x.rev().transpose(perlin.range(-0.3,0.8).slow(4.2))).slow(2.1).sound("saw").gain(0.42).lpf(sine.range(80,3800).slow(3.8)).phaser(sine.range(0.4,1.1).slow(5)).room(0.42)

$: stack(
  s("bd [~ sn bd]").euclid(3,16),
  s("sn").euclid(5,16).gain(0.88),
  s("hh*4 [oh ~ rd ~]").euclid(11,16).gain(0.38).degradeBy(0.4),
  s("cp*3 ~").every(4, x=>x.rev().fast(2.1)),
  s("[mt ht lt]").fast(3.2).gain(0.48)
).gain(0.78).room(0.52).crush(perlin.range(6,11).slow(6.5)).delay(0.38).dt(0.26)

$: n("[0 3 7 ~] [4 2 7 9] [5 9 ~ 7] [3 0 5 2]").scale("Eb:phrygian").slow(1.6).sound("piano").gain(0.58).fmi(sine.range(0.3,0.8).slow(4.2)).detune(perlin.range(-28,38).slow(6.8)).pan(sine.range(0.25,0.75).slow(7.5))

$: note("[g4 bb4 d5] [ab4 c5 eb5] [f4 a4 c5 eb5] [g4 bb4 d5]").slow(2.9).sound("supersaw").gain(0.4).attack(0.92).hpf(sine.range(120,680).slow(6.2)).detune(perlin.range(-22,28).slow(4.8)).leslie(sine.range(0.3,0.9).slow(3.2))

$: note("g1 [bb1 d2 eb2] [d2 f2 ab2] [bb1 g1 d2]").slow(2.6).sound("square").gain(0.52).lpf(perlin.range(320,1150).slow(4.8)).distort(0.38).ring(perlin.range(0.25,0.52).slow(4.2)).coarse(rand.range(3,9).slow(7))

$: s("ghosts_in_the_machine [~ evolve] evolve [ghosts_in_the_machine ~]").slow(4.2).gain(0.58).room(0.75).speed(perlin.range(0.7,1.55).slow(3.2)).chop(rand.range(12,28)).pan(sine.range(0.1,0.9).slow(6.8)).every(6, x=>x.rev().crush(9)).degradeBy(0.22)