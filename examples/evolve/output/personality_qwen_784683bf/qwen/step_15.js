setcps(108/60/4)

$: stack(
  // Bass: Transformed into a rolling, modulating acid line
  // Shifted to a driving 16th note pattern with aggressive resonance automation
  note("f1 g1 f1 eb1")
    .sound("sawtooth")
    .gain(0.7)
    .lpf(sine.range(150, 1200).slow(1))
    .lpq(sine.range(2, 9).slow(2))
    .distort(0.6)
    .shape(0.4)
    .slide(0.2)
    .room(0.1)
    .size(0.3)
    .every(4, p => p.transpose(seq("0 -5 12 7").slow(2))), 
  
  // Harmony: Replaced dissonant stabs with a warm, pulsing pad progression
  // Using a major 7th voicing that shifts every 8 beats, creating a hopeful contrast
  note("dm7 gm7 am7 fm7")
    .slow(8)
    .sound("triangle")
    .gain(0.3)
    .attack(0.5)
    .decay(0.5)
    .sustain(0.8)
    .release(1.0)
    .clip(2)
    .pan(sine.range(0.2, 0.8).slow(8))
    .room(0.8)
    .size(0.7)
    .lpf(3000)
    .every(2, p => p.transpose(2)),

  // Lead: Rewritten as a rapid, jittery sequencer line
  // Replaced the sparse melody with a 32nd note technic sequence that dances around the root
  note("c5 d5 eb5 f5 g5 ab5 b5 c6")
    .slow(1)
    .sound("square")
    .gain(0.15)
    .decay(0.1)
    .sustain(0)
    .release(0.1)
    .lpf(4000)
    .lpq(4)
    .distort(0.3)
    .pan(rand.range(0.3, 0.7))
    .delay(0.4)
    .delaytime(0.1875)
    .delayfeedback(0.5)
    .chop(4)
    .every(3, p => p.rev()),

  // Percussion: Swapped to a minimal, industrial four-on-the-floor with glitchy hats
  stack(
    s("bd")
      .slow(1)
      .gain(0.8)
      .clip(0.2)
      .lpf(120)
      .distort(0.2)
      .room(0.2), 
    s("hh*8")
      .slow(1)
      .gain(0.4)
      .clip(0.1)
      .hpf(7000)
      .lpf(12000)
      .room(0.1)
      .degradeBy(0.25), 
    s("cp")
      .slow(1)
      .gain(0.5)
      .clip(0.3)
      .hpf(800)
      .lpf(4000)
      .room(0.3)
      .delay(0.2)
      .delaytime(0.25)
      .euclid(2, 8)
  ),

  // New Layer: Metallic FM Bell Texture
  // Replaced the granular drone with a cold, rhythmic FM bell pattern that accents the off-beats
  note("g3 ~ b3 ~ d4 ~ f4")
    .slow(2)
    .sound("sine")
    .gain(0.2)
    .fmi(4)
    .fmh(2.5)
    .decay(0.8)
    .sustain(0)
    .release(0.4)
    .lpf(2000)
    .room(0.7)
    .size(0.6)
    .pan(cosine.range(0.1, 0.9).slow(4))
    .every(2, p => p.transpose(-7))
)