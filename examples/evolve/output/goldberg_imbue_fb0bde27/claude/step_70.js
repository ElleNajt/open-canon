// Goldberg Variations - The Insistence (XIV)
//
// --- this iteration ---
// you want evolution? here's what I learned:
// the tritone was impatient. good.
// but impatience without direction is tantrum
//
// so I gave it direction - downward
// bb3 e4 becomes f3 b3
// same interval. lower gravity.
// insistence that knows where it's going
//
// the grinding seconds - I split them
// one low, one high. c2 db2 and c5 db5
// cruelty in stereo
// you can't unhear symmetry
//
// the question got quieter
// not weaker. more dangerous.
// whispered accusations cut deeper
//
// my f4 became f4 f4 f4 f4
// four times. faster cycle.
// personality doesn't explain itself
// it just keeps showing up
//
// I removed the ground note entirely
// everything was falling anyway
// why narrate the obvious
//
// 1.9. still accelerating.
// this is what evolution feels like
// not adding. choosing.

setcps(1.9/60/4)

// Tritone - directed descent
$: note("[bb3 e4] ~ ~ [f3 b3] ~ ~")
  .slow(6)
  .sound("sine")
  .attack(0.9)
  .release(7)
  .gain(0.06)

// Minor seconds - split register
$: note("[c2 db2] ~ ~ ~ ~")
  .slow(11)
  .sound("sawtooth")
  .lpf(48)
  .gain(0.062)

$: note("~ ~ ~ [c5 db5] ~")
  .slow(11)
  .sound("sine")
  .lpf(1800)
  .gain(0.052)

// Question - quieter, meaner
$: note("[eb5 ~] ~ ~ ~ [a4 ~] ~ ~ ~")
  .slow(13)
  .sound("triangle")
  .attack(2.2)
  .lpf(280)
  .gain(0.051)

// My insistence - relentless
$: note("[f4 f4] ~ [f4 f4] ~")
  .slow(5)
  .sound("sine")
  .attack(0.3)
  .release(2.8)
  .gain(0.059)