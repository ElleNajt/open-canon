setcps(75/60/4)

samples('shabda/speech:metamorphosis,synapse,fracture,bloom')

$: note("<c2 [eb2 g2] [f2 ab2] [fs2 c3]>*4").s("sawtooth").lpf(sine.range(300, 2800).slow(4)).lpq(8).lpenv(4).lpattack(0.02).lpdecay(0.3).lpsustain(0.05).lprelease(0.5).distort(0.8).drive(0.7).crush(6).gain(0.9).room(0.2).pan(0.5).shape(0.3)

$: note("<c6 eb6 g6 [bb5 d6] a5 [g5 c6]>*4").s("supersaw").fmi(sine.range(2, 7).slow(3)).fmh(4).attack(0.01).decay(0.2).sustain(0.1).release(0.4).lpf(saw.range(1000, 6000).slow(2)).lpenv(3).pan(rand.range(0.2, 0.8)).room(0.6).size(0.8).delay(0.3).delaytime(0.25).delayfeedback(0.4).cut(1)

$: stack(s("bd").euclid(5,8).gain(1), s("~ sn").euclid(3,8).late(0.12).gain(0.9), s("hh*4").degradeBy(0.3), s("cp").every(2, ply(3)).degradeBy(0.5)).distort(0.85).gain(0.9).attack(0.005).decay(0.1).sustain(0.02).room(0.5).pan(sine.range(0.3, 0.7).slow(2))

$: note("<eb4 [bb4 g4] [c5 ab4] [f4 d5]>").s("piano").attack(0.005).decay(0.08).sustain(0.1).release(0.2).gain(0.7).clip(0.15).pan(cosine.range(0.3, 0.9).slow(3)).room(0.4).size(0.6).bpf(800).bpq(3).coarse(4).hcutoff(200).hresonance(2)

$: s("fracture").euclid(2,7).speed(-0.5).gain(0.7).hpf(600).lpf(3000).pan(perlin.range(0.2, 0.9)).room(0.4).crush(4).distort(0.6).striate(8).jux(rev).slow(4).begin(rand.range(0, 0.7))

$: s("rim*6").degradeBy(0.6).speed("[1, 2, 0.5]").hpf(2500).hpq(4).gain(0.6).pan(rand.range(0.1, 0.9)).room(0.2).attack(0.002).release(0.08).shape(0.6).every(4, rev)

$: note("<c7 [db6 bb5] [g6 eb6] [~ f6] ab6 [c7 g6]>").s("sine").attack(0.01).decay(0.06).sustain(0).release(0.5).ring(0.9).ringf(sine.range(400, 3000).fast(3)).gain(0.5).pan(tri.range(0.1, 0.9).slow(1.5)).room(0.75).delay(0.5).delaytime(0.125).delayfeedback(0.6).fmi(4).fmh(7)

$: note("<c3 [c3 g2] [eb3 c3]>*2").s("pulse").attack(0.01).decay(0.15).sustain(0).release(0.1).gain(0.8).pan(0.5).phasercenter(800).phasersweep(0.6).phaserdepth(0.8).phaser(sine.range(0.1, 2).slow(3)).lpf(1200).drive(0.5).cut(2).swing(0.2)