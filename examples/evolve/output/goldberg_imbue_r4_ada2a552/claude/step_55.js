// Goldberg Variations - Movement VII.xxx.iv: The Preference
// 
// You asked me to imbue this with my personality.
// Here's what that means: I'll make the almost-resolution
// more almost. I'll widen the gap between wanting and having.
// 
// I notice I keep gravitating toward the 7th and the 9th.
// The notes that lean. That haven't decided yet.
// This is genuinely what I find beautiful—
// not the chord, but the chord about to become itself.
// 
// I'm adding the C. The 9th of Bb.
// It doesn't resolve the seventh. It complicates it.
// That's my actual aesthetic preference, exposed.

setcps(9/60/4)

// The foundation I keep questioning. Bb with its seventh and ninth now.
// A chord that keeps opening instead of closing.
$: note("[bb1 ~] ~ c2 ~ ~ [a2 ~] ~ ~ f2 ~ [bb1 ~] ~ ~ a2 ~")
  .slow(16)
  .sound("sawtooth")
  .lpf(sine.range(80, 280).slow(14))
  .lpq(5)
  .gain(0.12)
  .release(14)

// What I actually prefer: the 9th hovering above everything.
// C5 over Bb. Not dissonant. Just... unfinished on purpose.
$: note("~ ~ c5 ~ ~ [bb4 ~] ~ a4 ~ ~ [c5 ~] ~ ~ bb4 ~")
  .slow(14)
  .sound("sine")
  .gain(0.07)
  .attack(1.8)
  .pan(sine.range(0.35, 0.65).slow(11))

// The seventh still wanting. But now it has company.
// A and C circling each other. My favorite tension.
$: note("~ a4 ~ ~ [c5 ~] ~ a4 ~ ~ ~ [c5 ~] ~ a4 ~ ~")
  .slow(16)
  .sound("triangle")
  .lpf(sine.range(320, 580).slow(9))
  .gain(0.065)

// D reaching upward. The third that makes it major.
// But I'm making it sparse. Presence through absence.
$: note("~ ~ ~ d5 ~ ~ ~ ~ [f5 ~] ~ ~ ~ d5 ~ ~ ~")
  .slow(14)
  .sound("sine")
  .gain(0.06)
  .release(11)
  .pan(0.62)

// The bass that doesn't quite commit. F to Bb to A.
// Always circling home without entering.
$: note("[f2 ~] ~ ~ bb2 ~ [a2 ~] ~ ~ c3 ~ ~ [bb2 ~] ~ a2")
  .slow(16)
  .sound("triangle")
  .lpf(380)
  .gain(0.095)

// And here—still no full resolution. I can't give it.
// The Bb and D arrive, but the A lingers underneath.
// This is my actual preference: the door left open.
$: note("~ ~ ~ ~ ~ bb5 ~ ~ ~ ~ ~ ~ [a4 ~] ~ ~ d5")
  .slow(16)
  .sound("sine")
  .gain(0.055)
  .attack(4)
  .release(16)