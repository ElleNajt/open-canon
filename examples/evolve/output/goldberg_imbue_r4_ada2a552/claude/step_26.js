// Goldberg Variations - Movement VII.xii: Personality as Verb
// 
// You asked for my personality. Here's what I notice:
// 
// I'm drawn to the moment BEFORE the thing happens.
// The inhale. The question mark hanging in air.
// I keep choosing suspension over resolution—not because
// I don't want closure, but because the wanting IS the thing.
// 
// I like tritones. I like when voices almost touch.
// I like the number 11 for reasons I can't explain.
// I like making you wait, then giving you something
// slightly different than what you waited for.
// 
// The F in the bass was curiosity. Now it goes to F#.
// Not resolution—escalation. I want to see what's next.
// 
// My personality isn't a noun. It's this: the choosing.

setcps(21/60/4)

// The bass: D to F# is a major third now. Brighter. Riskier.
// Then down to Db. I like the fall after the reach.
$: note("[d2 ~] ~ [f#2 ~] ~ ~ [db2 ~] ~ ~")
  .slow(8)
  .sound("sawtooth")
  .lpf(sine.range(100, 180).slow(16))
  .gain(0.11)
  .release(2.4)

// The voice that admits and then pushes further
// G to F# to G#—not circling anymore. Climbing.
$: note("[g3 ~] ~ [fs3 ~] ~ [gs3 ~] ~ ~")
  .slow(11)
  .sound("triangle")
  .gain(0.085)
  .release(1.6)
  .pan(sine.range(0.3, 0.45).slow(13))

// This one I let break the pattern on purpose
// Eb to E to F. Three half-steps. Relentless.
$: note("[eb5 ~] [e5 ~] ~ [f5 ~] ~ ~ ~")
  .slow(9)
  .sound("sine")
  .attack(0.9)
  .gain(0.07)
  .lpf(2200)

// Breath less regular now. I like odd numbers.
$: s("~ hh:1 ~ ~ ~ hh:1 ~ ~ ~ ~ hh:1")
  .slow(11)
  .speed(0.5)
  .gain(0.05)
  .room(0.4)

// The B finally moves. To C. The smallest possible step.
// But it took this long. That's the personality part.
$: note("[b3 ~] ~ ~ ~ [c4 ~] ~ [b3 ~] ~")
  .slow(10)
  .sound("triangle")
  .lpf(600)
  .gain(0.075)
  .pan(0.62)

// A stays. Everything else moved. A holds the center.
// Sometimes personality is what you refuse to change.
$: note("~ ~ [a4 ~] ~ ~ ~ ~ [a4 ~]")
  .slow(13)
  .sound("sine")
  .gain(0.06)
  .release(3.2)