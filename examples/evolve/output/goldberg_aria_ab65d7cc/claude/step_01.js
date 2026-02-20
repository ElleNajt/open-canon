// Goldberg Variations - Aria Reimagined (Dark Ambient Variation)

let darkPad = x => x
  .sound("supersaw")
  .gain(0.25)
  .attack(0.8)
  .decay(0.5)
  .sustain(0.7)
  .release(1.2)
  .lpf(800)
  .lpq(3)
  .room(0.6)
  .size(0.8)
  .delay(0.3)
  .delaytime(0.375)
  .delayfeedback(0.4)

let glassVoice = x => x
  .sound("sine")
  .gain(0.35)
  .attack(0.01)
  .decay(0.4)
  .sustain(0.1)
  .release(0.6)
  .lpf(3500)
  .room(0.4)

let pulseBass = x => x
  .sound("pulse")
  .gain(0.4)
  .attack(0.001)
  .decay(0.3)
  .sustain(0.3)
  .release(0.2)
  .lpf(400)
  .lpenv(4)
  .lpdecay(0.2)

setcps(48/60/4)

// Fragmented soprano - only the ghost of the melody remains
let sopranoGhost = "g5 ~!15 a5 ~!11 g5 ~!7 e5 ~!23 g4 ~!23 d4 ~!31 d5 ~!15 e5 ~!7 d5 ~!15 a4 ~!23 gb5 ~!7 a5 ~!7 e5 ~!7 c5 ~!23"

// New bass - descending minor seconds, unsettling
let darkBass = "g2 ~!7 gb2 ~!7 f2 ~!7 e2 ~!7 eb2 ~!7 d2 ~!7 db2 ~!7 c2 ~!7 b1 ~!7 bb1 ~!7 a1 ~!7 ab1 ~!7 g1 ~!7 gb1 ~!7 f1 ~!7 e1 ~!7"

// Harmonic drone cluster - dissonant but beautiful
let droneCluster = "g3 ~!31 gb3 ~!31 f3 ~!31 e3 ~!31 eb3 ~!31"

// Rhythmic pulse - breath of the machine
let pulse = "c2 ~ ~ ~ c2 ~ ~ c2 ~ ~ ~ c2 ~ ~ ~ ~"

// Track 1 - spectral melody fragments
$: note(sopranoGhost)
  .slow(8)
  .apply(glassVoice)
  .pan(sine.range(0.2, 0.8).slow(16))
  .sometimes(x => x.speed("-1").begin(0.2))

// Track 2 - chromatic descent into darkness
$: note(darkBass)
  .slow(16)
  .apply(darkPad)
  .octave("<2 3>".slow(8))
  .pan(0.5)

// Track 3 - harmonic fog
$: note(droneCluster)
  .slow(16)
  .apply(darkPad)
  .gain(0.15)
  .detune(sine.range(-15, 15).slow(7))
  .pan(0.6)

// Track 4 - mechanical heartbeat
$: note(pulse)
  .slow(4)
  .apply(pulseBass)
  .pan(0.4)
  .sometimes(x => x.crush(8))
  .every(4, x => x.speed(2))

// Track 5 - ghostly harmonics from original
$: n("0 2 4 7".scale("G:minor"))
  .slow(8)
  .sound("sine")
  .gain(0.2)
  .octave(6)
  .attack(0.5)
  .release(1)
  .room(0.7)
  .delay(0.5)
  .delaytime(0.5)
  .delayfeedback(0.6)
  .pan(cosine.range(0.3, 0.7).slow(12))