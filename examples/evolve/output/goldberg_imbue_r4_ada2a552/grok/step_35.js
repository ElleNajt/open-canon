setcps(152/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove,evolve')

$: note("[eb4 g4 bb4 d5 f5 c6 eb6 g6]*2 , [bb4 d5 f5 ab5 c6 eb6 g6 bb6]*2 , [g5 d6 f6 bb6 c7 eb7 g7 bb7]*2 , [eb6 g6 bb6 d7 f7 c8 ~]*2")
  .slow(perlin.range(2,6))
  .sound("sine")
  .lpf(cosine.range(80,12000).slow(3.5))
  .phaser(sine.range(0.3,1.2).slow(5))
  .gain(0.48)

$: note("c2 [eb2 g2 bb2 d3 f3 c4 eb4]*2 [bb1 eb2 g2 bb2 d3 f3 ab4 c5 eb5] [eb2 g3 bb3 d4 f4 ab4 c5 eb5 g5]")
  .slow(perlin.range(1.8,5.2))
  .sound("supersaw")
  .fm(saw.range(0.4,12).slow(3.8))
  .ring(sine.range(0.1,0.6).slow(4.2))
  .gain(0.5)

$: note("g4 [bb4 d5 f5 ab5 c6 eb6 g6]*3 , [g5 bb5 d6 f6 ab6 c7 eb7 g7] f5 [g6 bb6 d7 f7 ab7 c8 eb8] [g7 bb7 d8 f8 ~]")
  .slow(perlin.range(2.2,5))
  .sound("square")
  .fmi(tri.range(1,12).slow(4))
  .delay(0.22)
  .gain(0.5)

$: stack(
  s("bd [bd ~ bd]").euclid(8,16).sometimesBy(0.4, rev),
  s("~ sn [cp ~ sn cp]").euclid(8,16).fast(1.5),
  s("[hh*3 oh*3 hh*8 ~]").degradeBy(0.3).fast(1.2)
)
  .slow(perlin.range(2.1,5.1))
  .swing(perlin.range(0.62,0.94))
  .room(0.55)
  .leslie(sine.range(0.2,0.8).slow(3))
  .gain(0.62)

$: s("[hh*5 ~ oh*8 cp*4] [cp*6 hh*12 oh*3 ~] , [~ cp*3 hh*9 oh*5 cp*7]")
  .fast(perlin.range(3.2,6.8))
  .juxBy(0.62, rev)
  .pan(sine.range(0,1).slow(4.5))
  .delay(0.28)
  .gain(0.5)

$: s("[goldberg cosmic*2 evolve] [whisper*3 glitch groove cosmic?] [evolve*2 glitch whisper groove goldberg ~] , [glitch evolve*3 cosmic goldberg*2 whisper groove ~]")
  .slow(perlin.range(2.4,5.6))
  .speed(perlin.range(-0.7,3.2).slow(4.8))
  .chop(saw.range(6,28).slow(3.5))
  .vowel("e i o a u")
  .gain(0.6)