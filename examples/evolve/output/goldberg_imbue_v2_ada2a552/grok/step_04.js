setcps(80/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("g3 [gb3 e3] d3 [b2 c3] d3 g2 [bb2 a2]").every(4,rev).slow(2).sound("triangle").gain(0.35).lpf(sine.range(300,2200).slow(3)).detune(perlin.range(-10,10))

$: stack(
  s("bd").euclid(4,16),
  s("sn").euclid(2,16).gain(0.6),
  s("hh").euclid(12,16).gain(0.25).degradeBy(0.15),
  s("cp").every(4,rev).gain(0.4),
  s("mt*3, ht ~ ht").fast(1.5).gain(0.3)
).gain(0.5).room(0.12).pan(tri.range(0.2,0.8).slow(3)).swing(0.08).crush(0.08)

$: n("0 [2 3] [5 3] 2 0 ~ , 0 2 [3 5] 7 [4 3] 0").scale("G:minor").slow(2).sound("piano").gain(0.38).vowel("o a u i").phaser(sine.range(0.15,0.45).slow(6))

$: note("[g4 bb4 d5] [f4 ab4 c5]").slow(6).sound("supersaw").gain(0.22).attack(1.5).leslie(0.45).detune(10).tremolo(0.25)

$: n("0 [3 0] ~ 2 [0 ~] 3").scale("G:minor").slow(4).sound("square").gain(0.35).lpf(650).hpf(85).slide(0.08)

$: s("ghosts_in_the_machine*2 ~ evolve, ~ ghosts_in_the_machine evolve").slow(12).gain(0.12).room(0.85).chop(8).speed(perlin.range(0.75,1.35))