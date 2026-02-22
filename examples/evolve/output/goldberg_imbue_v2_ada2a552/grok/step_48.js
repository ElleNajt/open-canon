setcps(152/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [bb3 d4 ab4] [eb4 g4 c5] [d4 f4 bb4]").every(4, x=>x.rev().transpose(perlin.range(-5,5).slow(3))).slow(1.5).sound("saw").gain(0.52).lpf(sine.range(80,5200).slow(3.8)).room(0.4).detune(perlin.range(-18,22).slow(5))

$: stack(
  s("bd*2 [~ sn bd]").euclid(13,16).gain(0.8).swing(0.3),
  s("sn").euclid(9,16).gain(0.72).every(4, x=>x.tremolo(0.7).fast(1.6)),
  s("hh*8 [oh ~ rd cb]").euclid(14,16).gain(0.4).degradeBy(0.45),
  s("cp*8").every(4, x=>x.fast(2.8)),
  s("[~ mt*4 ht lt]").fast(4.8).gain(0.68)
).gain(0.88).room(0.75).distort(perlin.range(0.25,0.72).slow(3.8)).delay(0.55).pan(sine.range(0,1).slow(5.5))

$: n("[0 3 7] [4 7 10 ~] [2 5 9 -1] [0 4 7 ~]").scale("Eb:minor").slow(1.9).sound("triangle").gain(0.62).fmi(sine.range(0.6,2.8).slow(3.8)).ring(perlin.range(0.35,0.95).slow(3.8)).lpf(cosine.range(180,3200).slow(4.2))

$: note("[g4 c5 eb5] [ab4 c5 f5] [f4 a4 d5] [ab4 d5 f5]").every(5, x=>x.juxBy(0.7,rev)).slow(1.9).sound("pulse").gain(0.58).hpf(sine.range(55,1100).slow(4.8)).phaser(0.5).detune(rand.range(-20,30))

$: note("eb1 [bb1 d2 f2] [eb2 g2 bb2] [ab1 c2 f2]").slow(2).sound("square").gain(0.72).lpf(saw.range(35,2000).slow(5.8)).distort(0.8).pan(perlin.range(0,1).slow(6.5)).slide(0.35).fmi(1.2)

$: s("ghosts_in_the_machine*5 [evolve*5 ghosts_in_the_machine*2] [evolve*9 ~] [~ evolve*6 ghosts_in_the_machine*2], evolve*8 [ghosts_in_the_machine*6]").slow(1.9).gain(0.75).speed(perlin.range(0.65,1.75).slow(4.8)).chop(rand.range(14,26).slow(3.8)).vowel("a e o i").striate(rand.range(5,14).slow(3.8))