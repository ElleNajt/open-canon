setcps(200/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [bb3 d4 g4] [eb4 g4 c5] [d4 f4 ab5]").every(4, x=>x.rev().transpose(perlin.range(-0.4,0.9).slow(3))).slow(1.7).sound("saw").gain(0.55).lpf(sine.range(120,3800).slow(3.5)).detune(sine.range(-25,25).slow(6))

$: stack(
  s("bd*2 [~ sn bd]").euclid(8,16).gain(0.85),
  s("sn").euclid(6,16).gain(0.8).every(5, x=>x.tremolo(0.5).fast(1.2)),
  s("hh*8 [oh ~ rd cb]").euclid(13,16).gain(0.5).degradeBy(0.3),
  s("cp*8").every(3, x=>x.fast(2.2)),
  s("[~ mt*2 ht lt]").fast(3.8).gain(0.7)
).gain(0.75).room(0.75).shape(perlin.range(0.1,0.9).slow(5)).delay(0.45).pan(sine.range(0.3,0.7).slow(8))

$: n("[0 3 7] [4 7 10 ~] [2 5 9] [0 4 7 ~]").scale("Eb:minor").slow(1.6).sound("triangle").gain(0.7).fmi(sine.range(0.3,1.6).slow(3.8)).ring(perlin.range(0.2,0.8).slow(4.5)).pan(0.3)

$: note("[g4 c5 eb5] [ab4 c5 f5] [f4 a4 d5] [g4 bb4 eb5]").every(6, x=>x.juxBy(0.4,rev)).slow(2).sound("supersaw").gain(0.65).hpf(sine.range(80,700).slow(5)).phaser(perlin.range(0.2,0.6).slow(4.2))

$: note("eb1 [bb1 d2 f2] [eb2 g2 bb2] [ab1 c2 eb2]").slow(2.2).sound("square").gain(0.75).lpf(saw.range(50,1200).slow(5.5)).distort(0.6).crush(perlin.range(3,14).slow(5.8))

$: s("~ [ghosts_in_the_machine*3 evolve*2] [evolve*4 ~] ghosts_in_the_machine*2 [evolve ~ evolve], [ghosts_in_the_machine evolve*4]").slow(2.8).gain(0.8).speed(perlin.range(0.75,1.4).slow(4.8)).chop(perlin.range(4,12).slow(5.5)).vowel("a e i o u")