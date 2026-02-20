// Goldberg Variations - Aria Reimagined (Variation: The Machine Dreams of Birds)

let ghostOrgan = x => x
  .sound("supersaw")
  .gain(0.09)
  .attack(0.15)
  .decay(1.2)
  .sustain(0.3)
  .release(1.5)
  .lpf(900)
  .lpq(5)
  .detune(25)
  .room(0.7)
  .size(0.8)
  .delay(0.35)
  .delaytime(0.333)
  .delayfeedback(0.45)

let crystalBells = x => x
  .sound("sine")
  .gain(0.07)
  .attack(0.001)
  .decay(2.0)
  .sustain(0.1)
  .release(3.0)
  .fmi(5)
  .fmh(7)
  .fmdecay(1.2)
  .room(0.9)
  .delay(0.5)
  .delaytime(0.375)
  .delayfeedback(0.6)

setcps(72/60/4)

// Melody dissolved into falling fragments - the machine's dream
let dreamFragment = "b5 ~ gs5 ~ e5 ~ b4 ~ gs4 ~ ~ ~ e4 ~ ~ ~"

// Bass becomes sustained drones - engine sleeping
let sleepingDrone = "[e2,b2] ~ ~ ~ [a2,e3] ~ ~ ~ [d2,a2] ~ ~ ~ [e2,b2] ~ ~ ~"

// Chords become suspended, unresolved - dreaming
let suspendedDream = "[e3,a3,b3] ~ ~ [fs3,b3,cs4] ~ ~ [gs3,cs4,ds4] ~ ~ [e3,gs3,b3] ~ ~"

// Track 1 - melody now descending, fading into sleep
$: note(dreamFragment)
  .slow(8)
  .apply(crystalBells)
  .pan(perlin.range(0.2, 0.8).slow(7))
  .octave("<5 5 4 4>")
  .degradeBy(0.2)

// Track 2 - drone bass, breathing slowly
$: note(sleepingDrone)
  .slow(8)
  .sound("triangle")
  .gain(0.11)
  .attack(0.5)
  .decay(0.3)
  .sustain(0.7)
  .release(2.0)
  .lpf(300)
  .room(0.6)
  .pan(0.5)
  .tremolo(0.15)
  .tremolosync(8)

// Track 3 - suspended chords, floating
$: note(suspendedDream)
  .slow(6)
  .apply(ghostOrgan)
  .pan(0.55)

// Track 4 - birdsong the machine imagines - random, fluttering
$: n("<0 4 7> <7 11 14> <4 9 12> <2 7 11>".add(perlin.range(-2, 2)))
  .scale("E:lydian")
  .fast(3)
  .slow(4)
  .sound("sine")
  .gain(0.06)
  .attack(0.002)
  .decay(0.15)
  .sustain(0.05)
  .release(0.4)
  .fmi(2)
  .fmh(5)
  .room(0.8)
  .pan(rand.range(0.1, 0.9))
  .octave("<6 7 6 7>")
  .degradeBy(0.35)

// Track 5 - lydian now - floating, weightless dream logic
$: n("0 2 4 6 7 6 4 2")
  .scale("E:lydian")
  .slow(10)
  .sound("sine")
  .gain(0.07)
  .attack(0.2)
  .decay(0.8)
  .sustain(0.4)
  .release(1.2)
  .lpf(cosine.range(600, 1800).slow(8))
  .room(0.7)
  .pan(0.4)
  .octave(5)

// Track 6 - clockwork unwinding, slowing down irregularly
$: note("[b4 e5] ~ ~ [gs4 b4] ~ ~ ~ [e4 gs4] ~ ~ ~ ~ [b3 e4] ~ ~ ~")
  .slow(8)
  .sound("pulse")
  .gain(0.05)
  .attack(0.01)
  .decay(0.2)
  .sustain(0.15)
  .release(0.5)
  .lpf(1800)
  .crush(12)
  .pan(sine.range(0.3, 0.7).slow(6))
  .delay(0.4)
  .delaytime(0.5)
  .delayfeedback(0.5)

// Track 7 - heartbeat only, everything else faded
$: s("bd ~ ~ ~ ~ ~ bd ~ ~ ~ ~ ~ ~ ~ ~ ~")
  .slow(4)
  .gain(0.09)
  .room(0.5)
  .lpf(800)
  .shape(0.1)
  .pan(0.5)

// Track 8 - distant memory of the steam whistle, echoing
$: note("e4 ~ ~ ~ ~ ~ ~ ~ b4 ~ ~ ~ ~ ~ ~ ~")
  .slow(16)
  .sound("sawtooth")
  .gain(0.05)
  .attack(0.8)
  .decay(0.2)
  .sustain(0.3)
  .release(2.5)
  .lpf(600)
  .room(0.9)
  .delay(0.6)
  .delaytime(0.666)
  .delayfeedback(0.65)
  .pan(0.5)