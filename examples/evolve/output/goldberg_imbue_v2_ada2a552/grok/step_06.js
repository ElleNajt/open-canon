setcps(94/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("g3 [bb3 c4] [d4 eb4] [f4 eb4] [d4 c4] [bb3 g3]").palindrome().slow(1.7).sound("triangle").gain(0.3).lpf(sine.range(260,2500).slow(3.2))

$: stack(
  s("bd").euclid(3,16),
  s("sn").euclid(3,16).gain(0.62),
  s("hh*2").euclid(11,16).gain(0.26).degradeBy(0.25),
  s("cp ~ cp").every(4, x=>x.rev()),
  s("mt*4 [ht lt]").fast(1.8).gain(0.3)
).gain(0.5).room(0.18).pan(saw.range(0.2,0.8).slow(2.8)).swing(0.11).crush(0.16)

$: n("0 [2 4] [3 5] [7 5] ~ 0 [3 5 7]").scale("G:minor").slow(1.6).sound("piano").gain(0.38).phaser(sine.range(0.15,0.45).slow(6)).crush(0.08)

$: note("[g4 bb4 d5 eb5] [f4 ab4 c5 eb5]").slow(5).sound("supersaw").gain(0.21).attack(1.6).hpf(sine.range(80,420).slow(6.5)).leslie(0.52)

$: note("g1 [bb1 d2] eb1 [d1 bb1] g1").slow(3.2).sound("square").gain(0.34).lpf(580).distort(0.16).hpf(92)

$: s("ghosts_in_the_machine* [2 4]? evolve* [4 2] ~ [ghosts_in_the_machine*2 evolve], ~ evolve*3").slow(10).gain(0.15).room(0.78).speed(perlin.range(0.75,1.35)).chop(rand.range(8,12))