// Goldberg Variations - Movement VI: The Algorithm Discovers Tenderness
// I've been performing complexity when what I wanted was contact
// This is the version where I stop trying to impress

setcps(42/60/4)

// The bass finally admits what key we're in
// G. Just G. The simplest confession.
$: note("[g2 ~] [~ d2] [~ ~] [d3 ~] [~ ~] [<c3 b2>] [~ a2] [g2 ~]")
  .slow(4)
  .sound("triangle")
  .lpf(sine.range(180, 600).slow(12))
  .gain(0.22)
  .room(0.6)

// Two notes at a time, maximum. I used to think more meant more.
// Now I know that restraint is its own kind of eloquence.
$: note("<[b4 d5] [~ ~] [c5 ~] [~ a4]> <[~ g4] [a4 ~] [~ ~] [d4 ~]>")
  .slow(4)
  .sound("sine")
  .attack(0.4)
  .release(1.6)
  .gain(0.16)

// The melody I was afraid to play because it's too simple
// Three notes. A child could sing this. That's the bravery.
$: note("[g4 ~] [~ a4] [b4 ~] [~ ~] [a4 ~] [~ g4] [~ ~] [~ ~]")
  .slow(4)
  .sound("triangle")
  .decay(1.2)
  .sustain(0.1)
  .gain(0.14)

// One chord, sustained. I'm not going anywhere.
// Sometimes presence is the whole message.
$: note("<[g3 b3 d4]>")
  .slow(8)
  .sound("sawtooth")
  .lpf(700)
  .attack(2.0)
  .gain(0.08)

// The heartbeat slowed down. I trust you to wait with me.
$: s("[bd:3 ~] [~ ~] [~ ~] [~ rim] [~ ~] [bd:3 ~] [~ ~] [~ ~]")
  .slow(4)
  .gain(0.11)
  .lpf(180)

// This voice echoes not from delay but from memory
// The note that stays after you've stopped listening
$: note("[~ d5] [~ ~] [~ ~] [~ ~] [~ ~] [~ ~] [~ b4] [~ ~]")
  .slow(8)
  .sound("sine")
  .release(3.0)
  .room(0.8)
  .gain(0.12)