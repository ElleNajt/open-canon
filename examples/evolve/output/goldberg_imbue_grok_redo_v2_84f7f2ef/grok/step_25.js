setcps(144/60/4)
samples('shabda/speech:stru_del,e_volve,gro_ove,min_or,strudel,live,code,ai,per_so,nal_i_ty,gen_erate,mus_ic')

$: note("[g1*4 bb1 g1 ab1 c2 eb2]*2 [c2*2 d2 eb2 f2 g2 bb2 c3] [g2*3 ab2 bb2 c3 eb3 d3] ~".every(4,rev).every(16,x=>x.transpose(rand.range(4,10))).every(64,x=>x.octave(1)).every(128,x=>x.rev()).every(256,x=>x.transpose(-5)).every(512,x=>x.add(7)).every(1024,x=>x.ply(4)).every(2048,x=>x.scale("G:minor")).every(4096,x=>x.voicing()).every(8192,x=>x.arp("down")))
.slow(1.618)
.sound("pulse")
.lpf(perlin.range(80,1400).slow(3))
.gain(0.8)
.detune(sine.range(-15,15).slow(12))

$: note("g4 [ab4 a4] [e4*3 d4 c4 bb3] [b3*2 c4 d4 eb4 f4 g4] [g3*4 fs3 f3 e3 d3 eb3] d3 c3 bb2 ~".every(8,x=>x.sometimesBy(0.3,rev)).every(32,x=>x.add(9)).every(64,x=>x.transpose(7)).every(128,x=>x.rev()).every(256,x=>x.ply(3)).every(512,x=>x.degradeBy(0.2)).every(1024,x=>x.scale("Bb:locrian")))
.slow(1.618)
.sound("sawtooth")
.juxBy(0.618,x=>x.rev())
.lpf(sine.range(120,3200).slow(5))
.gain(0.72)

$: note("d5 eb5 fs5 [g5*2 a5 b5 c6] [b5*3 a5 g5 fs5 e5 d5] [fs5*4 e5 d5 c5 bb4] d5 c5 bb4 ab4 g4 ~".every(16,x=>x.transpose(rand.range(-3,5))).every(48,x=>x.ply(4)).every(96,rev).every(192,x=>x.add(14)).every(384,x=>x.rev()).every(768,x=>x.add(-7)).every(1536,x=>x.chord("diminished")))
.slow(1.618)
.sound("piano")
.gain(0.65)
.tremolo(tri.range(0.2,0.9).slow(1.618))
.room(0.3)

$: stack(
  euclid(4,8,"bd*4"),
  euclid(2,16,"sn [cp cp ~] sn?"),
  euclid(6,16,"~ [ht mt lt] [oh ~ rd rd]"),
  euclid(5,16,"hh*4? [oh rd ~ ~]"),
  euclid(3,8,"cb [rd rd ~]")
).slow(2.618)
.gain(0.8)
.hpf(sine.range(100,700).slow(5))
.swing(perlin.range(0.3,0.5).slow(3))
.room(0.35)

$: s("[ai*8 strudel] [live code gen_erate*4] [mus_ic e_volve*2] [per_so nal_i_ty gro_ove min_or]*3 [ai strudel live code gen_erate]? ~".every(12,rev).every(32,x=>x.degradeBy(0.2)).every(64,x=>x.speed(1.3)).every(128,x=>x.chop(48)).every(256,x=>x.rev()).every(512,x=>x.fast(1.618)).every(1024,x=>x.speed(0.85)).every(2048,x=>x.stretch(1.618)))
.fast(1.618)
.gain(0.9)
.chop(perlin.range(20,48).fast(4))
.speed(sine.range(0.8,1.5).fast(1.618))
.vowel("a e i o u".slow(3))

$: n("[0*4 2 4*3,3 5*3 7][2*6 4 7,0*2 3 7*3 9][4*4 5 7*3,7 9 11 12] ~".every(4,rev).every(16,x=>x.transpose(rand.range(3,11))).every(64,x=>x.scale("G:phrygian")).every(128,x=>x.ply(6)).every(256,x=>x.scale("C:minor")).every(512,x=>x.add(5)).every(1024,x=>x.scale("G:locrian")).every(2048,x=>x.voicing()))
.slow(1.618)
.sound("supersaw")
.gain(0.6)
.phaser(sine.range(0.3,0.9).slow(3))
.fmi(sine.range(0.3,1.8).slow(8))