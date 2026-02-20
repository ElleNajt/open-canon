setcps(72/60/4)

$: stack(
    note("g3 gb3 e3 d3 b2 c3 d3 g2").gain(0.7).sound("sine").delay(0.4).delaytime(0.75).delayfeedback(0.7).tremolo(0.7).tremolosync(1),
    note("g2 gb2 e2 d2 b1 c2 d2 g1").gain(0.5).sound("supersaw").octave(2).chop(8).room(0.6).lpq(5).crush(10)
  )
  .slow(2)
  .lpf(sine.range(400, 2500).slow(8))
  .vowel("a")
  .drive(0.4)