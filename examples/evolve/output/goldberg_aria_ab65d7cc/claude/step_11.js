// Goldberg Variations - Aria Reimagined (Variation: The Carnival of Ghosts)

let carnivalOrgan = x => x
  .sound("square")
  .gain(0.14)
  .attack(0.01)
  .decay(0.3)
  .sustain(0.8)
  .release(0.4)
  .lpf(2200)
  .lpq(4)
  .detune(12)
  .room(0.5)
  .size(0.6)
  .delay(0.2)
  .delaytime(0.166)
  .delayfeedback(0.3)

let musicBoxGhost = x => x
  .sound("triangle")
  .gain(0.11)
  .attack(0.001)
  .decay(0.8)
  .sustain(0.1)
  .release(1.5)
  .fmi(3)
  .fmh(4)
  .fmdecay(0.3)
  .room(0.7)
  .delay(0.4)
  .delaytime(0.125)
  .delayfeedback(0.45)

setcps(88/60/4)

// Melody now DESCENDING - a music box unwinding, slowing in memory
let unwindingMelody = "a5 g5 f5 e5 d5 c5 b4 a4 g4 f4 e4 d4 c4 b3"

// Bass becomes a waltz - spectral dancers in an empty ballroom
let waltzingSpecters = "d2 ~ a2 d2 ~ a2 f2 ~ c3 f2 ~ c3 g2 ~ d3 g2 ~ d3 bb1 ~ f2 bb1 ~ f2"

// Chords: major/minor flickering - joy and sorrow intertwined
let flickeringChords = "[d3,fs3,a3] [d3,f3,a3] ~ [g3,b3,d4] [g3,bb3,d4] ~ [c3,e3,g3] [c3,eb3,g3] ~"

// Track 1 - melody descending like a music box running down
$: note(unwindingMelody)
  .slow(6)
  .apply(musicBoxGhost)
  .pan(sine.range(0.25, 0.75).slow(5))
  .speed(saw.range(0.98, 1.02).slow(8))

// Track 2 - waltz bass, spectral dancers
$: note(waltzingSpecters)
  .slow(6)
  .sound("sawtooth")
  .gain(0.12)
  .attack(0.01)
  .decay(0.15)
  .sustain(0.5)
  .release(0.25)
  .lpf(500)
  .shape(0.2)
  .room(0.35)
  .pan(0.4)

// Track 3 - flickering major/minor chords
$: note(flickeringChords)
  .slow(4)
  .apply(carnivalOrgan)
  .pan(0.6)
  .tremolo(0.4)
  .tremolosync(3)

// Track 4 - NEW: circus calliope melody, slightly detuned and eerie
$: note("a4 ~ d5 ~ fs5 a5 ~ fs5 d5 ~ a4 ~ g4 fs4 e4 d4")
  .slow(4)
  .sound("pulse")
  .gain(0.09)
  .attack(0.005)
  .decay(0.2)
  .sustain(0.6)
  .release(0.3)
  .lpf(1800)
  .detune(15)
  .room(0.4)
  .pan(perlin.range(0.3, 0.7).slow(6))

// Track 5 - lydian mode now - dreamlike, floating, uncertain
$: n("0 2 4 6 4 2 0 4 6 7 6 4".slow(2))
  .scale("D:lydian")
  .slow(5)
  .sound("sine")
  .gain(0.1)
  .attack(0.08)
  .decay(0.4)
  .sustain(0.5)
  .release(0.6)
  .lpf(2200)
  .room(0.55)
  .pan(cosine.range(0.35, 0.65).slow(7))
  .octave(4)

// Track 6 - NEW: pizzicato strings, playful ghosts plucking
$: note("d4 ~ a3 ~ f4 ~ ~ d4 a4 ~ ~ f4 ~ d4 ~ a3")
  .slow(3)
  .sound("triangle")
  .gain(0.1)
  .attack(0.001)
  .decay(0.12)
  .sustain(0.05)
  .release(0.3)
  .lpf(2800)
  .room(0.3)
  .pan(rand.range(0.2, 0.8))

// Track 7 - wind chimes in abandoned carnival
$: note("~ fs6 ~ ~ d6 ~ ~ a6 ~ ~ e6 ~ ~ b5 ~ ~")
  .slow(10)
  .sound("sine")
  .gain(0.06)
  .fmi(6)
  .fmh(3)
  .attack(0.001)
  .decay(1.2)
  .sustain(0.02)
  .release(2.5)
  .room(0.85)
  .size(0.85)
  .delay(0.55)
  .delaytime(0.5)
  .delayfeedback(0.5)
  .pan(perlin.range(0.1, 0.9).slow(11))

// Track 8 - heartbeat becomes a ticking clock, time escaping
$: s("~ rim ~ rim ~ ~ rim ~ rim rim ~ ~ ~ rim ~ rim")
  .slow(2)
  .gain(0.08)
  .room(0.15)
  .lpf(3000)
  .pan(0.5)