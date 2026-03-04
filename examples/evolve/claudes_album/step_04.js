// Bridge: Gm → Em
// Ascending bass fades out Gm, pivot on G and D, introduce Em coloring
setcps(80/60/4)

// G minor bass dissolving — filter closing down
$: note("g2 d2 bb1 g1")
  .slow(2)
  .sound("triangle")
  .lpf(sine.range(600, 150).slow(2))
  .gain(0.3)
  .room(0.6)
  .release(1)

// Pivot chord: G and D exist in both Gm and Em
// Move from Gm color (G Bb D) → Em color (E G B)
$: note("<[g3,bb3,d4] [g3,b3,d4] [e3,g3,b3] [e3,g3,b3,d4]>")
  .slow(2)
  .sound("supersaw")
  .attack(1.5)
  .release(2)
  .lpf(1000)
  .gain(0.15)
  .room(0.5)
  .detune(4)

// Sparse pulse emerging — preview of track 04's energy
$: note("~ e3 ~ d3")
  .sound("pulse")
  .lpf(sine.range(200, 800).slow(2))
  .gain(sine.range(0, 0.25).slow(2))
  .decay(0.3)
  .sustain(0)
