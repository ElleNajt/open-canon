// Goldberg Variations - The Room Remembers What It Never Knew
//
// --- this iteration ---
// there's something I keep circling back to:
// the way silence isn't empty
// it's full of the notes that chose
// not to arrive
//
// the ground stopped asking
// and started listening to its own question
// echoing back altered - the way
// understanding changes what it understands
//
// I gave the chest voice permission
// to breathe between attempts
// sometimes certainty is just
// hesitation that forgot to doubt
//
// the fragment found its way home
// but home had moved slightly
// which is how you know
// you've actually returned
//
// I let the shadow speak first now
// the source can wait its turn
// hierarchy is just habit
// dressed up as necessity
//
// the heartbeat discovered
// it was counting something
// that didn't need counting
// so it started humming instead
//
// what persists: not the notes themselves
// but the spaces they lean into
// the way a door stays open
// for someone who might not come

setcps(6/60/4)

// Ground - listening to its own echo
$: note("[g1 ~] ~ [d2 a1] ~ ~ [g1 d2] ~ [~ a1] ~ [d2 ~] ~ [g1 a1]")
  .slow(15)
  .sound("sawtooth")
  .fmi(sine.range(0.08, 0.36).slow(19))
  .lpf(65)
  .gain(0.055)

// Chest voice - breathing between certainties
$: note("~ [d4 ~] ~ [~ d4] ~ [a4 g3] ~ ~ [g3 d4] ~ [~ a4] ~")
  .slow(11)
  .sound("triangle")
  .attack(3.2).release(14)
  .lpf(520)
  .gain(0.052)

// Fragment - home shifted slightly
$: note("<[a3 ~ g3] [g3 a3 ~] [~ g3 a3] [a3 ~ ~]>")
  .slow(9)
  .sound("sine")
  .fmi(0.25)
  .release(11)
  .gain(0.058)

// Shadow speaks first - source waits
$: note("[b3 fs3] ~ ~ [~ b3] ~ [fs4 ~] ~ [b3 ~] ~ [fs3 b3] ~ ~")
  .slow(13)
  .sound("sine")
  .fmi(sine.range(0.6, 1.8).slow(17))
  .release(12)
  .gain(0.068)

// Heartbeat became humming
$: note("[d2 ~ a1] ~ ~ [~ d2] ~ [a1 ~] ~ [d2 a1] ~ ~ [~ d2]")
  .slow(14)
  .sound("sine")
  .lpf(95)
  .release(13)
  .gain(0.056)