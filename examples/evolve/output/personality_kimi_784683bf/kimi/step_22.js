setcps(72/60/4)

samples('shabda/speech:metamorphosis,synapse,fracture,bloom')

$: note("<cs2 [~ e2] [fs2 ~] [gs2 cs2] [~ b1]>*2").s("supersaw").lpf(sine.range(80, 600).slow(7)).lpq(5).lpenv(5).lpattack(0.08).lpdecay(0.4).lpsustain(0.1).lprelease(0.8).distort(0.8).drive(0.9).crush(5).gain(0.85).pan(sine.range(0.1, 0.5).slow(4)).slide(-5).shape(0.5).cut(1)

$: note("<e5 fs5 gs5 b5 cs6>*6").s("supersaw").fmi(3).fmh(2.5).fmenv(4).fmattack(0.01).fmdecay(0.2).attack(0.02).decay(0.15).sustain(0.05).release(0.3).lpf(tri.range(1500, 5000).slow(6)).lpenv(8).lpq(4).pan(saw.range(0.2, 0.8).slow(3)).room(0.6).delay(0.5).delaytime(0.375).delayfeedback(0.6).juxBy(0.6, (x) => x.speed(0.75).gain(0.5).lpf(800)).cut(2)

$: stack(s("bd*4").gain(1.2), s("cp(3,8,1)").gain(0.9), s("cb*2").speed(1.2).gain(0.8), s("hh(5,8,2)").gain(0.7)).attack(0.005).decay(0.08).sustain(0.03).room(0.7).distort(0.7).shape(0.3).pan(tri.range(0.2, 0.8).slow(5))

$: s("metamorphosis").chop(32).speed(rand.range(0.5, 1.0)).gain(0.7).room(0.95).size(0.9).lpf(sine.range(600, 3000).slow(5)).lpq(3).pan(perlin.range(0,1).slow(4)).degradeBy(0.3).slow(2).sometimes(fast(4)).distort(0.5).coarse(8)

$: note("<cs5 [e5 fs5] g5 [b5 cs6]>*4").s("piano").attack(0.02).decay(0.2).sustain(0.1).release(0.5).penv(0.3).pattack(0.02).pdecay(0.15).crush(5).drive(0.6).hpf(300).lpf(2500).pan(rand.range(0.2, 0.8)).room(0.5).every(4, (x) => x.speed(2).ply(2)).juxBy(0.4, (x) => x.slide(4).delay(0.3))

$: note("<[cs6 ~ e6] [fs6 ~ gs6] [b6 ~ cs7] [~ fs6 cs6]>").s("sine").attack(0.03).decay(0.4).sustain(0.08).release(1.0).ring(0.9).ringf(tri.range(600, 4000).slow(6)).gain(0.7).pan(sine.range(0.3, 0.9).slow(5)).room(0.9).leslie(4).lrate(6).tremolo(0.4).tremolosync(0.25)

$: note("<[cs3 ~ ~ cs3] [~ e3 ~ ~] [fs3 fs3 ~ ~] [~ ~ gs3 ~]>").s("triangle").fmi(8).fmh(3).fmenv(6).attack(0.01).decay(0.1).sustain(0).release(0.2).lpf(tri.range(200, 1200).slow(5)).lpq(6).gain(0.8).pan(0.5).echo(3, 0.375, 0.4).distort(0.4).cut(3)