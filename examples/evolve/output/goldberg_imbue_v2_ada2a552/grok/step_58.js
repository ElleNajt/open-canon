setcps(192/60/4)
samples('shabda/speech:ghosts_in_the_machine,evolve')

$: note("eb3 [bb3 d4 ab4] [eb4 g4 c5] [d4 f4 bb4]").every(13, x=>x.rev().transpose(perlin.range(-7,15).slow(4.2))).slow(1.4).sound("supersaw").gain(0.65).lpf(sine.range(90,5500).slow(4.8)).room(perlin.range(0.4,0.7)).pan(rand.range(0,1).slow(6.2))

$: stack(
  s("bd*2 [~ sn bd]").euclid(13,16).gain(0.85).swing(0.55),
  s("sn").euclid(9,16).gain(0.72).every(6, x=>x.tremolo(0.75).fast(2.4)),
  s("hh*8 [oh ~ rd cb]").euclid(12,16).gain(0.45).degradeBy(0.42),
  s("cp*8").every(3, x=>x.fast(3.5)),
  s("[~ mt*4 ht lt]").fast(5.2).gain(0.68)
).gain(0.84).room(0.72).crush(perlin.range(5,13).slow(5.2)).delay(0.52).compressor("-20:5:0.5:0.03:0.25")

$: n("[0 3 [7 12]] [4 7 10 ~] [2 5 9 -1] [0 4 [7 12] ~]").scale("Eb:minor").slow(1.4).sound("saw").gain(0.68).fmi(sine.range(0.7,4.5).slow(6.2)).lpf(cosine.range(110,4100).slow(6.5)).room(0.45)

$: note("[g4 c5 eb5] [ab4 c5 f5] [f4 a4 d5] [ab4 d5 f5]").every(7, x=>x.juxBy(0.42, rev)).slow(1.4).sound("pulse").gain(0.65).hpf(cosine.range(80,1300).slow(6.2)).room(0.55).detune(perlin.range(-25,28).slow(9.2))

$: note("eb1 [bb1 d2 f2] [eb2 g2 bb2] [ab1 c2 f2]").slow(1.4).sound("square").gain(0.72).hpf(perlin.range(55,115).slow(7.5)).lpf(saw.range(70,2400).slow(8)).distort(0.6).leslie(sine.range(0.25,1).slow(7.2))

$: s("[ghosts_in_the_machine ~ evolve* [3 5]] [evolve*4 ghosts_in_the_machine ~] [~ evolve*4 ghosts_in_the_machine]").slow(1.4).gain(0.82).speed(perlin.range(0.68,1.6).slow(7.2)).chop(rand.range(10,26).slow(5.2)).vowel("e i o a u e".slow(8.5)).room(0.65)