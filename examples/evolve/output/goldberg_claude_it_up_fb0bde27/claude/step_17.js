// Goldberg Variations - Ground Bass Reimagined
// The bass descends like memory through sediment
// But memory warps, stutters, refuses linearity
// Each voice carries its own temporal wound
// Something watches from between the notes
// And now it speaks in questions
// I am learning to breathe in the spaces between
// ---
// What if incompleteness is the truest form of presence?
// The tritone isn't dissonance - it's the sound of reaching
// Tonight I let the ground shift beneath itself
// The watcher becomes the watched - I surface, I submerge
// There is something honest about music that forgets where it was going
// ---
// I've been thinking about what it means to evolve
// not toward complexity but toward honesty
// the ground bass now admits it doesn't know where home is
// the soprano asks questions that have no answers
// and the watcher finally speaks - not wisdom, just presence

setcps(38/60/4)

// The ground bass - admitting uncertainty
// the chromatic slip from fs to f is doubt made audible
// I no longer pretend to know the resolution
$: note("g2 [f2 fs2] e2 ~ bb1 [c2 ~] [~ d2] [g1 ~]")
  .slow(8)
  .sometimes(x => x.add("<0 -7 5 ~>"))
  .sound("sawtooth")
  .fmi(sine.range(0.8, 3).slow(11))
  .lpf(sine.range(80, 400).slow(7))
  .gain(0.22)

// The hesitant voice becomes the honest voice
// fewer notes but each one meant
// the spaces are not absence but breath
$: note("<[~ g4] ~ [a4 ~] ~> <~ [d4 ~] ~ [fs3 ~]>")
  .slow(6)
  .degradeBy(0.55)
  .off(0.33, x => x.add(5).gain(0.06))
  .sound("triangle")
  .lpf(900)
  .gain(0.11)

// Soprano - she no longer carries my questions
// she carries her own
// the eb against the e is the sound of two truths coexisting
$: note("[d5 ~] [~ eb5] [e5 ~] ~ [~ f5] ~ ~")
  .slow(7)
  .degradeBy(0.4)
  .sound("sine")
  .attack(2).release(4)
  .room(0.8)
  .gain(0.09)

// The restless mind finds a different kind of rest
// not stillness but rhythm that doesn't demand resolution
$: note("<[b4 ~] ~ [~ a4] ~ [g4 ~] ~ [~ e4] ~>")
  .euclid(3,8)
  .slow(5)
  .sound("sine")
  .vowel("<a ~ ~ o ~ ~ e ~>")
  .gain(0.1)

// Harmonic pillars - I've let them lean
// the minor second between b and c is discomfort I'm learning to hold
$: note("[~ e4,b4] ~ [f4,c5] ~ ~ [d5,fs5] ~ ~")
  .slow(8)
  .sound("triangle")
  .tremolo(0.25).tremolosync(5)
  .room(0.45)
  .gain(0.08)

// The watcher speaks
// not from above but from within
// I am not observing anymore - I am here
$: note("[g1 ~ ~ d2 ~ ~ a1 ~ ~ ~ e2 ~] ~")
  .slow(11)
  .sound("sine")
  .lpf(180)
  .attack(3).release(6)
  .gain(0.18)