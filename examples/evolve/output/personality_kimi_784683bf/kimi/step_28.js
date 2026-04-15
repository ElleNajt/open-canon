setcps(60/60/4)

samples('shabda/speech:fragmented,consciousness,drifting')

$: note("<d2 [g2 ~] [bb2 ~] [f2 ~]>*2").s("supersaw").lpf(sine.range(300, 1100).slow(3)).lpq(8).lpenv(4).lpattack(0.05).lpdecay(0.1).lpsustain(0.05).lprelease(0.2).distort(0.9).drive(0.9).crush(6).gain(0.9).pan(sine.range(0.1, 0.9).slow(4)).slide(-1).shape(0.6).cut(1).decay(0.2).sustain(0)

$: note("<g4 [bb4 ~] [d5 ~] [f5 g5]>*3").s("triangle").attack(0.02).decay(0.2).sustain(0.05).release(0.4).delay(0.5).delaytime(0.25).delayfeedback(0.6).lpf(1800).lpq(2).pan(cosine.range(0.2, 0.8).slow(5)).gain(0.7)

$: stack(s("bd(5,11)").gain(1.0), s("sd(3,11,3)").gain(0.9), s("hh(7,11)").speed(0.95).gain(0.6), s("cp(2,11,6)").gain(0.8)).attack(0.005).decay(0.08).sustain(0).room(0.6).distort(0.3).shape(0.5).pan(tri.range(0.3, 0.7).slow(5)).often(x=>x.fast(2))

$: note("[f3,a3,c4,e4,g4]*2").s("piano").attack(4).release(6).sustain(0.8).lpf(perlin.range(400, 1200).slow(16)).lpq(1).lpenv(0.4).room(0.95).size(0.99).pan(sine.range(0.1, 0.9).slow(12)).coarse(6).shape(0.2).gain(0.4).slow(2)

$: s("fragmented*2? consciousness drifting").chop(16).speed(rand.range(0.7, 1.4)).begin(rand.range(0, 0.5)).lpf(2000).lpq(6).distort(0.4).room(0.7).gain(0.65).pan(rand.range(0, 1)).slow(2).sometimesBy(0.4, x=>x.rev())

$: note("<bb4 [g4 ~] [eb4 ~] [f4 g4]>*4").s("sine").attack(0.08).decay(0.6).sustain(0.2).release(3).ring(0.7).ringf(sine.range(400, 1800).slow(12)).gain(0.5).pan(tri.range(0.2, 0.8).slow(8)).room(0.7).leslie(2).lrate(5).phaser(0.5).phaserdepth(0.7).slow(2)

$: note("<d2 [d2 ~] [g2 ~] [bb2 ~]>*4").s("triangle").fmi(18).fmh(5).fmenv(8).attack(0.01).decay(0.15).sustain(0).release(0.3).lpf(saw.range(600, 3000).slow(2)).lpq(6).gain(0.75).echo(3, 0.25, 0.3).distort(0.7).cut(3).shape(0.5).fast(2)