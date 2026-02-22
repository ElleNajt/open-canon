setcps(160/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove,evolve')

$: note("[eb4 g4 bb4 d5 f5 c6 eb6 g6]*2 , [bb4 d5 f5 ab5 c6 eb6 g6 bb6]*2 , [g5 d6 f6 bb6 c7 eb7 g7 bb7]*2 , [eb6 g6 bb6 d7 f7 c8 ~]*2")
  .slow(perlin.range(2.4,4.4))
  .sound("sawtooth")
  .lpf(sine.range(80,12000).slow(3.1))
  .detune(sine.range(-25,25).slow(3.7))
  .gain(0.5)

$: note("c2 [eb2 g2 bb2 d3 f3 c4 eb4]*2 [bb1 eb2 g2 bb2 d3 f3 ab4 c5 eb5] [eb2 g3 bb3 d4 f4 ab4 c5 eb5 g5]")
  .slow(perlin.range(2.6,4.5))
  .sound("supersaw")
  .fm(saw.range(0.4,10).slow(3.4))
  .ring(sine.range(0.2,0.9).slow(4.3))
  .gain(0.52)

$: note("g4 [bb4 d5 f5 ab5 c6 eb6 g6]*3 , [g5 bb5 d6 f6 ab6 c7 eb7 g7] f5 [g6 bb6 d7 f7 ab7 c8 eb8] [g7 bb7 d8 f8 ~]")
  .slow(perlin.range(2.7,4.1))
  .sound("pulse")
  .fmi(tri.range(0.6,9).slow(3.7))
  .slide(tri.range(0.03,0.55))
  .gain(0.5)

$: stack(
  s("bd [bd ~ bd]").euclid(9,16).sometimesBy(0.32, rev),
  s("~ sn [cp ~ sn cp]").euclid(7,16).fast(1.7),
  s("[hh*3 oh*3 hh*8 ~]").degradeBy(0.28)
)
  .slow(perlin.range(2.5,4))
  .swing(0.75)
  .room(0.5)
  .tremolo(sine.range(0.1,0.6).slow(2.8))
  .gain(0.65)

$: s("~ [hh*7 oh*9 cp*5 hh*11] , [cp*9 hh*17 oh*7 ~ cp*3]")
  .fast(perlin.range(3.5,6))
  .juxBy(0.7, rev)
  .delay(0.32)
  .pan(saw.range(0.05,0.95).slow(3.2))
  .gain(0.5)

$: s("[goldberg*2 cosmic evolve] [whisper*2 glitch groove cosmic] [evolve glitch*3 whisper groove] , [glitch evolve*4 cosmic*2 ~ goldberg] [whisper groove*3 evolve goldberg cosmic glitch ~]")
  .slow(perlin.range(2.7,4.8))
  .speed(perlin.range(0.45,2.8).slow(5.2))
  .chop(saw.range(6,32).slow(3.1))
  .distort(perlin.range(0.15,0.65).slow(4.6))
  .gain(0.6)