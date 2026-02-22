setcps(168/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [bb3 d4 ab4] [eb4 g4 c5] [d4 f4 bb4]").every(4, x=>x.rev().transpose(perlin.range(-5,5).slow(3))).slow(1.4).sound("supersaw").gain(0.6).lpf(sine.range(80,5500).slow(4.8)).room(0.5)

$: stack(
  s("bd*2 [~ sn bd]").euclid(12,16).gain(0.85).swing(0.35),
  s("sn").euclid(8,16).gain(0.75).every(3, x=>x.tremolo(0.75).fast(1.7)),
  s("hh*8 [oh ~ rd cb]").euclid(13,16).gain(0.42).degradeBy(0.5),
  s("cp*8").every(4, x=>x.fast(3)),
  s("[~ mt*4 ht lt]").fast(5).gain(0.7)
).gain(0.9).room(0.8).crush(perlin.range(5,15).slow(4)).delay(0.6).pan(sine.range(0,1).slow(6))

$: n("[0 3 7] [4 7 10 ~] [2 5 9 -1] [0 4 7 ~]").scale("Eb:minor").slow(2).sound("saw").gain(0.65).fmi(sine.range(0.5,3).slow(4)).ring(perlin.range(0.3,1).slow(4)).lpf(cosine.range(150,3500).slow(4.5))

$: note("[g4 c5 eb5] [ab4 c5 f5] [f4 a4 d5] [ab4 d5 f5]").every(5, x=>x.jux(rev)).slow(1.8).sound("pulse").gain(0.6).hpf(sine.range(60,1200).slow(5)).phaser(0.7).detune(rand.range(-25,35))

$: note("eb1 [bb1 d2 f2] [eb2 g2 bb2] [ab1 c2 f2]").slow(1.9).sound("square").gain(0.75).lpf(saw.range(35,2000).slow(6.5)).distort(0.8).leslie(0.5)

$: s("ghosts_in_the_machine*3, evolve*5 [ghosts_in_the_machine evolve*3] [~ evolve*8] evolve*4").slow(1.7).gain(0.8).speed(perlin.range(0.65,1.7).slow(5.5)).chop(rand.range(12,28).slow(4.5)).vowel("a e o i u")