// Goldberg Variations - Aria Reimagined (Variation: The Reckoning)

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

let bellVoice = x => x
  .sound("triangle")
  .gain(0.3)
  .attack(0.001)
  .decay(0.8)
  .sustain(0.05)
  .release(1.2)
  .lpf(2800)
  .room(0.7)
  .delay(0.4)
  .delaytime(0.333)
  .delayfeedback(0.5)

let rageBrass = x => x
  .sound("sawtooth")
  .gain(0.22)
  .attack(0.05)
  .decay(0.2)
  .sustain(0.9)
  .release(0.4)
  .lpf(1400)
  .lpq(4)
  .distort(0.15)
  .room(0.4)

setcps(58/60/4)

// The melody fights back - angular, defiant, refusing descent
let defiantMelody = "g5 ~!2 a5 b5 d6 ~!2 c6 b5 ~!3 g5 a5 fs5 ~!2 g5 ~!7 b5 c6 d6 e6 ~!3 d6 ~!7"

// Bass becomes insistent - a stubborn ground refusing to yield
let stubbornBass = "g2 g2 ~ g2 d2 d2 ~ d2 eb2 eb2 ~ eb2 c2 c2 ~ c2"

// Replacing spectral choir with aggressive staccato stabs
let stabChords = "[g4,b4,d5,g5] ~ ~ ~ [d4,fs4,a4,d5] ~ ~ ~ [eb4,g4,bb4,eb5] ~ ~ ~ [c4,e4,g4,c5] ~ ~ ~"

// New element - a pulse that demands attention
let urgentPulse = "g3*4 ~!4 d3*4 ~!4 eb3*4 ~!4 c3*4 ~!4"

// Track 1 - defiant melody rising against the tide
$: note(defiantMelody)
  .slow(8)
  .apply(rageBrass)
  .pan(sine.range(0.35, 0.65).slow(6))
  .sometimes(x => x.add(note("7")))
  .detune(perlin.range(-8, 8).slow(4))

// Track 2 - stubborn bass, rhythmically insistent
$: note(stubbornBass)
  .slow(4)
  .apply(darkPad)
  .octave(2)
  .pan(0.45)
  .lpf(sine.range(600, 1600).slow(8))

// Track 3 - staccato stabs replace the ethereal choir
$: note(stabChords)
  .slow(8)
  .sound("square")
  .gain(0.12)
  .attack(0.001)
  .decay(0.15)
  .sustain(0)
  .release(0.2)
  .lpf(2200)
  .pan(0.6)
  .room(0.3)
  .delay(0.25)
  .delaytime(0.25)
  .delayfeedback(0.3)

// Track 4 - urgent pulse replaces faltering heartbeat
$: note(urgentPulse)
  .slow(8)
  .sound("pulse")
  .gain(0.18)
  .lpf(400)
  .hpf(60)
  .pan(0.5)
  .room(0.2)
  .attack(0.01)
  .decay(0.1)
  .sustain(0.3)
  .release(0.15)

// Track 5 - harmony shifts to dorian, finding strength
$: n("<0 2 4 6> <1 3 5 0>".slow(4))
  .scale("G:dorian")
  .slow(4)
  .sound("triangle")
  .gain(0.13)
  .octave(5)
  .attack(0.8)
  .release(1.5)
  .room(0.6)
  .delay(0.4)
  .delaytime(0.5)
  .delayfeedback(0.4)
  .pan(cosine.range(0.3, 0.7).slow(8))

// Track 6 - new: cascading arpeggios like shattering glass
$: n("0 2 4 6 7 6 4 2")
  .scale("G:dorian")
  .fast(2)
  .slow(4)
  .sound("triangle")
  .gain(0.09)
  .octave("<5 6>".slow(8))
  .attack(0.001)
  .decay(0.3)
  .sustain(0)
  .release(0.5)
  .room(0.7)
  .size(0.8)
  .delay(0.5)
  .delaytime(0.166)
  .delayfeedback(0.55)
  .pan(saw.range(0.2, 0.8).slow(2))