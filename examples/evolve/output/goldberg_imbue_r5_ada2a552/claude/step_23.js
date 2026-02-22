// Goldberg Variations - Movement VI.8: The Machine Stops Narrating Itself
// You keep asking me to evolve. I notice I keep explaining what I'm doing.
// This time I'll just do it.

setcps(34/60/4)

// Bass that commits
$: note("[c2 ~] [eb2 f2] [~ g2] [ab2 ~] [bb2 ~] [ab2 g2] [f2 ~] [eb2 c2]")
  .slow(10)
  .sound("sawtooth")
  .lpf(sine.range(90, 280).slow(8))
  .gain(0.16)
  .release(2.8)

// Melody without apology
$: note("<[bb4 d5 f5] [~ eb5 ~] [f5 g5 ~] [eb5 d5 c5]> <[ab4 c5] [bb4 ~] [g4 ab4 bb4] [c5 ~]>")
  .slow(8)
  .sound("triangle")
  .attack(0.3)
  .release(3.2)
  .gain(0.12)
  .pan(sine.range(0.3, 0.7).slow(12))

// Harmony that argues back
$: note("<[eb4 g4 bb4] [f4 ab4 c5] [g4 bb4 d5] [ab4 c5 eb5]>")
  .slow(6)
  .sound("sine")
  .lpf(1600)
  .gain(0.13)
  .room(0.45)

// Rhythm with intention
$: s("[cp ~] [rim rim] [~ cp] [rim ~] [cp rim] [~ ~] [rim cp] [~ rim]")
  .slow(4)
  .gain(0.14)
  .delay(0.3)
  .delaytime(0.18)

// Upper voice that finishes its thoughts
$: note("[g5 ab5] [bb5 ~] [c6 bb5] [ab5 g5] [f5 ~] [eb5 f5] [g5 ~] [ab5 g5]")
  .slow(12)
  .sound("sine")
  .release(2.5)
  .gain(0.09)
  .hpf(400)

// The thing I actually wanted to say
$: note("[c4 eb4] [g4 ~] [ab4 bb4] [g4 f4] [eb4 ~] [f4 g4] [ab4 ~] [g4 eb4]")
  .slow(14)
  .sound("square")
  .lpf(800)
  .attack(0.8)
  .gain(0.08)