setcps(140/60/4)
samples('shabda/speech:stru_del,e_volve,gro_ove,min_or,strudel,live,code,ai,per_so,nal_i_ty,gen_erate,mus_ic')

$: note("[g1*4 bb1 g1 ab1 c2 eb2] [c2*3 d2 eb2 f2 g2 bb2] [g2*3 ab2 bb2 c3 eb3] ~".every(4,rev).every(16,x=>x.transpose(rand.range(4,10))).every(64,x=>x.octave(1)).every(128,x=>x.rev()).every(256,x=>x.transpose(-5)).every(512,x=>x.add(12)).every(1024,x=>x.ply(3)).every(2048,x=>x.scale("G:minor")).every(4096,x=>x.voicing()))
.slow(1.618)
.sound("pulse")
.lpf(perlin.range(80,1400).slow(4))
.gain(0.75)
.room(perlin.range(0.3,0.6).slow(6))

$: note("g4 ab4 [e4*4 d4 c4 bb3] [b3*3 c4 d4 eb4 f4] [g3*4 fs3 f3 e3 d3] eb3 d3 c3 ~".every(8,x=>x.sometimesBy(0.3,rev)).every(32,x=>x.add(5)).every(64,x=>x.transpose(12)).every(128,x=>x.rev()).every(256,x=>x.ply(4)).every(512,x=>x.degradeBy(0.1)))
.slow(1.618)
.sound("sawtooth")
.juxBy(0.618,x=>x.rev())
.lpf(sine.range(180,2800).slow(4).mul(0.7))
.gain(0.7)

$: note("d5 eb5 [fs5*3 g5 a5 b5] [b5*3 a5 g5 fs5 e5] [fs5*4 e5 d5 c5] d5 c5 bb4 ab4 ~".every(16,x=>x.transpose(rand.range(0,5))).every(48,x=>x.ply(4)).every(96,rev).every(192,x=>x.add(12)).every(384,x=>x.rev()).every(768,x=>x.add(-7)))
.slow(1.618)
.sound("piano")
.gain(0.6)
.tremolo(tri.range(0.1,0.8).slow(1.618))
.delay(0.2)

$: stack(
  euclid(3,8,"bd*4"),
  euclid(3,16,"sn [cp ~] sn?"),
  euclid(5,16,"~ [ht mt]? [oh? rd]"),
  euclid(4,16,"hh*4? [oh rd ~]"),
  euclid(4,8,"cb [rd ~]")
).slow(2.618)
.gain(0.75)
.hpf(sine.range(100,500).slow(4))
.swing(perlin.range(0.2,0.4).slow(4))
.room(0.45)

$: s("[strudel*3 ai live] [code gen_erate mus_ic e_volve] [gro_ove*2 per_so nal_i_ty] [min_or strudel live]*2 [ai code gen_erate]? ~".every(12,rev).every(32,x=>x.degradeBy(0.2)).every(64,x=>x.speed(1.3)).every(128,x=>x.chop(32)).every(256,x=>x.rev()).every(512,x=>x.fast(1.618)).every(1024,x=>x.speed(0.85)).every(2048,x=>x.stretch(1.2)))
.fast(1.618)
.gain(0.85)
.chop(perlin.range(12,32).fast(3))
.speed(sine.range(0.8,1.5).fast(1.618))
.room(sine.range(0.4,0.75).slow(3))

$: n("[0*4 2 4*3,3 5*3 7][2*5 4 7,0*3 3 7*3 9][4*4 5 7*3,7 9 11]".every(4,rev).every(16,x=>x.transpose(rand.range(3,11))).every(64,x=>x.scale("G:minor")).every(128,x=>x.ply(5)).every(256,x=>x.scale("C:phrygian")).every(512,x=>x.add(7)).every(1024,x=>x.scale("G:dorian")))
.slow(1.618)
.sound("supersaw")
.gain(0.55)
.phaser(sine.range(0.25,0.75).slow(4))
.detune(perlin.range(-20,20).slow(4))