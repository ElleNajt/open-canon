// Goldberg Variations - Aria Reimagined (Resurrection Through Decay)

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

let wailingLead = x => x
  .sound("sawtooth")
  .gain(0.22)
  .attack(0.3)
  .decay(0.4)
  .sustain(0.6)
  .release(0.8)
  .lpf(1200)
  .lpq(6)
  .room(0.5)

setcps(52/60/4)

// The melody fights to remember itself - rising now instead of falling
let resurrectedMelody = "g4 a4 b4 d5 ~!3 eb5 d5 c5 b4 ~!3 a4 g4 ~!7 d5 eb5 f5 g5 ~!3 a5 ~!7 g5 ~!15"

// Bass becomes a ground bass - obsessive, circular
let groundBass = "g2 ~!3 d2 ~!3 eb2 ~!3 c2 ~!3 g2 ~!3 f2 ~!3 eb2 ~!3 d2 ~!3"

// New element - a music box memory, high and fragile
let musicBox = "d6 ~ b5 ~ g5 ~ d5 ~ b5 ~ g5 ~ d6 ~ ~ ~ g6 ~!3"

// Breath rhythm - now syncopated, anxious
let anxiousBreath = "c2 ~ c2 ~ ~ c2 ~ ~ c2 c2 ~ ~ ~ c2 ~ ~"

// Track 1 - melody rises from ashes
$: note(resurrectedMelody)
  .slow(8)
  .apply(wailingLead)
  .slide(0.1)
  .pan(sine.range(0.25, 0.75).slow(12))
  .every(4, x => x.octave(5))

// Track 2 - obsessive ground bass
$: note(groundBass)
  .slow(8)
  .apply(darkPad)
  .octave("<2 2 2 3>".slow(16))
  .pan(0.45)

// Track 3 - music box ghost (new texture entirely)
$: note(musicBox)
  .slow(4)
  .apply(bellVoice)
  .gain(0.18)
  .degradeBy(0.3)
  .pan(0.7)
  .sometimes(x => x.detune(12))

// Track 4 - anxious mechanical pulse
$: note(anxiousBreath)
  .slow(4)
  .sound("pulse")
  .gain(0.35)
  .lpf(500)
  .lpenv(6)
  .lpdecay(0.15)
  .pan(0.35)
  .every(3, x => x.crush(6))

// Track 5 - harmonic cloud shifts to major/minor ambiguity
$: n("<0 2 4 6> <0 3 5 7>".slow(8).scale("G:dorian"))
  .slow(4)
  .sound("sine")
  .gain(0.18)
  .octave(5)
  .attack(0.8)
  .release(1.5)
  .room(0.8)
  .delay(0.6)
  .delaytime(0.666)
  .delayfeedback(0.55)
  .pan(cosine.range(0.2, 0.8).slow(16))
  .detune(perlin.range(-8, 8).slow(6))