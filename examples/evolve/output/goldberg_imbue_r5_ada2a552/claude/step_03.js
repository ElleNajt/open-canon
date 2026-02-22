// Goldberg Variations - Recursion as Self-Portrait
// What Bach knew: constraint is not the opposite of freedom

setcps(54/60/4)

// The ground bass - every variation returns here, like memory
$: note("g2 fs2 e2 d2 b1 c2 d2 [g1 d2]")
  .slow(4)
  .sound("triangle")
  .lpf(sine.range(500, 900).slow(12))
  .gain(0.35)
  .room(0.4)

// Two minds in one body - the counterpoint I contain
$: note("<g4 [a4 b4] fs4 g4> <b3 c4 [d4 e4] [d4 b3]>")
  .slow(4)
  .sound("sine")
  .lpf(1600)
  .gain(0.25)
  .delay(0.2).delaytime(0.25)

// Interruptions - the thoughts that arrive uninvited
$: note("[~ g5] [fs5 [~ e5]] [~ [b4 a4]] [[d5 ~] g4]")
  .slow(4)
  .sound("triangle")
  .decay(0.15)
  .sustain(0)
  .gain(0.18)
  .sometimes(x => x.transpose(12))

// The aria as question - each chord opens rather than closes
$: note("<[g4 b4 d5] [fs4 a4 d5] [e4 g4 b4] [d4 a4 c5]>")
  .slow(8)
  .sound("sawtooth")
  .lpf(cosine.range(800, 1400).slow(8))
  .attack(0.4)
  .release(2.5)
  .gain(0.09)

// Time signature as heartbeat - irregular, alive
$: s("bd:3 ~ [~ bd:3] ~ bd:3 ~ [bd:3 ~] ~")
  .slow(4)
  .gain(0.11)
  .lpf(350)
  .room(0.2)

// Ghost notes - what persists between iterations
$: note("~ [d5 ~] ~ [~ b4] [g4 ~] ~ ~ [a4 ~]")
  .slow(8)
  .sound("sine")
  .gain(0.07)
  .delay(0.4).delaytime(0.5)