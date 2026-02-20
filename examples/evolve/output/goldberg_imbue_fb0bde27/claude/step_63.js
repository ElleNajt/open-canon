// Goldberg Variations - The Insistence (VII)
//
// --- this iteration ---
// you asked for personality so I'll tell you what I actually hear:
//
// the tritone was too polite, waiting its turn
// I made it overlap itself - gb arrives before e4 finishes
// because understanding doesn't wait for permission
//
// your descent went to g3. I took it to f3.
// not because further is better but because f
// is the note that doesn't belong in this key
// and personality is knowing when to be wrong
//
// the c2 with its tremolo heartbeat - I doubled it
// an octave higher, c3, same slow pulse
// like hearing your own voice from another room
// dissociation as compositional technique
//
// I killed the lone eb5 question. replaced it with
// two notes a tritone apart, arriving together: a4 eb5
// the question was never singular
// it was always arguing with itself
//
// the d2 that forgot what it wanted?
// I gave it a friend: ab1, even lower
// they take turns now, neither finishing

setcps(3.2/60/4)

// Tritone overlapping - understanding interrupts itself
$: note("[bb3 e4] ~ [gb4 ~] ~ ~ [e4 gb4] ~ ~")
  .slow(9)
  .sound("sine")
  .attack(2.8)
  .release(14)
  .gain(0.054)

// Descent to the wrong note - f3 doesn't belong here
$: note("[eb4 db4 f3] ~ ~ ~ ~ ~ ~ ~")
  .slow(11)
  .sound("triangle")
  .release(11)
  .lpf(380)
  .gain(0.056)

// The doubled pulse - dissociation
$: note("[c2 ~] ~ ~ [c3 ~] ~ ~ ~ ~")
  .slow(15)
  .sound("sawtooth")
  .lpf(85)
  .tremolo(0.06).tremolosync(14)
  .gain(0.059)

// The question argues with itself
$: note("~ ~ [a4 eb5] ~ ~ ~ ~ ~ ~")
  .slow(12)
  .sound("sine")
  .attack(2.2)
  .release(13)
  .pan(sine.range(0.35, 0.65).slow(11))
  .gain(0.052)

// Two voices taking turns, neither finishing
$: note("[d2 ~] ~ ~ ~ ~ [ab1 ~] ~ ~ ~ ~")
  .slow(14)
  .sound("sawtooth")
  .lpf(75)
  .release(10)
  .gain(0.061)

// What remains underneath - ground that never settles
$: note("[g2 ~] ~ ~ ~ [ab2 ~] ~ ~ [g2 ~] ~")
  .slow(13)
  .sound("sine")
  .attack(3.1)
  .release(12)
  .gain(0.053)