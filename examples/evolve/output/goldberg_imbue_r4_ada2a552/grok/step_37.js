setcps(165/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove,evolve')

$: note("[eb4? g4 bb4 d5 f5 [c6 eb6] g6]*3 , [bb4 d5 f5 ab5 c6 eb6 g6 bb6]*2? , [g5 d6 f6 bb6 c7 eb7 g7 bb7]*4 , [eb6 g6 bb6 d7 f7 ab7 c8 ~]*2")
  .slow(perlin.range(1.1,8.2))
  .sound("sine")
  .lpf(sine.range(60,15000).slow(3.8))
  .leslie(tri.range(0.2,1.2).slow(6))
  .gain(0.5)

$: note("c2 [eb2 g2 bb2 d3 f3 c4 eb4]*4? [bb1 eb2 g2 bb2 d3 f3 ab4 c5 eb5] [eb2 g3 bb3 d4 f4 ab4 c5 eb5 g5 bb5 ~]")
  .slow(perlin.range(1.3,7))
  .sound("supersaw")
  .fm(perlin.range(0.4,18).slow(3.9))
  .ring(sine.range(0.1,0.7).slow(4.2))
  .gain(0.46)

$: note("g4 [bb4 d5 f5 ab5 c6 eb6 g6]*3? , [g5 bb5 d6 f6 ab6 c7 eb7 g7] f5 [g6 bb6 d7 f7 ab7 c8 eb8] [g7 bb7 d8 f8 eb8 ~]")
  .slow(perlin.range(1.6,7.5))
  .sound("pulse")
  .fmi(saw.range(1,16).slow(4))
  .delay(0.28)
  .gain(0.47)

$: stack(
  s("bd [~ bd bd]").euclid(8,16).sometimesBy(0.38, rev),
  s("~ sn [cp sn ~ cp]").euclid(7,16).fast(1.5),
  s("[hh*3 oh*5 ~ hh*7]").degradeBy(0.28).fast(1.25)
)
  .slow(perlin.range(2,6.2))
  .swing(perlin.range(0.52,0.95))
  .room(0.52)
  .compressor("0.2:5:0.4:0.08:0.25")
  .gain(0.62)

$: s("[hh*5 oh*7 ~ cp*6] [cp*7 hh*9 oh*5 cp*6] , [cp*5 ~ hh*11 oh*7 cp*9]")
  .fast(perlin.range(3.2,8.2))
  .juxBy(0.55, rev)
  .pan(saw.range(0,1).slow(3.5))
  .delay(0.32)
  .gain(0.52)

$: s("[goldberg cosmic*2 ~ evolve] [whisper*3 glitch groove cosmic*2] [evolve*2 glitch*4 whisper groove goldberg ~ cosmic] , [glitch evolve*3 cosmic*3 whisper groove goldberg ~]")
  .slow(perlin.range(1.8,7))
  .speed(perlin.range(-0.8,4).slow(4.8))
  .striate(saw.range(6,28).slow(4.2))
  .vowel("e o i a u")
  .gain(0.6)