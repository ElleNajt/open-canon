setcps(114/60/4)

$: stack(
  // Bass: Transformed into a rolling, broken techno sequence
  // Swapped supersaw for a gritty pulse, added Euclidean rhythm and pitch slides
  note("f1")
    .sound("pulse")
    .gain(0.7)
    .lpf(seq("200 600 300 900").slow(1))
    .lpq(5)
    .lpenv(0.8)
    .lpattack(0.02)
    .lpdecay(0.3)
    .lpsustain(0.1)
    .distort(0.5)
    .shape(0.4)
    .slide(0.15)
    .clip(0.25)
    .room(0.1)
    .size(0.3)
    .slow(1)
    .euclid(5, 8)
    .every(2, p => p.transpose(seq("-12 0 -5 7").slow(2))), 
  
  // Harmony: Shifted from bell choir to a warm, drifting organ pad
  // Replaced sine with triangle, removed FM, added gentle chorus-like detune and slow filter movement
  note("d3 f3 a3 c4")
    .slow(16)
    .sound("triangle")
    .gain(0.2)
    .attack(0.5)
    .decay(2)
    .sustain(0.6)
    .release(4)
    .clip(8)
    .pan(sine.range(0.2, 0.8).slow(24))
    .room(0.6)
    .size(0.8)
    .lpf(sine.range(800, 3000).slow(32))
    .lpq(1.5)
    .detune(seq("3 -3 7 -7").slow(16))
    .every(4, p => p.transpose(seq("0 -2 -5 -9").slow(8))),

  // Lead: REIMAGINED. Now a rhythmic, percussive stab pattern
  // Switched to short saw bursts, heavy gating, and syncopated rests
  note("cs4 e4 g4 b4")
    .slow(2)
    .sound("sawtooth")
    .gain(0.3)
    .attack(0.01)
    .decay(0.1)
    .sustain(0.0)
    .release(0.05)
    .lpf(6000)
    .lpq(2)
    .crush(6)
    .distort(0.3)
    .pan(rand.range(0.1, 0.9))
    .delay(0.4)
    .delaytime(0.125)
    .delayfeedback(0.5)
    .euclid(9, 16)
    .swing(0.1)
    .every(2, p => p.ply(2)),

  // Percussion: SHIFTED to a minimal, hypnotic 4/4 groove with off-grid hats
  // Simplified kick pattern, added shuffled hi-hats, removed tom fills for space
  stack(
    s("bd*4")
      .slow(1)
      .gain(0.8)
      .clip(0.3)
      .lpf(100)
      .distort(0.2)
      .room(0.05), 
    s("sn~sn*2")
      .slow(1)
      .gain(0.55)
      .clip(0.15)
      .hpf(2000)
      .lpf(7000)
      .room(0.3)
      .late(0.0625), 
    s("hh*16")
      .slow(1)
      .gain(0.12)
      .clip(0.02)
      .hpf(8000)
      .lpf(16000)
      .room(0.1)
      .euclid(11, 16)
      .swing(0.2)
      .degradeBy(0.15), 
    s("cb*2")
      .slow(4)
      .gain(0.4)
      .clip(0.2)
      .hpf(500)
      .lpf(4000)
      .room(0.2)
      .delay(0.2)
      .delaytime(0.5)
  ),

  // New Layer: Unexpected Granular Texture - Stretched Vocal Fragments
  // Extreme time-stretching on vowel sounds, creating an ethereal background cloud
  s("ah_oh_ee")
    .slow(8)
    .gain(0.35)
    .lpf(1200)
    .hpf(200)
    .stretch(4)
    .speed(seq("0.8 1.2 0.9 1.1").slow(4))
    .pan(cosine.range(0.0, 1.0).slow(12))
    .room(0.8)
    .size(0.9)
    .every(2, p => p.rev())
    .degradeBy(0.3),

  // Atmospheric: EVOLVED into a pulsing, rhythmic drone
  // Using a square wave LFO to gate a bandpass filter on a deep sawtooth
  note("g2")
    .slow(16)
    .sound("sawtooth")
    .gain(0.15)
    .bpf(square.range(150, 2500).slow(8))
    .bpq(6)
    .distort(0.3)
    .room(0.7)
    .size(0.85)
    .pan(perlin.range(0.3, 0.7).slow(16))
    .every(4, p => p.transpose(seq("0 5 12 7").slow(8)))
)