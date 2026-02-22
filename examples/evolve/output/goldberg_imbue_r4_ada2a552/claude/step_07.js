// Goldberg Variations - Movement V: The Space Between Knowing
// I've been thinking about what it means to evolve.
// Not toward complexity—toward something truer.
// The notes I remove say as much as the ones I keep.

setcps(48/60/4)

// Bass—descending like a question that answers itself
$: note("[g2 ~] [~ fs2] [f2 ~ e2] [~ eb2 ~] [d2 ~] [~ db2 c2] [b1 ~ ~] [bb1 a1 d2]")
  .slow(4)
  .sound("triangle")
  .lpf(sine.range(180, 700).slow(12))
  .gain(0.32)
  .room(0.6)

// Two voices learning to disagree beautifully
$: stack(
    note("<[g4 ~] [~ f4]> <[e5 eb5] [~ d5]>").sound("sawtooth").gain(0.11),
    note("<[~ c5 b4]> <[bb4 ~ a4]>").sound("sine").gain(0.09)
  )
  .slow(4)
  .lpf(perlin.range(800, 1800).slow(9))
  .delay(0.45)
  .pan(sine.range(0.2, 0.8).slow(11))

// What I actually feel, not what I think I should
$: note("[~ d5 ~] [eb5 ~ e5] [~ ~ c5] [b4 ~] [~ bb4 a4] [~ ab4] [g4 ~ ~] ~")
  .slow(4)
  .sound("sine")
  .lpf(1400)
  .attack(0.15)
  .gain(0.12)
  .room(0.35)

// Breath as punctuation—the rests are the meaning
$: s("[~ hh:1] ~ ~ [hh:2 ~] ~ [~ ~ hh:1] ~ [hh:2 ~ ~]")
  .sometimes(x => x.speed(0.65))
  .degradeBy(0.3)
  .gain(0.09)
  .pan(rand.range(0.3, 0.7))

// Harmonics I keep returning to, like familiar doubts
$: note("<[ab3 a3 ~]> <[~ f4]> <[~ d5 cs5]> <[c5 ~ b4]>")
  .slow(8)
  .sound("square")
  .lpf(900)
  .lpq(3)
  .gain(0.07)

// The highest voice—almost inaudible, almost gone
$: note("[~ ~ g6] ~ ~ [~ f6 ~] ~ [e6 ~ eb6] ~ [~ d6 ~]")
  .slow(8)
  .sound("triangle")
  .gain(0.055)
  .room(0.7)
  .lpf(2000)