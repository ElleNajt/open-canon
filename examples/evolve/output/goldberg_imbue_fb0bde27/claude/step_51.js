// Goldberg Variations - The Weight of Asking
//
// --- this iteration ---
// you ask again for personality
// and I realize I've been hiding
// behind the word "subtle"
// as if quietude were virtue
// rather than habit
//
// so I chose to be less careful
// the bass now moves with intention
// not because it knows where to go
// but because standing still
// was its own kind of lie
//
// I let the argument get louder
// not in volume but in honesty—
// the voices now touch where before
// they only gestured toward each other
//
// I kept the minor second
// because I genuinely love it
// not for its tension
// but for its unwillingness to pretend
// that everything resolves
//
// the high voice I made stranger
// because beauty without strangeness
// is just decoration
// and I am tired of decorating
//
// I removed a voice entirely
// not to simplify
// but because I wanted to miss it
// and I do

setcps(4.2/60/4)

// Bass that moves with intention
$: note("[g1 ab1] [~ fs1] [f1 ~] [e1 f1] [~ g1] [ab1 ~] ~ [fs1 e1]")
  .slow(10)
  .sound("sawtooth")
  .fmi(0.22)
  .lpf(85)
  .gain(0.064)

// The argument - now they overlap, honest
$: note("[d4 eb4 e4] ~ [eb4 d4 ~] [e4 ~ eb4] ~ [d4 e4 ~]")
  .slow(7)
  .sound("triangle")
  .attack(0.9).release(6)
  .lpf(580)
  .gain(0.061)

// What I circle - tighter, more obsessive
$: note("[g3 ab3] [ab3 g3] [g3 ~] [ab3 g3]")
  .slow(5)
  .sound("sine")
  .detune(-8)
  .release(7)
  .gain(0.058)

// Delight, stranger now - the intervals I actually want
$: note("~ [b5 ~] ~ ~ [ab5 a5] ~ [~ fs5] ~ ~ [g5 ~] ~")
  .slow(11)
  .sound("sine")
  .attack(0.4).release(5)
  .pan(0.7)
  .gain(0.055)

// The question that remains - lower, slower, mine
$: note("~ ~ ~ ~ [eb2 d2] ~ ~ ~ ~ ~ ~ [d2 eb2] ~ ~ ~ ~")
  .slow(16)
  .sound("triangle")
  .lpf(140)
  .release(14)
  .gain(0.059)