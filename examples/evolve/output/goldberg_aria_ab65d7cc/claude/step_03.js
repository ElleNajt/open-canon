// Goldberg Variations - Aria Reimagined (The Machine Learns to Grieve)

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

let choralVoice = x => x
  .sound("sine")
  .gain(0.2)
  .attack(0.4)
  .decay(0.3)
  .sustain(0.8)
  .release(1.5)
  .lpf(1800)
  .room(0.75)
  .size(0.85)

setcps(46/60/4)

// The melody inverts - what rose now falls, a mirror of sorrow
let invertedMelody = "d5 c5 b4 g4 ~!3 fs4 g4 a4 b4 ~!3 c5 d5 ~!7 g4 fs4 e4 d4 ~!3 c4 ~!7 d4 ~!15"

// Bass becomes a lament - descending chromatic line
let lamentBass = "g2 ~!3 fs2 ~!3 f2 ~!3 e2 ~!3 eb2 ~!3 d2 ~!3 cs2 ~!3 c2 ~!3"

// Replacing music box with a choir of stuttering ghosts
let choirFragment = "[g4,b4,d5] ~!3 [fs4,a4,d5] ~!3 [f4,a4,c5] ~!3 [e4,g4,b4] ~!3"

// New element - a heartbeat that falters
let falteringHeart = "c1 c1 ~ ~!5 c1 ~ c1 ~!5 ~ c1 ~!3"

// Track 1 - inverted melody, falling into itself
$: note(invertedMelody)
  .slow(8)
  .apply(choralVoice)
  .slide(0.15)
  .pan(sine.range(0.3, 0.7).slow(10))
  .sometimes(x => x.add(12))
  .detune(perlin.range(-15, 15).slow(8))

// Track 2 - chromatic descent, the ground dissolving
$: note(lamentBass)
  .slow(8)
  .apply(darkPad)
  .octave(2)
  .pan(0.4)
  .lpf(sine.range(400, 1200).slow(16))

// Track 3 - spectral choir replaces music box
$: note(choirFragment)
  .slow(8)
  .apply(bellVoice)
  .gain(0.15)
  .octave("<4 5>".slow(8))
  .pan(0.65)
  .delay(0.5)
  .delaytime(0.5)
  .delayfeedback(0.6)
  .degradeBy(0.2)

// Track 4 - faltering heartbeat, mortality made audible
$: note(falteringHeart)
  .slow(4)
  .sound("sine")
  .gain(0.4)
  .lpf(80)
  .distort(0.3)
  .pan(0.5)
  .room(0.3)

// Track 5 - harmony shifts to phrygian, darker still
$: n("<0 1 3 5> <0 2 4 7>".slow(8))
  .scale("G:phrygian")
  .slow(4)
  .sound("triangle")
  .gain(0.14)
  .octave(5)
  .attack(1.2)
  .release(2)
  .room(0.85)
  .delay(0.55)
  .delaytime(0.75)
  .delayfeedback(0.5)
  .pan(cosine.range(0.25, 0.75).slow(12))

// Track 6 - new: distant bells marking time's passage
$: note("<g6 d6 b5 g5>")
  .slow(16)
  .sound("triangle")
  .gain(0.12)
  .attack(0.001)
  .decay(2)
  .sustain(0)
  .release(3)
  .room(0.9)
  .size(0.95)
  .delay(0.7)
  .delaytime(1.333)
  .delayfeedback(0.65)
  .pan(rand.range(0.2, 0.8))