// BWV 1087 Canon 3 — Evolved REVISED 17 (Strudel: crisp clarity, deeper shimmer, radiant lift, stillness and breath, extra nuance)

let upperVoice = x => x
  .sound("triangle")
  .gain(0.21)
  .attack(0.011)
  .decay(0.13)
  .sustain(0.29)
  .lpf(sine.range(1550,3210).slow(15))
  .pan(sine.range(0.11,0.41).slow(23))
  .room(sine.range(0.18,0.37).slow(15))

let lowerVoice = x => x
  .sound("square")
  .gain(0.11)
  .attack(0.019)
  .decay(0.16)
  .sustain(0.19)
  .bpf(sine.range(500,1310).slow(11))
  .room(sine.range(0.16,0.25).slow(21))
  .pan(sine.range(0.65,0.91).slow(19))

let bassVoice = x => x
  .sound("sawtooth")
  .gain(0.123)
  .attack(0.019)
  .decay(0.11)
  .lpf(sine.range(165,820).slow(13))
  .release(0.39)
  .room(0.28)
  .octave(-1)
  .pan(sine.range(0.09,0.23).slow(17))

let harpsiAccent = x => x
  .sound("piano")
  .gain(0.097)
  .attack(0.004)
  .decay(0.072)
  .sustain(0.041)
  .lpf(sine.range(4400,6500).slow(6))
  .room(sine.range(0.12,0.29).slow(13))
  .pan(rand.range(0.18,0.55))

setcps(118/60/4)

// Track 1 — upper canon: crisp clarity and glassy shimmer
$: stack([
  note("~!36 d5 ~!7 e5 ~!6 gb5 ~!6 g5 ~!10 b5 ~!14 a5 ~!4 g5 ~!10 d6 ~!4 d5 ~!9 e5 ~!6 gb5 ~!6 g5 ~!12 b5 ~!7 a5 ~ g5").slow(172/8/5.26),
  note("[<b4 e5>] ~ [d5 g5] ~ ![g5 b5] ~").slow(33/8/7)
])
  .apply(upperVoice)
  .degradeBy(0.14)
  .lpf(sine.range(1420,3320).slow(11))
  .room(sine.range(0.21,0.41).slow(17))
  .every(4, x => x.vowel("o i u a"))
  .every(6, x => x.palindrome())
  .sometimesBy(0.22, x => x.swing(rand.range(0.09,0.18)))
  .often(x => x.delay(0.15).delayfeedback(rand.range(0.13,0.16)))
  .sometimesBy(0.14, x => x.rev())

// Track 2 — lower canon: deep interplay, extra nuance in breath
$: stack([
  note("~!11 g5 ~!8 gb5 ~!14 e5 ~!4 d5 ~!7 ~ b4 ~!6 c5 ~!5 d5 ~!12 g4 ~!7 gb5 ~!4 e5 ~!7 d5 ~!10 b4 ~!2 c5 ~!14 d5 ~!5 g4").slow(177/8/6.74),
  note("~!7 g4 ~!11 c5 ~ ~!7 d4 ~!2").slow(28/8/8)
])
  .apply(lowerVoice)
  .degradeBy(0.16)
  .swing(0.09)
  .every(5, x => x.bpf(sine.range(590,1210).slow(20)).bpq(0.22))
  .every(9, x => x.vowel("u o e"))
  .sometimesBy(0.21, x => x.palindrome())
  .rarely(x => x.rev())
  .pan(sine.range(0.62,0.95).slow(10))

// Track 3 — Bass: radiant sustain, deeper shimmers
$: stack([
  note("~!17 d3 ~!9 g3 ~ b2 ~!16 a2 ~!5 g3 ~!6 d3 ~!11 g2 ~!7 b2 ~!8 a2 ~!5 e3 ~!8 d3 ~!5 g2 ~!10 b2 ~!15 a2 ~!5 d2").slow(159/8/6.55),
  note("[g3~d4] ~ ~ ~").slow(69/8/14)
])
  .apply(bassVoice)
  .degradeBy(0.16)
  .shape(sine.range(0.09,0.21).slow(15))
  .every(6, x => x.transpose(-12))
  .sometimesBy(0.28, x => x.sustain(0.46))
  .sometimesBy(0.17, x => x.release(0.54))
  .rarely(x => x.vowel("o a"))
  .rarely(x => x.rev())

// Track 4 — Accent triangle: stillness, space, gentle brightness
$: note("[g4] ~ ~ ~ [e4] ~ [ds4] ~ [b4] ~ [a4] ~ ~ ~ [g4] ~")
  .sound("triangle")
  .gain(0.026)
  .lpf(sine.range(890,1300).slow(17))
  .room(sine.range(0.11,0.16).slow(19))
  .pan(rand.range(0.29,0.81))
  .attack(0.025)
  .release(0.23)
  .degradeBy(0.24)
  .every(11, x=>x.palindrome())
  .every(6, x=>x.rev())
  .sometimesBy(0.18, x=>x.drive(0.27))

// Track 5 — Harpsichord: glowing, with breathier tails and rare shine
$: note("<d4 ~ g4~> ~ <c4 ~ e4 ~> ~ <b3 ~ d5~> ~ <a3 ds4 ~> ~ ~ <e4 ~ cs5> ~")
  .slow(25/8/3.2)
  .apply(harpsiAccent)
  .degradeBy(0.21)
  .velocity(rand.range(0.11,0.18))
  .lpf(sine.range(4300,5700).slow(13))
  .pan(rand.range(0.14,0.51))
  .sustain(0.089)
  .every(9, x=>x.rev())

// Ghost sine: spacing, spectral shimmer, radiant resonance
$: note("g6 ~ b5 ~ d6 ~ fs6 ~ gs6 ~ a6 ~ ~")
    .sound("sine")
    .gain(0.031)
    .attack(0.48)
    .release(2.91)
    .room(0.99)
    .pan(sine.range(0.19,0.99).slow(13))
    .slow(93/8/5.1)
    .degradeBy(0.38)
    .tremolo(sine.range(0.14,0.29).slow(14))
    .sometimesBy(0.19, x=>x.slide(rand.range(18,39)))
    .every(15, x => x.vowel("a i o"))
    .delay(0.48).delayfeedback(sine.range(0.12,0.28).slow(13))
    .rarely(x=>x.rev())

// Percussive metal/noise: ghostly, more space, rare glow
$: s("cp:2 ~ ~ ~ [~ cp:1] ~ ~ ~ ~ ~ ~")
    .gain(0.013)
    .pan(rand.range(0.38,0.87))
    .room(sine.range(0.21,0.29).slow(16))
    .decay(0.12)
    .sometimes(x=>x.delay(0.22))
    .rarely(x=>x.crush(2))
    .velocity(rand.range(0.07,0.11))
    .slow(37/8/5.6)
    .degradeBy(sine.range(0.72,0.97).slow(15))
    .every(17, x => x.distort(0.21).gain(0.18))