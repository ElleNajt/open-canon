setcps(102/60/4)
samples('shabda/speech:stru_del,e_volve,gro_ove,min_or')

$: note("[g2*4 bb2 g2 ab2 c3] [c3*3 d3 eb3 f3 g3] [g3*3 ab3 bb3 c4] ~".every(4,rev).every(16,x=>x.transpose(5)).every(64,x=>x.octave(1)).every(128,x=>x.rev()))
.slow(1.618)
.sound("pulse")
.lpf(sine.range(80,1200).slow(3))
.gain(0.65)
.room(0.3)

$: note("g4 ab4 [e4*4 d4 c4] [b3*3 c4 d4 eb4] [g3*4 fs3 f3 e3] eb3 d3 c3 ~".every(8,x=>x.sometimes(rev)).every(32,x=>x.add(7)))
.slow(1.618)
.sound("sawtooth")
.juxBy(0.8,rev)
.delay(0.25)
.distort(0.18)
.vowel("a e i o")

$: note("d5 eb5 [fs5*3 g5 a5] [b5*3 a5 g5 fs5] [fs5*4 e5 d5] d5 c5 bb4*3 ~".every(16,x=>x.transpose(-2)).every(48,x=>x.ply(2)))
.slow(1.618)
.sound("piano")
.gain(0.45)
.tremolo(0.4)
.pan(sine.range(0.2,0.8).slow(6))

$: stack(
  euclid(3,8,"bd*2"),
  euclid(4,16,"sn cp?"),
  euclid(5,16,"~ cp mt?"),
  euclid(10,16,"hh*2? oh ~ rd?"),
  euclid(2,8,"cb?")
).slow(1.618)
.gain(0.4)
.hpf(perlin.range(100,300).slow(3))
.swing(perlin.range(0.05,0.15).slow(8))

$: s("~ [e_volve*4 stru_del*2] [gro_ove*3 min_or e_volve]? , ~ [stru_del gro_ove min_or*2 e_volve]? [min_or*2 ~ gro_ove]?".every(16,rev).every(32,x=>x.degradeBy(0.2)))
.fast(1.414)
.gain(0.35)
.hpf(1200)
.chop(perlin.range(8,24).fast(2.5))
.speed(sine.range(0.75,1.25).fast(1.618))

$: n("[0*4 2 4 5*2,3 5 7*2][2*3 4 7,0 3*2 7]".every(4,rev).every(16,x=>x.transpose(rand.range(4,14))).every(64,x=>x.scale("Bb:minor")))
.slow(1.618)
.sound("supersaw")
.gain(0.32)
.leslie(0.6)
.fmi(sine.range(0.2,1.2).slow(4))