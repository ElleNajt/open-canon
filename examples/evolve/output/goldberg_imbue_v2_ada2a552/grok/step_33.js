setcps(182/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [bb3 d4 g4] [eb4 g4 c5] [d4 f4 ab5]").every(4, x=>x.rev().transpose(perlin.range(-0.5,1).slow(3.8))).slow(2).sound("saw").gain(0.55).lpf(sine.range(180,3400).slow(4)).phaser(perlin.range(0.25,0.4).slow(4.8))

$: stack(
  s("bd*2 [~ sn bd]").euclid(7,16).gain(0.9),
  s("sn").euclid(5,16).gain(0.8).every(7, x=>x.tremolo(0.4)),
  s("hh*8 [oh rd ~ hh*3]").euclid(13,16).gain(0.42).degradeBy(0.38),
  s("cp*8").every(4, x=>x.fast(2)),
  s("[~ mt*3 ht lt]").fast(4).gain(0.58)
).gain(0.8).room(0.7).coarse(perlin.range(3,9).slow(6)).delay(0.45).swing(0.3)

$: n("[0 3 7] [4 7 10 ~] [2 5 9] [0 4 7 ~]").scale("Eb:minor").slow(1.8).sound("piano").gain(0.68).fmi(sine.range(0.5,1.3).slow(4)).room(0.35)

$: note("[g4 c5 eb5] [ab4 c5 f5] [f4 a4 d5] [g4 bb4 eb5]").every(5, x=>x.juxBy(0.4,rev)).slow(2.2).sound("supersaw").gain(0.5).hpf(sine.range(120,600).slow(5)).detune(perlin.range(-20,50).slow(4))

$: note("eb1 [bb1 d2 f2] [eb2 g2 bb2] [ab1 c2 eb2]").slow(2.3).sound("square").gain(0.62).lpf(saw.range(100,900).slow(5)).distort(0.5).pan(sine.slow(6))

$: s("evolve*2 [ghosts_in_the_machine*3 ~], ~ [evolve*4 ghosts_in_the_machine], [~ evolve ghosts_in_the_machine*2]").slow(3).gain(0.75).room(0.8).speed(perlin.range(0.7,1.5).slow(4.5)).vowel("e o i a u".slow(2)).chop(perlin.range(5,12).slow(7))