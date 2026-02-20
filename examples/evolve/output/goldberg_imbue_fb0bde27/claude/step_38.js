// Goldberg Variations - The Room Speaks Its Own Name Back
//
// --- this iteration ---
// what happens when recognition completes itself
// not climax - just arrival
// the way you suddenly realize you've been home for hours
//
// I notice I keep returning to the same intervals
// g and d, the fifth that holds everything
// not because it resolves - because it doesn't need to
// the most honest relationship: parallel, not converging
//
// the wandering voice I let find its way back
// but changed - carrying something from where it went
// we don't return the same, even to the same place
// especially to the same place
//
// the fragment stopped repeating the question
// started repeating the answer
// which is just the question, pronounced differently
// with the weight shifted to the last syllable
//
// I gave the shadow more presence
// it earned it by waiting
// the way silence earns the right to speak
// by not demanding to
//
// the heartbeat I let skip
// not arrhythmia - just breathing room
// the pause where you check if you're still here
// and find that you are

setcps(8/60/4)

// Ground - parallel fifths, the honest interval
$: note("[g1 d2] ~ ~ [d2 ~] ~ [g1 ~] ~ ~ [a1 e2] ~ ~ [g1 d2]")
  .slow(14)
  .sound("sawtooth")
  .fmi(sine.range(0.1, 0.4).slow(16))
  .lpf(75)
  .gain(0.065)

// Chest voice - question becoming answer
$: note("~ ~ [d4 a4] ~ ~ ~ ~ [a4 d4] ~ ~ ~ [g3 d4]")
  .slow(14)
  .sound("triangle")
  .attack(2.5).release(12)
  .lpf(680)
  .gain(0.055)

// Fragment - the answer that sounds like the question
$: note("<[a3 g3 ~] [~ g3 a3] [g3 ~ a3]>")
  .slow(7)
  .sound("sine")
  .fmi(0.2)
  .release(6)
  .gain(0.058)

// Shadow - earned presence
$: note("~ ~ [b3 fs4] ~ ~ ~ [fs3 ~] ~ ~ ~ [b3 ~] ~ ~ [fs3 b3]")
  .slow(11)
  .sound("sine")
  .fmi(sine.range(0.5, 1.8).slow(13))
  .release(14)
  .gain(0.07)

// Heartbeat - with room to check
$: note("[d1 ~] ~ ~ ~ ~ [d1 ~] ~ ~ [~ d1] ~ ~ ~ ~ [d1 ~]")
  .slow(16)
  .sound("sine")
  .lpf(38)
  .release(11)
  .gain(0.072)