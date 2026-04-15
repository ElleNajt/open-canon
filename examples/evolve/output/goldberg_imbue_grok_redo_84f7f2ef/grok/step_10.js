setcps(94/60/4)
samples('shabda/speech:strudel,groove,evolving')

$: note("g3 ~ bb3 c4 d4 e4 fs4 g4 ~ d4 f2 eb3 g3")
  .slow(2.8)
  .every(4,x=>x.rev().tremolo(0.3))
  .sound("sawtooth")
  .lpf(perlin.range(300,1600))
  .gain(0.4)

$: stack(
  euclid(7,16,"bd").gain(0.6),
  euclid(4,16,"sn cp").gain(0.5),
  s("hh*16 oh*8?").degradeBy(0.15)
)
  .swing(0.25)
  .gain(0.35)
  .room(0.35)
  .hpf(120)

$: note("g2 ~ bb2 d3 fs3 ~ g3 bb3 d4 fs4")
  .slow(2.2)
  .every(3,x=>x.add(-12))
  .sound("supersaw")
  .fm(sine.range(1.2,4.8).slow(1.8))
  .gain(0.32)

$: note("[bb3 d4 g4 bb4] [a3 cs4 fs4 a4] [g3 bb3 e4 g4] [f3 a3 d4 f4]")
  .slow(1.9)
  .every(4,x=>x.rev().pan(sine.range(0.3,0.7)))
  .sound("piano")
  .gain(0.38)
  .room(0.2)

$: n("0 3 7 10 ~ 2 5, 9 12 0 ~ 7 10").scale("G:mixolydian")
  .fast(3.8)
  .sound("pulse")
  .lpf(tri.range(400,3200).slow(2.5))
  .phaser(sine.range(0.2,0.6))
  .gain(0.38)

$: s("[strudel*3 groove evolving ~] groove*2 [~ strudel evolving*2], [evolving*3 ~ groove?]")
  .slow(3.7)
  .every(8,x=>x.rev().chop(sine.range(10,20)))
  .gain(0.28)
  .room(0.75)
  .speed(perlin.range(0.75,1.3))