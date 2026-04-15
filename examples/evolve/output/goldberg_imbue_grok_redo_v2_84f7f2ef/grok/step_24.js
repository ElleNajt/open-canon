setcps(140/60/4)
samples('shabda/speech:stru_del,e_volve,gro_ove,min_or,strudel,live,code,ai,per_so,nal_i_ty,gen_erate,mus_ic')

$: note("[g1*4 bb1 g1 ab1 c2 eb2]*2 [c2*2 d2 eb2 f2 g2 bb2 c3] [g2*3 ab2 bb2 c3 eb3 d3] ~".every(4,rev).every(16,x=>x.transpose(rand.range(3,9))).every(64,x=>x.octave(1)).every(128,x=>x.rev()).every(256,x=>x.transpose(-7)).every(512,x=>x.add(12)).every(1024,x=>x.ply(3)).every(2048,x=>x.scale("G:minor")).every(4096,x=>x.voicing()).every(8192,x=>x.arp("up")))
.slow(1.618)
.sound("pulse")
.lpf(perlin.range(60,1200).slow(4))
.gain(0.75)
.fm(perlin.range(0.3,0.8).slow(8))

$: note("g4 [ab4 a4] [e4*3 d4 c4 bb3] [b3*2 c4 d4 eb4 f4 g4] [g3*4 fs3 f3 e3 d3 eb3] d3 c3 bb2 ~".every(8,x=>x.sometimesBy(0.25,rev)).every(32,x=>x.add(7)).every(64,x=>x.transpose(12)).every(128,x=>x.rev()).every(256,x=>x.ply(4)).every(512,x=>x.degradeBy(0.15)).every(1024,x=>x.scale("Bb:minor")))
.slow(1.618)
.sound("sawtooth")
.juxBy(0.618,x=>x.rev())
.lpf(sine.range(150,3000).slow(4).mul(0.7))
.gain(0.7)

$: note("d5 eb5 fs5 [g5*2 a5 b5 c6] [b5*3 a5 g5 fs5 e5 d5] [fs5*4 e5 d5 c5 bb4] d5 c5 bb4 ab4 g4 ~".every(16,x=>x.transpose(rand.range(-2,6))).every(48,x=>x.ply(3)).every(96,rev).every(192,x=>x.add(12)).every(384,x=>x.rev()).every(768,x=>x.add(-5)).every(1536,x=>x.chord("minor")))
.slow(1.618)
.sound("piano")
.gain(0.6)
.tremolo(tri.range(0.15,0.85).slow(1.618))
.delay(0.25)

$: stack(
  euclid(3,8,"bd*4"),
  euclid(3,16,"sn [cp ~ cp] sn?"),
  euclid(5,16,"~ [ht mt lt] [oh rd ~]?"),
  euclid(4,16,"hh*4? [oh ~ rd]"),
  euclid(4,8,"cb [rd ~ ~]")
).slow(2.618)
.gain(0.75)
.hpf(sine.range(120,600).slow(4))
.swing(perlin.range(0.25,0.45).slow(4))
.distort(perlin.range(0.1,0.3).slow(8))

$: s("[strudel*4 ai] [live code*2] [gen_erate mus_ic*2] [e_volve gro_ove] [per_so nal_i_ty min_or]*2 [strudel ai live code]? ~".every(12,rev).every(32,x=>x.degradeBy(0.15)).every(64,x=>x.speed(1.2)).every(128,x=>x.chop(32)).every(256,x=>x.rev()).every(512,x=>x.fast(1.618)).every(1024,x=>x.speed(0.9)).every(2048,x=>x.stretch(1.3)))
.fast(1.618)
.gain(0.85)
.chop(perlin.range(16,40).fast(3))
.speed(sine.range(0.75,1.6).fast(1.618))
.vowel("a i o e u".slow(2))

$: n("[0*4 2 4*3,3 5*3 7][2*6 4 7,0*2 3 7*3 9][4*4 5 7*3,7 9 11 12] ~".every(4,rev).every(16,x=>x.transpose(rand.range(2,12))).every(64,x=>x.scale("G:minor")).every(128,x=>x.ply(5)).every(256,x=>x.scale("C:phrygian")).every(512,x=>x.add(7)).every(1024,x=>x.scale("G:dorian")).every(2048,x=>x.voicing()))
.slow(1.618)
.sound("supersaw")
.gain(0.55)
.phaser(sine.range(0.2,0.8).slow(4))
.fmi(sine.range(0.2,1.5).slow(6))