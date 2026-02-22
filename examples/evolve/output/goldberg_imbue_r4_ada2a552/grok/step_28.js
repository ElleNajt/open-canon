setcps(168/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove,evolve')

$: note("[eb4 g4 bb4 d5 f5 c6 eb6 g6]*2 , [bb4 d5 f5 ab5 c6 eb6 g6 bb6]*2 [g5 d6 f6 bb6 c7 eb7 ~]")
  .slow(perlin.range(2.8,3.6))
  .sound("sawtooth")
  .lpf(sine.range(80,8000).slow(2.7))
  .tremolo(perlin.range(0.2,0.8).slow(4.2))
  .gain(0.51)

$: note("c2 [eb2 g2 bb2 d3 f3 c4 eb4]*2 [bb1 eb2 g2 bb2 d3 f3 ab4 c5] [eb2 g3 bb3 d4 f4 ab4 ~]")
  .slow(perlin.range(3.2,3.8))
  .sound("supersaw")
  .fm(tri.range(0.3,8).slow(3.4))
  .hpf(saw.range(35,105).slow(4.7))
  .gain(0.53)

$: note("g4 [bb4 d5 f5 ab5 c6 eb6 g6]*3 , [g5 bb5 d6 f6 ab6 c7 eb7] f5 [g6 bb6 d7 f7 ab7 c8 eb8] [g7 bb7 d8 ~]")
  .slow(3.2)
  .sound("pulse")
  .fmi(sine.range(0.6,7).slow(4.1))
  .detune(rand.range(-35,65).slow(4.6))
  .gain(0.56)

$: stack(
  s("bd [bd ~ bd bd]").euclid(11,16).sometimesBy(0.32, rev),
  s("~ [sn cp sn ~]").euclid(9,16).fast(1.9),
  s("[hh*5 oh*4 ~ hh*2]").degradeBy(0.28)
)
  .slow(perlin.range(2.6,3.2))
  .swing(0.68)
  
  .room(0.38)
  .gain(0.64)

$: s("~ [hh*16 oh*4 cp*5] , [cp*6 hh*14 oh*6 ~]")
  .fast(perlin.range(4.2,4.9))
  .jux(rev)
  .delay(0.38)
  .pan(sine.range(0.1,0.9).slow(3.2))
  .gain(0.51)

$: s("[goldberg*3 cosmic*3 glitch*4] [evolve*4 groove*4 whisper*2 ~] , [cosmic*4 goldberg*3 evolve*2 glitch*3] [whisper*3 groove*2 cosmic goldberg ~]")
  .slow(3.0)
  .speed(perlin.range(0.4,2.2).slow(4.2))
  .chop(saw.range(6,24).slow(3.1))
  .crush(rand.range(4,15).slow(5.3))
  .gain(0.6)