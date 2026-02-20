setcps(92/60/4)

// Arp
$: n("[0 2 4] [7 4 2] [5 7 9] [12 9 7]")
  .scale("c:minor")
  .fast(2)
  .octave(4)
  .sound("triangle")
  .attack(0.01)
  .release(0.5)
  .lpenv(2500)
  .lpdecay(0.3)
  .gain(0.5)
  .pan(0.3)
  .phaser(sine.range(0.1, 1).slow(16))
  .jux(p => p.sound("pulse").octave(1).gain(0.6).pan(0.7))
  .delay(0.4)
  .delaytime(3/8)
  .dfb(0.55)
  .room(0.3)

// Pads
$: chord("[cm g] [ab eb] [fm g] [abmaj7 g]")
  .slow(8)
  .sound("supersaw")
  .voicing()
  .octave(3)
  .attack(4)
  .release(6)
  .cutoff(perlin.range(700, 3500).slow(16))
  .resonance(6)
  .djf(perlin.range(0.3, 0.7).slow(24))
  .gain(0.35)
  .leslie(0.1)
  .room(0.7)
  .roomsize(0.9)

// Bass
$: n("c1 ~ g0 [as0 g0] c1 ~ ds1 f0")
  .slow(4)
  .sound("pulse")
  .attack(0.01)
  .release(0.4)
  .cutoff(180)
  .resonance(8)
  .lpenv(800)
  .lpdecay(0.1)
  .drive(0.5)
  .gain(0.7)

// Drums
$: stack(
  s("bd ~ [~ bd] bd").gain(1.2).distort(0.1),
  s("~ cp ~ sn").gain(0.8).release(0.2).hpf(100).room(0.3),
  s("[hh*2, hh [hh hh]]*2")
    .velocity(perlin.range(0.3, 0.9).slow(1.5))
    .hpf(8000)
    .degradeBy(0.05),
  s("~ [~ oh] ~ [~ oh]")
    .gain(0.4)
    .release(0.3)
    .hpf(7000),
  s("~ ~ [~ cr]? ~ ~ mt ~")
    .gain(0.5)
    .hpf(6000)
    .room(0.5)
    .pan(perlin.range(0.3, 0.7))
).compressorRatio(6).compressorAttack(0.01).gain(0.9)