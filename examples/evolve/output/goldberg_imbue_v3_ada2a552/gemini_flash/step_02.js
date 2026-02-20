setcps(72/60/4)

$: stack(
    note("g3 gb3 e3 d3 b2 c3 d3 g2").gain(0.7).sound("sine").delay(0.3).delaytime(0.75).delayfeedback(0.8).tremolo(0.5).tremolosync(2),
    note("g2 gb2 e2 d2 b1 c2 d2 g1").gain(0.5).sound("supersaw").octave(1).chop(8).room(0.5).lpq(3).crush(8)
  )
  .slow(3)
  .lpf(sine.range(300, 3000).slow(6))
  .vowel("o")
  .drive(0.2)