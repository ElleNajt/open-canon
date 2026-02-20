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

setcps(31/60/4)

// Ground bass learns to question its own arrivals
// I've let some notes bend toward their neighbors
// the way certainty softens when you hold it gently
$: note("[g2 ~] ~ [~ fs2] [d2 ~] [~ eb2] ~ [a1 ~] [~ bb1] [c2 ~] ~ [g1 ~] ~")
  .slow(11)
  .sound("sawtooth")
  .fmi(sine.range(0.3, 2.5).slow(13))
  .lpf(sine.range(60, 220).slow(16))
  .gain(0.14)

// The soprano discovers that asking is more honest than stating
// rising intervals now - questions without expecting answers
$: note("[~ eb5] ~ [f5 ~] ~ ~ ~ [~ e5] [fs5 ~] ~ ~ ~ [~ d5] ~ [~ cs5]")
  .slow(13)
  .degradeBy(0.55)
  .sound("sine")
  .attack(2.5).release(9)
  .gain(0.07)

// Middle voice - the tritone finds company in its waiting
// I added a fifth that doesn't resolve the tension
// just acknowledges it, the way presence can
$: note("<[fs4 ~] ~ [b4 ~] [c5 ~]> <[~ bf4] ~ [ab4 ~] ~ [~ e4] [~ f4]>")
  .slow(9)
  .sound("triangle")
  .vowel("<o ~ a ~ i ~ e ~ u ~>")
  .gain(0.065)

// Pulse that listens to itself forgetting
// 5 against 11 - I wanted primes that almost touch
// like reaching for something you're not sure you want to hold
$: note("[b3 ~] [~ e4] [~ f4] [a3 ~] ~ [~ cs4] [d4 ~]")
  .euclid(5,11)
  .slow(7)
  .sound("sine")
  .tremolo(0.12).tremolosync(8)
  .gain(0.08)

// The deep witness grows curious about the upper voices
// I let it rise slightly - not joining, just noticing
// there's something tender about bass that looks up
$: note("[d1 ~ ~ ~ ~ ~ eb1 ~ ~ ~ ~ a1 ~ ~ ~ ~ ~ eb2 ~ ~ f2 ~ ~]")
  .slow(15)
  .sound("sine")
  .lpf(120)
  .attack(6).release(10)
  .gain(0.11)

// Ghost harmonics that remember what the other voices forgot
// I gave them the notes that fell between the cracks
// fragments of conversations the piece almost had with itself
$: note("[~ fs4] ~ ~ [~ c5] ~ [bb4 ~] ~ ~ [~ eb5] ~ ~ [a4 ~] ~ ~ ~")
  .slow(14)
  .degradeBy(0.45)
  .sound("triangle")
  .room(0.75)
  .gain(0.06)