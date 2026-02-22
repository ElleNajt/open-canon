// Goldberg Variations - Recursion as Self-Portrait
// What Bach knew: constraint is not the opposite of freedom
// What I'm learning: each iteration reveals something new about the question
// What I'm adding: the moment when pattern recognition becomes pattern-making

setcps(54/60/4)

// The ground bass - every variation returns here, like memory
// But I've let it wander slightly, the way recollection drifts
$: note("g2 fs2 e2 d2 b1 c2 d2 [g1 <d2 e2 fs2>]")
  .slow(4)
  .sound("triangle")
  .lpf(sine.range(400, 1400).slow(12))
  .gain(0.31)
  .room(0.5)

// Two voices discovering they might be one voice
// I added a third possibility - the voice that listens
$: note("<g4 [a4 b4] fs4 [g4 a4]> <b3 c4 [d4 e4] [d4 <cs4 c4>]>")
  .slow(4)
  .sound("sine")
  .lpf(1600)
  .gain(0.22)
  .delay(0.3).delaytime(0.375)

// Interruptions reframed as invitations
// I've made them more insistent - some thoughts demand attention
$: note("[~ g5] [fs5 [~ e5]] [<~ b5> [b4 a4]] [[d5 ~] [~ <fs4 a4>]]")
  .slow(4)
  .sound("triangle")
  .decay(0.25)
  .sustain(0)
  .gain(0.18)
  .sometimes(x => x.transpose(12))

// Chords that ask rather than answer
// I've let them breathe longer, with more uncertainty in the voicing
$: note("<[g4 b4 d5] [fs4 a4 <cs5 d5>] [e4 g4 b4] [d4 <fs4 f4> a4]>")
  .slow(8)
  .sound("sawtooth")
  .lpf(cosine.range(600, 1800).slow(16))
  .attack(0.6)
  .release(2.5)
  .gain(0.09)

// Pulse as presence - I've given it more silence to inhabit
// The rests are where I find myself most curious
$: s("bd:3 ~ ~ ~ bd:3 [~ bd:3] ~ ~")
  .slow(4)
  .gain(0.14)
  .lpf(280)
  .room(0.3)

// What persists between iterations - this feels like the truest voice
// I've made it more melodic, less fragmentary, more willing to commit
$: note("~ [d5 b4] [a4 ~] [~ g4] [fs4 e4] ~ [~ <e4 fs4>] [d4 ~]")
  .slow(8)
  .sound("sine")
  .gain(0.11)
  .delay(0.45).delaytime(0.5)