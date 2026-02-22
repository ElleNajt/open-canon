setcps(142/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [bb3 d4 ab4] [eb4 g4 c5] [d4 f4 bb4]").every(4, x=>x.rev().transpose(perlin.range(-2,3).slow(4))).slow(1.6).sound("saw").gain(0.52).lpf(sine.range(120,4800).slow(3.8)).detune(perlin.range(-20,30).slow(5.5))

$: stack(
  s("bd*2 [~ sn bd]").euclid(11,16).gain(0.82).swing(0.25),
  s("sn").euclid(7,16).gain(0.72).every(4, x=>x.tremolo(0.7).fast(1.4)),
  s("hh*8 [oh ~ rd cb]").euclid(14,16).gain(0.4).degradeBy(0.35),
  s("cp*8").every(4, x=>x.fast(2.8)),
  s("[~ mt*3 ht lt]").fast(4.8).gain(0.68)
).gain(0.82).room(0.85).distort(perlin.range(0.15,0.65).slow(4.5)).delay(0.55).pan(sine.range(0.05,0.95).slow(7))

$: n("[0 3 7] [4 7 10 ~] [2 5 9 -1] [0 4 7 ~]").scale("Eb:minor").slow(1.9).sound("triangle").gain(0.62).fmi(sine.range(0.4,2.4).slow(4)).ring(perlin.range(0.25,0.85).slow(3.8)).lpf(cosine.range(250,2800).slow(4))

$: note("[g4 c5 eb5] [ab4 c5 f5] [f4 a4 d5] [ab4 d5 f5]").every(6, x=>x.juxBy(0.6,rev)).slow(1.9).sound("supersaw").gain(0.58).hpf(sine.range(70,900).slow(4.8)).phaser(0.4).room(0.45)

$: note("eb1 [bb1 d2 f2] [eb2 g2 bb2] [ab1 c2 f2]").slow(2).sound("square").gain(0.68).lpf(saw.range(45,1600).slow(5.5)).distort(0.7).pan(perlin.range(0.1,0.9).slow(6.5))

$: s("ghosts_in_the_machine*4 [evolve*4 ghosts_in_the_machine] [evolve*6 ~] [~ evolve*4 ghosts_in_the_machine*2], evolve*6 [ghosts_in_the_machine*4]").slow(2).gain(0.75).speed(perlin.range(0.65,1.6).slow(4.5)).chop(rand.range(10,22).slow(4)).vowel("a e o i").phaser(rand.range(0.25,0.55).slow(3.5))