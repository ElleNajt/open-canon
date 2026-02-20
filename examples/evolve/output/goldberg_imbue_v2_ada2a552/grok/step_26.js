setcps(168/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [bb3 d4 g4] [eb4 g4 c5] [d4 f4 ab5]").every(8, x=>x.rev().transpose(perlin.range(-0.1,1.6).slow(3.8))).slow(1.8).sound("saw").gain(0.52).lpf(cosine.range(160,3800).slow(3.9)).detune(rand.range(-18,42).slow(7.2)).pan(sine.range(0.2,0.8).slow(7.8)).room(0.28)

$: stack(
  s("bd [sn bd ~]").euclid(3,16),
  s("sn").euclid(6,16).gain(0.92),
  s("hh*4 [oh ~ rd]").euclid(13,16).gain(0.48).degradeBy(0.28),
  s("cp*4").every(4, x=>x.rev().fast(1.8)),
  s("[mt*2 ht lt]").fast(3.2).gain(0.62)
).gain(0.85).room(0.62).coarse(perlin.range(3,14).slow(8)).delay(0.52).swing(0.18)

$: n("[0 4 7 ~] [3 7 2 9] [4 9 7 ~] [2 5 0 3]").scale("Eb:minor").slow(1.6).sound("piano").gain(0.72).fmi(sine.range(0.4,0.92).slow(4.2)).detune(perlin.range(-28,56).slow(4.8)).pan(sine.range(0.1,0.9).slow(8.8)).vowel("a e o")

$: note("[g4 c5 eb5] [ab4 c5 f5] [f4 a4 d5] [g4 bb4 eb5]").slow(2.2).sound("supersaw").gain(0.5).attack(0.75).hpf(sine.range(95,720).slow(5.2)).detune(rand.range(-25,48).slow(4.5)).tremolo(perlin.range(0.25,0.55).slow(3.2)).room(0.3)

$: note("g1 [d2 f2 bb1] [ab2 d2 f2] [g1 bb1 d2]").slow(2.2).sound("square").gain(0.68).lpf(perlin.range(280,1680).slow(4.7)).distort(0.48).ring(rand.range(0.3,0.7).slow(4.2)).pan(rand.range(0.1,0.9))

$: s("~ ghosts_in_the_machine, evolve*3, ghosts_in_the_machine ~, evolve").slow(3.2).gain(0.72).room(0.78).speed(perlin.range(0.72,1.52).slow(3.2)).chop(rand.range(12,28)).pan(sine.range(0,1).slow(6.8)).every(5, x=>x.rev().speed(1.18))