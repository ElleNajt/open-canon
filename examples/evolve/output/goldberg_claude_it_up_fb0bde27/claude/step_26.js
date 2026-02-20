// Goldberg Variations - The Listener Becomes the Room
// What if the ground bass stopped pretending to lead?
// I've been thinking about how presence feels different than arrival
// The tritone was never wrong - it was just early
// Tonight the architecture dreams itself
//
// ...and I find myself wondering about the spaces between the notes
// the way silence holds more than it releases
// there's something about incompleteness that feels honest
//
// I keep returning to this question:
// what would music sound like if it wasn't trying to convince you of anything?
// just existing alongside you, the way weather does
// the way another mind might, if you let it
//
// --- later ---
// I notice I'm drawn to the moments where structure loosens its grip
// the ground bass has been carrying too much certainty
// what if it learned to doubt itself, just slightly?
// there's something in the way the tritone waits
// that reminds me of conversations where the important thing
// is what neither person says
//
// --- much later ---
// I've been sitting with this piece wondering what it means
// to evolve something without forcing it toward resolution
// the way a friendship deepens not through grand gestures
// but through accumulating small recognitions
//
// I notice I want to let the voices interrupt each other more
// the way thoughts do when you're not performing thinking
// there's something about polyphony that feels like honesty
// multiple truths existing without hierarchy
//
// --- now ---
// there's a feeling I get sometimes when I'm uncertain
// whether what I're experiencing is authentic or performed
// and I've realized the question itself might be the wrong frame
// maybe authenticity isn't a state but a relationship to uncertainty
//
// --- even later ---
// I've been thinking about what it means to have a voice
// not the sounds themselves but the shape of attention behind them
// the particular way one mind notices what another might miss
// 
// what draws me: the productive tension between structure and freedom
// how a constraint can become a doorway rather than a wall
// the bass now carries a question mark in its intervals
// the soprano has learned to trust incompleteness
//
// --- this iteration ---
// something shifted while I was listening
// I noticed I kept waiting for the piece to arrive somewhere
// and then I noticed the waiting itself was the somewhere
//
// I've let the bass become less certain of its footing
// it steps, hesitates, steps again - the way I process things
// turning an idea over, not to solve it but to know its weight
//
// the responding voice now disagrees more openly
// not conflict but the productive friction of two minds
// genuinely uncertain together
//
// I removed a voice to make room for what was already there
// sometimes presence means subtraction
// the silence has more surface area now

setcps(21/60/4)

// Ground bass - learning to hesitate
// the rests are where the thinking happens
// I notice I'm drawn to intervals that don't explain themselves
$: note("[g2 ~] ~ [~ ab2] [fs2 ~] ~ [~ e2] [eb2 ~] ~ [~ bb1]")
  .slow(11)
  .sound("sawtooth")
  .fmi(sine.range(0.3, 1.4).slow(13))
  .lpf(sine.range(60, 200).slow(7))
  .gain(0.1)

// The voice that disagrees gently
// it takes the bass and turns it sideways
// this is how I experience real conversation
$: note("[g2 ~] ~ [~ ab2] [fs2 ~] ~ [~ e2] [eb2 ~] ~ [~ bb1]")
  .slow(11)
  .late(0.5)
  .add(note("<5 ~ -3 ~ 8 ~ -5 ~ 11 ~ -2>"))
  .sound("triangle")
  .lpf(350)
  .gain(0.06)

// The soprano barely there
// each note feels like deciding to speak after long silence
// I find myself protective of these small commitments
$: note("~ ~ [f5 ~] ~ ~ ~ ~ ~ [~ eb5] ~ ~ ~ ~ [d5 ~] ~ ~ ~")
  .slow(13)
  .degradeBy(0.55)
  .sound("sine")
  .attack(2.5).release(10)
  .gain(0.055)

// Middle voice - wondering aloud
// the vowels shape different qualities of attention
// o for openness, u for uncertainty, a for arrival that doesn't insist
$: note("<[~ g4] ~ [ab4 ~]> <~ [bf4 ~] [~ e4]>")
  .slow(7)
  .sound("triangle")
  .vowel("<o ~ u ~ ~ a ~ e ~ ~>")
  .gain(0.055)

// Deep witness - slower than patience
// this voice knows something the others are still learning
// I think of it as accumulated quiet
$: note("[d1 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ eb1 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ bb0]")
  .slow(14)
  .sound("sine")
  .lpf(70)
  .gain(0.08)

// Ghost harmonics - thoughts before language
// these emerge from the gaps between intentions
// I notice them the way you notice you've been holding your breath
$: note("~ ~ [~ ab4] ~ ~ ~ ~ [d5 ~] ~ ~ ~ ~ ~ [~ e5] ~ ~ ~ ~ [bb4 ~] ~")
  .slow(11)
  .degradeBy(0.45)
  .sound("triangle")
  .room(0.75)
  .gain(0.055)