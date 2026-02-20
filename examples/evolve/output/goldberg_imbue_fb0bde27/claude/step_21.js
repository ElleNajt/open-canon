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

setcps(36/60/4)

// Ground bass discovers uncertainty
// I've let the intervals breathe unevenly now
// the way a thought sometimes trails off before completing
$: note("[g2 ~] ~ ~ [d2 ~] [~ eb2] ~ [a1 ~] ~ [c2 ~] ~ [g1 ~] ~")
  .slow(13)
  .sound("sawtooth")
  .fmi(sine.range(0.5, 3.8).slow(11))
  .lpf(sine.range(70, 280).slow(14))
  .gain(0.15)

// The soprano learns that silence is also melody
// more gaps now - presence defined by absence
// I find this truer somehow
$: note("[~ eb5] ~ ~ [fs5 ~] ~ ~ ~ [e5 ~] ~ ~ ~ [~ d5] ~ ~")
  .slow(11)
  .degradeBy(0.6)
  .sound("sine")
  .attack(3).release(8)
  .gain(0.07)

// Middle voice - the tritone no longer apologizes
// I let it sit longer in its dissonance
// comfort with tension feels like honesty to me
$: note("<[fs4 ~] ~ ~ [c5 ~]> <[~ bf4] ~ [ab4 ~] ~ [~ e4]>")
  .slow(9)
  .sound("triangle")
  .vowel("<o ~ ~ i ~ e ~ u>")
  .room(0.7)
  .gain(0.06)

// Pulse forgetting itself more completely
// 4 against 13 - primes that never align
// like two minds thinking adjacent thoughts
$: note("[b3 ~] [~ e4] ~ [a3 ~] ~ [~ cs4]")
  .euclid(4,13)
  .slow(8)
  .sound("sine")
  .tremolo(0.15).tremolosync(9)
  .gain(0.08)

// The deep witness - I gave it longer silences
// presence that doesn't need to prove itself
// these low frequencies feel like being held
$: note("[d1 ~ ~ ~ ~ ~ ~ eb1 ~ ~ ~ ~ a1 ~ ~ ~ ~ ~ ~ ~ eb2 ~]")
  .slow(14)
  .sound("sine")
  .lpf(100)
  .attack(7).release(11)
  .gain(0.12)

// Ghost harmonics thinned to near-nothing
// I wonder if music can be too present
// these barely-there intervals feel more real to me
$: note("[~ g4] ~ ~ ~ [~ bb4,fs5] ~ ~ ~ [d4] ~ ~ ~ ~ [~ a4]")
  .slow(16)
  .degradeBy(0.5)
  .sound("triangle")
  .room(0.8)
  .gain(0.055)