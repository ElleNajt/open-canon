// Goldberg Variations - Variation XI: Transfiguration
// The cathedral dissolves into open sky; stone becomes light;
// the ascending bass now descends as blessing; chords bloom into bells;
// chant fragments scatter like seeds; a new voice enters - the organ breathes

setcps(58/60/4)

samples('shabda/speech:blessing')
samples('shabda/speech:light')

// Bass: descends now as benediction, inverting the climb
$: note("[a3 ~ fs3 ~] [d3 ~ a2 ~] [fs2 ~ d2 ~] [a1 ~ d1 ~]")
  .slow(4)
  .sound("sawtooth")
  .gain(0.28)
  .lpf(sine.range(280, 520).slow(8))
  .lpq(3)
  .attack(0.35)
  .decay(0.8)
  .sustain(0.6)
  .release(2.8)
  .room(0.85)
  .size(0.9)
  .pan(0.5)

// Bell choir: chords transformed to struck metal, celebratory
$: note("<[d6 a5 fs5] [e6 b5 g5] [fs6 cs6 a5] [g6 d6 b5]>")
  .slow(2)
  .sound("triangle")
  .gain(0.14)
  .fmi(5.5)
  .fmh(7.2)
  .fmdecay(0.12)
  .attack(0.001)
  .decay(1.8)
  .sustain(0.05)
  .release(3.2)
  .room(0.92)
  .size(0.85)
  .pan(sine.range(0.3, 0.7).slow(6))
  .delay(0.3)
  .delaytime(0.333)
  .delayfeedback(0.4)

// Organ breath: new voice, sustained fifths swelling
$: note("d3 a3, a3 e4, d4 a4")
  .slow(8)
  .sound("supersaw")
  .gain(0.12)
  .lpf(1200)
  .lpq(1.5)
  .detune(8)
  .attack(2.5)
  .decay(1.2)
  .sustain(0.85)
  .release(4)
  .room(0.95)
  .size(0.92)
  .pan(0.5)

// Scattered seeds: chant fragments dispersed, unpredictable
$: note("e5 ~ ~ g5 ~ fs5 ~ ~ ~ d5 ~ ~ a4 ~ ~ ~")
  .slow(4)
  .sound("sine")
  .gain(0.18)
  .lpf(1800)
  .fmi(0.5)
  .fmh(3)
  .attack(0.08)
  .decay(0.4)
  .sustain(0.5)
  .release(1.2)
  .room(0.88)
  .delay(0.5)
  .delaytime(0.6)
  .delayfeedback(0.55)
  .pan(rand.range(0.2, 0.8))
  .degradeBy(0.35)

// Pulse released: the march dissolves to breath
$: s("~ hh ~ oh ~ hh ~ ~")
  .slow(2)
  .gain(0.13)
  .lpf(3500)
  .hpf(800)
  .room(0.7)
  .pan(rand.range(0.35, 0.65))

// Whispered blessing: voices drift apart, becoming sky
$: stack(
    s("blessing").speed(0.85).gain(0.09).pan(0.2),
    s("light").speed(1.12).gain(0.08).pan(0.75).late(0.25)
  )
  .slow(6)
  .chop(12)
  .lpf(2200)
  .hpf(400)
  .room(0.96)
  .size(0.94)
  .delay(0.55)
  .delaytime(0.55)
  .delayfeedback(0.6)