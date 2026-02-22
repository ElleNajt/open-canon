setcps(152/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove,evolve,bach,variations,spiral,eternal')

$: note("eb4 [g4 bb4 d5] f5 [c6 eb6] [g6 bb6 d7]*2?*4 , bb4 [d5 f5 ab5] [c6 eb6 g6 bb6]*2? , g5 [d6 f6 ab6 c7] [eb7 g7 bb7]*3? , eb6 [g6 bb6 d7 f7] [ab7 c8 eb8 g8]*4?")
  .transpose(perlin.range(0,2.5).slow(5))
  .slow(perlin.range(1,12))
  .sound("sine")
  .lpf(sine.range(500,14000).slow(3))
  .vowel("o a i u")
  .gain(0.55)

$: note("c1 [eb2 g2] [bb2 d3 f3] [c4 eb4 g4]*3? [bb1 eb2 g2 bb2 d3 f3 ab4 c5]*2 , [eb5 g5 bb5 d6] [f6 ab6]*4? [eb2 g3 bb3 d4 f4 ~]")
  .transpose(perlin.range(-0.5,2).slow(3))
  .slow(perlin.range(1.5,11))
  .sound("supersaw")
  .fmi(perlin.range(4,24).slow(4))
  .gain(0.35)

$: note("g4 [bb4 d5] [f5 ab5 c6 eb6] [g6 bb6 d7]*4? , g5 [bb5 d6 f6] [ab6 c7 eb7]*2 , f5 [g6 bb6 d7] [f7 ab7 c8]*2 [g7 bb7 d8 ~]")
  .transpose(perlin.range(-0.5,2.5).slow(7))
  .slow(perlin.range(1.2,14))
  .sound("pulse")
  .phaser(perlin.range(0.2,1).slow(3))
  .gain(0.5)

$: stack(
  s("bd [~ bd*2]").euclid(8,16).sometimesBy(0.3, rev),
  s("[~ sn] cp sn").euclid(9,16).fast(perlin.range(1.5,2.5)),
  s("hh*3 [oh*5 ~ hh*2]").euclid(11,16).degradeBy(0.2),
  s("hh*5 [oh*4 cp*3 ~ cp*6]").fast(perlin.range(2,5)).juxBy(0.5, rev).pan(sine.range(0.2,0.8).slow(3))
)
  .slow(perlin.range(1.2,9))
  .room(perlin.range(0.7,1).slow(6))
  .delay(0.4)
  .delayfeedback(0.5)
  .gain(0.6)

$: s("goldberg*3 [cosmic*4 whisper glitch*2]? [groove*3 evolve*4] [bach*2 variations*4] , spiral*5 [eternal cosmic*3 glitch groove*2 ~] [whisper*4 goldberg*2 evolve bach variations eternal*3 spiral ~ glitch*5 cosmic*3]")
  .slow(perlin.range(1.5,14))
  .speed(perlin.range(-0.5,2.5).slow(4))
  .chop(saw.range(12,64).slow(6))
  .striate(perlin.range(4,20).slow(3))
  .gain(0.7)

$: note("eb1*4 [bb1 g1 eb2]*2 eb2*4 [g2 bb2 eb3] , [bb1 g1 eb2*2 bb2]*4?")
  .transpose(perlin.range(0,1).slow(8))
  .slow(perlin.range(2,10))
  .sound("square")
  .hpf(saw.range(150,800).slow(6))
  .detune(perlin.range(-15,25).slow(4))
  .gain(0.4)