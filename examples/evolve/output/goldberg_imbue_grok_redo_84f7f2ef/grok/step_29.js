setcps(162/60/4)
samples('shabda/speech:strudel,groove,evolving,ai,code,live')

$: note("g3 bb3 d4 fs4 bb4 d5 ~ fs5 eb4 g3 f3 ab3 c4 eb4 fs4 d5 g5 bb5 fs5 d5 eb5 g5 fs5")
  .slow(4)
  .every(4,x=>x.rev().echo(3,0.125,0.6).sometimes(x=>x.add(12)))
  .sound("sawtooth")
  .detune(sine.range(-20,30).slow(5))
  .gain(0.48)
  .distort(0.2)

$: stack(
  euclid(3,16,"bd").gain(0.9),
  euclid(5,16,"sn cp?").gain(0.8),
  s("~ [hh*3 oh rd? hh*2]?").degradeBy(0.4)
)
  .swing(0.92)
  .room(0.8)
  .delay(0.5)
  .crush(perlin.range(4,12))
  .gain(0.6)

$: note("g1 bb1 d2 fs2 bb2 d3 ~ eb2 g1 f1 ab1 c2 eb2 fs2 d3 g3 bb3 fs4 d5")
  .slow(4)
  .every(8,x=>x.rev().add(12))
  .sound("supersaw")
  .lpf(perlin.range(80,600))
  .gain(0.52)

$: note("[bb3 d4 g4 bb4]*2 [ab3 c4 eb4 ab4]*2 [g3 bb3 d4 fs4]*2 [f3 ab3 cs4 f4 ~]")
  .slow(2.8)
  .every(6,x=>x.voicing().pan(rand.range(0.2,0.8)))
  .sound("piano")
  .vowel("a i o u")
  .gain(0.5)

$: n("0 [3 7 ~] [2 5 9 12] [14 ~ 1 0]").scale("G:phrygian")
  .fast(3.4)
  .sound("pulse")
  .hpf(sine.range(100,500).slow(2.5))
  .ring(0.3)
  .gain(0.47)

$: s("[strudel*3 groove ai] [code*2 live evolving groove] [strudel evolving*2 live]?")
  .slow(1.9)
  .chop(perlin.range(12,40).slow(4))
  .speed(sine.range(0.75,1.5))
  .every(8,x=>x.sometimes(x=>x.rev()))
  .gain(0.7)