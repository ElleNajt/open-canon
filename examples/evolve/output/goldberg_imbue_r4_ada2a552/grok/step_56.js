setcps(152/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove,evolve,bach,variations,spiral,eternal')

$: note("eb4 [g4 bb4 d5 f5] f5 [ab5 c6 eb6 g6] [bb6 d7 f7 ab7]*2?*4 , bb4 [d5 f5 ab5 c6 eb6] [g6 bb6 d7]*2? , g5 [bb5 d6 f6 ab6 c7] [eb7 g7 bb7]*3? , eb6 [g6 bb6 d7 f7] [ab7 c8 eb8]*4?")
  .transpose(perlin.range(-0.8,5.2).slow(1.9))
  .slow(perlin.range(1.1,12))
  .sound("sine")
  .phaser(sine.range(0.1,0.8).slow(2.2))
  .gain(0.42)

$: note("c1 [eb1 g1 bb1 d2] [f2 ab2 c3] [eb3 g3 bb3 d4]*3? [ab1 c2 eb2 g2]*2 , [eb4 g4 bb4 d5] [f5 ab5 c6 eb6]*4? [g1 bb2 d3 f3 ab3 ~]")
  .transpose(sine.range(-1.2,4).slow(2))
  .slow(perlin.range(1.2,11))
  .sound("supersaw")
  .fmi(saw.range(8,28).slow(3))
  .gain(0.35)

$: note("g4 [bb4 d5 f5 ab5] [c6 eb6 g6 bb6] [d7 f7 ab7]*4? , g5 [d6 f6 ab6 c7] [eb7 g7 bb7]*2 , f5 [ab6 c7 eb7 g7] [bb7 d8 f8]*2 [ab8 c9 eb9 ~ ~]")
  .transpose(perlin.range(-1.5,4.5).slow(3.8))
  .slow(perlin.range(1.1,12))
  .sound("pulse")
  .leslie(perlin.range(0.3,1).slow(2.5))
  .gain(0.5)

$: stack(
  s("bd*2 [bd ~ bd]").euclid(8,16).sometimesBy(0.2, rev),
  s("~ [sn cp] [sn ~ cp]").euclid(7,16).fast(perlin.range(1.1,2.1)),
  s("hh*4 ~ [oh*4 hh*2]").euclid(12,16).degradeBy(0.15),
  s("~ hh*8 [oh*2 cp*4 ~]").fast(perlin.range(1.6,3.6)).jux(rev).pan(sine.range(0.3,0.7).slow(3))
)
  .sometimes(rev)
  .slow(perlin.range(1.4,4.8))
  .room(perlin.range(0.6,0.9).slow(3.5))
  .delay(0.4)
  .gain(0.6)

$: s("[goldberg*2 cosmic*3]? [whisper*2 glitch groove] evolve*2 [bach variations*2 spiral ~] , eternal*4? [cosmic glitch*2 ~ evolve bach] [whisper goldberg*3 variations eternal*2 spiral*3 cosmic*4 glitch*2]")
  .slow(perlin.range(1.3,10))
  .speed(perlin.range(-0.5,2.2).slow(1.5))
  .chop(saw.range(12,52).slow(3))
  .phaser(cosine.range(0.3,1.2).slow(2.5))
  .gain(0.65)

$: note("eb1*4 [bb1 eb2 g2] , bb1*4 [g1 bb1 eb2]*2 g1*8 , eb2*4 [g2 bb2 eb3]*4 bb3*8? [eb4 g4 bb4 d5]*2?")
  .transpose(saw.range(-0.9,3).slow(4))
  .slow(perlin.range(1.6,9))
  .sound("square")
  .lpf(tri.range(150,1000).slow(3))
  .gain(0.4)