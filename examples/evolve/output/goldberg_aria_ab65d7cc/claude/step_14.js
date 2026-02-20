// Goldberg Variations - Aria Reimagined (Variation: The Clockwork Séance)

let hauntedPipes = x => x
  .sound("sawtooth")
  .gain(0.12)
  .attack(0.02)
  .decay(0.4)
  .sustain(0.7)
  .release(0.5)
  .lpf(1600)
  .lpq(5)
  .detune(8)
  .room(0.6)
  .size(0.7)
  .delay(0.25)
  .delaytime(0.2)
  .delayfeedback(0.35)

let crystalBell = x => x
  .sound("sine")
  .gain(0.1)
  .attack(0.001)
  .decay(1.2)
  .sustain(0.05)
  .release(2)
  .fmi(5)
  .fmh(6)
  .fmdecay(0.5)
  .room(0.8)
  .delay(0.5)
  .delaytime(0.333)
  .delayfeedback(0.5)

setcps(72/60/4)

// Melody now ASCENDING in phrygian - summoning spirits from below
let summoningMelody = "e4 f4 g4 a4 bb4 c5 d5 e5 f5 g5 a5 bb5 c6"

// Bass becomes a tolling bell pattern - funeral procession
let tollingBass = "e1 ~ ~ e1 ~ ~ a1 ~ ~ a1 ~ ~ d1 ~ ~ g1 ~ ~"

// Chords: diminished and suspended - unresolved tension
let unresolvedChords = "[e3,g3,bb3] ~ [a3,d4,e4] ~ [d3,f3,ab3] ~ [g3,c4,d4] ~"

// Track 1 - melody ascending like spirits rising
$: note(summoningMelody)
  .slow(8)
  .apply(crystalBell)
  .pan(saw.range(0.2, 0.8).slow(6))
  .octave("<4 5>")

// Track 2 - tolling funeral bass
$: note(tollingBass)
  .slow(4)
  .sound("triangle")
  .gain(0.14)
  .attack(0.001)
  .decay(0.8)
  .sustain(0.3)
  .release(1.5)
  .lpf(300)
  .room(0.6)
  .pan(0.45)
  .octave(2)

// Track 3 - unresolved tension chords
$: note(unresolvedChords)
  .slow(3)
  .apply(hauntedPipes)
  .pan(0.55)
  .phaser(0.3)
  .phaserdepth(0.6)

// Track 4 - NEW: spectral waltz in 3/4 feel, ghostly dancers
$: note("[g4 bb4 d5] ~ ~ [f4 a4 c5] ~ ~ [eb4 g4 bb4] ~ ~ [d4 fs4 a4] ~ ~")
  .slow(6)
  .sound("pulse")
  .gain(0.08)
  .attack(0.01)
  .decay(0.3)
  .sustain(0.4)
  .release(0.6)
  .lpf(1400)
  .detune(20)
  .room(0.5)
  .pan(sine.range(0.3, 0.7).slow(9))

// Track 5 - locrian mode now - the most unstable, otherworldly
$: n("0 1 3 4 6 4 3 1 0 3 6 7".slow(2))
  .scale("E:locrian")
  .slow(5)
  .sound("sine")
  .gain(0.09)
  .attack(0.1)
  .decay(0.5)
  .sustain(0.4)
  .release(0.8)
  .lpf(1800)
  .room(0.65)
  .pan(cosine.range(0.25, 0.75).slow(11))
  .octave(5)

// Track 6 - NEW: music box playing backwards, memories reversing
$: note("c5 b4 a4 g4 f4 e4 d4 c4 b3 a3 g3 f3 e3 d3 c3")
  .slow(7)
  .sound("triangle")
  .gain(0.07)
  .attack(0.001)
  .decay(0.15)
  .sustain(0.1)
  .release(0.4)
  .lpf(3500)
  .fmi(2)
  .fmh(3)
  .room(0.4)
  .pan(perlin.range(0.15, 0.85).slow(8))
  .rev()

// Track 7 - séance table rapping, erratic spirit communication
$: s("~ ~ cp ~ ~ ~ cp cp ~ ~ ~ cp ~ cp ~ ~")
  .slow(2)
  .gain(0.06)
  .room(0.7)
  .lpf(2000)
  .hpf(400)
  .pan(rand.range(0.1, 0.9))
  .delay(0.3)
  .delaytime(0.25)
  .delayfeedback(0.4)

// Track 8 - grandfather clock, marking eternity
$: stack(
  s("~ bd ~ ~").gain(0.1).lpf(200),
  s("~ ~ ~ rim").gain(0.06).lpf(4000).pan(0.6)
).slow(1.5)
  .room(0.2)