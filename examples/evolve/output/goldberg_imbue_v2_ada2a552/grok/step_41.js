setcps(208/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [bb3 d4 ab4] [eb4 g4 c5] [d4 f4 bb5]").every(4, x=>x.rev().transpose(perlin.range(-0.4,1.2).slow(3))).slow(2).sound("saw").gain(0.55).lpf(sine.range(120,4500).slow(3.8))

$: stack(
  s("bd*2 [~ sn bd]").euclid(8,16).gain(0.9).swing(0.1),
  s("sn").euclid(4,16).gain(0.8).every(4, x=>x.tremolo(0.65).fast(1.4)),
  s("hh*8 [oh ~ rd cb]").euclid(13,16).gain(0.5).degradeBy(0.3),
  s("cp*8").every(4, x=>x.fast(2.6)),
  s("[~ mt*3 ht lt]").fast(4.5).gain(0.75)
).gain(0.8).room(0.85).shape(perlin.range(0.25,0.8).slow(4.2)).delay(0.55).pan(sine.range(0.2,0.8).slow(6.5))

$: n("[0 3 7] [4 7 10 ~] [2 5 9 -1] [0 4 7 ~]").scale("Eb:minor").slow(1.8).sound("triangle").gain(0.7).fmi(sine.range(0.5,1.8).slow(3.8)).ring(perlin.range(0.25,0.75).slow(4.8))

$: note("[g4 c5 eb5] [ab4 c5 f5] [f4 a4 d5] [ab4 d5 f5]").every(6, x=>x.juxBy(0.5,rev)).slow(2.2).sound("supersaw").gain(0.65).hpf(sine.range(80,700).slow(5))

$: note("eb1 [bb1 d2 f2] [eb2 g2 bb2] [ab1 c2 f2]").slow(2.5).sound("square").gain(0.75).lpf(saw.range(50,1200).slow(5.8)).distort(0.7).coarse(perlin.range(3,10).slow(6.5))

$: s("~ [ghosts_in_the_machine*3 evolve*4] evolve*6 [ghosts_in_the_machine evolve*2] [evolve*3 ghosts_in_the_machine*2], evolve*4").slow(2.7).gain(0.88).speed(perlin.range(0.7,1.5).slow(5)).chop(rand.range(7,16).slow(4.8)).vowel("e o i a u")