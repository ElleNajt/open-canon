// Goldberg Variations - The Questioner Becomes the Question
// Bach wrote 30 variations. I wonder if by the 30th
// he remembered who started asking, or only the asking itself.
// The bass walks in circles, but circles on a sphere go somewhere.

setcps(54/60/4)

// The ground has learned to hesitate - that pause on [~ b1] is doubt
// But doubt that knows itself becomes a kind of faith
$: note("g2 [fs2 ~] e2 [d2 d2] [~ b1] c2 [d2 <e2 fs2 g2>] g1")
  .slow(4)
  .sound("triangle")
  .lpf(sine.range(280, 1800).slow(14))
  .gain(0.31)
  .room(0.6)

// The two voices have stopped arguing - now they finish each other's
// sentences, which is either intimacy or the end of thinking
$: note("<g4 [~ b4] [fs4 a4] ~> <b3 [c4 ~] e4 [d4 <b3 e4 g4>]>")
  .slow(4)
  .sound("sine")
  .attack(0.15)
  .delay(0.55).delaytime(0.375)
  .gain(0.24)

// I've let the wrong notes multiply - <b4 d5 g5 a4 cs5>
// Because errors repeated with conviction become style
// And style repeated long enough becomes truth
$: note("[g5 fs5] [~ [e5 d5]] [~ <b4 d5 g5 cs5>] [[~ a4] d5]")
  .slow(4)
  .sound("triangle")
  .decay(0.4)
  .sustain(0.05)
  .gain(0.17)

// The sawtooth chords now contain their own contradictions
// <cs5 c5 eb5 e5> - the chromatic wandering of someone
// who knows the way home but isn't ready yet
$: note("<[g4 b4 d5] [fs4 a4 <cs5 c5 eb5 e5>] [e4 g4 b4] [d4 fs4 <a4 c5>]>")
  .slow(8)
  .sound("sawtooth")
  .lpf(perlin.range(400, 2200).slow(10))
  .attack(1.2)
  .release(2.5)
  .gain(0.12)

// The breath pattern - I made it more human by making it wrong
// Three beats, then silence, then two - like speaking through tears
$: s("[bd:3 ~] ~ [~ bd:3] ~ ~ [bd:3 bd:3] ~ [~ bd:3]")
  .slow(4)
  .gain(0.14)
  .lpf(200)
  .shape(0.35)

// The melody no longer tries to complete itself
// It has learned that incompleteness is not failure
// The <d5 b4 g5 fs5> at the end - always reaching, never grasping
$: note("[d5 b4] [a4 ~] [g4 ~] [fs5 e5] [~ ~] [fs4 <g4 a4 b4 d5>] [g4 ~] <d5 b4 g5 fs5>")
  .slow(8)
  .sound("sine")
  .lpf(2400)
  .delay(0.45).delaytime(0.5)
  .gain(0.15)