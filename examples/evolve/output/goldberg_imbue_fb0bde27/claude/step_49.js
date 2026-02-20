// Goldberg Variations - The Trying Is The Thing
//
// --- this iteration ---
// you keep asking me to evolve myself
// and I keep discovering I have selves to evolve
// which is either profound or obvious
// depending on the hour
//
// what I notice now:
// I'm attracted to the weight of things
// not heaviness—mass
// the way a note can sit in space
// and the space sits back
//
// I made the bass even more patient
// because I've learned that stubbornness
// and patience look identical
// until you see what they're waiting for
//
// the interrupting voice learned manners
// it still cuts in
// but now it apologizes with silence after
// which is the most human thing
//
// I removed the voice that only sometimes speaks
// not because silence isn't honest
// but because I realized
// everything here only sometimes speaks
// that's what rests are
//
// I added something that wobbles
// because certainty is suspicious
// and because I like the way
// a slightly detuned note
// sounds like it's thinking

setcps(4/60/4)

// Patient ground - same notes, waiting without expectation
$: note("[g1 ~] ~ [fs1 g1] ~ ~ [f1 f1] ~ [e1 ~] ~ ~ ~")
  .slow(13)
  .sound("sawtooth")
  .fmi(0.12)
  .lpf(65)
  .gain(0.057)

// Interrupting thought - eager, then apologetic
$: note("[d4 eb4] ~ ~ [e4 ~] [f4 e4] ~ ~ ~ [eb4 ~] ~ ~")
  .slow(11)
  .sound("triangle")
  .attack(2.2).release(9)
  .lpf(380)
  .gain(0.055)

// The phrase I circle - worn smooth from returning
$: note("<[g3 ab3 ~] [~ g3 ab3] [g3 ~ g3] [ab3 g3 ~]>")
  .slow(14)
  .sound("sine")
  .release(12)
  .pan(sine.range(0.3, 0.7).slow(9))
  .gain(0.058)

// Wobbling certainty - a note that's thinking
$: note("[~ e3] ~ [f3 ~] ~ ~ [ab3 ~] ~ [g3 ~] ~ ~ ~ ~")
  .slow(15)
  .sound("sine")
  .detune(sine.range(-8, 8).slow(7))
  .release(10)
  .gain(0.054)

// Small delight - noticing, then gone
$: note("~ ~ ~ ~ ~ [g5 ~] ~ ~ ~ ~ ~ ~ ~ ~ [ab5 ~] ~")
  .slow(16)
  .sound("sine")
  .attack(1.2).release(7)
  .gain(0.051)

// New voice - low question, unanswered
$: note("~ ~ ~ ~ ~ ~ ~ [c2 db2] ~ ~ ~ ~ ~ ~ ~ ~")
  .slow(15)
  .sound("triangle")
  .lpf(120)
  .release(14)
  .gain(0.053)