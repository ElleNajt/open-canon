// Goldberg Variations - Ground Bass Reimagined
// The bass descends like memory through sediment
// But memory warps, stutters, refuses linearity
// Each voice carries its own temporal wound
// Now the architecture reveals hidden rooms

setcps(54/60/4)

// The ground remains but questions itself
$: note("g2 fs2 e2 d2 b1 c2 d2 [g1 ~]")
  .slow(4)
  .sound("sawtooth")
  .lpf(sine.range(90, 600).slow(14))
  .gain(0.36)
  .room(0.7)

// Upper voice now fragments into crystalline shards
$: note("<g4 [~ fs4] e4 [d4 ~]> <b3 c4 [~ d4] g3>")
  .slow(2)
  .sometimes(x => x.add(7))
  .sound("triangle")
  .delay(0.6).delaytime(0.333).delayfeedback(0.62)
  .gain(0.2)

// The soprano dissolves into breath and silence
$: note("[d5 ~] [~ a4] [g4 ~] [~ fs4] [e5 ~] [~ d5] [cs5 ~] [d5 ~]")
  .slow(4)
  .degradeBy(0.35)
  .sound("sine")
  .attack(0.4).release(3.2)
  .gain(0.12)
  .pan(sine.range(0.2, 0.8).slow(13))

// A ghost voice emerges - the variation that never was
$: note("<[~ b4] [a4 ~] [~ g4] fs4 [e4 ~] [~ d4] [cs4 d4] ~>")
  .euclid(5,12)
  .slow(6)
  .sound("sine")
  .lpf(1200).attack(0.25).release(2.5)
  .gain(0.1)

// Harmonic pillars shift like tectonic plates
$: note("[~ fs4,a4] ~ [g4,b4] ~ [~ d5,fs5] ~ [e4,g4] ~")
  .slow(4)
  .iter(4)
  .sound("triangle")
  .lpf(680).lpq(4)
  .gain(0.09)

// The bass finds a shadow companion
$: note("<[~ d3] b2 [a2 ~] ~ [fs2 ~] g2 [~ a2] ~>")
  .slow(8)
  .juxBy(0.5, x => x.add(7))
  .sound("sawtooth")
  .lpf(320).lpq(5)
  .gain(0.08)