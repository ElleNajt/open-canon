setcps(172/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove,evolve')

$: note("[eb4 g4 bb4 d5 f5 c6 eb6 g6]*2 , [bb4 d5 f5 ab5 c6 eb6 g6 bb6]*2 , [g5 d6 f6 bb6 c7 eb7 g7 bb7]*2 , [eb6 g6 bb6 d7 f7 c8 ~]*2")
  .slow(perlin.range(2.8,3.9))
  .sound("sawtooth")
  .lpf(sine.range(80,10000).slow(3.1))
  .vowel("a [e i] o u".slow(3.5))
  .gain(0.5)

$: note("c2 [eb2 g2 bb2 d3 f3 c4 eb4]*2 [bb1 eb2 g2 bb2 d3 f3 ab4 c5 eb5] [eb2 g3 bb3 d4 f4 ab4 c5 eb5 g5]")
  .slow(perlin.range(3.0,4.0))
  .sound("supersaw")
  .fm(saw.range(0.5,8).slow(3.3))
  .lpf(cosine.range(120,2800).slow(4.2))
  .gain(0.52)

$: note("g4 [bb4 d5 f5 ab5 c6 eb6 g6]*3 , [g5 bb5 d6 f6 ab6 c7 eb7 g7] f5 [g6 bb6 d7 f7 ab7 c8 eb8] [g7 bb7 d8 f8 ~]")
  .slow(perlin.range(3.0,3.6))
  .sound("pulse")
  .fmi(sine.range(1,7).slow(4))
  .slide(sine.range(0.1,0.45))
  .gain(0.5)

$: stack(
  s("bd [bd ~ bd]").euclid(9,16).sometimesBy(0.3, rev),
  s("~ sn [cp ~ sn cp]").euclid(7,16).fast(1.7),
  s("[hh*3 oh*5 hh*8 ~]").degradeBy(0.28)
)
  .slow(perlin.range(2.8,3.4))
  .swing(0.72)
  
  .room(0.45)
  .gain(0.6)

$: s("~ [hh*8 oh*8 cp*4 hh*12] , [cp*8 hh*16 oh*8 ~ cp*4]")
  .fast(perlin.range(3.9,5.4))
  .juxBy(0.75, rev)
  .delay(0.3)
  .pan(tri.range(0.15,0.85).slow(3.1))
  .gain(0.5)

$: s("[goldberg cosmic glitch groove evolve] [whisper*2 cosmic*3 goldberg glitch*2 groove] , [evolve*4 whisper glitch cosmic goldberg groove*2 ~] [glitch*5 evolve*2 whisper cosmic groove goldberg ~]")
  .slow(3.2)
  .speed(perlin.range(0.4,2.8).slow(5))
  .striate(saw.range(5,30).slow(3.1))
  .crush(rand.range(3,18).slow(5.2))
  .gain(0.6)