setcps(168/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove,evolve')

$: note("[eb4 g4 bb4 d5 f5 c6]*2 , [bb4 d5 f5 ab5 c6 eb6]*3 [g5 d6 f6 bb6 c7 ~]")
  .slow(3.2)
  .sound("sawtooth")
  .lpf(sine.range(160,6800).slow(3.0))
  .phaser(perlin.range(0.2,0.7).slow(4.2))
  .gain(0.52)

$: note("c2 [eb2 g2 bb2 d3 f3]*3 [bb1 eb2 g2 bb2 d3 f3] [c2 f3 g3 bb3 eb4 ~]")
  .slow(3.5)
  .sound("supersaw")
  .fm(tri.range(0.4,6.8).slow(3.3))
  .hpf(saw.range(50,85).slow(5.5))
  .gain(0.51)

$: note("g4 [bb4 d5 f5 ab5 c6]*2 [g5 bb5 d6 f6 ab6 c7] , f5 [g6 bb6 d7 f7 ab7] [g7 bb7 d8 ~]")
  .slow(3.1)
  .sound("pulse")
  .fmi(sine.range(1.2,5.4).slow(4.5))
  .detune(rand.range(-28,52).slow(3.9))
  .gain(0.54)

$: stack(
  s("bd [bd ~ bd]").euclid(12,16),
  s("~ [sn cp ~ sn]").euclid(10,16).fast(2),
  s("[hh*4 oh*5 ~ hh*3]").sometimesBy(0.35, rev).degradeBy(0.32)
)
  .slow(2.6)
  .swing(0.72)
  
  .orbit(1)
  .gain(0.64)

$: s("~ [hh*20 oh*2 cp*5] , [cp*4 hh*14 oh*6 ~]")
  .fast(4.6)
  .jux(rev)
  .delay(0.4)
  .pan(tri.range(0.15,0.85).slow(2.8))
  .gain(0.49)

$: s("[goldberg*3 cosmic glitch*2] [evolve groove*4 whisper ~] , [cosmic*2 goldberg evolve glitch] [whisper groove*2 cosmic ~]")
  .slow(3.1)
  .speed(perlin.range(0.55,1.85).slow(4.6))
  .chop(saw.range(5,26).slow(3.3))
  .crush(perlin.range(5,11).slow(5.2))
  .gain(0.6)