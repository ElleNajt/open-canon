setcps(178/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [bb3 d4 ab4] [eb4 g4 c5] [d4 f4 bb4]").every(4, x=>x.rev().transpose(perlin.range(-6,8).slow(2.8))).slow(1.4).sound("supersaw").gain(0.6).lpf(sine.range(100,5000).slow(4.5))

$: stack(
  s("bd*2 [~ sn bd]").euclid(11,16).gain(0.85).swing(0.42),
  s("sn").euclid(10,16).gain(0.72).every(4, x=>x.tremolo(0.75).fast(1.6)),
  s("hh*8 [oh ~ rd cb]").euclid(13,16).gain(0.4).degradeBy(0.52),
  s("cp*8").every(3, x=>x.fast(3)),
  s("[~ mt*4 ht lt]").fast(5).gain(0.68)
).gain(0.9).room(0.7).crush(perlin.range(7,13).slow(4.2)).delay(0.5).pan(sine.range(0,1).slow(6))

$: n("[0 3 7] [4 7 10 ~] [2 5 9 -1] [0 4 7 ~]").scale("Eb:minor").slow(2).sound("saw").gain(0.65).fmi(sine.range(0.7,3).slow(4)).lpf(cosine.range(150,3500).slow(4.5))

$: note("[g4 c5 eb5] [ab4 c5 f5] [f4 a4 d5] [ab4 d5 f5]").every(4, x=>x.juxBy(0.5, rev)).slow(1.6).sound("pulse").gain(0.52).hpf(sine.range(75,1050).slow(4.5))

$: note("eb1 [bb1 d2 f2] [eb2 g2 bb2] [ab1 c2 f2]").slow(1.7).sound("square").gain(0.72).lpf(saw.range(50,2000).slow(5.5)).distort(0.7)

$: s("~ ghosts_in_the_machine evolve*4 [ghosts_in_the_machine evolve*2] [evolve*6 ghosts_in_the_machine] evolve*3").slow(1.5).gain(0.8).speed(perlin.range(0.75,1.5).slow(4.5)).chop(rand.range(12,24).slow(3.5)).vowel("a e i o u")