setcps(152/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove,evolve')

$: note("[eb4 g4? bb4 d5 f5 [c6 eb6] g6]*4 , [bb4 d5 f5 ab5 c6 eb6 g6 bb6]*2? , [g5 d6 f6 bb6 c7 eb7 g7 bb7]*3? , [eb6 g6 bb6 d7 f7 ab7 c8 ~]*3")
  .slow(perlin.range(1.2,9.8))
  .sound("sine")
  .lpf(cosine.range(40,14800).slow(4.1))
  .phaser(sine.range(0.3,1.1).slow(5.2))
  .gain(0.48)

$: note("c1 [eb2 g2 bb2 d3 f3 c4 eb4]*4? [bb1 eb2 g2 bb2 d3 f3 ab4 c5 eb5] [eb2 g3 bb3 d4 f4 ab4 c5 eb5 g5 bb5 ~]")
  .slow(perlin.range(1.3,7.8))
  .sound("supersaw")
  .fm(saw.range(0.6,19).slow(4.3))
  .ring(tri.range(0.08,0.75).slow(3.9))
  .gain(0.45)

$: note("g4 [bb4 d5 f5 ab5 c6 eb6 g6]*4? , [g5 bb5 d6 f6 ab6 c7 eb7 g7] f5 [g6 bb6 d7 f7 ab7 c8 eb8] [g7 bb7 d8 f8 eb8 ~]")
  .slow(perlin.range(1.7,8.1))
  .sound("pulse")
  .fmi(perlin.range(1.2,20).slow(3.7))
  .delay(0.26)
  .gain(0.46)

$: stack(
  s("bd [~ bd bd]").euclid(7,16).sometimesBy(0.42, rev),
  s("~ sn [cp sn ~ cp]").euclid(6,16).fast(1.4),
  s("[hh*4 oh*6 ~ hh*8]").degradeBy(0.32).fast(1.3)
)
  .slow(perlin.range(1.8,6.1))
  .swing(perlin.range(0.54,0.93))
  .room(0.55)
  .compressor("0.18:4.5:0.35:0.09:0.28")
  .gain(0.61)

$: s("[hh*6 oh*8 ~ cp*7] [cp*8 hh*10 oh*6 cp*7] , [cp*6 ~ hh*12 oh*8 cp*10]")
  .fast(perlin.range(3.5,9.1))
  .juxBy(0.58, rev)
  .pan(cosine.range(0.1,0.9).slow(3.8))
  .delay(0.3)
  .gain(0.51)

$: s("[goldberg*2 cosmic ~ evolve] [whisper*4 glitch*2 groove cosmic*3] [evolve*3 glitch*5 whisper*2 groove goldberg cosmic ~] , [glitch*2 evolve*4 cosmic*4 whisper groove goldberg ~]")
  .slow(perlin.range(2.1,8.2))
  .speed(perlin.range(-0.6,3.8).slow(5.1))
  .striate(tri.range(7,30).slow(4.4))
  .chop(perlin.range(5,20).slow(3.2))
  .gain(0.59)