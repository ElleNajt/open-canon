setcps(178/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [bb3 d4 g4] [eb4 g4 c5] [d4 f4 ab5]").every(4, x=>x.rev().transpose(perlin.range(-0.3,1.3).slow(4.2))).slow(2).sound("saw").gain(0.55).lpf(sine.range(160,3600).slow(4)).phaser(perlin.range(0.15,0.45).slow(5.5))

$: stack(
  s("bd*2 [~ sn bd]").euclid(7,16).gain(0.9),
  s("sn").euclid(5,16).gain(0.88).every(5, x=>x.phaser(0.3)),
  s("hh*8 [oh rd ~ hh*3]").euclid(12,16).gain(0.45).degradeBy(0.35),
  s("cp*8").every(4, x=>x.fast(2)),
  s("[~ mt*3 ht lt]").fast(3.8).gain(0.6)
).gain(0.82).room(0.68).crush(perlin.range(4,12).slow(7)).delay(0.48).swing(0.28)

$: n("[0 3 7] [4 7 10 ~] [2 5 9] [0 4 7 ~]").scale("Eb:minor").slow(1.4).sound("piano").gain(0.7).fmi(sine.range(0.35,1.15).slow(5)).detune(perlin.range(-32,68).slow(5.2))

$: note("[g4 c5 eb5] [ab4 c5 f5] [f4 a4 d5] [g4 bb4 eb5]").every(6, x=>x.jux(rev)).slow(2.5).sound("supersaw").gain(0.48).attack(0.58).hpf(sine.range(120,650).slow(5.2)).room(0.38)

$: note("eb1 [bb1 d2 f2] [eb2 g2 bb2] [ab1 c2 eb2]").slow(2.1).sound("square").gain(0.65).lpf(saw.range(100,1000).slow(5)).distort(0.55).ring(perlin.range(0.25,0.75).slow(6.8)).pan(sine.range(0.2,0.8).slow(7))

$: s("ghosts_in_the_machine*2, evolve*4 [~ ghosts_in_the_machine], ~ evolve*5").slow(2.8).gain(0.75).room(0.82).speed(perlin.range(0.5,1.7).slow(4.2)).chop(sine.range(12,20).slow(2.5)).pan(rand.range(0,1).slow(5)).every(4, x=>x.rev())