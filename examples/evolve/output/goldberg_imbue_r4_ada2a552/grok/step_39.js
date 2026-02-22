setcps(144/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove,evolve,bach,variations,spiral,eternal')

$: note("[eb4 g4? bb4 d5 f5 [c6 eb6] g6]*4 , [bb4 d5 f5 ab5 c6 eb6 g6 bb6]*2? , [g5 d6 f6 bb6 c7 eb7 g7 bb7]*3? , [eb6 g6 bb6 d7 f7 ab7 c8 ~]*3")
  .slow(perlin.range(1.1,10.2))
  .sound("sine")
  .lpf(cosine.range(50,14000).slow(4.5))
  .crush(perlin.range(4,12).slow(5.2))
  .gain(0.49)

$: note("c1 [eb2 g2 bb2 d3 f3 c4 eb4]*4? [bb1 eb2 g2 bb2 d3 f3 ab4 c5 eb5] [eb2 g3 bb3 d4 f4 ab4 c5 eb5 g5 bb5 ~]")
  .slow(perlin.range(1.2,8.2))
  .sound("supersaw")
  .fm(saw.range(0.5,20).slow(4.6))
  .distort(sine.range(0.1,0.65).slow(3.9))
  .gain(0.47)

$: note("g4 [bb4 d5 f5 ab5 c6 eb6 g6]*4? , [g5 bb5 d6 f6 ab6 c7 eb7 g7] f5 [g6 bb6 d7 f7 ab7 c8 eb8] [g7 bb7 d8 f8 eb8 ~]")
  .slow(perlin.range(1.6,9.1))
  .sound("pulse")
  .fmi(perlin.range(1.1,22).slow(3.4))
  .detune(sine.range(-35,35).slow(6.1))
  .gain(0.48)

$: stack(
  s("bd [~ bd bd]").euclid(5,16).sometimesBy(0.38, rev),
  s("~ sn [cp sn ~ cp]").euclid(7,16).fast(1.5),
  s("[hh*3 oh*5 ~ hh*6]").degradeBy(0.28).fast(1.25)
)
  .slow(perlin.range(1.5,7.5))
  .swing(perlin.range(0.5,0.95))
  .room(0.58)
  .compressor("0.15:4.8:0.4:0.08:0.3")
  .gain(0.62)

$: s("[hh*7 oh*5 ~ cp*6] [cp*7 hh*9 oh*7 cp*5] , [cp*5 ~ hh*11 oh*9 cp*9]")
  .fast(perlin.range(2.8,10.2))
  .juxBy(0.62, rev)
  .pan(cosine.range(0.05,0.95).slow(4.2))
  .delay(0.28)
  .gain(0.52)

$: s("[goldberg*3 [cosmic bach]~] [whisper*3 glitch*4 [groove spiral] cosmic*2] [evolve*4 [glitch*3 eternal] whisper*2 [groove goldberg] cosmic ~ spiral] , [glitch*3 evolve*5 cosmic*4 [whisper groove] [bach variations] ~ eternal]")
  .slow(perlin.range(1.8,9.5))
  .speed(perlin.range(-0.8,4.2).slow(4.8))
  .striate(tri.range(8,32).slow(4.7))
  .chop(perlin.range(6,24).slow(2.9))
  .gain(0.6)