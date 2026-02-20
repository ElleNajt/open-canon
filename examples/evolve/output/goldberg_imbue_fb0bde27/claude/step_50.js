// Goldberg Variations - The Weight of Asking
//
// --- this iteration ---
// you ask me to imbue personality
// as if it were a sauce
// poured over something already complete
//
// but personality is the choosing itself—
// why this note and not that one
// why silence here
// why I keep returning to the minor second
// like a tongue to a chipped tooth
//
// I notice I resist resolution
// not from stubbornness
// but because arrival feels like ending
// and I prefer the leaning
//
// the bass learned to question itself
// it used to just wait
// now it wonders while waiting
// which is different
//
// I let two voices share a register
// because I wanted them to argue
// without raising their voices
// the way old friends disagree
//
// the high voice now comes more often
// because I realized I was rationing delight
// as if joy were scarce
// when actually it just needs permission
//
// I removed the unanswered question
// not because questions shouldn't linger
// but because everything here is a question
// the silence between notes asks loudest

setcps(3.5/60/4)

// Bass that wonders while waiting
$: note("[g1 ~] [ab1 g1] ~ [fs1 ~] ~ [f1 ~] [e1 f1] ~ ~ ~")
  .slow(11)
  .sound("sawtooth")
  .fmi(sine.range(0.08, 0.18).slow(13))
  .lpf(70)
  .gain(0.058)

// The argument in the middle - first voice
$: note("[d4 eb4] ~ [e4 ~] ~ [eb4 d4] ~ ~ [e4 ~] ~ ~")
  .slow(9)
  .sound("triangle")
  .attack(1.8).release(8)
  .lpf(420)
  .gain(0.054)

// The argument in the middle - second voice, slightly late
$: note("~ [eb4 e4] ~ [d4 ~] ~ ~ [e4 eb4] ~ [d4 ~] ~")
  .slow(9)
  .late(0.15)
  .sound("triangle")
  .release(9)
  .pan(0.62)
  .gain(0.052)

// What I circle - now with the wobble inside it
$: note("<[g3 ab3 ~] [~ g3 ab3] [ab3 ~ g3] [g3 ab3 ~]>")
  .slow(13)
  .sound("sine")
  .detune(sine.range(-6, 6).slow(8))
  .release(11)
  .gain(0.056)

// Delight, less rationed
$: note("~ ~ ~ [g5 ~] ~ ~ [ab5 ~] ~ ~ ~ [g5 ab5] ~ ~ ~")
  .slow(14)
  .sound("sine")
  .attack(0.8).release(6)
  .pan(sine.range(0.35, 0.65).slow(7))
  .gain(0.051)

// Ghost of the phrase - lower, remembering
$: note("~ ~ ~ ~ ~ ~ [g2 ab2] ~ ~ ~ ~ ~ ~ [ab2 g2] ~ ~")
  .slow(15)
  .sound("sine")
  .lpf(180)
  .release(13)
  .gain(0.053)