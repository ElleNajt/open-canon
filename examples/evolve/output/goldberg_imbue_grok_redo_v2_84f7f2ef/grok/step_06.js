setcps(78/60/4)
samples('shabda/speech:stru_del,e_volve,gro_ove,min_or')

$: note("[g2*4 bb2 g2] ab2*2 [c3 d3 e3] [g3 ab3*2 ~]")
.slow(2)
.sound("pulse")
.lpf(perlin.range(80,1100).slow(6))
.gain(0.65)
.trem(0.4)

$: note("g4 ab4 [e4*2 d4] [b3*2 c4 d4] [g3*3 fs3] eb3 ~")
.slow(2)
.sound("sawtooth")
.jux(rev)
.delay(0.2)
.phaser(0.3)

$: note("d5 eb5 [fs5 g5*2] [b5 a5] [g5 fs5*2 e5] d5 ~")
.slow(2)
.sound("piano")
.gain(0.4)
.attack(0.005)
.decay(0.25)

$: stack(
  euclid(3,8,"bd"),
  euclid(2,16,"sn cp?"),
  euclid(4,16,"cp? mt?"),
  euclid(10,16,"hh? oh rd?")
).slow(2)
.gain(0.3)
.hpf(120)
.room(0.22)
.swing(0.15)

$: s("~ [e_volve*2 gro_ove min_or]? , [stru_del*2 gro_ove*4]?")
.fast(2)
.gain(0.28)
.hpf(1000)
.chop(28)
.speed(sine.range(0.8,1.2).fast(3))

$: n("[0*2 2 4,3 5 7][2*2 4 7,0 3*2 7]".every(4,rev))
.scale("G:minor")
.slow(2)
.sound("supersaw")
.gain(0.26)
.leslie(0.45)