setcps(120/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [g3 bb3] [d4 f4] [ab4 bb4 d5]").every(4, x=>x.rev().transpose(perlin.range(0,1).slow(8))).slow(1.4).sound("saw").gain(0.32).lpf(sine.range(220,3000).slow(3.2)).room(0.22)

$: stack(
  s("bd ~ [cb bd]").euclid(3,16),
  s("sn").euclid(4,16).gain(0.72),
  s("hh*4 [oh rd ~]").euclid(13,16).gain(0.32).degradeBy(0.3),
  s("cp*2 [~ cp]").every(4, x=>x.rev()),
  s("[mt*2 ht lt]").fast(2).gain(0.38)
).gain(0.65).room(0.32).pan(saw.range(0.15,0.85).slow(3.1)).swing(0.26).crush(8)

$: n("[0 3 7] [~ 4 2] [5 9 7] [3 0 ~]").scale("G:dorian").slow(1.4).sound("piano").gain(0.42).phaser(sine.range(0.3,0.65).slow(4.8)).detune(perlin.range(-16,16).slow(6.2))

$: note("[g4 bb4 d5] [ab4 c5 eb5] [f4 a4 c5]").slow(3.7).sound("supersaw").gain(0.27).attack(1).hpf(sine.range(110,420).slow(6.5)).pan(0.6)

$: note("g1 [bb1 d2 eb2] [d2 bb1 g1]").slow(2.6).sound("square").gain(0.41).lpf(620).distort(0.3).fm(0.28)

$: s("~ ghosts_in_the_machine [evolve*2] [ghosts_in_the_machine ~] evolve").slow(6.9).gain(0.25).room(0.8).speed(perlin.range(0.72,1.35).slow(2.1)).chop(rand.range(14,20))