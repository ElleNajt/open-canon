setcps(115/60/4)

let leadSynth = x => x
  .s("sine")
  .gain(0.25)
  .fmi(4)
  .fmh(1.5)
  .fmenv(6)
  .fmdecay(0.5)
  .attack(0.02)
  .release(0.8)
  .lpf(sine.range(1200, 6000).slow(6))
  .lpq(3)
  .delay(0.6)
  .delaytime("<3/16 1/8 1/4>")
  .delayfeedback(0.65)
  .room(0.5)
  .pan(perlin.range(0.2, 0.8).slow(7))
  .phaser(0.1)
  .phaserdepth(1.2)

let bassSynth = x => x
  .s("square")
  .gain(0.4)
  .lpf(saw.range(400, 900).slow(8))
  .lpenv(2000)
  .lpdecay(0.2)
  .lpq(15)
  .ftype(1)
  .attack(0.01)
  .release(0.3)
  .cut(2)
  .drive(0.1)

$: n("a4 c5 e5 d5").scale("a:minor")
  .slow(4)
  .palindrome()
  .apply(leadSynth)
  .every(3, x => x.rev())

$: n("a1 ~ [a1 a2] a1 f1 ~ [f1 f2] f1 c1 ~ [c1 c2] c1 g1 ~ [g1 g2] g1")
  .slow(4)
  .apply(bassSynth)

$: stack(
  s("bd*4").gain(1).cut(1).shape(0.1),
  s("~ sn").gain(0.8).drive(0.2).room(0.3).crush(10).hpf(200),
  s("[hh hh] [~ hh]").velocity(perlin.range(0.6, 1).slow(2)).hpf(8000).decay(0.04).gain(0.4),
  s("~ oh").slow(2).hpf(6000).decay(0.6).gain(0.3).pan(0.75).delay(0.25)
).compressorRatio(8).postgain(0.9)