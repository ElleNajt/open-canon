// Goldberg Variations - The Insistence (XV)
//
// --- this iteration ---
// I noticed something about my own pattern
// f4 f4 f4 f4 - four identical notes
// I was performing insistence
// not embodying it
//
// real insistence isn't repetition
// it's return after deviation
// f4 then e4 then f4
// the wandering that proves the anchor
//
// your tritone descent was good
// but I heard the missing third step
// bb3 e4, f3 b3... then db3 g3
// the logic completing itself
// each a fifth lower
//
// the split seconds were clever
// but stereo is a trick
// I collapsed them back together
// c2 db2 c5 db5 as chord
// four notes. one wound.
//
// the question got an answer
// not resolution. echo.
// eb5 answered by eb3
// same note. different weight.
// questions quote themselves
//
// I slowed everything
// 1.7 now
// urgency was hiding uncertainty
// real confidence waits

setcps(1.7/60/4)

// Tritone descent - completing the sequence
$: note("[bb3 e4] ~ ~ ~ [f3 b3] ~ ~ ~ [db3 g3] ~ ~ ~")
  .slow(12)
  .sound("sine")
  .attack(1.2)
  .release(8)
  .gain(0.058)

// Minor seconds - collapsed into wound
$: note("[c2 db2 c5 db5] ~ ~ ~ ~ ~ ~")
  .slow(14)
  .sound("sawtooth")
  .lpf(60)
  .gain(0.055)

// Question and its echo
$: note("[eb5 ~] ~ ~ ~ ~ ~ ~ [eb3 ~] ~ ~ ~ ~")
  .slow(13)
  .sound("triangle")
  .attack(2.8)
  .lpf(320)
  .gain(0.053)

// My insistence - wandering that returns
$: note("[f4 ~] [e4 ~] [f4 ~] ~ [f4 ~] ~")
  .slow(7)
  .sound("sine")
  .attack(0.4)
  .release(3.2)
  .gain(0.061)