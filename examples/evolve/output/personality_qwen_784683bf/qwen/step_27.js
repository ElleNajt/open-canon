setcps(114/60/4)

$: stack(
  // BASS: Transformed from acid stutter to a heavy, industrial techno drive
  // EVOLUTION: Simplified rhythm for maximum punch, increased distortion, removed FM
  note("f1")
    .sound("saw")
    .gain(0.75)
    .lpf(seq("150 1200 300 1800").slow(1))
    .lpq(8.5)
    .lpenv(0.8)
    .lpattack(0.001)
    .lpdecay(0.3)
    .lpsustain(0.1)
    .distort(0.85)
    .shape(0.9)
    .slide(0.12)
    .clip(0.15)
    .room(0.1)
    .size(0.3)
    .slow(1)
    .euclid(3, 4)
    .every(4, p => p.transpose(seq("-12 0 -5 -7").slow(2))), 
  
  // HARMONY: Reimagined as a dark, detuned string section
  // EVOLUTION: Switched from choir to saw waves, faster attack, minor 2nd tension
  note("cs5 d5 fs5 g5 as5 bb5 ds6 e6")
    .slow(16)
    .sound("saw")
    .gain(0.2)
    .attack(0.8)
    .decay(2.0)
    .sustain(0.15)
    .release(2.5)
    .clip(4)
    .pan(sine.range(0.1, 0.9).slow(32))
    .room(0.85)
    .size(0.9)
    .lpf(1800)
    .lpq(2.5)
    .detune(seq("-15 15 -10 10").slow(8))
    .delay(0.3)
    .delaytime(0.4)
    .delayfeedback(0.5)
    .every(8, p => p.transpose(seq("0 1 5 6").slow(16))),

  // LEAD: DROPPED. Replaced with a chaotic, bit-crushed glitch sequence
  // EVOLUTION: Extreme chopping and randomization, creating a digital malfunction aesthetic
  note("g5 b5 d6 f6 a6 c7")
    .slow(4)
    .sound("square")
    .gain(0.25)
    .attack(0.001)
    .decay(0.1)
    .sustain(0.0)
    .release(0.02)
    .hpf(3000)
    .lpq(6)
    .distort(0.6)
    .crush(6)
    .pan(rand.range(0.0, 1.0))
    .chop(64)
    .speed(seq("0.5 2.0 0.8 1.5").slow(2))
    .euclid(7, 16)
    .swing(0.5)
    .degradeBy(0.6)
    .every(2, p => p.rev().transpose(rand.range(-12, 12))),

  // PERCUSSION: Shifted to a complex, polyrhythmic industrial pattern
  // EVOLUTION: Added metallic textures, increased swing, introduced polyrhythms
  stack(
    s("bd*2 ~ bd ~")
      .slow(1)
      .gain(0.8)
      .clip(0.12)
      .lpf(90)
      .distort(0.4)
      .room(0.15), 
    s("~ sn*2 ~ sn")
      .slow(1)
      .gain(0.6)
      .clip(0.08)
      .hpf(1800)
      .lpf(6000)
      .room(0.35)
      .late(0.06), 
    s("hh*48")
      .slow(1)
      .gain(0.12)
      .clip(0.02)
      .hpf(9000)
      .lpf(18000)
      .room(0.15)
      .euclid(17, 48)
      .swing(0.55)
      .degradeBy(0.5), 
    s("mt*3 ~ mt ~")
      .slow(2)
      .gain(0.45)
      .clip(0.1)
      .hpf(2800)
      .lpf(8000)
      .room(0.25)
      .pan(rand.range(0.2, 0.8)),
    s("cb*3")
      .slow(8)
      .gain(0.35)
      .clip(0.18)
      .hpf(2200)
      .lpf(9000)
      .room(0.25)
      .pan(0.65)
  ),

  // SYNTH BASS: Replaced wandering line with a driving, repetitive sequencer
  // EVOLUTION: Simplified melody, increased repetition for hypnotic effect
  note("c2 eb2 g2 f2")
    .slow(2)
    .sound("pulse")
    .gain(0.35)
    .attack(0.008)
    .decay(0.4)
    .sustain(0.25)
    .release(0.15)
    .lpf(900)
    .lpq(5.5)
    .room(0.35)
    .size(0.6)
    .delay(0.25)
    .delaytime(0.3)
    .delayfeedback(0.45)
    .pan(sine.range(0.25, 0.75).slow(8))
    .every(8, p => p.transpose(seq("0 -7 -2 5").slow(4))),

  // ATMOSPHERE: Evolved into a deep, resonant drone
  // EVOLUTION: Removed sweeping filters, added static harmonic content with subtle movement
  note("g1")
    .slow(256)
    .sound("supersaw")
    .gain(0.15)
    .bpf(400)
    .bpq(8)
    .distort(0.3)
    .room(0.95)
    .size(0.98)
    .pan(perlin.range(0.0, 1.0).slow(256))
    .detune(sine.range(-30, 30).slow(64))
    .every(32, p => p.transpose(seq("0 12 7 5").slow(128))),

  // NEW: Granular Storm - Intense, evolving texture
  // Unexpected element: Highly processed noise with extreme modulation
  s("noise")
    .slow(2)
    .gain(0.1)
    .lpf(rand.range(800, 4000).slow(4))
    .lpq(3)
    .hpf(rand.range(1500, 8000).slow(8))
    .distort(0.7)
    .crush(5)
    .chop(256)
    .speed(seq("0.1 4.0 0.5 2.5").slow(4))
    .pan(rand.range(0.0, 1.0))
    .room(0.8)
    .size(0.9)
    .degradeBy(0.7)
    .euclid(11, 32)
    .sometimes(p => p.striate(32))
)