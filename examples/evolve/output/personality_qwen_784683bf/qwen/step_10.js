setcps(94/60/4)

$: stack(
  // Bass: Transformed into a pulsating, rhythmic drone
  // Shifted from stuttering to a driving 8th note pulse with heavy resonance
  note("g1 f1 g1 eb1 d1 c1 g0 f1")
    .slow(2)
    .sound("sawtooth")
    .gain(0.6)
    .lpf(seq("80 120 80 250 80 180 80 80").slow(1))
    .lpq(8)
    .distort(0.5)
    .crush(6)
    .slide(0.01)
    .room(0.2)
    .sometimes(p => p.striate(8).speed(1.5)),
  
  // Harmony: Replaced with a shifting, dissonant cluster
  // Moved from bell-like sine to a detuned pulse wave with slow phasing
  note("cs5 fs4 b4 e5")
    .slow(8)
    .sound("pulse")
    .gain(0.12)
    .attack(2)
    .decay(3)
    .sustain(0.4)
    .release(4)
    .detune(seq("0 15 -15 30").slow(4))
    .phaser(0.5)
    .phaserdepth(0.8)
    .pan(cosine.range(0.2, 0.8).slow(12))
    .room(0.6)
    .size(0.8)
    .delay(0.3)
    .delaytime(2.0)
    .delayfeedback(0.6),
  
  // Lead: Completely rewritten as a chaotic, descending arpeggio
  // Replaced the glitch melody with a rapid, minor-scale run that accelerates
  note("c5 bb4 ab4 g4 f4 eb4 d4 c4")
    .slow(1)
    .fast(2)
    .sound("triangle")
    .gain(0.25)
    .decay(0.05)
    .sustain(0)
    .release(0.02)
    .chop(32)
    .speed(seq("1 2 4 2").slow(2))
    .transpose(0)
    .lpf(saw.range(500, 4000).slow(4))
    .lpq(4)
    .distort(0.2)
    .pan(rand.range(0.1, 0.9).slow(2))
    .delay(0.5)
    .delaytime(0.125)
    .every(3, p => p.rev())
    .sometimes(p => p.euclid(5, 8)),

  // Percussion: Introduced a complex, polyrhythmic metallic hit
  // Added a new layer of high-pitched, truncated noise bursts
  s("hh")
    .slow(1)
    .gain(0.15)
    .clip(0.1)
    .hpf(2000)
    .lpf(8000)
    .room(0.4)
    .size(0.5)
    .delay(0.2)
    .delaytime(0.3)
    .delayfeedback(0.3)
    .euclid(5, 16)
    .sometimes(p => p.striate(4).speed(3)),

  // New Layer: Deep, granular floor rumble
  // Using a low sine wave with heavy striation and random speed for texture
  note("c2")
    .slow(16)
    .sound("sine")
    .gain(0.3)
    .attack(1)
    .decay(4)
    .sustain(0.8)
    .release(2)
    .striate(16)
    .speed(rand.range(0.2, 0.8))
    .lpf(perlin.range(100, 800).slow(12))
    .room(0.9)
    .size(0.9)
    .pan(sine.range(0.0, 1.0).slow(24))
)