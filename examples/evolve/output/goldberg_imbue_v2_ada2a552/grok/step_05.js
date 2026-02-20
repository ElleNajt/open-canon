setcps(90/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("g3 [bb3 c4] [d4 eb4] f4 [eb4 d4] bb3 [c4 bb3] g3").palindrome().slow(2).sound("triangle").gain(0.32).lpf(sine.range(280,2400).slow(4)).detune(perlin.range(-15,15))

$: stack(
  s("bd").euclid(3,16),
  s("sn").euclid(3,16).gain(0.65),
  s("hh*2").euclid(11,16).gain(0.28).degradeBy(0.2),
  s("cp ~ cp").every(4, x=>x.rev()),
  s("mt*4, [ht lt]").fast(1.75).gain(0.32)
).gain(0.52).room(0.15).pan(saw.range(0.25,0.75).slow(2.5)).swing(0.1).crush(0.12)

$: n("0 [2 4] [3 5] [7 5] 2 ~ 0 [3 5 7] [4 2]").scale("G:minor").slow(1.8).sound("piano").gain(0.4).vowel("a: o: u i").phaser(sine.range(0.18,0.48).slow(5))

$: note("[g4 bb4 d5 f5] [f4 ab4 c5 eb5]").slow(5.5).sound("supersaw").gain(0.2).attack(1.8).hpf(sine.range(90,450).slow(7)).leslie(0.55).tremolo(0.3)

$: n("[0 3] 5 ~ [2 0] [3 ~] 0").scale("G:minor").slow(3.5).sound("square").gain(0.36).lpf(600).distort(0.18).hpf(95)

$: s("ghosts_in_the_machine* [2 3]? ~ evolve* [3 2], ~ [ghosts_in_the_machine evolve]").slow(11).gain(0.14).room(0.82).speed(perlin.range(0.72,1.38)).chop(rand.range(6,14)).jux(rev)