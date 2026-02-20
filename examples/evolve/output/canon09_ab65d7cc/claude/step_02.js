// BWV 1087 Canon 9 - Variation: Descent into the Underworld

// The upper voices become distant memories, fading echoes
let ghostVoice = x => x
  .sound("triangle")
  .gain(0.25)
  .attack(0.15)
  .decay(0.6)
  .sustain(0.2)
  .release(1.2)
  .lpf(sine.range(600, 1400).slow(16))
  .room(0.7)
  .delay(0.5)
  .delaytime(0.5)
  .delayfeedback(0.45)

// The bass becomes a growling, grinding presence
let abyssalBass = x => x
  .sound("sawtooth")
  .gain(0.45)
  .attack(0.02)
  .decay(0.2)
  .sustain(0.7)
  .lpf(300)
  .lpq(6)
  .distort(0.3)
  .room(0.3)

setcps(60/60/4)

// Track 1 - Original melody, now barely audible, fragmented
$: note("g5 ~ ~ ~ d6 ~ ~ ~ d6 ~ ~ ~ g5 ~ ~ ~ d5 ~ ~ ~ a5 ~ ~ ~ e5 ~ ~ ~ cs6 ~!7")
  .slow(12)
  .apply(ghostVoice)
  .pan(0.3)
  .degradeBy(0.3)

// Track 2 - REPLACED: Inverted melody becomes a descending chromatic lament
$: note("b5 bb5 a5 gs5 g5 fs5 f5 e5 eb5 d5 cs5 c5 b4 bb4 a4 gs4")
  .slow(16)
  .sound("sine")
  .gain(0.3)
  .attack(0.1)
  .decay(0.4)
  .sustain(0.5)
  .release(0.8)
  .lpf(1200)
  .room(0.5)
  .pan(0.7)
  .late(0.25)

// Track 3 - Bass transformed: relentless octave pedal on G, doom-like
$: note("g1 g2 g1 g2 g1 g2 g1 g2")
  .slow(4)
  .apply(abyssalBass)
  .pan(0.5)
  .sometimes(x => x.add(note("<0 -5 -7 -5>")))

// NEW: Subterranean pulse - heartbeat of the abyss
$: s("bd:3")
  .slow(2)
  .gain(0.35)
  .lpf(80)
  .shape(0.4)
  .room(0.8)
  .speed(0.7)

// NEW: Dissonant cluster stabs - moments of terror
$: note("[g3,gs3,a3,as3]")
  .slow(8)
  .late(3)
  .sound("square")
  .gain(0.2)
  .attack(0.001)
  .decay(0.1)
  .sustain(0)
  .lpf(2000)
  .distort(0.2)
  .pan(rand)
  .room(0.4)
  .euclid(3, 8)