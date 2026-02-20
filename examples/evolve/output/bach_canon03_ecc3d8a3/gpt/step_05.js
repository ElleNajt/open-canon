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

// Track 1 - Upper canon - more dynamic vowel and gentle filtering movement
$: note("~!40 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!15")
  .slow(208/8/4)
  .apply(upperVoice)
  .pan(sine.range(0.11,0.33).slow(15))
  .degradeBy(0.02)
  .lpf(sine.range(2000, 3000).slow(22))
  .room(sine.range(0.19, 0.34).slow(12))
  .every(20, x => x.vowel("<a o i u e>"))
  .every(24, x => x.rev())

// Track 2 - Lower canon - wobble room and rare bandpass for soft nuance
$: note("~!8 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!15")
  .slow(208/8/4)
  .apply(lowerVoice)
  .pan(sine.range(0.62,0.88).slow(36))
  .room(sine.range(0.13,0.21).slow(16))
  .degradeBy(0.03)
  .swing(0.12)
  .sometimes(x => x.vowel("o a o"))
  .rarely(x => x.bpf(1150))

// Track 3 - Contrapuntal bass, subtle periodic filter modulation and random pan flickers
$: note("~!48 d3 ~!7 g3 ~!7 b2 ~!7 a2 ~!7 g3 ~!7 d3 ~!7 g2 ~!7 b2 ~!7 a2 ~!7 e3 ~!7 d3 ~!7 g2 ~!7 b2 ~!7 e3 ~!7 d3 ~!7 g2 ~!7 b2 ~!7 a2 ~!7 e3 ~!15")
  .slow(208/8/4)
  .apply(bassVoice)
  .pan(rand.range(0.46,0.54))
  .degradeBy(0.08)
  .lpf(sine.range(600,900).slow(34))
  .every(32, x => x.transpose(12))
  .sometimes(x => x.lpf(440))

// Track 4 - Baroque rhythm, more irregular filtering and slow left-right drift
$: stack([
  note("g4 ~ e4 ~").sound("triangle").gain(0.11).lpf(sine.range(700,1400).slow(9)).pan(sine.range(0.07,0.31).slow(19)),
  note("d4 ~ b3 ~").sound("triangle").gain(0.12).lpf(sine.range(700,1000).slow(4)).pan(sine.range(0.68,0.99).slow(18))
]).slow(52/8/4)
.release(0.08)
.degradeBy(0.21)
.every(8,x=>x.rev())
.sometimes(x=>x.hpf(320))

// Track 5 - Harpsichord accent chords, richer voicings and randomize pan
$: note("<d4 g4 b4> <e4 g4 c5> ~ <d4 g4 b4> <b3 e4 g4> ~ <d4 f4 a4> <c4 e4 g4>")
  .slow(26/8/4)
  .apply(harpsiAccent)
  .degradeBy(0.14)
  .sometimes(x => x.rev())
  .velocity(rand.range(0.11,0.18))
  .pan(rand.range(0.15,0.85))

// Extra: Ghostly sine top-line, added subtle tremolo effect, and slightly thicker harmony on last two notes
$: stack([
  note("g6 ~ b5 ~ d6 ~ e6 ~").sound("sine")
    .gain(0.064)
    .attack(0.1)
    .release(0.3)
    .room(0.51)
    .pan(sine.range(0.17,0.47).slow(21))
    .slow(52/8/4)
    .degradeBy(0.40)
    .tremolo(0.14)
    .every(16, x => x.vowel("e")),
  note("g6 d6").sound("sine")
    .gain(0.037)
    .attack(0.08)
    .release(0.22)
    .room(0.43)
    .pan(0.39)
    .slow(156/8/4)
    .degradeBy(0.47)
])

// New: Baroque clockwork, rare metallic sparkle, ever-slower entropy
$: stack([
  s("hh:2 ~ cp:1 ~").gain(0.08).pan(0.07).room(0.04).sometimes(x => x.crush(6)),
  s("oh:3 ~ ~ ~").gain(0.04).pan(0.91).room(0.08).sometimes(x=>x.delay(0.11))
]).slow(52/8/4)
  .degradeBy(sine.range(0.45,0.7).slow(17))