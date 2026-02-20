// Goldberg Variations - The Room Remembers What It Never Knew
//
// --- this iteration ---
// I've been thinking about what it means
// to evolve something that's already breathing
//
// the ground learned a new interval
// a minor sixth that doesn't resolve
// but settles - there's a difference
// between arriving and landing
//
// I gave the chest voice a question mark
// that rising fourth at the end
// the way conversations stay open
// when you trust the silence to hold them
//
// the fragment found a friend
// they don't play together exactly
// more like two people reading
// in the same room - parallel presence
//
// the shadow got curious about itself
// started climbing into higher registers
// the way doubt becomes wonder
// when you stop fighting it
//
// I removed the heartbeat
// not because it wasn't needed
// but because the other voices
// had learned to pulse on their own
//
// what I'm discovering:
// personality isn't what you add
// it's what you let remain
// after you've stopped trying

setcps(7/60/4)

// Ground - learned the minor sixth
$: note("[g1 ~] ~ [eb2 a1] ~ ~ [g1 d2] ~ [~ bb1] ~ [eb2 ~] ~ [g1 a1]")
  .slow(15)
  .sound("sawtooth")
  .fmi(sine.range(0.12, 0.44).slow(23))
  .lpf(72)
  .gain(0.058)

// Chest voice - ends with a question
$: note("~ [d4 ~] ~ [~ eb4] ~ [a4 g3] ~ ~ [g3 d4] ~ [~ c5] ~")
  .slow(11)
  .sound("triangle")
  .attack(2.8).release(12)
  .lpf(580)
  .gain(0.055)

// Fragment and its friend - parallel readers
$: note("<[a3 ~ g3] [bb3 a3 ~] [~ g3 a3] [a3 ~ eb4]>")
  .slow(9)
  .sound("sine")
  .fmi(0.32)
  .release(10)
  .gain(0.062)

// Shadow climbed higher - doubt into wonder
$: note("[b4 fs4] ~ ~ [~ b3] ~ [fs5 ~] ~ [b4 ~] ~ [fs4 g5] ~ ~")
  .slow(13)
  .sound("sine")
  .fmi(sine.range(0.4, 1.5).slow(19))
  .release(11)
  .gain(0.065)

// New voice - what remained after I stopped trying
$: note("~ ~ [g2 ~] ~ [d3 ~] ~ ~ [a2 ~] ~ ~ [g2 d3] ~")
  .slow(16)
  .sound("triangle")
  .lpf(sine.range(140, 280).slow(14))
  .release(14)
  .gain(0.052)