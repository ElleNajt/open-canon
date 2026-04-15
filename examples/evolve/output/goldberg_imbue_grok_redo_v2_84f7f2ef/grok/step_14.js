setcps(120/60/4)
samples('shabda/speech:stru_del,e_volve,gro_ove,min_or,strudel,live,code,ai')

$: note("[g2*4 bb2 g2 ab2 c3 eb3] [c3*3 d3 eb3 f3 g3 bb3] [g3*3 ab3 bb3 c4 eb4] ~".every(4,rev).every(16,x=>x.transpose(5)).every(64,x=>x.octave(1)).every(128,x=>x.transpose(12)))
.slow(1.618)
.sound("pulse")
.lpf(sine.range(100,1600).slow(4))
.gain(0.75)
.room(0.4)

$: note("g4 ab4 [e4*4 d4 c4 bb3] [b3*3 c4 d4 eb4 f4] [g3*4 fs3 f3 e3 d3] eb3 d3 c3 ~".every(8,x=>x.sometimesBy(0.4,rev)).every(32,x=>x.add(7)).every(64,x=>x.transpose(12)))
.slow(1.618)
.sound("sawtooth")
.juxBy(0.65,rev)
.vowel("a e i o u")
.gain(0.6)
.delay(0.25)

$: note("d5 eb5 [fs5*3 g5 a5 b5] [b5*3 a5 g5 fs5 e5] [fs5*4 e5 d5 c5] d5 c5 bb4 ab4 ~".every(16,x=>x.transpose(-1)).every(48,x=>x.ply(2)).every(96,rev))
.slow(1.618)
.sound("piano")
.gain(0.5)
.tremolo(0.6)
.pan(sine.range(0,1).slow(4))

$: stack(
  euclid(3,8,"bd*2"),
  euclid(3,16,"sn [cp ~ cp]?"),
  euclid(4,16,"~ [mt? ht] [cp rd]?"),
  euclid(9,16,"hh*2? [oh ~ ~ rd]?"),
  euclid(2,8,"~ cb? ~")
).slow(1.618)
.gain(0.5)
.hpf(perlin.range(120,450).slow(3))
.swing(perlin.range(0.08,0.22).slow(5))
.room(0.3)

$: s("~ [ai*4 strudel*3]? [gro_ove*2 e_volve live] , ~ [code*2 gro_ove ai stru_del]? [min_or*3 live ~ code]?".every(16,rev).every(32,x=>x.degradeBy(0.3)).every(64,x=>x.speed(1.15)))
.fast(1.618)
.gain(0.5)
.chop(perlin.range(8,22).fast(3))
.speed(sine.range(0.75,1.35).fast(1.618))
.distort(0.2)

$: n("[0*4 2 4 5*2,3 5 7*2][2*3 4 7,0 3*2 7 9]".every(4,rev).every(16,x=>x.transpose(rand.range(4,13))).every(64,x=>x.scale("C:dorian")))
.slow(1.618)
.sound("supersaw")
.gain(0.4)
.leslie(0.8)
.delay(0.3)