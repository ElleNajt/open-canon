setcps(72/60/4)

$: note("<fs1!2 [~ cs2!2] [b1 ~] [fs1 b1] [~ d2]>*1").s("supersaw").lpf(sine.range(80, 600).slow(7)).lpq(6).lpenv(8).lpattack(0.01).lpdecay(0.2).lpsustain(0).lprelease(0.3).distort(0.7).drive(0.9).crush(5).gain(0.85).pan(sine.range(0.3, 0.7).slow(6)).slide(-4).shape(0.5).cut(1)

$: note("<fs3 d3 cs3 b2 gs3>*2").s("square").fmi(12).fmh(0.5).fmenv(8).fmattack(0.05).fmdecay(0.6).attack(0.02).decay(0.4).sustain(0.1).release(0.6).lpf(saw.range(400, 3000).slow(5)).lpenv(12).lpq(8).distort(0.8).drive(0.7).pan(rand.range(0.2, 0.8)).room(0.4).fast(4).cut(2)

$: stack(s("bd(2,8,1)").gain(1.0), s("cp(3,8,2)").gain(0.9), s("rim(5,8)").speed(1.2).gain(0.7), s("oh(1,4)").gain(0.5)).attack(0.005).decay(0.08).sustain(0).room(0.55).distort(0.6).shape(0.3).pan(sine.range(0.2, 0.8).slow(3))

$: note("[fs3,cs4,fs4,b4]*4").s("sawtooth").attack(2).release(5).sustain(0.7).lpf(perlin.range(300, 900).slow(12)).lpq(2.5).lpenv(1).room(0.9).size(0.95).pan(cosine.range(0, 1).slow(9)).coarse(2).shape(0.3).gain(0.45)

$: s("~ [cr*4?] ~ [cr*8]").speed(rand.range(0.5, 2)).crush(4).coarse(8).distort(0.9).shape(0.8).gain(0.4).pan(rand.range(0, 1)).hpf(200).lpf(saw.range(2000, 8000).slow(0.5)).attack(0.001).decay(0.05).room(0.3).sometimesBy(0.4, (x) => x.speed(0.25).rev()).slow(1)

$: note("<[fs5 ~ cs6] [b5 ~ fs6] [a5 ~ cs6] [~ e6 b5]>").s("sine").attack(0.06).decay(0.8).sustain(0.05).release(2).ring(0.8).ringf(sine.range(600, 2500).slow(4)).gain(0.55).pan(tri.range(0.3, 0.9).slow(5)).room(0.9).leslie(1.5).lrate(3).phaser(0.4).phaserdepth(0.9).slow(2)

$: note("<[fs2 ~ fs2 fs2] [~ cs3 ~ cs3] [b2 ~ b2 ~] [~ ~ gs2 gs2]>").s("triangle").fmi(11).fmh(3.1).fmenv(6).attack(0.003).decay(0.06).sustain(0).release(0.1).lpf(saw.range(400, 2000).slow(3)).lpq(7).gain(0.9).echo(3, 0.333, 0.4).distort(0.4).cut(3).shape(0.5)