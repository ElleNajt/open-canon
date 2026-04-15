setcps(65/60/4)

$: note("<c2 [f2 ~] [ab2 ~] [eb2 ~]>*2").s("supersaw").lpf(sine.range(200, 900).slow(4)).lpq(7).lpenv(5).lpattack(0.08).lpdecay(0.15).lpsustain(0.02).lprelease(0.3).distort(0.95).drive(0.8).crush(5).gain(0.85).pan(sine.range(0, 1).slow(3)).slide(-2).shape(0.7).cut(1).decay(0.15).sustain(0).hpf(40)

$: note("<c5 [eb5 ~] [g5 ~] [ab5 c6]>*3").s("square").attack(0.01).decay(0.15).sustain(0.1).release(0.6).delay(0.6).delaytime(0.375).delayfeedback(0.7).lpf(saw.range(800, 2400).slow(5)).lpq(5).pan(cosine.range(0.1, 0.9).slow(6)).tremolo(0.4).tremolosync(6).gain(0.75)

$: stack(s("bd(3,13)").gain(1.0), s("sd(4,13,5)").gain(0.9), s("hh(9,13)").speed(rand.range(0.9, 1.1)).gain(0.65), s("cp(3,13,7)").gain(0.85)).attack(0.005).decay(0.06).sustain(0).room(0.7).size(0.8).distort(0.4).shape(0.6).pan(tri.range(0.2, 0.8).slow(4)).swing(0.15).every(3, x=>x.fast(2))

$: note("[c3,f#3,c4,f#4,g4]*3").s("piano").attack(2).release(4).sustain(0.6).lpf(perlin.range(300, 1000).slow(12)).lpq(2).lpenv(0.6).room(0.9).size(0.95).pan(sine.range(0.2, 0.8).slow(8)).shape(0.3).gain(0.5).slow(1.5).degradeBy(0.1)

$: note("[c5 eb5 g5 bb5]*8").s("pulse").attack(0.005).decay(0.08).sustain(0).release(0.1).lpf(sine.range(1000, 6000).fast(8)).lpq(6).distort(0.3).gain(0.4).pan(rand.range(0.2, 0.8)).fast(4).every(4, x=>x.rev()).bpf(1200).bpq(4)

$: note("<ab4 [f4 ~] [c5 ~] [eb5 f5]>*4").s("sine").attack(0.1).decay(0.8).sustain(0.15).release(4).ring(0.8).ringf(tri.range(300, 1500).slow(10)).gain(0.45).pan(tri.range(0.3, 0.7).slow(6)).room(0.8).vowel("a e i").phaser(0.8).phaserdepth(0.6).slow(2)

$: note("<c2 [c2 ~] [f2 ~] [g2 ~]>*4").s("triangle").fmi(24).fmh(7).fmenv(10).attack(0.005).decay(0.2).sustain(0).release(0.4).lpf(saw.range(400, 2500).slow(3)).lpq(8).gain(0.8).echo(4, 0.1875, 0.4).distort(0.8).cut(3).shape(0.6).hpf(80)