setcps(108/60/4)
samples('shabda/speech:stru_del,e_volve,gro_ove,min_or,strudel,live,code,ai')

$: note("[g2*4 bb2 g2 ab2 c3] [c3*3 d3 eb3 f3 g3] [g3*3 ab3 bb3 c4] ~".every(4,rev).every(16,x=>x.transpose(5)).every(64,x=>x.octave(1)).every(128,x=>x.transpose(7)))
.slow(1.618)
.sound("pulse")
.lpf(sine.range(80,1400).slow(3))
.gain(0.7)
.detune(sine.range(-30,30).slow(8))

$: note("g4 ab4 [e4*4 d4 c4] [b3*3 c4 d4 eb4] [g3*4 fs3 f3 e3] eb3 d3 c3 ~".every(8,x=>x.sometimesBy(0.3,rev)).every(32,x=>x.add(7)).every(64,x=>x.transpose(12)))
.slow(1.618)
.sound("sawtooth")
.juxBy(0.75,rev)
.vowel("a e i o u")
.gain(0.55)
.phaser(sine.range(0.2,1).slow(3))

$: note("d5 eb5 [fs5*3 g5 a5] [b5*3 a5 g5 fs5] [fs5*4 e5 d5] d5 c5 bb4*3 ~".every(16,x=>x.transpose(-2)).every(48,x=>x.ply(2)).every(96,rev))
.slow(1.618)
.sound("piano")
.gain(0.5)
.tremolo(0.5)
.pan(sine.range(0.1,0.9).slow(5))

$: stack(
  euclid(3,8,"bd*2"),
  euclid(3,16,"sn [cp ~]?"),
  euclid(4,16,"~ [mt? ht] cp?"),
  euclid(9,16,"hh*2? [oh ~ rd]?"),
  euclid(2,8,"~ cb?")
).slow(1.618)
.gain(0.45)
.hpf(perlin.range(100,400).slow(3))
.swing(perlin.range(0.05,0.2).slow(6))
.crush(perlin.range(6,12).slow(2))

$: s("~ [strudel*4 live*2]? [gro_ove*3 code e_volve] , ~ [stru_del gro_ove*2 ai live]? [min_or*3 gro_ove ~]?".every(16,rev).every(32,x=>x.degradeBy(0.25)).every(64,x=>x.speed(1.1)))
.fast(1.618)
.gain(0.45)
.vowel("a e o i u")
.chop(perlin.range(6,20).fast(2))
.speed(sine.range(0.8,1.3).fast(1.618))

$: n("[0*4 2 4 5*2,3 5 7*2][2*3 4 7,0 3*2 7]".every(4,rev).every(16,x=>x.transpose(rand.range(3,12))).every(64,x=>x.scale("C:minor")))
.slow(1.618)
.sound("supersaw")
.gain(0.35)
.leslie(0.7)
.fmi(sine.range(0.3,1.4).slow(3))