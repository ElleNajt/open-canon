setcps(98/60/4)
samples('shabda/speech:stru_del,e_volve,gro_ove,min_or')

$: note("[g2*4 bb2 g2 ab2 c3] [c3*3 d3 eb3 f3 g3] [g3*3 ab3 bb3 c4] ~".every(4,rev).every(16,x=>x.transpose(5)).every(64,x=>x.add(12)))
.slow(2)
.sound("pulse")
.lpf(perlin.range(60,1000).slow(4))
.gain(0.6)
.room(0.25)

$: note("g4 ab4 [e4*4 d4 c4] [b3*3 c4 d4 eb4] [g3*4 fs3 f3 e3] eb3 d3 c3 ~".every(8,x=>x.sometimes(rev)))
.slow(2)
.sound("sawtooth")
.jux(rev)
.delay(0.3)
.distort(0.22)
.phaser(0.4)

$: note("d5 eb5 [fs5*3 g5 a5] [b5*3 a5 g5 fs5] [fs5*4 e5 d5] d5 c5 bb4*3 ~".every(16,x=>x.transpose(-2)))
.slow(2)
.sound("piano")
.gain(0.4)
.attack(0.01)
.decay(0.2)
.room(0.2)

$: stack(
  euclid(3,8,"bd*2"),
  euclid(4,16,"sn cp?"),
  euclid(5,16,"~ cp mt?"),
  euclid(10,16,"hh*2? oh ~ rd?"),
  euclid(2,8,"cb?")
).slow(2)
.gain(0.35)
.hpf(perlin.range(120,280).slow(4))
.room(0.35)
.swing(0.1)

$: s("~ [e_volve*4 stru_del*2] [gro_ove*3 min_or e_volve]? , ~ [stru_del gro_ove min_or*2 e_volve]? [min_or*2 ~ gro_ove]?".every(16,rev).degradeBy(0.12))
.fast(1.618)
.gain(0.32)
.hpf(1100)
.chop(sine.range(6,28).fast(3))
.speed(perlin.range(0.7,1.3).fast(2))

$: n("[0*4 2 4 5*2,3 5 7*2][2*3 4 7,0 3*2 7]".every(4,rev).every(16,x=>x.transpose(rand.range(5,12))))
.scale("G:minor")
.slow(2)
.sound("supersaw")
.gain(0.3)
.leslie(0.7)
.ring(0.35)