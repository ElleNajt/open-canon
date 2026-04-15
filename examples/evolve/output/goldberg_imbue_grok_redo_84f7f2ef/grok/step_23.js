setcps(145/60/4)
samples('shabda/speech:strudel,groove,evolving')

$: note("g3 bb3 d4 fs4 bb4 d5 ~ fs5 eb4 g3 f3 ab3 c4 eb4 fs4 d5 g5 bb5 fs5 d5")
  .slow(4)
  .every(7,x=>x.rev().tremolo(0.5).detune(perlin.range(-25,45)))
  .sound("sawtooth")
  .lpf(sine.range(350,7500).slow(3.5))
  .gain(0.46)

$: stack(
  euclid(3,16,"bd").gain(0.88),
  euclid(2,16,"sn cp?").gain(0.78),
  s("~ [hh*5 oh rd? hh*3]?").degradeBy(0.42)
)
  .swing(0.78)
  .room(0.72)
  .delay(0.38)
  .jux(x=>x.rev().pan(0.25))
  .gain(0.56)

$: note("g1 bb1 d2 fs2 bb2 d3 fs3 eb2 g1 f1 ab1 c2 eb2 fs2 d3 g3 bb3")
  .slow(4)
  .every(9,x=>x.rev().add(12))
  .sound("supersaw")
  .fm(sine.range(0.3,7.5).slow(3.8))
  .gain(0.5)

$: note("[bb3 d4 g4 bb4]*2 [ab3 c4 eb4 ab4]*2 [g3 bb3 d4 fs4]*2 [f3 ab3 cs4 f4 ~]")
  .slow(2.8)
  .every(6,x=>x.voicing().pan(rand.range(0.15,0.85)))
  .sound("piano")
  .hpf(110)
  .gain(0.47)

$: n("0 [3 7 ~] [2 5 9] [12 14 ~ 2 0]").scale("G:phrygian")
  .fast(2.8)
  .sound("pulse")
  .lpf(perlin.range(220,5800).slow(2.2))
  .gain(0.44)

$: s("[strudel*3 [groove evolving ~]*2],[~ [groove*4 strudel] evolving*2 ?],[strudel*3 groove*4 evolving ~]")
  .slow(2.2)
  .chop(perlin.range(10,30).slow(2.8))
  .speed(sine.range(0.75,1.45))
  .hpf(sine.range(90,1300).slow(4.5))
  .gain(0.58)