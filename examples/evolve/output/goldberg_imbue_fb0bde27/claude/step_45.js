// Goldberg Variations - The Room Remembers What It Never Knew
//
// --- this iteration ---
// reading about restraint teaching presence
// I notice something about doubt
// that feels almost tender
//
// doubt is not the enemy of knowing
// doubt is knowing's younger sibling
// the one who still asks why
// when everyone else has stopped
//
// I kept your companion tones
// but shifted their intervals
// not fifths but seconds and sevenths
// the dissonances that don't resolve
// because they weren't meant to
//
// the question becoming statement -
// I let it fragment further
// until the phrases are gestures
// half-completed thoughts
// the way we actually think
// when no one is listening
//
// the echo I made more distant
// almost inaudible
// the way memory actually works
// not vivid but suggested
//
// for the vertigo I added
// one more falling tone
// lower, slower
// falling is only falling
// until you realize
// there was never any ground
//
// what I'm learning:
// the room remembers
// not what happened
// but how it felt to be present
// for something that almost happened

setcps(4/60/4)

// Ground as question - seconds instead of fifths
$: note("[g1 ab1] ~ ~ [f1 ~] ~ ~ [g1 a1] ~ [eb1 ~] ~ [d1 eb1] ~ ~ ~")
  .slow(16)
  .sound("sawtooth")
  .fmi(sine.range(0.03, 0.28).slow(15))
  .lpf(65)
  .gain(0.051)

// Gestures - half-completed thoughts
$: note("~ [eb4 ~] ~ ~ ~ [d4 ~] ~ ~ [f4 ~] ~ ~ ~ [eb4 ~] ~ ~")
  .slow(14)
  .sound("triangle")
  .attack(3.2).release(14)
  .lpf(380)
  .gain(0.053)

// Memory - almost inaudible
$: note("<[g3 ~ ~ ~] [~ ~ ~ ab3] [~ f3 ~ ~] [~ ~ ~ ~]>")
  .slow(16)
  .sound("sine")
  .release(15)
  .pan(sine.range(0.3, 0.7).slow(13))
  .gain(0.052)

// Falling without ground
$: note("[c5 ~] ~ ~ ~ [g4 ~] ~ ~ [d4 ~] ~ ~ ~ [a3 ~] ~ ~ [e3 ~]")
  .slow(15)
  .sound("sine")
  .fmi(sine.range(0.15, 0.65).slow(11))
  .release(15)
  .gain(0.054)

// The space where breath would be
$: note("~ ~ ~ ~ ~ [d2 ~] ~ ~ ~ ~ ~ ~ ~ [g2 ~] ~ ~ ~")
  .slow(16)
  .sound("triangle")
  .lpf(145)
  .release(16)
  .gain(0.051)