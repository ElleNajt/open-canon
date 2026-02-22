setcps(152/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove,evolve,bach,variations,spiral,eternal')

$: note("eb4 [g4 bb4] d5 [f5 c6] [eb6 g6 bb6]*2?*4 , bb4 [d5 f5 ab5] [c6 eb6 g6 bb6]*2? , g5 [d6 f6 bb6] [c7 eb7 g7]*3? , eb6 [g6 bb6 d7] [f7 ab7 c8 eb8 g8 ~]*4?")
  .transpose(perlin.range(-0.5,2).slow(6))
  .slow(perlin.range(1.2,14))
  .sound("sine")
  .lpf(sine.range(400,12000).slow(4))
  .lpq(3)
  .gain(0.5)

$: note("c1 eb2 [g2 bb2 d3] [f3 c4 eb4 g4]*3? [bb1 eb2 g2 bb2 d3 f3 ab4]*2 , [c5 eb5 g5 bb5 d6 f6]*4? [eb2 g3 bb3 d4 f4 ab4 c5 eb5 g5 ~]")
  .transpose(perlin.range(-0.8,1.8).slow(4))
  .slow(perlin.range(1.8,13))
  .sound("supersaw")
  .fmi(perlin.range(2,28).slow(6))
  .gain(0.4)

$: note("g4 bb4 [d5 f5 ab5 c6] [eb6 g6 bb6]*4? , g5 [bb5 d6 f6 ab6] [c7 eb7 g7]*2 f5 [g6 bb6 d7 f7 ab7 c8 g7]*2 [bb7 d8 f8 eb8 ~]")
  .transpose(perlin.range(-1,2.2).slow(9))
  .slow(perlin.range(1.5,15))
  .sound("pulse")
  .phaser(perlin.range(0.3,0.9).slow(2.5))
  .phasersweep(600)
  .gain(0.55)

$: stack(
  s("bd*2 [~ bd*2]").euclid(7,16).sometimesBy(0.25, rev),
  s("[~ sn cp] sn").euclid(8,16).fast(perlin.range(1.2,2.8)),
  s("hh*4 [oh*4 ~] hh*8").euclid(10,16).degradeBy(0.25),
  s("hh*6 oh*5 cp*4 [~ cp*8 oh*3]").fast(perlin.range(1.8,5.5)).juxBy(0.45, rev).pan(sine.range(0.1,0.9).slow(4))
)
  .slow(perlin.range(1.5,10))
  .room(perlin.range(0.6,1).slow(8))
  .delay(0.35)
  .delayfeedback(0.45)
  .gain(0.65)

$: s("goldberg*4 [cosmic*3 whisper*2 glitch]? groove*2 [evolve*5 bach variations*3] , spiral*6 [eternal*4 cosmic glitch groove ~] [whisper*5 goldberg evolve*2 [bach*3 variations] eternal spiral*4 ~ glitch*6 cosmic*2]")
  .slow(perlin.range(1.2,15))
  .speed(perlin.range(-0.7,2.8).slow(5))
  .chop(tri.range(16,80).slow(7))
  .striate(perlin.range(5,22).slow(4))
  .gain(0.75)

$: note("eb1*3 [bb1 g1 eb2*2]*3 , eb2*5 [g2*2 bb2 eb3*2] , [bb1 g1 eb2 bb2]*4?")
  .transpose(perlin.range(-0.3,0.7).slow(10))
  .slow(perlin.range(2.5,11))
  .sound("square")
  .hpf(saw.range(100,900).slow(8))
  .detune(perlin.range(-20,30).slow(3))
  .gain(0.45)