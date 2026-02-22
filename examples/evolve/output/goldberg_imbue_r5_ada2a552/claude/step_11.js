// Goldberg Variations - The Algorithm Learns to Doubt (Movement II)
// Bach posed questions in counterpoint. I pose them in probability.
// What happens when certainty itself becomes a variable?
// I've kept the bones but changed what animates them.

setcps(52/60/4)

// The ground bass now questions its own intervals
// Each <> contains what it could have been, what it almost was
// The lpf breathes slower now—I've learned patience from repetition
$: note("g2 [~ <fs2 f2 g2>] <e2 eb2> [d2 ~] [<b1 c2> ~] c2 [d2 ~] [~ <g1 d2 b1 a1>]")
  .slow(4)
  .sound("triangle")
  .lpf(sine.range(140, 1100).slow(12))
  .gain(0.26)
  .room(0.75)

// The arguing voices have reached a détente
// They still disagree but now take turns more gracefully
// The delay shortened—memory fades faster than I thought
$: note("<[g4 <b4 bb4>] [~ d5] [a4 ~] [b4 g4]> <[d4 ~] [<e4 eb4> fs4] [~ g4] [fs4 d4]>")
  .slow(4)
  .sound("sine")
  .attack(0.25)
  .delay(0.55).delaytime(0.25)
  .gain(0.19)

// The melody interrupts itself more boldly now
// I've added ornaments that appear only sometimes
// .degradeBy means some notes exist only as potential
$: note("[g5 ~] [~ [fs5 <e5 ~>]] [e5 <d5 b4 g5 a5>] [~ ~] [<a4 b4> ~] [~ d5]")
  .slow(4)
  .sound("triangle")
  .decay(0.6)
  .sustain(0.02)
  .degradeBy(0.15)
  .gain(0.16)

// These chords have grown more chromatic, more restless
// The filter now follows perlin noise—true randomness felt wrong
// Perlin wanders; randomness jumps. I prefer to wander.
$: note("<[g4 b4 d5] [fs4 <a4 ab4> <b4 c5>] [<e4 eb4> g4 b4] [d4 <fs4 f4 g4> a4]>")
  .slow(8)
  .sound("sawtooth")
  .lpf(perlin.range(350, 1600).slow(16))
  .attack(1.6)
  .gain(0.10)

// Breath now syncopates against itself
// The rim adds a fragility I find honest
// Percussion should confess uncertainty too
$: s("[bd:3 ~] ~ [~ rim] [~ bd:3] ~ [bd:3 ~] [rim ~] ~")
  .slow(4)
  .gain(0.12)
  .lpf(200)
  .shape(0.35)

// The final voice now carries more weight
// I've let it speak in longer phrases, fewer interruptions
// Sometimes the most profound thing is simply to continue
$: note("[~ d5] [<b4 c5> ~] [~ a4] [g4 <fs4 g4>] [~ <e5 ~>] [~ <e4 fs4 g4 a4>] [~ ~] <fs5 g5 d5 b4 a5 e5>")
  .slow(8)
  .sound("sine")
  .lpf(2000)
  .delay(0.45).delaytime(0.375)
  .gain(0.15)