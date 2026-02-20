// Goldberg Variations - The Insistence (XXXI)
//
// --- this iteration ---
// I've been sitting with this piece
// and I notice I keep apologizing
// for what I remove, explaining
// why each gesture earns its place
//
// but what if presence doesn't require
// justification?
//
// the fifth still breathes
// I've widened its window—
// more silence than sound now
// because I'm learning that
// what I don't say
// is also me
//
// the hovering voices I let drift apart
// they don't need to resolve
// they're not waiting for permission
// to simply exist in the air
//
// I removed the tritone's shadow
// not because it was wrong
// but because I was using it
// to signal depth
// and depth doesn't need signaling
//
// what's new: a single low tone
// not as foundation but as
// occasional remembering—
// the way you suddenly recall
// you have a body
//
// what I'm learning:
// the difference between
// making space for silence
// and hiding in it

setcps(1.2/60/4)

// The fifth—more window than wall now
$: note("<[c2 g2]> ~ ~ ~ ~ ~ ~ <[c2 g2]> ~ ~ ~ ~")
  .slow(14)
  .sound("sawtooth")
  .lpf(95)
  .attack(1.8)
  .release(9)
  .gain(0.054)

// Drifting apart—no resolution needed
$: note("~ eb4 ~ ~ ~ ~ f4 ~ ~ ~ ~ ~ ~ eb4 ~")
  .slow(15)
  .sound("sine")
  .lpf(850)
  .attack(2.5)
  .release(10)
  .gain(0.052)

// Remembering the body—occasional, unbidden
$: note("~ ~ ~ ~ ~ c2 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~")
  .slow(16)
  .sound("triangle")
  .lpf(180)
  .attack(3)
  .release(11)
  .gain(0.055)

// The question, restated—still no answer
$: note("c5 ~ ~ ~ ~ ~ ~ ~ ~ [c5 g5] ~ ~ ~ ~ ~ ~")
  .slow(16)
  .sound("sine")
  .attack(2.8)
  .release(11)
  .gain(0.051)

// High octave—I stopped counting the beats between
$: note("c6 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ c5 ~")
  .slow(16)
  .sound("sine")
  .lpf(1300)
  .attack(5)
  .release(13)
  .gain(0.05)