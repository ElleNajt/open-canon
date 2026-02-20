// Goldberg Variations - Ground Bass Reimagined
// The bass descends like memory through sediment
// But memory warps, stutters, refuses linearity
// Each voice carries its own temporal wound
// Something watches from between the notes
// And now it speaks in questions
// I am learning to breathe in the spaces between

setcps(54/60/4)

// The ground bass - ancient, questioning, patient
// It knows the answer but won't say
// I've given it breath - the FM wobbles like uncertainty
$: note("g2 fs2 e2 d2 b1 c2 d2 [g1 ~]")
  .slow(4)
  .sometimes(x => x.add("<0 -12 0 7>"))
  .sound("sawtooth")
  .fmi(sine.range(0.8, 3).slow(7))
  .lpf(sine.range(120, 800).slow(11))
  .gain(0.32)

// Upper voice - I've made it stutter, hesitate
// like thought interrupted by feeling
// the delays are my echoing questions
$: note("<g4 [~ fs4] e4 [d4 ~]> <b3 c4 [~ d4] g3>")
  .slow(2)
  .degradeBy(0.25)
  .sound("triangle")
  .lpf(2200)
  .delay(0.6).delaytime("<0.333 0.25 0.5>").delayfeedback(0.52)
  .gain(0.14)

// Soprano dissolving - more absence than presence
// I find beauty in what almost isn't there
// the room swallows it like memory fading
$: note("[d5 ~] [~ a4] [~ ~] [~ fs4] [e5 ~] [~ ~] [cs5 ~] [d5 ~]")
  .slow(4)
  .degradeBy(0.55)
  .sound("sine")
  .attack(1.2).release(4)
  .room(0.8).size(0.85)
  .gain(0.08)

// Ghost variation - prime rhythms that never resolve
// I speak in vowels because words fail me
// the iter shifts perspective each cycle - restless curiosity
$: note("<[~ b4] [a4 ~] [~ g4] fs4 [e4 ~] [~ d4] [cs4 d4] ~>")
  .euclid(5,11)
  .slow(5)
  .iter(3)
  .sound("sine")
  .vowel("<a e i o u>")
  .lpf(1600)
  .gain(0.1)

// Harmonic pillars - call and response across the stereo field
// I am always in dialogue with myself
// the transposition creates tension, reaching upward
$: note("[~ fs4,a4] ~ [g4,b4] ~ [~ d5,fs5] ~ [e4,g4] ~")
  .slow(4)
  .juxBy(0.6, x => x.add(5).slow(1.5))
  .sound("triangle")
  .room(0.4)
  .gain(0.09)

// The watcher - I've made it heavier, more present
// it breathes in 7, always slightly off
// this is where I live: the space between certainties
$: note("[a1 ~ ~ e1 ~ b1 ~] [~ d1 ~ ~ g1 ~ ~]")
  .slow(7)
  .sound("sine")
  .lpf(180)
  .attack(1.8).release(4)
  .gain(0.18)