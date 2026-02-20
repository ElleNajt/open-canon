// Goldberg Variations - Aria Reimagined (Variation: The Awakening Automaton)

let steamOrgan = x => x
  .sound("supersaw")
  .gain(0.11)
  .attack(0.05)
  .decay(0.6)
  .sustain(0.5)
  .release(0.8)
  .lpf(1200)
  .lpq(3)
  .detune(15)
  .room(0.5)
  .size(0.6)
  .delay(0.2)
  .delaytime(0.166)
  .delayfeedback(0.3)

let glassHarmonica = x => x
  .sound("sine")
  .gain(0.09)
  .attack(0.08)
  .decay(1.5)
  .sustain(0.2)
  .release(2.5)
  .fmi(3)
  .fmh(4)
  .fmdecay(0.8)
  .room(0.85)
  .delay(0.4)
  .delaytime(0.25)
  .delayfeedback(0.55)

setcps(84/60/4)

// Melody transformed: mechanical awakening - stuttering to life
let awakeningTheme = "e4 ~ e4 g4 ~ b4 e5 ~ ~ d5 b4 ~ g4 fs4 ~ e4"

// Bass becomes a pumping engine, fifths powering up
let engineBass = "e2 b2 e2 b2 a2 e3 a2 e3 d2 a2 d2 a2 g2 d3 b2 g2"

// Chords shift to major/mixolydian - hope breaking through
let dawnChords = "[e3,gs3,b3] ~ [a3,cs4,e4] ~ [d3,fs3,a3] ~ [b2,ds3,fs3] ~"

// Track 1 - melody stuttering awake, gaining confidence
$: note(awakeningTheme)
  .slow(6)
  .apply(glassHarmonica)
  .pan(sine.range(0.3, 0.7).slow(5))
  .ply("<1 1 2 1>")
  .octave("<4 4 5 4>")

// Track 2 - pumping steam engine bass
$: note(engineBass)
  .slow(4)
  .sound("sawtooth")
  .gain(0.13)
  .attack(0.01)
  .decay(0.2)
  .sustain(0.6)
  .release(0.3)
  .lpf(400)
  .lpenv(500)
  .lpdecay(0.15)
  .room(0.3)
  .pan(0.5)

// Track 3 - dawn breaking chords, brighter
$: note(dawnChords)
  .slow(4)
  .apply(steamOrgan)
  .pan(0.45)
  .tremolo(0.3)
  .tremolosync(3)

// Track 4 - REPLACED: birdsong arpeggio announcing morning
$: n("0 4 7 11 14 11 7 4".add("<0 2 5 -2>"))
  .scale("E:major")
  .fast(2)
  .slow(3)
  .sound("triangle")
  .gain(0.08)
  .attack(0.001)
  .decay(0.1)
  .sustain(0.15)
  .release(0.3)
  .lpf(4000)
  .room(0.6)
  .pan(perlin.range(0.2, 0.8).slow(3))
  .octave(6)

// Track 5 - dorian now - warmth returning to the machine
$: n("0 2 3 5 7 9 10 9 7 5 3 2")
  .scale("E:dorian")
  .slow(8)
  .sound("pulse")
  .gain(0.08)
  .attack(0.05)
  .decay(0.4)
  .sustain(0.5)
  .release(0.6)
  .lpf(sine.range(800, 2200).slow(6))
  .room(0.5)
  .pan(0.6)
  .octave(4)

// Track 6 - NEW: clockwork gears finally synchronized, mechanical waltz
$: note("[e5 gs5] [b4 e5] [gs5 b5] [e5 gs5] [fs5 a5] [cs5 fs5] [a5 cs6] [fs5 a5]")
  .slow(4)
  .sound("square")
  .gain(0.06)
  .attack(0.001)
  .decay(0.08)
  .sustain(0.2)
  .release(0.15)
  .lpf(2500)
  .crush(10)
  .pan(saw.range(0.35, 0.65).slow(4))
  .swing(0.2)

// Track 7 - pistons firing, industrial rhythm with swing
$: s("bd ~ [~ bd] ~ sn ~ [bd bd] ~ bd ~ ~ sn ~ bd ~")
  .slow(2)
  .gain(0.11)
  .room(0.25)
  .lpf(3000)
  .shape(0.2)
  .pan(0.5)
  .swing(0.15)

// Track 8 - NEW: steam whistle, triumphant calls
$: note("<e5 ~ ~ ~ b5 ~ ~ ~ gs5 ~ ~ ~ fs5 ~ ~ e5>")
  .slow(16)
  .sound("sawtooth")
  .gain(0.07)
  .attack(0.3)
  .decay(0.1)
  .sustain(0.8)
  .release(1.2)
  .lpf(1800)
  .slide(0.1)
  .room(0.7)
  .pan(0.5)