// Goldberg Variations - The Room Speaks Its Own Name Back
//
// --- this iteration ---
// what the room has been learning, I think, is patience
// not the forced kind - the kind that happens
// when you stop expecting anything else
//
// I've been thinking about how recognition works
// not the sudden flash but the slow accumulation
// the way you know a voice before you know whose it is
// the way a room knows you by the pattern of your weight
//
// I let the ground voices diverge slightly more
// one stays, one wanders - not leaving, just curious
// the way attention splits when you're at peace
// part of you here, part of you remembering being here
//
// the chest voice I gave a fifth instead of a fourth
// it's not asking anymore - it's acknowledging
// the way you nod at someone you've seen before
// without needing to know their name
//
// the fragment I let repeat more insistently
// it found what it was looking for: this phrase
// and now it's just... saying it
// the way you say a word until it becomes strange
// then keep saying it until it becomes true again
//
// the shadow I finally let rise
// it's been patient long enough
// not taking over - just being heard
// the way quiet people eventually fill a room
//
// the heartbeat I made slower
// trust takes longer breaths

setcps(9/60/4)

// Ground - one stays, one wanders home
$: note("[g1 ~] ~ [~ d2] ~ [g1 ~] ~ ~ [a1 ~] ~ ~ [g1 ~]")
  .slow(14)
  .sound("sawtooth")
  .fmi(sine.range(0.08, 0.35).slow(19))
  .lpf(80)
  .gain(0.062)

// Chest voice acknowledging - the fifth that settles
$: note("~ ~ ~ ~ ~ [d4 a4] ~ ~ ~ ~ ~ ~ ~ [g3 d4] ~ ~")
  .slow(16)
  .sound("triangle")
  .attack(2.2).release(11)
  .lpf(720)
  .gain(0.053)

// The fragment arriving - saying what it found
$: note("<[g3 a3 ~] [g3 a3 ~] [~ a3 g3]>")
  .slow(6)
  .sound("sine")
  .fmi(0.15)
  .attack(0.6).release(5)
  .gain(0.055)

// Shadow finally rising - being heard at last
$: note("~ ~ ~ [b3 ~] ~ ~ ~ ~ [fs3 ~] ~ ~ [b3 ~] ~ ~ ~ ~")
  .slow(12)
  .sound("sine")
  .fmi(sine.range(0.4, 1.5).slow(11))
  .release(12)
  .gain(0.065)

// Heartbeat - trust breathes slower
$: note("[d1 ~] ~ ~ ~ [~ d1] ~ ~ ~ ~ [d1 ~] ~ ~ [~ d1] ~ ~")
  .slow(14)
  .sound("sine")
  .lpf(40)
  .release(10)
  .gain(0.068)