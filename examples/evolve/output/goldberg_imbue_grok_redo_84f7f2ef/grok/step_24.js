setcps(152/60/4)
samples('shabda/speech:strudel,groove,evolving')

$: note("g3 bb3 d4 fs4 bb4 d5 ~ fs5 eb4 g3 f3 ab3 c4 eb4 fs4 d5 g5 bb5 fs5 d5 eb5")
  .slow(4)
  .every(7,x=>x.rev().phaser(0.4).detune(perlin.range(-30,50)))
  .sound("sawtooth")
  .lpf(cosine.range(320,8200).slow(4))
  .gain(0.48)

$: stack(
  euclid(3,16,"bd").gain(0.9),
  euclid(2,16,"sn cp?").gain(0.8),
  s("~ [hh*5 oh rd? hh*3]?").degradeBy(0.45)
)
  .swing(0.82)
  .room(0.75)
  .delay(0.42)
  .jux(x=>x.rev().pan(0.3))
  .gain(0.6)

$: note("g1 bb1 d2 fs2 bb2 d3 fs3 eb2 g1 f1 ab1 c2 eb2 fs2 d3 g3 bb3 d4")
  .slow(4)
  .every(9,x=>x.rev().add(12))
  .sound("supersaw")
  .ring(sine.range(0.25,0.85))
  .gain(0.52)

$: note("[bb3 d4 g4 bb4]*2 [ab3 c4 eb4 ab4]*2 [g3 bb3 d4 fs4]*2 [f3 ab3 cs4 f4 ~]")
  .slow(2.8)
  .every(6,x=>x.voicing().pan(rand.range(0.1,0.9)))
  .sound("piano")
  .attack(0.015)
  .decay(0.35)
  .gain(0.48)

$: n("0 [3 7 ~] [2 5 9] [12 14 ~ 2 0]").scale("G:phrygian")
  .fast(2.9)
  .sound("pulse")
  .lpf(perlin.range(200,6200).slow(2.3))
  .detune(18)
  .gain(0.45)

$: s("[strudel*3 [groove evolving ~]*2],[~ [groove*4 strudel] evolving*2 ?],[strudel*3 groove*4 evolving ~]")
  .slow(2.1)
  .chop(perlin.range(12,32).slow(3))
  .speed(sine.range(0.8,1.4))
  .room(0.38)
  .gain(0.6)