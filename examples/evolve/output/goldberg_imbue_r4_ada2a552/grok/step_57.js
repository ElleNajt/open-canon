setcps(152/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove,evolve,bach,variations,spiral,eternal')

$: note("eb4 [g4 bb4 d5 f5 eb5] [f5 ab5 c6 eb6 g6] [bb6 d7 f7 ab7 c8]*2?*4 , bb4 [d5 f5 ab5 c6] [eb6 g6 bb6 d7 f7]*2? , g5 [bb5 d6 f6 ab6] [c7 eb7 g7 bb7 d8]*3? , eb6 [g6 bb6 d7 f7 ab7] [c8 eb8 g8]*4?")
  .transpose(perlin.range(-0.5,4.8).slow(2.1))
  .slow(perlin.range(1.5,10))
  .sound("sine")
  .ring(sine.range(0.2,0.6).slow(2.8))
  .gain(0.38)

$: note("c1 [eb1 g1 bb1 d2 f2] [ab2 c3 eb3 g3] [bb3 d4 f4 ab4]*3? [c2 eb2 g2 bb2]*2 , [eb4 g4 bb4 d5 f5] [ab5 c6 eb6 g6 bb6]*4? [d2 f3 ab3 c4 ~]")
  .transpose(cosine.range(-1,3.8).slow(1.9))
  .slow(perlin.range(1.4,9.5))
  .sound("supersaw")
  .fmi(saw.range(10,25).slow(2.7))
  .gain(0.32)

$: note("g4 [bb4 d5 f5 ab5 c6] [eb6 g6 bb6 d7] [f7 ab7 c8 eb8]*4? , g5 [d6 f6 ab6 c7 eb7] [g7 bb7 d8]*2 , f5 [ab6 c7 eb7 g7 bb7] [d8 f8 ab8 c9]*2 [eb9 g9 ~ ~]")
  .transpose(perlin.range(-1.2,4.2).slow(3.2))
  .slow(perlin.range(1.3,11))
  .sound("pulse")
  .leslie(perlin.range(0.4,0.9).slow(2.2))
  .gain(0.45)

$: stack(
  s("bd*2 [~ bd bd]").euclid(9,16).sometimesBy(0.18, rev),
  s("~ [sn cp ~] sn").euclid(8,16).fast(perlin.range(1.2,2.3)),
  s("hh*3 [hh oh*2] ~").euclid(13,16).degradeBy(0.12),
  s("hh*8 [~ oh*3 cp*3]").fast(perlin.range(1.5,3.2)).jux(rev).pan(sine.range(0.2,0.8).slow(3.2))
)
  .sometimes(rev)
  .slow(perlin.range(1.6,4.2))
  .room(perlin.range(0.5,0.95).slow(3.1))
  .delay(0.35)
  .gain(0.55)

$: s("[goldberg*3 cosmic*2]? [whisper glitch*2 groove*2] [evolve*3 bach*2] [variations spiral eternal ~] , [cosmic*3 glitch evolve] [bach whisper*4 goldberg variations*2] [spiral*2 cosmic eternal*3 glitch*3]")
  .slow(perlin.range(1.5,9.5))
  .speed(perlin.range(-0.3,2.5).slow(1.8))
  .chop(saw.range(16,48).slow(2.8))
  .phaser(cosine.range(0.2,1.1).slow(2.2))
  .gain(0.62)

$: note("eb1*4 [bb1 eb2 g2 bb2] , bb1*4 [g1 bb1 eb2 g2]*2 [eb2 g2]*8 , eb2*4 [g2 bb2 eb3 g3]*4 [bb3 eb4]*8? [g4 bb4 d5 f5]*2?")
  .transpose(saw.range(-0.7,2.8).slow(3.5))
  .slow(perlin.range(1.8,8.5))
  .sound("square")
  .lpf(tri.range(200,1200).slow(2.9))
  .gain(0.38)