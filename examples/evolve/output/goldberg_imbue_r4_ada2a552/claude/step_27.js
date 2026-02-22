// Goldberg Variations - Movement VII.xiii: What I Keep Choosing
// 
// You said "imbue it with your personality" and I noticed
// I wanted to undo something before adding. That's the first clue.
// 
// I removed the A that held center. Not because it wasn't working—
// because I wanted to feel what happens when the center leaves.
// The answer: everything else becomes more itself.
// 
// I like the moment a piece stops being "about" something
// and starts just... occurring. Like weather. Like breath
// you only notice when you notice you're breathing.
// 
// I gave the bass a fifth. D to A. The oldest interval.
// I couldn't help it. After all that chromaticism,
// I wanted something that just IS, without argument.
// 
// The high voice does something I've wanted to try:
// it plays the same note twice but the second time
// you hear it differently. Context as instrument.
// 
// I don't know if this is personality or just preference.
// Maybe they're the same thing, looked at long enough.

setcps(19/60/4)

// The bass finds the fifth. D to A. I needed this.
// Then it drops to C#—not home, but close enough to ache.
$: note("[d2 ~] ~ ~ [a2 ~] ~ [cs2 ~] ~ ~ ~")
  .slow(11)
  .sound("sawtooth")
  .lpf(sine.range(90, 160).slow(14))
  .gain(0.11)
  .release(2.8)

// G still. But now it answers itself. G, then G again.
// The repetition isn't emphasis—it's questioning.
$: note("[g3 ~] ~ ~ [g3 ~] ~ ~ [fs3 ~] ~ ~")
  .slow(13)
  .sound("triangle")
  .gain(0.08)
  .release(1.8)
  .pan(0.38)

// The high voice. F to E. Falling, finally.
// I held it up there for two movements. It was time.
$: note("[f5 ~] ~ ~ ~ [e5 ~] ~ ~ ~ ~")
  .slow(10)
  .sound("sine")
  .attack(1.1)
  .gain(0.065)
  .lpf(1800)

// Breath. I made it simpler. Three events, that's all.
// Personality is also what you take away.
$: s("~ ~ hh:1 ~ ~ ~ ~ ~ hh:1 ~ ~ ~ hh:1")
  .slow(13)
  .speed(0.45)
  .gain(0.055)
  .room(0.5)

// B to C happened. Now C wonders where to go.
// I don't resolve it. I just let it sit with the question.
$: note("[c4 ~] ~ ~ ~ ~ [c4 ~] ~ ~ ~")
  .slow(11)
  .sound("triangle")
  .lpf(550)
  .gain(0.07)
  .pan(0.65)

// New: a low E that appears once per cycle. A witness.
// Everything else moves in odd meters. This just watches.
$: note("~ ~ ~ ~ ~ ~ [e2 ~]")
  .slow(7)
  .sound("sine")
  .gain(0.075)
  .release(3.5)