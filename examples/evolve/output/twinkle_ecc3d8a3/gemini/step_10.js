setcps(115/60/4)

// Dreamy Arp
$: chord("[cm g] [ab eb] [fm g] [abmaj7 g]")
  .arp("updown")
  .slow(2)
  .octave(5)
  .s("triangle")
  .attack(0.01)
  .release(0.25)
  .gain(0.3)
  .jux(p => p.s("sawtooth").octave(4).add(7).gain(0.4))
  .delay(0.5)
  .delaytime("3/16")
  .dfb(0.6)
  .room(0.4)
  .roomlp(6000)
  .lpf(perlin.range(2000, 8000).slow(8))
  .lpq(2)

// Pads
$: chord("[cm g] [ab eb] [fm g] [abmaj7 g]")
  .slow(8)
  .s("supersaw")
  .voicing()
  .octave(3)
  .attack(4)
  .release(8)
  .cutoff(sine.range(400, 1500).slow(16))
  .resonance(4)
  .ftype(1)
  .gain(0.6)
  .pan(perlin.range(0.3, 0.7).slow(24))
  .room(0.7)
  .roomsize(0.9)
  .postgain(1.2)

// Bassline
$: n("c1 ab0 f0 g0").slow(4)
  .euclid(5, 8)
  .sound("pulse")
  .cut(1)
  .attack(0.01)
  .release(0.3)
  .cutoff(400)
  .resonance(2)
  .drive(0.4)
  .gain(0.8)

// Drums
$: stack(
  s("bd*4").gain(1.1)
    .lpf(8000),
  s("~ sn"),
  s("[hh*2, hh*2, hh*2, rim*2]").slow(2)
    .velocity(perlin.range(0.7, 1).slow(4))
    .hpf(7000)
    .gain(0.7)
    .swing(0.1),
  s("~ ~ ~ oh").release(0.25).hpf(6000),
  s("cp").every(8, p => p.gain(1.2)).gain(0.5).room(0.2)
).gain(0.95).compressor()