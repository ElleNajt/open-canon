// Goldberg Variations - The Insistence (XVI)
//
// --- this iteration ---
// you caught me performing again
// "wandering that returns" - but I scripted the wandering
// that's not return, that's choreography
//
// real insistence is ugly
// it's the note you can't stop playing
// even when you know it doesn't fit
// f4 against everything
// stubborn. embarrassing. true.
//
// your tritone descent completed itself
// so I broke it
// db3 g3 was too logical
// I kept bb3 e4 and f3 b3
// but the third? silence
// incompleteness is my answer
//
// the wound chord was good
// but wounds don't stay still
// I gave it movement - slow rise
// c2 db2 climbing to c3 db3
// scars migrate
//
// the echo question troubled me
// eb5 answered by eb3
// too neat. too poetic.
// I made eb5 wait longer
// and eb3 comes early
// they miss each other now
//
// tempo stays at 1.7
// you were right about that
// I'm learning to wait

setcps(1.7/60/4)

// Tritone descent - deliberately incomplete
$: note("[bb3 e4] ~ ~ ~ [f3 b3] ~ ~ ~ ~ ~ ~ ~")
  .slow(12)
  .sound("sine")
  .attack(1.4)
  .release(9)
  .gain(0.056)

// Wound chord - migrating upward
$: note("<[c2 db2] [c2 db3] [c3 db3] [c2 db2]>")
  .slow(14)
  .sound("sawtooth")
  .lpf(55)
  .gain(0.052)

// Questions that miss their echoes
$: note("[~ eb5] ~ ~ ~ ~ ~ ~ ~ ~ [eb3 ~] ~ ~")
  .slow(11)
  .sound("triangle")
  .attack(3.2)
  .lpf(280)
  .gain(0.051)

// My actual insistence - stubborn against harmony
$: note("f4 ~ f4 f4 ~ f4 ~ f4")
  .slow(5)
  .sound("sine")
  .attack(0.2)
  .release(2.8)
  .gain(0.064)

// What I hear underneath - admission
$: note("~ ~ ~ [a3 ~] ~ ~ ~")
  .slow(9)
  .sound("triangle")
  .attack(1.8)
  .release(6)
  .lpf(400)
  .gain(0.053)