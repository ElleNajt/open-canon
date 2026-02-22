setcps(208/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [bb3 d4 g4] [eb4 g4 c5] [d4 f4 ab5]").every(4, x=>x.rev().transpose(perlin.range(-0.5,1).slow(2.8))).slow(1.9).sound("saw").gain(0.52).lpf(sine.range(100,4200).slow(4))

$: stack(
  s("bd*2 [~ sn bd]").euclid(7,16).gain(0.88).swing(0.08),
  s("sn").euclid(5,16).gain(0.82).every(4, x=>x.tremolo(0.6).fast(1.3)),
  s("hh*8 [oh ~ rd cb]").euclid(12,16).gain(0.48).degradeBy(0.35),
  s("cp*8").every(4, x=>x.fast(2.4)),
  s("[~ mt*2 ht lt]").fast(4.2).gain(0.72)
).gain(0.78).room(0.8).shape(perlin.range(0.2,0.85).slow(4.5)).delay(0.5).pan(sine.range(0.25,0.75).slow(7))

$: n("[0 3 7] [4 7 10 ~] [2 5 9] [0 4 7 ~]").scale("Eb:minor").slow(1.7).sound("triangle").gain(0.68).fmi(sine.range(0.4,1.7).slow(4)).ring(perlin.range(0.3,0.7).slow(5))

$: note("[g4 c5 eb5] [ab4 c5 f5] [f4 a4 d5] [g4 bb4 eb5]").every(5, x=>x.juxBy(0.5,rev)).slow(2.1).sound("supersaw").gain(0.62).hpf(sine.range(90,650).slow(4.8)).phaser(perlin.range(0.3,0.7).slow(4.5))

$: note("eb1 [bb1 d2 f2] [eb2 g2 bb2] [ab1 c2 eb2]").slow(2.4).sound("square").gain(0.72).lpf(saw.range(60,1100).slow(6)).distort(0.65).crush(perlin.range(4,12).slow(6.2))

$: s("~ [ghosts_in_the_machine*4 evolve*3] evolve*5 [~ ghosts_in_the_machine] [evolve*2 ghosts_in_the_machine*2], evolve*3").slow(2.6).gain(0.85).speed(perlin.range(0.72,1.45).slow(5.2)).chop(rand.range(5,14).slow(5)).vowel("e i o a u")