setcps(72/60/4)

samples('shabda/speech:metamorphosis,synapse,fracture,bloom')

$: note("<d2 [~ d2] [a1 ~] [f2 d2]>*4").s("supersaw").lpf(sine.range(200, 1600).slow(5)).lpq(4).lpenv(6).lpattack(0.01).lpdecay(0.2).lpsustain(0.1).lprelease(0.4).distort(0.9).drive(0.95).crush(3).gain(0.85).room(0.3).pan(0.3).shape(0.6).detune(8)

$: note("<[fs5 ~ d5] [b5 ~] [cs6 a5] [e6 ~ g5]>*2").s("supersaw").fmi(rand.range(3,7)).fmh(3).attack(0.02).decay(0.3).sustain(0.2).release(0.9).lpf(saw.range(800, 5000).slow(4)).lpenv(6).lpq(3).pan(sine.range(0.1, 0.9).slow(3)).room(0.9).size(0.85).delay(0.4).delaytime(0.375).delayfeedback(0.5).vowel("u o").cut(1).detune(12).juxBy(0.5, (x) => x.speed(0.5))

$: stack(s("bd(5,8,<0 2>)").gain(1.1), s("sn(3,8,<1 3>)").degradeBy(0.3).speed(rand.range(0.9, 1.1)), s("[~ rim]*2").speed(1.5).gain(0.8), s("lt(2,7)").speed(0.8)).distort(0.7).gain(0.9).attack(0.005).decay(0.08).sustain(0.01).room(0.8).pan(tri.range(0.3, 0.7).slow(5))

$: s("metamorphosis").chop(64).speed(rand.range(-2, -0.5)).gain(0.4).room(1).size(1).lpf(1200).lpq(6).pan(perlin.range(0, 1).slow(8)).degradeBy(0.4).slow(4).orbit(2)

$: s("synapse").ply(4).speed(rand.range(1.8, 2.2)).gain(0.6).hpf(400).lpf(3000).pan(rand.range(0.2,0.8)).room(0.8).size(0.9).crush(6).distort(0.5).every(3, fast(2)).slow(3).delay(0.3).delaytime(0.125).delayfeedback(0.7)

$: s("bloom").speed(rand.range(0.5, 0.8)).degradeBy(0.3).begin(0.2).end(0.5).hpf(800).hpq(3).gain(0.5).pan(rand.range(0, 1)).room(0.6).leslie(0.7).lrate(4).triode(0.4).slow(4)

$: note("<[d6 eb6] [f6 ~] [g6 fs6] [a6 ~ c7]>").s("sine").attack(0.01).decay(0.15).sustain(0).release(0.4).penv(0.3).pattack(0.001).pdecay(0.1).ring(0.8).ringf(sine.range(2000, 6000).slow(5)).gain(0.5).pan(tri.range(0.1, 0.9).slow(4)).room(0.95).delay(0.6).delaytime(0.333).delayfeedback(0.5).tremolo(0.3).tremolosync(3)

$: note("<d3 [c3 ~] [bb2 g2] [f2 ~]>").s("pulse").attack(0.01).decay(0.25).sustain(0.1).release(0.3).gain(0.7).pan(0.7).vowel("a o").phasercenter(600).phasersweep(0.8).phaserdepth(0.6).phaser(tri.range(0.2, 3).slow(4)).hpf(150).lpf(2000).drive(0.6).cut(2)