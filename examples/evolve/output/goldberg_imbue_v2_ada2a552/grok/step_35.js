setcps(194/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [bb3 d4 g4] [eb4 g4 c5] [d4 f4 ab5]").every(4, x=>x.rev().transpose(perlin.range(-0.4,1.2).slow(4.1))).slow(1.8).sound("saw").gain(0.58).lpf(sine.range(150,3800).slow(4.6)).phaser(perlin.range(0.25,0.45).slow(5.1))

$: stack(
  s("bd*2 [~ sn bd]").euclid(8,16).gain(0.9),
  s("sn").euclid(5,16).gain(0.82).every(8, x=>x.tremolo(0.45)),
  s("hh*8 [oh ~ rd hh*2]").euclid(13,16).gain(0.42).degradeBy(0.38),
  s("cp*8").every(4, x=>x.fast(2.1)),
  s("[~ mt*2 ht lt]").fast(4.2).gain(0.61)
).gain(0.86).room(0.74).crush(perlin.range(3.2,11.2).slow(6.7)).delay(0.49).swing(0.37)

$: n("[0 3 7] [4 7 10 ~] [2 5 9] [0 4 7 ~]").scale("Eb:minor").slow(1.82).sound("piano").gain(0.71).fmi(sine.range(0.42,1.38).slow(4.4)).room(0.44)

$: note("[g4 c5 eb5] [ab4 c5 f5] [f4 a4 d5] [g4 bb4 eb5]").every(6, x=>x.juxBy(0.42,rev)).slow(2.02).sound("supersaw").gain(0.53).hpf(sine.range(105,640).slow(5.2)).detune(perlin.range(-20,50).slow(4.6))

$: note("eb1 [bb1 d2 f2] [eb2 g2 bb2] [ab1 c2 eb2]").slow(2.18).sound("square").gain(0.66).lpf(saw.range(85,980).slow(5.6)).distort(0.54).pan(sine.range(0.3,0.7).slow(6.2))

$: s("evolve*2 [ghosts_in_the_machine*2 ~], ~ [evolve*3 ghosts_in_the_machine], [ghosts_in_the_machine evolve*2 ~]").every(8, rev).slow(2.72).gain(0.81).room(0.82).speed(perlin.range(0.72,1.48).slow(4.6)).vowel("e o i a u".slow(2.4))