// BWV 1087 Canon 9 - Variation: The Eye of the Storm

// The moment of stillness within chaos - fragile, crystalline
let glassOrgan = x => x
  .sound("sine")
  .gain(0.14)
  .attack(0.15)
  .decay(0.6)
  .sustain(0.7)
  .release(1.2)
  .fmi(2)
  .fmh(3)
  .fmdecay(0.8)
  .lpf(1800)
  .room(0.7)
  .delay(0.3)
  .delaytime(0.333)
  .delayfeedback(0.4)

// Voice becomes a whisper - intimate, confessional
let whisperVoice = x => x
  .sound("triangle")
  .gain(0.10)
  .attack(0.08)
  .decay(0.3)
  .sustain(0.5)
  .release(0.6)
  .lpf(1400)
  .lpq(2)
  .room(0.5)

setcps(54/60/4)

// Track 1 - Melody ASCENDING now - hope emerging from grief
$: note("g3 a3 bb3 c4 d4 eb4 f4 g4 a4 bb4 c5 d5")
  .slow(3)
  .apply(glassOrgan)
  .pan(0.45)
  .juxBy(0.4, x => x.late(0.25).transpose(12).gain(0.06))

// Track 2 - Harmony resolves to MAJOR - light breaking through
$: note("<[g3,b3,d4] [c3,e3,g3] [d3,fs3,a3] [g2,b2,d3]>")
  .slow(4)
  .apply(whisperVoice)
  .pan(0.55)
  .every(4, x => x.transpose(12).gain(0.07))

// Track 3 - Heartbeat becomes BREATH - slow, meditative
$: note("[g2 ~ ~ ~] [~ ~ d2 ~] [~ g2 ~ ~] [~ ~ ~ d2]")
  .slow(4)
  .sound("sine")
  .gain(0.16)
  .attack(0.2)
  .decay(0.4)
  .sustain(0.6)
  .release(0.8)
  .lpf(120)
  .shape(0.1)

// DROPPED: Thunder percussion - silence has weight

// NEW: Music box memory - nostalgic, distant, slightly broken
$: note("d6 ~ b5 ~ g5 ~ d5 ~ ~ ~ g5 ~ b5 ~ d6 ~")
  .slow(2)
  .sound("square")
  .gain(0.06)
  .attack(0.001)
  .decay(0.2)
  .sustain(0.1)
  .release(0.5)
  .lpf(2800)
  .lpq(4)
  .room(0.8)
  .pan(sine.range(0.3, 0.7).slow(8))
  .degradeBy(0.15)

// Choir becomes HUMMING - wordless comfort, warmth
$: note("[g3,d4,g4] ~ [a3,d4,fs4] ~ [b3,d4,g4] ~ ~ ~")
  .slow(8)
  .sound("sine")
  .gain(0.11)
  .attack(0.5)
  .decay(0.4)
  .sustain(0.85)
  .release(2)
  .fmi(0.5)
  .fmh(2)
  .lpf(900)
  .room(0.8)
  .pan(0.5)

// Wind becomes SIGHING - gentle exhale, release
$: note("g4 ~ fs4 ~ g4 ~ a4 ~ g4 ~ ~ ~")
  .slow(6)
  .sound("sine")
  .gain(0.07)
  .attack(0.4)
  .decay(0.6)
  .sustain(0.4)
  .release(1.2)
  .lpf(600)
  .pan(perlin.range(0.3, 0.7).slow(6))
  .room(0.6)

// Bass becomes DRONE - grounding, fundamental
$: note("g1 ~ ~ ~ ~ ~ ~ ~ d2 ~ ~ ~ ~ ~ ~ ~")
  .slow(8)
  .sound("sawtooth")
  .gain(0.14)
  .attack(0.8)
  .decay(1)
  .sustain(0.9)
  .release(2)
  .lpf(80)
  .shape(0.15)

// Bells become CHIMES - gentle, wind-touched
$: note("d6 ~ g6 ~ ~ b5 ~ ~ d6 ~ ~ ~ g5 ~ ~ ~")
  .slow(6)
  .sound("triangle")
  .gain(0.08)
  .attack(0.001)
  .decay(1.2)
  .sustain(0.15)
  .release(2.5)
  .fmi(4)
  .fmh(5.5)
  .fmdecay(0.8)
  .room(0.9)
  .hpf(1200)
  .pan(rand)
  .degradeBy(0.2)

// NEW: Pulse of return - the storm remembers itself, faintly
$: s("~ ~ ~ ~ bd ~ ~ ~ ~ ~ ~ ~ ~ ~ bd ~")
  .slow(8)
  .gain(0.08)
  .room(0.9)
  .lpf(200)
  .pan(0.5)