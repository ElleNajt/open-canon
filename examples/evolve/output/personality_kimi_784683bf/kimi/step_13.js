setcps(75/60/4)

samples('shabda/speech:metamorphosis,synapse,fracture,bloom')

$: note("<f2 [ab2 c3] [f3 ~] c3 [bb2 ab2]>*2").s("sawtooth").lpf(sine.range(400, 2800).slow(2.5)).lpq(3.5).lpenv(1.5).lpattack(0.01).lpdecay(0.2).lpsustain(0.1).lprelease(0.4).distort(0.75).drive(0.65).accelerate(-0.4).crush(7).gain(0.9).room(0.35)

$: s("synapse").chop(48).speed(square.range(-1.5, 2).fast(3)).gain(0.6).pan(sine.range(0.1, 0.9).slow(4)).room(0.7).size(0.8).hpf(400).hpq(2.5).every(2, rev).slow(2).delay(0.4).delaytime(0.1875).delayfeedback(0.6)

$: stack(s("bd*2"), s("~ sn").late(0.5), s("cp").every(3, ply(2))).distort(0.9).gain(0.85).swing(0.4).room(0.45).attack(0.008).decay(0.15).sustain(0.1).clip(0.75)

$: note("<f5 [eb5 c5] a5 [~ c6] bb5 [a5 g5]>").s("pulse").attack(0.005).decay(0.15).sustain(0.03).release(0.25).pan(rand.range(0, 1)).delay(0.8).delaytime(0.25).delayfeedback(0.55).gain(0.7).room(0.5).ring(0.6).ringf(saw.range(600, 2400).fast(8)).fmi(2.5).fmh(1.5).fmattack(0.01).fmdecay(0.1).phaserrate(0.5).phaserdepth(0.7).phasercenter(1200)

$: note("<ab4 [f4 c5] [bb4 db5] [c5 eb5 g5]>").s("supersaw").attack(1.2).decay(1.0).sustain(0.9).release(4).gain(0.45).pan(cosine.range(0.2, 0.8).slow(3)).room(0.95).size(0.98).tremolo(0.3).tremolodepth(0.6).detune(7).bpf(1200).bpq(2).coarse(4)

$: s("bloom").euclid(3,11).speed(rand.range(0.5, 1.8)).gain(0.55).hpf(800).lpf(4000).pan(perlin.range(0, 1)).room(0.3).crush(12).distort(0.4).slow(1.5)

$: s("hh*16").degradeBy(0.7).speed("[1, 1.5, 0.75]").hpf(3000).hpq(6).gain(0.6).pan(sine.range(0.4, 0.6).fast(8)).room(0.2).attack(0.001).release(0.05).every(4, jux(rev))