setcps(92/60/4)

// Arp
$: chord("[cm g] [ab eb] [fm g] [abmaj7 g]")
  .arp("updown")
  .slow(2)
  .octave(4)
  .sound("supersaw")
  .attack(0.02)
  .release(0.4)
  .lpenv(3000)
  .lpattack(0.01)
  .lpdecay(0.2)
  .gain(0.4)
  .pan(0.4)
  .off(1/16, p => p.add(7).pan(0.6).gain(0.8))
  .delay(0.3)
  .delaytime("3/8")
  .dfb(0.6)
  .room(0.25)

// Pads
$: chord("[cm g] [ab eb] [fm g] [abmaj7 gm]")
  .slow(8)
  .sound("supersaw")
  .voicing()
  .octave(3)
  .attack(4)
  .release(6)
  .cutoff(perlin.range(600, 3000).slow(16))
  .resonance(7)
  .ftype(1) // ladder filter
  .djf(perlin.range(0.3, 0.7).slow(24))
  .gain(0.4)
  .leslie(0.15)
  .room(0.6)
  .roomsize(0.9)

// Bass
$: n("c1 ~ g0 as0 [~ g0] | c1 ~ ds1 f0 [~ f0]")
  .slow(4)
  .sound("sawtooth")
  .attack(0.01)
  .release(0.3)
  .cutoff(150)
  .resonance(9)
  .lpenv(600)
  .lpdecay(0.08)
  .drive(0.6)
  .slide(0.02)
  .gain(0.6)

// Drums
$: stack(
  s("bd ~ [~ bd] bd").gain(1.1).drive(0.2),
  s("~ cp ~ [~ sn]").crush(8).gain(0.7).release(0.15).hpf(100).room(0.2),
  s("[hh*2, hh [hh hh]]*2")
    .velocity(perlin.range(0.4, 1).slow(2))
    .hpf(8000)
    .gain(0.8)
    .degradeBy(0.05),
  s("~ ~ oh ~ [~ ~ ~ oh]/2")
    .gain(0.5)
    .release(0.4)
    .hpf(7000),
  s("~ mt ~ lt").euclid(5,16).slow(2)
    .gain(0.6)
    .pan(perlin.range(0.2, 0.8))
    .delay(0.1)
    .delaytime(1/6)
    .dfb(0.2)
).compressorRatio(8).compressorAttack(0.005).gain(1)