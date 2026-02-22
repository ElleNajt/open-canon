setcps(200/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [bb3 d4 ab4] [eb4 g4 c5] [d4 f4 bb4]").every(13, x=>x.rev().transpose(perlin.range(-7,19).slow(4.2))).slow(1.1).sound("supersaw").gain(0.72).lpf(sine.range(90,5800).slow(4.8)).room(perlin.range(0.4,0.8)).tremolo(0.45)

$: stack(
  s("bd*2 [~ sn bd]").euclid(13,16).gain(0.9).swing(perlin.range(0.55,0.7)),
  s("sn").euclid(9,16).gain(0.78).every(7, x=>x.tremolo(0.85).fast(3.1)),
  s("hh*8 [oh ~ rd cb]").euclid(11,16).gain(0.5).degradeBy(0.42),
  s("cp*8").every(5, x=>x.fast(3.7)),
  s("[~ mt*4 ht lt]").fast(5.2).gain(0.72)
).gain(0.88).room(0.78).crush(perlin.range(3,15).slow(5.2)).delay(0.6).leslie(sine.range(0.7,1.8).slow(7.2))

$: n("[0 3 [7 12]] [4 7 10 ~] [2 5 9 -1] [0 4 [7 12] ~]").scale("Eb:minor").slow(1.1).sound("saw").gain(0.72).fmi(sine.range(0.7,5.2).slow(6.2)).lpf(cosine.range(120,4000).slow(7.5)).pan(perlin.range(0,1).slow(4.7))

$: note("[g4 c5 eb5] [ab4 c5 f5] [f4 a4 d5] [ab4 d5 f5]").every(11, x=>x.juxBy(0.42, rev)).slow(1.1).sound("pulse").gain(0.7).hpf(cosine.range(85,1300).slow(6.2)).room(0.55).detune(perlin.range(-25,28).slow(9.2))

$: note("eb1 [bb1 d2 f2] [eb2 g2 bb2] [ab1 c2 f2]").slow(1.1).sound("square").gain(0.78).hpf(perlin.range(60,135).slow(7.2)).lpf(saw.range(75,2400).slow(8.2)).distort(0.7).ring(sine.range(0.35,1).slow(7))

$: s("[evolve*3 ghosts_in_the_machine ~ evolve] [ghosts_in_the_machine*4 ~] [~ evolve*6 ghosts_in_the_machine]").slow(1.1).gain(0.88).speed(perlin.range(0.7,1.6).slow(7)).chop(rand.range(12,24).slow(5.2)).vowel("a e i o u".slow(8.2)).leslie(perlin.range(0.6,1.9).slow(5.8))