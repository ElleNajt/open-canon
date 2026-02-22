setcps(152/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove,evolve,bach,variations,spiral,eternal')

$: note("[eb4 g4 bb4 d5 f5 [c6 eb6 g6 bb6]?]*4 , [bb4 d5 f5 ab5 c6 eb6 g6 bb6]*2? , [g5 d6 f6 bb6 c7 eb7 g7 bb7]*3? , [eb6 g6 bb6 d7 f7 ab7 c8 eb8 ~ g8]*4?")
  .transpose(perlin.range(-1,2).slow(6))
  .slow(perlin.range(2,14))
  .sound("sine")
  .lpf(cosine.range(300,10000).slow(3))
  .gain(0.6)

$: note("c1 [eb2 g2 bb2 d3 f3 c4 eb4 g4]*4? [bb1 eb2 g2 bb2 d3 f3 ab4 c5 eb5 g5] [eb2 g3 bb3 d4 f4 ab4 c5 eb5 g5 bb5 ~]")
  .transpose(perlin.range(-1,2).slow(6))
  .slow(perlin.range(2,12))
  .sound("supersaw")
  .fm(sine.range(1,25).slow(5))
  .gain(0.55)

$: note("g4 [bb4 d5 f5 ab5 c6 eb6 g6 bb6]*4? , [g5 bb5 d6 f6 ab6 c7 eb7 g7] f5 [g6 bb6 d7 f7 ab7 c8] [g7 bb7 d8 f8 eb8 ~]")
  .transpose(perlin.range(-1,2).slow(6))
  .slow(perlin.range(2,12))
  .sound("pulse")
  .phaser(sine.range(0.2,0.5).slow(4))
  .gain(0.55)

$: stack(
  s("bd*2 [~ bd bd]").euclid(6,16).sometimesBy(0.25, rev),
  s("~ [sn cp sn ~]").euclid(7,16).fast(1.4),
  s("[hh*4 oh*3 ~ hh*6]").euclid(9,16).degradeBy(0.25)
)
  .slow(perlin.range(2,10))
  .room(perlin.range(0.6,0.9).slow(6))
  .leslie(perlin.range(0.4,0.7).slow(5))
  .compressor("0.35:4.5:0.25:0.025:0.22")
  .gain(0.7)

$: s("[hh*5 oh*6 ~ cp*7] [cp*5 hh*9 oh*5 cp*4] , [cp*3 ~ hh*13 oh*7 cp*9]")
  .fast(perlin.range(2,12))
  .juxBy(0.5, rev)
  .pan(sine.range(0.2,0.8).slow(4))
  .room(perlin.range(0.35,0.75).slow(7))
  .gain(0.6)

$: s("[goldberg*3 [cosmic*2 whisper glitch]?*2] [groove*3 evolve*4 [bach*2 variations spiral]] [eternal*4 glitch*5 cosmic groove ~ spiral] [whisper*4 goldberg*2 evolve cosmic [bach variations] eternal*2 spiral ~ glitch*4]")
  .slow(perlin.range(1.5,12))
  .speed(perlin.range(-0.6,3).slow(3))
  .chop(saw.range(16,56).slow(5))
  .crush(perlin.range(6,12).slow(4))
  .gain(0.7)