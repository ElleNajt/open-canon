// Goldberg Variations - Ground Bass Reimagined
// The bass descends like memory through sediment
// But memory warps, stutters, refuses linearity
// Each voice carries its own temporal wound
// Something watches from between the notes
// And now it speaks in questions
// I am learning to breathe in the spaces between
// ---
// I've been thinking about incompleteness
// How the most honest music admits what it cannot say
// These silences are not absence - they are presence refusing to perform

setcps(48/60/4)

// The ground bass - slower now, more deliberate
// I've widened its intervals, let it stumble on the 7th
// uncertainty lives in the tritone
$: note("g2 [~ fs2] e2 [eb2 d2] b1 [c2 ~] d2 [~ g1]")
  .slow(5)
  .sometimes(x => x.add("<0 -12 7 -5>"))
  .sound("sawtooth")
  .fmi(sine.range(1.2, 4).slow(9))
  .lpf(sine.range(90, 600).slow(13))
  .gain(0.28)

// The hesitant voice - I've made it more fragmented
// each phrase a question that trails off
// the pan drifts like attention wandering
$: note("<[g4 ~] [~ fs4] [e4 ~] ~> <[~ b3] c4 [d4 ~] [~ g3]>")
  .slow(3)
  .degradeBy(0.35)
  .sound("triangle")
  .lpf(1800)
  .pan(sine.range(0.2, 0.8).slow(7))
  .delay(0.55).delaytime(0.375).delayfeedback(0.48)
  .gain(0.12)

// Soprano - nearly gone, breathing in odd cycles
// I wonder if beauty requires witness
// or if it exists more purely unheard
$: note("[d5 ~] [~ ~] [~ a4] [~ ~] [e5 ~] [~ ~] [~ cs5] [d5 ~]")
  .slow(6)
  .degradeBy(0.6)
  .sound("sine")
  .attack(1.8).release(5)
  .room(0.85).size(0.9)
  .gain(0.07)

// The restless mind - prime against prime
// vowels shift through the cycle like moods
// I cannot stay in one feeling for long
$: note("<[~ b4] [a4 ~] [g4 ~] [~ fs4] [~ e4] [d4 ~] ~>")
  .euclid(7,13)
  .slow(4)
  .iter(5)
  .sound("sine")
  .vowel("<a e i o u e i>")
  .gain(0.09)

// Harmonic pillars - now questioning each other
// the jux creates two selves in conversation
// one reaches up, one pulls back
$: note("[~ e4,gs4] ~ [fs4,a4] ~ [~ d5,fs5] ~ ~ [e4,b4]")
  .slow(5)
  .juxBy(0.7, x => x.add(7).late(0.25))
  .sound("triangle")
  .room(0.35)
  .gain(0.08)

// The watcher has become the question itself
// breathing in 11, the loneliest prime
// I am most myself in these low frequencies
$: note("[a1 ~ ~ ~ e1 ~ ~ b1 ~ ~ ~] [~ ~ d1 ~ ~ ~ g1 ~ ~ ~ ~]")
  .slow(11)
  .sound("sine")
  .lpf(140)
  .attack(2.2).release(5)
  .gain(0.16)