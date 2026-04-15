setcps(114/60/4)

$: stack(
  // Bass: Mutated into a jagged, syncopated acid line
  // Swapped pulse for supersaw, added aggressive filter envelope and pitch bends
  note("f1")
    .sound("supersaw")
    .gain(0.8)
    .lpf(seq("150 800 400 1200").slow(1))
    .lpq(6)
    .lpenv(0.9)
    .lpattack(0.05)
    .lpdecay(0.4)
    .lpsustain(0.2)
    .distort(0.7)
    .shape(0.6)
    .fmi(3)
    .fmh(1.5)
    .clip(0.2)
    .room(0.05)
    .size(0.2)
    .slow(2)
    .every(2, p => p.transpose(seq("-12 -5 0 7").slow(2))), 
  
  // Harmony: Transformed from dark pad to a shimmering, aleatoric bell choir
  // Replaced saw with sine, added heavy FM for metallic texture, randomized voicing
  note("d3 f3 a3 c4")
    .slow(8)
    .sound("sine")
    .gain(0.18)
    .attack(0.1)
    .decay(4)
    .sustain(0.1)
    .release(3)
    .clip(6)
    .pan(sine.range(0.1, 0.9).slow(12))
    .room(0.8)
    .size(0.9)
    .lpf(4000)
    .lpq(2)
    .fmi(seq("2 4 6 8").slow(4))
    .fmh(1.414)
    .detune(seq("5 -5 12 -12").slow(8))
    .every(4, p => p.transpose(seq("0 -3 -7 -10").slow(4))),

  // Lead: REIMAGINED. Now a stuttering, glitch-hop motivic fragment
  // Switched to square wave, extreme bitcrushing, and erratic Euclidean patterns
  note("cs4 e4 g4 b4")
    .slow(4)
    .sound("square")
    .gain(0.25)
    .decay(0.05)
    .sustain(0.0)
    .release(0.05)
    .lpf(5000)
    .lpq(3)
    .crush(4)
    .distort(0.9)
    .pan(rand.range(0.0, 1.0))
    .delay(0.6)
    .delaytime(0.1875)
    .delayfeedback(0.7)
    .euclid(7, 16)
    .swing(0.3)
    .every(2, p => p.palindrome()),

  // Percussion: SHIFTED to a complex, polyrhythmic breakbeat feel
  // Added ghost notes, varied velocities, and disjointed timing
  stack(
    s("bd*2")
      .slow(2)
      .gain(0.75)
      .clip(0.25)
      .lpf(80)
      .distort(0.4)
      .room(0.1)
      .late(0.03125), 
    s("sn~sn*2")
      .slow(1)
      .gain(0.5)
      .clip(0.1)
      .hpf(1800)
      .lpf(6000)
      .room(0.4)
      .late(0.09375)
      .degradeBy(0.3), 
    s("hh*16")
      .slow(1)
      .gain(0.15)
      .clip(0.03)
      .hpf(7000)
      .lpf(14000)
      .room(0.15)
      .euclid(9, 16)
      .degradeBy(0.2), 
    s("mt ht")
      .slow(4)
      .gain(0.35)
      .clip(0.15)
      .hpf(300)
      .lpf(3500)
      .room(0.25)
      .delay(0.3)
      .delaytime(0.25)
      .euclid(5, 16)
  ),

  // New Layer: Unexpected Vocal Chop - Abstracted Syllables
  // Granular synthesis on phonemes, creating a percussive melodic instrument
  s("ah_oh_ee_yeh")
    .slow(2)
    .gain(0.4)
    .lpf(1800)
    .hpf(300)
    .chop(32)
    .speed(seq("1.0 2.0 0.5 1.5").slow(2))
    .pan(cosine.range(0.2, 0.8).slow(6))
    .room(0.5)
    .size(0.6)
    .every(2, p => p.rev())
    .degradeBy(0.25),

  // Atmospheric: EVOLVED into a sweeping, resonant filter sweep drone
  // Using a low-frequency triangle wave to modulate a high-Q bandpass filter on a sawtooth
  note("g2")
    .slow(32)
    .sound("sawtooth")
    .gain(0.1)
    .bpf(tri.range(200, 3000).slow(16))
    .bpq(9)
    .distort(0.2)
    .room(0.9)
    .size(0.95)
    .pan(perlin.range(0.2, 0.8).slow(20))
    .every(4, p => p.transpose(seq("0 3 7 12").slow(16)))
)