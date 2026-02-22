setcps(184/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [bb3 d4 ab4] [eb4 g4 c5] [d4 f4 bb4]").every(11, x=>x.rev().transpose(perlin.range(-5,13).slow(3.8))).slow(1.3).sound("supersaw").gain(0.68).lpf(sine.range(110,5200).slow(4.5)).room(0.58).pan(rand.range(0,1).slow(5.5))

$: stack(
  s("bd*2 [~ sn bd]").euclid(12,16).gain(0.88).swing(0.52),
  s("sn").euclid(10,16).gain(0.75).every(5, x=>x.tremolo(0.8).fast(2.2)),
  s("hh*8 [oh ~ rd cb]").euclid(13,16).gain(0.48).degradeBy(0.38),
  s("cp*8").every(4, x=>x.fast(3.2)),
  s("[~ mt*4 ht lt]").fast(4.8).gain(0.7)
).gain(0.87).room(0.75).crush(perlin.range(6,12).slow(4.9)).delay(0.55).phaser(sine.range(0.25,0.75).slow(7.5))

$: n("[0 3 7] [4 7 10 ~] [2 5 9 -1] [0 4 7 ~]").scale("Eb:minor").slow(1.5).sound("saw").gain(0.72).fmi(sine.range(0.6,4.2).slow(5.5)).lpf(cosine.range(130,3900).slow(5.8)).room(0.42)

$: note("[g4 c5 eb5] [ab4 c5 f5] [f4 a4 d5] [ab4 d5 f5]").every(8, x=>x.juxBy(0.45, rev)).slow(1.5).sound("pulse").gain(0.68).hpf(cosine.range(90,1200).slow(5.5)).room(0.52).detune(perlin.range(-22,25).slow(8.5))

$: note("eb1 [bb1 d2 f2] [eb2 g2 bb2] [ab1 c2 f2]").slow(1.5).sound("square").gain(0.75).hpf(72).lpf(saw.range(65,2500).slow(7.5)).distort(0.68).leslie(sine.range(0.3,1).slow(6.8))

$: s("~ [ghosts_in_the_machine evolve*4] [evolve*4 ghosts_in_the_machine ~] evolve*3").slow(1.3).gain(0.85).speed(perlin.range(0.72,1.52).slow(6.5)).chop(rand.range(12,24).slow(4.5)).vowel("e i o a u").room(0.68)