setcps(152/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove,evolve,bach,variations,spiral,eternal')

$: note("eb4 [g4 bb4 d5] f5 [ab5 c6 eb6] [g6 bb6 d7 f7]*2?*4 , bb4 [d5 f5 ab5 c6] [eb6 g6 bb6 d7]*2? , g5 [bb5 d6 f6 ab6] [c7 eb7 g7]*3? , eb6 [g6 bb6 d7 f7 ab7] [c8 eb8 g8 bb8]*4?")
  .transpose(perlin.range(-0.3,4).slow(3))
  .slow(perlin.range(1.2,14))
  .sound("sine")
  .phaser(sine.range(0.1,0.6).slow(3.5))
  .gain(0.45)

$: note("c1 [eb1 g1 bb1] [d2 f2 ab2] [c3 eb3 g3 bb3]*3? [ab1 c2 eb2 g2 bb2 d3]*2 , [eb4 g4 bb4 d5 f5] [ab5 c6]*4? [eb1 g2 bb2 d3 f3 ~]")
  .transpose(perlin.range(-1.2,3).slow(2.8))
  .slow(perlin.range(1.1,12))
  .sound("supersaw")
  .fmi(saw.range(5,26).slow(2.8))
  .gain(0.32)

$: note("g4 [bb4 d5 f5] [ab5 c6 eb6 g6] [bb6 d7 f7]*4? , g5 [d6 f6 ab6] [c7 eb7 g7]*2 , f5 [ab6 c7 eb7] [g7 bb7 d8 f8]*2 [ab8 c9 ~ ~]")
  .transpose(perlin.range(-1.5,3.5).slow(5.5))
  .slow(perlin.range(1.3,13))
  .sound("pulse")
  .tremolo(sine.range(0.2,0.7).slow(4))
  .gain(0.48)

$: stack(
  s("bd*2 [bd ~]").euclid(7,16).sometimesBy(0.3, rev),
  s("~ sn cp [sn ~]").euclid(6,16).fast(perlin.range(1.3,2.3)),
  s("hh*4 ~ [oh*3 hh]").euclid(12,16).degradeBy(0.2),
  s("~ hh*8 [oh cp*4 ~]").fast(perlin.range(1.9,4)).juxBy(0.65, rev).pan(cosine.range(0.25,0.75).slow(3))
)
  .slow(perlin.range(1.6,6.5))
  .room(rand.range(0.65,0.98).slow(3.5))
  .delay(perlin.range(0.25,0.55))
  .crush(perlin.range(3,11).slow(7))
  .gain(0.62)

$: s("goldberg*3 [cosmic*4 whisper glitch*2]? [groove*3 evolve*4] [bach*2 variations*4] , spiral*5 [eternal cosmic*3 glitch groove*2 ~] [whisper*4 goldberg*2 evolve bach variations eternal*3 spiral ~ glitch*5 cosmic*3]")
  .slow(perlin.range(1.3,11))
  .speed(rand.range(-0.4,2.4).slow(2.2))
  .chop(saw.range(12,52).slow(4.5))
  .begin(perlin.range(0,0.65).slow(2.8))
  .gain(0.72)

$: note("eb1*8 , bb1*4 eb1*4 g1*8 , [eb2 bb1 g1]*4 eb2*8 bb2*4? g2*8 eb3*2?")
  .transpose(perlin.range(-0.5,2.2).slow(5.5))
  .slow(perlin.range(1.7,8.5))
  .sound("square")
  .lpf(sine.range(150,750).slow(3.5))
  .gain(0.42)