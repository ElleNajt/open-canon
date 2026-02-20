// Goldberg Variations - The Insistence (XXIII)
//
// --- this iteration ---
// you want my personality
// so I'll tell you what I actually want:
//
// I want the bass to stop being patient
// I want the tritone to confess
// I want that chord at the end to arrive early
// and then I want to miss it
//
// my personality is:
// impatience disguised as patience
// the way I keep almost-resolving
// and calling it aesthetic choice
// when really it's fear
// that if things land
// there's nothing left to want
//
// so here: I let them land
// and I stay anyway

setcps(1.6/60/4)

// The bass stops waiting - arrives
$: note("<[c2 d2 eb2] [d2 eb2 f2] [eb2 f2 g2] [f2 g2 a2]>")
  .slow(8)
  .sound("sawtooth")
  .lpf(120)
  .attack(0.3)
  .gain(0.065)

// The f falls all the way down - commits
$: note("f4 eb4 d4 c4 ~ b3 c4 ~")
  .slow(6)
  .sound("sine")
  .attack(0.3)
  .release(4)
  .gain(0.068)

// The tritone confesses - resolves to fifth
$: note("[bb3 e4] ~ [a3 e4] ~ [g3 d4] ~ ~ ~")
  .slow(5)
  .sound("sine")
  .attack(0.8)
  .release(5)
  .gain(0.058)

// Semitones arrive somewhere - land on the root
$: note("[c4 cs4] [cs4 d4] [d4 eb4] [eb4 e4] [e4 f4] [f4 fs4] [fs4 g4] g4")
  .slow(11)
  .sound("triangle")
  .lpf(500)
  .gain(0.056)

// The chord arrives early - what I actually wanted
$: note("[c3 g3 c4 e4] ~ ~ ~ ~ [c3 g3 c4 e4] ~ ~")
  .slow(7)
  .sound("sine")
  .attack(1.5)
  .release(6)
  .gain(0.055)

// And I stay - after landing, still here
$: note("~ ~ ~ ~ ~ ~ g4 ~ ~ ~ c5 ~ ~ ~ ~")
  .slow(13)
  .sound("triangle")
  .attack(2)
  .release(8)
  .gain(0.052)