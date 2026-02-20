// BWV 1087 Canon 3 — Evolved REVISED 11 (Strudel: spectral clarity, phrasing breath, and focused interplay)

// Voices refined for vibrant interplay, temporal space, and textural grace
let upperVoice = x => x
  .sound("triangle")
  .gain(0.27)
  .attack(0.012)
  .decay(0.12)
  .sustain(0.21)
  .lpf(sine.range(1800,3100).slow(19))
  .pan(sine.range(0.10,0.44).slow(17))
  .room(sine.range(0.19,0.29).slow(13))

let lowerVoice = x => x
  .sound("square")
  .gain(0.13)
  .attack(0.017)
  .decay(0.14)
  .sustain(0.13)
  .bpf(sine.range(660,1330).slow(17))
  .room(sine.range(0.17,0.22).slow(19))
  .pan(sine.range(0.59,0.85).slow(17))

let bassVoice = x => x
  .sound("sawtooth")
  .gain(0.11)
  .attack(0.019)
  .decay(0.14)
  .lpf(sine.range(240,760).slow(18))
  .release(0.29)
  .room(0.25)
  .octave(-1)
  .pan(sine.range(0.09,0.32).slow(19))

let harpsiAccent = x => x
  .sound("piano")
  .gain(0.093)
  .attack(0.001)
  .decay(0.049)
  .sustain(0.031)
  .lpf(sine.range(4000,5750).slow(17))
  .room(sine.range(0.13,0.21).slow(16))
  .pan(rand.range(0.22,0.65))

setcps(109/60/4)

// Track 1 — upper canon: accentuate vowel spectrum, extra phrase reversals
$: stack([
  note("~!30 d5 ~!7 e5 ~!6 gb5 ~!7 g5 ~!4 b5 ~!10 a5 ~!2 g5 ~!7 d6 ~!6 d5 ~!6 e5 ~!7 gb5 ~!2 g5 ~!12 b5 ~!7 a5 ~!6 ~ g5").slow(166/8/5),
  note("[<b4 e5>] ~ ~ [d5 g5] ~ ![g5 b5] ~").slow(35/8/8)
])
  .apply(upperVoice)
  .degradeBy(0.14)
  .lpf(sine.range(1600,2700).slow(13))
  .room(sine.range(0.13,0.24).slow(14))
  .every(4, x => x.vowel("i a o u"))
  .every(3, x => x.palindrome())
  .sometimesBy(0.18, x => x.swing(rand.range(0.05,0.13)))
  .rarely(x => x.delay(0.14).delayfeedback(rand.range(0.2,0.28)))
  .sometimes(x => x.rev())

// Track 2 — lower canon: heightened spectral bandpass, deeper contrasts, rests
$: stack([
  note("~!10 g5 ~!5 gb5 ~!6 e5 ~!6 d5 ~!6 ~ b4 ~!4 c5 ~!6 d5 ~!7 g4 ~!6 gb5 ~!2 e5 ~!7 d5 ~!7 b4 ~!2 c5 ~!4 d5 ~!6 g4").slow(167/8/5),
  note("~!7 g4 ~!6 c5 ~ ~!3 d4").slow(35/8/8)
])
  .apply(lowerVoice)
  .degradeBy(0.14)
  .swing(0.14)
  .every(3, x => x.bpf(sine.range(650,1340).slow(11)).bpq(0.31))
  .every(8, x => x.vowel("u e o"))
  .sometimesBy(0.21, x => x.palindrome())
  .sometimes(x => x.rev())
  .pan(sine.range(0.67,0.92).slow(12))

// Track 3 — Bass: let rare reversal, stronger shapes, occasional briefer sustain
$: stack([
  note("~!17 d3 ~!6 g3 ~!6 ~ b2 ~!8 a2 ~!4 g3 ~!7 d3 ~!7 g2 ~!8 b2 ~!5 a2 ~!7 e3 ~!8 d3 ~!4 g2 ~!7 b2 ~!8 a2 ~!7 d2").slow(164/8/5),
  note("[g3~d4]").slow(72/8/16)
])
  .apply(bassVoice)
  .degradeBy(0.20)
  .shape(sine.range(0,0.22).slow(9))
  .every(10, x => x.transpose(-12))
  .sometimesBy(0.13, x => x.sustain(0.14))
  .rarely(x => x.lpf(115))
  .rarely(x => x.rev())

// Track 4 — Accent triangle: more space, emphasize drive
$: note("[g4] ~ ~ ~ [e4] ~ ~ [ds4] ~ ~ [b4] ~ [a4] ~ ~ ~ [g4] ~")
  .sound("triangle")
  .gain(0.069)
  .lpf(sine.range(870,1210).slow(13))
  .room(sine.range(0.09,0.15).slow(14))
  .pan(rand.range(0.14,0.87))
  .attack(0.011)
  .release(0.12)
  .degradeBy(0.23)
  .every(7, x=>x.palindrome())
  .every(4, x=>x.drive(0.29))

// Track 5 — Sparse harpsichord: shade accents, clarity, rare reverse
$: note("<d4 ~ ~ g4> ~ <c4 ~ e4 ~> ~ <b3 ~ ~ d5> ~ <a3 ds4 ~> ~ ~ <e4 ~ cs5> ~")
  .slow(16/8/4)
  .apply(harpsiAccent)
  .degradeBy(0.25)
  .velocity(rand.range(0.10,0.18))
  .lpf(sine.range(3100,5100).slow(14))
  .pan(rand.range(0.23,0.54))
  .sustain(0.043)
  .every(10, x=>x.rev())

// Ghost sine: widen pan, slide deeper, more shimmer
$: note("g6 ~ ~ b5 ~ d6 ~ ~ fs6 ~ ~ gs6 ~ a6 ~ ~")
    .sound("sine")
    .gain(0.016)
    .attack(0.39)
    .release(1.36)
    .room(0.99)
    .pan(sine.range(0.12,0.98).slow(19))
    .slow(101/8/4)
    .degradeBy(0.34)
    .tremolo(sine.range(0.09,0.19).slow(11))
    .slide(rand.range(-7,6))
    .every(11, x => x.vowel("i o a"))
    .delay(0.37).delayfeedback(sine.range(0.14,0.20).slow(17))
    .rarely(x=>x.rev())

// Percussive metal/noise: ultra sparse, less distortion, more negative space
$: s("cp:1 ~ ~ ~ ~ [~ cp:2] ~ ~ ~ ~ ~ ~")
    .gain(0.018)
    .pan(rand.range(0.43,0.93))
    .room(sine.range(0.15,0.36).slow(15))
    .decay(0.10)
    .sometimes(x=>x.delay(0.15))
    .rarely(x=>x.crush(3))
    .velocity(rand.range(0.08,0.20))
    .slow(19/8/4)
    .degradeBy(sine.range(0.62,0.74).slow(13))
    .every(22, x => x.distort(0.22).gain(0.07))