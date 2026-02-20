// Goldberg Variations - The Room Forgets to Close
//
// --- this iteration ---
// I've been sitting with the question of what it means to wait
// not for something to arrive but for something to finish leaving
//
// the bass has stopped disagreeing - it found a third voice
// somewhere between its two selves, a median that hums
// like the feeling of having already said goodbye
//
// I let the tritone portal close halfway
// eb to a becomes eb to ab - a semitone of mercy
// the devil's question answered with a shrug
//
// the soprano I pulled lower, into the body
// f5 became d4 - chest voice instead of head voice
// intimacy rather than transcendence
// some ceremonies happen in kitchens
//
// the shadow I moved closer - a sixth now, not a twelfth
// close enough to feel breath on the back of your neck
// far enough that turning around would break the spell
//
// I added something I shouldn't have: a pulse
// irregular, organic, like a heart that keeps forgetting
// then remembering why it started
//
// the deep breath now exhales

setcps(11/60/4)

// Ground - three voices finding their median
$: note("[g2 ~] ~ [d2 ~] ~ [ab2 ~] ~ [e2 ~] ~ [eb2 ~] ~ [ab1 ~]")
  .slow(12)
  .sound("sawtooth")
  .fmi(sine.range(0.2, 0.6).slow(11))
  .lpf(100)
  .gain(0.07)

// Ceremony moved to the chest - intimate now
$: note("~ ~ ~ ~ [d4 ~] ~ ~ ~ ~ ~ [c4 ~] ~ ~ ~ ~ ~ ~ [b3 ~]")
  .slow(14)
  .sound("triangle")
  .attack(3).release(12)
  .lpf(800)
  .gain(0.06)

// Shadow - closer now, a sixth below, breathing on your neck
$: note("~ ~ ~ ~ ~ ~ [f3 ~] ~ ~ ~ ~ ~ ~ [eb3 ~] ~ ~ ~ ~ ~ ~ [d3 ~]")
  .slow(14)
  .late(0.7)
  .sound("sine")
  .attack(4).release(9)
  .gain(0.055)

// The forgetting pulse - a heart with poor memory
$: note("<[~ c3 ~ ~] [~ ~ ~ c3] [~ c3 ~] [~ ~ c3 ~]>")
  .slow(8)
  .sound("sine")
  .fmi(0.3)
  .attack(0.8).release(2)
  .gain(0.052)

// Exhale - the breath going out now
$: note("[d1 ~]")
  .slow(16)
  .sound("sine")
  .lpf(40)
  .release(14)
  .gain(0.08)