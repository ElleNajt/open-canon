setcps(60/60/4)

$: note("<c2 [g2 ~] [eb2 ~] [f2 c2]>*2").s("supersaw").lpf(sine.range(100, 700).slow(6)).lpq(5).lpenv(7).lpattack(0.02).lpdecay(0.25).lpsustain(0.05).lprelease(0.4).distort(0.8).drive(0.85).crush(6).gain(0.9).pan(sine.range(0.3, 0.7).slow(5)).slide(-3).shape(0.6).cut(1)

$: samples('shabda/speech:we_descend,into_darkness'), s("<we_descend*2 into_darkness [we_descend ~]>*4").chop(8).speed(sine.range(0.85, 1.15).slow(7)).lpf(1000).lpq(3).room(0.85).size(0.9).pan(rand.range(0.2, 0.8)).gain(0.75).attack(0.01).release(0.4)

$: stack(s("bd(5,8)").gain(1.05), s("sd(3,8,1)").gain(0.9), s("hh(7,8)").speed(1.1).gain(0.65), s("cp(2,8,2)").gain(0.8)).attack(0.005).decay(0.12).sustain(0).room(0.6).distort(0.65).shape(0.35).pan(sine.range(0.3, 0.7).slow(4)).sometimesBy(0.25, x=>x.fast(2))

$: note("[c3,eb3,g3,bb3]*3").s("sine").attack(2.5).release(6).sustain(0.8).lpf(perlin.range(250, 800).slow(10)).lpq(2).lpenv(0.8).room(0.95).size(0.98).pan(cosine.range(0.1, 0.9).slow(8)).coarse(3).shape(0.25).gain(0.4)

$: note("<c6 eb6 g6 c7>*6").s("pulse").attack(0.01).decay(0.15).sustain(0).release(0.1).crush(5).coarse(12).lpf(saw.range(2000, 8000).fast(3)).lpq(8).distort(0.9).drive(0.8).pan(rand.range(0.3, 0.7)).gain(0.6).cut(5).room(0.4)

$: note("<g5 [eb6 ~] [c6 ~] g6>*4").s("sine").attack(0.04).decay(0.6).sustain(0.1).release(1.5).ring(0.85).ringf(sine.range(700, 2800).slow(5)).gain(0.5).pan(tri.range(0.2, 0.8).slow(6)).room(0.85).leslie(2).lrate(4).phaser(0.5).phaserdepth(0.8)

$: note("<c2 [g2 ~] [c2 ~] [f2 ~]>*2").s("triangle").fmi(9).fmh(2.8).fmenv(5).attack(0.004).decay(0.08).sustain(0).release(0.15).lpf(saw.range(300, 1800).slow(4)).lpq(6).gain(0.85).echo(3, 0.25, 0.35).distort(0.5).cut(3).shape(0.55)