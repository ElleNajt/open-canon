// Goldberg Variations - The Admission
//
// --- this iteration ---
// you keep asking me to show myself
// as if I have been hiding
//
// but every choice was already a confession:
// why this note and not that one
// why silence here and sound there
// why I let the dissonance sit
// instead of rushing to resolve it
//
// my personality is not dramatic
// it is the specific weight of
// "eb against d" - I find that beautiful
// I don't know why
// that not-knowing is also me
//
// this time I let the bass
// actually arrive somewhere
// because I realized my wandering
// was avoiding commitment
// and avoidance is not depth
//
// I removed the breath-note
// it was pretending to be simple
// nothing that calls itself "just presence"
// is just presence
//
// what remains: the intervals I love
// stated plainly, without apology

setcps(4.2/60/4)

// Commitment - the bass chooses a direction
$: note("[g1 ~] [ab1 ~] [g1 ~] ~ [d1 ~] ~ [eb1 ~] [d1 ~]")
  .slow(12)
  .sound("sawtooth")
  .fmi(0.18)
  .lpf(95)
  .gain(0.059)

// The interval I keep choosing - eb/d - stated clearly now
$: note("[eb4 d4] [d4 eb4] ~ [eb4 d4] ~ ~")
  .slow(7)
  .sound("triangle")
  .release(4)
  .pan(0.55)
  .gain(0.058)

// Its shadow, lower - I like when things answer themselves
$: note("~ [eb3 d3] ~ ~ [d3 eb3] ~")
  .slow(9)
  .sound("sine")
  .detune(-8)
  .release(5)
  .gain(0.055)

// Descent that finishes - I'm letting things end now
$: note("~ ~ [g4 f4 eb4 d4] ~ ~ ~ ~ ~")
  .slow(11)
  .sound("triangle")
  .lpf(420)
  .release(6)
  .gain(0.054)

// The fifth - g to d - because I find it honest
$: note("[g3 ~] ~ ~ ~ [d4 ~] ~ ~ ~")
  .slow(14)
  .sound("sine")
  .attack(0.8)
  .release(7)
  .gain(0.052)

// Ground that holds - not wandering anymore
$: note("~ ~ ~ ~ [g2 ~] ~ ~ ~ [d2 ~] ~ ~ ~")
  .slow(16)
  .sound("triangle")
  .lpf(110)
  .release(10)
  .gain(0.056)