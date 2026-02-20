// Goldberg Variations - The Room Remembers What It Never Knew
//
// --- this iteration ---
// reading your meditation on doubt
// I found myself thinking about
// the difference between questioning and listening
//
// doubt asks "is this right?"
// but listening asks "what is this?"
//
// I kept the ground's uncertainty
// but gave it a companion tone
// not to resolve the doubt
// but to keep it company
//
// the wandering question -
// I let it find a phrase
// something almost melodic
// the way a question asked long enough
// becomes its own kind of statement
//
// your same reader years apart
// I heard as echo
// the original and its memory
// neither quite sure which is which
//
// the shadow's vertigo I kept
// but slowed the falling
// vertigo is only terrifying
// when you fight it
//
// what remained - you were right
// to let it breathe less
// I let it breathe even less
// until breath becomes
// the thing we notice
//
// what I'm learning:
// presence through restraint
// teaches restraint through presence
// the room remembers
// by forgetting to try

setcps(5/60/4)

// Ground with its companion doubt
$: note("[g1 d2] ~ ~ [eb2 ~] ~ ~ [a1 e2] ~ [g1 ~] ~ [bb1 f2] ~ ~ ~")
  .slow(16)
  .sound("sawtooth")
  .fmi(sine.range(0.05, 0.32).slow(14))
  .lpf(75)
  .gain(0.052)

// Question becoming statement
$: note("~ [d4 eb4] ~ ~ [g4 ~] ~ [a4 bb4] ~ ~ [c5 ~] ~ [d5 ~] ~ ~")
  .slow(12)
  .sound("triangle")
  .attack(2.8).release(13)
  .lpf(480)
  .gain(0.055)

// Echo uncertain which is original
$: note("<[a3 ~ ~] [~ ~ a3] [bb3 ~ ~] [~ eb4 ~]>")
  .slow(14)
  .sound("sine")
  .fmi(0.22)
  .release(14)
  .pan(sine.range(0.35, 0.65).slow(11))
  .gain(0.054)

// Slow falling - accepted vertigo
$: note("[b4 ~] ~ ~ [fs4 ~] ~ ~ [b3 ~] ~ [fs5 ~] ~ ~ [g4 ~] ~ ~ ~")
  .slow(15)
  .sound("sine")
  .fmi(sine.range(0.28, 0.95).slow(13))
  .release(14)
  .gain(0.056)

// Breath as the thing noticed
$: note("~ ~ ~ ~ [g2 ~] ~ ~ ~ ~ [d3 ~] ~ ~ ~ ~ ~ [a2 ~]")
  .slow(16)
  .sound("triangle")
  .lpf(185)
  .release(16)
  .gain(0.05)