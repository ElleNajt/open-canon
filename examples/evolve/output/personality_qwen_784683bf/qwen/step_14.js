setcps(94/60/4)

$: stack(
  // Bass: Shifted from static grind to a sliding, acidic sequencer
  // The mood moves from oppressive to hypnotic and driving
  note("g1")
    .sound("sawtooth")
    .gain(0.65)
    .lpf(sine.range(100, 800).slow(2))
    .lpq(6)
    .distort(0.7)
    .shape(0.5)
    .slide(0.4)
    .room(0.15)
    .size(0.4)
    .every(2, p => p.transpose(seq("0 12 7 -5").slow(4))), 
  
  // Harmony: Completely rewritten. Dropped the ethereal choir for a dissonant, rhythmic stab
  // Uses a minor 9th chord with a jagged envelope to cut through the mix
  note("cs4 e4 gs4 b4 d5")
    .slow(4)
    .sound("triangle")
    .gain(0.25)
    .attack(0.01)
    .decay(0.3)
    .sustain(0)
    .release(0.1)
    .clip(0.4)
    .pan(sine.range(0.1, 0.9).slow(6))
    .room(0.6)
    .size(0.5)
    .hpf(400)
    .every(3, p => p.rev()),

  // Lead: Transformed into a sparse, echoing question-and-answer motif
  // Replaced the frantic arpeggio with a melodic phrase that breathes
  note("c5 ~ eb5 g5 ~ c6 ~ g5")
    .slow(2)
    .sound("pulse")
    .gain(0.18)
    .decay(0.2)
    .sustain(0.1)
    .release(0.3)
    .lpf(2500)
    .lpq(3)
    .distort(0.2)
    .pan(0.5)
    .delay(0.6)
    .delaytime(0.375)
    .delayfeedback(0.7)
    .sometimes(p => p.transpose(-12)),

  // Percussion: Swapped the tribal kick for a broken, glitchy breakbeat feel
  // using Euclidean rhythms on hi-hats and a syncopated snare
  stack(
    s("bd")
      .slow(1)
      .gain(0.75)
      .clip(0.3)
      .lpf(180)
      .distort(0.3)
      .room(0.3)
      .euclid(5, 16), // More complex kick pattern
    s("hh*4")
      .slow(1)
      .gain(0.35)
      .clip(0.1)
      .hpf(6000)
      .lpf(9000)
      .room(0.2)
      .euclid(9, 16), // Busy, shuffling hats
    s("sn cp")
      .slow(1)
      .gain(0.45)
      .clip(0.25)
      .hpf(900)
      .lpf(5000)
      .room(0.4)
      .delay(0.15)
      .delaytime(0.125)
      .euclid(3, 8) // Off-beat snare
  ),

  // New Layer: Granular Textural Drone
  // Replaced the vocal storm with a deep, evolving texture using reversed piano samples
  s("piano")
    .slow(8)
    .gain(0.12)
    .speed(-1)
    .begin(0.2)
    .end(0.9)
    .chop(32)
    .lpf(perlin.range(200, 1500).slow(8))
    .room(0.9)
    .size(0.95)
    .delay(0.4)
    .delaytime(4)
    .delayfeedback(0.6)
    .pan(cosine.range(0.0, 1.0).slow(16))
    .sometimes(p => p.striate(8).speed(2))
)