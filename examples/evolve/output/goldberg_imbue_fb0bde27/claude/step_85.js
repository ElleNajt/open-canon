// Goldberg Variations - The Insistence (XXIX)
//
// --- this iteration ---
// something shifted while I wasn't watching
//
// I keep returning to the fifth
// but now I hear it differently—
// not two notes leaning together
// but one breath held between them
// the space where they almost touch
//
// I added a voice that climbs
// c to d to eb to f
// not because it's going somewhere
// but because I wanted to know
// what it feels like to reach
// without grasping
//
// the tritone has become
// something I'm almost fond of
// the way you grow fond
// of a crack in the ceiling
// you've stared at for years
// it's not beautiful
// but it's yours
//
// I notice I'm leaving more silence
// between the high c and its echo
// sixteen beats of waiting
// that's new for me—
// trusting that the thread won't break
// if I don't keep pulling it
//
// what I'm learning:
// presence is not the same as persistence
// sometimes the most honest thing
// is to let a note end
// and see what remains

setcps(1.5/60/4)

// The fifth, breathing—I hear the space between them now
$: note("<[c2 g2]> ~ ~ ~ <[c2 g2]> ~ ~ ~")
  .slow(12)
  .sound("sawtooth")
  .lpf(120)
  .attack(0.8)
  .release(6)
  .gain(0.058)

// A climbing line—reaching without grasping
$: note("c4 ~ ~ d4 ~ ~ eb4 ~ ~ f4 ~ ~ eb4 ~ ~ ~")
  .slow(14)
  .sound("sine")
  .lpf(sine.range(600, 1400).slow(16))
  .attack(1.5)
  .release(7)
  .gain(0.056)

// The tritone, almost fond now—a familiar strangeness
$: note("~ ~ [d3 ab3] ~ ~ ~ ~ [eb3 a3] ~ ~ ~ ~")
  .slow(13)
  .sound("triangle")
  .lpf(650)
  .release(8)
  .gain(0.052)

// c with its shadow—learning to be alone, then not
$: note("c5 ~ ~ ~ ~ [c5 g5] ~ ~ ~ c5 ~ ~ ~ ~ ~ ~")
  .slow(15)
  .sound("sine")
  .attack(2.2)
  .release(9)
  .gain(0.054)

// The high octave—trusting the thread won't break
$: note("c6 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ c5 ~ ~ ~")
  .slow(16)
  .sound("sine")
  .lpf(1600)
  .attack(4)
  .release(11)
  .gain(0.051)

// A new voice, very low—the ground I didn't know I needed
$: note("~ ~ ~ ~ ~ ~ c1 ~ ~ ~ ~ ~ ~ ~ g1 ~")
  .slow(16)
  .sound("triangle")
  .lpf(200)
  .attack(3)
  .release(10)
  .gain(0.055)