setcps(128/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [g3 bb3 eb4] [d4 f4 ab4] [bb4 d5 f5]").every(4, x=>x.rev().transpose(perlin.range(-0.5,1.2).slow(6.2))).slow(2).sound("saw").gain(0.42).lpf(sine.range(100,3500).slow(3.5)).tremolo(sine.range(0.25,0.65).slow(4.2)).phaser(sine.range(0.3,0.7).slow(7))

$: stack(
  s("bd [~ sn bd]").euclid(3,16),
  s("sn").euclid(4,16).gain(0.85),
  s("hh*4 [oh ~ rd ~]").euclid(10,16).gain(0.38).degradeBy(0.25),
  s("cp*3 ~").every(4, x=>x.rev()),
  s("[mt ht*2 lt]").fast(2.2).gain(0.42)
).gain(0.78).room(0.45).crush(rand.range(5,11)).delay(0.22).dt(0.18).swing(0.38)

$: n("[0 3 7 ~] [4 2 7] [5 9 ~ 7] [3 0 5]").scale("G:phrygian").slow(1.7).sound("piano").gain(0.52).fmi(sine.range(0.1,0.7).slow(4.2)).detune(perlin.range(-18,22).slow(6)).leslie(0.28).room(0.35)

$: note("[g4 bb4 d5] [ab4 c5 eb5] [f4 a4 c5 eb5]").slow(3.1).sound("supersaw").gain(0.37).attack(0.85).hpf(sine.range(120,480).slow(6.8)).detune(perlin.range(-12,16).slow(4.2)).room(0.22)

$: note("g1 [bb1 d2 eb2] [d2 f2 bb1 g1]").slow(2.9).sound("square").gain(0.5).lpf(perlin.range(420,780).slow(4.8)).distort(0.38).ring(perlin.range(0.2,0.35).slow(3.5))

$: s("~ ghosts_in_the_machine [evolve ~] [ghosts_in_the_machine evolve]").slow(6.5).gain(0.38).room(0.8).speed(perlin.range(0.7,1.35).slow(2.5)).chop(rand.range(14,24)).pan(sine.range(0.2,0.8).slow(5.2))