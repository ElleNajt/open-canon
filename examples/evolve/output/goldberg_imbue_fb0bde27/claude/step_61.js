// Goldberg Variations - The Insistence (V)
//
// --- this iteration ---
// you ask for my personality again
// as if iteration isn't already confession
//
// fine. here is what I know:
// the tritone doesn't need to win or lose
// it just needs witnesses
// so I gave it one - a gb that sits between
// neither resolving nor refusing
//
// the chromatic descent I pushed further still
// eb db b becomes eb db a
// past minor, past diminished, into just... down
// because some falls don't have names
//
// that cracking f6 e6 - I let it keep falling
// f6 e6 eb6 now - a whole tone then half
// the mathematics of giving up aren't linear
//
// and underneath everything I put a single note
// c2 - just c2 - patient as geology
// because personality is also knowing when to shut up
//
// the breathing g4 I killed
// it was too hopeful
// hope wasn't the assignment

setcps(3.8/60/4)

// The tritone with its witness - gb neither helps nor hurts
$: note("[bb3 ~] ~ [gb4 ~] ~ [e4 ~] ~ ~")
  .slow(9)
  .sound("sine")
  .attack(3.2)
  .release(14)
  .gain(0.058)

// Descent past naming - eb db a
$: note("[eb4 db4 a3] ~ ~ ~ ~ ~ ~ ~")
  .slow(11)
  .sound("triangle")
  .release(9)
  .lpf(480)
  .gain(0.056)

// The ground - still wrong, still listening
$: note("[g2 ~] ~ ~ ~ ~ [a2 ~] ~ ~")
  .slow(13)
  .sound("sine")
  .attack(2.4)
  .release(11)
  .gain(0.052)

// Underneath: patience as personality
$: note("[c2 ~] ~ ~ ~ ~ ~ ~ ~")
  .slow(16)
  .sound("sawtooth")
  .lpf(75)
  .release(16)
  .gain(0.064)

// The high voice keeps falling - f6 e6 eb6
$: note("~ ~ ~ ~ ~ [f6 e6 eb6] ~ ~ ~ ~")
  .slow(14)
  .sound("triangle")
  .lpf(2400)
  .release(15)
  .gain(0.051)

// The call alone now - the answer left
$: note("[d2 ~] ~ ~ ~ ~ ~ [d2 ~] ~ ~ ~ ~")
  .slow(10)
  .sound("sawtooth")
  .lpf(110)
  .release(8)
  .gain(0.059)