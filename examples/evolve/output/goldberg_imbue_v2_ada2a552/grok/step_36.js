setcps(194/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [bb3 d4 g4] [eb4 g4 c5] [d4 f4 ab5]").every(4, x=>x.rev().transpose(perlin.range(-0.3,1.4).slow(4.2))).slow(1.9).sound("saw").gain(0.6).lpf(sine.range(120,4000).slow(4.2)).leslie(perlin.range(0.2,0.6).slow(5.2))

$: stack(
  s("bd*2 [~ sn bd]").euclid(7,16).gain(0.88),
  s("sn").euclid(6,16).gain(0.8).every(8, x=>x.tremolo(0.5)),
  s("hh*8 [oh ~ rd*2 cb]").euclid(12,16).gain(0.45).degradeBy(0.35),
  s("cp*8").every(4, x=>x.fast(2)),
  s("[~ mt*3 ht lt]").fast(4.1).gain(0.62)
).gain(0.85).room(0.75).crush(perlin.range(3,12).slow(6.2)).delay(0.5).leslie(0.42)

$: n("[0 3 7] [4 7 10 ~] [2 5 9] [0 4 7 ~]").scale("Eb:minor").slow(1.85).sound("triangle").gain(0.72).fmi(sine.range(0.4,1.4).slow(4.2)).ring(perlin.range(0.3,0.7).slow(3.8))

$: note("[g4 c5 eb5] [ab4 c5 f5] [f4 a4 d5] [g4 bb4 eb5]").every(6, x=>x.juxBy(0.45,rev)).slow(2.1).sound("supersaw").gain(0.55).hpf(sine.range(100,650).slow(5.1)).tremolo(perlin.range(0.25,0.55).slow(4.8))

$: note("eb1 [bb1 d2 f2] [eb2 g2 bb2] [ab1 c2 eb2]").slow(2.2).sound("square").gain(0.65).lpf(saw.range(80,1000).slow(5.4)).distort(0.55).pan(sine.range(0.25,0.75).slow(6.1))

$: s("ghosts_in_the_machine*2 [evolve*2 ~ ghosts_in_the_machine], ~ [evolve*4 ghosts_in_the_machine], [ghosts_in_the_machine*2 evolve ~]").every(8, rev).slow(2.8).gain(0.8).room(0.8).speed(perlin.range(0.7,1.5).slow(4.8)).chop(perlin.range(3,7).slow(6))