setcps(135/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [g3 bb3 eb4] [d4 f4 ab4] [bb4 d5 f5]").every(4, x=>x.rev().transpose(perlin.range(-0.4,1).slow(7.5))).slow(2).sound("saw").gain(0.45).lpf(sine.range(90,3600).slow(4.2)).tremolo(sine.range(0.2,0.7).slow(4.8)).phaser(sine.range(0.2,0.8).slow(6.5)).accelerate(perlin.range(-0.002,0.015))

$: stack(
  s("bd [~ sn bd]").euclid(3,16),
  s("sn").euclid(5,16).gain(0.88),
  s("hh*4 [oh ~ rd ~]").euclid(11,16).gain(0.4).degradeBy(0.28),
  s("cp*3 ~").every(4, x=>x.rev().fast(1.3)),
  s("[mt ht*2 lt]").fast(2.3).gain(0.44)
).gain(0.8).room(0.48).shape(rand.range(0.15,0.42)).delay(0.24).dt(0.2).swing(0.4)

$: n("[0 3 7 ~] [4 2 7] [5 9 ~ 7] [3 0 5]").scale("G:phrygian").slow(1.6).sound("piano").gain(0.55).fmi(sine.range(0.15,0.75).slow(4.8)).detune(perlin.range(-22,28).slow(7.2)).room(0.38).jux(x=>x.rev().pan(-0.4))

$: note("[g4 bb4 d5] [ab4 c5 eb5] [f4 a4 c5 eb5]").slow(3.2).sound("supersaw").gain(0.39).attack(0.88).hpf(sine.range(110,520).slow(7.2)).detune(perlin.range(-14,22).slow(4.8)).room(0.26)

$: note("g1 [bb1 d2 eb2] [d2 f2 bb1 g1]").slow(2.8).sound("square").gain(0.52).lpf(perlin.range(380,820).slow(5.2)).distort(0.42).ring(perlin.range(0.22,0.38).slow(4)).slide(sine.range(0,0.12).slow(8))

$: s("~ ghosts_in_the_machine [evolve ~] [ghosts_in_the_machine evolve]").slow(6.8).gain(0.42).room(0.82).speed(perlin.range(0.68,1.42).slow(2.8)).chop(rand.range(16,26)).pan(sine.range(0.15,0.85).slow(5.8))