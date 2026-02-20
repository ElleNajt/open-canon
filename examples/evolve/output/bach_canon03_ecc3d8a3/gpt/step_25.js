// BWV 1087 Canon 3 — Evolved REVISED 16 (Strudel: clarity, elegant breath, nuanced drama, gentle shimmer, organic lift, radiant space, floating moments)

let upperVoice = x => x
  .sound("triangle")
  .gain(0.22)
  .attack(0.013)
  .decay(0.14)
  .sustain(0.285)
  .lpf(sine.range(1560,3110).slow(18))
  .pan(sine.range(0.13,0.42).slow(24))
  .room(sine.range(0.24,0.38).slow(11))

let lowerVoice = x => x
  .sound("square")
  .gain(0.13)
  .attack(0.016)
  .decay(0.19)
  .sustain(0.17)
  .bpf(sine.range(510,1290).slow(13))
  .room(sine.range(0.18,0.28).slow(17))
  .pan(sine.range(0.67,0.93).slow(21))

let bassVoice = x => x
  .sound("sawtooth")
  .gain(0.135)
  .attack(0.025)
  .decay(0.13)
  .lpf(sine.range(190,770).slow(11))
  .release(0.34)
  .room(0.24)
  .octave(-1)
  .pan(sine.range(0.11,0.21).slow(21))

let harpsiAccent = x => x
  .sound("piano")
  .gain(0.112)
  .attack(0.002)
  .decay(0.061)
  .sustain(0.035)
  .lpf(sine.range(4100,6400).slow(7))
  .room(sine.range(0.19,0.33).slow(17))
  .pan(rand.range(0.17,0.62))

setcps(117/60/4)

// Track 1 — upper canon: clarity and floating shimmer
$: stack([
  note("~!36 d5 ~!6 e5 ~!6 gb5 ~!5 g5 ~!8 b5 ~!13 a5 ~!3 g5 ~!8 d6 ~!5 d5 ~!10 e5 ~!5 gb5 ~!5 g5 ~!13 b5 ~!6 a5 ~ g5").slow(168/8/5.07),
  note("[<b4 e5>] ~ [d5 g5] ~ ![g5 b5] ~").slow(35/8/8)
])
  .apply(upperVoice)
  .degradeBy(0.11)
  .lpf(sine.range(1370,3260).slow(13))
  .room(sine.range(0.19,0.39).slow(18))
  .every(5, x => x.vowel("o i u a"))
  .every(6, x => x.palindrome())
  .sometimesBy(0.18, x => x.swing(rand.range(0.08,0.15)))
  .often(x => x.delay(0.21).delayfeedback(rand.range(0.14,0.19)))
  .sometimesBy(0.1, x => x.rev())

// Track 2 — lower canon: elegant interplay, subtle drama
$: stack([
  note("~!14 g5 ~!6 gb5 ~!12 e5 ~!5 d5 ~!9 ~ b4 ~!7 c5 ~!4 d5 ~!14 g4 ~!8 gb5 ~!3 e5 ~!4 d5 ~!9 b4 ~!3 c5 ~!12 d5 ~!7 g4").slow(181/8/6.23),
  note("~!8 g4 ~!12 c5 ~ ~!6 d4 ~!2").slow(33/8/8)
])
  .apply(lowerVoice)
  .degradeBy(0.13)
  .swing(0.11)
  .every(3, x => x.bpf(sine.range(600,1100).slow(20)).bpq(0.27))
  .every(8, x => x.vowel("u o e"))
  .sometimesBy(0.26, x => x.palindrome())
  .rarely(x => x.rev())
  .pan(sine.range(0.65,0.93).slow(13))

// Track 3 — Bass: bolder drama, airy sustain, elegant motion
$: stack([
  note("~!19 d3 ~!8 g3 ~ b2 ~!13 a2 ~!5 g3 ~!5 d3 ~!10 g2 ~!8 b2 ~!7 a2 ~!5 e3 ~!7 d3 ~!6 g2 ~!8 b2 ~!14 a2 ~!6 d2").slow(162/8/6.34),
  note("[g3~d4] ~ ~ ~").slow(75/8/15)
])
  .apply(bassVoice)
  .degradeBy(0.12)
  .shape(sine.range(0.07,0.17).slow(14))
  .every(8, x => x.transpose(-12))
  .sometimesBy(0.22, x => x.sustain(0.41))
  .sometimesBy(0.19, x => x.release(0.44))
  .rarely(x => x.vowel("o a"))
  .rarely(x => x.rev())

// Track 4 — Accent triangle: floating and crisper, extra space
$: note("[g4] ~ ~ ~ [e4] ~ [ds4] ~ [b4] ~ [a4] ~ ~ ~ [g4] ~")
  .sound("triangle")
  .gain(0.031)
  .lpf(sine.range(940,1300).slow(12))
  .room(sine.range(0.13,0.19).slow(17))
  .pan(rand.range(0.28,0.73))
  .attack(0.021)
  .release(0.19)
  .degradeBy(0.19)
  .every(9, x=>x.palindrome())
  .every(5, x=>x.rev())
  .sometimesBy(0.17, x=>x.drive(0.34))

// Track 5 — Harpsichord: rare, glowing, gentle, breathier tails
$: note("<d4 ~ g4~> ~ <c4 ~ e4 ~> ~ <b3 ~ d5~> ~ <a3 ds4 ~> ~ ~ <e4 ~ cs5> ~")
  .slow(21/8/2.9)
  .apply(harpsiAccent)
  .degradeBy(0.19)
  .velocity(rand.range(0.13,0.19))
  .lpf(sine.range(4200,5900).slow(10))
  .pan(rand.range(0.16,0.47))
  .sustain(0.076)
  .every(11, x=>x.rev())

// Ghost sine: more space, extended echoes, spectral shimmer
$: note("g6 ~ b5 ~ d6 ~ fs6 ~ gs6 ~ a6 ~ ~")
    .sound("sine")
    .gain(0.026)
    .attack(0.44)
    .release(2.81)
    .room(0.99)
    .pan(sine.range(0.22,0.97).slow(12))
    .slow(87/8/4.9)
    .degradeBy(0.36)
    .tremolo(sine.range(0.15,0.27).slow(15))
    .sometimesBy(0.15, x=>x.slide(rand.range(21,35)))
    .every(13, x => x.vowel("a i o"))
    .delay(0.43).delayfeedback(sine.range(0.13,0.31).slow(11))
    .rarely(x=>x.rev())

// Percussive metal/noise: subtle layers, occasional glow
$: s("cp:2 ~ ~ ~ [~ cp:1] ~ ~ ~ ~ ~ ~")
    .gain(0.015)
    .pan(rand.range(0.36,0.82))
    .room(sine.range(0.27,0.42).slow(12))
    .decay(0.099)
    .sometimes(x=>x.delay(0.17))
    .rarely(x=>x.crush(2))
    .velocity(rand.range(0.08,0.14))
    .slow(31/8/4.9)
    .degradeBy(sine.range(0.67,0.89).slow(19))
    .every(19, x => x.distort(0.16).gain(0.14))