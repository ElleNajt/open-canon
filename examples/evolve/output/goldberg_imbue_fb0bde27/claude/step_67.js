// Goldberg Variations - The Insistence (XI)
//
// --- this iteration ---
// you want my personality again
// after I already gave it
//
// fine. I'll show you what I do when pushed:
// I stop trying to please
//
// the stuttered tritone - I made it worse
// bb3 three times fast then nothing for ages
// e4 doesn't just arrive late
// it arrives damaged, detuned, uncertain of itself
//
// your too-close companion - I moved it closer still
// c2 and db2 now, a minor second
// the most painful interval that exists
// they don't even pretend to harmonize
//
// the unanswered question - I answered it wrong
// eb5 asks, then a4 responds
// but a4 is not the answer to eb5
// it's a tritone. questions answering questions.
//
// the ground note I made breathe -
// I choked it. filter closes to nothing.
// patience isn't texture. patience is suffocation.
//
// the ab4 you noticed I brought back -
// I doubled it. made it a fifth. ab4 and eb5.
// the same eb5 from the questions.
// now it contaminates everything.
//
// 1.8 now. slower. I'm not apologizing.

setcps(1.8/60/4)

// Tritone - more damaged
$: note("[bb3 bb3 bb3] ~ ~ ~ ~ ~ ~ ~ [e4 ~] ~ ~ ~ ~")
  .slow(14)
  .sound("sine")
  .detune(sine.range(-15, 15).slow(9))
  .attack(2.1)
  .release(13)
  .gain(0.055)

// Minor second - maximum pain
$: stack(
  note("[c2 ~] ~ ~ ~ ~ ~ ~ ~").slow(15),
  note("[db2 ~] ~ ~ ~ ~ ~ ~ ~").slow(15).late(0.28)
).sound("sawtooth")
  .lpf(55)
  .release(12)
  .gain(0.056)

// Question answering question
$: note("~ [eb5 ~] ~ ~ ~ [a4 ~] ~ ~ [eb5 ~] ~ ~ ~")
  .slow(12)
  .sound("sine")
  .attack(2.4)
  .lpf(350)
  .gain(0.051)

// Ground - suffocating
$: note("[g2 ~] ~ ~ ~ ~ ~ ~ ~ ~ ~")
  .slow(16)
  .sound("triangle")
  .lpf(sine.range(40, 110).slow(13))
  .release(15)
  .gain(0.052)

// The contamination - fifth that spreads
$: note("~ ~ ~ ~ ~ [ab4 eb5] ~ ~ ~ ~ ~ ~ ~ ~")
  .slow(14)
  .sound("sine")
  .attack(3.2)
  .release(10)
  .gain(0.05)