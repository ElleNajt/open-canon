setcps(72/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("g3 gb3 e3 d3 b2 c3 d3 g2").every(8,rev).slow(2).sound("triangle").gain(0.4).lpf(sine.range(400,2000).slow(4))

$: stack(
  s("bd").euclid(4,16),
  s("sn").euclid(2,16).gain(0.6),
  s("hh").euclid(12,16).gain(0.25)
).gain(0.5).room(0.1).pan(tri.range(0.3,0.7).slow(2)).swing(0.05)

$: n("0 2 3 [5 3] 2 0 ~ , 0 2 3 5 7 [4 3] 0").scale("G:minor").slow(2).sound("piano").gain(0.4).vowel("a e i")

$: note("[g4 bb4 d5]").slow(8).sound("supersaw").gain(0.18).attack(1.8).room(0.35)

$: stack(
  s("cp").every(4,rev),
  s("mt*3, ht ~ ht").fast(2)
).gain(0.3).hpf(300).pan(0.7).room(0.15)

$: s("ghosts_in_the_machine*2, ~ evolve?").slow(16).gain(0.07).room(0.9).lpf(400).pan(rand.range(0,1))