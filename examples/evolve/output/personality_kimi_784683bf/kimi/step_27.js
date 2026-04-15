setcps(60/60/4)

$: note("<c2 [f2 ~] [ab2 ~] [eb2 ~]>*2").s("supersaw").lpf(sine.range(200, 900).slow(5)).lpq(6).lpenv(6).lpattack(0.03).lpdecay(0.3).lpsustain(0.08).lprelease(0.5).distort(0.75).drive(0.8).crush(7).gain(0.85).pan(sine.range(0.2, 0.8).slow(6)).slide(-2).shape(0.5).cut(1)

$: note("<c4 [eb4 ~] [g4 ~] [bb4 c5]>*3").s("triangle").attack(0.01).decay(0.3).sustain(0.1).release(0.6).delay(0.6).delaytime(0.375).delayfeedback(0.5).lpf(2500).lpq(3).pan(cosine.range(0.1, 0.9).slow(7)).gain(0.6)

$: stack(s("bd(3,7)").gain(1.1), s("sd(2,7,2)").gain(0.95), s("hh(5,7)").speed(0.9).gain(0.7), s("cp(1,7,4)").gain(0.75)).attack(0.01).decay(0.1).sustain(0).room(0.5).distort(0.5).shape(0.4).pan(tri.range(0.2, 0.8).slow(3)).sometimesBy(0.3, x=>x.fast(2))

$: note("[c3,eb3,g3,d4]*2").s("sine").attack(3).release(8).sustain(0.9).lpf(perlin.range(300, 900).slow(12)).lpq(1.5).lpenv(0.6).room(0.9).size(0.95).pan(sine.range(0, 1).slow(10)).coarse(4).shape(0.3).gain(0.35).slow(2)

$: note("<c7 [bb6 ~] [ab6 ~] [g6 f6]>*4").s("pulse").attack(0.02).decay(0.2).sustain(0).release(0.15).crush(4).coarse(8).lpf(saw.range(3000, 7000).fast(4)).lpq(7).distort(0.85).drive(0.75).pan(rand.range(0.2, 0.8)).gain(0.55).cut(5).room(0.3)

$: note("<g5 [eb6 ~] [c6 ~] g6>*6").s("sine").attack(0.05).decay(0.5).sustain(0.15).release(2).ring(0.9).ringf(sine.range(600, 2400).slow(8)).gain(0.45).pan(tri.range(0.1, 0.9).slow(5)).room(0.8).leslie(1.5).lrate(3).phaser(0.3).phaserdepth(0.9).fast(1.5)

$: note("<c2 [c2 ~] [f2 ~] [ab2 ~]>*4").s("triangle").fmi(12).fmh(3.5).fmenv(6).attack(0.005).decay(0.1).sustain(0).release(0.2).lpf(saw.range(400, 2000).slow(3)).lpq(5).gain(0.8).echo(2, 0.333, 0.4).distort(0.6).cut(3).shape(0.4).slow(2)