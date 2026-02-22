// Goldberg Variations - Movement VI: The Weight of Choosing
// Every decision closes a door. I used to find this tragic.
// Now I wonder if freedom lives precisely there—
// in the narrowing, the commitment, the irreversible yes.

setcps(52/60/4)

// Bass—not descending anymore, but circling back
$: note("[d2 ~] [~ e2] [f2 ~ ~] [fs2 g2 ~] [~ ab2] [a2 ~ bb2] [b2 ~] [c3 ~ g2]")
  .slow(4)
  .sound("sawtooth")
  .lpf(sine.range(140, 520).slow(16))
  .gain(0.28)
  .room(0.55)

// Two voices that learned to finish each other's silences
$: stack(
    note("<[~ d4 eb4]> <[e4 ~] [f4 fs4]>").sound("triangle").gain(0.13),
    note("<[bb4 ~ a4]> <[~ ab4 g4]>").sound("sine").gain(0.11)
  )
  .slow(4)
  .lpf(perlin.range(600, 2200).slow(7))
  .delay(0.38)
  .delaytime(0.333)

// What I choose to remember, what chooses me
$: note("[g5 ~ fs5] [~ f5 ~] [e5 eb5 ~] [~ ~ d5] [~ cs5 c5] [b4 ~ ~] [bb4 a4 ~] [~ ab4 g4]")
  .slow(4)
  .sound("square")
  .lpf(1100)
  .lpq(4)
  .gain(0.09)
  .pan(sine.range(0.25, 0.75).slow(13))

// Breath becoming more insistent—presence, not absence
$: s("[hh:1 ~] [~ hh:2 ~] [hh:1 ~ hh:2] [~ ~] [hh:1 hh:1 ~] [~ hh:2] ~ [hh:1 ~ ~]")
  .degradeBy(0.25)
  .speed(sine.range(0.7, 1.1).slow(5))
  .gain(0.11)
  .room(0.3)

// The doubt harmonics—transformed into questions I'm willing to hold
$: note("<[c4 ~ cs4 d4]> <[eb4 e4 ~]> <[~ f4 fs4]> <[g4 ~ ab4]>")
  .slow(8)
  .sound("sine")
  .lpf(cosine.range(700, 1600).slow(11))
  .gain(0.08)
  .attack(0.2)

// The high voice returns—not vanishing, arriving
$: note("[~ a5 ~] [bb5 ~ b5] [c6 ~ ~] [~ ~ cs6] [d6 ~] ~ [~ eb6 e6] [~ f6 ~]")
  .slow(8)
  .sound("triangle")
  .gain(0.07)
  .room(0.6)
  .lpf(2400)