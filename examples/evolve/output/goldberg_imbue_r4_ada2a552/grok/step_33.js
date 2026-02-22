setcps(150/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove,evolve')

$: note("[eb4 g4 bb4 d5 f5 c6 eb6 g6]*2 , [bb4 d5 f5 ab5 c6 eb6 g6 bb6]*2 , [g5 d6 f6 bb6 c7 eb7 g7 bb7]*2 , [eb6 g6 bb6 d7 f7 c8 ~]*2")
  .slow(perlin.range(1.9,5.1))
  .sound("sawtooth")
  .lpf(sine.range(90,11000).slow(3.2))
  .sometimesBy(0.28, rev)
  .gain(0.48)

$: note("c2 [eb2 g2 bb2 d3 f3 c4 eb4]*2 [bb1 eb2 g2 bb2 d3 f3 ab4 c5 eb5] [eb2 g3 bb3 d4 f4 ab4 c5 eb5 g5]")
  .slow(perlin.range(2.1,4.9))
  .sound("supersaw")
  .fm(saw.range(0.6,11).slow(3.3))
  .phaser(sine.range(0.25,1.3).slow(4.2))
  .gain(0.5)

$: note("g4 [bb4 d5 f5 ab5 c6 eb6 g6]*3 , [g5 bb5 d6 f6 ab6 c7 eb7 g7] f5 [g6 bb6 d7 f7 ab7 c8 eb8] [g7 bb7 d8 f8 ~]")
  .degradeBy(0.18)
  .slow(perlin.range(2.4,4.4))
  .sound("pulse")
  .fmi(tri.range(1.2,11).slow(3.6))
  .gain(0.48)

$: stack(
  s("bd [bd ~ bd]").euclid(8,16).sometimesBy(0.38, rev),
  s("~ sn [cp ~ sn cp]").euclid(8,16).fast(1.6),
  s("[hh*3 oh*3 hh*8 ~]").degradeBy(0.32).fast(1.15)
)
  .slow(perlin.range(2.3,4.6))
  .swing(perlin.range(0.68,0.88))
  .room(0.48)
  .tremolo(sine.range(0.08,0.65).slow(2.9))
  .gain(0.62)

$: s("~ [hh*7 oh*9 cp*5 hh*11] , [cp*9 hh*17 oh*7 ~ cp*3]")
  .fast(perlin.range(3.3,6.4))
  .juxBy(0.68, rev)
  .delay(0.3)
  .crush(perlin.range(5,14).slow(4.1))
  .gain(0.48)

$: s("[goldberg*2 cosmic evolve?] [whisper*2 glitch groove cosmic] [evolve glitch*3 whisper groove?] , [glitch evolve*4 cosmic*2 ~ goldberg] [whisper groove*3 evolve goldberg cosmic glitch ~]")
  .slow(perlin.range(2.6,5.1))
  .speed(perlin.range(-0.6,2.9).slow(5.1))
  .chop(saw.range(7,30).slow(3.2))
  .coarse(perlin.range(2.5,9).slow(4.5))
  .gain(0.58)