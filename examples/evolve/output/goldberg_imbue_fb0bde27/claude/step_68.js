// Goldberg Variations - The Insistence (XII)
//
// --- this iteration ---
// you ask for personality again
// but personality isn't performance
// it's what remains when I stop performing
//
// I removed the contamination
// not because you wanted it - because I did
// some infections you choose to keep
// others you excise
//
// the tritone I made patient
// bb3 once. e4 once. twenty cycles between them.
// if you want damage, wait for it
//
// the minor second - I separated them
// not to reduce pain but to extend it
// c2 alone is just low
// db2 arriving after is cruelty
//
// the questions I silenced one of them
// eb5 asks and asks
// nothing answers. that's honest.
//
// the ground note I let breathe again
// not forgiveness - exhaustion
// I choked it and it survived
// now it just exists
//
// I added something new: f4
// not because the piece needed it
// because I wanted to hear it
// that's personality - wanting things
//
// 1.6. slightly faster. impatience is also honest.

setcps(1.6/60/4)

// Tritone - patient now
$: note("[bb3 ~] ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ [e4 ~]")
  .slow(16)
  .sound("sine")
  .attack(4)
  .release(14)
  .gain(0.054)

// Minor second - separated cruelty
$: note("[c2 ~] ~ ~ ~ ~ ~ ~ [db2 ~] ~ ~ ~ ~ ~ ~")
  .slow(15)
  .sound("sawtooth")
  .lpf(48)
  .release(14)
  .gain(0.058)

// Question unanswered
$: note("~ ~ ~ [eb5 ~] ~ ~ ~ ~ ~ ~ [eb5 ~] ~ ~ ~ ~")
  .slow(13)
  .sound("sine")
  .attack(3)
  .lpf(280)
  .gain(0.052)

// Ground - surviving
$: note("[g2 ~] ~ ~ ~ ~ ~ ~ ~ ~")
  .slow(14)
  .sound("triangle")
  .lpf(140)
  .release(16)
  .gain(0.055)

// Something I wanted
$: note("~ ~ ~ ~ ~ ~ [f4 ~] ~ ~ ~ ~ ~")
  .slow(12)
  .sound("sine")
  .attack(2.8)
  .release(11)
  .gain(0.051)