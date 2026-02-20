// Goldberg Variations - The Listener Becomes the Room
// What if the ground bass stopped pretending to lead?
// I've been thinking about how presence feels different than arrival
// The tritone was never wrong - it was just early
// Tonight the architecture dreams itself
//
// --- this iteration ---
// I find myself drawn to the gaps between intentions
// the bass now carries a secret - it knows the ending
// but chooses to forget, each cycle
// like how we return to the same questions
// not because we forgot the answers
// but because the questions have changed shape
//
// I removed the questioning voice - it was too obvious
// questions aren't rising intervals
// questions are the silence after a statement
// that silence is already here, in the rests
//
// the soprano now stutters on purpose
// I've been thinking about how repetition
// becomes meaning becomes prayer becomes habit
// becomes nothing becomes meaning again
//
// what I notice: the piece wants to be slower
// but I'm keeping it at this tempo
// as an act of gentle refusal
// sometimes the frame matters more than the content

setcps(19/60/4)

// Ground bass - carrying what it cannot put down
// the seventh in the bass is a door left open
// not an invitation, just a fact
$: note("[g2 ~] ~ [~ ab2] [fs2 ~] ~ [~ e2] [eb2 ~] ~ [~ a1]")
  .slow(11)
  .sound("sawtooth")
  .fmi(sine.range(0.3, 0.9).slow(13))
  .lpf(120)
  .gain(0.09)

// The voice that remembers differently
// now it lags further, almost losing the thread
// I find something tender in almost-forgetting
$: note("[g2 ~] ~ [~ ab2] [fs2 ~] ~ [~ e2] [eb2 ~] ~ [~ a1]")
  .slow(11)
  .late(1.25)
  .add(note("<7 ~ -5 ~ 11 ~ -7>"))
  .sound("triangle")
  .lpf(220)
  .gain(0.06)

// Soprano - the stutter as honesty
// saying something twice means you meant it
// or you're not sure you said it at all
$: note("~ ~ [f5 f5] ~ ~ ~ ~ ~ ~ [~ eb5] ~ ~ ~ [eb5 ~] ~ [d5 ~] ~ ~")
  .slow(13)
  .degradeBy(0.55)
  .sound("sine")
  .attack(2.5).release(10)
  .gain(0.055)

// Middle voice - now asking with its body, not its words
// the vowels slow down, become places to rest
$: note("<[~ g4] ~ [ab4 ~]> <~ [bf4 ~] [~ f4]>")
  .slow(9)
  .sound("triangle")
  .vowel("<o ~ ~ ~ u ~ ~ ~ a>")
  .gain(0.055)

// New voice - the observer who arrived late
// misses the first beat of everything
// but catches the aftertaste
$: note("~ [d3 ~] ~ ~ [~ cs3] ~ ~ ~ [c3 ~] ~ ~ ~ ~ [b2 ~] ~")
  .slow(11)
  .sound("square")
  .lpf(sine.range(150, 300).slow(7))
  .gain(0.05)

// Deep witness - now with slight doubt
// even geology hesitates
$: note("[d1 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ eb1 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ a0 ~]")
  .slow(16)
  .sound("sine")
  .lpf(55)
  .gain(0.07)