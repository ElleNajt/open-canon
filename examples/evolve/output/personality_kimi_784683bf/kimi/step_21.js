setcps(72/60/4)

samples('shabda/speech:metamorphosis,synapse,fracture,bloom')

$: note("<d2 [~ eb2] [f#2 ~] [g2 d2] [~ a1]>*2").s("sawtooth").lpf(sine.range(100, 800).slow(6)).lpq(6).lpenv(4).lpattack(0.05).lpdecay(0.3).lpsustain(0.2).lprelease(0.6).distort(0.7).drive(0.8).crush(4).gain(0.9).pan(sine.range(0.2, 0.4).slow(3)).slide(-3).shape(0.4).cut(1)

$: note("<eb6 f#6 g6 a6 bb6>*8").s("square").attack(0.01).decay(0.2).sustain(0.1).release(0.4).lpf(tri.range(2000, 6000).slow(5)).lpenv(6).lpq(3).pan(saw.range(0.3, 0.7).slow(2)).room(0.7).delay(0.4).delaytime(0.125).delayfeedback(0.5).juxBy(0.5, (x) => x.speed(0.5).gain(0.6)).cut(2)

$: stack(s("bd(3,8,0)").gain(1.1), s("lt(5,16,2)").speed(0.8).gain(0.8), s("mt(2,8,1)").speed(1.1).gain(0.9)).attack(0.005).decay(0.1).sustain(0.05).room(0.8).distort(0.6).pan(tri.range(0.3, 0.7).slow(4))

$: s("bloom").chop(64).speed(rand.range(0.25, 0.5)).gain(0.6).room(0.9).size(0.95).lpf(sine.range(400, 2000).slow(8)).lpq(2).pan(perlin.range(0,1).slow(6)).degradeBy(0.4).slow(4).sometimes(fast(2))

$: note("[d4 ~ f#4] [a4 ~ bb4] [g4 ~ f#4] [eb4 ~ d4]").s("piano").attack(0.01).decay(0.15).sustain(0).release(0.3).penv(0.2).pattack(0.01).pdecay(0.1).crush(6).distort(0.8).hpf(200).lpf(3000).pan(rand.range(0.1, 0.9)).room(0.6).every(3, (x) => x.speed(1.5).ply(2))

$: note("<[d6 ~ eb6] [f#6 ~ g6] [a6 ~ bb6] [~ f#6 d6]>").s("sine").attack(0.02).decay(0.3).sustain(0.05).release(0.8).ring(0.8).ringf(sine.range(800, 3000).slow(5)).gain(0.65).pan(sine.range(0.2, 0.8).slow(4)).room(0.8).leslie(3).lrate(5).tremolo(0.3)

$: note("<[d2 ~ d2] [eb2 ~ f#2 g2] [a2 ~] [f#2 f#2 ~]>").s("pulse").attack(0.01).decay(0.2).sustain(0.15).release(0.4).gain(0.75).pan(0.6).vowel("e i o").phasercenter(600).phasersweep(0.4).phaserdepth(0.8).phaser(sine.range(0.5, 3).slow(7)).hpf(100).lpf(1800).drive(0.6).cut(3)