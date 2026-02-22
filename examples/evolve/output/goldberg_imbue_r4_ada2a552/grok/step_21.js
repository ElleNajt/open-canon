setcps(146/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove,evolve')

$: note("[db4 f4 ab4 c5]*2 [g4 bb4 db5 f5 ab5] [ab5 eb6 g6 bb6 c6 eb6 ~]")
  .slow(3.5)
  .sound("sawtooth")
  .lpf(cosine.range(280,5200).slow(2.8))
  .detune(perlin.range(-20,40).slow(4.8))
  .gain(0.52)

$: note("bb1 [db2 f2 ab2]*2 [g1 c2 db2 f3 ab3] [bb2 eb3 f3 ab3 db4 eb4 ~]")
  .slow(3.8)
  .sound("supersaw")
  .fm(sine.range(0.35,4.2).slow(2.9))
  .leslie(tri.range(0.15,1.0).slow(3.8))
  .gain(0.43)

$: note("f4 [ab4 cb5 eb5]*2 [f5 ab5 cb6 eb6] , eb5 [f6 ab6 cb7 eb7] [f7 ab7 cb8 eb8 ~]")
  .slow(2.6)
  .sound("pulse")
  .detune(rand.range(-35,65).slow(2.7))
  .phaser(sine.range(0.2,0.7).slow(5))
  .gain(0.58)

$: stack(
  s("bd [~ bd bd]").euclid(13,16),
  s("~ sn [cp ~ sn]").euclid(11,16).fast(1.8),
  s("[hh*5 oh*4 ~ hh*3]").sometimes(rev).degradeBy(0.22)
)
  .slow(2.4)
  .swing(0.68)
  .crush(0.28)
  .room(0.38)
  .gain(0.62)

$: s("~ [hh*18 oh*3 cp*4] , [cp*7 hh*12 oh*2 cp*5]")
  .fast(4.3)
  .jux(rev)
  .delay(0.38)
  .hpf(saw.range(420,5600).slow(3.2))
  .gain(0.49)

$: s("[evolve*2 cosmic goldberg] [glitch*3 groove*2 whisper] , [goldberg cosmic*3 ~ evolve] [whisper glitch*2 groove evolve*3]")
  .slow(2.9)
  .speed(perlin.range(0.52,1.92).slow(4.2))
  .chop(sine.range(8,26).slow(2.3))
  .distort(perlin.range(0.08,0.22).slow(6))
  .gain(0.55)