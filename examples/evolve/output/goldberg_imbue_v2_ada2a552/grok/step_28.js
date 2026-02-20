setcps(168/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [bb3 d4 g4] [eb4 g4 c5] [d4 f4 ab5]").every(4, x=>x.rev().transpose(perlin.range(-0.5,1.2).slow(4.2))).slow(2).sound("saw").gain(0.55).lpf(saw.range(200,4000).slow(4)).detune(perlin.range(-20,50).slow(6)).pan(sine.range(0.2,0.8).slow(7.8))

$: stack(
  s("bd*2 [~ sn bd]").euclid(5,16),
  s("sn").euclid(5,16).gain(0.95).every(7, x=>x.phaser(0.3)),
  s("hh*8 [oh ~ rd hh*2]").euclid(12,16).gain(0.45).degradeBy(0.35),
  s("cp*8").every(3, x=>x.rev().fast(2)),
  s("[~ mt*4 ht*2 lt]").fast(4).gain(0.6)
).gain(0.82).room(0.6).crush(perlin.range(4,12).slow(9)).delay(0.48).swing(0.22)

$: n("[0 3 7 ~] [4 7 10] [2 5 9 ~] [0 4 7]").scale("Eb:minor").slow(1.4).sound("piano").gain(0.7).fmi(sine.range(0.3,1).slow(5)).detune(perlin.range(-30,60).slow(5.5)).pan(rand.range(0,1))

$: note("[g4 c5 eb5] [ab4 c5 f5] [f4 a4 d5] [g4 bb4 eb5]").every(6, x=>x.jux(rev)).slow(2.5).sound("supersaw").gain(0.48).attack(0.6).hpf(sine.range(120,720).slow(5.2)).detune(rand.range(-30,55).slow(5)).tremolo(sine.range(0.2,0.6).slow(4))

$: note("eb1 [bb1 d2 f2] [eb2 g2 bb2] [ab1 c2 eb2]").slow(2).sound("square").gain(0.65).lpf(saw.range(150,1200).slow(5)).distort(0.55).ring(0.5).pan(sine.range(0.2,0.8).slow(7))

$: s("ghosts_in_the_machine ~, evolve*4, ~ ghosts_in_the_machine, evolve*2").slow(2.8).gain(0.75).room(0.75).speed(sine.range(0.6,1.6).slow(4)).chop(perlin.range(8,24).slow(2.5)).pan(rand.range(0,1).slow(5)).every(4, x=>x.rev().speed(1.3))