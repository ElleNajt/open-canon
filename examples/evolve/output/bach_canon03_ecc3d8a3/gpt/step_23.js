// BWV 1087 Canon 3 — Evolved REVISED 14 (Strudel: breath, curves, glowing space, organic lift, new clarity & suspension)

let upperVoice = x => x
  .sound("triangle")
  .gain(0.21)
  .attack(0.012)
  .decay(0.13)
  .sustain(0.25)
  .lpf(sine.range(1480,3250).slow(23))
  .pan(sine.range(0.19,0.34).slow(19))
  .room(sine.range(0.17,0.35).slow(17))

let lowerVoice = x => x
  .sound("square")
  .gain(0.12)
  .attack(0.016)
  .decay(0.17)
  .sustain(0.13)
  .bpf(sine.range(500,1350).slow(21))
  .room(sine.range(0.17,0.28).slow(15))
  .pan(sine.range(0.64,0.92).slow(13))

let bassVoice = x => x
  .sound("sawtooth")
  .gain(0.13)
  .attack(0.023)
  .decay(0.11)
  .lpf(sine.range(170,820).slow(17))
  .release(0.23)
  .room(0.19)
  .octave(-1)
  .pan(sine.range(0.11,0.19).slow(16))

let harpsiAccent = x => x
  .sound("piano")
  .gain(0.14)
  .attack(0.001)
  .decay(0.044)
  .sustain(0.033)
  .lpf(sine.range(4200,5700).slow(13))
  .room(sine.range(0.17,0.26).slow(11))
  .pan(rand.range(0.16,0.62))

setcps(116/60/4)

// Track 1 — upper canon: more flowing, subtle rare delays, breathing curve
$: stack([
  note("~!34 d5 ~!7 e5 ~!7 gb5 ~!5 g5 ~!8 b5 ~!12 a5 ~!2 g5 ~!8 d6 ~!4 d5 ~!9 e5 ~!6 gb5 ~!4 g5 ~!14 b5 ~!6 a5 ~!6 ~ g5").slow(165/8/5.0),
  note("[<b4 e5>] ~ [d5 g5] ~ ![g5 b5] ~").slow(32/8/8)
])
  .apply(upperVoice)
  .degradeBy(0.14)
  .lpf(sine.range(1330,3220).slow(13))
  .room(sine.range(0.22,0.36).slow(19))
  .every(4, x => x.vowel("o i u a"))
  .every(3, x => x.palindrome())
  .sometimesBy(0.21, x => x.swing(rand.range(0.09,0.17)))
  .rarely(x => x.delay(0.19).delayfeedback(rand.range(0.19,0.26)))
  .sometimesBy(0.12, x => x.rev())

// Track 2 — lower canon: more expressive resonance, increased interplay
$: stack([
  note("~!13 g5 ~!8 gb5 ~!11 e5 ~!6 d5 ~!10 ~ b4 ~!6 c5 ~!4 d5 ~!14 g4 ~!7 gb5 ~!4 e5 ~!6 d5 ~!8 b4 ~!3 c5 ~!8 d5 ~!8 g4").slow(176/8/6.8),
  note("~!7 g4 ~!11 c5 ~ ~!4 d4 ~!3").slow(31/8/8)
])
  .apply(lowerVoice)
  .degradeBy(0.15)
  .swing(0.12)
  .every(2, x => x.bpf(sine.range(540,1300).slow(16)).bpq(0.21))
  .every(6, x => x.vowel("u o e"))
  .sometimesBy(0.19, x => x.palindrome())
  .sometimesBy(0.09, x => x.rev())
  .pan(sine.range(0.68,0.91).slow(15))

// Track 3 — Bass: deeper tail, sometimes more presence, slightly extended
$: stack([
  note("~!21 d3 ~!7 g3 ~ b2 ~!10 a2 ~!6 g3 ~!6 d3 ~!8 g2 ~!7 b2 ~!9 a2 ~!7 e3 ~!8 d3 ~!4 g2 ~!8 b2 ~!11 a2 ~!7 d2").slow(158/8/6.0),
  note("[g3~d4]").slow(73/8/15)
])
  .apply(bassVoice)
  .degradeBy(0.16)
  .shape(sine.range(0,0.18).slow(9))
  .every(8, x => x.transpose(-12))
  .sometimesBy(0.18, x => x.sustain(0.32))
  .rarely(x => x.vowel("o a"))
  .sometimesBy(0.16, x => x.release(0.36))
  .rarely(x => x.rev())

// Track 4 — Accent triangle: sparser, airy, more space
$: note("[g4] ~ ~ ~ ~ [e4] ~ ~ [ds4] ~ [b4] ~ [a4] ~ ~ ~ [g4] ~")
  .sound("triangle")
  .gain(0.044)
  .lpf(sine.range(900,1130).slow(16))
  .room(sine.range(0.12,0.18).slow(14))
  .pan(rand.range(0.3,0.85))
  .attack(0.016)
  .release(0.14)
  .degradeBy(0.19)
  .every(5, x=>x.palindrome())
  .every(4, x=>x.rev())
  .sometimesBy(0.15, x=>x.drive(0.25))

// Track 5 — Sparse harpsichord: more shimmer, slower, rare reverse
$: note("<d4 ~ g4~> ~ <c4 ~ e4 ~> ~ <b3 ~ d5~> ~ <a3 ds4 ~> ~ ~ <e4 ~ cs5> ~")
  .slow(15/8/2.7)
  .apply(harpsiAccent)
  .degradeBy(0.22)
  .velocity(rand.range(0.14,0.20))
  .lpf(sine.range(3400,4700).slow(15))
  .pan(rand.range(0.14,0.52))
  .sustain(0.066)
  .every(10, x=>x.rev())

// Ghost sine: more "float", rare pitch slide, extended trails
$: note("g6 ~ b5 ~ d6 ~ fs6 ~ gs6 ~ a6 ~ ~")
    .sound("sine")
    .gain(0.019)
    .attack(0.44)
    .release(2.0)
    .room(0.98)
    .pan(sine.range(0.21,0.98).slow(19))
    .slow(97/8/4.3)
    .degradeBy(0.36)
    .tremolo(sine.range(0.11,0.2).slow(21))
    .sometimesBy(0.15, x=>x.slide(rand.range(14,21)))
    .every(13, x => x.vowel("a i o"))
    .delay(0.36).delayfeedback(sine.range(0.12,0.27).slow(13))
    .rarely(x=>x.rev())

// Percussive metal/noise: thinner, more transient, rare distortion
$: s("cp:2 ~ ~ ~ [~ cp:1] ~ ~ ~ ~ ~ ~")
    .gain(0.014)
    .pan(rand.range(0.39,0.97))
    .room(sine.range(0.29,0.41).slow(13))
    .decay(0.10)
    .sometimes(x=>x.delay(0.16))
    .rarely(x=>x.crush(2))
    .velocity(rand.range(0.09,0.14))
    .slow(29/8/5)
    .degradeBy(sine.range(0.68,0.87).slow(16))
    .every(17, x => x.distort(0.16).gain(0.11))