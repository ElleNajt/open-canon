// BWV 1087 Canon 3

// Baroque style voices
let upperVoice = x => x
  .sound("triangle")
  .gain(0.41)
  .attack(0.02)
  .decay(0.18)
  .sustain(0.23)
  .lpf(2400)
  .room(0.23)

let lowerVoice = x => x
  .sound("square")
  .gain(0.36)
  .attack(0.02)
  .decay(0.16)
  .sustain(0.19)
  .lpf(1150)
  .room(0.16)

let bassVoice = x => x
  .sound("sawtooth")
  .gain(0.25)
  .attack(0.03)
  .decay(0.23)
  .lpf(720)
  .release(0.23)
  .room(0.22)
  .octave(-1)

// Light harpsichord-style accent for period feel
let harpsiAccent = x => x
  .sound("piano")
  .gain(0.14)
  .attack(0.005)
  .decay(0.14)
  .sustain(0.1)
  .lpf(4200)
  .room(0.16)
  .pan(0.5)

setcps(124/60/4)

// Track 1 - Upper canon - alternate notes add gentle reverb for depth and random vowel coloring
$: note("~!40 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!15")
  .slow(208/8/4)
  .apply(upperVoice)
  .pan(0.18)
  .degradeBy(0.02)
  .room(sine.range(0.19, 0.29).slow(12))
  .sometimes(x => x.vowel("<a o i e u>"))

// Track 2 - Lower canon - make rhythm more fluid with swing
$: note("~!8 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!15")
  .slow(208/8/4)
  .apply(lowerVoice)
  .pan(0.82)
  .room(0.17)
  .degradeBy(0.03)
  .swing(0.12)

// Track 3 - Contrapuntal bass, occasional octave lift for phrase ending
$: note("~!48 d3 ~!7 g3 ~!7 b2 ~!7 a2 ~!7 g3 ~!7 d3 ~!7 g2 ~!7 b2 ~!7 a2 ~!7 e3 ~!7 d3 ~!7 g2 ~!7 b2 ~!7 e3 ~!7 d3 ~!7 g2 ~!7 b2 ~!7 a2 ~!7 e3 ~!15")
  .slow(208/8/4)
  .apply(bassVoice)
  .pan(0.50)
  .degradeBy(0.08)
  .every(32, x => x.transpose(12))

// Track 4 - Baroque rhythm, sparse, and gentle random filter
$: stack([
  note("g4 ~ e4 ~").sound("triangle").gain(0.11).lpf(sine.range(700,1200).slow(4)).pan(0.11),
  note("d4 ~ b3 ~").sound("triangle").gain(0.12).lpf(sine.range(700,1000).slow(3)).pan(0.89)
]).slow(52/8/4)
.release(0.08)
.degradeBy(0.19)

// Track 5 - Harpsichord accent chords, more variety, sometimes reversed for sparkle
$: note("<d4 g4 b4> <e4 g4 c5> ~ <d4 g4 b4> <b3 e4 g4> ~ <d4 f4 a4>")
  .slow(26/8/4)
  .apply(harpsiAccent)
  .degradeBy(0.14)
  .sometimes(x => x.rev())

// Extra: Add a light, ghostly sine top-line that fades in/out
$: note("g6 ~ b5 ~ d6 ~ e6 ~").sound("sine").gain(0.064).attack(0.1).release(0.3).room(0.51).pan(0.35).slow(52/8/4).degradeBy(0.40)