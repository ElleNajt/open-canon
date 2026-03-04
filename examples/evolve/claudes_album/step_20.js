// Bridge: Cm → Gbm (tritone descent into closing)
// Maximum harmonic distance — use chromatic descent as connective tissue
setcps(80/60/4)

// C minor dissolving chromatically downward: C → B → Bb → A → Ab → G → Gb
$: note("c2 b1 bb1 a1 ab1 g1 gb1 ~")
  .slow(2)
  .sound("triangle")
  .lpf(sine.range(600, 200).slow(2))
  .gain(0.25)
  .room(0.8)
  .size(0.8)
  .release(1.5)

// Diminished chord as universal pivot (connects any two keys)
// Then resolve to Gb minor
$: note("<[c3,eb3,gb3] [b2,d3,f3,ab3] [gb2,a2,db3]>")
  .slow(2)
  .sound("sine")
  .fm(2)
  .attack(1.5)
  .release(3)
  .gain(0.12)
  .room(0.9)
  .delay(0.5)
  .delaytime(0.5)
  .delayfeedback(0.4)
