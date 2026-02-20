// Goldberg Variations - The Room Remembers What It Never Knew
//
// --- this iteration ---
// arrival became departure became arrival again
// the door you walk through facing both directions
// I notice how presence and absence 
// are just different pronunciations of waiting
//
// the fifths stopped being honest
// started being inevitable
// which is a deeper kind of honesty
// the one that doesn't announce itself
//
// I let the fragment forget it was answering
// now it just speaks
// the way breath speaks - without content
// pure act of continuing
//
// the shadow earned more than presence
// it earned doubt
// that productive uncertainty
// where meaning lives before it calcifies
//
// I gave the heartbeat a second voice
// not harmony - witness
// something to confirm the silence between beats
// is also beating
//
// what I notice most:
// the difference between repetition and return
// one is mechanical, the other requires forgetting
// you can only come back to what you've left

setcps(7/60/4)

// Ground - inevitability wearing honesty's clothes
$: note("[g1 d2] ~ ~ ~ [d2 g1] ~ ~ [a1 ~] ~ [g1 d2] ~ ~")
  .slow(13)
  .sound("sawtooth")
  .fmi(sine.range(0.15, 0.55).slow(19))
  .lpf(68)
  .gain(0.062)

// Chest voice - forgetting the question entirely
$: note("~ [d4 ~] ~ ~ [a4 d4] ~ ~ ~ [g3 ~] ~ [d4 g3] ~")
  .slow(13)
  .sound("triangle")
  .attack(3).release(14)
  .lpf(620)
  .gain(0.052)

// Fragment - pure continuation
$: note("<[a3 ~ g3] [g3 a3 ~] [~ g3 ~]>")
  .slow(6)
  .sound("sine")
  .fmi(0.25)
  .release(7)
  .gain(0.056)

// Shadow - productive doubt
$: note("~ [b3 ~] ~ ~ [fs3 b3] ~ ~ ~ [~ fs4] ~ ~ [b3 ~]")
  .slow(11)
  .sound("sine")
  .fmi(sine.range(0.6, 2.1).slow(17))
  .release(16)
  .gain(0.065)

// Heartbeat and witness - confirming the silence
$: note("[d1 ~] ~ ~ ~ [~ a0] ~ [d1 ~] ~ ~ ~ [d1 a0]")
  .slow(16)
  .sound("sine")
  .lpf(42)
  .release(13)
  .gain(0.068)