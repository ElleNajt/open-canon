// BWV 1087 Canon 3 — Evolved REVISED 19 (Strudel: spacious, shimmering, pulse, breath, luminous air, inner bloom, constellations)

let upperVoice = x => x
  .sound("triangle")
  .gain(0.18)
  .attack(0.014)
  .decay(0.11)
  .sustain(0.38)
  .lpf(sine.range(1280,4080).slow(19))
  .room(sine.range(0.23,0.41).slow(25))
  .pan(sine.range(0.11,0.43).slow(17))
  .every(5, z => z.tremolo(0.09).tremolosync(5))

let lowerVoice = x => x
  .sound("square")
  .gain(0.108)
  .attack(0.021)
  .decay(0.2)
  .sustain(0.19)
  .bpf(sine.range(420,1160).slow(11))
  .room(sine.range(0.14,0.27).slow(13))
  .pan(sine.range(0.53,0.89).slow(21))
  .every(6, z => z.tremolo(0.08).tremolosync(7))

let bassVoice = x => x
  .sound("sawtooth")
  .gain(0.101)
  .attack(0.024)
  .decay(0.15)
  .lpf(sine.range(150,660).slow(18))
  .release(0.27)
  .room(0.26)
  .octave(-1)
  .pan(sine.range(0.19,0.36).slow(13))

let harpsiAccent = x => x
  .sound("piano")
  .gain(0.075)
  .attack(0.004)
  .decay(0.061)
  .sustain(0.040)
  .lpf(sine.range(4300,7500).slow(9))
  .room(sine.range(0.2,0.31).slow(14))
  .pan(rand.range(0.13,0.45))

setcps(114/60/4)

// Track 1 — upper canon: constellations, shimmer, hard/soft edge
$: stack([
  note("~!34 d5 ~!5 e5 ~!8 gb5 ~!7 g5 ~!18 b5 ~!12 a5 ~!6 g5 ~!15 d6 ~!7 d5 ~!8 e5 ~!6 gb5 ~!9 g5 ~!18 b5 ~!6 a5 ~ g5").slow(184/8/5.81),
  note("[<b4 e5>] ~ [d5 g5] ~ ![g5 b5] ~").slow(30/8/7.5)
])
  .apply(upperVoice)
  .degradeBy(0.13)
  .lpf(sine.range(1200,3690).slow(11))
  .room(sine.range(0.28,0.42).slow(17))
  .every(6, x => x.vowel("o i u a"))
  .every(8, x => x.palindrome())
  .sometimesBy(0.17, x => x.swing(rand.range(0.14,0.19)))
  .often(x => x.delay(0.12).delayfeedback(rand.range(0.1,0.18)))
  .sometimesBy(0.22, x => x.rev())

// Track 2 — lower canon: drifting, spiraling, luminous
$: stack([
  note("~!14 g5 ~!8 gb5 ~!15 e5 ~!2 d5 ~!10 ~ b4 ~!8 c5 ~!4 d5 ~!10 g4 ~!6 gb5 ~!4 e5 ~!7 d5 ~!10 b4 ~!3 c5 ~!18 d5 ~!3 g4").slow(189/8/8.01),
  note("~!8 g4 ~!11 c5 ~ ~!7 d4 ~!2").slow(29/8/7)
])
  .apply(lowerVoice)
  .degradeBy(0.13)
  .swing(0.13)
  .every(7, x => x.bpf(sine.range(420,1030).slow(14)).bpq(0.15))
  .every(13, x => x.vowel("u o e"))
  .sometimesBy(0.22, x => x.palindrome())
  .rarely(x => x.rev())
  .pan(sine.range(0.72,0.91).slow(10))

// Track 3 — Bass: slow veil, deep shimmer, low anchor
$: stack([
  note("~!19 d3 ~!9 g3 ~ b2 ~!17 a2 ~!4 g3 ~!5 d3 ~!16 g2 ~!3 b2 ~!11 a2 ~!7 e3 ~!8 d3 ~!8 g2 ~!6 b2 ~!14 a2 ~!6 d2").slow(171/8/6.7),
  note("[g3~d4] ~ ~ ~").slow(53/8/10)
])
  .apply(bassVoice)
  .degradeBy(0.15)
  .shape(sine.range(0.12,0.21).slow(15))
  .every(6, x => x.transpose(-12))
  .sometimesBy(0.22, x => x.sustain(0.55))
  .sometimesBy(0.15, x => x.release(0.61))
  .rarely(x => x.vowel("a"))
  .rarely(x => x.rev())

// Track 4 — Accent triangle: prismatic, orbiting, slight
$: note("[g4] ~ ~ ~ [e4] ~ [ds4] ~ [b4] ~ [a4] ~ ~ ~ [g4] ~")
  .sound("triangle")
  .gain(0.022)
  .lpf(sine.range(940,1230).slow(23))
  .room(sine.range(0.12,0.19).slow(19))
  .pan(rand.range(0.24,0.82))
  .attack(0.029)
  .release(0.14)
  .degradeBy(0.26)
  .every(10, x=>x.palindrome())
  .every(7, x=>x.rev())
  .sometimesBy(0.2, x=>x.drive(0.19))

// Track 5 — Harpsichord: lucid gold, ephemeral, gilded tips
$: note("<d4 ~ g4~> ~ <c4 ~ e4 ~> ~ <b3 ~ d5~> ~ <a3 ds4 ~> ~ ~ <e4 ~ cs5> ~")
  .slow(20/8/3.1)
  .apply(harpsiAccent)
  .degradeBy(0.21)
  .velocity(rand.range(0.11,0.16))
  .lpf(sine.range(4700,6700).slow(11))
  .pan(rand.range(0.13,0.5))
  .sustain(0.078)
  .every(12, x=>x.rev())

// Ghost sine: floating shimmer, soft respire, wide velvet
$: note("g6 ~ b5 ~ d6 ~ fs6 ~ gs6 ~ a6 ~ ~")
    .sound("sine")
    .gain(0.026)
    .attack(0.73)
    .release(3.3)
    .room(0.98)
    .pan(sine.range(0.2,0.95).slow(15))
    .slow(93/8/5.5)
    .degradeBy(0.34)
    .tremolo(sine.range(0.09,0.21).slow(15))
    .sometimesBy(0.19, x=>x.slide(rand.range(28,38)))
    .every(18, x => x.vowel("a i o"))
    .delay(0.47).delayfeedback(sine.range(0.12,0.23).slow(19))
    .rarely(x=>x.rev())

// Percussive metal/noise: flashes, dense mist, rare sparks
$: s("cp:2 ~ ~ ~ [~ cp:1] ~ ~ ~ ~ ~ ~")
    .gain(0.011)
    .pan(rand.range(0.41,0.93))
    .room(sine.range(0.17,0.34).slow(19))
    .decay(0.11)
    .sometimes(x=>x.delay(0.18))
    .rarely(x=>x.crush(1))
    .velocity(rand.range(0.09,0.14))
    .slow(43/8/5.3)
    .degradeBy(sine.range(0.77,0.96).slow(18))
    .every(13, x => x.distort(0.19).gain(0.14))