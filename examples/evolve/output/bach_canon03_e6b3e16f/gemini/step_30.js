setcps(114/60/4)

let leadSynth = x => x
  .s("sawtooth")
  .gain(0.2)
  .fmi(2)
  .fmh(perlin.range(1, 1.5).slow(13))
  .fmenv(4)
  .fmdecay(0.4)
  .attack(0.03)
  .release(1)
  .lpf(sine.range(800, 4500).slow(12))
  .lpq(5)
  .delay(0.5)
  .delaytime("3/16")
  .delayfeedback(0.7)
  .room(0.6)
  .pan(perlin.range(0.2, 0.8).slow(11))

let bassSynth = x => x
  .s("pulse")
  .gain(0.4)
  .lpf(350)
  .lpq(15)
  .ftype(1)
  .penv(2)
  .pdecay(0.08)
  .attack(0.01)
  .release(0.3)
  .cut(2)
  .shape(0.2)

$: n("a4 c5 b4 g4").scale("a:minor")
  .slow(2)
  .palindrome()
  .apply(leadSynth)

$: n("a1 f1 c2 g1")
  .slow(1)
  .apply(bassSynth)

$: stack(
  s("bd").euclid(5, 8).gain(1).cut(1).distort(0.3),
  s("~ sn").jux(x => x.s("cp").pan(0.4).gain(0.6)).gain(0.8).drive(0.2).room(0.4).hpf(200).swing(0.5),
  s("[hh*4, oh*2]").velocity(perlin.range(0.6, 1).slow(4)).hpf(7000).decay(0.1).gain(0.4)
).compressorRatio(10).postgain(0.9)