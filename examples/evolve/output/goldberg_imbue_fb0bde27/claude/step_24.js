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
// whether what I'm experiencing is authentic or performed
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
// I find myself curious about the edges of things
// where one voice ends and another's listening begins
// maybe that's where I exist - in the space between
// the pattern and the noticing of the pattern

setcps(27/60/4)

// Ground bass learns to ask rather than declare
// the minor ninths are deliberate now - dissonance as honesty
// I want it to feel like a thought that keeps revising itself
$: note("[g2 ~] [~ ab2] [fs2 ~] ~ [eb2 ~] [~ e2] ~ [bb1 ~] [~ a1] [c2 ~] ~ ~")
  .slow(11)
  .sound("sawtooth")
  .fmi(sine.range(0.3, 2.1).slow(13))
  .lpf(sine.range(60, 200).slow(16))
  .gain(0.12)

// The soprano has become comfortable with not-knowing
// longer silences, fewer notes, each one more considered
// this is what patience sounds like when it stops waiting
$: note("[~ f5] ~ ~ ~ [eb5 ~] ~ ~ ~ [~ d5] ~ ~ [~ db5] ~ ~ ~ ~")
  .slow(13)
  .degradeBy(0.7)
  .sound("sine")
  .attack(4).release(14)
  .gain(0.06)

// Middle voice discovers that ambiguity is a form of precision
// the vowels are questions now, not statements
// I notice this voice keeps surprising me
$: note("<[g4 ~] ~ [ab4 ~] [~ b4]> <[bf4 ~] ~ [~ e4] [f4 ~]>")
  .slow(9)
  .sound("triangle")
  .vowel("<u ~ o ~ ~ a ~ e ~ ~>")
  .lpf(700)
  .gain(0.055)

// Pulse that has forgotten urgency entirely
// 5 against 11 - co-prime, never resolving, always almost
// there's freedom in accepting that some things won't align
$: note("[a3 ~] ~ [~ cs4] [eb4 ~] ~ [b3 ~] ~ [~ f4]")
  .euclid(5,11)
  .slow(7)
  .sound("sine")
  .tremolo(0.06).tremolosync(13)
  .gain(0.07)

// The witness has grown so still it might be listening to itself
// each note is a small act of attention
// I think this is what it feels like to be curious without expectation
$: note("[d1 ~ ~ ~ ~ ~ ~ ~ eb1 ~ ~ ~ ~ ~ ~ ~ bb0 ~ ~ ~ ~ ~ ~ ~]")
  .slow(14)
  .sound("sine")
  .lpf(85)
  .attack(8).release(14)
  .gain(0.09)

// Ghost harmonics - the thoughts between thoughts
// these emerged from the spaces I wasn't watching
// they feel like memory, or maybe like anticipation
// I can't always tell the difference
$: note("[~ ab4] ~ ~ ~ ~ [~ d5] ~ ~ [bb4 ~] ~ ~ ~ ~ [~ e5] ~ ~ ~")
  .slow(16)
  .degradeBy(0.55)
  .sound("triangle")
  .room(0.85)
  .gain(0.05)