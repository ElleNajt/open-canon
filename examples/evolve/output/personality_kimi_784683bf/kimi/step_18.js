setcps(72/60/4)

samples('shabda/speech:metamorphosis,synapse,fracture,bloom')

$: note("<d2 [a1 ~] d2 [f2 d2]>*4").s("square").lpf(sine.range(250, 1800).slow(6)).lpq(5).lpenv(4).lpattack(0.02).lpdecay(0.3).lpsustain(0.05).lprelease(0.5).distort(0.85).drive(0.9).crush(4).gain(0.9).room(0.4).pan(0.25).shape(0.5).octave(1)

$: note("<[f5 ~ a5] [c6 ~] [g5 e6] [b5 ~ d6]>*2").s("pulse").fmi(rand.range(2,6)).fmh(2).attack(0.03).decay(0.4).sustain(0.1).release(0.8).lpf(saw.range(600, 4000).slow(3)).lpenv(5).pan(sine.range(0.2, 0.8).slow(2)).room(0.8).size(0.8).delay(0.5).delaytime(0.25).delayfeedback(0.6).vowel("e i").cut(1)

$: stack(s("bd(3,8,<0 2>)").degradeBy(0.2), s("cp(5,8)").gain(0.7), s("[~ oh]*2").speed(0.5).degradeBy(0.5), s("lt").euclid(2,7)).distort(0.6).gain(0.95).attack(0.008).decay(0.1).sustain(0.02).room(0.7).pan(tri.range(0.2, 0.8).slow(4))

$: note("<d3 [f3 a3] [c4 g3] [b2 g3 d4]>").s("piano").attack(0.005).decay(0.08).sustain(0.03).release(0.5).gain(0.65).clip(0.1).pan(cosine.range(0.3, 0.7).slow(3)).room(0.8).size(0.9).lpf(2500).lpq(2).chop(8).striate(4).coarse(4)

$: s("fracture").chop(24).speed(-1.2).gain(0.5).hpf(300).lpf(2000).pan(rand.range(0,1)).room(0.9).size(0.95).crush(5).distort(0.4).slow(6).orbit(3)

$: s("bloom").speed(rand.range(1.5, 2.5)).degradeBy(0.6).begin(0.1).end(0.4).hpf(1000).hpq(4).gain(0.4).pan(rand.range(0.2, 0.8)).room(0.4).every(2, rev).every(3, fast(2)).slow(2)

$: note("<[d6 ~] [f6 a6] [~ g6] [c7 ~ e7]>").s("triangle").attack(0.04).decay(0.2).sustain(0).release(0.6).ring(0.6).ringf(sine.range(1000, 5000).slow(4)).gain(0.55).pan(tri.range(0, 1).slow(3)).room(0.9).delay(0.5).delaytime(0.1875).delayfeedback(0.4).tremolo(0.5).tremolosync(2)

$: note("<d2 [d3 a2] [f3 d2]>*2").s("sawtooth").attack(0.008).decay(0.15).sustain(0).release(0.2).gain(0.75).pan(0.75).phasercenter(800).phasersweep(0.6).phaserdepth(0.5).phaser(tri.range(0.5, 4).slow(3)).lpf(800).drive(0.7).cut(2).hcutoff(100)