setcps(72/60/4)

samples('shabda/speech:metamorphosis,synapse,fracture,bloom')

$: note("<d2 [~ d2] [bb1 ~] [f2 d2]>*4").s("supersaw").lpf(sine.range(200, 1600).slow(5)).lpq(4).lpenv(6).lpattack(0.01).lpdecay(0.2).lpsustain(0.1).lprelease(0.4).distort(0.9).drive(0.95).crush(3).gain(0.85).room(0.3).pan(0.3).shape(0.6).detune(8)

$: note("<[c6 ~ a5] [f6 ~] [eb6 d6] [bb5 ~ g5]>*2").s("triangle").fmi(rand.range(2,5)).fmh(2).attack(0.05).decay(0.4).sustain(0.1).release(1.2).lpf(saw.range(600, 4000).slow(3)).lpenv(8).lpq(2).pan(sine.range(0.1, 0.9).slow(3)).room(0.9).size(0.85).delay(0.5).delaytime(0.25).delayfeedback(0.6).vowel("i a").cut(1).detune(5).juxBy(0.3, (x) => x.speed(0.75))

$: stack(s("bd(7,8,<0 2>)").gain(1.2), s("sn(4,8,<1 3>)").degradeBy(0.2).speed(rand.range(0.8, 1.2)), s("[~ rim]*2").speed(1.8).gain(0.9), s("ht(5,16)").speed(1.2)).distort(0.8).gain(0.95).attack(0.002).decay(0.06).sustain(0.01).room(0.7).pan(tri.range(0.2, 0.8).slow(4))

$: s("metamorphosis").chop(32).speed(rand.range(-1.5, -0.7)).gain(0.5).room(1).size(1).lpf(1000).lpq(5).pan(perlin.range(0, 1).slow(6)).degradeBy(0.3).slow(2).orbit(2)

$: s("synapse").ply(3).speed(rand.range(0.5, 0.8)).gain(0.7).hpf(300).lpf(2500).pan(rand.range(0.2,0.8)).room(0.8).size(0.9).crush(8).distort(0.6).every(4, fast(3)).slow(2).delay(0.4).delaytime(0.1875).delayfeedback(0.6)

$: s("fracture").chop(16).speed(rand.range(-3, -1)).gain(0.6).distort(1).crush(4).hpf(600).lpf(3000).pan(rand.range(0, 1)).room(0.9).size(1).delay(0.8).delaytime(0.166).delayfeedback(0.8).degradeBy(0.5).slow(3)

$: note("<[d6 f6] [ab6 ~] [eb6 g6] [b6 ~ d7]>").s("sine").attack(0.01).decay(0.2).sustain(0).release(0.5).penv(0.4).pattack(0.001).pdecay(0.15).ring(0.9).ringf(sine.range(1500, 5000).slow(4)).gain(0.6).pan(tri.range(0.1, 0.9).slow(3)).room(0.95).delay(0.7).delaytime(0.222).delayfeedback(0.6).tremolo(0.4).tremolosync(4)

$: note("<[d3 ~ d3] [c3 ~ c3 g2] [bb2 ~] [f2 f2 ~]>").s("pulse").attack(0.01).decay(0.25).sustain(0.1).release(0.3).gain(0.7).pan(0.7).vowel("a o").phasercenter(800).phasersweep(0.6).phaserdepth(0.7).phaser(tri.range(0.3, 4).slow(5)).hpf(150).lpf(2200).drive(0.7).cut(2)