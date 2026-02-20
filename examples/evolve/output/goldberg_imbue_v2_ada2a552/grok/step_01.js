setcps(72/60/4)

$: note("g3 gb3 e3 d3 b2 c3 d3 g2")
.slow(2)
.sound("triangle")
.gain(0.4)
.lpf(sine.range(400,2000).slow(4))
.room(0.2)

$: stack(
  s("bd").euclid(4,16),
  s("sn").euclid(2,16).gain(0.6),
  s("hh").euclid(12,16).gain(0.25)
)
.gain(0.5)
.room(0.1)

$: n("0 2 3 [5 3] 2 0 ~ , 0 2 3 5 7 [4 3] 0").scale("G:minor")
.slow(2)
.sound("piano")
.gain(0.4)
.phaser(0.2)

$: note("g4 bb4 d5")
.slow(8)
.sound("supersaw")
.gain(0.18)
.attack(1.8)
.pan(0.6)
.room(0.35)