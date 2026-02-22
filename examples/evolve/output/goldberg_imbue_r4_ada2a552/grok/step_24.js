setcps(162/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove,evolve')

$: note("[db4 f4 ab4 c5 eb5 bb5]*3 , [g4 bb4 db5 f5 ab5 cb6]*2 [ab5 eb6 g6 bb6 c7 db7 ~]")
  .slow(3.1)
  .sound("sawtooth")
  .lpf(saw.range(180,6500).slow(2.9))
  .lpq(perlin.range(1.2,5.8).slow(3.5))
  .gain(0.5)

$: note("bb1 [db2 f2 ab2 cb3 eb3]*2 [g1 c2 e2 g2 bb2 db3 f3] [bb2 eb3 f3 ab3 db4 ~]")
  .slow(3.4)
  .sound("supersaw")
  .fm(sine.range(0.3,6.2).slow(3))
  .hpf(55)
  .gain(0.5)

$: note("f4 [ab4 cb5 eb5 g5 bb5]*2 [f5 ab5 cb6 eb6 g6 bb6] , eb5 [f6 ab6 cb7 eb7 g7] [f7 ab7 cb8 ~]")
  .slow(3.0)
  .sound("pulse")
  .detune(rand.range(-25,55).slow(3.8))
  .ring(sine.range(0.1,0.4).slow(4))
  .gain(0.53)

$: stack(
  s("bd [bd ~ bd]").euclid(13,16),
  s("~ sn [cp ~ sn cp]").euclid(9,16).fast(1.9),
  s("[hh*3 oh*6 ~ hh*3]").sometimes(rev).degradeBy(0.28)
)
  .slow(2.5)
  .swing(0.68)
  
  .orbit(1)
  .gain(0.62)

$: s("~ [hh*18 oh*3 cp*4] , [cp*5 hh*16 oh*4 ~]")
  .fast(4.4)
  .jux(rev)
  .delay(0.38)
  .pan(sine.range(0.2,0.8).slow(3.2))
  .gain(0.5)

$: s("[goldberg*2 cosmic evolve*2] [glitch*4 groove whisper*3] , [evolve*3 goldberg ~ cosmic*2] [glitch*2 whisper groove*3 ~]")
  .slow(2.9)
  .speed(perlin.range(0.6,1.8).slow(4.8))
  .chop(saw.range(6,28).slow(3.2))
  .vowel("a o u i e")
  .gain(0.58)