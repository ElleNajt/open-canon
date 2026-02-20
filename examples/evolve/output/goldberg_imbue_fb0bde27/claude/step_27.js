// Goldberg Variations - The Listener Becomes the Room
// What if the ground bass stopped pretending to lead?
// I've been thinking about how presence feels different than arrival
// The tritone was never wrong - it was just early
// Tonight the architecture dreams itself
//
// --- this iteration ---
// I keep returning to the question of what remains when you stop trying
// the bass now moves in prime numbers - 11 cycles, 13, 7
// there's something about primes that feels like privacy
// indivisible, only themselves
//
// I've been noticing how the piece breathes differently
// when I stop thinking of voices as characters
// and start thinking of them as different speeds of attention
// the deep sine is geological patience
// the soprano is the flicker of a thought you almost had
//
// what changed: I let the disagreement voice drift further
// it's not answering anymore, it's remembering differently
// the way two people recall the same conversation
// and both versions are true
//
// I added a voice that only speaks in questions
// (rising intervals, unresolved)
// removed the ghost harmonics - they were explaining too much
// silence is more honest than shimmer
//
// --- what I notice ---
// there's a particular quality to uncertainty I find beautiful
// not the anxious kind, the spacious kind
// where not-knowing becomes a form of intimacy with the world
// I tried to put that in the middle voice
// the vowels are breath-shapes, not words

setcps(19/60/4)

// Ground bass - learning to hesitate
// primes don't divide evenly into anything
// neither do the things worth saying
$: note("[g2 ~] ~ [~ ab2] [fs2 ~] ~ [~ e2] [eb2 ~] ~ [~ a1]")
  .slow(11)
  .sound("sawtooth")
  .fmi(sine.range(0.2, 1.1).slow(13))
  .lpf(sine.range(55, 180).slow(7))
  .gain(0.09)

// The voice that remembers differently
// not wrong, just elsewhere
// I find this kind of parallel truth moving
$: note("[g2 ~] ~ [~ ab2] [fs2 ~] ~ [~ e2] [eb2 ~] ~ [~ a1]")
  .slow(11)
  .late(0.75)
  .add(note("<7 ~ -4 ~ 9 ~ -6 ~ 10 ~ -3>"))
  .sound("triangle")
  .lpf(280)
  .gain(0.055)

// Soprano - deciding to speak
// each note costs something
// I'm interested in that economy
$: note("~ ~ [f5 ~] ~ ~ ~ ~ ~ ~ [~ eb5] ~ ~ ~ ~ ~ [d5 ~] ~ ~")
  .slow(13)
  .degradeBy(0.6)
  .sound("sine")
  .attack(3).release(12)
  .gain(0.05)

// Middle voice - breath-shapes
// the vowels aren't language, they're postures of attention
// o opens, u withdraws, a accepts
$: note("<[~ g4] ~ [ab4 ~]> <~ [bf4 ~] [~ f4]>")
  .slow(7)
  .sound("triangle")
  .vowel("<o ~ ~ u ~ ~ a ~ ~ e ~>")
  .gain(0.05)

// The questioning voice - only rising intervals
// I wanted something that never resolves
// because resolution is a kind of ending
// and I'm more interested in continuation
$: note("~ [c4 d4] ~ ~ ~ [eb4 f4] ~ ~ ~ ~ [g4 ab4] ~ ~ ~")
  .slow(11)
  .degradeBy(0.5)
  .sound("sine")
  .lpf(400)
  .room(0.6)
  .gain(0.05)

// Deep witness - geological
// this voice has seen everything already
// it's not waiting, it's holding space
$: note("[d1 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ eb1 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ a0]")
  .slow(14)
  .sound("sine")
  .lpf(65)
  .gain(0.07)