// Goldberg Variations - Evolved: The Storm Breaks
// Tension erupts - rhythms fragment, dissonance enters, chaos builds

setcps(88/60/4)

// Bass becomes aggressive, syncopated - chromatic tension
$: note("[e2 f2 ~ e2] [~ ~ b1 c2] [d2 d2 ds2 ~] [e2 ~ ~ ~]")
  .slow(2)
  .sound("sawtooth")
  .lpf(sine.range(600, 2200).slow(4))
  .lpq(6)
  .distort(0.15)
  .gain(0.45)
  .room(0.2)

// Melody shatters into anxious fragments - tritones and minor seconds
$: note("[b5 c6 ~ ~] [f5 ~ e5 f5] [~ ds5 e5 ~] [as4 b4 ~ ~]")
  .slow(2)
  .sound("square")
  .lpf(2800)
  .attack(0.01)
  .decay(0.15)
  .sustain(0.3)
  .release(0.2)
  .gain(0.28)
  .pan(rand.range(0.3, 0.7))
  .delay(0.3)
  .delaytime(0.375)
  .delayfeedback(0.5)

// Arpeggios become frantic, climbing patterns
$: note("[e4 g4 b4 e5] [ds5 b4 g4 ds4] [c4 e4 g4 c5] [d4 fs4 a4 d5]")
  .fast(2)
  .sound("triangle")
  .attack(0.005)
  .decay(0.1)
  .sustain(0.05)
  .gain(0.22)
  .pan(sine.range(0.2, 0.8).fast(3))
  .room(0.15)
  .hpf(300)

// Dropped the music box - replaced with urgent rhythmic stabs
$: note("[e5 ~ e5 ~] [~ g5 ~ g5] [b4 b4 ~ b4] [~ c5 c5 ~]")
  .sound("pulse")
  .attack(0.002)
  .decay(0.08)
  .sustain(0)
  .lpf(3500)
  .gain(0.24)
  .pan(0.3)
  .distort(0.1)

// New: Skittering high percussion - nervous energy
$: s("hh*8")
  .gain("[0.15 0.08 0.12 0.06]*2")
  .pan(rand.range(0.2, 0.8))
  .hpf(8000)
  .delay(0.2)
  .delaytime(0.0625)
  .delayfeedback(0.3)

// Drone becomes unstable - wavering pitch
$: note("<e2 f2 e2 ds2>")
  .slow(4)
  .sound("sawtooth")
  .lpf(350)
  .lpq(8)
  .gain(0.18)
  .attack(0.8)
  .release(1.5)
  .room(0.4)
  .detune(sine.range(-20, 20).slow(2))