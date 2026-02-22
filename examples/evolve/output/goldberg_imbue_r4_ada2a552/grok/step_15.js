setcps(120/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove,evolve')

$: note("[c4 eb4 f4 a4] [fs4 bb4 c5 eb5] [f5 c6 eb6 g6] ~")
  .slow(4)
  .sound("sawtooth")
  .lpf(perlin.range(300,4000).slow(3))
  .lpq(4)
  .gain(0.5)

$: note("ab1 [c2 eb2 g2] [fs1 b1 c2 eb3]")
  .slow(4.5)
  .sound("supersaw")
  .fm(sine.range(0.2,3).slow(2))
  .leslie(sine.range(0.3,0.9))
  .gain(0.45)

$: note("eb5 [g5 bb5 db6] [eb6 g6 bb6 db7] , db6 [eb7 g7 bb7] [db8 eb8 g8] [bb8 ~]")
  .slow(2)
  .sound("pulse")
  .detune(sine.range(-40,60).slow(3))
  .every(8,rev)
  .gain(0.55)

$: stack(
  s("bd bd ~ bd").euclid(10,16),
  s("~ sn cp sn").euclid(8,16).fast(1.5),
  s("[hh*4 ~ oh*6]").sometimes(rev).degradeBy(0.35)
)
  .slow(2.5)
  .swing(0.6)
  .crush(0.3)
  
  .gain(0.65)

$: s("~ hh*12 [oh*4 cp] , cp*5 [hh*8 oh*3 cp*2]")
  .fast(4)
  .jux(rev)
  .delay(0.4)
  .hpf(cosine.range(800,5000).slow(3))
  .gain(0.42)

$: s("[cosmic*2 goldberg ~] [evolve glitch*3] , [whisper groove cosmic] [goldberg*2 ~ evolve glitch]")
  .slow(3)
  .speed(perlin.range(0.5,1.8).slow(3))
  .chop(sine.range(8,32))
  .tremolo(0.4)
  .gain(0.5)