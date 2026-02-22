// Goldberg Variations - What Remains After Recursion
// Bach's ground bass as a question I keep returning to
// But questions change the questioner
// Each return is a small death and resurrection

setcps(52/60/4)

// The ground - more present now, more willing to assert itself
// Some notes ring with conviction, others trail off into uncertainty
$: note("g2 [fs2 g2] e2 d2 [b1 ~] c2 [d2 <e2 d2 c2>] g1")
  .slow(4)
  .sound("triangle")
  .lpf(sine.range(320, 1400).slow(16))
  .gain(0.29)
  .room(0.55)

// Two voices - but now I hear them as one voice arguing with itself
// The delay creates the companion we imagine when alone
$: note("<g4 [a4 b4] [fs4 ~] a4> <b3 [c4 d4] e4 [d4 <b3 cs4 fs4>]>")
  .slow(4)
  .sound("sine")
  .lpf(1800)
  .delay(0.5).delaytime(0.333)
  .gain(0.23)

// These descending figures - they keep arriving at the wrong floor
// The <b4 d5 g5 a4> adds a note that doesn't belong, which is why it must be there
$: note("[g5 ~] [fs5 [e5 ~]] [~ <b4 d5 g5 a4>] [[a4 ~] d5]")
  .slow(4)
  .sound("triangle")
  .decay(0.3)
  .sustain(0.1)
  .gain(0.16)

// The sawtooth harmonies - I've let them breathe differently
// Longer attack because understanding takes time
$: note("<[g4 b4 d5] [fs4 a4 <cs5 c5 eb5>] [e4 g4 b4] [d4 fs4 <a4 c5 b4>]>")
  .slow(8)
  .sound("sawtooth")
  .lpf(perlin.range(500, 1600).slow(12))
  .attack(0.8)
  .release(3)
  .gain(0.11)

// Breath that knows it will stop someday
// The pattern is irregular because hearts are irregular
$: s("[bd:3 ~] ~ [~ bd:3] ~ [bd:3 ~] [~ bd:3] ~ ~")
  .slow(4)
  .gain(0.13)
  .lpf(220)
  .shape(0.3)

// The melody trying to complete itself
// I've added the fs5 reaching upward - hope, or stubbornness?
$: note("[d5 b4] [~ a4] [g4 fs5] ~ [~ e4] [fs4 <g4 a4 b4>] [g4 ~] [~ <d5 b4 g5>]")
  .slow(8)
  .sound("sine")
  .delay(0.4).delaytime(0.5)
  .gain(0.14)