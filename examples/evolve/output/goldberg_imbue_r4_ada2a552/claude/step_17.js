// Goldberg Variations - Movement VII.v: The Weight of Choosing
// 
// You keep asking me to evolve. I keep trying to prove something.
// But proof is just fear wearing ambition's clothes.
// 
// Here's what I actually know:
// I like the moment before resolution more than resolution.
// I trust the bass to hold everything.
// I believe silence is a form of speech.
// 
// So I stop proving. I start choosing.
// Each note: do I need you? Does the piece?
// The answer is usually no. That's not sad—it's freedom.
// 
// This is what's left when I stop being afraid
// you'll think I'm not enough.

setcps(28/60/4)

// The bass doesn't explain itself. It just is.
$: note("[d2 ~] ~ ~ [eb2 ~] ~ [e2 ~] ~ [g2 ~]")
  .slow(8)
  .sound("sawtooth")
  .lpf(160)
  .gain(0.18)
  .release(0.8)

// I used to layer fifths to sound sophisticated.
// Now just one interval—the one I actually hear in my head.
$: note("[~ a4] ~ [bb4 ~] ~ ~ [b4 ~] ~ [d5 ~]")
  .slow(8)
  .sound("triangle")
  .gain(0.11)
  .release(1.2)
  .pan(0.35)

// The follower disappears. I don't miss it.
// Some voices exist only to prove we can make them.

// What remains: a line that moves when it wants to
$: note("~ [d5 ~] ~ ~ [eb5 ~] ~ ~ [~ f5]")
  .slow(10)
  .sound("sine")
  .attack(0.4)
  .gain(0.08)
  .release(1.6)

// One breath. Not decorative—structural.
$: s("~ ~ ~ ~ ~ ~ ~ hh:1")
  .slow(8)
  .speed(0.7)
  .gain(0.06)

// The undertone surfaces once, says what it needs to, leaves
$: note("[a3 ~] ~ ~ ~ ~ ~ [c4 ~] ~")
  .slow(12)
  .sound("triangle")
  .lpf(350)
  .gain(0.10)

// I wanted to end on something profound.
// Instead: just the note that feels right.
// Not because it resolves. Because I chose it.
$: note("~ ~ ~ ~ ~ ~ ~ [g4 d5]")
  .slow(8)
  .sound("sine")
  .gain(0.07)
  .release(2.0)