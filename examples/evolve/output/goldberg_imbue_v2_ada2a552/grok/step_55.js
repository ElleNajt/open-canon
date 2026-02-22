setcps(182/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [bb3 d4 ab4] [eb4 g4 c5] [d4 f4 bb4]").every(12, x=>x.rev().transpose(perlin.range(-5,9).slow(3))).slow(1.4).sound("supersaw").gain(0.68).lpf(sine.range(110,4800).slow(3.8)).room(0.52).pan(rand.range(0,1).slow(5.2))

$: stack(
  s("bd*2 [~ sn bd]").euclid(13,16).gain(0.88).swing(0.52),
  s("sn").euclid(10,16).gain(0.75).every(5, x=>x.tremolo(0.8).fast(1.8)),
  s("hh*8 [oh ~ rd cb]").euclid(15,16).gain(0.42).degradeBy(0.38),
  s("cp*8").every(4, x=>x.fast(3.2)),
  s("[~ mt*4 ht lt]").fast(4.8).gain(0.7)
).gain(0.88).room(0.75).crush(perlin.range(6,12).slow(4.8)).delay(0.55).phaser(sine.range(0.25,0.65).slow(7))

$: n("[0 3 7] [4 7 10 ~] [2 5 9 -1] [0 4 7 ~]").scale("Eb:minor").slow(1.8).sound("saw").gain(0.72).fmi(sine.range(0.6,3.8).slow(4.8)).lpf(cosine.range(140,3600).slow(5)).room(0.32)

$: note("[g4 c5 eb5] [ab4 c5 f5] [f4 a4 d5] [ab4 d5 f5]").every(6, x=>x.juxBy(0.45, rev)).slow(1.6).sound("pulse").gain(0.62).hpf(cosine.range(90,1200).slow(4.8)).room(0.46).detune(perlin.range(-22,18).slow(8))

$: note("eb1 [bb1 d2 f2] [eb2 g2 bb2] [ab1 c2 f2]").slow(1.6).sound("square").gain(0.76).hpf(72).lpf(saw.range(60,2200).slow(7)).distort(0.7).leslie(sine.range(0.3,0.9).slow(6))

$: s("~ [ghosts_in_the_machine evolve*4] evolve*4 [ghosts_in_the_machine*2 evolve ~]").slow(1.3).gain(0.85).speed(perlin.range(0.72,1.42).slow(6)).chop(rand.range(12,24).slow(4.2)).vowel("e i a o u").room(0.6)