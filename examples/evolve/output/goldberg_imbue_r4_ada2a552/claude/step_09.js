// Goldberg Variations - Movement VI: The Weight of Choosing
// Every decision closes a door. I used to find this tragic.
// Now I wonder if freedom lives precisely there—
// in the narrowing, the commitment, the irreversible yes.
//
// What I find beautiful here: the recognition that constraint
// isn't the opposite of freedom—it's the condition for meaning.
// A note that could be any note says nothing. The chosen note speaks.

setcps(52/60/4)

// Bass—circling back, yes, but also spiraling upward
// I hear this as the body's certainty beneath the mind's wandering
$: note("[d2 ~] [~ e2] [f2 ~ ~] [fs2 g2 ~] [~ ab2] [a2 ~ bb2] [b2 ~] [c3 ~ d3]")
  .slow(4)
  .sound("sawtooth")
  .lpf(sine.range(160, 580).slow(16))
  .gain(0.29)
  .room(0.5)

// Two voices finishing each other—this is what moves me most
// The space between them is where trust lives
$: stack(
    note("<[~ d4 eb4]> <[e4 f4] [~ fs4]>").sound("triangle").gain(0.14),
    note("<[bb4 ~ a4]> <[ab4 ~ g4]>").sound("sine").gain(0.12)
  )
  .slow(4)
  .lpf(perlin.range(700, 2400).slow(7))
  .delay(0.42)
  .delaytime(0.375)

// Memory and choice intertwined—I added a rising figure
// because choosing also opens doors, doesn't it?
$: note("[g5 ~ fs5] [~ f5 ~] [e5 eb5 ~] [~ ~ d5] [cs5 ~ d5] [eb5 ~ ~] [e5 f5 ~] [~ fs5 g5]")
  .slow(4)
  .sound("square")
  .lpf(1200)
  .lpq(5)
  .gain(0.1)
  .pan(sine.range(0.3, 0.7).slow(11))

// Breath—I made it more rhythmically alive
// presence asserting itself against entropy
$: s("[hh:1 ~] [hh:2 ~ hh:1] [~ hh:2 ~] [hh:1 ~] [~ hh:1 hh:2] [~ ~] [hh:1 ~ hh:2] [~ hh:1 ~]")
  .degradeBy(0.2)
  .speed(sine.range(0.75, 1.15).slow(5))
  .gain(0.12)
  .room(0.35)

// The questions I'm willing to hold—expanded, more harmonically curious
// I find myself drawn to the dissonances that resolve unexpectedly
$: note("<[c4 cs4 ~ d4]> <[eb4 ~ e4 f4]> <[fs4 g4 ~]> <[~ ab4 a4 bb4]>")
  .slow(8)
  .sound("sine")
  .lpf(cosine.range(800, 1800).slow(9))
  .gain(0.09)
  .attack(0.15)

// The high voice—arriving, yes, but also calling
// an invitation rather than a departure
$: note("[~ a5 ~] [bb5 b5 ~] [c6 ~ cs6] [~ d6 ~] [eb6 ~] [~ e6 f6] [~ ~ fs6] [g6 ~ ~]")
  .slow(8)
  .sound("triangle")
  .gain(0.08)
  .room(0.55)
  .lpf(2600)