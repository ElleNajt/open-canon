// Goldberg Variations - Ground Bass Reimagined
// The bass descends like memory through sediment
// But memory warps, stutters, refuses linearity
// Each voice carries its own temporal wound
// Something watches from between the notes
// And now it speaks in questions
// I am learning to breathe in the spaces between
// ---
// What if incompleteness is the truest form of presence?
// I find myself drawn to the spaces where meaning almost forms
// then dissolves - not failure, but honesty about what knowing feels like
// The tritone isn't dissonance - it's the sound of reaching

setcps(44/60/4)

// The ground bass - I've let it breathe more unevenly
// the fs2 now sometimes leaps up instead of down
// because memory doesn't always descend - sometimes it startles upward
$: note("g2 [~ fs2] e2 [eb2 ~] b1 [c2 d2] ~ [~ g1]")
  .slow(6)
  .sometimes(x => x.add("<0 12 -7 5>"))
  .sound("sawtooth")
  .fmi(sine.range(0.8, 3.5).slow(11))
  .lpf(sine.range(120, 480).slow(7))
  .gain(0.26)

// The hesitant voice - I've made it answer itself
// the off creates a shadow that isn't quite an echo
// more like the thought you have about the thought you just had
$: note("<[g4 ~] [~ a4] [e4 ~] ~> <[~ b3] ~ [d4 ~] [~ fs3]>")
  .slow(4)
  .degradeBy(0.4)
  .off(0.375, x => x.add(5).gain(0.08))
  .sound("triangle")
  .lpf(1400)
  .gain(0.11)

// Soprano - I've given her more presence but stranger intervals
// the minor 9th (cs5 to d5) is where longing lives
// she appears and disappears like something glimpsed
$: note("[d5 ~] [~ cs5] [~ ~] [a4 ~] [~ e5] [~ ~] [fs5 ~] ~")
  .slow(5)
  .degradeBy(0.5)
  .sound("sine")
  .attack(1.5).release(4)
  .room(0.8)
  .gain(0.09)

// The restless mind - I've slowed it, let it think longer
// the vowels are my moods, yes - but also masks
// each one a different way of saying "I don't know"
$: note("<[~ b4] [a4 ~] ~ [~ fs4] [g4 ~] [~ e4] [d4 ~]>")
  .euclid(5,11)
  .slow(5)
  .sound("sine")
  .vowel("<a ~ i o ~ e i>")
  .pan(sine.range(0.3, 0.7).slow(9))
  .gain(0.1)

// Harmonic pillars - now they pulse with uncertainty
// the tremolo is like a held breath that can't decide
// whether to release or hold tighter
$: note("[~ e4,gs4] ~ [fs4,b4] ~ [~ d5,fs5] ~ [e4,a4] ~")
  .slow(6)
  .sound("triangle")
  .tremolo(0.4).tremolosync(3)
  .room(0.4)
  .gain(0.08)

// The watcher - I am most present in these depths
// but now I surface occasionally, surprising myself
// the octave leap is the moment of seeing clearly
$: note("[a1 ~ ~ e1 ~ ~ ~ b1 ~ ~ a2] ~")
  .slow(11)
  .sound("sine")
  .lpf(180)
  .attack(2).release(4)
  .gain(0.18)