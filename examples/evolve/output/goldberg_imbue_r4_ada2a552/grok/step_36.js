setcps(158/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove,evolve')

$: note("[eb4 g4 bb4 d5 f5 c6 eb6 g6]*3 , [bb4 d5 f5 ab5 c6 eb6 g6 bb6]*2 , [g5 d6 f6 bb6 c7 eb7 g7 bb7]*3 , [eb6 g6 bb6 d7 f7 ab7 c8 ~]*2")
  .slow(perlin.range(1.2,7.8))
  .sound("sine")
  .lpf(sine.range(40,16000).slow(4.2))
  .phaser(tri.range(0.1,1.5).slow(5.5))
  .gain(0.52)

$: note("c2 [eb2 g2 bb2 d3 f3 c4 eb4]*3 [bb1 eb2 g2 bb2 d3 f3 ab4 c5 eb5] [eb2 g3 bb3 d4 f4 ab4 c5 eb5 g5 bb5]")
  .slow(perlin.range(1.4,6.2))
  .sound("supersaw")
  .fm(perlin.range(0.3,14).slow(4.2))
  .ring(sine.range(0.08,0.65).slow(3.8))
  .gain(0.48)

$: note("g4 [bb4 d5 f5 ab5 c6 eb6 g6]*4 , [g5 bb5 d6 f6 ab6 c7 eb7 g7] f5 [g6 bb6 d7 f7 ab7 c8 eb8] [g7 bb7 d8 f8 eb8 ~]")
  .slow(perlin.range(1.8,6.8))
  .sound("square")
  .fmi(saw.range(0.8,15).slow(3.5))
  .delay(0.25).dfb(0.28)
  .gain(0.48)

$: stack(
  s("bd [~ bd bd]").euclid(7,16).sometimesBy(0.45, rev),
  s("~ sn [cp sn ~ cp]").euclid(9,16).fast(1.4),
  s("[hh*4 oh*4 ~ hh*8]").degradeBy(0.35).fast(1.3)
)
  .slow(perlin.range(1.9,5.8))
  .swing(perlin.range(0.55,0.98))
  .room(0.48)
  .crush(perlin.range(5,14))
  .gain(0.6)

$: s("[hh*6 oh*6 ~ cp*5] [cp*8 hh*10 oh*4 cp*5] , [cp*4 ~ hh*12 oh*6 cp*8]")
  .fast(perlin.range(3,7.5))
  .juxBy(0.6, rev)
  .pan(saw.range(0,1).slow(4))
  .delay(0.3)
  .gain(0.5)

$: s("[goldberg cosmic*3 ~ evolve] [whisper*4 glitch*2 groove cosmic?] [evolve glitch*3 whisper groove goldberg cosmic ~] , [glitch*2 evolve cosmic*4 whisper groove goldberg ~]")
  .slow(perlin.range(2.1,6.2))
  .speed(perlin.range(-0.6,3.5).slow(5.2))
  .chop(saw.range(7,26).slow(3.8))
  .vowel("a e o u i")
  .gain(0.58)