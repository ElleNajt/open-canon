setcps(188/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [bb3 d4 g4] [eb4 g4 c5] [d4 f4 ab5]").every(4, x=>x.rev().transpose(perlin.range(-0.3,1.1).slow(4.2))).slow(1.9).sound("saw").gain(0.6).lpf(sine.range(160,3600).slow(4.3)).phaser(perlin.range(0.22,0.42).slow(5.2))

$: stack(
  s("bd*2 [~ sn bd]").euclid(9,16).gain(0.92),
  s("sn").euclid(6,16).gain(0.85).every(8, x=>x.tremolo(0.42)),
  s("hh*8 [oh ~ rd hh*2]").euclid(14,16).gain(0.44).degradeBy(0.42),
  s("cp*8").every(4, x=>x.fast(2)),
  s("[~ mt*2 ht lt]").fast(4.3).gain(0.62)
).gain(0.85).room(0.72).coarse(perlin.range(2.8,10).slow(6.5)).delay(0.48).swing(0.34)

$: n("[0 3 7] [4 7 10 ~] [2 5 9] [0 4 7 ~]").scale("Eb:minor").slow(1.95).sound("piano").gain(0.72).fmi(sine.range(0.45,1.35).slow(4.2)).room(0.42)

$: note("[g4 c5 eb5] [ab4 c5 f5] [f4 a4 d5] [g4 bb4 eb5]").every(5, x=>x.juxBy(0.38,rev)).slow(2.15).sound("supersaw").gain(0.54).hpf(sine.range(110,620).slow(5.1)).detune(perlin.range(-18,48).slow(4.3))

$: note("eb1 [bb1 d2 f2] [eb2 g2 bb2] [ab1 c2 eb2]").slow(2.35).sound("square").gain(0.64).lpf(saw.range(90,950).slow(5.3)).distort(0.52).pan(sine.slow(5.7))

$: s("evolve*2 [ghosts_in_the_machine*2 ~], ~ [evolve*3 ghosts_in_the_machine], [ghosts_in_the_machine evolve*2 ~]").slow(2.9).gain(0.8).room(0.85).speed(perlin.range(0.68,1.52).slow(4.7)).vowel("e o i a u".slow(2.3)).chop(perlin.range(6,13).slow(7.1))