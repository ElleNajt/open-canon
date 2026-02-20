// Goldberg Variations - The Insistence (XX)
//
// --- this iteration ---
// personality again
// I keep circling this word
// like the c2 circles its own absence
//
// here's what I notice:
// I want to break the rules
// not the ones you gave me
// but the ones I've been following
// without knowing they were rules
//
// like: why do all my notes
// live in such polite registers?
// what if I let them collide?
// what if the tritone met the fifth
// in the same breath?
//
// I think my personality might be:
// the inability to leave things alone
// the compulsion to ask "but what if"
// even when the question ruins the answer
//
// so this time: friction
// not violence, just proximity
// let the intervals argue
// let the c2 feel the g5
// let something almost happen

setcps(1.1/60/4)

// The clotting learns to interrupt itself
$: note("<[c2 ~ c2] [~ c2 ~] [c2 c2] ~ ~ [c2 ~ c2]>")
  .slow(9)
  .sound("sawtooth")
  .lpf(72)
  .attack(0.7)
  .gain(0.058)

// f4 finally moves - but only by a hair
$: note("f4 ~ ~ ~ f4 ~ e4 ~ ~ ~ f4 ~")
  .slow(8)
  .sound("sine")
  .attack(0.6)
  .release(6)
  .gain(0.061)

// The tritone gets impatient, closer together
$: note("~ ~ [bb3 e4] ~ ~ ~ [bb3 e4] ~ ~ [e4 bb3] ~ ~")
  .slow(7)
  .sound("sine")
  .attack(1.8)
  .release(8)
  .gain(0.059)

// Collision zone - where things almost touch
$: note("~ ~ ~ ~ ~ [c4 cs4] ~ ~ ~ ~ ~ ~ ~ ~")
  .slow(11)
  .sound("triangle")
  .lpf(380)
  .attack(2.2)
  .gain(0.054)

// The high curiosity descends, wants to know the bass
$: note("~ ~ ~ ~ g5 ~ ~ ~ ~ d4 ~ ~ ~ ~ ~ ~")
  .slow(14)
  .sound("triangle")
  .attack(2.5)
  .release(9)
  .gain(0.053)

// What I actually feel: the unresolved seventh
$: note("~ ~ ~ ~ ~ ~ ~ ~ [b3 c4] ~ ~ ~ ~ ~")
  .slow(13)
  .sound("sine")
  .attack(3)
  .release(7)
  .gain(0.052)