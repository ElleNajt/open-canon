setcps(182/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [bb3 d4 g4] [eb4 g4 c5] [d4 f4 ab5]").every(4, x=>x.rev().transpose(perlin.range(-0.3,0.9).slow(4.2))).slow(1.9).sound("saw").gain(0.5).lpf(sine.range(200,3200).slow(4.5)).phaser(perlin.range(0.2,0.45).slow(5))

$: stack(
  s("bd*2 [~ sn bd]").euclid(7,16).gain(0.88),
  s("sn").euclid(5,16).gain(0.82).every(7, x=>x.tremolo(0.35)),
  s("hh*8 [oh rd ~ hh*3]").euclid(13,16).gain(0.4).degradeBy(0.42),
  s("cp*8").every(4, x=>x.fast(2.1)),
  s("[~ mt*3 ht lt]").fast(4.2).gain(0.55)
).gain(0.78).room(0.68).crush(perlin.range(4,10).slow(5.8)).delay(0.42).swing(0.28)

$: n("[0 3 7] [4 7 10 ~] [2 5 9] [0 4 7 ~]").scale("Eb:minor").slow(1.6).sound("piano").gain(0.65).fmi(sine.range(0.45,1.2).slow(4.2))

$: note("[g4 c5 eb5] [ab4 c5 f5] [f4 a4 d5] [g4 bb4 eb5]").every(5, x=>x.jux(rev)).slow(2.4).sound("supersaw").gain(0.48).hpf(sine.range(140,580).slow(5.2)).detune(perlin.range(-15,45).slow(3.9))

$: note("eb1 [bb1 d2 f2] [eb2 g2 bb2] [ab1 c2 eb2]").slow(2.1).sound("square").gain(0.6).lpf(saw.range(110,850).slow(4.8)).distort(0.45)

$: s("evolve*2 [ghosts_in_the_machine*3 ~], ~ [evolve*4 ghosts_in_the_machine], [~ evolve ghosts_in_the_machine*2]").slow(2.8).gain(0.7).room(0.75).speed(perlin.range(0.65,1.55).slow(4.2)).vowel("e o i a u".slow(2.5)).degradeBy(0.25)