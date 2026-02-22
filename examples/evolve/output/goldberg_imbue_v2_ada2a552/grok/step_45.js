setcps(138/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [bb3 d4 ab4] [eb4 g4 c5] [d4 f4 bb5]").every(4, x=>x.rev().transpose(perlin.range(-1,2).slow(3))).slow(1.8).sound("saw").gain(0.55).lpf(sine.range(150,4500).slow(4.2)).room(0.5).detune(perlin.range(-15,25).slow(6))

$: stack(
  s("bd*2 [~ sn bd]").euclid(10,16).gain(0.8).swing(0.2),
  s("sn").euclid(6,16).gain(0.7).every(4, x=>x.tremolo(0.65).fast(1.6)),
  s("hh*8 [oh ~ rd cb]").euclid(13,16).gain(0.38).degradeBy(0.4),
  s("cp*8").every(4, x=>x.fast(3)),
  s("[~ mt*3 ht lt]").fast(5).gain(0.7)
).gain(0.8).room(0.8).distort(perlin.range(0.1,0.6).slow(5)).delay(0.5).pan(sine.range(0.1,0.9).slow(6.5))

$: n("[0 3 7] [4 7 10 ~] [2 5 9 -1] [0 4 7 ~]").scale("Eb:minor").slow(2).sound("triangle").gain(0.6).fmi(sine.range(0.3,2.2).slow(4.5)).ring(perlin.range(0.2,0.8).slow(4)).lpf(cosine.range(300,2500).slow(3.5))

$: note("[g4 c5 eb5] [ab4 c5 f5] [f4 a4 d5] [ab4 d5 f5]").every(6, x=>x.juxBy(0.5,rev)).slow(2).sound("supersaw").gain(0.6).hpf(sine.range(80,800).slow(5)).phaser(0.35).room(0.4)

$: note("eb1 [bb1 d2 f2] [eb2 g2 bb2] [ab1 c2 f2]").slow(2.2).sound("square").gain(0.65).lpf(saw.range(50,1400).slow(6)).distort(0.65).pan(perlin.range(0,1).slow(7)).slide(perlin.range(0,0.4).slow(8))

$: s("ghosts_in_the_machine*4 [evolve*4 ghosts_in_the_machine] [evolve*5 ~] [~ evolve*3 ghosts_in_the_machine*2], evolve*5 ghosts_in_the_machine*3").slow(2.2).gain(0.8).speed(perlin.range(0.7,1.5).slow(5)).chop(rand.range(8,20).slow(3.8)).vowel("a e o i u").phaser(rand.range(0.2,0.5).slow(4))