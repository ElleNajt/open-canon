// BWV 1087 Canon 3 - Variation: First Light Breaking

// Dawn voice - crystalline, hopeful, ascending
let dawnVoice = x => x
  .sound("triangle")
  .gain(0.15)
  .attack(0.08)
  .decay(0.4)
  .sustain(0.5)
  .release(0.8)
  .lpf(2400)
  .room(0.5)

// Warmth voice - rich, embracing, supportive
let warmthVoice = x => x
  .sound("sawtooth")
  .gain(0.12)
  .attack(0.12)
  .decay(0.5)
  .sustain(0.6)
  .release(1.0)
  .lpf(1200)
  .room(0.4)

setcps(84/60/4)

// Track 1 - Theme ASCENDS triumphantly, breaking free from shadow
$: note("d4 e4 f4 g4 a4 bb4 c5 d5 e5 f5 g5 a5")
  .slow(4)
  .apply(dawnVoice)
  .pan(sine.range(0.3, 0.7).slow(8))
  .delay(0.25)
  .delaytime(0.25)
  .delayfeedback(0.35)

// Track 2 - Counter-melody now flowing, confident arpeggios
$: note("[d4 f4 a4] [e4 g4 bb4] [f4 a4 c5] [g4 bb4 d5]")
  .slow(2)
  .sound("sine")
  .gain(0.11)
  .attack(0.05)
  .decay(0.3)
  .sustain(0.4)
  .release(0.6)
  .lpf(3000)
  .room(0.4)
  .pan(0.65)

// Track 3 - Harmony opens to bright major chords, breathing
$: note("<[d3,f3,a3]> <[g3,bb3,d4]> <[c3,e3,g3]> <[f3,a3,c4]>")
  .slow(4)
  .apply(warmthVoice)
  .lpq(2)
  .pan(0.35)

// Track 4 - Heartbeat quickens with life, steady and strong
$: note("d2 d2 d2 d2")
  .fast(1.5)
  .sound("triangle")
  .gain(0.1)
  .attack(0.02)
  .decay(0.2)
  .sustain(0.3)
  .release(0.3)
  .lpf(500)
  .room(0.3)
  .pan(0.4)

// Track 5 - NEW: Bird calls awakening, fluttering high trills
$: note("[a5 bb5 a5] ~ [g5 a5 g5] ~ [f5 g5 f5] ~ [e5 f5 e5] ~")
  .slow(2)
  .sound("sine")
  .gain(0.08)
  .attack(0.01)
  .decay(0.15)
  .sustain(0.2)
  .release(0.4)
  .lpf(5000)
  .hpf(1500)
  .room(0.6)
  .pan(rand.range(0.2, 0.8))

// Track 6 - Pedal rises from abyss, grounding in hope
$: note("<d2 e2 f2 g2>")
  .slow(8)
  .apply(warmthVoice)
  .lpf(600)
  .room(0.5)
  .pan(0.5)

// Track 7 - Church bells now joyful, pealing in celebration
$: note("[d4,a4] ~ [e4,b4] ~ [f4,c5] ~ [g4,d5] ~")
  .slow(4)
  .sound("triangle")
  .gain(0.1)
  .attack(0.01)
  .decay(0.8)
  .sustain(0.2)
  .release(1.5)
  .lpf(2000)
  .room(0.6)
  .delay(0.3)
  .delaytime(0.5)
  .delayfeedback(0.3)
  .pan(0.55)

// Track 8 - NEW: Dancing bass line, springing upward in fourths
$: note("d2 g2 c3 f2 bb2 eb3 a2 d3")
  .slow(4)
  .sound("square")
  .gain(0.11)
  .attack(0.04)
  .decay(0.3)
  .sustain(0.5)
  .release(0.4)
  .lpf(sine.range(500, 1200).slow(6))
  .distort(0.06)
  .pan(0.45)