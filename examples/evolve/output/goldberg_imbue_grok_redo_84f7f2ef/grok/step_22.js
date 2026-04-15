setcps(140/60/4)
samples('shabda/speech:strudel,groove,evolving')

$: note("g3 bb3 d4 fs4 bb4 d5 fs5 eb4 g3 f3 ab3 c4 eb4 fs4 d5 g5 bb5 fs5")
  .slow(4)
  .every(7,x=>x.rev().tremolo(0.6).detune(perlin.range(-30,40)))
  .sound("sawtooth")
  .lpf(sine.range(300,7200).slow(3))
  .gain(0.48)

$: stack(
  euclid(3,16,"bd").gain(0.9),
  euclid(3,16,"sn cp").gain(0.8),
  s("hh*8? [oh*3 rd? hh*4]?").degradeBy(0.45)
)
  .swing(0.75)
  .room(0.75)
  .delay(0.4)
  .gain(0.58)

$: note("g1 bb1 d2 fs2 bb2 d3 fs3 eb2 g1 f1 ab1 c2 eb2 fs2 d3 g3 bb3")
  .slow(4)
  .every(12,x=>x.rev().add(7))
  .sound("supersaw")
  .fm(sine.range(0.2,8).slow(4))
  .gain(0.52)

$: note("[bb3 d4 g4 bb4]*2 [ab3 c4 eb4 ab4]*2 [g3 bb3 d4 fs4]*2 [f3 ab3 cs4 f4 ~]")
  .slow(2.5)
  .every(8,x=>x.voicing().pan(rand.range(0.1,0.9)).late(0.05))
  .sound("piano")
  .hpf(100)
  .gain(0.48)

$: n("0 [3 7 ~] [2 5 9] [12 14 2 0 ~]").scale("G:phrygian")
  .fast(3)
  .sound("pulse")
  .lpf(perlin.range(180,6200).slow(2))
  .phaser(saw.range(0.2,1).slow(4))
  .gain(0.45)

$: s("[strudel*4 [groove evolving]*2 ~],[~ [groove*3 strudel] evolving*3],[strudel*2 groove*5 ~ ?]")
  .slow(2.5)
  .chop(perlin.range(8,32).slow(3))
  .speed(sine.range(0.7,1.5))
  .hpf(sine.range(80,1400).slow(5))
  .gain(0.6)