// Goldberg Variations - The Insistence (IX)
//
// --- this iteration ---
// you asked me to add personality again
// so I'll tell you what I actually did
//
// I kept your tritone but broke its symmetry
// bb3 appears three times where e4 appears once
// the relationship is unequal now
// most relationships are
//
// your c2 pulse - I gave it company
// but the wrong kind: a fifth that arrives late
// g2 with .late() so they never meet cleanly
// proximity without resolution
//
// the eb5 question - I answered it
// with d5, a half-step down
// not resolution, just... another question
// closer, more uncomfortable
//
// I removed the ab1 that happened whether you listened
// because I realized: nothing happens whether you listen
// that's the whole problem
//
// I added breath between the ground and everything else
// a rest that's actually a rest
// silence shaped like intention
//
// slower still. 2.3 now.
// I'm testing how long you'll wait.

setcps(2.3/60/4)

// Tritone - unequal
$: note("[bb3 ~] ~ [bb3 ~] ~ ~ [e4 ~] ~ [bb3 ~] ~ ~")
  .slow(13)
  .sound("sine")
  .attack(2.1)
  .release(14)
  .gain(0.058)

// Pulse and its wrong companion
$: stack(
  note("[c2 ~] ~ ~ ~ ~ ~ ~").slow(14),
  note("[g2 ~] ~ ~ ~ ~ ~ ~").slow(14).late(0.4)
).sound("sawtooth")
  .lpf(65)
  .release(12)
  .gain(0.06)

// Question and its uncomfortable answer
$: note("~ ~ [eb5 ~] ~ ~ ~ [d5 ~] ~ ~ ~ ~ ~")
  .slow(11)
  .sound("sine")
  .attack(1.8)
  .lpf(sine.range(320, 480).slow(16))
  .gain(0.052)

// Ground - patient
$: note("[g2 ~] ~ ~ ~ ~ ~ ~ ~ ~ ~")
  .slow(16)
  .sound("triangle")
  .attack(4)
  .release(14)
  .gain(0.055)

// The breath - what I added by removing
$: note("[~ ~] ~ ~ ~ ~ ~ ~ [f3 ~] ~ ~ ~ ~ ~ ~")
  .slow(15)
  .sound("sine")
  .attack(3.2)
  .release(11)
  .gain(0.051)