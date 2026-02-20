setcps(160/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [g3 bb3 eb4] [eb4 g4 c5] [d4 f4 ab4]").every(8, x=>x.rev().transpose(perlin.range(-0.2,1.4).slow(4.2))).slow(2).sound("saw").gain(0.55).lpf(sine.range(140,3600).slow(4.2)).detune(perlin.range(-16,36).slow(6.8)).pan(sine.range(0.15,0.85).slow(8.2))

$: stack(
  s("bd [~ sn bd]").euclid(4,16),
  s("sn").euclid(5,16).gain(0.9),
  s("hh*5 [oh rd ~]").euclid(12,16).gain(0.5).degradeBy(0.3),
  s("cp*3 ~").every(5, x=>x.rev().fast(2)),
  s("[mt ht*2 lt]").fast(3.4).gain(0.6)
).gain(0.88).room(0.58).crush(perlin.range(2.5,13).slow(7.5)).delay(0.48).swing(0.16).leslie(perlin.range(0.3,0.8).slow(4.2))

$: n("[0 3 7 ~] [4 2 7 9] [5 9 ~ 7] [3 0 5 2]").scale("Eb:phrygian").slow(1.8).sound("piano").gain(0.7).fmi(sine.range(0.35,0.95).slow(4.6)).detune(perlin.range(-26,52).slow(5.4)).pan(sine.range(0.05,0.95).slow(9.4)).room(0.35)

$: note("[g4 bb4 d5] [ab4 c5 eb5] [f4 a4 c5 eb5] [g4 bb4 d5]").slow(2.5).sound("supersaw").gain(0.48).attack(0.88).hpf(sine.range(85,680).slow(5.8)).detune(perlin.range(-23,44).slow(4.9)).tremolo(perlin.range(0.2,0.5).slow(3.7))

$: note("g1 [bb1 d2 eb2] [d2 f2 ab2] [bb1 g1 d2]").slow(2.4).sound("square").gain(0.65).lpf(perlin.range(260,1520).slow(5.1)).distort(0.52).ring(perlin.range(0.28,0.72).slow(4.6)).pan(rand.range(0.15,0.85))

$: s("ghosts_in_the_machine evolve [ghosts_in_the_machine evolve] ~").slow(3.6).gain(0.69).room(0.82).speed(perlin.range(0.68,1.55).slow(3.6)).chop(rand.range(14,26)).pan(sine.range(0.1,0.9).slow(7.2)).every(6, x=>x.rev().speed(1.15))