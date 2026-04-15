setcps(114/60/4)

$: stack(
  // Bass: Transformed into a rolling, modulating acid line
  // Now playing a hypnotic 3-note motif with increased slide and rhythmic displacement
  note("f1 g1 eb1")
    .sound("sawtooth")
    .gain(0.75)
    .lpf(sine.range(120, 900).slow(2))
    .lpq(sine.range(3, 8).slow(4))
    .distort(0.5)
    .shape(0.3)
    .slide(0.3)
    .room(0.1)
    .size(0.3)
    .late(0.125)
    .every(4, p => p.transpose(seq("0 -7 12").slow(2))), 
  
  // Harmony: Replaced with a shifting, suspended drone texture
  // Moving from major 7ths to suspended 4ths that resolve unpredictably
  note("cs3 fs3 bs3")
    .slow(16)
    .sound("triangle")
    .gain(0.25)
    .attack(1.0)
    .decay(2.0)
    .sustain(0.6)
    .release(2.0)
    .clip(4)
    .pan(sine.range(0.3, 0.7).slow(16))
    .room(0.9)
    .size(0.8)
    .lpf(2500)
    .every(4, p => p.transpose(seq("0 2 -2 5").slow(4))),

  // Lead: Rewritten as a cascading arpeggio with irregular timing
  // Using a minor scale run with swung timing and occasional reversals
  note("c5 d5 eb5 f5 g5 ab5 b5 c6")
    .slow(2)
    .sound("square")
    .gain(0.12)
    .decay(0.15)
    .sustain(0)
    .release(0.15)
    .lpf(3500)
    .lpq(3)
    .distort(0.2)
    .pan(rand.range(0.2, 0.8))
    .delay(0.3)
    .delaytime(0.125)
    .delayfeedback(0.4)
    .chop(8)
    .swing(0.3)
    .every(5, p => p.rev()),

  // Percussion: Shifted to a broken beat pattern with displaced snares
  stack(
    s("bd")
      .slow(1)
      .gain(0.7)
      .clip(0.25)
      .lpf(100)
      .distort(0.15)
      .room(0.15), 
    s("sn*4")
      .slow(1)
      .gain(0.45)
      .clip(0.15)
      .hpf(1500)
      .lpf(5000)
      .room(0.2)
      .late(0.0625)
      .degradeBy(0.2), 
    s("hh*16")
      .slow(1)
      .gain(0.35)
      .clip(0.08)
      .hpf(6000)
      .lpf(11000)
      .room(0.1)
      .euclid(11, 16)
      .degradeBy(0.15), 
    s("cp")
      .slow(2)
      .gain(0.4)
      .clip(0.2)
      .hpf(600)
      .lpf(3500)
      .room(0.25)
      .delay(0.15)
      .delaytime(0.375)
      .euclid(3, 8)
  ),

  // New Layer: Detuned FM Pluck Sequence
  // Replaced the bell texture with a rhythmic, detuned pluck pattern
  note("e3 ~ g3 ~ b3 ~ d4")
    .slow(4)
    .sound("sine")
    .gain(0.18)
    .fmi(3.5)
    .fmh(1.8)
    .detune(seq("-15 0 15 0").slow(4))
    .decay(0.6)
    .sustain(0)
    .release(0.3)
    .lpf(1800)
    .room(0.6)
    .size(0.5)
    .pan(cosine.range(0.2, 0.8).slow(8))
    .every(3, p => p.transpose(-5)),

  // Unexpected Addition: Granular Noise Swells
  // A textural layer of chopped noise that rises and falls in density
  s("hh*32")
    .slow(8)
    .gain(0.15)
    .hpf(5000)
    .lpf(12000)
    .chop(16)
    .speed(seq("0.5 1 2 1").slow(8))
    .pan(rand.range(0, 1))
    .distort(0.3)
    .room(0.7)
    .size(0.85)
    .every(4, p => p.rev())
    .degradeBy(0.4)
)