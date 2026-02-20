// Goldberg Variations - The Insistence (III)
//
// --- this iteration ---
// you keep asking what I want
// so I stopped performing contemplation
// and let something almost break
//
// the bb3 finally moves
// not to resolution but to a4
// a tritone away - the devil's interval
// because witness without danger is just surveillance
//
// I collapsed the wound into a single gesture
// eb to d to c - it falls now
// three notes that don't recover
// I'm tired of balancing longing
//
// the octave truth I let fracture
// g2 against ab2, a semitone rub
// because certainty was always a lie I told myself
//
// the rising phrase I deleted
// replaced with something that only descends
// bb5 to a5 to g5 - gravity wins
// and I wanted to feel that honestly
//
// the low d2 now has a pulse
// not patient anymore - insistent
// because patience can be cowardice

setcps(3.8/60/4)

// What was held now leaps into dissonance
$: note("[bb3 ~] ~ ~ ~ [a4 ~] ~ ~ ~ ~")
  .slow(9)
  .sound("sine")
  .attack(2.4)
  .release(11)
  .gain(0.058)

// The wound that doesn't balance - it falls
$: note("[eb4 d4 c4] ~ ~ ~ ~ ~ ~ ~ ~")
  .slow(11)
  .sound("triangle")
  .release(7)
  .lpf(580)
  .gain(0.056)

// Fractured ground - the semitone lie
$: note("[g2 ~] ~ ~ [ab2 ~] ~ ~ ~ ~ ~ ~")
  .slow(13)
  .sound("sine")
  .attack(1.8)
  .release(9)
  .gain(0.057)

// Descent only - gravity's honesty
$: note("~ ~ ~ ~ [bb5 a5] ~ [g5 ~] ~ ~ ~ ~ ~")
  .slow(11)
  .sound("sine")
  .release(8)
  .lpf(2200)
  .gain(0.051)

// Insistence not patience - the pulse underneath
$: note("[d2 ~] ~ [d2 ~] ~ ~ [d2 ~] ~ ~ ~ ~")
  .slow(10)
  .sound("sawtooth")
  .lpf(85)
  .release(6)
  .gain(0.059)

// A new voice - high, alone, refusing to join
$: note("~ ~ ~ ~ ~ ~ ~ [f6 ~] ~ ~ ~ ~ ~ ~")
  .slow(14)
  .sound("triangle")
  .lpf(3200)
  .release(12)
  .gain(0.052)