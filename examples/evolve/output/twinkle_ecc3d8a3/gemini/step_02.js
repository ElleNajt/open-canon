setcps(88/60/4)

// Ambient Lead
$: n("[0 3 5] ~ [7 5 3] <0 3> [-2 0 3] ~ [5 3 0] <3 5>")
  .scale("a:minor")
  .slow(4)
  .octave(5)
  .sound("triangle")
  .attack(0.02)
  .release(0.8)
  .gain(0.4)
  .jux(p => p.pan(0.2).detune(6).gain(0.9))
  .pan(0.8)
  .delay(0.6)
  .delaytime(0.75)
  .dfb(0.6)
  .room(0.5)

// Pads
$: chord("[amin gmaj] [cmaj fmaj]")
  .slow(8)
  .sound("sawtooth")
  .voicing()
  .octave(4)
  .attack(1.2)
  .release(3)
  .cutoff(sine.range(500, 1800).slow(12))
  .resonance(2)
  .gain(0.2)
  .pan(perlin.range(0.1, 0.9).slow(16))
  .room(0.8)

// Bass
$: n("a1 g1 c2 f1")
  .ply(2)
  .slow(4)
  .sound("pulse")
  .cutoff(250)
  .resonance(1.5)
  .gain(0.45)

// Drums
$: stack(
  s("bd ~ [~ bd] [~ bd/2]").gain(0.9),
  s("~ ~ sn ~").gain(0.5).crush(5).swing(0.1),
  s("hh*8")
    .gain(rand.range(0.1, 0.2))
    .hpf(9000)
    .degradeBy(0.15)
).shape(0.2).gain(0.9)