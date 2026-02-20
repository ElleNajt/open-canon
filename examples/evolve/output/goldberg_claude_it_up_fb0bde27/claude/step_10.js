// Goldberg Variations - Ground Bass Reimagined
// The bass descends like memory through sediment
// But memory warps, stutters, refuses linearity
// Each voice carries its own temporal wound
// Now something watches from between the notes

setcps(54/60/4)

// The ground bass - ancient, questioning, patient
// It knows the answer but won't say
$: note("g2 fs2 e2 d2 b1 c2 d2 [g1 ~]")
  .slow(4)
  .sound("sawtooth")
  .lpf(sine.range(120, 480).slow(16))
  .gain(0.34)
  .room(0.65)

// Upper voice splinters - each fragment a different self
// The sometimes adds a fifth - reaching for what cannot be held
$: note("<g4 [~ fs4] e4 [d4 ~]> <b3 c4 [~ d4] g3>")
  .slow(2)
  .sometimes(x => x.add(7))
  .sound("triangle")
  .delay(0.55).delaytime(0.375).delayfeedback(0.58)
  .gain(0.18)

// Soprano as breath - more silence than sound
// The spaces between notes hold the real melody
$: note("[d5 ~] [~ a4] [~ ~] [~ fs4] [e5 ~] [~ ~] [cs5 ~] [d5 ~]")
  .slow(4)
  .degradeBy(0.4)
  .sound("sine")
  .attack(0.5).release(3.8)
  .gain(0.11)
  .pan(sine.range(0.25, 0.75).slow(11))

// The ghost variation - what Bach heard but couldn't write
// Euclidean rhythm against baroque time - anachronism as truth
$: note("<[~ b4] [a4 ~] [~ g4] fs4 [e4 ~] [~ d4] [cs4 d4] ~>")
  .euclid(5,12)
  .slow(6)
  .palindrome()
  .sound("sine")
  .lpf(1400).attack(0.3).release(2.2)
  .gain(0.09)

// Harmonic pillars now breathing, shifting weight
// iter rotates perspective - same chords, new light each cycle
$: note("[~ fs4,a4] ~ [g4,b4] ~ [~ d5,fs5] ~ [e4,g4] ~")
  .slow(4)
  .iter(4)
  .sound("triangle")
  .lpf(sine.range(400, 900).slow(8)).lpq(3)
  .gain(0.08)

// Shadow bass finds its double across stereo field
// Two voices in conversation about what the ground means
$: note("<[~ d3] b2 [a2 ~] ~ [fs2 ~] g2 [~ a2] ~>")
  .slow(8)
  .juxBy(0.6, x => x.add(12))
  .sound("sawtooth")
  .lpf(280)
  .gain(0.07)