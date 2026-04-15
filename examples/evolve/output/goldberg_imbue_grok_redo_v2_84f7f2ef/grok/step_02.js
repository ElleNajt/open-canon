setcps(72/60/4)

$: note("g3 ab3 e3 d3 bb2 c3 d3 g2")
.slow(2)
.sound("triangle")
.lpf(tri.range(200,1000).slow(6))
.gain(0.5)
.detune(saw.range(-15,15).slow(12))

$: note("g4 ab4 e4 d4 b3 c4 d4 g3 fs3")
.slow(2)
.sound("sawtooth")
.gain(0.3)
.pan(0.25)
.delay(0.2)

$: note("d5 eb5 fs5 g5 b5 a5 g5 fs5 e5")
.slow(2)
.sound("piano")
.gain(0.35)
.attack(0.005)
.release(0.8)

$: stack(
  euclid(3,8,"bd"),
  euclid(2,8,"sn"),
  euclid(5,16,"cp?")
).slow(2)
.gain(0.25)
.hpf(120)
.room(0.15)
.swing(0.08)

$: s("~hh*8,hh*8?,hh*4").fast(2)
.gain(0.2)
.hpf(6000)
.tremolo(0.5)
.pan(sine.range(0.2,0.8).slow(8))

$: n(run(32)).scale("G:minor")
.slow(4)
.sound("supersaw")
.gain(0.2)
.phaser(sine.range(0.1,0.5))
.detune(12)