setcps(192/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [bb3 d4 g4] [eb4 g4 c5] [d4 f4 ab5]").every(4, x=>x.rev().transpose(perlin.range(-0.3,0.8).slow(4))).slow(2).sound("saw").gain(0.6).lpf(sine.range(150,3500).slow(4)).phaser(perlin.range(0.2,0.5).slow(5))

$: stack(
  s("bd*2 [~ sn bd]").euclid(9,16).gain(0.9),
  s("sn").euclid(5,16).gain(0.78).every(6, x=>x.tremolo(0.6)),
  s("hh*8 [oh ~ rd cb]").euclid(12,16).gain(0.48).degradeBy(0.35),
  s("cp*8").every(4, x=>x.fast(1.8)),
  s("[~ mt*2 ht lt]").fast(4).gain(0.65)
).gain(0.8).room(0.7).shape(perlin.range(0.2,0.85).slow(6)).delay(0.4).swing(0.05)

$: n("[0 3 7] [4 7 10 ~] [2 5 9] [0 4 7 ~]").scale("Eb:minor").slow(1.8).sound("triangle").gain(0.72).fmi(sine.range(0.4,1.4).slow(4)).ring(perlin.range(0.3,0.7).slow(4.2))

$: note("[g4 c5 eb5] [ab4 c5 f5] [f4 a4 d5] [g4 bb4 eb5]").every(5, x=>x.juxBy(0.35,rev)).slow(2.1).sound("supersaw").gain(0.6).hpf(sine.range(100,650).slow(4.8)).room(0.45)

$: note("eb1 [bb1 d2 f2] [eb2 g2 bb2] [ab1 c2 eb2]").slow(2.4).sound("square").gain(0.7).lpf(saw.range(60,1100).slow(5.2)).distort(0.55).crush(perlin.range(4,12).slow(6))

$: s("~ [ghosts_in_the_machine*2 evolve] evolve*2 [ghosts_in_the_machine ~ evolve], ghosts_in_the_machine [evolve*3 ~]").slow(3).gain(0.75).speed(perlin.range(0.8,1.35).slow(5.2)).chop(perlin.range(3,10).slow(6)).vowel("e i o a")