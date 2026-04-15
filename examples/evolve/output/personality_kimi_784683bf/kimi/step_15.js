setcps(75/60/4)

samples('shabda/speech:metamorphosis,synapse,fracture,bloom')

$: note("<c2 [bb2 g2] [f2 eb2] d2 [c2 g1]>*4").s("square").lpf(sine.range(400, 2400).slow(3)).lpq(6).lpenv(3).lpattack(0.01).lpdecay(0.2).lpsustain(0.1).lprelease(0.4).distort(0.7).drive(0.6).crush(7).gain(0.9).room(0.3).pan(0.5)

$: note("<g5 [eb5 c5] [bb4 g4]>*3").s("sine").fmi(sine.range(1, 6).slow(5)).fmh(3).attack(0.01).decay(0.3).sustain(0).release(0.8).lpf(2000).lpenv(2).pan(rand.range(0, 1)).room(0.7).size(0.9).delay(0.4).delaytime(0.375).delayfeedback(0.5).euclid(5, 11)

$: stack(s("bd").euclid(4,7).gain(1), s("~ sn").euclid(3,7).late(0.1).gain(0.95), s("cp").every(3, ply(2)).degradeBy(0.4)).distort(0.9).gain(0.85).attack(0.005).decay(0.15).sustain(0.03).room(0.6).pan(sine.range(0.2, 0.8).slow(3))

$: note("<ab5 [g5 eb5] c6 [~ ab5] bb5 [c6 g5]>").s("triangle").fmi(2.5).attack(0.02).decay(0.25).sustain(0.05).release(0.5).pan(rand.range(0.1, 0.9)).delay(0.5).delaytime(0.333).delayfeedback(0.35).gain(0.7).room(0.6).lpf(3000).lpenv(0.8).slide(0.2).detune(7)

$: note("<f4 [c4 ab4] [eb4 g4] [d4 f4 ab4]>").s("piano").attack(0.01).decay(0.1).sustain(0.2).release(0.3).gain(0.6).clip(0.25).pan(cosine.range(0.2, 0.8).slow(4)).room(0.5).size(0.8).tremolo(0.3).tremolodepth(0.5).bpf(1000).bpq(2).coarse(3)

$: s("bloom").euclid(3,11).speed(rand.range(0.2, 3)).gain(0.6).hpf(800).lpf(4000).pan(perlin.range(0, 1)).room(0.5).crush(9).distort(0.4).striate(16).jux(rev).slow(2)

$: s("rim*10").degradeBy(0.75).speed("[1, 1.5, 0.75]").hpf(3000).hpq(6).gain(0.5).pan(rand.range(0.2, 0.8)).room(0.3).attack(0.001).release(0.05).shape(0.5).every(2, rev)

$: note("<c6 [d6 bb5] g6 [~ c7] a6 [f6 eb6]>").s("sine").attack(0.01).decay(0.08).sustain(0).release(0.6).ring(0.85).ringf(sine.range(300, 2000).fast(2)).gain(0.45).pan(saw.range(0, 1).slow(2)).room(0.85).delay(0.6).delaytime(0.166).delayfeedback(0.55).fmi(3).fmh(5.5)