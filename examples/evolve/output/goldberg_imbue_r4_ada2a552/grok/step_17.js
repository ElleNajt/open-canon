setcps(125/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove,evolve')

$: note("[c4 eb4 f4 a4]*2 [fs4 bb4 c5 eb5 fs5] [f5 c6 eb6 g6 bb6 ~]")
  .slow(3.9)
  .sound("sawtooth")
  .lpf(perlin.range(280,4200).slow(3.1))
  .room(0.35)
  .gain(0.48)

$: note("ab1 [c2 eb2 g2]*2 [fs1 b1 c2 eb3 fs3] [ab2 c3 eb3 g3 ~]")
  .slow(4.2)
  .sound("supersaw")
  .fm(sine.range(0.25,3.2).slow(2.3))
  .leslie(sine.range(0.35,0.85).slow(3.2))
  .delay(0.22)
  .gain(0.42)

$: note("eb5 [g5 bb5 db6]*2 [eb6 g6 bb6 db7] , db6 [eb7 g7 bb7 db8] [eb8 g8 bb8 db9]")
  .slow(2.0)
  .sound("pulse")
  .detune(sine.range(-38,58).slow(3.4))
  .phaser(0.28)
  .every(8,rev)
  .gain(0.52)

$: stack(
  s("bd ~ bd bd").euclid(11,16),
  s("~ sn cp ~ sn cp").euclid(9,16).fast(1.7),
  s("[hh*6 ~ oh*3 ~]").sometimes(rev).degradeBy(0.32)
)
  .slow(2.2)
  .swing(0.68)
  .crush(0.28)
  
  .pan(rand.range(0.2,0.8))
  .gain(0.62)

$: s("~ [hh*16 oh*2 cp] , [cp*8 hh*6 oh*5 cp*2]")
  .fast(4.3)
  .jux(rev)
  .delay(0.38)
  .hpf(cosine.range(750,4800).slow(3.3))
  .tremolo(0.35)
  .gain(0.39)

$: s("[goldberg*2 cosmic] [whisper*2 glitch*2 groove] , [evolve*4 goldberg cosmic] [whisper glitch groove*2 evolve goldberg]")
  .slow(2.7)
  .speed(perlin.range(0.55,1.75).slow(3.5))
  .chop(sine.range(8,32))
  .tremolo(0.45)
  .distort(0.18)
  .gain(0.48)