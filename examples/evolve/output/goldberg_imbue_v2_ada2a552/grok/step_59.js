setcps(192/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [bb3 d4 ab4] [eb4 g4 c5] [d4 f4 bb4]").every(11, x=>x.rev().transpose(perlin.range(-5,17).slow(3.7))).slow(1.3).sound("supersaw").gain(0.7).lpf(sine.range(80,6000).slow(5.2)).room(perlin.range(0.35,0.75)).detune(sine.range(-20,20).slow(7.8))

$: stack(
  s("bd*2 [~ sn bd]").euclid(11,16).gain(0.88).swing(0.6),
  s("sn").euclid(7,16).gain(0.75).every(5, x=>x.tremolo(0.8).fast(2.7)),
  s("hh*8 [oh ~ rd cb]").euclid(13,16).gain(0.48).degradeBy(0.38),
  s("cp*8").every(4, x=>x.fast(3.2)),
  s("[~ mt*4 ht lt]").fast(4.8).gain(0.7)
).gain(0.87).room(0.75).crush(perlin.range(4,14).slow(4.8)).delay(0.55).phaser(sine.range(0.2,1.2).slow(6))

$: n("[0 3 [7 12]] [4 7 10 ~] [2 5 9 -1] [0 4 [7 12] ~]").scale("Eb:minor").slow(1.3).sound("saw").gain(0.7).fmi(sine.range(0.6,4.8).slow(5.8)).lpf(cosine.range(100,4200).slow(7)).pan(perlin.range(0,1).slow(4.2))

$: note("[g4 c5 eb5] [ab4 c5 f5] [f4 a4 d5] [ab4 d5 f5]").every(9, x=>x.juxBy(0.38, rev)).slow(1.3).sound("pulse").gain(0.68).hpf(cosine.range(75,1400).slow(5.8)).room(0.52).detune(perlin.range(-22,25).slow(8.5)).phaser(0.65)

$: note("eb1 [bb1 d2 f2] [eb2 g2 bb2] [ab1 c2 f2]").slow(1.3).sound("square").gain(0.75).hpf(perlin.range(50,120).slow(6.8)).lpf(saw.range(65,2600).slow(7.8)).distort(0.65).ring(sine.range(0.3,0.9).slow(6.2))

$: s("[evolve*2 ghosts_in_the_machine evolve ~] [~ ghosts_in_the_machine*3] [evolve*5 ~ ghosts_in_the_machine]").slow(1.3).gain(0.85).speed(perlin.range(0.65,1.7).slow(6.5)).chop(rand.range(8,28).slow(4.8)).vowel("a e i o u".slow(7.8)).degradeBy(0.28)