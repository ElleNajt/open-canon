setcps(148/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [g3 bb3 eb4] [eb4 g4 bb4] [d4 f4 ab4]").every(4, x=>x.rev().transpose(perlin.range(-0.2,1.1).slow(7))).slow(2).sound("saw").gain(0.5).lpf(sine.range(100,3600).slow(4.2)).tremolo(sine.range(0.3,0.7).slow(5.5)).room(0.35)

$: stack(
  s("bd [~ sn bd]").euclid(3,16),
  s("sn").euclid(5,16).gain(0.88),
  s("hh*4 [oh ~ rd ~]").euclid(11,16).gain(0.4).degradeBy(0.35),
  s("cp*3 ~").every(4, x=>x.rev().fast(1.5)),
  s("[mt ht lt]").fast(2.5).gain(0.48)
).gain(0.8).room(0.45).shape(rand.range(0.25,0.4)).delay(0.28).dt(0.25).swing(0.38)

$: n("[0 3 7 ~] [4 2 7 9] [5 9 ~ 7] [3 0 5 2]").scale("G:phrygian").slow(1.6).sound("piano").gain(0.6).fmi(sine.range(0.25,0.75).slow(4.8)).detune(perlin.range(-28,32).slow(7)).room(0.42)

$: note("[g4 bb4 d5] [ab4 c5 eb5] [f4 a4 c5 eb5] [g4 bb4 d5]").slow(2.8).sound("supersaw").gain(0.44).attack(0.85).hpf(sine.range(140,520).slow(7)).detune(perlin.range(-18,26).slow(4.5)).phaser(sine.range(0.2,0.6).slow(6))

$: note("g1 [bb1 d2 eb2] [d2 f2 ab2] [bb1 g1 d2]").slow(2.4).sound("square").gain(0.52).lpf(perlin.range(450,900).slow(5)).distort(0.42).ring(perlin.range(0.3,0.45).slow(4.5)).slide(sine.range(0.02,0.12).slow(8))

$: s("~ ghosts_in_the_machine [evolve ~] ghosts_in_the_machine").slow(5.8).gain(0.48).room(0.8).speed(perlin.range(0.75,1.4).slow(3.2)).chop(rand.range(16,32)).pan(sine.range(0.15,0.95).slow(5.8)).crush(rand.range(8,16))