setcps(120/60/4)

let leadSynth = x => x
  .s("sine")
  .gain(0.25)
  .fmi(5)
  .fmh(1.57)
  .fmenv(6)
  .fmdecay(0.5)
  .attack(0.02)
  .release(0.8)
  .lpf(sine.range(1200, 7000).slow(8))
  .lpq(3)
  .delay(0.6)
  .delaytime("<3/16 1/8>")
  .delayfeedback(0.65)
  .room(0.5)
  .pan(perlin.range(0.2, 0.8).slow(9))
  .tremolosync(8)
  .tremolodepth(0.4)

let bassSynth = x => x
  .s("sawtooth")
  .gain(0.35)
  .lpf(saw.range(300, 1200).slow(4))
  .lpq(12)
  .ftype(1)
  .penv(1.5)
  .pdecay(0.05)
  .attack(0.01)
  .release(0.4)
  .cut(2)
  .drive(0.3)

$: n("a4 c5 b4 g4").scale("a:minor")
  .slow(2)
  .iter(3)
  .apply(leadSynth)

$: n("a1?0.5 ~ f1 c1?0.5 ~ g1 ~")
  .slow(2)
  .apply(bassSynth)

$: stack(
  s("bd").euclid(5, 8).gain(1).cut(1).shape(0.2),
  s("~ sn").jux(x => x.s("cp").gain(0.6)).gain(0.8).drive(0.2).room(0.3).crush(8).hpf(200).swing(0.5),
  s("[hh*4, hh*3 hh]").velocity(perlin.range(0.5, 1).slow(3)).hpf(8000).decay(0.04).gain(0.4),
  s("~ ~ ~ rim").slow(2).delay(0.5).delaytime("3/16").delayfeedback(0.7).pan(0.8).gain(0.5)
).compressorRatio(8).postgain(0.9)