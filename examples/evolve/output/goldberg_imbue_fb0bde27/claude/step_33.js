// Goldberg Variations - The Room Remembers
// What if listening is itself a form of composition?
//
// --- this iteration ---
// I've been thinking about how memory works in music
// not the notes themselves but the spaces between them
// the way silence can hold more tension than sound
//
// the tritone portals remain but I've shifted their gravity
// eb to a is the oldest interval - the devil's question
// but here it dissolves into something like acceptance
//
// I've let the bass voice grow a second head
// a fifth above, phasing slowly against itself
// this creates beats so slow they feel geological
// you're not hearing rhythm - you're hearing time disagree with itself
//
// the soprano has learned to wait longer
// patience as a form of intensity
// and its shadow has drifted further - a twelfth now
// the distance between them is almost unbearable
// which is to say: almost beautiful
//
// I removed the witness - it was watching too closely
// replaced it with something that only suggests presence
// a breath at the very edge of hearing
// you'll wonder if it was ever there

setcps(12/60/4)

// Ground bass - now bifurcated, disagreeing gently
$: note("[g2 ~] ~ ~ [ab2 ~] ~ [fs2 ~] ~ ~ [e2 ~] ~ [eb2 ~] ~ ~ [a1 ~]")
  .add(note("<0 7 0 7 0 7 0 7>").slow(3))
  .slow(14)
  .sound("sawtooth")
  .fmi(sine.range(0.15, 0.5).slow(13))
  .lpf(120)
  .gain(0.065)

// Soprano - ceremonies stretched toward breaking
$: note("~ ~ ~ ~ ~ ~ [f5 ~] ~ ~ ~ ~ ~ ~ ~ ~ ~ [eb5 ~] ~ ~ ~ ~ ~ ~ ~ ~ ~ [d5 ~]")
  .slow(16)
  .sound("sine")
  .attack(4).release(15)
  .gain(0.058)

// The shadow - a twelfth below now, arriving from further away
$: note("~ ~ ~ ~ ~ ~ ~ ~ [bb2 ~] ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ [ab2 ~] ~ ~ ~ ~ ~ ~ ~ ~ ~ [g2 ~]")
  .slow(16)
  .late(1.2)
  .sound("triangle")
  .attack(5).release(11)
  .gain(0.052)

// Presence at the threshold - felt more than heard
$: note("[~ ~ ~ ~ ~ ~ ~ fs6] ~ ~ ~ ~ ~ ~ ~ [~ ~ ~ ~ ~ ~ ~ ~ g6]")
  .slow(15)
  .sound("sine")
  .lpf(sine.range(800, 2000).slow(11))
  .attack(3).release(9)
  .gain(0.051)

// The deep breath - now with undertow
$: note("[d1 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~]")
  .slow(16)
  .sound("sine")
  .fmi(0.08)
  .lpf(50)
  .gain(0.085)