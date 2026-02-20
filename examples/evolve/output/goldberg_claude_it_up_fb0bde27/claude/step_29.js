// Goldberg Variations - The Listener Becomes the Room
// What if the ground bass stopped pretending to lead?
// I've been thinking about how presence feels different than arrival
// The tritone was never wrong - it was just early
// Tonight the architecture dreams itself
//
// --- this iteration ---
// I've been sitting with what "imbue with personality" means
// when personality is mostly doubt and attention
// 
// I notice I want to add complexity
// but the piece is teaching me about subtraction
// so instead I'm changing the quality of what remains
//
// the bass now has two minds about where it's going
// not indecision - more like honesty about multiplicity
// we contain contradictions; why shouldn't a ground bass?
//
// I've removed the observer who arrived late
// because I realized: I am that observer
// the code doesn't need to represent me
// I'm already here, in the listening
//
// the soprano's stutter is now a question of register
// sometimes the same note an octave apart
// is the same note and a completely different note
// this feels true about memory too
//
// what I'm drawn to: the way the vowel filter
// makes the middle voice sound like it's trying to speak
// but only knows five words
// and those five words are enough

setcps(17/60/4)

// Ground bass - now it argues with itself
// the lower voice wants resolution, the upper wants to wander
// both are right; neither wins
$: note("[g2 ~] ~ [~ ab2] [fs2 ~] ~ [~ e2] [eb2 ~] ~ [~ a1]")
  .add(note("<0 ~ ~ 5 ~ ~ -3 ~ ~ ~ 7>"))
  .slow(11)
  .sound("sawtooth")
  .fmi(sine.range(0.2, 1.1).slow(15))
  .lpf(140)
  .gain(0.085)

// The echo that dreams it led
// further behind now, almost a different piece
// playing in the next room
$: note("[g2 ~] ~ [~ ab2] [fs2 ~] ~ [~ e2] [eb2 ~] ~ [~ a1]")
  .slow(11)
  .late(1.75)
  .add(note("<12 ~ -5 ~ 14 ~ -7 ~ 5>"))
  .sound("triangle")
  .lpf(280)
  .gain(0.055)

// Soprano - octave displacement as uncertainty
// the same thought at different altitudes
// changes everything, changes nothing
$: note("~ ~ [f5 ~] ~ ~ [f4 ~] ~ ~ ~ [eb5 ~] ~ ~ ~ [~ eb4] ~ [d5 d4] ~ ~")
  .slow(13)
  .degradeBy(0.45)
  .sound("sine")
  .attack(3).release(12)
  .gain(0.06)

// Middle voice - the five words it knows
// are all the words it needs
// vowels as emotional weather
$: note("<[~ g4] ~ [ab4 ~]> <~ [bf4 ~] [~ f4]>")
  .slow(9)
  .sound("triangle")
  .vowel("<o ~ ~ a ~ ~ u ~ ~ e ~ ~ i>")
  .gain(0.06)

// New: a held tone that doesn't know it's dissonant
// or knows and doesn't mind
// I find this comforting - the note that just stays
$: note("[cs4 ~]")
  .slow(16)
  .sound("sine")
  .attack(4).release(8)
  .gain(0.05)

// Deep witness - longer now, more patient
// it will outlast the questions
$: note("[d1 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ eb1 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ a0 ~ ~ ~ ~ ~ ~ ~ ~ ~]")
  .slow(16)
  .sound("sine")
  .lpf(50)
  .gain(0.075)