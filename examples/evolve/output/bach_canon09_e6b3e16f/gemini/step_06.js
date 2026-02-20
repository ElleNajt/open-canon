setcps(102/60/4)

// Plucky Arp
$: n("g4 b4 d5 c5 e5 d5 b4").iter(2).slow(4)
  .s("triangle")
  .fmi(0.4)
  .fmh(2)
  .gain(0.45)
  .lpf(800)
  .lpenv(2500)
  .lpdecay(0.3)
  .release(0.2)
  .delay(0.5)
  .delaytime(1/6)
  .delayfeedback(0.5)
  .pan(perlin.range(0.1, 0.9).slow(12))

// Tremolo Pads
$: n("<g3 f3>").chord("major7")
  .s("saw")
  .slow(4)
  .gain(0.25)
  .attack(2)
  .release(4)
  .lpf(sine.range(500, 1500).slow(16))
  .lpq(4)
  .tremolo(0.4)
  .tremolosync(4)
  .off(0.02, p => p.pan(0.8).detune(8))
  .pan(0.2)
  .room(0.7)

// Dirty Bass
$: n("<g1 f1>").euclid(5, 8).slow(2)
  .s("square")
  .distort(0.2)
  .gain(0.6)
  .lpf(300)
  .lpq(3)
  .cut(1)
  .decay(0.15)
  .release(0.05)

// Groovebox
$: stack(
  s("bd ~ [bd bd] ~").gain(1),
  s("[~ sn]*2").gain(0.7).distort(0.4).shape(0.6).room(0.2).lpf(8000).late(0.01),
  s("[hh hh oh hh]*2").velocity(perlin.range(0.3, 1)).hpf(8000).gain(0.45).delay(0.2).delaytime(3/8).delayfeedback(0.4)
).compressor().postgain(1.1)