setcps(75/60/4)

samples('shabda/speech:metamorphosis,synapse,fracture,bloom')

$: note("<c2 [c2 g1] [eb2 ~] [f2 fs2]>*4").s("square").lpf(sine.range(400, 3200).slow(4)).lpq(6).lpenv(5).lpattack(0.01).lpdecay(0.4).lpsustain(0.02).lprelease(0.6).distort(0.9).drive(0.8).crush(5).gain(0.95).room(0.3).pan(0.3).shape(0.4)

$: note("<g5 [eb6 c6] [bb5 f6] [d6 ab5]>*2").s("square").fmi(sine.range(3, 8).slow(3)).fmh(3).attack(0.02).decay(0.3).sustain(0.05).release(0.6).lpf(saw.range(800, 5000).slow(2)).lpenv(4).pan(rand.range(0.2, 0.8)).room(0.7).size(0.9).delay(0.4).delaytime(0.1875).delayfeedback(0.5).cut(1)

$: stack(s("[bd:2 bd:2] [~ sn:2] [bd:2 ~] [sn:2 bd:2]").every(3, rev), s("hh*3").degradeBy(0.4).every(2, fast(2)), s("cp").every(4, ply(2)).degradeBy(0.3), s("lt").euclid(3,7).gain(0.8)).distort(0.9).gain(0.95).attack(0.005).decay(0.08).sustain(0.01).room(0.6).pan(square.range(0.2, 0.8).slow(3))

$: note("<c3 [eb3 g3 bb3] [f3 ab3 c4] [e3 b3 g3]>").s("piano").attack(0.008).decay(0.1).sustain(0.05).release(0.3).gain(0.75).clip(0.2).pan(cosine.range(0.2, 0.8).slow(4)).room(0.5).size(0.7).lpf(3000).lpq(3).coarse(3).hcutoff(150).hresonance(3)

$: s("synapse").chop(32).speed(rand.range(-0.6, -0.3)).gain(0.6).hpf(400).lpf(2500).pan(perlin.range(0.1, 0.9)).room(0.8).size(1).crush(6).distort(0.5).slow(4).begin(rand.range(0, 0.5)).orbit(3)

$: s("rim*2").degradeBy(0.5).speed("[3, 1.5, 6]").hpf(3000).hpq(6).gain(0.55).pan(rand.range(0, 1)).room(0.3).attack(0.001).release(0.06).shape(0.8).every(3, rev).every(5, ply(2))

$: note("<c7 [db6 ~] [g6 eb6] [~ f6 ab6] [c7 g6]>").s("triangle").attack(0.02).decay(0.08).sustain(0).release(0.8).ring(0.7).ringf(tri.range(600, 4000).slow(2)).gain(0.6).pan(sine.range(0, 1).slow(2)).room(0.8).delay(0.6).delaytime(0.375).delayfeedback(0.5).tremolo(0.4).tremolosync(3)

$: note("<c2 [c3 g2] [eb3 c2]>*2").s("sawtooth").attack(0.005).decay(0.2).sustain(0).release(0.15).gain(0.85).pan(0.7).phasercenter(600).phasersweep(0.8).phaserdepth(0.6).phaser(sine.range(0.2, 3).slow(2)).lpf(1000).drive(0.6).cut(2).octave(2)