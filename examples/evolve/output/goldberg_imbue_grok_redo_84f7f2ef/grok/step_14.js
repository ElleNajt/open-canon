setcps(110/60/4)
samples('shabda/speech:strudel,groove,evolving')

$: note("g3 bb3 d4 fs4 bb4 d5 fs5 ~ eb4 bb3 g3 f3 ab3 c4 eb4")
  .slow(3)
  .every(4,x=>x.rev().tremolo(0.6).detune(perlin.range(-20,20)))
  .sound("sawtooth")
  .phaser(sine.range(0.2,0.8))
  .gain(0.42)

$: stack(
  euclid(5,16,"bd").gain(0.75),
  euclid(7,16,"sn cp").gain(0.55),
  s("hh*8?,oh*4,rd*2").degradeBy(0.25)
)
  .swing(0.45)
  .crush(perlin.range(6,10))
  .gain(0.48)
  .room(0.5)

$: note("g2 bb2 d3 fs3 ~ g3 bb3 d4 fs4 eb3 bb2")
  .slow(2.5)
  .every(4,x=>x.add(12))
  .sound("supersaw")
  .fm(sine.range(0.8,4).slow(3))
  .distort(0.3)
  .gain(0.4)

$: note("[bb3 d4 g4] [ab3 c4 f4 ab4] [g3 bb3 e4 g4] [a3 cs4 fs4 a4]")
  .slow(2)
  .every(4,x=>x.rev().pan(perlin.range(0.25,0.75)))
  .sound("piano")
  .hpf(160)
  .gain(0.45)

$: n("0 3 7 ~ 2 5 9, [12 0 7 10] 2").scale("G:mixolydian")
  .fast(4)
  .sound("pulse")
  .lpf(saw.range(500,3200).slow(3))
  .phaser(sine.range(0.3,0.9))
  .gain(0.4)

$: s("[strudel*2 groove evolving],[groove*3 strudel evolving*2 ~]")
  .slow(4)
  .chop(rand.range(12,28))
  .speed(perlin.range(0.75,1.4))
  .vowel("e o a i")
  .gain(0.38)
  .room(0.8)