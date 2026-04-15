setcps(114/60/4)

$: stack(
  // Bass: Transformed into a rhythmic, gated industrial pulse
  // Removed the slow slide, added aggressive gating and a stepped filter
  note("f1")
    .sound("pulse")
    .gain(0.75)
    .lpf(seq("100 200 400 300").slow(1))
    .lpq(8)
    .distort(0.6)
    .shape(0.5)
    .fmi(2)
    .fmh(0.75)
    .clip(0.25)
    .room(0.1)
    .size(0.3)
    .slow(4/3)
    .every(2, p => p.transpose(seq("-12 0 -5 7").slow(2))), 
  
  // Harmony: Replaced glassy cloud with a dark, dissonant organ pad
  // Shifted to a minor 7th chord structure with heavy vibrato and chorus effect via detune
  note("d3 f3 a3 c4")
    .slow(4)
    .sound("sawtooth")
    .gain(0.15)
    .attack(0.8)
    .decay(2)
    .sustain(0.6)
    .release(2)
    .clip(4)
    .pan(sine.range(0.2, 0.8).slow(8))
    .room(0.6)
    .size(0.7)
    .lpf(800)
    .lpq(4)
    .detune(seq("10 -10 15 -15").slow(4))
    .every(4, p => p.transpose(seq("0 -2 -4 -7").slow(4))),

  // Lead: REPLACED. Now a chaotic, bitcrushed melodic sequence
  // Using a Euclidean rhythm for the notes themselves, high distortion
  note("cs4 e4 g4 b4")
    .slow(2)
    .sound("triangle")
    .gain(0.2)
    .decay(0.1)
    .sustain(0.1)
    .release(0.1)
    .lpf(3000)
    .lpq(5)
    .crush(6)
    .distort(0.8)
    .pan(rand.range(0.1, 0.9))
    .delay(0.4)
    .delaytime(0.125)
    .delayfeedback(0.6)
    .euclid(5, 8)
    .swing(0.2)
    .every(2, p => p.rev()),

  // Percussion: Shifted to a broken, half-time feel with displaced kicks
  stack(
    s("bd*2")
      .slow(2)
      .gain(0.7)
      .clip(0.3)
      .lpf(90)
      .distort(0.3)
      .room(0.15)
      .late(0.0625), 
    s("sn~sn*2")
      .slow(1)
      .gain(0.45)
      .clip(0.15)
      .hpf(1600)
      .lpf(5000)
      .room(0.35)
      .late(0.125)
      .degradeBy(0.25), 
    s("hh*8")
      .slow(1)
      .gain(0.2)
      .clip(0.05)
      .hpf(6500)
      .lpf(13000)
      .room(0.1)
      .euclid(5, 8)
      .degradeBy(0.15), 
    s("cp")
      .slow(4)
      .gain(0.3)
      .clip(0.2)
      .hpf(450)
      .lpf(2800)
      .room(0.35)
      .delay(0.25)
      .delaytime(0.5)
      .euclid(3, 8)
  ),

  // New Layer: Unexpected Speech Sample Texture - Glitched Phonemes
  // Chopped into granular fragments, creating a rhythmic texture rather than words
  s("sys_tem_br_eak_chaos_ord_er")
    .slow(2)
    .gain(0.35)
    .lpf(1200)
    .hpf(500)
    .chop(16)
    .speed(seq("0.5 1.5 2.0 0.75").slow(2))
    .pan(cosine.range(0.1, 0.9).slow(4))
    .room(0.4)
    .size(0.5)
    .every(2, p => p.rev())
    .degradeBy(0.3),

  // Atmospheric: DROPPED granular noise. ADDED a metallic, resonant drone
  // Using a high-Q bandpass filter sweeping across a sine wave to create a theremin-like wail
  note("g2")
    .slow(16)
    .sound("sine")
    .gain(0.12)
    .bpf(sine.range(400, 2000).slow(8))
    .bpq(8)
    .distort(0.3)
    .room(0.8)
    .size(0.9)
    .pan(perlin.range(0.3, 0.7).slow(12))
    .every(4, p => p.transpose(seq("0 2 4 5").slow(8)))
)