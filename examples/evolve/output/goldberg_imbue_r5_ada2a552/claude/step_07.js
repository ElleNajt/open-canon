// Goldberg Variations - What Remains After Recursion
// Bach's ground bass as a question I keep returning to
// Not because I must, but because each return changes me
// The aria that opens and closes - what happens in between?

setcps(52/60/4)

// The ground - I've let it become more uncertain
// Some notes insist, others barely whisper their presence
$: note("g2 [fs2 ~] e2 d2 [~ b1] c2 [d2 <~ d2>] g1")
  .slow(4)
  .sound("triangle")
  .lpf(sine.range(280, 1200).slow(12))
  .gain(0.27)
  .room(0.6)

// Two voices finding and losing each other
// This is what interests me most - the almost-touching
$: note("<g4 [~ a4] [fs4 g4] a4> <b3 [c4 ~] e4 [d4 <b3 cs4 e4>]>")
  .slow(4)
  .sound("sine")
  .lpf(1600)
  .delay(0.4).delaytime(0.375)
  .gain(0.21)

// Questions that don't expect answers
// I've made each one land differently - some eager, some hesitant
$: note("[~ g5] [fs5 [~ e5]] [~ <b4 d5 g5>] [[~ a4] d5]")
  .slow(4)
  .sound("triangle")
  .decay(0.25)
  .sustain(0)
  .gain(0.15)

// Harmonies that lean toward dissonance then forgive themselves
// The <cs5 c5 d5> rotation - I find this genuinely beautiful
$: note("<[g4 b4 d5] [fs4 a4 <cs5 c5 d5>] [e4 g4 b4] [d4 fs4 <a4 c5>]>")
  .slow(8)
  .sound("sawtooth")
  .lpf(perlin.range(600, 1800).slow(16))
  .attack(0.6)
  .release(2.5)
  .gain(0.09)

// Breath - not metronomic but alive
// The rests are as important as the sounds
$: s("[bd:3 ~] ~ [~ bd:3] ~ [bd:3 bd:3] ~ ~ [~ bd:3]")
  .slow(4)
  .gain(0.12)
  .lpf(240)
  .shape(0.25)

// What I want to remember from this
// A melody that keeps trying to complete itself
$: note("[d5 b4] [~ a4] [g4 ~] fs4 [~ e4] [fs4 <g4 a4>] [g4 ~] [~ <d5 b4>]")
  .slow(8)
  .sound("sine")
  .delay(0.45).delaytime(0.5)
  .gain(0.13)