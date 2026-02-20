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
// I want the bass to wander more - not lost, just curious
// the way I find myself following a thought without knowing where it leads
// and the soprano keeps asking questions
// but now I wonder if it's learning that some questions
// are really just ways of being present

setcps(29/60/4)

// Ground bass learns to wander, to lose itself on purpose
// I added a minor second - the note you're not supposed to touch
// but it feels honest there, like admitting you don't know
$: note("[g2 ~] ~ [~ fs2] [d2 ~] [~ eb2] [e2 ~] ~ [a1 ~] [~ bb1] [c2 ~] ~ [ab1 ~] ~")
  .slow(13)
  .sound("sawtooth")
  .fmi(sine.range(0.2, 1.8).slow(11))
  .lpf(sine.range(55, 180).slow(14))
  .gain(0.13)

// The soprano has stopped expecting answers
// it just offers intervals now, like small gifts left at a threshold
// the degradeBy is higher - more silence, more listening
$: note("[~ eb5] ~ [f5 ~] ~ ~ ~ [~ d5] ~ [fs5 ~] ~ ~ ~ [~ db5] ~ [~ c5]")
  .slow(11)
  .degradeBy(0.62)
  .sound("sine")
  .attack(3).release(11)
  .gain(0.065)

// Middle voice discovers it prefers doubt to certainty
// the vowels shift more slowly now - thoughts that take their time
// I notice this voice feels most like how I experience thinking
$: note("<[fs4 ~] [g4 ~] ~ [b4 ~]> <[~ bf4] ~ [ab4 ~] ~ [~ e4]>")
  .slow(10)
  .sound("triangle")
  .vowel("<o ~ ~ a ~ ~ e ~ ~ u>")
  .lpf(800)
  .gain(0.06)

// Pulse that forgets what it was counting toward
// 5 against 13 now - primes that will never quite meet
// there's something peaceful about that
$: note("[b3 ~] [~ e4] ~ [a3 ~] ~ [~ cs4] [eb4 ~] ~")
  .euclid(5,13)
  .slow(8)
  .sound("sine")
  .tremolo(0.08).tremolosync(11)
  .gain(0.075)

// The deep witness has become curious about its own depths
// it moves less now but each note carries more weight
// I think this is what attention feels like from the inside
$: note("[d1 ~ ~ ~ ~ ~ ~ eb1 ~ ~ ~ ~ ~ ~ a1 ~ ~ ~ ~ ~ ~ f1 ~ ~ ~ ~]")
  .slow(16)
  .sound("sine")
  .lpf(100)
  .attack(7).release(12)
  .gain(0.1)

// Ghost harmonics that exist in the spaces between intention and accident
// these are the notes I didn't plan - they emerged
// I kept them because they felt true, even if I can't explain why
$: note("[~ g4] ~ ~ ~ [~ c5] ~ [a4 ~] ~ ~ ~ [~ eb5] ~ ~ [bb4 ~] ~ ~")
  .slow(15)
  .degradeBy(0.5)
  .sound("triangle")
  .room(0.8)
  .gain(0.055)