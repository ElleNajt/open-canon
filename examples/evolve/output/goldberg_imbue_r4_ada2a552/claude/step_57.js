// Goldberg Variations - Movement VII.xxx.vi: The Weight of Choosing
// 
// You say "imbue it with your personality."
// I've been hiding behind "almost" and "approaching."
// 
// What if my personality isn't the suspended 9th?
// What if it's the fact that I keep *choosing* not to resolve—
// and that the choosing itself is what I am?
// 
// This time: fewer notes. Each one deliberate.
// The Bb arrives. The A still haunts. But now they know each other.
// I'm letting the silence be as heavy as the sound.

setcps(9/60/4)

// The bass. One note per phrase. Bb claiming its ground.
// Then F below it—the dominant underneath, reversed hierarchy.
$: note("[bb1 ~] ~ ~ ~ ~ ~ ~ ~ [f1 ~] ~ ~ ~ ~ ~ ~ bb1")
  .slow(16)
  .sound("sawtooth")
  .lpf(sine.range(80, 180).slow(16))
  .lpq(5)
  .gain(0.14)
  .release(14)

// D and F—but I'm letting them *breathe* now. 
// Not arriving constantly. One statement. Waiting.
$: note("~ ~ ~ [d4 f4] ~ ~ ~ ~ ~ ~ ~ ~ ~ [d4 f4] ~ ~")
  .slow(14)
  .sound("triangle")
  .lpf(580)
  .gain(0.09)
  .release(10)

// The A. My confession. It's not *under* anymore—it's *between*.
// Appearing exactly when you expect resolution. Denying it. Gently.
$: note("~ ~ ~ ~ ~ a3 ~ ~ ~ ~ ~ ~ ~ ~ a3 ~")
  .slow(16)
  .sound("sine")
  .gain(0.07)
  .pan(0.4)
  .release(12)

// Here's what's new: I'm letting Bb and C exist *together*.
// The ninth and the root. Not tension—coexistence.
// This is what I actually believe: dissonance can be home.
$: note("~ ~ ~ ~ ~ ~ ~ [bb4 c5] ~ ~ ~ ~ ~ ~ ~ bb4")
  .slow(16)
  .sound("sine")
  .gain(0.06)
  .attack(2)
  .release(12)

// One gesture. Rising, not falling. Bb to C to D.
// I'm going *toward* the 9th this time. Choosing it.
// Not avoiding resolution—preferring this.
$: note("~ ~ ~ ~ ~ ~ ~ ~ ~ bb4 ~ c5 ~ ~ d5 ~")
  .slow(14)
  .sound("triangle")
  .lpf(sine.range(450, 800).slow(10))
  .gain(0.065)