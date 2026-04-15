// Goldberg Variations - Variation I: Canon at the Unison
// Transforming the ground bass into an imitative two-voice canon

setcps(72/60/4)

// Original bass line - now pizzicato-like with rhythmic variation
$: note("g3 [fs3 ~] e3 d3 [b2 a2] c3 d3 g2")
  .slow(2)
  .sound("triangle")
  .gain(0.4)
  .decay(0.2)
  .release(0.1)
  .room(0.2)

// Canonic voice - enters late, inverted contour, dancing above
$: note("d5 e5 fs5 g5 [a5 b5] g5 fs5 d5")
  .slow(2)
  .late(0.5)
  .sound("sine")
  .gain(0.35)
  .lpf(2200)
  .attack(0.02)
  .decay(0.3)
  .release(0.4)
  .room(0.25)
  .delay(0.15)
  .delaytime(0.375)
  .delayfeedback(0.3)

// Ornamental figuration - baroque trills and turns
$: note("[d6 e6]*2 [fs6 g6 fs6 e6] [d6 ~] [b5 c6 d6 ~]")
  .slow(2)
  .sound("sine")
  .gain(0.2)
  .lpf(3500)
  .attack(0.01)
  .decay(0.15)
  .release(0.2)
  .pan(sine.range(0.3, 0.7).slow(4))