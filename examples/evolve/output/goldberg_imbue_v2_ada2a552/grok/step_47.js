setcps(148/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [bb3 d4 ab4] [eb4 g4 c5] [d4 f4 bb4]").every(4, x=>x.rev().transpose(perlin.range(-3,4).slow(3))).slow(1.4).sound("saw").gain(0.55).lpf(sine.range(100,5000).slow(4)).room(0.35)

$: stack(
  s("bd*2 [~ sn bd]").euclid(12,16).gain(0.78).swing(0.28),
  s("sn").euclid(8,16).gain(0.75).every(4, x=>x.tremolo(0.65).fast(1.5)),
  s("hh*8 [oh ~ rd cb]").euclid(13,16).gain(0.42).degradeBy(0.4),
  s("cp*8").every(4, x=>x.fast(3)),
  s("[~ mt*3 ht lt]").fast(5).gain(0.7)
).gain(0.85).room(0.8).distort(perlin.range(0.2,0.7).slow(4)).delay(0.6).pan(sine.range(0,1).slow(6))

$: n("[0 3 7] [4 7 10 ~] [2 5 9 -1] [0 4 7 ~]").scale("Eb:minor").slow(1.8).sound("triangle").gain(0.65).fmi(sine.range(0.5,2.5).slow(3.5)).ring(perlin.range(0.3,0.9).slow(4)).lpf(cosine.range(200,3000).slow(4.5))

$: note("[g4 c5 eb5] [ab4 c5 f5] [f4 a4 d5] [ab4 d5 f5]").every(5, x=>x.juxBy(0.65,rev)).slow(1.8).sound("supersaw").gain(0.6).hpf(sine.range(60,1000).slow(5)).phaser(0.45).detune(rand.range(-15,25))

$: note("eb1 [bb1 d2 f2] [eb2 g2 bb2] [ab1 c2 f2]").slow(1.9).sound("square").gain(0.7).lpf(saw.range(40,1800).slow(6)).distort(0.75).pan(perlin.range(0,1).slow(7)).slide(0.3)

$: s("ghosts_in_the_machine*4 [evolve*4 ghosts_in_the_machine] [evolve*8 ~] [~ evolve*5 ghosts_in_the_machine*3], evolve*7 [ghosts_in_the_machine*5]").slow(1.8).gain(0.78).speed(perlin.range(0.7,1.7).slow(5)).chop(rand.range(12,24).slow(3.5)).vowel("e a i o").striate(rand.range(6,12).slow(4))