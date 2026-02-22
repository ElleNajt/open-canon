setcps(158/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove,evolve')

$: note("[db4 f4 ab4 c5 eb5]*4 , [g4 bb4 db5 f5 ab5 cb6]*2 [ab5 eb6 g6 bb6 c7 eb7 ~ ~]")
  .slow(3.0)
  .sound("sawtooth")
  .lpf(saw.range(200,6000).slow(2.8))
  .sometimes(rev)
  .gain(0.52)

$: note("bb1 [db2 f2 ab2 cb3]*2 [g1 c2 e2 g2 bb2 db3] [bb2 eb3 f3 ab3 db4 eb4 ~]")
  .slow(3.3)
  .sound("supersaw")
  .fm(sine.range(0.1,5).slow(2.8))
  .leslie(sine.range(0.1,0.8).slow(5))
  .gain(0.48)

$: note("f4 [ab4 cb5 eb5 g5]*2 [f5 ab5 cb6 eb6 g6] , eb5 [f6 ab6 cb7 eb7 g7] [f7 ab7 cb8 eb8 ~]")
  .slow(2.9)
  .sound("pulse")
  .detune(rand.range(-30,60).slow(4))
  .phaser(tri.range(0.05,0.9).slow(3.5))
  .gain(0.55)

$: stack(
  s("bd [bd ~ bd]").euclid(13,16),
  s("~ sn [cp ~ sn]").euclid(9,16).fast(2.0),
  s("[hh*4 oh*5 ~ hh*2]").sometimes(rev).degradeBy(0.3)
)
  .slow(2.4)
  .swing(0.65)
  .crush(perlin.range(0.1,0.4).slow(8))
  .room(0.35)
  .gain(0.65)

$: s("~ [hh*16 oh*4 cp*5] , [cp*6 hh*14 oh*3 cp*4]")
  .fast(4.3)
  .jux(rev)
  .delay(0.35)
  .hpf(sine.range(300,6000).slow(4))
  .gain(0.52)

$: s("[goldberg cosmic*2 evolve*3] [glitch*3 groove ~ whisper*2] , [evolve*4 goldberg cosmic ~] [glitch whisper*3 groove*2 evolve*3]")
  .slow(2.8)
  .speed(perlin.range(0.5,1.9).slow(5))
  .chop(saw.range(8,24).slow(3))
  .distort(rand.range(0.05,0.3).slow(6))
  .gain(0.6)