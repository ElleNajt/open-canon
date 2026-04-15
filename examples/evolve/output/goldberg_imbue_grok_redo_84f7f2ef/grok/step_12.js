setcps(102/60/4)
samples('shabda/speech:strudel,groove,evolving')

$: note("g3 bb3 c4 d4 e4 fs4 g4 d4 f2 eb3 bb2 ~")
  .slow(4)
  .every(4,x=>x.rev().tremolo(0.5).detune(20))
  .sound("sawtooth")
  .vowel("e o a")
  .gain(0.45)

$: stack(
  euclid(7,16,"bd").gain(0.7),
  euclid(6,16,"sn cp").gain(0.6),
  s("hh*8?,oh*16,rd*4").degradeBy(0.3)
)
  .swing(0.35)
  .gain(0.45)
  .room(0.45)
  .delay(0.2)

$: note("g2 bb2 d3 fs3 ~ g3 bb3 d4 fs4 eb3")
  .slow(2.5)
  .every(4,x=>x.add(12))
  .sound("supersaw")
  .fm(sine.range(0.5,4).slow(3))
  .leslie(0.5)
  .gain(0.38)

$: note("[bb3 d4 g4] [a3 cs4 fs4 a4] [g3 bb3 e4 g4] [ab3 c4 f4 ab4]")
  .slow(2)
  .every(4,x=>x.rev().pan(sine.range(0.1,0.9)))
  .sound("piano")
  .gain(0.42)
  .room(0.3)

$: n("0 3 7 ~ 2 5 9,12 0 7 10 2").scale("G:mixolydian")
  .fast(3.5)
  .sound("pulse")
  .lpf(saw.range(600,3200).slow(4))
  .phaser(sine.range(0.4,0.9))
  .gain(0.42)

$: s("[strudel*3 ~ groove evolving],[groove*2 evolving*2 strudel? ~]")
  .slow(3.5)
  .every(4,x=>x.rev().chop(rand.range(16,28)))
  .gain(0.35)
  .room(0.85)
  .speed(perlin.range(0.75,1.45))