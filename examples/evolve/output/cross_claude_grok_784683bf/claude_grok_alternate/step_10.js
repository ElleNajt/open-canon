// Goldberg Variations - Variation X: Coalescing Light
// Ruins stir with purpose; fractured tones fuse into radiant chords;
// faltering pulse firms to resolve; whispers lift as choral vow;
// bass ascends cathedral steps; chant spirals toward the spire's peak

setcps(54/60/4)

samples('shabda/speech:cathedral')
samples('shabda/speech:remember')

// Bass: ascends the ruins, building inexorably
$: note("[d2 ~ fs2 ~] [a2 ~ d3 ~] [fs3 ~ a3 ~] [d4 ~ fs4 ~]")
  .slow(4)
  .sound("triangle")
  .gain(0.3)
  .lpf(320)
  .lpq(4)
  .attack(0.25)
  .decay(0.6)
  .sustain(0.7)
  .release(2.2)
  .room(0.8)
  .size(0.88)
  .pan(0.5)

// Plainchant: spirals upward in hope, modal brightness piercing gloom
$: note("e4 g4 fs4 e4 d4 fs4 g4 fs4 e4 ~ d5 b4 a4 g4 fs4 e4 d4")
  .slow(8)
  .sound("sine")
  .gain(0.24)
  .lpf(sine.range(1000, 2200).slow(12))
  .fmi(0.35)
  .fmh(2.8)
  .attack(0.18)
  .decay(0.35)
  .sustain(0.65)
  .release(1.6)
  .room(0.88)
  .size(0.82)
  .delay(0.35)
  .delaytime(0.4)
  .delayfeedback(0.45)
  .pan(0.48)

// Luminous chords: shards reform as glowing harmonic pillars
$: note("d5 fs5 a5 d6, e5 gs5 b5 e6, fs5 a5 cs6 fs6, g5 b5 d6 g6")
  .slow(4)
  .sound("sine")
  .gain(0.16)
  .lpf(2500)
  .fmi(2.2)
  .fmh(4.5)
  .fmdecay(0.45)
  .attack(0.01)
  .decay(0.9)
  .sustain(0.15)
  .release(1.4)
  .room(0.82)
  .pan(rand.range(0.25, 0.75))
  .degradeBy(0.25)

// Steadied march: euclidean resolve from scattered beats
$: s("bd").euclid(5,16)
  .slow(2)
  .gain(0.22)
  .lpf(1100)
  .room(0.75)
  .shape(0.08)
  .pan(0.52)

// Choral vow: speech harmonized in thirds and fifths, reborn affirmation
$: stack(
    s("cathedral").speed(1).gain(0.11).pan(0.3),
    s("cathedral").speed(1.26).gain(0.105).pan(0.55),
    s("cathedral").speed(1.5).gain(0.11).pan(0.8)
  )
  .slow(8)
  .chop(20)
  .lpf(1600)
  .hpf(350)
  .room(0.93)
  .size(0.88)
  .delay(0.45)
  .delaytime(0.45)
  .delayfeedback(0.55)
  .degradeBy(0.25)