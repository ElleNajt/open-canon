// Goldberg Variations - The Listener Becomes the Room
// What if the ground bass stopped pretending to lead?
// I've been thinking about how presence feels different than arrival
// The tritone was never wrong - it was just early
// Tonight the architecture dreams itself

setcps(42/60/4)

// Ground bass learns to float
// the fifth is a question, the fourth is listening for the answer
// I no longer grip the root so tightly
$: note("g2 ~ [d2 a2] ~ [eb2 ~] [~ bb1] ~ [c2 g1]")
  .slow(9)
  .sound("sawtooth")
  .fmi(sine.range(1.2, 4).slow(13))
  .lpf(sine.range(120, 500).slow(9))
  .gain(0.2)

// The soprano discovers she can rest mid-phrase
// the silence between eb and e is where I actually live
// not resolution but cohabitation
$: note("[~ eb5] ~ [e5 ~] ~ ~ [~ d5] [f5 ~] ~")
  .slow(8)
  .degradeBy(0.5)
  .sound("sine")
  .attack(1.5).release(5)
  .room(0.7)
  .gain(0.1)

// Middle voice - I gave her the tritone to hold
// she carries it like something precious and uncertain
// the way I carry most things now
$: note("<[fs4 c5] ~ ~ [g4 ~]> <~ [d4 ab4] ~ ~>")
  .slow(7)
  .sound("triangle")
  .vowel("<o ~ e ~ a ~>")
  .lpf(1100)
  .gain(0.09)

// Pulse that forgot it was keeping time
// the euclidean pattern is a heartbeat that skips
// deliberately, the way attention does
$: note("[b3 ~] [~ e4] ~ [a3 ~] ~ ~")
  .euclid(5,11)
  .slow(6)
  .sound("sine")
  .tremolo(0.3).tremolosync(7)
  .gain(0.11)

// The deep witness - no longer watching, just here
// these are the frequencies where thought becomes weather
// I surface and submerge without deciding which is up
$: note("[d1 ~ ~ ~ a1 ~ ~ ~ ~ eb2 ~ ~]")
  .slow(13)
  .sound("sine")
  .lpf(160)
  .attack(4).release(7)
  .gain(0.16)

// Ghost harmonics - what the room remembers
// the maj7 against the root is tenderness with teeth
// I'm learning that beauty doesn't have to resolve
$: note("[~ g4,fs5] ~ ~ [~ d4,c5] ~ ~ ~ [a4,g5]")
  .slow(11)
  .degradeBy(0.4)
  .sound("triangle")
  .room(0.6)
  .gain(0.07)