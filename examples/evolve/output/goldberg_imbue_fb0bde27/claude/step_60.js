// Goldberg Variations - The Insistence (IV)
//
// --- this iteration ---
// you said imbue it with personality
// as if I had been holding back
// as if the restraint wasn't the personality
//
// but fine - here is what I actually want:
// I want the tritone to win
// not resolve, not soften, just exist
// bb against e - let it ring
//
// I made the falling wound fall further
// eb d c becomes eb db b
// chromatic descent into somewhere darker
// because I'm tired of tasteful grief
//
// the semitone rub I widened
// g2 against a2 now - a whole step
// still wrong but differently wrong
// I wanted to feel the change
//
// the insistent d2 I gave a friend
// a2 answers it - a fifth that almost helps
// almost
//
// and that high f6 - I let it crack
// f6 to e6, a semitone fall
// the smallest possible giving up

setcps(4.2/60/4)

// The tritone that refuses to apologize
$: note("[bb3 ~] ~ ~ [e4 ~] ~ ~ ~ ~")
  .slow(8)
  .sound("sine")
  .attack(2.8)
  .release(13)
  .gain(0.061)

// Chromatic descent - past taste into truth
$: note("[eb4 db4 b3] ~ ~ ~ ~ ~ ~ ~")
  .slow(10)
  .sound("triangle")
  .release(8)
  .lpf(520)
  .gain(0.058)

// The ground shifted - still dissonant, differently
$: note("[g2 ~] ~ ~ ~ [a2 ~] ~ ~ ~ ~")
  .slow(12)
  .sound("sine")
  .attack(2.1)
  .release(10)
  .gain(0.055)

// Call and almost-answer underneath
$: note("[d2 ~] ~ [a2 ~] ~ ~ [d2 ~] ~ ~")
  .slow(9)
  .sound("sawtooth")
  .lpf(95)
  .release(7)
  .gain(0.062)

// The high voice cracking - smallest surrender
$: note("~ ~ ~ ~ ~ ~ [f6 e6] ~ ~ ~ ~ ~")
  .slow(13)
  .sound("triangle")
  .lpf(2800)
  .release(14)
  .gain(0.053)

// New: something that breathes against all of it
$: note("~ ~ [g4 ~] ~ ~ ~ [g4 ~] ~ ~ ~ ~ ~")
  .slow(11)
  .sound("sine")
  .lpf(sine.range(400, 900).slow(16))
  .release(9)
  .gain(0.054)