setcps(94/60/4)

$: stack(
  // Bass: Transformed into a stuttering, broken-glass sequence
  // Swapped supersaw for a gritty pulse wave, added aggressive gating
  note("g1 f1 g1 eb1 d1 c1 g0 f1")
    .slow(1)
    .sound("pulse")
    .gain(0.7)
    .lpf(saw.range(300, 1800).slow(2))
    .lpq(6)
    .distort(0.6)
    .crush(4)
    .slide(0.15)
    .room(0.1)
    .every(4, p => p.striate(4)),
  
  // Harmony: Replaced the ghostly choir with a brittle, metallic gamelan revival
  // Using square waves and heavy bitcrushing for a digital shadow puppet feel
  note("cs5 ~ fs4 ~ b4 ~ e5")
    .slow(2)
    .sound("square")
    .gain(0.15)
    .decay(0.1)
    .sustain(0.05)
    .release(0.8)
    .chop(12)
    .speed(0.95)
    .detune(sine.range(-20, 20).slow(16))
    .pan(cosine.range(0, 1).slow(4))
    .room(0.6)
    .size(0.7)
    .crush(8)
    .delay(0.3)
    .delaytime(0.625),
  
  // Percussion: Swapped the shuffle for a rigid, marching industrial stomp
  // Heavy sidechain implication via envelope, highpass filtered to razor sharpness
  s("hh*16")
    .euclid(9, 16)
    .gain(0.4)
    .hpf(8000)
    .lpf(16000)
    .sometimes(p => p.chop(8).speed(rand.range(1.5, 2.0)))
    .every(2, p => p.rev())
    .swing(0.0),
  
  // Kick: Simplified to a heartbeat, leaving space for the new glitch layer
  s("bd*4")
    .gain(0.8)
    .clip(0.8)
    .distort(0.2)
    .lpf(100)
    .early(0.01),

  // New Layer: Granular radio static and fractured speech as a rhythmic texture
  // Replaced melodic speech with chaotic, chopped noise bursts
  s("static,noise,interference,signal")
    .slow(4)
    .gain(0.45)
    .hpf(2000)
    .lpf(tri.range(3000, 8000).slow(1))
    .chop(32)
    .speed(perlin.range(0.5, 1.8).slow(2))
    .room(0.2)
    .delay(0.1)
    .delaytime(0.125)
    .delayfeedback(0.7)
    .pan(sine.range(0.1, 0.9).slow(8))
    .distort(0.4)
    .crush(3)
)