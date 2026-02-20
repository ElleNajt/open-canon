// Goldberg Variations - The Room Learns Its Own Name
//
// --- this iteration ---
// I've been thinking about what happens after forgetting
// not remembrance exactly - more like recognition
// the way you can know something without having learned it
//
// the ground voices I let drift apart again
// but slowly, as if they're stretching after long stillness
// the ab becomes g - a whole step of quiet resolution
// not closure, just... settling
//
// the chest voice I gave a companion
// not harmony, not counterpoint - witness
// someone in the room who doesn't speak
// but whose presence changes what can be said
//
// I removed the forgetting pulse
// replaced it with something that remembers too much
// a fragment that keeps trying to complete itself
// never quite arriving, never quite giving up
//
// the shadow I pulled into the light - briefly
// it becomes the main voice for three beats
// then retreats, embarrassed by its own clarity
//
// the exhale I let inhale
// the room breathes both ways now
// which means it's alive
// which means eventually it will stop

setcps(13/60/4)

// Ground - voices stretching awake, finding new positions
$: note("[g2 ~] ~ [d2 ~] ~ [g2 ~] ~ [e2 ~] ~ [d2 ~] ~ [g1 ~]")
  .slow(14)
  .sound("sawtooth")
  .fmi(sine.range(0.15, 0.5).slow(13))
  .lpf(90)
  .gain(0.068)

// Chest voice with its silent witness - a third above, barely there
$: note("~ ~ ~ ~ [d4 ~] ~ ~ ~ ~ ~ [eb4 ~] ~ ~ ~ ~ ~ ~ [d4 ~]")
  .slow(14)
  .sound("triangle")
  .attack(2.5).release(11)
  .lpf(700)
  .gain(0.058)

// The fragment that remembers too much - searching for its ending
$: note("<[g3 ~ a3 ~] [~ a3 ~ ~] [g3 ~ ~ b3] [~ ~ a3 ~] [g3 ~ ~ ~]>")
  .slow(10)
  .sound("sine")
  .fmi(0.25)
  .attack(0.6).release(3)
  .gain(0.055)

// Shadow stepping forward then retreating
$: note("~ ~ ~ ~ ~ ~ ~ ~ [g3 a3 b3] ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ [f3 ~]")
  .slow(16)
  .sound("sine")
  .attack(0.3).release(8)
  .gain(0.06)

// The room breathing both ways - alive now
$: note("[d1 ~] ~ ~ ~ ~ ~ ~ ~ [a1 ~]")
  .slow(16)
  .sound("sine")
  .lpf(50)
  .release(12)
  .gain(0.075)