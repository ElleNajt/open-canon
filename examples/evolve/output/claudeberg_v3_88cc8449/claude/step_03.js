// Goldberg Variations - Ethereal Ascension
// Bold shift: floating polyrhythms, lydian brightness, textural dissolution

setcps(72/60/4)

// Bass dissolves into sustained drones with octave leaps
$: note("[b1 ~ ~ b2] [~ fs2 ~ ~] [e2 ~ e3 ~] [~ ~ b1 ~]")
  .slow(4)
  .sound("triangle")
  .lpf(400)
  .gain(0.4)
  .attack(0.3)
  .release(1.2)
  .room(0.6)

// Soprano transforms into shimmering arpeggiated cascade
$: note("[b5 ds6 fs6 gs6] [fs6 e6 ds6 b5] [cs6 e6 gs6 b6] [a6 fs6 ds6 e6]")
  .slow(2)
  .sound("sine")
  .lpf(3500)
  .gain(0.25)
  .attack(0.01)
  .decay(0.2)
  .sustain(0.3)
  .release(0.8)
  .delay(0.35)
  .delaytime(0.375)
  .delayfeedback(0.4)
  .room(0.45)

// Pulsing fifths become a 5-against-4 polyrhythmic halo
$: note("[b4 cs5 ds5 e5 fs5]*5")
  .slow(4)
  .sound("sawtooth")
  .gain(0.15)
  .lpf(cosine.range(600, 2400).slow(6))
  .lpq(3)
  .attack(0.05)
  .release(0.3)
  .pan(sine.range(0.2, 0.8).slow(3))

// Drop the ghostly harmonics, add granular percussion texture
$: s("hh*16")
  .gain(rand.range(0.06, 0.18))
  .speed(rand.range(0.7, 2.5))
  .pan(rand)
  .hpf(6000)
  .room(0.3)
  .degradeBy(0.5)

// New element: deep sub-bass pulse on unexpected beats
$: note("[~ ~ b0 ~] [~ fs1 ~ ~] [e1 ~ ~ ~] [~ ~ ~ b0]")
  .slow(4)
  .sound("sine")
  .gain(0.35)
  .lpf(120)
  .attack(0.01)
  .release(0.5)