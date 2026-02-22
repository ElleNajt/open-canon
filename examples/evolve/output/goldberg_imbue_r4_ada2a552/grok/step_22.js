setcps(152/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove,evolve')

$: note("[db4 f4 ab4 c5 eb5]*2 [g4 bb4 db5 f5 ab5 cb6] [ab5 eb6 g6 bb6 c7 eb7 ~]")
  .slow(3.2)
  .sound("sawtooth")
  .lpf(cosine.range(250,5500).slow(3))
  .detune(perlin.range(-30,50).slow(5))
  .gain(0.5)

$: note("bb1 [db2 f2 ab2 cb3]*2 [g1 c2 e2 g2 bb2 db3] [bb2 eb3 f3 ab3 db4 eb4 ~]")
  .slow(3.5)
  .sound("supersaw")
  .fm(sine.range(0.2,4.5).slow(3))
  .leslie(tri.range(0.2,0.9).slow(4))
  .gain(0.45)

$: note("f4 [ab4 cb5 eb5 g5]*2 [f5 ab5 cb6 eb6 g6] , eb5 [f6 ab6 cb7 eb7 g7] [f7 ab7 cb8 eb8 ~]")
  .slow(2.8)
  .sound("pulse")
  .detune(rand.range(-40,70).slow(3))
  .phaser(sine.range(0.1,0.8).slow(4.5))
  .gain(0.6)

$: stack(
  s("bd [bd ~ bd]").euclid(12,16),
  s("~ sn [cp ~ sn]").euclid(10,16).fast(1.9),
  s("[hh*4 oh*5 ~ hh*2]").sometimes(rev).degradeBy(0.25)
)
  .slow(2.5)
  .swing(0.7)
  .crush(0.3)
  .room(0.4)
  .gain(0.6)

$: s("~ [hh*16 oh*4 cp*5] , [cp*6 hh*14 oh*3 cp*4]")
  .fast(4.5)
  .jux(rev)
  .delay(0.4)
  .hpf(saw.range(400,5800).slow(3.5))
  .gain(0.5)

$: s("[evolve*3 cosmic*2 goldberg] [glitch*4 groove whisper*2] , [goldberg*2 cosmic evolve ~ glitch] [whisper*3 glitch groove*2 evolve*4]")
  .slow(2.7)
  .speed(perlin.range(0.6,1.8).slow(4.5))
  .chop(sine.range(6,28).slow(2.5))
  .distort(perlin.range(0.1,0.25).slow(5.5))
  .gain(0.57)