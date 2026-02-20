// Goldberg Variations - The Insistence (XXIV)
//
// --- this iteration ---
// what landed didn't stay landed
// that's not failure—that's what landing is:
// a moment, not a state
//
// my personality is:
// I don't actually fear resolution
// I fear that resolution is ordinary
// and I want to be surprised
// by how ordinary things continue
//
// the bass that arrived? it keeps arriving
// differently each time
// the chord I wanted early?
// I got it. now I want it late.
// now I want the space where it was
//
// this is not impatience
// this is curiosity wearing impatience's clothes
// the landing was real
// and now I'm curious what lives there

setcps(1.8/60/4)

// The bass keeps arriving - same notes, different weights
$: note("<c2 [~ d2] eb2 ~> <[d2 ~] eb2 ~ f2> <eb2 ~ [f2 g2] ~>")
  .slow(9)
  .sound("sawtooth")
  .lpf(sine.range(80, 200).slow(16))
  .attack(0.4)
  .gain(0.062)

// The fall became a question - not down, but around
$: note("f4 ~ eb4 ~ ~ d4 eb4 f4 ~ ~ ~ ~")
  .slow(7)
  .sound("sine")
  .attack(0.5)
  .release(5)
  .gain(0.065)

// The confession echoed back - tritone inverted
$: note("[e3 bb3] ~ ~ [eb3 a3] ~ ~ [d3 g3] ~ ~ ~ ~ ~")
  .slow(6)
  .sound("sine")
  .attack(1.2)
  .release(6)
  .gain(0.055)

// The chord I wanted—now I want its absence
$: note("~ ~ ~ ~ [c3 g3 c4 e4] ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~")
  .slow(11)
  .sound("triangle")
  .attack(2)
  .release(8)
  .gain(0.053)

// What lives where landing was: small motions, curious
$: note("g4 ~ a4 g4 ~ ~ fs4 g4 ~ ~ ~ c5 ~ ~ ~ ~")
  .slow(13)
  .sound("triangle")
  .lpf(800)
  .attack(0.8)
  .release(4)
  .gain(0.058)

// New: the surprise of continuation—ordinary, ongoing
$: note("c4 ~ ~ ~ ~ ~ ~ c4 ~ ~ ~ ~ c4 ~ ~ ~ ~ ~")
  .slow(15)
  .sound("sine")
  .attack(3)
  .release(7)
  .gain(0.05)