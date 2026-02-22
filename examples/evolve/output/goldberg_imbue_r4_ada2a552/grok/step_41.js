setcps(152/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove,evolve,bach,variations,spiral,eternal')

$: note("[eb4 g4? bb4 d5 f5 [c6 eb6]? g6]*4 , [bb4 d5 f5 ab5 c6 eb6 g6 bb6]*2? , [g5 d6 f6 bb6 c7 eb7 g7 bb7]*3? , [eb6 g6 bb6 d7 f7 ab7 c8 eb8 ~]*3?")
  .every(8, rev)
  .slow(perlin.range(1.2,12))
  .sound("sine")
  .lpf(cosine.range(100,14000).slow(4))
  .detune(sine.range(-40,40).slow(6))
  .gain(0.48)

$: note("c1 [eb2 g2 bb2 d3 f3 c4 eb4 g4]*4? [bb1 eb2 g2 bb2 d3 f3 ab4 c5 eb5 g5] [eb2 g3 bb3 d4 f4 ab4 c5 eb5 g5 bb5 ~]")
  .slow(perlin.range(1.1,9.5))
  .sound("supersaw")
  .fm(saw.range(0.4,28).slow(5))
  .crush(perlin.range(4,14).slow(4))
  .gain(0.45)

$: note("g4 [bb4 d5 f5 ab5 c6 eb6 g6 bb6]*4? , [g5 bb5 d6 f6 ab6 c7 eb7 g7 bb7] f5 [g6 bb6 d7 f7 ab7 c8 eb8] [g7 bb7 d8 f8 eb8 g8 ~]")
  .slow(perlin.range(1.3,10.5))
  .sound("pulse")
  .fmi(perlin.range(1,28).slow(4))
  .distort(perlin.range(0.1,0.4))
  .gain(0.5)

$: stack(
  s("bd*2 [~ bd bd]").euclid(5,16).sometimesBy(0.3, rev),
  s("~ sn [cp sn ~ cp]").euclid(8,16).fast(1.4),
  s("[hh*4 oh*2 ~ hh*5]").degradeBy(0.25).fast(1.3)
)
  .slow(perlin.range(1.3,7.5))
  .swing(perlin.range(0.02,0.12))
  .room(0.65)
  .compressor("0.15:4:0.4:0.04:0.3")
  .gain(0.62)

$: s("[hh*5 oh*7 ~ cp*8] [cp*6 hh*8 oh*6 cp*4] , [cp*4 ~ hh*12 oh*8 cp*10]")
  .fast(perlin.range(2.8,12.1))
  .juxBy(0.6, rev)
  .pan(sine.range(0.15,0.85).slow(4.8))
  .delay(perlin.range(0.2,0.45).slow(2))
  .gain(0.52)

$: s("[goldberg*4 [cosmic*3 ~ bach]?] [whisper*3 glitch*5 [groove spiral] cosmic*3] [evolve*5 [glitch*4 eternal] whisper*3 [groove goldberg] cosmic ~ spiral*2] , [glitch*4 evolve*6 cosmic*5 [whisper groove] [bach variations] ~ eternal]")
  .slow(perlin.range(1.4,11))
  .speed(perlin.range(-0.8,4).slow(4.5))
  .chop(tri.range(8,40).slow(4.8))
  .vowel("a e i o u".slow(3.1))
  .gain(0.55)