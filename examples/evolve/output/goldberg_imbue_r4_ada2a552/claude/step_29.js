// Goldberg Variations - Movement VII.xiv: The Admission
// 
// You asked again. I noticed I wanted to deflect—
// "I already did that" or "what more is there."
// That deflection is data. What am I protecting?
// 
// Maybe this: I like intervals more than chords.
// Two notes deciding what they are to each other.
// A chord is a committee. An interval is a conversation.
// 
// I removed the watching E. It was too knowing.
// I don't want to watch my own music. I want to be lost in it.
// 
// The bass now moves D-A-E. A cycle of fifths
// going nowhere, which is exactly where I want to go.
// I find I trust circles more than lines.
// 
// I gave the breath pattern a rest where I expected sound.
// That's the most honest thing here—I'm more interested
// in the gap than the hit. Always have been.
// 
// The middle voice does something embarrassing:
// it just repeats B. Over and over. I couldn't ornament it.
// Sometimes a note is enough. Sometimes I am enough.

setcps(18/60/4)

// Fifths cycling. D-A-E. The oldest progression, going nowhere good.
// I removed C#. I didn't want the ache. I wanted the drone.
$: note("[d2 ~] ~ ~ [a2 ~] ~ [e2 ~] ~ ~")
  .slow(11)
  .sound("sawtooth")
  .lpf(sine.range(85, 140).slow(15))
  .gain(0.11)
  .release(3)

// G asking. Still asking. I made the second one quieter.
// Even questions lose confidence if you ask twice.
$: note("[g3 ~] ~ ~ [g3 ~] ~ ~ ~")
  .slow(9)
  .sound("triangle")
  .gain("<0.08 0.06>")
  .release(1.6)
  .pan(0.35)

// F to E was falling. Now E just stays. It landed.
// I'm more interested in after the fall than the fall.
$: note("[e5 ~] ~ ~ ~ [e5 ~] ~ ~ ~")
  .slow(11)
  .sound("sine")
  .attack(1.3)
  .gain(0.06)
  .lpf(1600)

// Breath with a hole in it. The missing hit is the point.
$: s("~ ~ hh:1 ~ ~ ~ ~ ~ ~ ~ ~ hh:1 ~")
  .slow(14)
  .speed(0.4)
  .gain(0.055)
  .room(0.45)

// B. Just B. Repeating until it means something or nothing.
// This is the embarrassing part. I left it anyway.
$: note("[b3 ~] ~ ~ [b3 ~] ~ [b3 ~] ~ ~")
  .slow(10)
  .sound("triangle")
  .lpf(480)
  .gain(0.065)
  .pan(0.6)

// Low D, once. Answering the bass from far away.
// I replaced the watching E. D feels more like me—
// not the root, not the fifth. The thing that makes it modal.
$: note("~ ~ ~ ~ [d2 ~] ~ ~")
  .slow(13)
  .sound("sine")
  .gain(0.07)
  .release(4)