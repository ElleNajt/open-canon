setcps(144/60/4)
samples('shabda/speech:stru_del,e_volve,gro_ove,min_or,strudel,live,code,ai,per_so,nal_i_ty,gen_erate,mus_ic')

$: note("[g1*4 bb1 g1 ab1 c2 eb2 d2]*2 [c2*2 d2 eb2 f2 g2 bb2 c3 eb3] [g2*3 ab2 bb2 c3 eb3 d3 c3] ~".every(5,rev).every(16,x=>x.transpose(rand.range(3,12))).every(64,x=>x.octave(1)).every(128,x=>x.rev()).every(256,x=>x.transpose(-7)).every(512,x=>x.add(9)).every(1024,x=>x.ply(3)).every(2048,x=>x.scale("G:minor")).every(4096,x=>x.voicing()).every(8192,x=>x.arp("random")))
.slow(1.618)
.sound("pulse")
.lpf(perlin.range(100,1600).slow(4))
.gain(0.75)
.pan(sine.range(0.2,0.8).slow(12))

$: note("g4 [ab4 a4 bb4] [e4*3 d4 c4 bb3 ab3] [b3*2 c4 d4 eb4 f4 g4 ab4] [g3*4 fs3 f3 e3 d3 eb3 d3] c3 bb2 ~".every(8,x=>x.sometimesBy(0.4,rev)).every(32,x=>x.add(7)).every(64,x=>x.transpose(9)).every(128,x=>x.rev()).every(256,x=>x.ply(4)).every(512,x=>x.degradeBy(0.15)).every(1024,x=>x.scale("Bb:phrygian")))
.slow(1.618)
.sound("sawtooth")
.juxBy(0.618,x=>x.rev())
.lpf(sine.range(100,3400).slow(6))
.gain(0.7)

$: note("d5 eb5 fs5 [g5*2 a5 b5 c6 d6] [b5*3 a5 g5 fs5 e5 d5 eb5] [fs5*4 e5 d5 c5 bb4 ab4] d5 c5 bb4 ab4 g4 fs4 ~".every(16,x=>x.transpose(rand.range(-5,7))).every(48,x=>x.ply(3)).every(96,rev).every(192,x=>x.add(12)).every(384,x=>x.rev()).every(768,x=>x.add(-9)).every(1536,x=>x.chord("augmented")))
.slow(1.618)
.sound("piano")
.gain(0.68)
.tremolo(tri.range(0.3,0.85).slow(2.618))
.delay(0.25)

$: stack(
  euclid(5,16,"bd*4 [bd ~]"),
  euclid(3,16,"sn [cp ~ cp] [sn ~]"),
  euclid(7,16,"~ [ht mt lt ht] [oh rd ~ oh]"),
  euclid(4,16,"hh*8? [oh ~ rd hh]"),
  euclid(2,8,"cb [rd ~ rd]")
).slow(2.618)
.gain(0.82)
.hpf(sine.range(120,800).slow(4))
.swing(perlin.range(0.25,0.55).slow(4))
.room(0.4)

$: s("[ai*8 strudel live] [code gen_erate*4 mus_ic] [e_volve*2 gro_ove] [per_so nal_i_ty min_or strudel]*2 [ai*2 code live gen_erate]? ~".every(12,rev).every(32,x=>x.degradeBy(0.25)).every(64,x=>x.speed(1.2)).every(128,x=>x.chop(64)).every(256,x=>x.rev()).every(512,x=>x.fast(2.618)).every(1024,x=>x.speed(0.9)).every(2048,x=>x.stretch(2.618)))
.fast(1.618)
.gain(0.85)
.chop(perlin.range(16,64).fast(3))
.speed(sine.range(0.75,1.6).fast(2.618))
.vowel("e i o a u".slow(4))

$: n("[0*4 2 4*3,3 5*3 7][2*6 4 7,0*2 3 7*3 9][4*4 5 7*3,7 9 11 12] ~".every(5,rev).every(16,x=>x.transpose(rand.range(2,13))).every(64,x=>x.scale("G:minor")).every(128,x=>x.ply(5)).every(256,x=>x.scale("C:phrygian")).every(512,x=>x.add(7)).every(1024,x=>x.scale("Bb:minor")).every(2048,x=>x.voicing()))
.slow(1.618)
.sound("supersaw")
.gain(0.65)
.phaser(sine.range(0.4,1.0).slow(4))
.fmi(sine.range(0.4,2.0).slow(6))