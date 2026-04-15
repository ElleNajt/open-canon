setcps(78/60/4)

$: stack(
  // Bass: Transformed into a driving, filtered synth-bass with acid resonance
  note("g1 f1 eb1 d1 bb0 c0 d0 g0")
    .slow(2)
    .sound("sawtooth")
    .gain(0.5)
    .lpf(saw.range(200, 900).slow(4))
    .lpq(6)
    .distort(0.3)
    .crush(12)
    .room(0.2),
  
  // Harmony: Replaced piano with a glitchy, granular bell texture
  // Swapped the random transposition for a fixed dissonant chord structure
  note("gs4 ds4 as4")
    .slow(1)
    .sound("triangle")
    .gain(0.15)
    .decay(0.1)
    .sustain(0.1)
    .release(0.4)
    .chop(7)
    .speed(1.2)
    .pan(sine.range(0.2, 0.8).slow(3))
    .room(0.6)
    .size(0.9),
  
  // Percussion: Replaced simple cp with a complex, stuttering metallic rhythm
  s("hh*16")
    .degradeBy(0.3)
    .gain(0.25)
    .hpf(8000)
    .lpf(14000)
    .sometimes(p => p.chop(4).speed(2))
    .every(3, p => p.rev()),
  
  // Kick: Tightened the groove, removed distortion for a cleaner punch
  s("bd")
    .euclid(5, 8)
    .gain(0.7)
    .slow(1)
    .early(0.02)
    .clip(0.8),

  // New Layer: A wandering, spoken-word melody using Shabda
  // Creates an unexpected narrative element over the abstract textures
  s("echoes,drifting,far,away")
    .slow(4)
    .gain(0.4)
    .lpf(2000)
    .room(0.8)
    .delay(0.4)
    .delaytime(0.5)
    .delayfeedback(0.6)
    .pan(0.3)
)