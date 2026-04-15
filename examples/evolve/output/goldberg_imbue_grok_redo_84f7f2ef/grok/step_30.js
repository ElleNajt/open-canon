setcps(168/60/4)
samples('shabda/speech:strudel,groove,evolving,ai,code,live')

$: note("g3 bb3 d4 fs4 bb4 d5 ~ fs5 eb4 g3 f3 ab3 c4 eb4 fs4 d5 g5 bb5 fs5 d5 eb5 g5 fs5")
  .slow(4)
  .every(4,x=>x.rev().echo(3,0.125,0.6).sometimes(x=>x.add(12)))
  .sound("sawtooth")
  .detune(sine.range(-30,40).slow(6))
  .gain(0.45)
  .fm(0.35)

$: stack(
  euclid(4,16,"bd").gain(0.85),
  euclid(3,16,"sn cp?").gain(0.75),
  s("~ [hh*3 oh rd? hh*2 oh]?").degradeBy(0.45)
)
  .swing(0.88)
  .room(0.7)
  .delay(0.45)
  .coarse(perlin.range(3,10))
  .gain(0.58)

$: note("g1 bb1 d2 fs2 bb2 d3 ~ eb2 g1 f1 ab1 c2 eb2 fs2 d3 g3 bb3 fs4 d5")
  .slow(4)
  .every(8,x=>x.rev().add(12))
  .sound("supersaw")
  .phaser(perlin.range(0.3,1.1))
  .gain(0.5)

$: note("[bb3 d4 g4 bb4]*2 [ab3 c4 eb4 ab4]*2 [g3 bb3 d4 fs4]*2 [f3 ab3 cs4 f4 ~]")
  .slow(3)
  .every(7,x=>x.voicing().pan(rand.range(0.1,0.9)))
  .sound("piano")
  .attack(0.02)
  .gain(0.48)

$: n("0 [3 7 ~] [2 5 9 12] [14 ~ 1 0]").scale("G:phrygian")
  .fast(3)
  .sound("pulse")
  .hpf(sine.range(150,450).slow(3))
  .tremolo(0.4)
  .gain(0.45)

$: s("[strudel*4 ai groove] [live*3 code evolving] [strudel ai*2 live code]? [groove evolving strudel live]")
  .slow(2)
  .chop(perlin.range(10,36).slow(3))
  .speed(sine.range(0.8,1.4).fast(1.5))
  .every(6,x=>x.sometimes(x=>x.rev()).degradeBy(0.3))
  .gain(0.68)