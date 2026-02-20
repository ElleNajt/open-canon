setcps(155/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [g3 bb3 eb4] [eb4 g4 c5] [d4 f4 ab4]").every(4, x=>x.rev().transpose(perlin.range(-0.4,1.4).slow(4.2))).slow(2.4).sound("saw").gain(0.48).lpf(sine.range(85,3700).slow(4.3)).detune(perlin.range(-16,28).slow(6.9)).pan(sine.range(0.15,0.85).slow(9.2))

$: stack(
  s("bd [~ sn bd]").euclid(3,16),
  s("sn").euclid(5,16).gain(0.88),
  s("hh*4 [oh ~ rd ~]").euclid(11,16).gain(0.45).degradeBy(0.32),
  s("cp*3 ~").every(4, x=>x.rev().fast(2.3)),
  s("[mt ht lt]").fast(3.6).gain(0.55)
).gain(0.84).room(0.5).crush(perlin.range(4,13).slow(6.8)).delay(0.4).swing(0.11)

$: n("[0 3 7 ~] [4 2 7 9] [5 9 ~ 7] [3 0 5 2]").scale("Eb:phrygian").slow(1.8).sound("piano").gain(0.65).fmi(sine.range(0.35,0.88).slow(5.1)).detune(perlin.range(-30,45).slow(6.4)).pan(sine.range(0.15,0.85).slow(8.7)).every(5, x=>x.rev())

$: note("[g4 bb4 d5] [ab4 c5 eb5] [f4 a4 c5 eb5] [g4 bb4 d5]").slow(2.9).sound("supersaw").gain(0.44).attack(0.9).hpf(sine.range(105,780).slow(6.2)).detune(perlin.range(-28,38).slow(5.1)).tremolo(perlin.range(0.1,0.45).slow(4.2))

$: note("g1 [bb1 d2 eb2] [d2 f2 ab2] [bb1 g1 d2]").slow(2.8).sound("square").gain(0.57).lpf(perlin.range(260,1350).slow(5.7)).distort(0.44).ring(perlin.range(0.28,0.62).slow(4.9)).pan(rand.range(0.25,0.75)).coarse(perlin.range(1.2,3.8).slow(4.5))

$: s("ghosts_in_the_machine evolve [evolve ghosts_in_the_machine] ~").slow(4.2).gain(0.64).room(0.8).speed(perlin.range(0.68,1.58).slow(3.7)).chop(rand.range(16,24)).pan(sine.range(0.1,0.9).slow(7.1)).every(6, x=>x.rev().speed(1.15)).degradeBy(0.26)