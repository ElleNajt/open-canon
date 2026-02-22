setcps(208/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [bb3 d4 ab4] [eb4 g4 c5] [d4 f4 bb5]").every(4, x=>x.rev().transpose(perlin.range(-0.3,1.4).slow(2.7))).slow(1.9).sound("saw").gain(0.58).lpf(sine.range(150,4200).slow(4.1)).phaser(sine.range(0.2,0.9).slow(3.5))

$: stack(
  s("bd*2 [~ sn bd]").euclid(7,16).gain(0.88).swing(0.12),
  s("sn").euclid(5,16).gain(0.78).every(5, x=>x.tremolo(0.7).fast(1.3)),
  s("hh*8 [oh ~ rd cb]").euclid(12,16).gain(0.45).degradeBy(0.28),
  s("cp*8").every(4, x=>x.fast(2.8)),
  s("[~ mt*3 ht lt]").fast(4.2).gain(0.72)
).gain(0.82).room(0.82).crush(perlin.range(4,9).slow(4.5)).delay(0.52).pan(sine.range(0.15,0.85).slow(7.2))

$: n("[0 3 7] [4 7 10 ~] [2 5 9 -1] [0 4 7 ~]").scale("Eb:minor").slow(1.6).sound("triangle").gain(0.68).fmi(sine.range(0.4,2).slow(4.2)).ring(perlin.range(0.2,0.8).slow(5.2)).penv(0.3)

$: note("[g4 c5 eb5] [ab4 c5 f5] [f4 a4 d5] [ab4 d5 f5]").every(5, x=>x.juxBy(0.45,rev)).slow(2.1).sound("supersaw").gain(0.62).hpf(sine.range(90,650).slow(4.8)).room(0.45)

$: note("eb1 [bb1 d2 f2] [eb2 g2 bb2] [ab1 c2 f2]").slow(2.4).sound("square").gain(0.73).lpf(saw.range(55,1300).slow(5.5)).distort(0.72).pan(perlin.range(0.2,0.8).slow(6.2))

$: s("ghosts_in_the_machine*2 evolve*4, [~ evolve*2 ghosts_in_the_machine] evolve*8 [ghosts_in_the_machine*3 evolve ~], evolve*5").slow(2.5).gain(0.86).speed(perlin.range(0.65,1.6).slow(4.7)).chop(rand.range(6,18).slow(4.2)).room(0.65).vowel("o i a e u o")