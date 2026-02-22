setcps(152/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove,evolve,bach,variations,spiral,eternal')

$: note("eb4 [g4 bb4 d5 f5 eb5] [f5 ab5 c6 eb6 g6] [bb6 d7 f7 ab7 c8]*2?*4 , bb4 [d5 f5 ab5 c6] [eb6 g6 bb6 d7 f7]*2? , g5 [bb5 d6 f6 ab6] [c7 eb7 g7 bb7 d8]*3? , eb6 [g6 bb6 d7 f7 ab7] [c8 eb8 g8]*4?")
  .transpose(saw.range(-0.5,5).slow(2.1))
  .slow(cosine.range(1.8,9))
  .sound("sine")
  .ring(saw.range(0.1,0.8).slow(2.5))
  .gain(0.4)

$: note("c1 [eb1 g1 bb1 d2 f2] [ab2 c3 eb3 g3] [bb3 d4 f4 ab4]*3? [c2 eb2 g2 bb2]*2 , [eb4 g4 bb4 d5 f5] [ab5 c6 eb6 g6 bb6]*4? [d2 f3 ab3 c4 ~]")
  .transpose(rand.range(-1,4).slow(1.9))
  .slow(tri.range(1.5,9.2))
  .sound("supersaw")
  .fmi(cosine.range(8,28).slow(2.9))
  .gain(0.3)

$: note("g4 [bb4 d5 f5 ab5 c6] [eb6 g6 bb6 d7] [f7 ab7 c8 eb8]*4? , g5 [d6 f6 ab6 c7 eb7] [g7 bb7 d8]*2 , f5 [ab6 c7 eb7 g7 bb7] [d8 f8 ab8 c9]*2 [eb9 g9 ~ ~]")
  .transpose(sine.range(-1.2,4.5).slow(3))
  .slow(saw.range(1.2,10.5))
  .sound("pulse")
  .leslie(sine.range(0.3,1).slow(2.5))
  .gain(0.48)

$: stack(
  s("bd*2 [~ bd bd]").euclid(7,16).sometimesBy(0.22, rev),
  s("~ [sn cp ~] sn").euclid(5,16).fast(perlin.range(1.1,2.8)),
  s("hh*3 [hh oh*2] ~").euclid(11,16).degradeBy(0.15),
  s("hh*8 [~ oh*3 cp*3]").fast(perlin.range(1.4,3.5)).jux(rev).pan(sine.range(0.1,0.9).slow(3.5))
)
  .sometimes(rev)
  .slow(perlin.range(1.4,3.8))
  .room(perlin.range(0.45,0.92).slow(3.8))
  .compressor("-32:6:0.25:0.01:0.18")
  .gain(0.52)

$: s("[goldberg*3 cosmic*2]? [whisper glitch*2 groove*2] [evolve*3 bach*2] [variations spiral eternal ~] , [cosmic*3 glitch evolve] [bach whisper*4 goldberg variations*2] [spiral*2 cosmic eternal*3 glitch*3]")
  .slow(perlin.range(1.4,8.8))
  .speed(perlin.range(-0.4,2.2).slow(1.6))
  .chop(saw.range(12,56).slow(3))
  .distort(sine.range(0.05,0.45).slow(2.4))
  .gain(0.6)

$: note("eb1*2 eb1*2 [bb1 eb2 g2 bb2] , bb1*4 [g1 bb1 eb2 g2]*2 [eb2 g2]*8 , eb2*4 [g2 bb2 eb3 g3]*4 [bb3 eb4]*8? [g4 bb4 d5 f5 ab5]*2?")
  .transpose(cosine.range(-0.8,3).slow(3.8))
  .slow(rand.range(1.6,7.8))
  .sound("square")
  .lpf(saw.range(150,1400).slow(3.2))
  .gain(0.4)