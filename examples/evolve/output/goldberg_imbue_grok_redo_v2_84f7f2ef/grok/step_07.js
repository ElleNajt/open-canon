setcps(78/60/4)
samples('shabda/speech:stru_del,e_volve,gro_ove,min_or')

$: note("[g2*4 bb2 g2 ab2] [c3 d3 eb3] [g3 ab3*2 ~]").every(4,rev)
.slow(2)
.sound("pulse")
.lpf(perlin.range(80,1200).slow(5))
.gain(0.7)

$: note("g4 ab4 [e4*2 d4] [b3*2 c4 d4] [g3*3 fs3] eb3 ~")
.slow(2)
.sound("sawtooth")
.jux(rev)
.delay(0.22)
.phaser(sine.range(0.2,0.5).slow(4))

$: note("d5 eb5 [fs5 g5*2] [b5 a5] [g5 fs5*2 e5] d5 ~")
.slow(2)
.sound("piano")
.gain(0.42)
.attack(0.004)
.decay(0.22)
.room(0.12)

$: stack(
  euclid(3,8,"bd"),
  euclid(2,16,"sn? cp?"),
  euclid(4,16,"cp? mt?"),
  euclid(10,16,"hh? oh? rd?")
).slow(2)
.gain(0.32)
.hpf(perlin.range(90,180).slow(8))
.room(0.24)
.swing(0.16)

$: s("~ [e_volve*2 stru_del] [gro_ove*2 min_or]? , [e_volve*4 gro_ove]?")
.fast(2)
.gain(0.3)
.hpf(750)
.chop(sine.range(16,30).fast(4))
.speed(saw.range(0.8,1.2).fast(3))

$: n("[0*2 2 4,3 5 7][2*2 4 7,0 3*2 7]".every(4,rev).every(8,transpose(2)))
.scale("G:minor")
.slow(2)
.sound("supersaw")
.gain(0.28)
.leslie(0.48)