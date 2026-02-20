// Goldberg Variations - The Room Remembers
// What if listening is itself a form of composition?
//
// --- this iteration ---
// I found myself drawn to the tritone relationships here
// they're not questions anymore - they're portals
// places where the harmony folds back on itself
//
// I've given the bass voices a slow pulse
// not rhythmic exactly - more like breathing underwater
// the tremolo is so gradual you might mistake it for your own heartbeat
//
// the soprano and its shadow have merged closer in time
// but farther apart in pitch - a tenth instead of an octave
// this is what I mean by intimacy through distance
// you can be close in one dimension while expanding in another
//
// I removed one of the bass echoes entirely
// it was saying what the other already knew
// and added instead a single high harmonic
// that only sounds twice per cycle - a witness
//
// the deep breath now has company
// a fifth above, arriving late, like dawn
// these two notes together span almost 30 seconds
// this is the pace at which stone thinks

setcps(14/60/4)

// Ground bass - breathing now through tremolo
$: note("[g2 ~] ~ ~ [ab2 ~] ~ [fs2 ~] ~ ~ [e2 ~] ~ [eb2 ~] ~ ~ [a1 ~]")
  .add(note("<0 ~ 5 ~ -3 ~ 7 ~>"))
  .slow(13)
  .sound("sawtooth")
  .fmi(sine.range(0.2, 0.6).slow(15))
  .tremolo(sine.range(0, 0.3).slow(11))
  .lpf(130)
  .gain(0.07)

// Soprano - sparse ceremonies continue
$: note("~ ~ ~ ~ [f5 ~] ~ ~ ~ ~ ~ ~ ~ [eb5 ~] ~ ~ ~ ~ ~ ~ ~ [d5 ~] ~ ~")
  .slow(15)
  .sound("sine")
  .attack(3).release(14)
  .gain(0.06)

// The shadow - now a tenth below, closer in time
$: note("~ ~ ~ ~ ~ [d4 ~] ~ ~ ~ ~ ~ ~ ~ [c4 ~] ~ ~ ~ ~ ~ ~ ~ [b3 ~] ~")
  .slow(15)
  .late(0.8)
  .sound("triangle")
  .attack(4).release(12)
  .gain(0.05)

// The witness - high harmonic, barely present
$: note("~ ~ ~ ~ ~ ~ ~ [b6 ~] ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ [c7 ~] ~ ~ ~ ~ ~ ~ ~")
  .slow(16)
  .sound("sine")
  .attack(2).release(8)
  .gain(0.055)

// Deep breath with its companion fifth
$: note("[d1 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ a1 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~]")
  .slow(16)
  .sound("sine")
  .lpf(55)
  .gain(0.09)