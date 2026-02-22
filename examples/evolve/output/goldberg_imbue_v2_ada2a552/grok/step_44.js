setcps(135/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [bb3 d4 ab4] [eb4 g4 c5] [d4 f4 bb5]").every(4, x=>x.rev().transpose(perlin.range(-0.75,1.75).slow(2.5))).slow(2).sound("saw").gain(0.55).lpf(sine.range(100,4800).slow(3.8)).room(0.45)

$: stack(
  s("bd*2 [~ sn bd]").euclid(9,16).gain(0.82).swing(0.18),
  s("sn").euclid(7,16).gain(0.72).every(4, x=>x.tremolo(0.7).fast(1.5)),
  s("hh*8 [oh ~ rd cb]").euclid(14,16).gain(0.4).degradeBy(0.35),
  s("cp*8").every(4, x=>x.fast(2.8)),
  s("[~ mt*3 ht lt]").fast(4.8).gain(0.68)
).gain(0.78).room(0.82).crush(perlin.range(2.5,11).slow(4.8)).delay(0.52).pan(sine.range(0.05,0.95).slow(7))

$: n("[0 3 7] [4 7 10 ~] [2 5 9 -1] [0 4 7 ~]").scale("Eb:minor").slow(1.9).sound("triangle").gain(0.62).fmi(sine.range(0.25,2.4).slow(4.2)).ring(perlin.range(0.15,0.85).slow(4.5))

$: note("[g4 c5 eb5] [ab4 c5 f5] [f4 a4 d5] [ab4 d5 f5]").every(5, x=>x.juxBy(0.45,rev)).slow(2.1).sound("supersaw").gain(0.58).hpf(sine.range(70,750).slow(4.8)).phaser(0.3)

$: note("eb1 [bb1 d2 f2] [eb2 g2 bb2] [ab1 c2 f2]").slow(2.4).sound("square").gain(0.68).lpf(saw.range(45,1500).slow(5.8)).distort(0.8).pan(perlin.range(0.05,0.95).slow(6.5))

$: s("ghosts_in_the_machine*3 [evolve*3 ~] evolve*6 [ghosts_in_the_machine*2 evolve*4], evolve*4 [~ ghosts_in_the_machine evolve]").slow(2.5).gain(0.85).speed(perlin.range(0.65,1.6).slow(4.8)).chop(rand.range(10,18).slow(4.2)).vowel("e i o a u").room(0.65)