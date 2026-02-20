setcps(125/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [g3 bb3] [d4 f4] [ab4 bb4 d5]").every(4, x=>x.rev().transpose(perlin.range(-0.4,1).slow(5.8))).slow(2).sound("saw").gain(0.4).lpf(sine.range(120,3200).slow(3.2)).tremolo(sine.range(0.3,0.6).slow(4.8))

$: stack(
  s("bd [~ cb bd]").euclid(4,16),
  s("sn").euclid(4,16).gain(0.8),
  s("hh*3 [oh ~ rd]").euclid(11,16).gain(0.4).degradeBy(0.3),
  s("cp*2 [~ cp]").every(4, x=>x.rev()),
  s("[mt*2 ht lt]").fast(2).gain(0.45)
).gain(0.75).room(0.4).crush(rand.range(6,12)).pan(sine.range(0.3,0.7).slow(3.2)).swing(0.35)

$: n("[0 3 7] [~ 4 2] [5 9 7] [3 0 ~]").scale("G:phrygian").slow(1.8).sound("piano").gain(0.5).fmi(sine.range(0,0.6).slow(4.5)).detune(perlin.range(-20,20).slow(5.5)).room(0.3)

$: note("[g4 bb4 d5] [ab4 c5 eb5] [f4 a4 c5]").slow(3.2).sound("supersaw").gain(0.35).attack(0.9).hpf(sine.range(100,500).slow(7)).detune(perlin.range(-14,14).slow(3.8))

$: note("g1 [bb1 d2 eb2] [d2 bb1 g1]").slow(3).sound("square").gain(0.48).lpf(perlin.range(450,750).slow(4.5)).distort(0.4).ring(0.25)

$: s("~ [ghosts_in_the_machine evolve] evolve [ghosts_in_the_machine ~]").slow(7).gain(0.35).room(0.85).speed(perlin.range(0.75,1.3).slow(2.3)).chop(rand.range(12,22))