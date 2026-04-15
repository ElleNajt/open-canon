setcps(161/60/4)
samples('shabda/speech:stru_del,e_volve,gro_ove,min_or,strudel,live,code,ai,per_so,nal_i_ty,gen_erate,mus_ic')

$: note("[g1*4 bb1 g1 ab1 c2 eb2 d2]*2 [c2 d2 eb2 f2 g2 bb2 c3 eb3]*2 [g2*3 ab2 bb2 c3 eb3 d3 c3 bb2] ~".every(7,rev).every(16,x=>x.transpose(rand.range(2,14))).every(64,x=>x.octave(-1)).every(144,x=>x.rev()).every(256,x=>x.transpose(-5)).every(512,x=>x.add(7)).every(1024,x=>x.ply(4)).every(2048,x=>x.scale("G:phrygian")).every(4096,x=>x.voicing()).every(8192,x=>x.arp("up down")))
.slow(1.618)
.sound("pulse")
.lpf(perlin.range(100,2000).slow(1.618))
.gain(0.75)
.room(sine.range(0.15,0.45).slow(8))

$: note("g4 [ab4 a4 bb4 a4] [e4*3 d4 c4 bb3 ab3 g3] [b3*3 c4 d4 eb4 f4 g4 ab4 a4] [g3*5 fs3 f3 e3 d3 eb3 d3] c3 bb2 ab2 ~".every(13,x=>x.sometimesBy(0.35,rev)).every(34,x=>x.add(9)).every(64,x=>x.transpose(7)).every(128,x=>x.rev()).every(256,x=>x.ply(3)).every(512,x=>x.degradeBy(0.2)).every(1024,x=>x.scale("Bb:minor")))
.slow(1.618)
.sound("sawtooth")
.juxBy(0.618,x=>x.rev())
.lpf(sine.range(150,3200).slow(5))
.gain(0.7)

$: note("d5 eb5 fs5 [g5*3 a5 b5 c6 d6 eb6] [b5*4 a5 g5 fs5 e5 d5 eb5 d5] [fs5*4 e5 d5 c5 bb4 ab4 g4] d5 c5 bb4 ab4 g4 fs4 e4 d4 ~".every(17,x=>x.transpose(rand.range(-7,9))).every(51,x=>x.ply(4)).every(102,rev).every(192,x=>x.add(14)).every(384,x=>x.rev()).every(768,x=>x.add(-12)).every(1536,x=>x.chord("augmented")))
.slow(1.618)
.sound("piano")
.gain(0.65)
.tremolo(tri.range(0.4,0.9).slow(3.618))
.leslie(sine.range(0.6,2.0).slow(3))

$: stack(
  euclid(7,17,"bd*4 [~ bd bd bd]"),
  euclid(4,17,"sn [cp cp ~ sn] [sn ~ sn]"),
  euclid(9,17,"~ [ht*2 mt lt] [oh rd*2 oh ~]"),
  euclid(6,17,"hh*8 [oh*2 rd hh oh rd]"),
  euclid(4,9,"cb ~ [rd cb ~]")
).slow(2.618)
.gain(0.82)
.hpf(sine.range(150,900).slow(5))
.crush(perlin.range(3,14).slow(2.5))
.swing(0.08)

$: s("[strudel*3 ai*3 live*3 code*2]? [gen_erate*3 mus_ic*2 e_volve] [gro_ove*3 per_so] [nal_i_ty*3 min_or*2 strudel] [ai*2 code live gen_erate mus_ic] ~".every(11,rev).every(37,x=>x.degradeBy(0.3)).every(64,x=>x.speed(1.3)).every(128,x=>x.chop(128)).every(256,x=>x.rev()).every(512,x=>x.fast(3.618)).every(1024,x=>x.speed(0.8)).every(2048,x=>x.stretch(3.618)))
.fast(1.618)
.gain(0.85)
.crush(perlin.range(5,18).fast(4))
.speed(sine.range(0.7,1.7).fast(2.618))
.vowel("a e i o u".slow(3))

$: n("[0*3 2*4,3*2 5*4 7][2*6 4*2 7,0*3 3*2 7*4 9][4*5 5*2 7*4,7*2 9 11*2 12] ~".every(6,rev).every(17,x=>x.transpose(rand.range(1,15))).every(64,x=>x.scale("G:minor")).every(128,x=>x.ply(6)).every(256,x=>x.scale("C:minor")).every(512,x=>x.add(9)).every(1024,x=>x.scale("Bb:phrygian")).every(2048,x=>x.voicing()))
.slow(1.618)
.sound("supersaw")
.gain(0.7)
.phaser(sine.range(0.3,1.2).slow(5))
.fmi(sine.range(0.3,2.5).slow(5))