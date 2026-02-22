setcps(176/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove,evolve')

$: note("[eb4 g4 bb4 d5 f5 c6 eb6 g6]*2 , [bb4 d5 f5 ab5 c6 eb6 g6 bb6]*2 , [g5 d6 f6 bb6 c7 eb7 g7 bb7]*2 , [eb6 g6 bb6 d7 f7 c8 ~]*2")
  .slow(perlin.range(2.6,4.2))
  .sound("sawtooth")
  .lpf(sine.range(60,12500).slow(3.4))
  .phaser(sine.range(0.1,1.1).slow(3.2))
  .gain(0.48)

$: note("c2 [eb2 g2 bb2 d3 f3 c4 eb4]*2 [bb1 eb2 g2 bb2 d3 f3 ab4 c5 eb5] [eb2 g3 bb3 d4 f4 ab4 c5 eb5 g5]")
  .slow(perlin.range(2.8,4.3))
  .sound("supersaw")
  .fm(saw.range(0.5,9).slow(3.6))
  .leslie(sine.range(0.25,0.85).slow(4.1))
  .gain(0.5)

$: note("g4 [bb4 d5 f5 ab5 c6 eb6 g6]*3 , [g5 bb5 d6 f6 ab6 c7 eb7 g7] f5 [g6 bb6 d7 f7 ab7 c8 eb8] [g7 bb7 d8 f8 ~]")
  .slow(perlin.range(2.9,3.9))
  .sound("pulse")
  .fmi(tri.range(0.8,8.2).slow(3.9))
  .slide(tri.range(0.05,0.5))
  .gain(0.48)

$: stack(
  s("bd [bd ~ bd]").euclid(10,16).sometimesBy(0.28, rev),
  s("~ sn [cp ~ sn cp]").euclid(6,16).fast(1.65),
  s("[hh*2 oh*4 hh*7 ~]").degradeBy(0.32)
)
  .slow(perlin.range(2.7,3.7))
  .swing(0.7)
  .room(0.48)
  .phaser(perlin.range(0.1,0.45))
  .gain(0.62)

$: s("~ [hh*8 oh*8 cp*4 hh*12] , [cp*8 hh*16 oh*8 ~ cp*4]")
  .fast(perlin.range(3.8,5.6))
  .juxBy(0.72, rev)
  .delay(0.28)
  .pan(saw.range(0.1,0.9).slow(3.4))
  .gain(0.48)

$: s("[goldberg cosmic*2] [whisper glitch groove] [evolve*3 cosmic glitch whisper] , [glitch*4 evolve whisper*2 cosmic groove goldberg ~] [goldberg*2 glitch evolve cosmic groove whisper ~]")
  .slow(perlin.range(2.9,4.6))
  .speed(perlin.range(0.35,3.1).slow(4.9))
  .chop(saw.range(4,28).slow(3.3))
  .crush(rand.range(2.5,19).slow(5.4))
  .gain(0.58)