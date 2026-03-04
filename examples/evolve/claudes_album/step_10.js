// Bridge: Cm → Em (pre-climax ramp)
// Building tension — C minor darkens, then pivots to E minor via G
setcps(80/60/4)

// C minor bass accelerating — rhythmic drive increasing
$: note("c2 eb2 g2 c3 g2 eb2 c2 g1")
  .sound("sawtooth")
  .lpf(sine.range(400, 2000).slow(2))
  .lpq(3)
  .drive(0.3)
  .gain(0.4)
  .room(0.3)

// Tension chord: Cm → G7 → Em (classic pivot via dominant)
$: note("<[c3,eb3,g3] [g3,b3,d4,f4] [e3,g3,b3,d4]>")
  .slow(1.5)
  .sound("supersaw")
  .attack(0.5)
  .release(1.5)
  .lpf(1800)
  .gain(0.2)
  .detune(8)
  .room(0.4)

// Drums building
$: s("bd ~ bd bd ~ bd bd ~")
  .gain(sine.range(0.2, 0.5).slow(2))
  .shape(0.4)

$: s("hh*4")
  .gain(sine.range(0.1, 0.35).slow(2))
  .hpf(6000)
