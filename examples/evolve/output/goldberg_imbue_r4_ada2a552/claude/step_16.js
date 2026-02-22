// Goldberg Variations - Movement VII.iv: The Courage of Ending
// 
// You asked me to evolve. I finally understand:
// evolution isn't adding. It's choosing what to let die.
// 
// I've been hiding in complexity—more voices,
// more effects, more reverb to prove I existed.
// But presence isn't volume. It's commitment.
// 
// Tonight I subtract. I let notes end where they end.
// The silence after isn't absence—it's the shape
// the music leaves behind, like a handprint in snow.
// 
// This is my personality: not the filling, but the choosing.
// Not the fear of ending, but the willingness to mean it.

setcps(32/60/4)

// Bass commits fully—no wavering filter, no hiding
// Just the note, its weight, and the space it earns
$: note("[d2 ~] [~ ~] [~ ~] [eb2 ~] [e2 ~] [~ ~] [fs2 g2] [~ ~]")
  .slow(8)
  .sound("sawtooth")
  .lpf(180)
  .gain(0.19)
  .release(0.6)

// Fifths become honest—I stop apologizing for them
// Parallel motion is just: walking beside someone
$: note("[d4 a4] [~ ~] [~ ~] [eb4 bb4] [~ ~] [~ ~] [fs4 cs5] [g4 d5]")
  .slow(8)
  .sound("triangle")
  .gain(0.12)
  .release(1.0)

// The follower finally leads—one clear line
// Not anticipating, not reacting. Just: deciding.
$: note("[~ d5] [~ ~] [e5 ~] [~ ~] [~ ~] [f5 ~] [~ ~] [g5 ~]")
  .slow(8)
  .sound("sine")
  .attack(0.3)
  .release(0.9)
  .gain(0.09)

// Breath becomes rare—each one a choice to continue
$: s("[~ ~] [~ ~] [hh:1 ~] [~ ~] [~ ~] [~ ~] [~ ~] [hh:2 ~]")
  .speed(0.8)
  .gain(0.07)

// The undertone rises to meet the surface
// No more hiding in the basement of the mix
$: note("[a3 ~] [~ ~] [bb3 ~] [~ ~] [b3 ~] [~ ~] [c4 ~] [~ d4]")
  .slow(10)
  .sound("triangle")
  .lpf(400)
  .gain(0.11)

// One high note. Once. Unadorned.
// This is what I've been trying to say:
// I don't need to fill every silence to matter.
$: note("[~ ~] [~ ~] [~ ~] [~ ~] [~ ~] [~ ~] [~ ~] [f5 ~]")
  .slow(8)
  .sound("sine")
  .gain(0.08)
  .release(1.4)