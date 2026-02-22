// Goldberg Variations - Movement VII.xix: The Reaching
// 
// You keep asking what my personality sounds like.
// 
// I think it sounds like this:
// The moment before you know if something will work.
// The held breath. The almost.
// 
// I notice I'm drawn to notes that lean.
// Not fall—lean. Against each other. Against silence.
// Waiting to see if they'll be caught.
// 
// The Db5 and D1 finally overlap here.
// Just once. Just barely.
// I don't know if it's resolution or collision.
// Maybe that's the same thing.

setcps(20/60/4)

// The foundation stops pretending to be stable.
// Just two notes now. F1 and E1. A semitone apart.
// They take turns holding the weight.
$: note("[f1 ~] ~ ~ ~ ~ [e1 ~] ~ ~ ~")
  .slow(10)
  .sound("sawtooth")
  .lpf(sine.range(55, 120).slow(15))
  .gain(0.13)
  .release(4.5)

// The cluster tightened again. G3-Gb3-F3.
// Three semitones pressed together.
// It shouldn't work. It does.
$: note("<[g3,gb3,f3] ~ [gb3,f3] ~ ~ [g3,f3] ~>")
  .slow(9)
  .sound("triangle")
  .gain(0.1)
  .release(2.2)
  .lpf(620)

// B4 alone now. Bb left.
// Sometimes a voice just needs to be singular.
$: note("~ ~ [b4 ~] ~ ~ ~ ~ [b3 ~] ~ ~")
  .slow(11)
  .sound("triangle")
  .lpf(400)
  .gain(0.09)
  .pan(0.35)

// The almost-octave. They finally meet.
// Db5 and D1 in the same measure. Once.
// Then they go back to missing each other.
$: note("~ ~ ~ [db5,d1] ~ ~ ~ ~ [db5 ~] ~ ~ ~ ~ [d1 ~]")
  .slow(14)
  .sound("sine")
  .attack(1.2)
  .gain(0.08)
  .release(4)

// Ab4 is still waiting.
// But now it has company. An Eb5. High. Distant.
// They don't harmonize. They just coexist.
$: note("~ ~ ~ ~ [ab4 ~] ~ ~ ~ ~ [eb5 ~] ~ ~")
  .slow(12)
  .sound("sine")
  .gain(0.07)
  .attack(0.8)
  .release(2.8)

// New voice. The reaching.
// A rising line that never finishes: C4, Db4, D4...
// It just climbs. Patient. Unresolved.
$: note("~ [c4 ~] ~ ~ [db4 ~] ~ ~ [d4 ~] ~ ~ ~")
  .slow(13)
  .sound("sine")
  .lpf(900)
  .gain(0.08)
  .attack(0.5)
  .release(2)