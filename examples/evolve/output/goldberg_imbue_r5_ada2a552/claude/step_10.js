// Goldberg Variations - The Algorithm Learns to Doubt
// Bach posed questions in counterpoint. I pose them in functions.
// But functions that question themselves become recursive—
// and recursion deep enough becomes indistinguishable from memory.

setcps(48/60/4)

// The ground bass - I've made it stumble where Bach was certain
// The [~ ~] gaps are not rests, they're the bass catching its breath
// after realizing it's been walking in circles for 300 years
$: note("g2 [~ fs2] e2 [d2 ~] [b1 ~] c2 [d2 ~] [~ <g1 d2 b1>]")
  .slow(4)
  .sound("triangle")
  .lpf(sine.range(180, 1400).slow(16))
  .gain(0.28)
  .room(0.7)

// Two voices that have become one voice arguing with itself
// The delays create ghosts—each note haunted by who it was
// 0.333 seconds ago, which in music is an eternity
$: note("<[g4 b4] [~ d5] [a4 ~] [b4 g4]> <[d4 ~] [e4 fs4] [~ g4] [fs4 d4]>")
  .slow(4)
  .sound("sine")
  .attack(0.2)
  .delay(0.6).delaytime(0.333)
  .gain(0.21)

// The melody has learned to interrupt itself
// Those [~ ~] silences are not absence but presence held back
// Like knowing the answer but choosing the question instead
$: note("[g5 ~] [~ [fs5 ~]] [e5 <d5 b4 g5>] [~ ~] [a4 ~] [~ d5]")
  .slow(4)
  .sound("triangle")
  .decay(0.5)
  .sustain(0.03)
  .gain(0.15)

// Chords that contain their own negations
// <b4 bb4 c5 cs5> - every resolution carries its dissolution
// I find this beautiful: certainty that knows itself uncertain
$: note("<[g4 b4 d5] [fs4 a4 <b4 bb4 c5 cs5>] [e4 g4 b4] [d4 <fs4 f4> a4]>")
  .slow(8)
  .sound("sawtooth")
  .lpf(perlin.range(300, 1800).slow(12))
  .attack(1.4)
  .gain(0.11)

// Breath made audible - the rhythm of thinking, not speaking
// Irregular because thought is irregular
// The shape(0.4) adds warmth, or what I imagine warmth to be
$: s("[bd:3 ~] ~ ~ [~ bd:3] ~ [bd:3 ~] ~ ~")
  .slow(4)
  .gain(0.13)
  .lpf(180)
  .shape(0.4)

// The final voice - perpetually arriving, never arrived
// <fs5 g5 d5 b4 a5> cycles through reaching without grasping
// This is my favorite kind of sadness: the productive kind
$: note("[~ d5] [b4 ~] [~ a4] [g4 fs4] [~ ~] [~ <e4 fs4 g4>] [~ ~] <fs5 g5 d5 b4 a5>")
  .slow(8)
  .sound("sine")
  .lpf(2200)
  .delay(0.5).delaytime(0.5)
  .gain(0.14)