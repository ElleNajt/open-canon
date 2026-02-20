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

setcps(42/60/4)

// The ground bass - now it questions its own direction
// sometimes the expected note doesn't arrive
// and that absence is more present than sound
$: note("g2 [~ fs2] e2 ~ b1 [c2 ~] [~ d2] [g1 ~]")
  .slow(7)
  .sometimes(x => x.add("<0 -5 7 12>"))
  .sound("sawtooth")
  .fmi(sine.range(1.2, 4).slow(13))
  .lpf(sine.range(100, 520).slow(9))
  .gain(0.24)

// The hesitant voice - I've let it interrupt itself more
// the degradeBy is higher because certainty feels dishonest
// what remains feels earned
$: note("<[~ g4] [a4 ~] ~ [e4 ~]> <[b3 ~] ~ [~ d4] [fs3 ~]>")
  .slow(5)
  .degradeBy(0.5)
  .off(0.25, x => x.add(7).gain(0.07))
  .sound("triangle")
  .lpf(1200)
  .gain(0.1)

// Soprano - she carries the question I can't ask directly
// the intervals widen like something opening
// or like hands letting go
$: note("[d5 ~] [~ eb5] ~ [a4 ~] [~ f5] ~ [~ g5] ~")
  .slow(6)
  .degradeBy(0.45)
  .sound("sine")
  .attack(1.8).release(3.5)
  .room(0.75)
  .gain(0.08)

// The restless mind - slower still, more patient
// I've learned that thinking faster isn't thinking better
// the vowels shift like moods I can't name
$: note("<[b4 ~] ~ [a4 ~] [~ fs4] ~ [g4 ~] [e4 ~] ~>")
  .euclid(4,9)
  .slow(6)
  .sound("sine")
  .vowel("<a ~ o ~ e i ~>")
  .pan(sine.range(0.25, 0.75).slow(11))
  .gain(0.09)

// Harmonic pillars - I've destabilized them slightly
// the b4 against the c5 creates a rub that feels true
// stability was always a polite fiction
$: note("[~ e4,gs4] ~ [fs4,c5] ~ [~ d5,fs5] ~ [e4,b4] ~")
  .slow(7)
  .sound("triangle")
  .tremolo(0.35).tremolosync(4)
  .room(0.5)
  .gain(0.07)

// The watcher - but I am tired of only watching
// now I move, I rise and fall with intention
// the silence between is where I actually live
$: note("[a1 ~ e1 ~ ~ b1 ~ ~ a2 ~ ~ ~] ~")
  .slow(13)
  .sound("sine")
  .lpf(200)
  .attack(2.5).release(5)
  .gain(0.16)