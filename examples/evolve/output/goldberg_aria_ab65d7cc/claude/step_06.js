// Goldberg Variations - Aria Reimagined (Variation: The Reckoning)

let fierceStrings = x => x
  .sound("sawtooth")
  .gain(0.22)
  .attack(0.05)
  .decay(0.3)
  .sustain(0.7)
  .release(0.8)
  .lpf(2800)
  .lpq(4)
  .room(0.5)
  .size(0.6)
  .delay(0.2)
  .delaytime(0.25)
  .delayfeedback(0.3)

let metallicBells = x => x
  .sound("sine")
  .gain(0.2)
  .attack(0.001)
  .decay(0.6)
  .sustain(0.1)
  .release(1)
  .fmi(3)
  .fmh(7)
  .room(0.4)
  .delay(0.3)
  .delaytime(0.333)
  .delayfeedback(0.4)

setcps(72/60/4)

// The melody rises - defiant, angular, refusing to descend
let defiantMelody = "g4 b4 d5 fs5 g5 ~ d5 eb5 ~ c5 b4 ~ g4 a4 bb4 c5"

// Bass becomes insistent - a heartbeat that won't stop
let heartbeatBass = "g2 g2 ~ g2 eb2 eb2 ~ d2 c2 c2 ~ c2 d2 d2 ~ d2"

// Sharp diminished stabs - the weight of what's unspoken
let diminishedStabs = "[g3,bb3,db4,e4] ~ ~ [eb3,gb3,a3,c4] ~ ~ [c3,eb3,fs3,a3] ~ ~"

// Track 1 - defiant melody, climbing against gravity
$: note(defiantMelody)
  .slow(4)
  .apply(fierceStrings)
  .pan(saw.range(0.2, 0.8).slow(4))
  .lpf(perlin.range(1600, 4000).slow(2))

// Track 2 - heartbeat bass, relentless and exposed
$: note(heartbeatBass)
  .slow(4)
  .sound("square")
  .gain(0.18)
  .octave(2)
  .attack(0.01)
  .decay(0.2)
  .sustain(0.3)
  .release(0.3)
  .lpf(400)
  .lpq(3)
  .pan(0.45)
  .distort(0.15)

// Track 3 - diminished stabs like accusations
$: note(diminishedStabs)
  .slow(6)
  .sound("sawtooth")
  .gain(0.14)
  .attack(0.01)
  .decay(0.15)
  .sustain(0)
  .release(0.4)
  .lpf(2200)
  .hpf(300)
  .pan(0.55)
  .room(0.3)
  .delay(0.25)
  .delaytime(0.166)
  .delayfeedback(0.35)

// Track 4 - urgent pulse, no longer breath but a march
$: s("bd ~ [~ bd] ~ sn ~ bd ~ bd [bd ~] ~ ~ sn ~ [~ bd] ~")
  .slow(2)
  .gain(0.12)
  .shape(0.3)
  .lpf(1800)
  .room(0.3)
  .pan(0.5)

// Track 5 - phrygian darkness creeping in
$: n("0 1 3 4 ~ 1 0 ~".slow(4))
  .scale("G:phrygian")
  .slow(2)
  .apply(metallicBells)
  .octave(5)
  .pan(cosine.range(0.3, 0.7).slow(8))

// Track 6 - a counter-voice arguing back, chromatic and restless
$: note("fs4 g4 gs4 a4 bb4 b4 c5 cs5 d5 ~ ~ cs5 c5 b4 bb4 a4")
  .slow(8)
  .sound("triangle")
  .gain(0.13)
  .attack(0.02)
  .decay(0.3)
  .sustain(0.4)
  .release(0.6)
  .lpf(sine.range(1200, 2600).slow(4))
  .room(0.5)
  .pan(0.65)

// Track 7 - shattered glass, high harmonics fracturing
$: note("<b6 c7 db7 d7 eb7>")
  .slow(3)
  .apply(metallicBells)
  .gain(0.07)
  .pan(rand.range(0.1, 0.9))
  .hpf(4000)