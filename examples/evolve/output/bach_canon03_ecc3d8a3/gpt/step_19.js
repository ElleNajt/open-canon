// BWV 1087 Canon 3 — Evolved REVISED 10 (Strudel: spectral clarity, phrasing breath, and focused interplay)

// Voices refined for vibrant interplay, temporal space, and textural grace
let upperVoice = x => x
  .sound("triangle")
  .gain(0.25)
  .attack(0.013)
  .decay(0.13)
  .sustain(0.19)
  .lpf(sine.range(1850,2920).slow(21))
  .pan(sine.range(0.09,0.51).slow(15))
  .room(sine.range(0.18,0.28).slow(16))

let lowerVoice = x => x
  .sound("square")
  .gain(0.11)
  .attack(0.015)
  .decay(0.13)
  .sustain(0.10)
  .bpf(sine.range(690,1260).slow(15))
  .room(sine.range(0.14,0.21).slow(17))
  .pan(sine.range(0.62,0.89).slow(13))

let bassVoice = x => x
  .sound("sawtooth")
  .gain(0.10)
  .attack(0.023)
  .decay(0.13)
  .lpf(sine.range(260,720).slow(15))
  .release(0.28)
  .room(0.24)
  .octave(-1)
  .pan(sine.range(0.13,0.27).slow(21))

let harpsiAccent = x => x
  .sound("piano")
  .gain(0.079)
  .attack(0.002)
  .decay(0.058)
  .sustain(0.027)
  .lpf(sine.range(3900,6100).slow(14))
  .room(sine.range(0.11,0.19).slow(14))
  .pan(rand.range(0.26,0.72))

setcps(108/60/4)

// Track 1 — upper canon: ebbs and flows, spectral vowels, phrasing breath, rarified delay/AIR
$: stack([
  note("~!30 d5 ~!7 e5 ~!6 gb5 ~!7 g5 ~!4 b5 ~!10 a5 ~!2 g5 ~!7 d6 ~!6 d5 ~!6 e5 ~!7 gb5 ~!2 g5 ~!12 b5 ~!7 a5 ~!6 ~ g5").slow(165/8/5),
  note("[<b4 e5>] ~ ~ [d5 g5] ~ ![g5 b5] ~").slow(33/8/8)
])
  .apply(upperVoice)
  .degradeBy(0.13)
  .lpf(sine.range(1690,2510).slow(14))
  .room(sine.range(0.13,0.25).slow(10))
  .every(4, x => x.vowel("i a o u"))
  .every(7, x => x.palindrome())
  .sometimesBy(0.14, x => x.swing(rand.range(0.05,0.12)))
  .rarely(x => x.delay(0.08).delayfeedback(rand.range(0.21,0.33)))
  .rarely(x => x.rev())

// Track 2 — lower canon: extra rests, deeper vowels, spectral air, phrase reversal
$: stack([
  note("~!10 g5 ~!5 gb5 ~!6 e5 ~!6 d5 ~!6 ~ b4 ~!4 c5 ~!6 d5 ~!7 g4 ~!6 gb5 ~!2 e5 ~!7 d5 ~!7 b4 ~!2 c5 ~!4 d5 ~!6 g4").slow(165/8/5),
  note("~!7 g4 ~!6 c5 ~").slow(33/8/8)
])
  .apply(lowerVoice)
  .degradeBy(0.13)
  .swing(0.13)
  .every(3, x => x.bpf(sine.range(670,1200).slow(11)).bpq(0.27))
  .every(5, x => x.vowel("u e o"))
  .sometimesBy(0.23, x => x.palindrome())
  .sometimes(x => x.rev())
  .pan(sine.range(0.71,0.89).slow(12))

// Track 3 — Bass: wider rests, rare jumps, shape modulation, sporadic lowpass
$: stack([
  note("~!17 d3 ~!6 g3 ~!6 ~ b2 ~!8 a2 ~!4 g3 ~!7 d3 ~!7 g2 ~!8 b2 ~!5 a2 ~!7 e3 ~!8 d3 ~!4 g2 ~!7 b2 ~!8 a2 ~!7 d2").slow(165/8/5),
  note("[g3~d4]").slow(66/8/16)
])
  .apply(bassVoice)
  .degradeBy(0.18)
  .shape(sine.range(0,0.20).slow(7))
  .every(10, x => x.transpose(-12))
  .sometimesBy(0.17, x => x.sustain(0.20))
  .rarely(x => x.lpf(110))
  .rarely(x => x.rev())

// Track 4 — Accent triangle: even more space, wide pan, fuzzy attack
$: note("[g4] ~ ~ ~ [e4] ~ ~ [ds4] ~ ~ [b4] ~ [a4] ~ ~ ~ [g4] ~")
  .sound("triangle")
  .gain(0.066)
  .lpf(sine.range(900,1110).slow(10))
  .room(sine.range(0.10,0.14).slow(19))
  .pan(rand.range(0.12,0.88))
  .attack(0.012)
  .release(0.14)
  .degradeBy(0.21)
  .every(9, x=>x.palindrome())
  .sometimesBy(0.27, x=>x.drive(0.22))

// Track 5 — Sparse harpsichord: slower, hazy lpf, more negative space
$: note("<d4 ~ ~ g4> ~ <c4 ~ e4 ~> ~ <b3 ~ ~ d5> ~ <a3 ds4 ~> ~ ~ <e4 ~ cs5> ~")
  .slow(15/8/4)
  .apply(harpsiAccent)
  .degradeBy(0.27)
  .velocity(rand.range(0.09,0.15))
  .lpf(sine.range(3200,4800).slow(16))
  .pan(rand.range(0.21,0.57))
  .sustain(0.045)
  .every(6, x=>x.rev())

// Ghost sine: even more rarefied, textural slides, wide pan, more spectral shimmer
$: note("g6 ~ ~ b5 ~ d6 ~ ~ fs6 ~ ~ gs6 ~ a6 ~ ~")
    .sound("sine")
    .gain(0.013)
    .attack(0.41)
    .release(1.33)
    .room(0.99)
    .pan(sine.range(0.01,0.99).slow(23))
    .slow(101/8/4)
    .degradeBy(0.32)
    .tremolo(sine.range(0.06,0.16).slow(11))
    .slide(rand.range(-4,5))
    .every(9, x => x.vowel("i o a"))
    .delay(0.34).delayfeedback(sine.range(0.14,0.19).slow(16))
    .rarely(x=>x.rev())

// Percussive metal/noise: shifts to ultra sparse, ghost echoes, crushing every so often
$: s("cp:1 ~ ~ ~ ~ [~ cp:2] ~ ~ ~ ~ ~ ~")
    .gain(0.021)
    .pan(rand.range(0.41,0.91))
    .room(sine.range(0.13,0.42).slow(13))
    .decay(0.11)
    .sometimes(x=>x.delay(0.13))
    .rarely(x=>x.crush(2))
    .velocity(rand.range(0.07,0.22))
    .slow(17/8/4)
    .degradeBy(sine.range(0.59,0.71).slow(12))
    .every(16, x => x.distort(0.39).gain(0.08))