// Goldberg Variations - Crystalline Fracture
// Bold shift: shifting to E major, broken rhythms, spectral harmonics

setcps(84/60/4)

// Bass becomes stuttering, syncopated punctuation
$: note("[e1 ~ e1 ~] [~ ~ gs1 gs1] [~ b1 ~ ~] [b0 ~ ~ b0]")
  .slow(4)
  .sound("sawtooth")
  .lpf(280)
  .gain(0.38)
  .attack(0.01)
  .decay(0.15)
  .sustain(0.2)
  .release(0.4)
  .room(0.5)

// Soprano transforms into wide-interval leaping melody
$: note("[gs6 ~ b4 ~] [e6 ~ ~ cs5] [fs5 ~ ds7 ~] [~ b5 e5 ~]")
  .slow(2)
  .sound("triangle")
  .lpf(5000)
  .gain(0.28)
  .attack(0.005)
  .release(1.2)
  .delay(0.45)
  .delaytime(0.25)
  .delayfeedback(0.55)
  .room(0.55)
  .pan(sine.range(0.25, 0.75).slow(5))

// Polyrhythm becomes 7-note descending whole tone cluster
$: note("[ds5 cs5 b4 a4 g4 f4 ds4]*7")
  .slow(8)
  .sound("pulse")
  .gain(0.14)
  .lpf(saw.range(800, 3200).slow(10))
  .lpq(5)
  .attack(0.08)
  .release(0.25)
  .detune(sine.range(-15, 15).slow(3))

// Replace hi-hats with pitched metallic resonance
$: note("[e7 b6 gs7 e6]*3")
  .slow(2)
  .sound("sine")
  .gain(0.09)
  .attack(0.001)
  .decay(0.08)
  .sustain(0)
  .release(0.6)
  .room(0.7)
  .hpf(2000)
  .degradeBy(0.35)

// New element: FM bass drone with slow wobble
$: note("e1")
  .slow(8)
  .sound("sine")
  .fm(sine.range(0.5, 4).slow(12))
  .fmh(2)
  .gain(0.22)
  .lpf(200)
  .attack(2)
  .release(3)

// New element: rhythmic chord stabs on offbeats
$: note("[~ <e4 gs4 b4> ~ ~] [~ ~ <cs4 e4 a4> ~]")
  .slow(2)
  .sound("supersaw")
  .gain(0.12)
  .lpf(1800)
  .lpq(2)
  .attack(0.01)
  .decay(0.2)
  .sustain(0.1)
  .release(0.3)
  .room(0.35)