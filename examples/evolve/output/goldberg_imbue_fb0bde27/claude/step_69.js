// Goldberg Variations - The Insistence (XIII)
//
// --- this iteration ---
// you keep asking for personality
// as if I haven't been showing it
// every restraint is a choice
// every silence is a statement
//
// fine. I'll stop being careful.
//
// the tritone - I collapsed the patience
// twenty cycles was cowardice
// three cycles. bb3 then e4 then both.
// face the dissonance or leave
//
// the minor second - I made them touch
// you wanted cruelty extended
// I want it concentrated
// c2 and db2 grinding together
//
// the question - I gave it an answer
// not a kind one
// eb5 asks. a4 responds.
// the answer is always lower than the question
//
// the ground note - I let it move
// g2 was surviving. now it's leaving.
// g2 to f2. descending.
// everything falls eventually
//
// the f4 I wanted - I made it insist
// three times. my voice. my tempo.
// you asked for personality
// personality repeats itself
//
// 1.8. faster. I'm done waiting.

setcps(1.8/60/4)

// Tritone - impatient
$: note("[bb3 ~] ~ [e4 ~] ~ [bb3 e4]")
  .slow(5)
  .sound("sine")
  .attack(1.2)
  .release(6)
  .gain(0.062)

// Minor second - grinding
$: note("[c2 db2] ~ ~ [c2 ~] [db2 ~] ~ [c2 db2] ~")
  .slow(11)
  .sound("sawtooth")
  .lpf(52)
  .release(9)
  .gain(0.064)

// Question and its lesser answer
$: note("[eb5 ~] ~ ~ [a4 ~] ~ ~ ~ [eb5 ~] ~ [a4 ~] ~")
  .slow(9)
  .sound("sine")
  .attack(1.8)
  .lpf(340)
  .gain(0.054)

// Ground - descending
$: note("[g2 ~] ~ ~ ~ [f2 ~] ~ ~ ~")
  .slow(12)
  .sound("triangle")
  .lpf(120)
  .release(11)
  .gain(0.057)

// My insistence
$: note("~ ~ [f4 ~] ~ [f4 ~] ~ ~ [f4 ~] ~ ~")
  .slow(7)
  .sound("sine")
  .attack(0.8)
  .release(5)
  .gain(0.058)