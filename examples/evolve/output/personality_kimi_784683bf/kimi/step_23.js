setcps(72/60/4)

$: note("<a1 [~ c2] [e2 ~] [g2 a1] [~ f1]>*2").s("supersaw").lpf(sine.range(100, 800).slow(9)).lpq(4).lpenv(6).lpattack(0.1).lpdecay(0.5).lpsustain(0.1).lprelease(1.0).distort(0.6).drive(0.8).crush(6).gain(0.9).pan(sine.range(0.2, 0.6).slow(5)).slide(-3).shape(0.4).cut(1)

$: note("<c6 a5 g5 e5 d5>*4").s("square").fmi(5).fmh(1.618).fmenv(6).fmattack(0.03).fmdecay(0.4).attack(0.03).decay(0.2).sustain(0.05).release(0.8).lpf(tri.range(2000, 6000).slow(8)).lpenv(10).lpq(5).pan(saw.range(0.3, 0.7).slow(4)).room(0.7).delay(0.4).delaytime(0.5).delayfeedback(0.5).juxBy(0.5, (x) => x.speed(0.5).gain(0.6).lpf(1200)).fast(2).cut(2)

$: stack(s("bd(3,8)").gain(1.1), s("cp(5,16,2)").gain(0.85), s("rim(7,16,3)").speed(1.4).gain(0.75), s("hh(9,16,1)").gain(0.6)).attack(0.01).decay(0.06).sustain(0.02).room(0.6).distort(0.5).shape(0.2).pan(rand.range(0.1, 0.9))

$: note("[a3,c4,e4,g4]*8").s("sawtooth").attack(3).release(6).sustain(0.8).lpf(sine.range(400, 1200).slow(16)).lpq(3).lpenv(0.5).room(0.95).size(0.9).pan(sine.range(0.1, 0.9).slow(7)).tremolo(0.3).tremolosync(0.125).gain(0.5).coarse(4).shape(0.2)

$: note("<[a4,d5] [c5,e5,a5] ~ [e5,a5,c6] [g5,d6]>*4").s("piano").attack(0.01).decay(0.15).sustain(0.05).release(0.4).penv(0.4).pattack(0.01).pdecay(0.1).crush(6).drive(0.5).hpf(400).lpf(sine.range(3000, 8000).slow(3)).pan(rand.range(0.3, 0.9)).room(0.6).every(3, (x) => x.speed(1.5).ply(3)).juxBy(0.3, (x) => x.slide(3).delay(0.25).dt(0.125))

$: note("<[c6 ~ a5] [g5 ~ e6] [d6 ~ c6] [~ g5 e5]>").s("sine").attack(0.05).decay(0.6).sustain(0.06).release(1.5).ring(0.7).ringf(sine.range(800, 3000).slow(5)).gain(0.6).pan(tri.range(0.4, 0.8).slow(6)).room(0.85).leslie(2).lrate(4).phaser(0.3).phaserdepth(0.8).slow(2)

$: note("<[a2 ~ ~ a2] [~ c3 ~ ~] [e3 e3 ~ ~] [~ ~ g3 ~]>").s("triangle").fmi(9).fmh(2.7).fmenv(5).attack(0.005).decay(0.08).sustain(0).release(0.15).lpf(tri.range(300, 1500).slow(4)).lpq(5).gain(0.85).pan(0.5).echo(4, 0.25, 0.3).distort(0.3).cut(3).shape(0.4)