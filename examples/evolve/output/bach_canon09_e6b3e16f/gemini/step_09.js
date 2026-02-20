setcps(100/60/4)

// Bell-like Arp
$: n("<g4 b4 d5> <a4 c5 e5> <f4 a4 c5> <c4 e4 g4>").slow(4)
  .s("sine")
  .fmi(sine.range(0.1, 0.6).slow(12))
  .fmh(2)
  .gain(0.5)
  .release(0.15)
  .delay(0.4)
  .delaytime(1/6)
  .dfb(0.6)
  .pan(perlin.range(0.1, 0.9).slow(16))

// Vocal Pads
$: n("<g3 a3> <f3 c3>").slow(4).chord("m7")
  .s("sawtooth")
  .gain(0.3)
  .attack(2.5)
  .release(5)
  .lpf(perlin.range(600, 2500).slow(13))
  .lpq(4)
  .vowel("a e o i".slow(7))
  .off(0.02, p => p.pan(0.9).detune(8))
  .pan(0.1)
  .room(0.6)

// Driving Bass
$: n("<g1 a1> <f1 c1>").slow(4).euclid(7,16).fast(2)
  .s("pulse").pw(cosine.range(0.2, 0.6).slow(9))
  .drive(0.4)
  .gain(0.55)
  .lpf(saw.range(150, 400).slow(8))
  .lpenv(200)
  .lpdecay(0.05)
  .cut(1)
  .release(0.1)

// Evolved Groove
$: stack(
  s("bd ~ [~ bd] [bd ~]").gain(1.1),
  s("~ sn").slow(2).shape(0.3).gain(0.7).room(0.3),
  s("hh*8").every(2, s => s.s("oh")).gain(0.4).velocity(perlin.range(0.3,1).slow(6)).hpf(7000).room(0.15)
).swing(0.5).compressor().postgain(1.2)