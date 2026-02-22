setcps(172/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove,evolve')

$: note("[eb4 g4 bb4 d5 f5 c6 eb6 g6]*2 , [bb4 d5 f5 ab5 c6 eb6 g6 bb6]*2 [g5 d6 f6 bb6 c7 eb7 ~]")
  .slow(3.2)
  .sound("sawtooth")
  .lpf(sine.range(120,7500).slow(2.9))
  .phaser(perlin.range(0.05,0.85).slow(4.5))
  .gain(0.52)

$: note("c2 [eb2 g2 bb2 d3 f3 c4 eb4]*2 [bb1 eb2 g2 bb2 d3 f3 ab4 c5] [eb2 g3 bb3 d4 f4 ab4 ~]")
  .slow(3.5)
  .sound("supersaw")
  .fm(tri.range(0.4,7.5).slow(3.2))
  .hpf(saw.range(40,95).slow(4.9))
  .gain(0.54)

$: note("g4 [bb4 d5 f5 ab5 c6 eb6 g6]*3 [g5 bb5 d6 f6 ab6 c7 eb7] , f5 [g6 bb6 d7 f7 ab7 c8 eb8] [g7 bb7 d8 ~]")
  .slow(3.1)
  .sound("pulse")
  .fmi(sine.range(0.8,6.2).slow(4.4))
  .detune(rand.range(-28,60).slow(4.3))
  .gain(0.55)

$: stack(
  s("bd [bd ~ bd bd]").euclid(13,16),
  s("~ [sn cp sn ~]").euclid(11,16).fast(1.8),
  s("[hh*5 oh*4 ~ hh*2]").sometimesBy(0.45, rev).degradeBy(0.25)
)
  .slow(2.9)
  .swing(0.72)
  
  .orbit(1)
  .gain(0.65)

$: s("~ [hh*16 oh*4 cp*5] , [cp*6 hh*14 oh*6 ~]")
  .fast(4.6)
  .jux(rev)
  .delay(0.42)
  .pan(tri.range(0.05,0.95).slow(3.4))
  .gain(0.52)

$: s("[goldberg*3 cosmic*3 glitch*4] [evolve*4 groove*4 whisper*2 ~] , [cosmic*4 goldberg*3 evolve*2 glitch*3] [whisper*3 groove*2 cosmic goldberg ~]")
  .slow(3.1)
  .speed(perlin.range(0.45,2.05).slow(4.4))
  .chop(saw.range(5,26).slow(3.3))
  .crush(perlin.range(3,14).slow(5.6))
  .gain(0.61)