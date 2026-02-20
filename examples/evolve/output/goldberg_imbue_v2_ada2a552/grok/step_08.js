setcps(105/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("g3 [bb3 c4 eb4] [d4 f4] [eb4 d4 c4] [bb3 g3]").every(4, x=>x.rev()).slow(1.6).sound("pulse").gain(0.3).lpf(sine.range(300,2700).slow(4.2)).room(0.28)

$: stack(
  s("bd cb").euclid(3,16),
  s("sn").euclid(2,16).gain(0.62),
  s("hh*2 oh?").euclid(11,16).gain(0.26).degradeBy(0.35),
  s("cp ~ [cp cp]").every(4, x=>x.rev()),
  s("[mt*2 ht lt]").fast(2).gain(0.3)
).gain(0.54).room(0.24).pan(saw.range(0.2,0.8).slow(3.5)).swing(0.16).delay(0.15)

$: n("0 [2 4] [3 5 7] [7 5] ~ [0 3 7]").scale("G:minor").slow(1.5).sound("piano").gain(0.39).phaser(sine.range(0.25,0.55).slow(4.8)).detune(sine.range(-14,14).slow(7))

$: note("[g4 bb4 d5] [ab4 c5 eb5] [f4 a4 c5]").slow(4.2).sound("supersaw").gain(0.26).attack(1.6).hpf(sine.range(75,480).slow(6.5)).pan(rand.range(0.25,0.75))

$: note("g1 [bb1 d2 eb1] [d1 bb1 g1]").slow(2.6).sound("square").gain(0.37).lpf(640).distort(0.2).tremolo(0.35)

$: s("~ ghosts_in_the_machine*2 [evolve ghosts_in_the_machine] evolve* [3 2] ~").slow(8.2).gain(0.19).room(0.78).speed(perlin.range(0.72,1.35)).chop(rand.range(12,18))