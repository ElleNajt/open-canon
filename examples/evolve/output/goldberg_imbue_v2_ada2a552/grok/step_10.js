setcps(116/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [g3 bb3 d4] [f4 ab4] [bb4 d5 g5]").every(4, x=>x.rev().transpose(0.5)).slow(1.3).sound("saw").gain(0.3).lpf(sine.range(240,3100).slow(2.8)).detune(perlin.range(-18,18).slow(4.2))

$: stack(
  s("bd [~ cb bd]").euclid(4,16),
  s("sn").euclid(3,16).gain(0.7),
  s("hh*3 [oh ~ rd]").euclid(12,16).gain(0.3).degradeBy(0.25),
  s("cp [cp ~ cp]").every(4, x=>x.rev()),
  s("[mt ht*2 lt]").fast(2.1).gain(0.35)
).gain(0.6).room(0.28).pan(saw.range(0.2,0.8).slow(2.9)).swing(0.22).crush(9)

$: n("[0 3] [2 4 7] [5 3 7] [2 0 ~]").scale("G:dorian").slow(1.3).sound("piano").gain(0.45).phaser(sine.range(0.25,0.62).slow(5.2)).detune(sine.range(-14,14).slow(7))

$: note("[g4 bb4 d5] [ab4 c5 eb5 f5] [f4 a4 c5]").slow(4).sound("supersaw").gain(0.26).attack(1.2).hpf(sine.range(90,450).slow(7.2)).room(0.38)

$: note("g1 [bb1 d2] [eb2 d2 bb1 g1]").slow(2.7).sound("square").gain(0.42).lpf(580).distort(0.25).tremolo(0.42)

$: s("~ [ghosts_in_the_machine*2 evolve] ghosts_in_the_machine [evolve*3 ~]").slow(7.2).gain(0.24).room(0.82).speed(perlin.range(0.68,1.42).slow(2)).chop(rand.range(12,22)).sometimes(x=>x.rev())