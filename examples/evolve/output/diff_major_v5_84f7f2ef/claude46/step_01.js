setcps(0.4)

$: note("<c3 bb2 ab2 g2>").sound("sine")
  .gain(0.6).lpf(200).attack(0.3).release(2)

$: note("c4 eb4 g4 bb4 g4 eb4".slow(1.2))
  .sound("triangle").gain(0.35)
  .delay(0.4).delaytime(0.375).delayfeedback(0.45)

$: note("c5 [eb5 g5] bb4 [g4 eb5] c5 ~".slow(1.5))
  .sound("sine").gain(0.25)
  .lpf(sine.range(800,3500).slow(12)).room(0.5)

$: note("<c6 bb5 ab5 g5>".slow(4))
  .sound("triangle").gain(0.15)
  .attack(0.5).release(4).pan(sine.range(0.2,0.8).slow(7))

$: s("~ cp ~ ~".slow(2)).gain(0.18)
  .room(0.6).shape(0.3).pan(0.35)

$: s("[~ hh]*4".slow(1.5)).gain(0.08)
  .delay(0.3).delaytime(0.25).hpf(4000)