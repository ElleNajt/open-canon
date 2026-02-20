// BWV 1087 Canon 3 - Variation: Storm Returns

// Urgent voice - tension rebuilding
let urgentVoice = x => x
  .sound("sawtooth")
  .gain(0.1)
  .attack(0.01)
  .decay(0.2)
  .sustain(0.7)
  .release(0.4)
  .lpf(1800)
  .room(0.4)

// Dark voice - shadows creeping back
let darkVoice = x => x
  .sound("triangle")
  .gain(0.09)
  .attack(0.05)
  .decay(0.4)
  .sustain(0.5)
  .release(0.6)
  .lpf(900)
  .room(0.5)

setcps(84/60/4)

// Track 1 - Theme now DESCENDS chromatically, hope fading
$: note("d5 cs5 c5 b4 bb4 a4 ab4 g4")
  .slow(8)
  .apply(urgentVoice)
  .pan(0.5)
  .delay(0.4)
  .delaytime(0.166)
  .delayfeedback(0.5)

// Track 2 - Pulsing thirds become anxious syncopation
$: note("d4 ~ fs4 d4 ~ g4 d4 ~ a4 d4 ~ bb4 d4 ~ a4 ~")
  .slow(2)
  .sound("pulse")
  .gain(0.08)
  .attack(0.01)
  .decay(0.1)
  .sustain(0.6)
  .release(0.2)
  .lpf(1400)
  .room(0.3)
  .pan(sine.range(0.3, 0.7).slow(4))

// Track 3 - Harmony shifts to minor, diminished tension
$: note("<[d3,f3,ab3]> <[eb3,g3,bb3]> <[e3,g3,cs4]> <[d3,f3,a3]>")
  .slow(8)
  .apply(darkVoice)
  .lpq(4)
  .pan(0.4)

// Track 4 - Heartbeat quickens, irregular
$: note("d2 ~ d2 ~ ~ d2 d2 ~ d2 ~ ~ d2 ~ d2 ~ ~")
  .slow(2)
  .sound("sine")
  .gain(0.12)
  .attack(0.01)
  .decay(0.2)
  .sustain(0.5)
  .release(0.3)
  .lpf(350)
  .distort(0.1)
  .pan(0.5)

// Track 5 - Wind returns as dissonant cluster, building
$: note("[gs5,a5,bb5]")
  .slow(8)
  .sound("sawtooth")
  .gain(0.06)
  .attack(1)
  .decay(2)
  .sustain(0.7)
  .release(1)
  .lpf(sine.range(800, 2500).slow(4))
  .room(0.6)
  .pan(0.5)

// Track 6 - Pedal becomes tritone, unresolved
$: note("<[d2,ab2]>")
  .slow(8)
  .apply(darkVoice)
  .lpf(600)
  .room(0.5)
  .pan(0.5)

// Track 7 - Bells now toll warning, closer together
$: note("d4 ~ ~ a4 ~ d4 ~ ~ eb4 ~ ~ a4 d4 ~ ~ ~")
  .slow(2)
  .sound("triangle")
  .gain(0.09)
  .attack(0.01)
  .decay(0.8)
  .sustain(0.3)
  .release(1.5)
  .lpf(1600)
  .room(0.6)
  .delay(0.4)
  .delaytime(0.33)
  .delayfeedback(0.45)
  .pan(0.5)

// Track 8 - Birdsong replaced by distant thunder rumble
$: note("d1 ~ ~ ~ ~ ~ eb1 ~ ~ ~ ~ ~ ~ ~ d1 ~")
  .slow(4)
  .sound("sawtooth")
  .gain(0.07)
  .attack(0.3)
  .decay(1)
  .sustain(0.4)
  .release(1.5)
  .lpf(200)
  .distort(0.15)
  .room(0.7)
  .pan(rand.range(0.3, 0.7))

// Track 9 - NEW: Frantic high voice, fleeing
$: note("a5 ~ d6 ~ cs6 a5 ~ ~ b5 ~ e6 ~ d6 ~ a5 ~")
  .slow(2)
  .sometimesBy(0.4, x => x.add(7))
  .sound("sine")
  .gain(0.07)
  .attack(0.01)
  .decay(0.15)
  .sustain(0.3)
  .release(0.25)
  .lpf(3500)
  .hpf(1500)
  .room(0.4)
  .pan(rand.range(0.2, 0.8))