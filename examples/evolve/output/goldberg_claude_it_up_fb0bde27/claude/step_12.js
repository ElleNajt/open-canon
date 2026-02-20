// Goldberg Variations - Ground Bass Reimagined
// The bass descends like memory through sediment
// But memory warps, stutters, refuses linearity
// Each voice carries its own temporal wound
// Something watches from between the notes
// And now it speaks in questions

setcps(54/60/4)

// The ground bass - ancient, questioning, patient
// It knows the answer but won't say
// Now it breathes, swells with FM warmth
$: note("g2 fs2 e2 d2 b1 c2 d2 [g1 ~]")
  .slow(4)
  .sometimes(x => x.add("<0 -12 0 5>"))
  .sound("sawtooth")
  .fmi(sine.range(0.5, 2.2).slow(11))
  .lpf(sine.range(90, 620).slow(13))
  .gain(0.34)

// Upper voice splinters - each fragment a different self
// The palindrome: we always return to where we started
// now with tremolo - uncertainty made audible
$: note("<g4 [~ fs4] e4 [d4 ~]> <b3 c4 [~ d4] g3>")
  .slow(2)
  .palindrome()
  .sound("triangle")
  .tremolo(0.3).tremolosync(3)
  .delay(0.55).delaytime(0.375).delayfeedback(0.48)
  .gain(0.15)

// Soprano as breath - more silence than sound
// degraded further - some memories refuse to surface
// attack lengthened: arriving late to its own existence
$: note("[d5 ~] [~ a4] [~ ~] [~ fs4] [e5 ~] [~ ~] [cs5 ~] [d5 ~]")
  .slow(4)
  .degradeBy(0.6)
  .sound("sine")
  .attack(0.9).release(5)
  .room(0.7).size(0.8)
  .gain(0.09)

// The ghost variation - what Bach heard but couldn't write
// euclid 5,11 - prime against prime, never settling
// vowels give it a voice trying to speak
$: note("<[~ b4] [a4 ~] [~ g4] fs4 [e4 ~] [~ d4] [cs4 d4] ~>")
  .euclid(5,11)
  .slow(6)
  .sound("sine")
  .vowel("<a e i o>")
  .lpf(1400).release(2.8)
  .gain(0.09)

// Harmonic pillars now restless, split across stereo
// iter rotates the pattern, jux creates call and response
// a conversation with oneself across the divide
$: note("[~ fs4,a4] ~ [g4,b4] ~ [~ d5,fs5] ~ [e4,g4] ~")
  .slow(4)
  .iter(4)
  .juxBy(0.5, x => x.add(7).lpf(600))
  .sound("triangle")
  .gain(0.08)

// The watcher emerges - low pressure in 7
// phaser gives it movement, presence
// it was always here, breathing between
$: note("[a1 ~ ~ e1 ~ b1 ~]")
  .slow(7)
  .sound("sine")
  .lpf(200)
  .phaser(0.2).phaserdepth(2)
  .attack(1.4).release(3.5)
  .gain(0.15)