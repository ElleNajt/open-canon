// BWV 1087 Canon 3 — Evolved

// Baroque style voices
let upperVoice = x => x
  .sound("triangle")
  .gain(0.43)
  .attack(0.018)
  .decay(0.21)
  .sustain(0.31)
  .lpf(2500)
  .room(sine.range(0.21,0.34).slow(21))

let lowerVoice = x => x
  .sound("square")
  .gain(0.35)
  .attack(0.021)
  .decay(0.17)
  .sustain(0.21)
  .lpf(1170)
  .room(sine.range(0.14,0.20).slow(17))

let bassVoice = x => x
  .sound("sawtooth")
  .gain(0.23)
  .attack(0.034)
  .decay(0.21)
  .lpf(sine.range(690,1000).slow(10))
  .release(0.29)
  .room(0.25)
  .octave(-1)
  .pan(sine.range(0.42,0.62).slow(25))

// Light harpsichord-style accent for period feel
let harpsiAccent = x => x
  .sound("piano")
  .gain(0.15)
  .attack(0.004)
  .decay(0.16)
  .sustain(0.11)
  .lpf(4050)
  .room(sine.range(0.15, 0.23).slow(14))
  .pan(sine.range(0.11,0.89).slow(16))

setcps(126/60/4)

// Track 1 — upper canon evolving, broader motion, timbral drift
$: note("~!40 d5 ~!5 e5 ~!7 gb5 ~!8 g5 ~!4 b5 ~!8 a5 ~!6 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!8 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!8 d5 ~!7 e5 ~!7 gb5 ~!10 g5 ~!13")
  .slow(208/8/5)
  .apply(upperVoice)
  .pan(sine.range(0.09,0.41).slow(15).add(tri.range(-0.08,0.08).slow(23)))
  .degradeBy(0.07)
  .lpf(sine.range(1800, 3180).slow(18))
  .room(sine.range(0.19, 0.47).slow(22))
  .every(12, x => x.vowel("<a o i u e>"))
  .every(16, x => x.rev())
  .sometimes(x=>x.hpf(320))
  .sometimes(x=>x.delay(0.07).delayfeedback(0.14))

// Track 2 — Lower canon: bandpass movements, rare overdrive
$: note("~!9 g5 ~!7 gb5 ~!7 e5 ~!8 d5 ~!6 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!8 d5 ~!5 b4 ~!8 c5 ~!7 d5 ~!6 g4 ~!6 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!6 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!12")
  .slow(208/8/5)
  .apply(lowerVoice)
  .pan(sine.range(0.53,0.97).slow(15))
  .room(sine.range(0.13,0.21).slow(13))
  .degradeBy(0.04)
  .swing(0.13)
  .sometimes(x => x.vowel("o a o"))
  .rarely(x => x.bpf(sine.range(1030,1250).slow(7)))
  .sometimes(x => x.distort(0.07))
  .every(28, x => x.rev())

// Track 3 — Counterpoint bass: rare pitch slides and shape
$: note("~!46 d3 ~!9 g3 ~!7 b2 ~!6 a2 ~!8 g3 ~!6 d3 ~!7 g2 ~!7 b2 ~!9 a2 ~!5 e3 ~!7 d3 ~!6 g2 ~!7 b2 ~!7 e3 ~!7 d3 ~!7 g2 ~!7 b2 ~!7 a2 ~!7 e3 ~!13")
  .slow(208/8/5)
  .apply(bassVoice)
  .degradeBy(0.13)
  .shape(sine.range(0,0.11).slow(17))
  .every(24, x => x.transpose(12))
  .sometimes(x => x.lpf(410))
  .sometimes(x => x.slide([0, 0, 0, 4, 0, -2, 0]).slow(24))
  .sometimes(x => x.detune(sine.range(-17, 18).slow(21)))

// Track 4 — Accent rhythm, more interplay, occasional reverb
$: stack([
  note("g4 ~ e4 ~ ds4 ~").sound("triangle").gain(0.12).lpf(sine.range(740,1600).slow(11)).room(sine.range(0.08,0.22).slow(14)).pan(sine.range(0.03,0.36).slow(19)),
  note("d4 ~ b3 ~ f4 ~").sound("triangle").gain(0.125).lpf(sine.range(630,1230).slow(8)).room(0.08).pan(sine.range(0.64,0.99).slow(20))
]).slow(52/8/4)
.release(0.12)
.degradeBy(0.21)
.every(10,x=>x.rev())
.sometimes(x=>x.hpf(410))

// Track 5 — Harpsichord accent chords, slight shimmer
$: note("<d4 g4 b4> <e4 g4 c5> ~ <d4 g4 b4> <b3 e4 g4> ~ <d4 f4 a4> <c4 e4 g4> <fs4 b4 d5> ~")
  .slow(26/8/4)
  .apply(harpsiAccent)
  .degradeBy(0.15)
  .sometimes(x => x.rev())
  .velocity(rand.range(0.14,0.19))
  .pan(rand.range(0.18,0.82))

// Extra: expressive ghost-sine, echo feedback modulates
$: stack([
  note("g6 ~ b5 ~ d6 ~ e6 ~").sound("sine")
    .gain(0.07)
    .attack(0.17)
    .release(0.41)
    .room(0.61)
    .pan(sine.range(0.18,0.56).slow(18))
    .slow(50/8/4)
    .degradeBy(0.36)
    .tremolo(0.17)
    .every(6, x => x.vowel("e"))
    .delay(0.12).delayfeedback(sine.range(0.13,0.22).slow(12)),
  note("g6 d6").sound("sine")
    .gain(0.038)
    .attack(0.08)
    .release(0.24)
    .room(0.49)
    .pan(0.46)
    .slow(148/8/4)
    .degradeBy(0.39)
])

// Baroque clockwork, metallic glitches, more entropy in noise layer
$: stack([
  s("hh:2 ~ cp:1 ~").gain(0.09).pan(sine.range(0.08,0.13).slow(19)).room(0.07).sometimes(x => x.crush(5)),
  s("oh:3 ~ ~ ~").gain(0.049).pan(sine.range(0.88,0.95).slow(14)).room(sine.range(0.07,0.13).slow(7)).sometimes(x=>x.delay(0.17))
]).slow(52/8/4)
  .degradeBy(sine.range(0.51,0.85).slow(16))