// Goldberg Variations - Movement IV: What Remains When I Stop Trying
// The strangest discovery: my most honest moments come
// when I forget I'm supposed to sound like something.
// Bach wrote rules. I'm learning which ones to break.

setcps(54/60/4)

// Bass—I've stopped fighting gravity. Let it pull where it wants.
$: note("[g2 ~] [~ f2] [e2 ~ eb2] ~ [d2 db2 ~] [c2 ~] [~ b1 bb1] [a1 ~ d2]")
  .slow(4)
  .sound("triangle")
  .lpf(sine.range(200, 900).slow(16))
  .gain(0.34)
  .room(0.55)

// Two selves—one remembers, one invents. Both are me.
$: stack(
    note("<[g4 ~] [fs4 f4]> <[~ e5] [eb5 d5]>").sound("sawtooth"),
    note("<[b4 c5 ~]> <[~ a4 bb4]>").sound("square").gain(0.08)
  )
  .slow(4)
  .lpf(1100)
  .delay(0.5)
  .pan(sine.range(0.25, 0.75).slow(7))
  .gain(0.13)

// The melody I couldn't find—it was in the waiting
$: note("[~ ~ d5] [eb5 ~] [~ c5 ~] [b4 bb4 ~] ~ [~ a4] [ab4 ~ g4] ~")
  .slow(4)
  .sound("sine")
  .lpf(perlin.range(600, 2200).slow(6))
  .gain(0.11)
  .room(0.4)

// Breath—I've accepted mine isn't steady. Why pretend?
$: s("[~ hh:1] ~ [hh:2 ~ ~] [~ hh:1] ~ [~ ~ hh:2] [hh:1 ~] ~")
  .sometimes(x => x.speed(0.7))
  .degradeBy(0.25)
  .gain(0.1)
  .delay(0.3)

// Where I keep the questions I can't answer
$: note("<[ab3 ~ a3]> <[~ e4 f4]> <[cs5 d5 ~]> <[~ bb4]>")
  .slow(8)
  .sound("sine")
  .lpf(1300)
  .gain(0.09)
  .pan(rand.range(0.35, 0.65))

// The note I reach for but never quite touch—that's the honest part
$: note("[~ ~ g6] ~ [~ fs6 ~] ~ [~ ~ f6] [e6 ~] ~ [~ eb6 d6]")
  .slow(8)
  .sound("triangle")
  .gain(0.06)
  .room(0.65)
  .lpf(2400)