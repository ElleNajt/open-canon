setcps(182/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [bb3 d4 ab4] [eb4 g4 c5] [d4 f4 bb4]").every(4, x=>x.rev().transpose(perlin.range(-5,9).slow(3))).slow(1.4).sound("supersaw").gain(0.6).lpf(sine.range(80,4800).slow(4.2)).room(0.45).pan(perlin.range(0,1).slow(5.2))

$: stack(
  s("bd*2 [~ sn bd]").euclid(11,16).gain(0.82).swing(0.45),
  s("sn").euclid(10,16).gain(0.7).every(4, x=>x.tremolo(0.8).fast(1.5)),
  s("hh*8 [oh ~ rd cb]").euclid(13,16).gain(0.38).degradeBy(0.48),
  s("cp*8").every(3, x=>x.fast(3.2)),
  s("[~ mt*4 ht lt]").fast(4.8).gain(0.7)
).gain(0.88).room(0.68).crush(perlin.range(6,14).slow(3.8)).delay(0.48).phaser(sine.range(0.25,0.65).slow(5.5))

$: n("[0 3 7] [4 7 10 ~] [2 5 9 -1] [0 4 7 ~]").scale("Eb:minor").slow(2).sound("saw").gain(0.68).fmi(sine.range(0.6,3.5).slow(3.8)).lpf(cosine.range(140,3600).slow(4.2)).pan(cosine.range(0.3,0.8).slow(4.5)).detune(perlin.range(-8,8))

$: note("[g4 c5 eb5] [ab4 c5 f5] [f4 a4 d5] [ab4 d5 f5]").every(4, x=>x.juxBy(0.5, rev)).slow(1.6).sound("pulse").gain(0.55).hpf(cosine.range(85,1100).slow(4.8)).room(0.38)

$: note("eb1 [bb1 d2 f2] [eb2 g2 bb2] [ab1 c2 f2]").slow(1.65).sound("square").gain(0.7).hpf(65).lpf(saw.range(45,1900).slow(5.8)).distort(0.68).pan(0.35)

$: s("~ [ghosts_in_the_machine evolve*3] evolve*4 [~ ghosts_in_the_machine*2 evolve] [evolve*5 ~ ghosts_in_the_machine]").slow(1.5).gain(0.78).speed(perlin.range(0.72,1.45).slow(4.8)).chop(rand.range(10,22).slow(4)).vowel("e a o i u")