// Goldberg Variations - Reimagined with Counterpoint
// Adding a soprano line that dances above the bass

setcps(72/60/4)

// Original ground bass - now with warmth
$: note("g3 fs3 e3 d3 b2 c3 d3 g2")
  .slow(2)
  .sound("sawtooth")
  .lpf(800)
  .gain(0.4)
  .room(0.2)

// New soprano melody - ornamental and flowing
$: note("[b5 a5] [g5 fs5] [e5 fs5 g5] [a5 g5 fs5] [d5 e5 fs5] [e5 d5] [c5 d5 e5 fs5] [g5 ~ ~]")
  .slow(2)
  .sound("triangle")
  .gain(0.35)
  .attack(0.01)
  .release(0.3)
  .room(0.25)
  .delay(0.15)
  .delaytime(0.375)

// Inner voice - gentle pulse
$: note("<g4 d4> <fs4 a3> <e4 b3> <d4 a3> <b3 g3> <c4 e3> <d4 fs3> <d4 g3>")
  .slow(2)
  .sound("sine")
  .gain(0.25)
  .lpf(1200)
  .room(0.15)