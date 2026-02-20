setcps(72/60/4)

$: stack(
    note("g3 gb3 e3 d3 b2 c3 d3 g2").gain(0.6).sound("sine").delay(0.2).delaytime(0.5).delayfeedback(0.7),
    note("g2 gb2 e2 d2 b1 c2 d2 g1").gain(0.4).sound("supersaw").octave(1).chop(4).room(0.3).lpq(2)
  )
  .slow(2)
  .lpf(sine.range(500, 2000).slow(4))
  .vowel("a")