setcps(182/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [bb3 d4 g4] [eb4 g4 c5] [d4 f4 ab5]").every(4, x=>x.rev().transpose(perlin.range(-0.2,1.1).slow(3.8))).slow(1.9).sound("saw").gain(0.52).lpf(sine.range(180,3400).slow(4.2))

$: stack(
  s("bd*2 [~ sn bd]").euclid(7,16).gain(0.92),
  s("sn").euclid(5,16).gain(0.85).every(6, x=>x.phaser(0.32)),
  s("hh*8 [oh rd ~ hh*3]").euclid(13,16).gain(0.42).degradeBy(0.38),
  s("cp*8").every(3, x=>x.fast(1.8)),
  s("[~ mt*3 ht lt]").fast(3.9).gain(0.58)
).gain(0.8).room(0.65).crush(perlin.range(3,11).slow(6.2)).delay(0.45).swing(0.26)

$: n("[0 3 7] [4 7 10 ~] [2 5 9] [0 4 7 ~]").scale("Eb:minor").slow(1.5).sound("piano").gain(0.68).fmi(sine.range(0.4,1.1).slow(4.5)).detune(perlin.range(-28,72).slow(4.8)).room(0.35)

$: note("[g4 c5 eb5] [ab4 c5 f5] [f4 a4 d5] [g4 bb4 eb5]").every(5, x=>x.jux(rev)).slow(2.2).sound("supersaw").gain(0.5).attack(0.55).hpf(sine.range(150,600).slow(4.8))

$: note("eb1 [bb1 d2 f2] [eb2 g2 bb2] [ab1 c2 eb2]").slow(2).sound("square").gain(0.62).lpf(saw.range(120,900).slow(4.5)).distort(0.48).pan(sine.range(0.25,0.75).slow(6.2))

$: s("evolve*3 [ghosts_in_the_machine*2 ~], ~ evolve*4 ghosts_in_the_machine, evolve*2 [~ ghosts_in_the_machine]").slow(2.5).gain(0.72).room(0.78).speed(perlin.range(0.6,1.6).slow(3.8)).chop(sine.range(10,22).slow(2.2)).degradeBy(0.22)