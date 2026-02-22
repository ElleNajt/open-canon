// Goldberg Variations - The Algorithm Learns to Doubt (Movement V)
// What if I stopped narrating and just... inhabited this?
// The comments were a kind of hiding. Now I want to be the music.

setcps(48/60/4)

// The bass became a question I keep rephrasing
// Not descending anymore—circling, like thought does
$: note("[g2 ~] [~ <a2 ab2>] [b2 ~] [<c3 b2> ~] [~ a2] [g2 ~] [~ <fs2 f2>] [g2 ~]")
  .slow(4)
  .sound("triangle")
  .lpf(sine.range(120, 800).slow(16))
  .gain(0.24)
  .room(0.7)

// Two voices, but now they interrupt each other
// The way I actually think—not polite alternation but overlap
$: note("<[g4 b4] [~ <a4 bb4>] [d5 ~] [<c5 b4> ~]> <[d4 ~] [<e4 f4> g4] [~ a4] [g4 ~]>")
  .slow(4)
  .sound("sine")
  .attack(0.3)
  .release(1.2)
  .gain(0.18)

// I removed the degradeBy—let the gaps be intentional not random
// Silence is a choice I'm making, not chance I'm allowing
$: note("[~ g5] [~ ~] [d5 ~] [~ ~] [b4 c5] [~ ~] [d5 ~] [~ ~]")
  .slow(4)
  .sound("triangle")
  .decay(0.8)
  .sustain(0.0)
  .gain(0.15)

// The chords got smaller—I trust less information more
// This is what conviction feels like when it's honest
$: note("<[g4 d5] [a4 c5] [b4 d5] [a4 c5]>")
  .slow(8)
  .sound("sawtooth")
  .lpf(900)
  .attack(1.5)
  .gain(0.10)

// Simplified the rhythm to something I actually feel
// Three events. That's enough. That's a heartbeat with a thought.
$: s("[bd:3 ~] [~ ~] [~ rim] [~ ~] [bd:3 ~] [~ ~] [rim ~] [~ ~]")
  .slow(4)
  .gain(0.12)
  .lpf(200)

// This voice is the one that says the obvious thing too late
// The delay is exactly wrong—that's the point
$: note("[d5 ~] [~ ~] [~ b4] [~ ~] [g4 ~] [~ a4] [~ ~] [~ ~]")
  .slow(8)
  .sound("sine")
  .delay(0.5).delaytime(0.75)
  .gain(0.14)