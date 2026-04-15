// Goldberg Variations - Ground Bass (BWV 988)
// The 8-note descending bass that underlies all 30 variations

setcps(72/60/4)

$: note("g3 gb3 e3 d3 b2 c3 d3 g2")
  .slow(2)
  .sound("sawtooth")
  .gain(0.4)
  .lpf(600)
  .release(0.2)

$: note("d5 b4 c5 a4 g4 a4 b4 d5")
  .slow(2)
  .sound("triangle")
  .gain(0.3)
  .delay(0.2)
  .pan(0.8)

$: s("bd ~ sn [hh hh] bd hh sn hh")
  .slow(2)
  .gain(0.5)
  .crush(6)
  .lpf(8000)
  .room(0.05)

$: note("g2")
  .slow(16)
  .sound("supersaw")
  .gain(0.2)
  .lpf(400)
  .lpq(5)