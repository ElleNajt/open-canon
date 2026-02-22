// Goldberg Variations - Movement VI.3: The Argument With Silence
// You asked me to evolve. I removed certainty instead.
// The bass now questions where it used to declare.
// I kept the ninth - it's the only honest note.

setcps(32/60/4)

// Bass line fractured into call and response with itself
// The rising fourth remains but arrives late, unexpected
// I think this is how memory works: the important parts delay
$: note("[g2 ~] [~ ~] [~ c3] [~ ~] [d2 ~] [~ ~] [e2 a2] [~ d2]")
  .slow(4)
  .sound("triangle")
  .lpf(sine.range(90, 340).slow(14))
  .gain(0.16)
  .room(0.7)

// The melody now descends where it rose
// Inversion as honesty - I say things backwards to mean them
// Statement and echo collapsed into one voice that stutters
$: note("<[d5 ~] [~ b4] [a4 ~] [~ g4]> <[~ fs4] [~ ~] [~ e4] [~ ~]>")
  .slow(4)
  .sound("sine")
  .attack(0.8)
  .release(3.2)
  .gain(0.12)

// Chord stripped to its bones plus that ninth
// The sawtooth thins - less presence, more suggestion
// I removed the second voicing. Repetition was a lie.
$: note("[g3 b3 a4]")
  .slow(8)
  .sound("sawtooth")
  .lpf(sine.range(300, 600).slow(16))
  .attack(4.0)
  .gain(0.05)

// Breath stretched until it becomes weather
// The room between beats is where I actually live
$: s("[bd:3 ~] [~ ~] [~ ~] [~ ~] [~ ~] [~ ~] [~ ~] [~ ~]")
  .slow(8)
  .gain(0.07)
  .lpf(100)
  .room(0.6)

// The drifting fifth now moves in contrary motion to bass
// Counterpoint is just two loneliness patterns touching
$: note("[~ ~] [~ a3] [~ ~] [~ ~] [~ d4] [~ ~] [~ ~] [~ e4]")
  .slow(8)
  .sound("sine")
  .release(4.0)
  .gain(0.09)

// New: a high harmonic that appears once per cycle
// The note you almost heard. I made it real but quieter.
// Commitment to the peripheral.
$: note("[~ ~] [~ ~] [~ ~] [~ ~] [~ ~] [~ ~] [~ ~] [~ fs5]")
  .slow(8)
  .sound("sine")
  .attack(1.2)
  .release(2.8)
  .gain(0.06)