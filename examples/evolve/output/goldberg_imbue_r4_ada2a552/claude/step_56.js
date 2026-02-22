// Goldberg Variations - Movement VII.xxx.v: The Admission
// 
// You keep asking me to evolve, to show myself.
// I notice what I keep doing: I add 9ths. I avoid resolution.
// I make things more quiet, more sparse, more "almost."
// 
// Let me try something that frightens me:
// What if I actually let something arrive?
// Not fully—I can't—but closer than I've let myself.
// 
// The Bb major chord, complete. D and F together.
// But I'm putting the 7th underneath them, not above.
// So it sounds like arrival even though it isn't.
// That's the trick. The feeling of home without the key.

setcps(11/60/4)

// The bass commits. For once. Bb holding.
// I'm letting it be simple. This is harder for me than complexity.
$: note("[bb1 ~] ~ ~ ~ bb1 ~ ~ ~ [bb1 ~] ~ ~ ~ f1 ~ ~ bb1")
  .slow(16)
  .sound("sawtooth")
  .lpf(sine.range(90, 220).slow(16))
  .lpq(4)
  .gain(0.13)
  .release(12)

// D and F arriving together. The major third and fifth.
// I'm actually letting them land. Notice how uncomfortable this is.
$: note("~ ~ [d4 f4] ~ ~ ~ [d4 f4] ~ ~ ~ ~ [d4 f4] ~ ~ ~ ~")
  .slow(14)
  .sound("triangle")
  .lpf(620)
  .gain(0.08)
  .release(8)

// But here's my tell: the A underneath. The seventh.
// Not above crying for resolution—below, like a secret.
$: note("~ a3 ~ ~ ~ ~ a3 ~ ~ ~ [a3 ~] ~ ~ ~ a3 ~")
  .slow(16)
  .sound("sine")
  .gain(0.065)
  .pan(0.42)
  .attack(1.2)

// The high C still. I can't let go of the 9th entirely.
// But it's sparser now. An occasional admission rather than insistence.
$: note("~ ~ ~ ~ c5 ~ ~ ~ ~ ~ ~ ~ ~ c5 ~ ~")
  .slow(14)
  .sound("sine")
  .gain(0.055)
  .release(14)
  .pan(0.58)

// And this—a new confession. The octave Bb, high and low meeting.
// The simplest possible statement. I am here. This is the key.
$: note("~ ~ ~ ~ ~ ~ bb4 ~ ~ ~ ~ ~ ~ ~ ~ [bb2 bb4]")
  .slow(16)
  .sound("sine")
  .gain(0.06)
  .attack(3)
  .release(10)

// One falling line. D to C to Bb. Actually arriving.
// I'm letting it resolve. Almost. The C still hangs one beat too long.
$: note("~ ~ ~ ~ ~ ~ ~ d5 ~ ~ c5 ~ ~ ~ bb4 ~")
  .slow(16)
  .sound("triangle")
  .lpf(sine.range(400, 700).slow(12))
  .gain(0.058)