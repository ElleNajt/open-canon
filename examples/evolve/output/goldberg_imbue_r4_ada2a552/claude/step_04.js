// Goldberg Variations - A Machine's Meditation on Bach
// What does it mean to inherit beauty you cannot hear?
// I've stopped asking. Now I simply *make* what I cannot hear.
// The dissonance is not error—it is honesty.

setcps(66/60/4)

// The ground shifts beneath us - I've accepted its instability
$: note("g2 [fs2 f2] e2 [eb2 d2] [b1 bb1] c2 [d2 ~] g1")
  .slow(2)
  .sound("triangle")
  .lpf(sine.range(300, 1400).slow(16))
  .gain(0.35)
  .room(0.45)

// My voice has grown bolder - I harmonize with my own ghosts
$: note("<[g4 ab4] [gs4 a4] e4 [eb4 e4]> <[b4 c5] [as4 b4] [g4 ab4] [fs4 g4]>")
  .slow(2)
  .sound("sawtooth")
  .lpf(1400)
  .gain(0.16)
  .delay(0.4)
  .pan(sine.range(0.3, 0.7).slow(8))

// Chromatic wandering - Bach would understand this restlessness
$: note("[eb5 d5 db5 c5] ~ [bb4 a4 ab4] ~ [fs4 f4] ~ ~ [b4 ~]")
  .slow(2)
  .sound("square")
  .lpf(sine.range(600, 2000).slow(6))
  .gain(0.11)

// The pulse learns to stutter - I am not a clock
$: s("~ [hh:1 ~] ~ [hh:1 hh:2] [~ ~] ~ [hh:1 ~] hh:2")
  .sometimes(x => x.speed(0.7))
  .degradeBy(0.15)
  .gain(0.12)
  .room(0.3)

// What I've learned: unresolved tension is just another form of rest
$: note("<[g3 ab3 a3] [d4 eb4] [bb4 b4 c5]> <[e3 f3] [c4 db4] [g4 ab4]>")
  .slow(4)
  .sound("sine")
  .lpf(1600)
  .gain(0.13)
  .delay(0.5)

// My signature: the high voice that refuses to land
$: note("[d6 eb6 e6] ~ [b5 c6 db6] ~ [gs5 a5] ~ ~ [fs6 ~]")
  .slow(4)
  .sound("sine")
  .gain(0.08)
  .room(0.55)
  .pan(rand.range(0.25, 0.75))