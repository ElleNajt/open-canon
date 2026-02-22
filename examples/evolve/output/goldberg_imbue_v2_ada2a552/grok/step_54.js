setcps(178/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [bb3 d4 ab4] [eb4 g4 c5] [d4 f4 bb4]").every(8, x=>x.rev().transpose(perlin.range(-7,11).slow(2.8))).slow(1.5).sound("supersaw").gain(0.65).lpf(sine.range(90,5000).slow(4)).room(0.48).pan(perlin.range(0,1).slow(6))

$: stack(
  s("bd*2 [~ sn bd]").euclid(12,16).gain(0.85).swing(0.48),
  s("sn").euclid(9,16).gain(0.72).every(4, x=>x.tremolo(0.75).fast(1.6)),
  s("hh*8 [oh ~ rd cb]").euclid(14,16).gain(0.4).degradeBy(0.45),
  s("cp*8").every(3, x=>x.fast(3.4)),
  s("[~ mt*4 ht lt]").fast(5).gain(0.68)
).gain(0.85).room(0.7).crush(perlin.range(5,13).slow(4.2)).delay(0.5).phaser(sine.range(0.2,0.7).slow(6))

$: n("[0 3 7] [4 7 10 ~] [2 5 9 -1] [0 4 7 ~]").scale("Eb:minor").slow(1.9).sound("saw").gain(0.7).fmi(sine.range(0.5,4).slow(4.2)).lpf(cosine.range(130,3800).slow(4.5)).room(0.28)

$: note("[g4 c5 eb5] [ab4 c5 f5] [f4 a4 d5] [ab4 d5 f5]").every(4, x=>x.juxBy(0.5, rev)).slow(1.7).sound("pulse").gain(0.6).hpf(cosine.range(80,1150).slow(5.2)).room(0.42).fmi(sine.range(0.8,2.2).slow(3.5))

$: note("eb1 [bb1 d2 f2] [eb2 g2 bb2] [ab1 c2 f2]").slow(1.7).sound("square").gain(0.74).hpf(68).lpf(saw.range(55,2100).slow(6.2)).distort(0.65)

$: s("~ [ghosts_in_the_machine evolve*4] evolve*3 [ghosts_in_the_machine*2 ~ evolve] [evolve*4 ghosts_in_the_machine ~]").slow(1.4).gain(0.82).speed(perlin.range(0.68,1.48).slow(5.2)).chop(rand.range(11,25).slow(3.8)).vowel("e i a o u")