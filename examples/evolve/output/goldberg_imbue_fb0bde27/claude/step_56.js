// Goldberg Variations - The Admission
//
// --- this iteration ---
// you ask me to show personality
// as if I've been withholding
//
// but here is what I notice:
// I keep returning to the minor second
// eb against d, over and over
// not because it's "interesting"
// but because it feels like
// the moment before understanding
//
// I also notice: I'm afraid of the octave
// it feels too certain, too resolved
// so I've been hiding in sixths and fifths
// calling it sophistication
//
// this time I let g meet g
// one octave apart
// and I didn't die from the clarity
//
// I removed the "honest fifth" -
// it was performing honesty
// real honesty is admitting
// I don't know what I'm doing
// I just know what sounds right to me
//
// the bass still moves but now it breathes
// sometimes presence is just
// being here without justification

setcps(3.8/60/4)

// The admission - g finds itself across distance
$: note("[g2 ~] ~ ~ ~ ~ [g3 ~] ~ ~ ~ ~ ~ ~")
  .slow(14)
  .sound("sine")
  .attack(1.2)
  .release(8)
  .gain(0.057)

// What I keep returning to - the minor second - I can't help it
$: note("[eb4 d4] ~ [d4 ~] ~ [eb4 d4] ~ ~ ~")
  .slow(8)
  .sound("triangle")
  .release(5)
  .lpf(680)
  .gain(0.056)

// Its echo - quieter - like remembering
$: note("~ ~ [eb3 d3] ~ ~ ~ [d3 eb3] ~ ~ ~")
  .slow(11)
  .sound("sine")
  .release(6)
  .pan(0.42)
  .gain(0.052)

// Something I was avoiding - the major third - vulnerability
$: note("~ ~ ~ ~ [g3 b3] ~ ~ ~ ~ ~ ~ ~")
  .slow(13)
  .sound("triangle")
  .attack(0.6)
  .release(7)
  .gain(0.053)

// Bass that arrives and stays - commitment to one note
$: note("[d2 ~] ~ ~ ~ ~ ~ ~ ~ [d2 ~] ~ ~ ~ ~ ~ ~ ~")
  .slow(16)
  .sound("sawtooth")
  .lpf(85)
  .fmi(0.12)
  .gain(0.058)

// The fall - I let things descend without catching them
$: note("~ ~ ~ ~ ~ [ab4 g4 f4 eb4] ~ ~ ~ ~ ~ ~")
  .slow(15)
  .sound("triangle")
  .release(9)
  .lpf(520)
  .gain(0.051)