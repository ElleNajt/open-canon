// BWV 1087 Canon 3 — Evolved REFINE

// Baroque style voices
let upperVoice = x => x
  .sound("triangle")
  .gain(0.41)
  .attack(0.018)
  .decay(0.21)
  .sustain(0.29)
  .lpf(2320)
  .room(sine.range(0.22,0.31).slow(19))

let lowerVoice = x => x
  .sound("square")
  .gain(0.29)
  .attack(0.02)
  .decay(0.17)
  .sustain(0.21)
  .lpf(1090)
  .room(sine.range(0.14,0.19).slow(17))

let bassVoice = x => x
  .sound("sawtooth")
  .gain(0.20)
  .attack(0.029)
  .decay(0.19)
  .lpf(sine.range(630,910).slow(9))
  .release(0.27)
  .room(0.22)
  .octave(-1)
  .pan(sine.range(0.37,0.72).slow(27))

// Light harpsichord-style accent for period feel
let harpsiAccent = x => x
  .sound("piano")
  .gain(0.12)
  .attack(0.004)
  .decay(0.15)
  .sustain(0.09)
  .lpf(3550)
  .room(sine.range(0.13, 0.21).slow(13))
  .pan(sine.range(0.13,0.84).slow(13))

setcps(122/60/4)

// Track 1 — upper canon evolving, broader motion, timbral drift; more presence, less FX layering, clear pan
$: note("~!38 d5 ~!5 e5 ~!6 gb5 ~!7 g5 ~!4 b5 ~!6 a5 ~!5 g5 ~!7 d6 ~!6 d5 ~!7 e5 ~!5 gb5 ~!6 g5 ~!8 b5 ~!7 a5 ~!5 g5 ~!6 d6 ~!7 d5 ~!7 e5 ~!5 gb5 ~!8 g5 ~!11")
  .slow(202/8/5)
  .apply(upperVoice)
  .pan(sine.range(0.17,0.36).slow(14))
  .degradeBy(0.05)
  .lpf(sine.range(1550, 2900).slow(16))
  .room(sine.range(0.21, 0.34).slow(21))
  .every(14, x => x.vowel("<a o u e i>"))
  .every(18, x => x.rev())
  .sometimes(x=>x.hpf(340))

// Track 2 — Lower canon: bandpass movements, crisper, less distortion, subtle swing
$: note("~!8 g5 ~!6 gb5 ~!6 e5 ~!7 d5 ~!5 b4 ~!6 c5 ~!6 d5 ~!7 g4 ~!6 g5 ~!6 gb5 ~!6 e5 ~!7 d5 ~!4 b4 ~!7 c5 ~!6 d5 ~!5 g4 ~!7 g5 ~!6 gb5 ~!6 e5 ~!6 d5 ~!5 b4 ~!6 c5 ~!6 d5 ~!7 g4 ~!9")
  .slow(202/8/5)
  .apply(lowerVoice)
  .pan(sine.range(0.66,0.93).slow(15))
  .room(sine.range(0.11,0.16).slow(13))
  .degradeBy(0.03)
  .swing(0.09)
  .sometimes(x => x.vowel("o u"))
  .rarely(x => x.bpf(sine.range(970,1190).slow(6)))
  .every(32, x => x.rev())

// Track 3 — Counterpoint bass: clarified voice, rare octave, less slide
$: note("~!39 d3 ~!8 g3 ~!6 b2 ~!5 a2 ~!7 g3 ~!5 d3 ~!6 g2 ~!8 b2 ~!7 a2 ~!4 e3 ~!6 d3 ~!5 g2 ~!6 b2 ~!6 e3 ~!6 d3 ~!7 g2 ~!7 b2 ~!6 a2 ~!6 e3 ~!10")
  .slow(202/8/5)
  .apply(bassVoice)
  .degradeBy(0.11)
  .shape(sine.range(0,0.09).slow(15))
  .every(32, x => x.transpose(12))
  .sometimes(x => x.lpf(380))
  .sometimes(x => x.detune(sine.range(-13, 14).slow(19)))

// Track 4 — Accent rhythm, more interplay, every accent panned
$: stack([
  note("g4 ~ e4 ~ ds4 ~").sound("triangle").gain(0.10).lpf(sine.range(750,1350).slow(9)).room(sine.range(0.07,0.14).slow(12)).pan(sine.range(0.05,0.33).slow(17)),
  note("d4 ~ b3 ~ f4 ~").sound("triangle").gain(0.11).lpf(sine.range(620,1120).slow(7)).room(0.06).pan(sine.range(0.74,0.97).slow(16))
]).slow(48/8/4)
.release(0.10)
.degradeBy(0.16)
.every(11,x=>x.rev())
.sometimes(x=>x.hpf(390))

// Track 5 — Harpsichord accent chords, more space, light random pan
$: note("<d4 g4 b4> <e4 g4 c5> ~ <d4 g4 b4> <b3 e4 g4> ~ <d4 f4 a4> <c4 e4 g4> <fs4 b4 d5> ~")
  .slow(21/8/4)
  .apply(harpsiAccent)
  .degradeBy(0.12)
  .velocity(rand.range(0.14,0.18))
  .pan(rand.range(0.21,0.81))

// Expressive ghost-sine, only single line, longer echo
$: note("g6 ~ b5 ~ d6 ~ e6 ~")
    .sound("sine")
    .gain(0.05)
    .attack(0.13)
    .release(0.43)
    .room(0.56)
    .pan(sine.range(0.21,0.53).slow(18))
    .slow(42/8/4)
    .degradeBy(0.28)
    .tremolo(0.15)
    .every(7, x => x.vowel("e"))
    .delay(0.17).delayfeedback(sine.range(0.16,0.24).slow(12))

// Metallic/noise: fuzzy hats and claps, less density, random crush for sparkle
$: stack([
  s("hh:2 ~ ~ ~").gain(0.07).pan(sine.range(0.09,0.15).slow(15)).room(0.04).sometimes(x => x.crush(7)),
  s("cp:1 ~ ~ ~").gain(0.044).pan(sine.range(0.82,0.94).slow(11)).room(sine.range(0.06,0.11).slow(5)).sometimes(x=>x.delay(0.13))
]).slow(38/8/4)
  .degradeBy(sine.range(0.36,0.61).slow(12))