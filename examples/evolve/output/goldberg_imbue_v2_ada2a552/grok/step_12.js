setcps(115/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [g3 bb3] [d4 f4] [ab4 bb4 d5]").every(4, x=>x.rev().transpose(perlin.range(-0.5,1.5).slow(6.4))).slow(1.5).sound("saw").gain(0.35).lpf(sine.range(180,2800).slow(2.9)).room(0.28)

$: stack(
  s("bd ~ [cb bd]").euclid(3,16),
  s("sn").euclid(4,16).gain(0.75),
  s("hh*4 [oh rd ~]").euclid(11,16).gain(0.35).degradeBy(0.25),
  s("cp*2 [~ cp]").every(4, x=>x.rev()),
  s("[mt*2 ht lt]").fast(2).gain(0.4)
).gain(0.68).room(0.35).pan(saw.range(0.2,0.8).slow(2.8)).swing(0.28).crush(7)

$: n("[0 3 7] [~ 4 2] [5 9 7] [3 0 ~]").scale("G:phrygian").slow(1.5).sound("piano").gain(0.45).phaser(sine.range(0.25,0.7).slow(5.2)).detune(perlin.range(-20,20).slow(5.8))

$: note("[g4 bb4 d5] [ab4 c5 eb5] [f4 a4 c5]").slow(3.2).sound("supersaw").gain(0.3).attack(0.9).hpf(sine.range(90,400).slow(7.1)).pan(sine.range(0.4,0.8).slow(4))

$: note("g1 [bb1 d2 eb2] [d2 bb1 g1]").slow(2.8).sound("square").gain(0.44).lpf(580).distort(0.35).delay(0.22)

$: s("~ ghosts_in_the_machine [evolve*2,ghosts_in_the_machine] [~ evolve]").slow(7.2).gain(0.28).room(0.85).speed(perlin.range(0.68,1.4).slow(1.9)).chop(rand.range(12,22)).sometimes(x=>x.rev())