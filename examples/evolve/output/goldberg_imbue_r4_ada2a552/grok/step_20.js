setcps(142/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove,evolve')

$: note("[db4 f4 ab4 c5]*2 [g4 bb4 db5 f5] [ab5 eb6 g6 bb6 c6 ~]")
  .slow(4)
  .sound("sawtooth")
  .lpf(sine.range(250,5500).slow(3.5))
  .detune(perlin.range(-25,45).slow(4.1))
  .gain(0.5)

$: note("bb0 [db2 f2 ab2]*2 [g1 c2 db2 f3 ab3] [bb2 eb3 f3 ab3 db4 ~]")
  .slow(4)
  .sound("supersaw")
  .fm(sine.range(0.4,4.5).slow(2.6))
  .leslie(saw.range(0.2,1.1).slow(4))
  .gain(0.44)

$: note("f5 [ab5 cb6 eb6]*2 [f6 ab6 cb7 eb7] , eb6 [f7 ab7 cb8 eb8] [f8 ab8 cb9 eb10 f9]")
  .slow(2.4)
  .sound("pulse")
  .detune(rand.range(-45,75).slow(3))
  .phaser(0.45)
  .gain(0.6)

$: stack(
  s("bd [~ bd bd]").euclid(13,16),
  s("~ sn [cp ~ sn]").euclid(11,16).fast(1.9),
  s("[hh*6 oh*3 ~ hh*2]").often(rev).degradeBy(0.28)
)
  .slow(2.6)
  .swing(0.7)
  .crush(0.32)
  .gain(0.64)

$: s("~ [hh*20 oh*2 cp*5] , [cp*8 hh*10 oh cp*4]")
  .fast(4.6)
  .jux(rev)
  .delay(0.4)
  .hpf(cosine.range(450,5800).slow(3))
  .gain(0.47)

$: s("[evolve*2 cosmic goldberg] [glitch*4 groove whisper evolve] , [goldberg*3 cosmic*4 ~] [whisper*2 glitch groove*3 evolve*2]")
  .slow(3.1)
  .speed(perlin.range(0.45,2.05).slow(4.5))
  .chop(sine.range(6,28).slow(2))
  .pan(rand.range(0.05,0.98))
  .gain(0.57)