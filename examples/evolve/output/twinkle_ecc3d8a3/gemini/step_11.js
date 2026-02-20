setcps(115/60/4)

// Dreamy Arp
$: chord("[cm g] [ab eb] [fm g] [abmaj7 g]")
  .arp("updown")
  .slow(2)
  .octave(5)
  .s("triangle")
  .attack(0.01)
  .release(0.25)
  .gain(0.4)
  .jux(p => p.s("sine").octave(4).detune(4).gain(0.5))
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
  .cutoff(perlin.range(500, 2000).slow(18))
  .resonance(5)
  .ftype(1)
  .gain(0.5)
  .pan(perlin.range(0.3, 0.7).slow(24))
  .room(0.7)
  .roomsize(0.9)

// Bassline
$: n("c1 ab0 f0 g0").slow(4)
  .euclid(5, 8).iter(1)
  .s("sine")
  .fmi(2)
  .fmh(0.5)
  .fmenv(8)
  .fmdecay(0.1)
  .cut(1)
  .attack(0.01)
  .release(0.5)
  .gain(0.8)
  .lpf(700)
  .lpq(2)

// Drums
$: stack(
  s("bd ~ <bd bd> ~").gain(1.1),
  s("<~ sn> <~ [sn,rim]>").gain(0.9),
  s("[hh*2, <hh oh>]").slow(2)
    .velocity(perlin.range(0.7, 1).slow(4))
    .hpf(7000)
    .gain(0.6)
    .swing(0.05),
  s("~ ~ ~ ~ ~ ~ ~ cp")
    .every(4, p => p.speed(rand.range(0.9, 1.1)))
    .gain(0.8).room(0.2)
).gain(0.95).compressor()