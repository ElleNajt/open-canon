setcps(114/60/4)

$: stack(
  // Bass: Transformed from rolling techno to a stuttering, acidic acid-line
  // EVOLUTION: Removed FM growl, added 303-style resonance sweeps and rapid pitch slides
  note("f1")
    .sound("saw")
    .gain(0.65)
    .lpf(seq("200 1800 400 2200").slow(1))
    .lpq(9.5)
    .lpenv(0.9)
    .lpattack(0.002)
    .lpdecay(0.2)
    .lpsustain(0.05)
    .distort(0.7)
    .shape(0.8)
    .slide(0.08)
    .clip(0.12)
    .room(0.05)
    .size(0.2)
    .slow(1)
    .euclid(5, 8)
    .every(2, p => p.transpose(seq("-12 -5 0 -7").slow(2)))
    .sometimes(p => p.ply(2).speed(1.5)), 
  
  // Harmony: REIMAGINED as a ghostly, detuned choir pad
  // EVOLUTION: Switched from bells to vocal formants, slower attack, creating a "cathedral" feel
  note("cs5 fs5 as5 ds6")
    .slow(32)
    .sound("triangle")
    .gain(0.15)
    .attack(1.2)
    .decay(2.5)
    .sustain(0.1)
    .release(3.0)
    .clip(8)
    .pan(sine.range(0.0, 1.0).slow(48))
    .room(0.95)
    .size(0.98)
    .lpf(2000)
    .lpq(1.5)
    .vowel("a o u i")
    .delay(0.4)
    .delaytime(0.5)
    .delayfeedback(0.6)
    .every(8, p => p.transpose(seq("0 2 5 7").slow(32))),

  // Lead: DROPPED. Replaced with a frenetic, randomized metallic strike
  // EVOLUTION: Now a high-pitched, decaying percussion melody that dances around the beat
  note("g5 b5 d6 f6 a6")
    .slow(2)
    .sound("pulse")
    .gain(0.2)
    .attack(0.001)
    .decay(0.15)
    .sustain(0.0)
    .release(0.05)
    .hpf(4000)
    .lpq(8)
    .distort(0.4)
    .pan(rand.range(0.0, 1.0))
    .chop(32)
    .speed(seq("1.0 1.5 0.5 2.0").slow(1))
    .euclid(9, 16)
    .swing(0.4)
    .degradeBy(0.5)
    .every(3, p => p.rev().transpose(rand.range(-24, 0))),

  // Percussion: SHIFTED to a broken, glitchy breakbeat core
  // EVOLUTION: Replaced steady kick/snare with syncopated, cut-up samples
  stack(
    s("bd*2 ~ ~ bd")
      .slow(1)
      .gain(0.75)
      .clip(0.1)
      .lpf(80)
      .distort(0.3)
      .room(0.1), 
    s("~ sn ~ sn*2")
      .slow(1)
      .gain(0.55)
      .clip(0.05)
      .hpf(2000)
      .lpf(5000)
      .room(0.3)
      .late(0.04), 
    s("hh*32")
      .slow(1)
      .gain(0.08)
      .clip(0.01)
      .hpf(8000)
      .lpf(16000)
      .room(0.1)
      .euclid(13, 32)
      .swing(0.45)
      .degradeBy(0.4), 
    s("mt*2 ~ mt")
      .slow(2)
      .gain(0.4)
      .clip(0.08)
      .hpf(3000)
      .lpf(7000)
      .room(0.2)
      .pan(rand.range(0.1, 0.9)),
    s("cb*2")
      .slow(8)
      .gain(0.3)
      .clip(0.15)
      .hpf(2500)
      .lpf(8000)
      .room(0.2)
      .pan(0.7)
  ),

  // COMPOSER'S CHOICE: Piano DROPPED. 
  // REPLACED WITH: A wandering, monophonic synth bass counter-melody
  // MOOD SHIFT: From broken beauty to a driving, hypnotic sequencer line
  note("c2 d2 eb2 g2 f2 a2 bb2 c3")
    .slow(1)
    .sound("square")
    .gain(0.3)
    .attack(0.005)
    .decay(0.3)
    .sustain(0.2)
    .release(0.1)
    .lpf(800)
    .lpq(6)
    .room(0.3)
    .size(0.5)
    .delay(0.2)
    .delaytime(0.25)
    .delayfeedback(0.4)
    .pan(sine.range(0.3, 0.7).slow(4))
    .every(4, p => p.transpose(seq("0 -5 -2 3").slow(2)))
    .degradeBy(0.1),

  // Atmospheric: EVOLVED into a sweeping, cosmic wind
  // EVOLUTION: Removed ring mod, added extreme slow LFO to filter and pitch for "drifting" feel
  note("g2")
    .slow(128)
    .sound("supersaw")
    .gain(0.12)
    .bpf(sine.range(200, 3000).slow(64))
    .bpq(4)
    .distort(0.2)
    .room(0.9)
    .size(0.99)
    .pan(perlin.range(0.0, 1.0).slow(128))
    .detune(sine.range(-20, 20).slow(32))
    .every(16, p => p.transpose(seq("0 7 12 5").slow(64))),

  // NEW: Granular Rain - Stochastic texture replacing the noise burst
  // Unexpected element: Tiny, pitched grains of silence and sound
  s("noise")
    .slow(4)
    .gain(0.08)
    .lpf(rand.range(500, 3000).slow(2))
    .lpq(2)
    .hpf(rand.range(2000, 9000).slow(4))
    .distort(0.5)
    .crush(8)
    .chop(128)
    .speed(seq("0.2 3.0 0.8 1.2").slow(2))
    .pan(rand.range(0.0, 1.0))
    .room(0.7)
    .size(0.8)
    .degradeBy(0.6)
    .euclid(7, 16)
    .sometimes(p => p.striate(16))
)