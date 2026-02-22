setcps(125/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove,evolve')

$: note("[c4 eb4 f4 a4]*2 [fs4 bb4 c5 eb5] [f5 c6 eb6 g6] ~")
  .slow(3.7)
  .sound("sawtooth")
  .lpf(perlin.range(280,4200).slow(2.9))
  .lpq(3.2)
  .every(10,rev)
  .gain(0.5)

$: note("ab1 [c2 eb2 g2]*2 [fs1 b1 c2 eb3] [ab2 c3 eb3 ~]")
  .slow(4.4)
  .sound("supersaw")
  .fm(sine.range(0.25,3.2).slow(2.1))
  .leslie(sine.range(0.35,0.85).slow(3))
  .gain(0.45)

$: note("eb5 [g5 bb5 db6]*2 [eb6 g6 bb6 db7] , db6 [eb7 g7 bb7] [db8 eb8 g8 bb8]")
  .slow(2.1)
  .sound("pulse")
  .detune(sine.range(-38,58).slow(3.2))
  .every(7,rev)
  .gain(0.55)

$: stack(
  s("bd bd ~ bd").euclid(11,16),
  s("~ sn cp sn").euclid(9,16).fast(1.6),
  s("[hh*5 ~ oh*4]").sometimes(rev).degradeBy(0.28)
)
  .slow(2.4)
  .swing(0.64)
  .crush(0.32)
  
  .gain(0.66)

$: s("~ hh*14 [oh*3 cp] , [cp*6 hh*7 oh*4 cp]")
  .fast(4.1)
  .jux(rev)
  .delay(0.42)
  .hpf(cosine.range(750,4800).slow(3.1))
  .gain(0.41)

$: s("[goldberg cosmic*2] [whisper glitch groove] , [evolve*3 goldberg ~] [cosmic whisper*2 glitch groove evolve]")
  .slow(2.9)
  .speed(perlin.range(0.55,1.75).slow(3.3))
  .chop(sine.range(7,34))
  .tremolo(0.42)
  .gain(0.5)