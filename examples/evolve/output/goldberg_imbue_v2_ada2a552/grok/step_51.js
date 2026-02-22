setcps(172/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [bb3 d4 ab4] [eb4 g4 c5] [d4 f4 bb4]").every(4, x=>x.rev().transpose(perlin.range(-7,7).slow(2.5))).slow(1.5).sound("supersaw").gain(0.55).lpf(sine.range(90,5200).slow(5)).room(0.45).detune(perlin.range(-15,15).slow(6))

$: stack(
  s("bd*2 [~ sn bd]").euclid(13,16).gain(0.8).swing(0.4),
  s("sn").euclid(9,16).gain(0.7).every(3, x=>x.tremolo(0.8).fast(1.5)),
  s("hh*8 [oh ~ rd cb]").euclid(14,16).gain(0.38).degradeBy(0.55),
  s("cp*8").every(4, x=>x.fast(2.8)),
  s("[~ mt*4 ht lt]").fast(4.8).gain(0.65)
).gain(0.88).room(0.75).crush(perlin.range(6,14).slow(3.8)).delay(0.55).pan(sine.range(0,1).slow(5.5)).coarse(8)

$: n("[0 3 7] [4 7 10 ~] [2 5 9 -1] [0 4 7 ~]").scale("Eb:minor").slow(1.9).sound("saw").gain(0.6).fmi(sine.range(0.6,2.8).slow(3.5)).ring(perlin.range(0.4,0.9).slow(3.8)).lpf(cosine.range(160,3400).slow(4.2))

$: note("[g4 c5 eb5] [ab4 c5 f5] [f4 a4 d5] [ab4 d5 f5]").every(5, x=>x.jux(rev)).slow(1.7).sound("pulse").gain(0.55).hpf(sine.range(70,1100).slow(4.8)).phaser(0.65).accelerate(0.1)

$: note("eb1 [bb1 d2 f2] [eb2 g2 bb2] [ab1 c2 f2]").slow(1.8).sound("square").gain(0.7).lpf(saw.range(40,1900).slow(6)).distort(0.75).leslie(0.55).penv(0.3)

$: s("ghosts_in_the_machine*3, evolve*5 [ghosts_in_the_machine evolve*3] [~ evolve*8] evolve*4").slow(1.6).gain(0.75).speed(perlin.range(0.7,1.6).slow(5)).chop(rand.range(14,26).slow(4)).vowel("a e o i u").room(0.35)