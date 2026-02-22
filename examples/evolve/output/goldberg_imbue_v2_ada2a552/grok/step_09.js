setcps(112/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("g3 [bb3 d4 eb4] [f4 ab4] [g4 bb4 d5] [eb5 d5 c5]").every(4, x=>x.rev().transpose(0.25)).slow(1.4).sound("pulse").gain(0.32).lpf(sine.range(280,2900).slow(3.2)).room(0.32)

$: stack(
  s("bd [cb bd]").euclid(3,16),
  s("sn").euclid(2,16).gain(0.65),
  s("hh*2 [oh rd]?").euclid(11,16).gain(0.28).degradeBy(0.38),
  s("cp ~ [cp cp]").every(4, x=>x.rev()),
  s("[mt*2 ht lt]").fast(1.9).gain(0.32)
).gain(0.56).room(0.26).pan(saw.range(0.15,0.85).slow(3.2)).swing(0.185)

$: n("0 [2 4 7] [3 5] [7 5 3] ~ [0 3 7 2]").scale("G:minor").slow(1.4).sound("piano").gain(0.41).phaser(sine.range(0.22,0.58).slow(4.5)).detune(sine.range(-16,16).slow(6.8))

$: note("[g4 bb4 d5] [ab4 c5 eb5] [f4 a4 c5]").slow(4.4).sound("supersaw").gain(0.25).attack(1.7).hpf(sine.range(80,420).slow(6.8)).room(0.42)

$: note("g1 [bb1 d2 eb1] [d1 bb1 g1]").slow(2.5).sound("square").gain(0.38).lpf(620).distort(0.22).tremolo(0.38)

$: s("~ ghosts_in_the_machine*2 [evolve ghosts_in_the_machine] [evolve*2 ~]").slow(7.8).gain(0.21).room(0.8).speed(perlin.range(0.7,1.38)).chop(rand.range(14,20)).sometimesBy(0.22, x=>x.rev())