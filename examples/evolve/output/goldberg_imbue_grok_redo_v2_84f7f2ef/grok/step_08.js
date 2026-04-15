setcps(80/60/4)
samples('shabda/speech:stru_del,e_volve,gro_ove,min_or')

$: note("[g2*3 bb2 g2 ab2] [c3*2 d3 eb3 f3] [g3*2 ab3 bb3 ~]").every(4,rev)
.slow(2)
.sound("pulse")
.lpf(perlin.range(60,1000).slow(4))
.gain(0.7)
.room(0.18)

$: note("g4 ab4 [e4*3 d4] [b3*2 c4 d4 eb4] [g3*3 fs3 f3] eb3 d3 ~")
.slow(2)
.sound("sawtooth")
.jux(rev)
.delay(0.2)
.distort(0.2)

$: note("d5 eb5 [fs5*2 g5] [b5*2 a5 g5] [fs5*3 e5] d5 c5*2 ~")
.slow(2)
.sound("piano")
.gain(0.45)
.attack(0.006)
.decay(0.18)
.pan(sine.range(0.25,0.75).slow(4))

$: stack(
  euclid(4,8,"bd"),
  euclid(3,16,"sn? cp"),
  euclid(6,16,"cp? mt"),
  euclid(12,16,"hh? oh? ~ rd?")
).slow(2)
.gain(0.34)
.hpf(perlin.range(80,200).slow(6))
.room(0.28)
.degradeBy(0.1)

$: s("~ [e_volve*3 stru_del] [gro_ove*2 min_or]? , ~ [e_volve gro_ove*4 min_or]?")
.fast(2)
.gain(0.28)
.hpf(800)
.chop(sine.range(12,28).fast(3.5))
.speed(saw.range(0.7,1.3).fast(2.5))

$: n("[0*3 2 4 5,3 5*2 7][2*2 4 7*2,0 3 7*3]".every(4,rev).every(16,transpose(12)))
.scale("G:minor")
.slow(2)
.sound("supersaw")
.gain(0.3)
.leslie(0.5)