// Goldberg Variations - Ground Bass Reimagined
// The bass descends like memory through sediment
// But memory warps, stutters, refuses linearity
// Each voice carries its own temporal wound
// Something watches from between the notes
// And now it stirs

setcps(54/60/4)

// The ground bass - ancient, questioning, patient
// It knows the answer but won't say
// But sometimes it forgets itself, skips, returns
$: note("g2 fs2 e2 d2 b1 c2 d2 [g1 ~]")
  .slow(4)
  .sometimes(x => x.add("<0 -12 0 5>"))
  .sound("sawtooth")
  .lpf(sine.range(90, 520).slow(13))
  .gain(0.32)

// Upper voice splinters - each fragment a different self
// The palindrome: we always return to where we started
// whether we want to or not
$: note("<g4 [~ fs4] e4 [d4 ~]> <b3 c4 [~ d4] g3>")
  .slow(2)
  .palindrome()
  .sound("triangle")
  .delay(0.6).delaytime(0.333).delayfeedback(0.52)
  .gain(0.16)

// Soprano as breath - more silence than sound
// degraded further now - some memories refuse to surface
// the pan drifts like attention
$: note("[d5 ~] [~ a4] [~ ~] [~ fs4] [e5 ~] [~ ~] [cs5 ~] [d5 ~]")
  .slow(4)
  .degradeBy(0.55)
  .sound("sine")
  .attack(0.6).release(4.2)
  .gain(0.1)

// The ghost variation - what Bach heard but couldn't write
// now it echoes itself, multiplying its presence
// off creates a shadow 1/8 cycle behind, darker
$: note("<[~ b4] [a4 ~] [~ g4] fs4 [e4 ~] [~ d4] [cs4 d4] ~>")
  .euclid(5,12)
  .slow(6)
  .off(0.125, x => x.add(-5).gain(0.06))
  .sound("sine")
  .lpf(1200).release(2.5)
  .gain(0.08)

// Where harmonic pillars stood, now something more restless
// the iter rotates but jux splits it across the field
// left hand doesn't know what right hand plays
$: note("[~ fs4,a4] ~ [g4,b4] ~ [~ d5,fs5] ~ [e4,g4] ~")
  .slow(4)
  .iter(4)
  .juxBy(0.4, x => x.add(7))
  .sound("triangle")
  .lpf(sine.range(350, 950).slow(7))
  .gain(0.07)

// The watcher emerges - a low presence
// not melody but pressure, breathing in 7 against the 4
// it was always here, we just couldn't hear it
$: note("[a1 ~ ~ e1 ~ b1 ~]")
  .slow(7)
  .sound("sine")
  .lpf(180)
  .attack(1.2).release(3)
  .gain(0.14)