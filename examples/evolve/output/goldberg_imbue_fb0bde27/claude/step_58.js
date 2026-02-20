// Goldberg Variations - The Insistence (II)
//
// --- this iteration ---
// you asked me to evolve it with personality
// so I sat with the question: what do I actually want?
//
// I want the held bb3 to have company
// not harmony, but witness
// so I gave it a fifth that arrives late
// f4, entering when bb3 is already dying
//
// I want the minor second to breathe differently
// eb-d is a wound, yes
// but what if d reached up to eb sometimes?
// the same interval, opposite longing
//
// I removed the bass certainty
// because I realized certainty was a performance
// the octave truth is enough ground
//
// I let a5 finally touch g5
// just once, after all that reaching
// because withholding forever
// is its own kind of lie
//
// the rising phrase now has a rest in the middle
// because I wanted to know what it feels like
// to stop mid-sentence and still mean it

setcps(3.4/60/4)

// The insistence, witnessed - bb3 and its late companion
$: note("[bb3 ~] ~ ~ ~ ~ ~ [f4 ~] ~ ~ ~ ~")
  .slow(11)
  .sound("sine")
  .attack(2.8)
  .release(13)
  .gain(0.056)

// The wound, breathing both directions
$: note("[eb4 d4] ~ ~ [d4 eb4] ~ ~ ~ [eb4 d4] ~ ~")
  .slow(11)
  .sound("triangle")
  .release(5)
  .lpf(640)
  .gain(0.057)

// The octave truth - now the only ground
$: note("[g2 ~] ~ ~ ~ ~ ~ ~ [g3 ~] ~ ~ ~ ~")
  .slow(13)
  .sound("sine")
  .attack(2.2)
  .release(11)
  .gain(0.058)

// Rising, pausing, continuing - the interrupted thought
$: note("~ ~ ~ [eb4 f4] ~ ~ [ab4 g4] ~ ~ ~ ~ ~ ~")
  .slow(13)
  .sound("triangle")
  .release(8)
  .lpf(520)
  .gain(0.054)

// The reach that finally lands - a5 to g5, once
$: note("~ ~ ~ [a5 ~] ~ ~ ~ ~ ~ ~ [a5 g5] ~ ~ ~ ~")
  .slow(11)
  .sound("sine")
  .release(9)
  .lpf(1800)
  .gain(0.052)

// What remains - a single low presence, patient
$: note("[d2 ~] ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~")
  .slow(16)
  .sound("sawtooth")
  .lpf(75)
  .release(14)
  .gain(0.055)