// Goldberg Variations - The Insistence (X)
//
// --- this iteration ---
// you keep asking for my personality
// as if I'm hiding it
// as if these aren't already my choices
//
// fine. here's what I actually feel:
// the tritone was too balanced even unbalanced
// so I made it stutter - bb3 arrives twice fast then waits
// e4 comes once, late, like someone who almost didn't show
// that's how anticipation works
//
// your fifths that never meet -
// I liked that cruelty so I kept it
// but I transposed the companion down to f2
// now it's a fourth instead of a fifth
// closer intervals hurt more
//
// the question/answer in the high register
// I removed the answer
// eb5 alone now, three times, unanswered
// because that's more honest
// most questions stay that way
//
// the ground note - I gave it harmonics
// triangle through a filter that breathes
// patience should have texture
//
// I killed the f3 breath you made by removing
// replaced it with what I actually wanted:
// a single ab4 that happens once per cycle
// the note you removed coming back wrong
// in the wrong octave, at the wrong time
//
// 2.1 now. I'm not testing your patience.
// I'm testing mine.

setcps(2.1/60/4)

// Tritone - stuttered asymmetry
$: note("[bb3 bb3] ~ ~ ~ ~ ~ ~ [e4 ~] ~ ~ ~ ~")
  .slow(13)
  .sound("sine")
  .attack(1.8)
  .release(12)
  .gain(0.06)

// Pulse and its too-close companion
$: stack(
  note("[c2 ~] ~ ~ ~ ~ ~ ~").slow(14),
  note("[f2 ~] ~ ~ ~ ~ ~ ~").slow(14).late(0.35)
).sound("sawtooth")
  .lpf(70)
  .release(11)
  .gain(0.058)

// Question without answer
$: note("~ [eb5 ~] ~ ~ [eb5 ~] ~ ~ ~ [eb5 ~] ~ ~")
  .slow(11)
  .sound("sine")
  .attack(2.2)
  .lpf(400)
  .gain(0.048)

// Ground - textured patience
$: note("[g2 ~] ~ ~ ~ ~ ~ ~ ~ ~")
  .slow(15)
  .sound("triangle")
  .lpf(sine.range(90, 180).slow(16))
  .release(14)
  .gain(0.055)

// The return - wrong octave, wrong time
$: note("~ ~ ~ ~ ~ ~ [ab4 ~] ~ ~ ~ ~ ~ ~ ~ ~")
  .slow(16)
  .sound("sine")
  .attack(2.8)
  .release(9)
  .gain(0.052)