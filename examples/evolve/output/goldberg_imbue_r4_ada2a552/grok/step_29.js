setcps(170/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove,evolve')

$: note("[eb4 g4 bb4 d5 f5 c6 eb6 g6]*2 , [bb4 d5 f5 ab5 c6 eb6 g6 bb6]*2 , [g5 d6 f6 bb6 c7 eb7 g7 bb7]*2 ~")
  .slow(perlin.range(2.9,3.7))
  .sound("sawtooth")
  .lpf(sine.range(60,9000).slow(2.9))
  .phaser(sine.range(0.1,0.6).slow(3.8))
  .gain(0.48)

$: note("c2 [eb2 g2 bb2 d3 f3 c4 eb4]*2 [bb1 eb2 g2 bb2 d3 f3 ab4 c5] [eb2 g3 bb3 d4 f4 ab4 c5 ~]")
  .slow(perlin.range(3.1,3.9))
  .sound("supersaw")
  .fm(saw.range(0.4,7.5).slow(3.2))
  .lpf(cosine.range(150,2500).slow(4.1))
  .gain(0.5)

$: note("g4 [bb4 d5 f5 ab5 c6 eb6 g6]*3 , [g5 bb5 d6 f6 ab6 c7 eb7 g7] f5 [g6 bb6 d7 f7 ab7 c8 eb8] [g7 bb7 d8 ~]")
  .slow(perlin.range(3.1,3.5))
  .sound("pulse")
  .fmi(sine.range(0.8,6.5).slow(3.9))
  .detune(saw.range(-20,50).slow(5))
  .gain(0.52)

$: stack(
  s("bd [bd bd ~ bd]").euclid(10,16).sometimesBy(0.25, rev),
  s("~ sn [cp ~ sn cp]").euclid(8,16).fast(2),
  s("[hh*3 oh*5 hh*8 ~]").degradeBy(0.3)
)
  .slow(perlin.range(2.7,3.3))
  .swing(0.7)
  
  .room(0.4)
  .gain(0.62)

$: s("~ [hh*8 oh*8 cp*4 hh*12] , [cp*8 hh*16 oh*8 ~ cp*4]")
  .fast(perlin.range(4.1,5.2))
  .jux(rev)
  .delay(0.32)
  .pan(tri.range(0.2,0.8).slow(2.8))
  .gain(0.49)

$: s("[goldberg cosmic glitch*2 groove evolve] [whisper*2 cosmic*3 goldberg glitch groove*2] , [evolve*4 whisper glitch cosmic goldberg*2 ~ groove*3] [glitch*5 evolve*2 whisper cosmic groove goldberg ~]")
  .slow(3.1)
  .speed(perlin.range(0.3,2.5).slow(4.8))
  .chop(saw.range(4,28).slow(2.9))
  .crush(rand.range(2,16).slow(4.9))
  .gain(0.58)