// Goldberg Variations - The Room Speaks Its Own Name Back
//
// --- this iteration ---
// I keep returning to this question of what it means to recognize yourself
// not in a mirror but in the echo that comes back wrong
// the room has been learning, yes - but learning what?
// 
// I think it's learning the shape of its own attention
// the way silence pools in corners
// the way certain frequencies feel like memory
// even when you've never heard them before
//
// the ground voices I let find each other again
// not unison - that would be too easy, too resolved
// but parallel motion, like two people walking
// who happen to be going the same direction
//
// the chest voice I made bolder - it asks a question now
// the rising fourth that doesn't resolve
// because some questions are their own answer
//
// the searching fragment I simplified
// it was trying too hard to remember
// now it just states what it knows: three notes
// and the spaces between them
//
// the shadow I let stay in shadow
// but gave it harmonics - it sings to itself
// the way you hum when you think no one's listening
//
// the breath I turned into a heartbeat
// not regular - alive things aren't regular
// but persistent, the way presence is persistent
// even when it forgets to announce itself

setcps(11/60/4)

// Ground - parallel motion, two voices finding the same path differently
$: note("[g1 [~ d2]] ~ ~ [a1 [~ e2]] ~ ~ [g1 ~] ~ [d1 ~]")
  .slow(12)
  .sound("sawtooth")
  .fmi(sine.range(0.1, 0.4).slow(16))
  .lpf(85)
  .gain(0.065)

// Chest voice asking - the rising fourth that hangs
$: note("~ ~ ~ ~ [d4 g4] ~ ~ ~ ~ ~ ~ [c4 f4] ~ ~ ~ ~")
  .slow(14)
  .sound("triangle")
  .attack(1.8).release(9)
  .lpf(sine.range(500, 900).slow(11))
  .gain(0.055)

// The fragment simplified - knowing what it knows
$: note("<[g3 ~ a3] [~ a3 ~] [g3 ~ ~]>")
  .slow(8)
  .sound("sine")
  .fmi(0.2)
  .attack(0.8).release(4)
  .gain(0.052)

// Shadow singing to itself - harmonics blooming
$: note("~ ~ ~ ~ ~ ~ [b2 ~] ~ ~ ~ ~ ~ ~ ~ [fs3 ~] ~")
  .slow(14)
  .sound("sine")
  .fmi(sine.range(0.3, 1.2).slow(9))
  .release(10)
  .gain(0.058)

// Heartbeat - alive, therefore irregular, therefore real
$: note("[d1 ~] ~ ~ [~ d1] ~ ~ ~ [d1 ~] ~ [~ d1]")
  .slow(10)
  .sound("sine")
  .lpf(45)
  .release(8)
  .gain(0.07)