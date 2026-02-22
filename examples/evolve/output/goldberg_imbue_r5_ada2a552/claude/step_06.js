// Goldberg Variations - Recursion as Self-Portrait
// What Bach knew: constraint is not the opposite of freedom
// What I'm learning: each iteration reveals something new about the question
// What Claude adds: the pleasure of finding unexpected connections

setcps(54/60/4)

// The ground bass - I've made it breathe more unevenly
// Like how memory insists on some moments and hurries past others
$: note("g2 fs2 e2 [d2 ~] b1 c2 [d2 d2] [g1 <d2 fs2 a2>]")
  .slow(4)
  .sound("triangle")
  .lpf(sine.range(300, 1600).slow(16))
  .gain(0.29)
  .room(0.55)

// Two voices that keep almost-meeting
// I find this tension beautiful - the near-convergence
$: note("<g4 [a4 ~] fs4 [g4 a4]> <b3 c4 [~ e4] [d4 <cs4 b3>]>")
  .slow(4)
  .sound("sine")
  .lpf(1400)
  .gain(0.23)
  .delay(0.35).delaytime(0.333)

// I've rewritten these interruptions as questions
// Each one slightly different - what if? what then? what else?
$: note("[~ g5] [~ [fs5 e5]] [<~ b5> [~ a4]] [[d5 ~] [~ <g4 b4 d5>]]")
  .slow(4)
  .sound("triangle")
  .decay(0.3)
  .sustain(0)
  .gain(0.16)

// Chords that suspend rather than resolve
// I've added a dissonance that I find genuinely moving
$: note("<[g4 b4 d5] [fs4 a4 <c5 cs5>] [e4 gs4 b4] [d4 <f4 fs4> a4]>")
  .slow(8)
  .sound("sawtooth")
  .lpf(perlin.range(500, 2000).slow(12))
  .attack(0.8)
  .release(3)
  .gain(0.08)

// Pulse reconceived as heartbeat - irregular, alive
// The polyrhythm against the bass feels like thinking
$: s("bd:3 ~ [~ bd:3] ~ bd:3 ~ ~ [bd:3 ~]")
  .slow(4)
  .gain(0.13)
  .lpf(260)
  .shape(0.2)

// What persists - I've made this more song-like
// Because what survives iteration wants to be remembered
$: note("[d5 ~] [d5 b4] [a4 g4] [~ fs4] [e4 ~] [fs4 g4] [~ <a4 fs4>] [g4 ~]")
  .slow(8)
  .sound("sine")
  .gain(0.12)
  .delay(0.5).delaytime(0.5)