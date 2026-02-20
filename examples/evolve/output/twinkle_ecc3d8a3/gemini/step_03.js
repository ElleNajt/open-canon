setcps(88/60/4)

// Evolved Ambient Lead
$: n("[0 3 5 7] ~ [5 3 0] <3 5> [-2 0 3] ~ [5 3 0] <0 -2>")
  .scale("a:minor")
  .slow(4)
  .octave(5)
  .sound("triangle")
  .attack(0.01)
  .release(0.9)
  .lpenv(2500)
  .lpdecay(0.5)
  .gain(0.4)
  .jux(p => p.pan(0.2).fmi(0.25).fmh(2).detune(4).gain(0.85))
  .pan(0.8)
  .delay(0.6)
  .delaytime(3/8)
  .dfb(0.65)
  .room(0.5)

// Evolved Pads
$: chord("[amin gmaj] [cmaj fmaj] [dmin gmaj] [cmaj emaj]")
  .slow(8)
  .sound("supersaw")
  .voicing()
  .octave(4)
  .attack(2)
  .release(4)
  .vowel("a e")
  .cutoff(sine.range(600, 2200).slow(16))
  .resonance(3)
  .gain(0.25)
  .leslie(0.05)
  .room(0.9)
  .roomsize(0.9)

// Evolved Bass
$: n("a1 g1 c2 f1 d1 g1 c2 e2")
  .slow(8)
  .sound("pulse")
  .attack(0.01)
  .release(0.4)
  .cutoff(300)
  .resonance(2.5)
  .lpenv(1000)
  .lpdecay(0.15)
  .gain(0.5)

// Evolved Drums
$: stack(
  s("bd ~ ~ [~bd]/2").gain(1.1),
  s("~ ~ [sn cp] ~").gain(0.6).room(0.25).release(0.2),
  s("hh*16")
    .velocity(perlin.range(0.3, 0.7).slow(2))
    .hpf(10000)
    .degradeBy(0.1),
  s("~ oh ~ oh")
    .gain(0.25)
    .hpf(8000),
  s("~ ~ [~ mt] ~ ~ [lt ~] ~")
    .gain(0.5)
    .pan(perlin.range(0.2, 0.8))
    .delay(0.4)
    .delaytime(3/16)
    .dfb(0.5)
).compressor().gain(0.85)