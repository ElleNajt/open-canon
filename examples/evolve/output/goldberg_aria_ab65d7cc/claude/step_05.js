// Goldberg Variations - Aria Reimagined (Variation: The Forgiveness)

let mournfulStrings = x => x
  .sound("sawtooth")
  .gain(0.18)
  .attack(1.2)
  .decay(0.8)
  .sustain(0.6)
  .release(2)
  .lpf(1200)
  .lpq(2)
  .room(0.8)
  .size(0.9)
  .delay(0.35)
  .delaytime(0.5)
  .delayfeedback(0.45)

let gentleBells = x => x
  .sound("sine")
  .gain(0.22)
  .attack(0.001)
  .decay(1.2)
  .sustain(0)
  .release(2)
  .fmi(0.5)
  .fmh(4)
  .room(0.85)
  .delay(0.5)
  .delaytime(0.666)
  .delayfeedback(0.5)

setcps(48/60/4)

// The melody surrenders - descending, accepting, finding peace
let surrenderMelody = "d5 ~!3 c5 b4 ~!2 a4 ~!3 g4 ~!4 fs4 g4 ~!6 a4 b4 c5 ~!3 d5 ~!7"

// Bass becomes a lullaby - rocking, gentle, cradling
let lullabyBass = "g2 ~ d2 ~ eb2 ~ d2 ~ c2 ~ g1 ~ d2 ~ ~ g1"

// Replacing stabs with suspended chords - questions left open
let suspendedChords = "[g3,c4,d4] ~!3 [d3,g3,a3] ~!3 [eb3,ab3,bb3] ~!3 [c3,f3,g3] ~!3"

// Track 1 - surrendering melody, finally descending with grace
$: note(surrenderMelody)
  .slow(8)
  .apply(mournfulStrings)
  .pan(sine.range(0.3, 0.7).slow(12))
  .lpf(sine.range(800, 2000).slow(16))

// Track 2 - lullaby bass, sparse and tender
$: note(lullabyBass)
  .slow(8)
  .sound("triangle")
  .gain(0.2)
  .octave(2)
  .attack(0.3)
  .decay(0.5)
  .sustain(0.4)
  .release(1)
  .lpf(600)
  .pan(0.4)
  .room(0.6)

// Track 3 - suspended chords floating like unanswered prayers
$: note(suspendedChords)
  .slow(8)
  .sound("sine")
  .gain(0.12)
  .attack(0.5)
  .decay(1)
  .sustain(0.3)
  .release(1.5)
  .fmi(0.3)
  .fmh(2)
  .pan(0.6)
  .room(0.7)
  .delay(0.4)
  .delaytime(0.75)
  .delayfeedback(0.4)

// Track 4 - breath replaces pulse, just air and space
$: s("~ hh:1 ~ ~")
  .slow(4)
  .gain(0.06)
  .lpf(3000)
  .hpf(2000)
  .room(0.9)
  .pan(rand.range(0.3, 0.7))

// Track 5 - harmony shifts to lydian, light breaking through
$: n("<0 2> <4 6>".slow(8))
  .scale("G:lydian")
  .slow(4)
  .apply(gentleBells)
  .octave(5)
  .pan(cosine.range(0.25, 0.75).slow(16))

// Track 6 - new: a single voice rising, a child's melody remembered
$: note("g4 a4 b4 d5 ~ b4 a4 g4 ~ ~ ~ ~ ~ ~ ~ ~")
  .slow(16)
  .sound("sine")
  .gain(0.15)
  .attack(0.1)
  .decay(0.4)
  .sustain(0.2)
  .release(1)
  .vibmod(0.3)
  .room(0.9)
  .size(0.95)
  .pan(0.5)
  .lpf(perlin.range(1500, 3000).slow(8))

// Track 7 - new: distant chimes marking the passage of time
$: note("<g6 d6 b5 g5>")
  .slow(16)
  .apply(gentleBells)
  .gain(0.08)
  .pan(saw.range(0.1, 0.9).slow(16))