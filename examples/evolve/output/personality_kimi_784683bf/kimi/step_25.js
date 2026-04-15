setcps(72/60/4)

$: note("<d2 [a1 ~] [g1 d2] [~ b1]>*2").s("supersaw").lpf(sine.range(80, 600).slow(7)).lpq(6).lpenv(8).lpattack(0.01).lpdecay(0.2).lpsustain(0).lprelease(0.3).distort(0.7).drive(0.9).crush(5).gain(0.85).pan(sine.range(0.3, 0.7).slow(6)).slide(-4).shape(0.5).cut(1)

$: note("<cs4 e4 gs4 b4 cs5>*2").s("square").fmi(12).fmh(0.5).fmenv(8).fmattack(0.05).fmdecay(0.6).attack(0.02).decay(0.4).sustain(0.1).release(0.6).lpf(saw.range(400, 3000).slow(5)).lpenv(12).lpq(8).distort(0.8).drive(0.7).pan(rand.range(0.2, 0.8)).room(0.4).fast(4).cut(2)

$: stack(s("bd(3,8,2)").gain(1.0), s("cp(5,8)").gain(0.9), s("rim(7,8,3)").speed(1.2).gain(0.7), s("oh(2,8)").gain(0.6)).attack(0.005).decay(0.08).sustain(0).room(0.55).distort(0.6).shape(0.3).pan(sine.range(0.2, 0.8).slow(3)).sometimesBy(0.2, x=>x.fast(2))

$: note("[d3,a3,d4,e4]*4").s("sawtooth").attack(2).release(5).sustain(0.7).lpf(perlin.range(300, 900).slow(12)).lpq(2.5).lpenv(1).room(0.9).size(0.95).pan(cosine.range(0, 1).slow(9)).coarse(2).shape(0.3).gain(0.45)

$: note("<fs5 a5 cs6 e6>*6").s("piano").attack(0.01).decay(0.4).sustain(0.2).release(1.5).lpf(sine.range(1000, 5000).slow(8)).lpq(5).delay(0.6).delaytime(0.375).delayfeedback(0.4).room(0.7).pan(tri.range(0.2, 0.8).slow(4)).gain(0.6).cut(4)

$: note("<fs5 cs6 fs6 gs6>*4").s("sine").attack(0.06).decay(0.8).sustain(0.05).release(2).ring(0.8).ringf(sine.range(600, 2500).slow(4)).gain(0.55).pan(tri.range(0.3, 0.9).slow(5)).room(0.9).leslie(1.5).lrate(3).phaser(0.4).phaserdepth(0.9).slow(2)

$: note("<d2 [g2 ~] [d2 ~] [a1 ~]>*2").s("triangle").fmi(11).fmh(3.1).fmenv(6).attack(0.003).decay(0.06).sustain(0).release(0.1).lpf(saw.range(400, 2000).slow(3)).lpq(7).gain(0.9).echo(3, 0.333, 0.4).distort(0.4).cut(3).shape(0.5)