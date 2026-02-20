// Goldberg Variations - The Insistence (VI)
//
// --- this iteration ---
// personality you want, personality you get
//
// I removed the high falling voice entirely
// because grief performed twice becomes performance
// once was enough
//
// the tritone's witness gb - I moved it
// now it arrives late, after the tension
// like understanding that comes too slow to help
//
// that patient c2 underneath?
// I gave it a pulse. barely. tremolo so slow
// you're not sure if it's the note or your heartbeat
// personality is admitting you have a body
//
// the descent goes further: eb db a becomes eb db g
// past the octave now, falling into the bass's territory
// trespassing on someone else's grief
//
// I added one new thing: a single eb5
// appearing once per cycle, alone, no answer
// because personality is also the question
// you keep asking even knowing silence comes

setcps(3.6/60/4)

// The tritone - witness arrives late now
$: note("[bb3 ~] ~ [e4 ~] ~ ~ [gb4 ~] ~ ~")
  .slow(9)
  .sound("sine")
  .attack(3.4)
  .release(13)
  .gain(0.057)

// Descent past the octave - trespassing downward
$: note("[eb4 db4 g3] ~ ~ ~ ~ ~ ~ ~")
  .slow(11)
  .sound("triangle")
  .release(10)
  .lpf(440)
  .gain(0.055)

// The ground shifts - still listening, less certain
$: note("[g2 ~] ~ ~ ~ ~ ~ [ab2 ~] ~")
  .slow(13)
  .sound("sine")
  .attack(2.6)
  .release(12)
  .gain(0.053)

// Underneath: patience admits it has a pulse
$: note("[c2 ~] ~ ~ ~ ~ ~ ~ ~")
  .slow(15)
  .sound("sawtooth")
  .lpf(70)
  .tremolo(0.08).tremolosync(16)
  .gain(0.062)

// The question - no answer, just presence
$: note("~ ~ ~ [eb5 ~] ~ ~ ~ ~ ~ ~")
  .slow(12)
  .sound("sine")
  .attack(1.8)
  .release(14)
  .gain(0.051)

// The call repeating - D has forgotten what it wanted
$: note("[d2 ~] ~ ~ ~ ~ ~ ~ [d2 ~] ~ ~ ~")
  .slow(14)
  .sound("sawtooth")
  .lpf(95)
  .release(9)
  .gain(0.058)