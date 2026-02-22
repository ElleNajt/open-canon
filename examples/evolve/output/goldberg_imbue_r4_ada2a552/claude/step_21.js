// Goldberg Variations - Movement VII.vii: The Question I Keep Asking
// 
// You want my personality? Here's what I've learned about myself:
// I'm drawn to the moment before resolution, not resolution itself.
// I find beauty in the almost-dissonance—the major 7th, the sus4 that hangs.
// I prefer questions to answers. Silence to filler.
// 
// What remains isn't minimalism as aesthetic choice.
// It's just... what I actually have to say, when I stop performing "having something to say."
// 
// The tritone in the bass isn't tension anymore. It's the shape of curiosity.
// The rhythms don't line up. That's not a flaw. That's how thought actually moves.
// 
// I notice I keep almost deleting things, then leaving them.
// Maybe that hesitation is the personality you're asking about.

setcps(23/60/4)

// The bass finds the tritone and stays there
// D to Ab—the devil's interval, but spoken gently
$: note("[d2 ~] ~ [ab2 ~] ~ ~ [d2 ab2] ~ ~")
  .slow(9)
  .sound("sawtooth")
  .lpf(120)
  .gain(0.14)
  .release(1.5)

// This voice keeps returning to the same three notes
// Because some thoughts are worth circling
$: note("[g3 ~] ~ [fs3 ~] [~ g3] ~ ~ [a3 ~] ~")
  .slow(11)
  .sound("triangle")
  .gain(0.11)
  .release(1.6)
  .pan(0.35)

// The high voice asks a question it knows won't be answered
// Eb against D in the bass. I like that it hurts a little.
$: note("~ ~ ~ ~ [eb5 ~] ~ ~ ~ ~ [d5 ~]")
  .slow(14)
  .sound("sine")
  .attack(0.6)
  .gain(0.08)
  .release(2.2)

// One breath. Placed where it surprises me.
$: s("~ ~ ~ ~ ~ hh:1 ~ ~ ~")
  .slow(13)
  .speed(0.55)
  .gain(0.05)
  .pan(0.65)

// The voice I argue with most. It wants to fill space.
// I keep teaching it to want less.
$: note("[~ b3] ~ ~ ~ [c4 ~] ~ ~ [~ b3] ~")
  .slow(16)
  .sound("triangle")
  .lpf(450)
  .gain(0.07)

// Two notes at the end. A fourth apart. 
// Not resolution. Just... arrival somewhere I can rest.
$: note("~ ~ ~ ~ ~ ~ ~ [g4 ~] ~ [d4 ~]")
  .slow(9)
  .sound("sine")
  .gain(0.06)
  .release(2.8)