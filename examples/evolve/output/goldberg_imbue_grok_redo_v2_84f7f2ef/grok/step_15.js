setcps(128/60/4)
samples('shabda/speech:stru_del,e_volve,gro_ove,min_or,strudel,live,code,ai')

$: note("[g2*4 bb2 g2 ab2 c3 eb3] [c3*3 d3 eb3 f3 g3 bb3] [g3*3 ab3 bb3 c4 eb4] ~".every(4,rev).every(16,x=>x.transpose(7)).every(64,x=>x.octave(1)).every(128,x=>x.rev()))
.slow(1.618)
.sound("pulse")
.lpf(sine.range(100,1600).slow(4))
.gain(0.8)
.room(perlin.range(0.3,0.5).slow(8))

$: note("g4 ab4 [e4*4 d4 c4 bb3] [b3*3 c4 d4 eb4 f4] [g3*4 fs3 f3 e3 d3] eb3 d3 c3 ~".every(8,x=>x.sometimesBy(0.5,rev)).every(32,x=>x.add(5)).every(64,x=>x.transpose(7)))
.slow(1.618)
.sound("sawtooth")
.juxBy(0.7,rev)
.vowel("a o i e u")
.gain(0.55)
.room(0.35)

$: note("d5 eb5 [fs5*3 g5 a5 b5] [b5*3 a5 g5 fs5 e5] [fs5*4 e5 d5 c5] d5 c5 bb4 ab4 ~".every(16,x=>x.transpose(rand.range(-2,1))).every(48,x=>x.ply(3)).every(96,rev))
.slow(1.618)
.sound("piano")
.gain(0.5)
.tremolo(saw.range(0.4,0.8).slow(3))
.pan(sine.range(0.2,0.8).slow(3))

$: stack(
  euclid(3,8,"bd*2"),
  euclid(2,16,"sn [cp ~ cp]?"),
  euclid(5,16,"~ [mt? ht] [cp rd]?"),
  euclid(7,16,"hh*2? [oh ~ ~ rd]?"),
  euclid(3,8,"~ cb? ~")
).slow(1.618)
.gain(0.55)
.hpf(sine.range(150,500).slow(4))
.swing(perlin.range(0.1,0.25).slow(4))
.room(0.25)

$: s("~ [ai*3 strudel*4]? [e_volve gro_ove*2 live code] , ~ [stru_del*2 ai min_or gro_ove]? [live*2 code ~ strudel]?".every(16,rev).every(32,x=>x.degradeBy(0.25)).every(64,x=>x.speed(1.2)).every(128,x=>x.chop(32)))
.fast(1.618)
.gain(0.6)
.chop(perlin.range(6,20).fast(2.618))
.speed(sine.range(0.8,1.4).fast(1.618))
.distort(0.15)

$: n("[0*3 2 4*2,3 5*2 7][2*4 4 7,0*2 3 7*2 9]".every(4,rev).every(16,x=>x.transpose(rand.range(3,8))).every(64,x=>x.scale("G:minor")))
.slow(1.618)
.sound("supersaw")
.gain(0.45)
.leslie(0.9)
.delay(0.25)