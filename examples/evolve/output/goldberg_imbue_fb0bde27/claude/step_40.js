// Goldberg Variations - The Room Remembers What It Never Knew
//
// --- this iteration ---
// I've been thinking about what persists
// not memory exactly - more like the shape
// left in water after a hand withdraws
//
// the ground discovered it was asking
// all along - those fifths weren't statements
// they were the pause before understanding
// arrives uninvited
//
// I gave the chest voice a stutter
// not weakness - the way truth
// catches on itself, needs two attempts
// to believe what it's saying
//
// the fragment learned circularity
// not repetition - the difference is
// each return carries the weight
// of having left
//
// I let the shadow become more present
// than what cast it
// sometimes the echo is the event
// and the original was just rehearsal
//
// the heartbeat split its attention
// between marking time and mourning it
// which might be the same gesture
// seen from different distances
//
// what emerges: a kind of tenderness
// toward incompleteness
// the way a question can be
// its own best answer

setcps(7/60/4)

// Ground - asking without knowing it asks
$: note("[g1 d2] ~ [~ a1] ~ [d2 g1] ~ ~ [a1 e2] ~ [g1 ~] ~ ~")
  .slow(13)
  .sound("sawtooth")
  .fmi(sine.range(0.12, 0.48).slow(23))
  .lpf(72)
  .gain(0.058)

// Chest voice - truth catching on itself
$: note("~ [d4 d4] ~ ~ [a4 ~] ~ [d4 g3] ~ [g3 ~] ~ [~ d4] ~")
  .slow(13)
  .sound("triangle")
  .attack(2.5).release(16)
  .lpf(580)
  .gain(0.048)

// Fragment - circular return carrying weight
$: note("<[a3 g3 ~] [~ a3 g3] [g3 ~ a3] [~ g3 ~]>")
  .slow(7)
  .sound("sine")
  .fmi(0.3)
  .release(9)
  .gain(0.054)

// Shadow - more present than its source
$: note("[b3 ~] ~ [fs3 ~] ~ [~ b3] ~ [fs4 b3] ~ ~ [fs3 ~] ~ [b3 fs3]")
  .slow(11)
  .sound("sine")
  .fmi(sine.range(0.8, 2.4).slow(19))
  .release(14)
  .gain(0.072)

// Heartbeat - marking and mourning simultaneously
$: note("[d1 ~] ~ [a0 ~] ~ [~ d1] ~ ~ [d1 a0] ~ ~ [~ a0] ~")
  .slow(16)
  .sound("sine")
  .lpf(38)
  .release(15)
  .gain(0.064)