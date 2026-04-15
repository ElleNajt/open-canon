setcps(128/60/4)
samples('shabda/speech:stru_del,e_volve,gro_ove,min_or,strudel,live,code,ai,per_so,nal_i_ty,gen_erate,mus_ic')

$: note("[g1*4 bb1 g1 ab1 c2 eb2] [c2*3 d2 eb2 f2 g2 bb2] [g2*3 ab2 bb2 c3 eb3] ~".every(4,rev).every(16,x=>x.transpose(7)).every(64,x=>x.octave(1)).every(128,x=>x.rev()).every(256,x=>x.transpose(-12)).every(512,x=>x.add(12)).every(1024,x=>x.ply(2)).every(2048,x=>x.scale("G:minor")))
.slow(1.618)
.sound("pulse")
.lpf(sine.range(50,1100).slow(5).mul(0.618))
.vowel("a e i o u".slow(6))
.gain(0.85)
.detune(perlin.range(-8,8).slow(8))

$: note("g4 ab4 [e4*4 d4 c4 bb3] [b3*3 c4 d4 eb4 f4] [g3*4 fs3 f3 e3 d3] eb3 d3 c3 ~".every(8,x=>x.sometimesBy(0.4,rev)).every(32,x=>x.add(7)).every(64,x=>x.transpose(5)).every(128,x=>x.rev()).every(256,x=>x.ply(2)))
.slow(1.618)
.sound("sawtooth")
.juxBy(0.6,rev)
.lpf(sine.range(300,2500).slow(3).mul(0.618))
.gain(0.55)
.delay(0.25)

$: note("d5 eb5 [fs5*3 g5 a5 b5] [b5*3 a5 g5 fs5 e5] [fs5*4 e5 d5 c5] d5 c5 bb4 ab4 ~".every(16,x=>x.transpose(rand.range(-1,2))).every(48,x=>x.ply(2)).every(96,rev).every(192,x=>x.add(12)).every(384,x=>x.rev()).every(768,x=>x.add(-7)))
.slow(1.618)
.sound("piano")
.gain(0.5)
.tremolo(tri.range(0.2,0.75).slow(1.618))
.pan(sine.range(0.15,0.85).slow(5))
.room(0.2)

$: stack(
  euclid(3,8,"bd*2"),
  euclid(2,16,"sn [cp ~ cp]?"),
  euclid(4,16,"~ [mt? ht] [cp rd]?"),
  euclid(6,16,"hh*2? [oh ~ ~ rd]?"),
  euclid(3,8,"~ cb? rd")
).slow(2.618)
.gain(0.6)
.hpf(sine.range(120,450).slow(3))
.swing(perlin.range(0.15,0.3).slow(4))
.compressor("0.4:4:0.25:0.01:0.15")
.distort(0.15)

$: s("~ [strudel*2 ai*4 live*2 code*2 gen_erate]? [e_volve gro_ove min_or strudel per_so] , ~ [nal_i_ty*2 gro_ove*2 ai strudel live mus_ic]? [code*2 ai e_volve gen_erate ~]?".every(16,rev).every(32,x=>x.degradeBy(0.15)).every(64,x=>x.speed(1.2)).every(128,x=>x.chop(32)).every(256,x=>x.rev()).every(512,x=>x.fast(1.2)).every(1024,x=>x.speed(0.8)))
.fast(1.618)
.gain(0.75)
.chop(perlin.range(8,28).fast(2.618))
.speed(sine.range(0.75,1.45).fast(1.618))
.room(0.35)
.phaser(0.4)

$: n("[0*3 2 4*2,3 5*2 7][2*4 4 7,0*2 3 7*2 9][4*3 5 7*2,7 9 11]".every(4,rev).every(16,x=>x.transpose(rand.range(4,9))).every(64,x=>x.scale("G:minor")).every(128,x=>x.ply(3)).every(256,x=>x.scale("C:phrygian")).every(512,x=>x.add(7)))
.slow(1.618)
.sound("supersaw")
.gain(0.4)
.leslie(0.75)
.phaser(sine.range(0.15,0.65).slow(3.236))
.detune(sine.range(-12,12))