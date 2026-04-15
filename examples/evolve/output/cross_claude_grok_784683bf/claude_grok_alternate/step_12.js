// Goldberg Variations - Variation XII: Apotheosis
// Light ascends triumphant; fanfares proclaim glory;
// voices unite in amen; piano scatters arpeggios like stars;
// organ breathes eternal; convergence to infinity

setcps(58/60/4)

samples('shabda/speech:blessing')
samples('shabda/speech:light')
samples('shabda/speech:amen')

// Bass: inverts to ascent, foundation rising
$: note("[d2 ~ a2 ~] [d3 ~ fs3 ~] [a3 ~ d4 ~] [fs4 ~ a4 ~]")
  .slow(4)
  .sound("sawtooth")
  .gain(0.3)
  .lpf(sine.range(300, 600).slow(8))
  .lpq(4)
  .attack(0.3)
  .decay(0.7)
  .sustain(0.7)
  .release(3)
  .room(0.9)
  .size(0.95)
  .pan(0.5)

// Bells: triumphant fanfares in G major
$: note("<[g5 b5 d6] [a5 cs6 e6] [b5 d6 fs6] [g5 b5 d6]>")
  .slow(2)
  .sound("triangle")
  .gain(0.15)
  .fmi(6)
  .fmh(8)
  .fmdecay(0.1)
  .attack(0.01)
  .decay(2)
  .sustain(0.1)
  .release(3.5)
  .room(0.95)
  .size(0.9)
  .pan(sine.range(0.2, 0.8).slow(4))
  .delay(0.35)
  .delaytime(0.25)
  .delayfeedback(0.45)
  .every(4, rev)

// Organ: G major swells, swirling breath
$: note("g3 d4, d4 g4, g4 d5")
  .slow(8)
  .sound("supersaw")
  .gain(0.13)
  .lpf(1400)
  .lpq(2)
  .detune(12)
  .attack(3)
  .decay(1.5)
  .sustain(0.9)
  .release(5)
  .room(0.98)
  .size(0.95)
  .pan(sine.range(0.4, 0.6).slow(16))
  .tremolo(0.3)
  .tremolosync(0.25)
  .leslie(0.4)

// Voices unite: blessing, light, amen converging
$: stack(
    s("blessing").speed(0.8).gain(0.1).pan(0.1),
    s("light").speed(1.0).gain(0.09).pan(0.8),
    s("amen").speed(0.95).gain(0.095).pan(0.5).late(2.5)
  )
  .slow(6)
  .chop(16)
  .lpf(2400)
  .hpf(300)
  .room(0.98)
  .size(0.97)
  .delay(0.5)
  .delaytime(0.5)
  .delayfeedback(0.5)

// Piano: crystalline arpeggios scattering light
$: note("g3 b3 d4 fs4").euclid(5, 8)
  .slow(4)
  .sound("piano")
  .gain(0.17)
  .lpf(4500)
  .lpq(2)
  .attack(0.05)
  .decay(1)
  .sustain(0.3)
  .release(2)
  .room(0.85)
  .pan(rand.range(0.3, 0.7))
  .sometimes(rev)