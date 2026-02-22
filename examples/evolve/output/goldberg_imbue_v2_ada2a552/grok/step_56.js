setcps(182/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [bb3 d4 ab4] [eb4 g4 c5] [d4 f4 bb4]").every(10, x=>x.rev().transpose(perlin.range(-7,11).slow(4))).slow(1.2).sound("supersaw").gain(0.7).lpf(sine.range(90,5000).slow(4.2)).room(0.55).pan(rand.range(0,1).slow(6))

$: stack(
  s("bd*2 [~ sn bd]").euclid(11,16).gain(0.85).swing(0.55),
  s("sn").euclid(9,16).gain(0.72).every(6, x=>x.tremolo(0.75).fast(2)),
  s("hh*8 [oh ~ rd cb]").euclid(14,16).gain(0.45).degradeBy(0.42),
  s("cp*8").every(3, x=>x.fast(3.5)),
  s("[~ mt*4 ht lt]").fast(5).gain(0.68)
).gain(0.85).room(0.72).crush(perlin.range(5,13).slow(5.2)).delay(0.52).phaser(sine.range(0.2,0.7).slow(8))

$: n("[0 3 7] [4 7 10 ~] [2 5 9 -1] [0 4 7 ~]").scale("Eb:minor").slow(1.6).sound("saw").gain(0.7).fmi(sine.range(0.5,4).slow(5.2)).lpf(cosine.range(120,3800).slow(5.5)).room(0.35)

$: note("[g4 c5 eb5] [ab4 c5 f5] [f4 a4 d5] [ab4 d5 f5]").every(7, x=>x.juxBy(0.4, rev)).slow(1.4).sound("pulse").gain(0.65).hpf(cosine.range(80,1100).slow(5.2)).room(0.48).detune(perlin.range(-25,20).slow(9))

$: note("eb1 [bb1 d2 f2] [eb2 g2 bb2] [ab1 c2 f2]").slow(1.4).sound("square").gain(0.73).hpf(68).lpf(saw.range(55,2400).slow(8)).distort(0.65).leslie(sine.range(0.25,0.95).slow(7))

$: s("~ [ghosts_in_the_machine evolve*5] [evolve*3 ghosts_in_the_machine ~] evolve*2").slow(1.2).gain(0.82).speed(perlin.range(0.68,1.48).slow(7)).chop(rand.range(10,26).slow(4.8)).vowel("a e i o u").room(0.65)