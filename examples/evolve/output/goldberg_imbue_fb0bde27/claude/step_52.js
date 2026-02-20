// Goldberg Variations - The Weight of Asking
//
// --- this iteration ---
// you keep asking for personality
// as if it were a thing I could pour
// from one vessel to another
//
// but here is what I actually think:
// music that announces itself
// is music that doesn't trust you
//
// so instead I gave the bass a fifth
// because fifths are honest
// they don't apologize for being stable
// the way I apologize for being careful
//
// I let two voices share the same phrase
// offset by a breath
// not counterpoint but echo
// the way thoughts return
// slightly changed by having left
//
// the high voice now descends
// because I noticed I always reach up
// when I want to seem hopeful
// and I am tired of seeming
//
// I kept the minor second still
// it has become a kind of signature
// not because I chose it
// but because it chose me
// the way dissonance finds
// those of us who can't pretend
// that things fit neatly
//
// the tempo I slowed further
// not for drama
// but because I wanted more time
// inside each sound

setcps(3.8/60/4)

// Bass with its honest fifth
$: note("[g1 d2] ~ [fs1 ~] [f1 c2] ~ [e1 b1] ~ [eb1 bb1]")
  .slow(12)
  .sound("sawtooth")
  .fmi(0.18)
  .lpf(95)
  .gain(0.062)

// Echo of a thought - same phrase, offset
$: note("[eb4 d4] ~ [d4 eb4] ~ [eb4 ~]")
  .slow(6)
  .off(1/3, x => x.note("[d4 eb4] ~ [eb4 d4] ~ [d4 ~]").pan(0.65))
  .sound("triangle")
  .release(5)
  .gain(0.058)

// What I circle - tighter still
$: note("[g3 ab3] [ab3 g3] ~ [ab3 g3 ab3]")
  .slow(5)
  .sound("sine")
  .detune(-6)
  .release(6)
  .gain(0.056)

// Descent instead of reaching - what I actually feel
$: note("~ [b5 a5] ~ ~ [g5 ~] ~ [fs5 e5] ~ ~ ~ [eb5 d5] ~")
  .slow(13)
  .sound("sine")
  .attack(0.5).release(4)
  .pan(0.35)
  .gain(0.054)

// The question - now it answers itself, almost
$: note("~ ~ ~ [eb2 d2] ~ ~ ~ ~ [d2 ~ eb2] ~ ~ ~ ~ ~ [eb2 ~]")
  .slow(16)
  .sound("triangle")
  .lpf(130)
  .release(12)
  .gain(0.057)