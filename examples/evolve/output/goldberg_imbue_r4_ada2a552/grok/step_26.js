setcps(172/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove,evolve')

$: note("[eb4 g4 bb4 d5 f5 c6 eb6]*2 , [bb4 d5 f5 ab5 c6 eb6 g6]*2 [g5 d6 f6 bb6 c7 ~]")
  .slow(3.4)
  .sound("sawtooth")
  .lpf(sine.range(140,7200).slow(2.8))
  .phaser(perlin.range(0.1,0.8).slow(4.8))
  .gain(0.55)

$: note("c2 [eb2 g2 bb2 d3 f3 c4]*2 [bb1 eb2 g2 bb2 d3 f3 ab4] [c2 f3 g3 bb3 eb4 g4 ~]")
  .slow(3.7)
  .sound("supersaw")
  .fm(tri.range(0.3,7.2).slow(3.1))
  .hpf(saw.range(45,90).slow(5.1))
  .gain(0.53)

$: note("g4 [bb4 d5 f5 ab5 c6 eb6]*3 [g5 bb5 d6 f6 ab6 c7 g7] , f5 [g6 bb6 d7 f7 ab7 c8] [g7 bb7 d8 ~]")
  .slow(3.3)
  .sound("pulse")
  .fmi(sine.range(1.0,5.8).slow(4.2))
  .detune(rand.range(-32,56).slow(4.1))
  .gain(0.56)

$: stack(
  s("bd [bd ~ bd bd]").euclid(13,16),
  s("~ [sn cp sn ~]").euclid(11,16).fast(1.9),
  s("[hh*5 oh*4 ~ hh*2]").sometimesBy(0.42, rev).degradeBy(0.28)
)
  .slow(2.8)
  .swing(0.68)
  
  .orbit(1)
  .gain(0.66)

$: s("~ [hh*18 oh*3 cp*4] , [cp*5 hh*12 oh*7 ~]")
  .fast(4.8)
  .jux(rev)
  .delay(0.38)
  .pan(tri.range(0.1,0.9).slow(3.2))
  .gain(0.51)

$: s("[goldberg*4 cosmic*2 glitch*3] [evolve*3 groove*5 whisper ~] , [cosmic*3 goldberg*2 evolve glitch*2] [whisper*2 groove cosmic ~]")
  .slow(3.3)
  .speed(perlin.range(0.48,1.95).slow(4.2))
  .chop(saw.range(4,28).slow(3.1))
  .crush(perlin.range(4,12).slow(5.8))
  .gain(0.62)