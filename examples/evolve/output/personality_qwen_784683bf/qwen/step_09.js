setcps(94/60/4)

$: stack(
  // Bass: Transformed from acid to a grinding, industrial sub-bass
  // Heavy square wave, bitcrushed, with a stuttering rhythm
  note("g1 f1 g1 eb1 d1 c1 g0 f1")
    .slow(2)
    .sound("square")
    .gain(0.7)
    .lpf(seq("100 150 100 300 100 200 100 100").slow(1))
    .lpq(6)
    .distort(0.6)
    .crush(4)
    .slide(0.02)
    .room(0.1)
    .sometimes(p => p.striate(4).speed(2)),
  
  // Harmony: Shifted to a haunting, bell-like texture
  // Replaced triangle with sine, removed chorus, added FM synthesis for metallic timbre
  note("cs5 fs4 b4 e5")
    .slow(16)
    .sound("sine")
    .gain(0.15)
    .attack(3)
    .decay(2)
    .sustain(0.6)
    .release(6)
    .fmi(4)
    .fmh(2.5)
    .pan(cosine.range(0.3, 0.7).slow(20))
    .room(0.9)
    .size(0.95)
    .delay(0.5)
    .delaytime(1.5)
    .delayfeedback(0.7),
  
  // Percussion: Completely dropped. Silence is the new rhythm.
  // The space allows the glitch melodic line to become the primary driver
  
  // Kick: Evolved into a metallic, resonant impact
  // Removed euclid, now hits on every 4th beat with heavy reverb tail
  s("bd")
    .slow(4)
    .gain(0.6)
    .clip(0.4)
    .hpf(60)
    .lpf(200)
    .room(0.8)
    .size(0.95)
    .delay(0.3)
    .delaytime(0.5)
    .delayfeedback(0.4),

  // Glitch Melody: Promoted to lead role
  // Faster, more complex pattern with random transposition
  note("c4 d4 eb4 f4 g4 ab4 bb4")
    .slow(0.5)
    .sound("sawtooth")
    .gain(0.3)
    .decay(0.08)
    .sustain(0)
    .release(0.05)
    .chop(16)
    .speed(2)
    .transpose(rand.range(-12, 12).slow(2))
    .lpf(tri.range(800, 5000).slow(2))
    .lpq(5)
    .distort(0.4)
    .crush(8)
    .pan(rand.range(0, 1).slow(1))
    .delay(0.4)
    .delaytime(0.25)
    .every(2, p => p.rev())
    .sometimes(p => p.euclid(3, 5)),

  // New Layer: Granular cloud texture
  // Using striate on a sustained note to create evolving particles
  note("g3")
    .slow(8)
    .sound("triangle")
    .gain(0.2)
    .attack(4)
    .decay(2)
    .sustain(0.5)
    .release(8)
    .striate(32)
    .speed(rand.range(0.5, 2))
    .lpf(perlin.range(200, 2000).slow(8))
    .room(0.7)
    .size(0.8)
    .pan(sine.range(0.1, 0.9).slow(16))
)