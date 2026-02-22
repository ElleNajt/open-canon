setcps(152/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove,evolve,bach,variations,spiral,eternal')

$: note("eb4 [g4 bb4 d5 f5 eb5] [f5 ab5 c6 eb6 g6] [bb6 d7 f7 ab7 c8]*2?*4 , bb4 [d5 f5 ab5 c6] [eb6 g6 bb6 d7 f7]*2? , g5 [bb5 d6 f6 ab6] [c7 eb7 g7 bb7 d8]*3? , eb6 [g6 bb6 d7 f7 ab7] [c8 eb8 g8]*4?")
  .transpose(perlin.range(-0.5,5.5).slow(2.3))
  .slow(rand.range(1.8,11))
  .sound("sine")
  .phaser(sine.range(0.2,0.7).slow(2.8))
  .gain(0.42)

$: note("c1 [eb1 g1 bb1 d2 f2] [ab2 c3 eb3 g3] [bb3 d4 f4 ab4]*3? [c2 eb2 g2 bb2]*2 , [eb4 g4 bb4 d5 f5] [ab5 c6 eb6 g6 bb6]*4? [d2 f3 ab3 c4 eb4]")
  .transpose(perlin.range(-1,4.2).slow(2.1))
  .slow(tri.range(1.5,10))
  .sound("supersaw")
  .tremolo(perlin.range(0.3,0.8).slow(3.2))
  .gain(0.32)

$: note("g4 [bb4 d5 f5 ab5 c6] [eb6 g6 bb6 d7] [f7 ab7 c8 eb8]*4? , g5 [d6 f6 ab6 c7 eb7] [g7 bb7 d8]*2 , f5 [ab6 c7 eb7 g7 bb7] [d8 f8 ab8 c9]*2 [eb9 g9 bb9 d10 ~]")
  .transpose(sine.range(-1.2,4.8).slow(3.2))
  .slow(saw.range(1.2,11))
  .sound("pulse")
  .leslie(perlin.range(0.3,1).slow(2.8))
  .gain(0.5)

$: stack(
  s("bd*2 [~ bd bd]").euclid(8,16).sometimesBy(0.25, rev),
  s("~ [sn cp ~] sn").euclid(6,16).fast(perlin.range(1.2,3)),
  s("hh*3 [hh oh*2] ~").euclid(12,16).degradeBy(0.18),
  s("hh*8 [~ oh*3 cp*3]").fast(perlin.range(1.5,3.8)).jux(rev).pan(sine.range(0.1,0.9).slow(4))
)
  .sometimes(rev)
  .slow(perlin.range(1.5,4))
  .room(perlin.range(0.5,0.95).slow(4))
  .compressor("-32:6:0.25:0.01:0.18")
  .gain(0.55)

$: s("[goldberg*4 cosmic*2]? [whisper*2 glitch*3 groove*2] [evolve*4 bach*3] [variations*2 spiral eternal ~] , [cosmic*4 glitch*2 evolve*2] [bach whisper*3 goldberg*2 variations spiral] [eternal*4 cosmic glitch*2]")
  .slow(perlin.range(1.5,9))
  .speed(perlin.range(-0.3,2.5).slow(1.8))
  .chop(saw.range(16,64).slow(3.2))
  .phaser(cosine.range(0.1,0.6).slow(2.6))
  .gain(0.65)

$: note("eb1*2 eb1*2 [bb1 eb2 g2 bb2] , bb1*4 [g1 bb1 eb2 g2]*2 [eb2 g2]*8 , eb2*4 [g2 bb2 eb3 g3]*4 [bb3 eb4]*8? [g4 bb4 d5 f5 ab5 c6]*3?")
  .transpose(cosine.range(-0.8,3.5).slow(4))
  .slow(rand.range(1.8,8))
  .sound("square")
  .lpf(saw.range(200,1600).slow(3.5))
  .gain(0.45)