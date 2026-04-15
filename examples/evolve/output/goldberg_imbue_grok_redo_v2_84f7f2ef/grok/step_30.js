setcps(162/60/4)
samples('shabda/speech:stru_del,e_volve,gro_ove,min_or,strudel,live,code,ai,per_so,nal_i_ty,gen_erate,mus_ic')

$: note("[g1*4 bb1 g1 ab1 c2 eb2 d2]*2 [c2 d2 eb2 f2 g2 bb2 c3 eb3]*2 [g2*3 ab2 bb2 c3 eb3 d3 c3 bb2] ~".every(5,rev).every(16,x=>x.transpose(rand.range(0,12))).every(32,x=>x.degradeBy(0.15)).every(64,x=>x.octave(-1)).every(128,x=>x.rev()).every(256,x=>x.transpose(-7)).every(512,x=>x.add(5)).every(1024,x=>x.ply(3)).every(2048,x=>x.scale("G:phrygian")).every(4096,x=>x.voicing()).every(8192,x=>x.arp("up down random")))
.slow(1.618)
.sound("pulse")
.lpf(perlin.range(80,1800).slow(1.618))
.gain(0.75)
.room(sine.range(0.2,0.5).slow(6))

$: note("g4 [ab4 a4 bb4 a4] [e4*3 d4 c4 bb3 ab3 g3] [b3*3 c4 d4 eb4 f4 g4 ab4 a4] [g3*5 fs3 f3 e3 d3 eb3 d3] c3 bb2 ab2 ~".every(13,x=>x.sometimesBy(0.4,rev)).every(34,x=>x.add(7)).every(64,x=>x.transpose(9)).every(128,x=>x.rev()).every(256,x=>x.ply(4)).every(512,x=>x.degradeBy(0.15)).every(1024,x=>x.scale("Bb:minor")))
.slow(1.618)
.sound("sawtooth")
.juxBy(0.618,x=>x.rev())
.lpf(sine.range(120,3000).slow(4))
.gain(0.7)

$: note("d5 eb5 fs5 [g5*3 a5 b5 c6 d6 eb6] [b5*4 a5 g5 fs5 e5 d5 eb5 d5] [fs5*4 e5 d5 c5 bb4 ab4 g4] d5 c5 bb4 ab4 g4 fs4 e4 d4 ~".every(17,x=>x.transpose(rand.range(-5,7))).every(51,x=>x.ply(3)).every(102,rev).every(192,x=>x.add(12)).every(384,x=>x.rev()).every(768,x=>x.add(-7)).every(1536,x=>x.chord("diminished")))
.slow(1.618)
.sound("piano")
.gain(0.65)
.tremolo(tri.range(0.3,0.85).slow(4))
.leslie(sine.range(0.5,1.8).slow(2.618))

$: stack(
  euclid(8,19,"bd*4 [~ bd bd bd]"),
  euclid(3,19,"sn [cp cp ~ sn] [sn ~ sn]"),
  euclid(10,19,"~ [ht*2 mt lt] [oh rd*2 oh ~]"),
  euclid(7,19,"hh*8 [oh*2 rd hh oh rd]"),
  euclid(5,11,"cb ~ [rd cb ~]")
).slow(2.618)
.gain(0.82)
.hpf(sine.range(120,800).slow(4))
.crush(perlin.range(4,12).slow(2))
.swing(0.1)

$: s("[strudel*2 live*2 code*2 ai*4]? [e_volve*2 gen_erate mus_ic*3] [gro_ove*2 per_so nal_i_ty] [min_or*2 strudel ai] [code live gen_erate mus_ic e_volve] ~".every(11,rev).every(37,x=>x.degradeBy(0.25)).every(64,x=>x.speed(1.2)).every(128,x=>x.chop(64)).every(256,x=>x.rev()).every(512,x=>x.fast(2.618)).every(1024,x=>x.speed(0.85)).every(2048,x=>x.stretch(2.618)))
.fast(1.618)
.gain(0.85)
.crush(perlin.range(6,16).fast(3))
.speed(sine.range(0.75,1.6).fast(2))
.vowel("e i o a u".slow(4))

$: n("[0*4 2*3,3*3 5*3 7][2*5 4*3 7,0*4 3*3 7*3 9][4*4 5*3 7*3,7*3 9 11*3 12] ~".every(7,rev).every(19,x=>x.transpose(rand.range(0,14))).every(64,x=>x.scale("G:minor")).every(128,x=>x.ply(5)).every(256,x=>x.scale("C:minor")).every(512,x=>x.add(12)).every(1024,x=>x.scale("Bb:phrygian")).every(2048,x=>x.voicing()))
.slow(1.618)
.sound("supersaw")
.gain(0.7)
.phaser(sine.range(0.4,1.1).slow(4))
.fmi(sine.range(0.4,2.2).slow(6))