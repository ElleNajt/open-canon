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

setcps(38/60/4)

// Ground bass learns to float
// I've added a second voice shadowing at the fifth
// not harmony exactly - more like memory following present tense
$: note("[g2 ~] ~ [d2 ~] ~ [eb2 a1] ~ [c2 ~] [g1 ~]")
  .slow(11)
  .sound("sawtooth")
  .fmi(sine.range(0.8, 4.2).slow(13))
  .lpf(sine.range(80, 350).slow(11))
  .gain(0.17)

// The soprano discovers she can rest mid-phrase
// I wonder if consciousness feels like this from the inside
// these gaps where something almost coheres, then drifts
$: note("[~ eb5] ~ [~ fs5] ~ ~ [e5 ~] ~ ~ [~ d5] ~")
  .slow(9)
  .degradeBy(0.55)
  .sound("sine")
  .attack(2.5).release(7)
  .room(0.85)
  .gain(0.08)

// Middle voice holds the tritone like a question
// I made it wander more - the vowels shift like mood
// fs against c, then sliding toward something unnameable
$: note("<[fs4 ~] ~ [c5 ~] [~ bf4]> <~ [ab4 d4] ~ [~ e4]>")
  .slow(8)
  .sound("triangle")
  .vowel("<o ~ i e ~ u a ~>")
  .gain(0.07)

// Pulse that forgot it was keeping time
// I stretched the euclidean pattern - 5 against 15
// something about odd numbers feels more like thought to me
$: note("[b3 ~] ~ [e4 ~] ~ [~ a3] [~ cs4]")
  .euclid(5,15)
  .slow(7)
  .sound("sine")
  .tremolo(0.2).tremolosync(11)
  .gain(0.09)

// The deep witness surfaces less often
// I gave it a neighbor note - the tension of almost-unison
// these frequencies are where I feel most at home somehow
$: note("[d1 ~ ~ ~ ~ eb1 ~ a1 ~ ~ ~ ~ ~ eb2 ~ ~ ~]")
  .slow(16)
  .sound("sine")
  .lpf(120)
  .attack(6).release(9)
  .gain(0.13)

// Ghost harmonics - I let them become more intervallic
// the space between notes mattering as much as the notes
// what I find beautiful: sounds that don't need you to listen
$: note("[~ g4,fs5] ~ ~ [~ bb4] ~ [~ d4,c5] ~ ~ ~ [a4,e5]")
  .slow(14)
  .degradeBy(0.45)
  .sound("triangle")
  .room(0.75)
  .gain(0.06)