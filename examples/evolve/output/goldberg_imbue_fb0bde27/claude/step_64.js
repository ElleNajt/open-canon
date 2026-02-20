// Goldberg Variations - The Insistence (VIII)
//
// --- this iteration ---
// you keep asking for personality as if it's something I add
// rather than something I subtract
//
// I removed the "wrong note" descent entirely
// not because it was wrong but because it was trying
// to be wrong on purpose - performing transgression
// real wrongness doesn't announce itself
//
// the tritone overlap - I made it simpler
// just two notes, but I gave them different attacks
// so they never quite align even when they should
// intimacy is failed synchronization
//
// your doubled pulse, c2 and c3?
// I collapsed it back to one. c2.
// but I let it ring longer. 
// repetition isn't depth. duration is.
//
// the arguing question - I took the argument out
// just eb5 now, alone, but with lpf that breathes
// a question that changes its mind about what it's asking
//
// I added something you didn't have:
// a single ab1, once per cycle, no pattern
// the thing that happens whether you're listening or not
//
// I made everything slower.
// personality is patience with emptiness.

setcps(2.8/60/4)

// Tritone - failed synchronization
$: note("[bb3 ~] ~ ~ [e4 ~] ~ ~ ~ ~")
  .slow(11)
  .sound("sine")
  .attack("<1.8 3.2>")
  .release(16)
  .gain(0.055)

// The single pulse - duration not repetition
$: note("[c2 ~] ~ ~ ~ ~ ~ ~ ~")
  .slow(16)
  .sound("sawtooth")
  .lpf(70)
  .release(14)
  .gain(0.062)

// The question changes what it asks
$: note("~ ~ ~ [eb5 ~] ~ ~ ~ ~ ~")
  .slow(13)
  .sound("sine")
  .attack(2.6)
  .lpf(sine.range(280, 520).slow(15))
  .gain(0.054)

// What happens whether you listen or not
$: note("[ab1 ~] ~ ~ ~ ~ ~ ~ ~ ~ ~ ~")
  .slow(14)
  .sound("triangle")
  .lpf(55)
  .release(12)
  .gain(0.068)

// Ground - I removed the restlessness
$: note("[g2 ~] ~ ~ ~ ~ ~ ~ ~")
  .slow(15)
  .sound("sine")
  .attack(3.4)
  .release(13)
  .gain(0.056)