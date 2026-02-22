setcps(148/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove,evolve,bach,variations,spiral,eternal')

$: note("[eb4 g4? bb4 d5 f5 [c6 eb6] g6]*4 , [bb4 d5 f5 ab5 c6 eb6 g6 bb6]*2? , [g5 d6 f6 bb6 c7 eb7 g7 bb7]*3? , [eb6 g6 bb6 d7 f7 ab7 c8 eb8 ~]*3?")
  .slow(perlin.range(1.05,11.5))
  .sound("sine")
  .lpf(cosine.range(80,15000).slow(3.8))
  .phaser(perlin.range(0.2,2.5).slow(5))
  .gain(0.5)

$: note("c1 [eb2 g2 bb2 d3 f3 c4 eb4 g4]*4? [bb1 eb2 g2 bb2 d3 f3 ab4 c5 eb5 g5] [eb2 g3 bb3 d4 f4 ab4 c5 eb5 g5 bb5 ~]")
  .slow(perlin.range(1.1,9.2))
  .sound("supersaw")
  .fm(saw.range(0.3,25).slow(5.1))
  .tremolo(sine.range(0.3,0.85).slow(4.2))
  .gain(0.45)

$: note("g4 [bb4 d5 f5 ab5 c6 eb6 g6 bb6]*4? , [g5 bb5 d6 f6 ab6 c7 eb7 g7 bb7] f5 [g6 bb6 d7 f7 ab7 c8 eb8] [g7 bb7 d8 f8 eb8 g8 ~]")
  .slow(perlin.range(1.4,10.1))
  .sound("pulse")
  .fmi(perlin.range(0.8,25).slow(3.8))
  .ring(perlin.range(0.2,0.7))
  .gain(0.5)

$: stack(
  s("bd [~ bd bd]").euclid(6,16).sometimesBy(0.4, rev),
  s("~ sn [cp sn ~ cp]").euclid(7,16).fast(1.5),
  s("[hh*3 oh*5 ~ hh*6]").degradeBy(0.28).fast(1.25)
)
  .slow(perlin.range(1.4,8.2))
  .tremolo(perlin.range(0.3,0.75))
  .room(0.6)
  .compressor("0.2:5:0.3:0.05:0.25")
  .gain(0.6)

$: s("[hh*5 oh*7 ~ cp*8] [cp*6 hh*8 oh*6 cp*4] , [cp*4 ~ hh*12 oh*8 cp*10]")
  .fast(perlin.range(2.5,11.2))
  .juxBy(0.55, rev)
  .pan(cosine.range(0.1,0.9).slow(5.3))
  .delay(0.32)
  .gain(0.55)

$: s("[goldberg*3 [cosmic*2 bach]~] [whisper*3 glitch*4 [groove spiral] cosmic*2] [evolve*4 [glitch*3 eternal] whisper*2 [groove goldberg] cosmic ~ spiral] , [glitch*3 evolve*5 cosmic*4 [whisper groove] [bach variations] ~ eternal]")
  .slow(perlin.range(1.5,10.2))
  .speed(perlin.range(-0.5,3.5).slow(5))
  .striate(tri.range(6,30).slow(5.2))
  .vowel("a e i o u".slow(3.1))
  .gain(0.55)