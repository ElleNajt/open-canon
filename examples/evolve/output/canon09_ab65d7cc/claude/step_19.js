// BWV 1087 Canon 9 - Variation: The Reckoning

// From stillness emerges ANGER - the grief transforms to accusation
let accusingVoice = x => x
  .sound("sawtooth")
  .gain(0.11)
  .attack(0.02)
  .decay(0.4)
  .sustain(0.5)
  .release(0.6)
  .lpf(2200)
  .lpq(4)
  .room(0.4)
  .distort(0.15)

// The witness - cold, observing, judging
let coldWitness = x => x
  .sound("triangle")
  .gain(0.09)
  .attack(0.1)
  .decay(0.2)
  .sustain(0.6)
  .release(0.8)
  .hpf(400)
  .lpf(3000)
  .room(0.3)

setcps(68/60/4)

// Track 1 - Melody becomes INTERROGATION - demanding answers
$: note("d5 d5 ~ eb5 d5 ~ g5 ~ fs5 ~ d5 ~ eb5 d5 c5 ~")
  .slow(2)
  .apply(accusingVoice)
  .pan(0.4)
  .juxBy(0.4, x => x.late(0.125).transpose(-12).gain(0.08))

// Track 2 - Harmony turns MINOR and RESTLESS - no resolution allowed
$: note("<[d3,f3,a3] [eb3,g3,bb3] [c3,eb3,g3] [d3,fs3,a3]>")
  .slow(1)
  .apply(coldWitness)
  .pan(0.6)

// Track 3 - Bass becomes INSISTENT - pounding like footsteps approaching
$: note("d2 d2 d2 ~ a1 a1 ~ ~ d2 d2 ~ d2 a1 ~ a1 ~")
  .slow(2)
  .sound("square")
  .gain(0.14)
  .attack(0.01)
  .decay(0.2)
  .sustain(0.4)
  .release(0.3)
  .lpf(120)
  .distort(0.1)

// DROPPED: gentle wind chimes - replaced by STRUCK METAL
$: s("~ [rim rim] ~ rim ~ [rim rim rim] ~ rim")
  .gain(0.09)
  .room(0.5)
  .hpf(2000)
  .pan(0.7)
  .delay(0.2)
  .delaytime(0.167)

// Drums return with PURPOSE - not thunder, but march
$: s("bd ~ [~ bd] ~ bd ~ bd bd")
  .gain(0.13)
  .lpf(100)
  .room(0.4)
  .pan(0.5)

// NEW: Staccato accusations - rapid repeated notes like pointing fingers
$: note("[a4 a4 a4 ~] [~ a4 a4 a4] [g4 g4 ~ g4] [fs4 ~ fs4 fs4]")
  .slow(2)
  .sound("pulse")
  .gain(0.08)
  .attack(0.005)
  .decay(0.1)
  .sustain(0.2)
  .release(0.15)
  .lpf(1800)
  .pan(0.35)

// The humming transforms to CHANT - ritualistic, ancient
$: note("[d4,a4] [d4,a4] [eb4,bb4] [eb4,bb4] [c4,g4] [c4,g4] [d4,a4] ~")
  .slow(4)
  .sound("sine")
  .gain(0.10)
  .attack(0.2)
  .decay(0.1)
  .sustain(0.7)
  .release(0.5)
  .fmi(1.5)
  .fmh(2)
  .lpf(1200)
  .room(0.5)
  .pan(0.5)

// Ghost melody SOLIDIFIES - the dead speak clearly now
$: note("~ ~ d5 eb5 d5 c5 ~ ~ bb4 a4 ~ ~ g4 ~ ~ ~")
  .slow(4)
  .sound("sawtooth")
  .gain(0.07)
  .attack(0.05)
  .decay(0.3)
  .sustain(0.3)
  .release(1)
  .lpf(1600)
  .room(0.6)
  .delay(0.3)
  .delaytime(0.25)
  .pan(0.65)

// NEW: Counter-voice rises in DEFIANCE - refusing the accusation
$: note("~ ~ ~ ~ g4 a4 bb4 c5 d5 ~ ~ eb5 d5 ~ ~ ~")
  .slow(4)
  .sound("triangle")
  .gain(0.09)
  .attack(0.1)
  .decay(0.4)
  .sustain(0.4)
  .release(0.8)
  .lpf(2500)
  .hpf(300)
  .pan(0.3)
  .room(0.4)

// Pulse of conscience - irregular heartbeat of guilt
$: note("d1 ~ ~ d1 ~ d1 ~ ~ ~ d1 d1 ~ ~ ~ d1 ~")
  .slow(4)
  .sound("sine")
  .gain(0.12)
  .attack(0.05)
  .decay(0.6)
  .sustain(0.1)
  .release(0.4)
  .lpf(50)

// NEW: High witness - watching from above, crystalline and merciless
$: note("a6 ~ ~ ~ fs6 ~ ~ ~ g6 ~ ~ ~ ~ ~ d6 ~")
  .slow(4)
  .sound("sine")
  .gain(0.06)
  .attack(0.01)
  .decay(0.5)
  .sustain(0.2)
  .release(1.5)
  .fmi(5)
  .fmh(7)
  .fmdecay(0.3)
  .hpf(2500)
  .room(0.8)
  .pan(sine.range(0.4, 0.6).slow(8))