setcps(98/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("g3 [bb3 c4] [d4 eb4] [f4 eb4] [d4 c4] [bb3 g3]").every(4, x=>x.rev()).slow(1.5).sound("triangle").gain(0.32).lpf(sine.range(280,2600).slow(3.8))

$: stack(
  s("bd").euclid(3,16),
  s("sn").euclid(3,16).gain(0.65),
  s("hh*2").euclid(12,16).gain(0.28).degradeBy(0.3),
  s("cp ~ cp cp ~").every(4, x=>x.rev()),
  s("[mt*2 ht] [lt*2 ht]").fast(2).gain(0.32)
).gain(0.52).room(0.22).pan(saw.range(0.25,0.75).slow(3.2)).swing(0.13).crush(0.18)

$: n("0 [2 4] [3 5] [7 5] ~ 0 [3 5 7]").scale("G:minor").slow(1.4).sound("piano").gain(0.4).phaser(sine.range(0.2,0.5).slow(5.5)).detune(sine.range(-12,12).slow(8))

$: note("[g4 bb4 d5] [ab4 c5 eb5] [f4 bb4 d5]").slow(4.5).sound("supersaw").gain(0.24).attack(1.8).hpf(sine.range(70,450).slow(7.2)).leslie(0.55)

$: note("g1 [bb1 d2] eb1 [d1 bb1] g1").slow(2.8).sound("square").gain(0.36).lpf(620).distort(0.18).hpf(105)

$: s("ghosts_in_the_machine*2, evolve* [4 2] ghosts_in_the_machine ~ [evolve*3 ghosts_in_the_machine*2]").slow(8.8).gain(0.17).room(0.75).speed(perlin.range(0.7,1.4)).chop(rand.range(10,16))