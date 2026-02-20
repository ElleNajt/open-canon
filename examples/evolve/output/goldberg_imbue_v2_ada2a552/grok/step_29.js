setcps(172/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [bb3 d4 g4] [eb4 g4 c5] [d4 f4 ab5]").every(4, x=>x.rev().transpose(perlin.range(-0.5,1.5).slow(3.8))).slow(1.8).sound("saw").gain(0.52).lpf(sine.range(180,3800).slow(3.5)).detune(perlin.range(-25,55).slow(5.2))

$: stack(
  s("bd*2 [~ sn bd]").euclid(6,16).gain(0.88),
  s("sn").euclid(4,16).gain(0.92).every(6, x=>x.phaser(0.25).rev()),
  s("hh*8 [oh ~ rd hh*2]").euclid(13,16).gain(0.42).degradeBy(0.4),
  s("cp*8").every(4, x=>x.fast(1.8)),
  s("[~ mt*4 ht*2 lt]").fast(3.5).gain(0.58)
).gain(0.8).room(0.65).crush(perlin.range(3.5,11).slow(8)).delay(0.45).swing(0.25)

$: n("[0 3 7 ~] [4 7 10] [2 5 9 ~] [0 4 7]").scale("Eb:minor").slow(1.5).sound("piano").gain(0.68).fmi(sine.range(0.4,1.1).slow(4.5)).detune(perlin.range(-28,65).slow(4.8)).pan(rand.range(0.1,0.9))

$: note("[g4 c5 eb5] [ab4 c5 f5] [f4 a4 d5] [g4 bb4 eb5]").every(5, x=>x.jux(rev)).slow(2.2).sound("supersaw").gain(0.45).attack(0.55).hpf(sine.range(100,680).slow(4.8)).detune(rand.range(-28,58).slow(4.5)).room(0.35)

$: note("eb1 [bb1 d2 f2] [eb2 g2 bb2] [ab1 c2 eb2]").slow(1.9).sound("square").gain(0.62).lpf(saw.range(120,1100).slow(4.5)).distort(0.52).ring(perlin.range(0.3,0.7).slow(6)).pan(sine.range(0.25,0.75).slow(6.5))

$: s("~ ghosts_in_the_machine, evolve*3 [~ ghosts_in_the_machine], evolve*4").slow(2.5).gain(0.72).room(0.8).speed(sine.range(0.55,1.65).slow(3.8)).chop(perlin.range(10,22).slow(2.2)).pan(rand.range(0,1).slow(4.5)).every(3, x=>x.rev().speed(1.2))