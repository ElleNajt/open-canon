setcps(97/60/4)
samples('shabda/speech:strudel,groove,evolving')

$: note("g3 bb3 c4 d4 e4 fs4 g4 d4 f2 eb3 ~")
  .slow(3)
  .every(4,x=>x.rev().tremolo(0.4).detune(15))
  .sound("sawtooth")
  .lpf(perlin.range(400,2000))
  .gain(0.42)

$: stack(
  euclid(8,16,"bd").gain(0.65),
  euclid(5,16,"sn cp").gain(0.55),
  s("hh*8?,oh*16").degradeBy(0.2)
)
  .swing(0.3)
  .gain(0.4)
  .room(0.4)
  .delay(0.15)

$: note("g2 bb2 d3 fs3 ~ g3 bb3 d4 fs4")
  .slow(2.5)
  .every(4,x=>x.sub(12))
  .sound("supersaw")
  .fm(sine.range(1,5).slow(2))
  .leslie(0.4)
  .gain(0.35)

$: note("[bb3 d4 g4] [a3 cs4 fs4 a4] [g3 bb3 e4 g4] [f3 a3 d4 f4]")
  .slow(2)
  .every(4,x=>x.rev().pan(cosine.range(0.2,0.8)))
  .sound("piano")
  .gain(0.4)
  .room(0.25)

$: n("0 3 7 ~ 2 5,9 12 0 7 10").scale("G:mixolydian")
  .fast(4)
  .sound("pulse")
  .lpf(saw.range(500,3000).slow(3))
  .phaser(sine.range(0.3,0.8))
  .gain(0.4)

$: s("[strudel*2 groove evolving ~],[evolving*2 ~ groove strudel?]")
  .slow(4)
  .every(4,x=>x.rev().chop(rand.range(12,24)))
  .gain(0.32)
  .room(0.8)
  .speed(perlin.range(0.7,1.4))