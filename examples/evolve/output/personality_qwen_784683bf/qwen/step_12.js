setcps(94/60/4)

$: stack(
  // Bass: Transformed into a heavy, industrial grind
  // Swapped the acid sequence for a static, dissonant power chord with extreme distortion
  note("g1")
    .sound("sawtooth")
    .gain(0.6)
    .lpf(120)
    .lpq(8)
    .distort(0.85)
    .shape(0.6)
    .room(0.2)
    .size(0.3)
    .every(4, p => p.transpose(12).lpf(400)), // Occasional harmonic shift
  
  // Harmony: Replaced ghostly sine with a metallic, bell-like choir
  // Using supersaw with heavy chorus effect simulated by detune and slow LFO
  note("cs5 fs4 b4 e5")
    .slow(8)
    .sound("supersaw")
    .gain(0.12)
    .attack(0.8)
    .decay(4)
    .sustain(0.2)
    .release(5)
    .detune(seq("0 15 -15 30").slow(4))
    .pan(sine.range(0.2, 0.8).slow(12))
    .room(0.9)
    .size(0.95)
    .delay(0.5)
    .delaytime(2.5)
    .delayfeedback(0.8)
    .hpf(800), // High pass to keep it airy

  // Lead: Rewritten as a frantic, broken arpeggio
  // Replaced the stuttering motif with a rapid Euclidean burst that accelerates
  note("c5 eb5 g5 c6")
    .slow(1)
    .fast(4)
    .sound("square")
    .gain(0.15)
    .decay(0.05)
    .sustain(0)
    .release(0.1)
    .chop(32)
    .speed(1.5)
    .euclid(5, 8)
    .transpose(seq("0 7 -5 2").slow(2))
    .lpf(tri.range(1000, 6000).slow(1))
    .lpq(4)
    .distort(0.4)
    .pan(rand.range(0.3, 0.7).slow(2))
    .delay(0.3)
    .delaytime(0.125)
    .every(3, p => p.rev()),

  // Percussion: Swapped metallic clatter for a deep, tribal kick pattern
  // Replaced the chaotic hats with a driving, polyrhythmic kick and snare
  stack(
    s("bd")
      .slow(1)
      .gain(0.7)
      .clip(0.4)
      .lpf(200)
      .distort(0.2)
      .room(0.4)
      .euclid(3, 4),
    s("sn cp")
      .slow(1)
      .gain(0.4)
      .clip(0.2)
      .hpf(800)
      .lpf(4000)
      .room(0.5)
      .delay(0.2)
      .delaytime(0.25)
      .euclid(2, 3) // Polyrhythmic snare
  ),

  // New Layer: Unexpected granular vocal storm
  // Using shabda samples with extreme chopping and random playback direction
  s("the_drum forever magnificent")
    .slow(2)
    .gain(0.18)
    .chop(64)
    .speed(seq("1 -1 2 -0.5").slow(1))
    .lpf(perlin.range(300, 2000).slow(4))
    .room(0.8)
    .size(0.7)
    .pan(cosine.range(0.0, 1.0).slow(8))
    .sometimes(p => p.striate(16).speed(4))
    .sometimes(p => p.transpose(12))
)