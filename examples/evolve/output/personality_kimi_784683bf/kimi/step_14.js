setcps(75/60/4)

samples('shabda/speech:metamorphosis,synapse,fracture,bloom')

$: note("<d2 [a2 c3] [g2 ~] f2 [e2 a2]>*2").s("sawtooth").lpf(sine.range(300, 1800).slow(4)).lpq(4).lpenv(2).lpattack(0.02).lpdecay(0.3).lpsustain(0.15).lprelease(0.5).distort(0.6).drive(0.5).crush(8).gain(0.85).room(0.4).pan(0.5)

$: s("fracture").euclid(5,13).chop(32).speed(rand.range(-1.5, 2.5)).hpf(500).hpq(3).gain(0.5).pan(perlin.range(0.1, 0.9)).room(0.6).size(0.85).every(3, rev).delay(0.3).delaytime(0.125).delayfeedback(0.5).slow(1)

$: stack(s("bd").euclid(3,7).gain(1), s("~ sn").euclid(2,7).late(0.15).gain(0.9), s("cp").every(4, ply(3)).degradeBy(0.3)).distort(0.85).gain(0.8).attack(0.01).decay(0.2).sustain(0.05).room(0.5).pan(sine.range(0.3, 0.7).slow(2))

$: note("<a5 [g5 e5] c6 [~ e6] d6 [c6 a5]>").s("triangle").attack(0.03).decay(0.2).sustain(0.1).release(0.4).pan(rand.range(0.2, 0.8)).delay(0.6).delaytime(0.333).delayfeedback(0.4).gain(0.75).room(0.55).vowel("i o a").lpf(2500).lpenv(0.5).slide(0.15).detune(5)

$: note("<f4 [c4 ab4] [eb4 g4] [d4 f4 ab4]>").s("piano").attack(2).decay(1.5).sustain(0.8).release(6).gain(0.5).pan(cosine.range(0.15, 0.85).slow(5)).room(0.98).size(1).tremolo(0.2).tremolodepth(0.4).bpf(800).bpq(1.5).coarse(2)

$: s("bloom").euclid(3,11).speed(rand.range(0.3, 2.2)).gain(0.5).hpf(600).lpf(3500).pan(perlin.range(0, 1)).room(0.4).crush(10).distort(0.35).striate(12).slow(2)

$: s("hh*12").degradeBy(0.8).speed("[1, 2, 0.5]").hpf(4000).hpq(5).gain(0.55).pan(rand.range(0.3, 0.7)).room(0.25).attack(0.002).release(0.04).shape(0.4)

$: note("<c6 [d6 bb5] g6 [~ c7] a6 [f6 eb6]>").s("sine").attack(0.01).decay(0.1).sustain(0).release(0.8).ring(0.9).ringf(sine.range(400, 1200).slow(3)).gain(0.4).pan(sine.range(0, 1).fast(1.5)).room(0.8).delay(0.5).delaytime(0.166).delayfeedback(0.6).every(2, jux(rev))