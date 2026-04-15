setcps(72/60/4)

$: note("g3 gb3 e3 d3 b2 c3 d3 g2")
.slow(2)
.sound("triangle")
.lpf(sine.range(300,900).slow(4))
.gain(0.5)
.lpq(2)

$: note("g4 gb4 e4 d4 b3 c4 d4 g3")
.slow(2)
.sound("sawtooth")
.gain(0.3)
.pan(0.3)
.room(0.25)

$: note("d5 e5 fs5 g5 b5 a5 g5 fs5")
.slow(2)
.sound("piano")
.gain(0.35)
.attack(0.01)
.release(0.6)

$: stack(
  euclid(3,8,"bd"),
  euclid(2,8,"sn")
).slow(2)
.gain(0.25)
.hpf(100)
.room(0.15)

$: s("hh*8, hh*8?").fast(2)
.gain(0.2)
.hpf(7000)
.tremolo(0.4)
.degradeBy(0.15)

$: n(run(16)).scale("G:major")
.slow(3)
.sound("supersaw")
.gain(0.25)
.phaser(0.3)
.detune(8)