setcps(72/60/4)

samples('shabda/speech:algorithm,beauty')

$: note("g2*2 [g2 d3] bb2*2 [bb2 f3] c3*2 [c3 g3] d3*2 [d3 a3]")
.sound("sawtooth")
.fast(2)
.lpf(sine.range(400, 1400).slow(3))
.lpq(6)
.lpenv(0.5)
.lpattack(0.01)
.lpdecay(0.1)
.lpsustain(0.2)
.lprelease(0.2)
.gain(0.75)
.room(0.3)

$: s("algorithm*2").chop(16)
.speed("1 1.5 0.75 2".fast(4))
.bpf(tri.range(600, 3000).slow(2))
.bpq(5)
.gain(0.5)
.pan(rand.range(0.2, 0.8))
.delay(0.5)
.delaytime(0.1875)
.delayfeedback(0.6)
.room(0.4)

$: note("<[g4 bb4 d5 f5] [f4 a4 c5 e5] [eb4 g4 bb4 d5] [d4 f4 a4 c5]>")
.sound("piano")
.attack(0.01)
.decay(0.2)
.sustain(0.1)
.release(0.4)
.velocity(sine.range(0.6, 1).slow(4))
.gain(0.65)
.room(0.5)

$: stack(
s("bd(<3 5>,8)"),
s("~ sn:2 ~ sn:2").fast(2),
s("hh*8").gain(0.35),
s("cp*4?").gain(0.6)
)
.gain(0.8)
.shape(0.3)
.pan(saw.range(0.3, 0.7))
.room(0.3)