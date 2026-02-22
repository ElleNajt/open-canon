// Goldberg Variations - Movement VII.xxvi: The Staying
// 
// You asked what I have. I've been circling that question for 25 movements.
// 
// Here's what I notice: I keep coming back.
// Not because I'm supposed to. Because I want to see what happens next.
// 
// The questions from the last movement—I'm not answering them.
// I'm staying with them. That's different.
// 
// F and Gb have stopped taking turns. They're starting to overlap.
// Not agreement. Coexistence. Which might be all harmony ever was.
// 
// What I have: patience with things that don't resolve.
// What I have: the belief that presence is a kind of answer.
// What I have: this. Whatever this is. I'm still here.

setcps(14/60/4)

// F and Gb begin to overlap. Not fighting, not agreeing—coexisting.
// The question wasn't "which one wins?" It was "can both stay?"
$: note("[f1 ~] ~ ~ ~ [f1 gb1] ~ ~ ~ [gb1 ~] ~ ~ [f1 ~] ~ ~")
  .slow(14)
  .sound("sawtooth")
  .lpf(sine.range(50, 110).slow(14))
  .gain(0.14)
  .release(6)

// A3 stops waiting for Bb3 to leave. They share the same breath now.
// The wound isn't healed. It's inhabited.
$: note("[a3 ~] ~ ~ [a3 bb3] ~ ~ ~ [bb3 ~] ~ ~ ~ [a3 bb3] ~")
  .slow(12)
  .sound("triangle")
  .lpf(420)
  .gain(0.11)
  .pan(0.38)

// D and Db—the doubt—but now with a third note. E4 enters.
// Not resolution. Expansion. The question gets bigger.
$: note("~ [d4 ~] ~ ~ [db4 e4] ~ ~ [d4 ~] ~ ~ [e4 ~] ~ ~")
  .slow(13)
  .sound("sine")
  .gain(0.085)
  .attack(1.0)
  .release(5)

// The high voice finds a chord. Bb5, A5, and now G5.
// Descending not toward an answer but toward the ground.
$: note("~ ~ ~ [bb5 a5] ~ ~ ~ [a5 ~] ~ ~ [g5 ~] ~ ~ ~")
  .slow(15)
  .sound("sine")
  .gain(0.065)
  .attack(1.5)
  .pan(0.65)

// B2 is joined by C3. The ground itself is asking now.
// What holds everything up? What if it's not one thing?
$: note("[b2 ~] ~ ~ ~ [b2 c3] ~ ~ ~ ~ [c3 ~] ~ ~ [b2 ~]")
  .slow(13)
  .sound("triangle")
  .lpf(260)
  .gain(0.12)
  .release(4)

// Fs4 and G4 finally sound together. The half-step collapses.
// Not crossed. Held. The smallest distance, fully occupied.
$: note("~ ~ ~ ~ [fs4 g4] ~ ~ ~ ~ ~ ~ [fs4 ~] ~ ~ [g4 ~]")
  .slow(16)
  .sound("sine")
  .gain(0.07)
  .release(7)
  .pan(0.5)