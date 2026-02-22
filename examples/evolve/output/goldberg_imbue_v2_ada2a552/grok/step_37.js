setcps(192/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [bb3 d4 g4] [eb4 g4 c5] [d4 f4 ab5]").every(3, x=>x.rev().transpose(perlin.range(-0.5,1.2).slow(3.8))).slow(2).sound("saw").gain(0.65).lpf(sine.range(100,3800).slow(3.9)).phaser(perlin.range(0.15,0.55).slow(4.5))

$: stack(
  s("bd*2 [~ sn bd]").euclid(9,16).gain(0.9),
  s("sn").euclid(5,16).gain(0.78).every(6, x=>x.tremolo(0.6)),
  s("hh*8 [oh ~ rd cb]").euclid(11,16).gain(0.48).degradeBy(0.4),
  s("cp*8").every(4, x=>x.fast(1.8)),
  s("[~ mt*2 ht lt]").fast(4).gain(0.65)
).gain(0.82).room(0.72).shape(perlin.range(0.3,0.9).slow(5.8)).delay(0.45).phaser(0.38)

$: n("[0 3 7] [4 7 10 ~] [2 5 9] [0 4 7 ~]").scale("Eb:minor").slow(1.9).sound("triangle").gain(0.7).fmi(sine.range(0.5,1.3).slow(3.9)).ring(perlin.range(0.25,0.75).slow(4.1)).room(0.55)

$: note("[g4 c5 eb5] [ab4 c5 f5] [f4 a4 d5] [g4 bb4 eb5]").every(5, x=>x.juxBy(0.4,rev)).slow(2.2).sound("supersaw").gain(0.58).hpf(sine.range(120,700).slow(4.7)).room(0.42)

$: note("eb1 [bb1 d2 f2] [eb2 g2 bb2] [ab1 c2 eb2]").slow(2.3).sound("square").gain(0.68).lpf(saw.range(70,1200).slow(5.1)).distort(0.6).pan(sine.range(0.2,0.8).slow(5.7))

$: s("ghosts_in_the_machine*3 [evolve*3 ~], evolve [ghosts_in_the_machine*2 evolve], [~ ghosts_in_the_machine evolve*2]").rev().slow(2.9).gain(0.78).speed(perlin.range(0.75,1.4).slow(5.1)).chop(perlin.range(4,9).slow(5.5)).degradeBy(0.28)