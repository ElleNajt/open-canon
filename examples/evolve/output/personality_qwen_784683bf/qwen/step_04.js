setcps(82/60/4)

$: stack(
  // Bass: Shifted to a menacing, sliding acid line with higher resonance
  note("g1 ~ f1 ~ eb1 ~ d1 ~ bb0 ~ c0 ~ d0 ~ g0")
    .slow(1)
    .sound("sawtooth")
    .gain(0.6)
    .lpf(saw.range(300, 1200).slow(2))
    .lpq(9)
    .distort(0.45)
    .crush(8)
    .slide(0.15)
    .room(0.1),
  
  // Harmony: Completely replaced with a shattered, metallic gamelan texture
  // Using 'mt' (metal) sound with extreme chopping for a bell-like decay
  note("cs5 fs4 b4 e5")
    .slow(2)
    .sound("mt")
    .gain(0.2)
    .decay(0.05)
    .sustain(0)
    .release(0.8)
    .chop(16)
    .speed(perlin.range(0.5, 1.5).slow(4))
    .pan(sine.range(0.1, 0.9).slow(2))
    .room(0.7)
    .size(0.5)
    .delay(0.3)
    .delaytime(0.375),
  
  // Percussion: Swapped steady hats for a broken, polyrhythmic glitch
  s("hh*24")
    .euclid(7, 24)
    .gain(0.3)
    .hpf(6000)
    .lpf(18000)
    .sometimes(p => p.chop(8).speed(0.5))
    .every(4, p => p.rev())
    .swing(0.4),
  
  // Kick: Changed to a stomping industrial four-on-the-floor with sidechain feel
  s("bd*4")
    .gain(0.8)
    .clip(0.6)
    .distort(0.2)
    .lpf(150)
    .early(0.01),

  // New Layer: Aggressive, rhythmic speech fragments instead of wandering echoes
  // Creating a call-and-response with the bassline
  s("break,system,fall,reset")
    .slow(1)
    .gain(0.5)
    .lpf(tri.range(500, 3000).slow(1))
    .chop(4)
    .room(0.4)
    .delay(0.2)
    .delaytime(0.25)
    .delayfeedback(0.4)
    .pan(rand.range(0.2, 0.8))
)