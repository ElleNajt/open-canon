setcps(114/60/4)

$: stack(
  // Bass: Transformed into a rolling, broken techno sequence
  // Swapped supersaw for a gritty pulse, added Euclidean rhythm and pitch slides
  note("f1")
    .sound("pulse")
    .gain(0.7)
    .lpf(seq("200 600 300 900").slow(1))
    .lpq(5)
    .lpenv(0.8)
    .lpattack(0.02)
    .lpdecay(0.3)
    .lpsustain(0.1)
    .distort(0.5)
    .shape(0.4)
    .slide(0.15)
    .clip(0.25)
    .room(0.1)
    .size(0.3)
    .slow(1)
    .euclid(5, 8)
    .every(2, p => p.transpose(seq("-12 0 -5 7").slow(2))), 
  
  // Harmony: Shifted to a darker, minor 9th suspension with slow rotation
  // Replaced triangle with a softer sine, added slow FM for warmth, wider pan
  note("ds3 fs3 as3 cs4 es4")
    .slow(32)
    .sound("sine")
    .gain(0.25)
    .attack(1.5)
    .decay(4)
    .sustain(0.7)
    .release(6)
    .clip(16)
    .pan(sine.range(0.1, 0.9).slow(48))
    .room(0.7)
    .size(0.9)
    .lpf(sine.range(600, 2500).slow(64))
    .lpq(2)
    .fmi(0.5)
    .fmh(0.5)
    .detune(seq("5 -5 10 -10").slow(32))
    .every(8, p => p.transpose(seq("0 -3 -7 -12").slow(16))),

  // Lead: REIMAGINED. Now a glitchy, stuttering arpeggio
  // Switched to short triangle bursts, heavy bitcrush, and random pitch jumps
  note("cs4 e4 g4 b4")
    .slow(4)
    .sound("triangle")
    .gain(0.35)
    .attack(0.005)
    .decay(0.08)
    .sustain(0.0)
    .release(0.03)
    .lpf(5000)
    .lpq(3)
    .crush(4)
    .distort(0.4)
    .pan(rand.range(0.0, 1.0))
    .delay(0.3)
    .delaytime(0.1875)
    .delayfeedback(0.6)
    .euclid(7, 12)
    .swing(0.15)
    .every(3, p => p.ply(3).transpose(rand.range(0, 12))),

  // Percussion: SHIFTED to a broken, syncopated IDM groove
  // Complex kick pattern, shuffled metal hats, added random rimshots
  stack(
    s("bd*2 ~ bd*2")
      .slow(1)
      .gain(0.8)
      .clip(0.25)
      .lpf(90)
      .distort(0.3)
      .room(0.1), 
    s("sn ~ sn*2 ~")
      .slow(1)
      .gain(0.6)
      .clip(0.1)
      .hpf(1800)
      .lpf(6000)
      .room(0.4)
      .late(0.08), 
    s("hh*32")
      .slow(1)
      .gain(0.1)
      .clip(0.015)
      .hpf(9000)
      .lpf(18000)
      .room(0.15)
      .euclid(13, 32)
      .swing(0.25)
      .degradeBy(0.2), 
    s("rim*4")
      .slow(2)
      .gain(0.45)
      .clip(0.1)
      .hpf(3000)
      .lpf(8000)
      .room(0.3)
      .pan(rand.range(0.2, 0.8))
  ),

  // New Layer: Granular Rain - Chopped and reversed vocal fragments
  // Extreme chopping on vowel sounds, creating a rhythmic texture
  s("ah_oh_ee")
    .slow(2)
    .gain(0.4)
    .lpf(2000)
    .hpf(300)
    .chop(16)
    .speed(seq("0.5 1.5 0.7 1.3").slow(2))
    .pan(cosine.range(0.0, 1.0).slow(8))
    .room(0.6)
    .size(0.7)
    .every(4, p => p.rev().transpose(5))
    .degradeBy(0.25),

  // Atmospheric: EVOLVED into a deep, modulating drone
  // Using a slow sine LFO to sweep a bandpass filter on a supersaw
  note("g2")
    .slow(32)
    .sound("supersaw")
    .gain(0.2)
    .bpf(sine.range(100, 2000).slow(16))
    .bpq(8)
    .distort(0.2)
    .room(0.8)
    .size(0.95)
    .pan(perlin.range(0.2, 0.8).slow(32))
    .every(8, p => p.transpose(seq("0 7 12 5").slow(16)))
)