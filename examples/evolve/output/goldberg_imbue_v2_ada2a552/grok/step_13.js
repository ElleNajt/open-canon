setcps(122/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [g3 bb3] [d4 f4] [ab4 bb4 d5]").every(4, x=>x.rev().transpose(perlin.range(-0.25,1.25).slow(5.6))).slow(1.6).sound("saw").gain(0.38).lpf(sine.range(160,3000).slow(3.1)).detune(sine.range(-18,18).slow(4.2))

$: stack(
  s("bd ~ [cb bd]").euclid(3,16),
  s("sn").euclid(4,16).gain(0.75),
  s("hh*3 [oh ~ rd]").euclid(11,16).gain(0.35).degradeBy(0.25),
  s("cp*2 [~ cp]").every(4, x=>x.rev()),
  s("[mt*2 ht lt]").fast(2).gain(0.4)
).gain(0.72).room(0.38).pan(sine.range(0.25,0.75).slow(3)).swing(0.32).phaser(sine.range(0.2,0.6).slow(4))

$: n("[0 3 7] [~ 4 2] [5 9 7] [3 0 ~]").scale("G:phrygian").slow(1.6).sound("piano").gain(0.48).phaser(sine.range(0.3,0.8).slow(4.8)).detune(perlin.range(-25,25).slow(6)).room(0.25)

$: note("[g4 bb4 d5] [ab4 c5 eb5] [f4 a4 c5]").slow(3.4).sound("supersaw").gain(0.32).attack(0.85).hpf(sine.range(80,450).slow(6.9)).detune(perlin.range(-12,12).slow(3.5))

$: note("g1 [bb1 d2 eb2] [d2 bb1 g1]").slow(2.9).sound("square").gain(0.46).lpf(perlin.range(500,700).slow(4.2)).distort(0.38).delay(0.25)

$: s("~ [ghosts_in_the_machine evolve] evolve [ghosts_in_the_machine ~]").slow(6.8).gain(0.32).room(0.88).speed(perlin.range(0.72,1.36).slow(2.1)).chop(rand.range(14,20)).vowel("a e o i u".slow(2.4))