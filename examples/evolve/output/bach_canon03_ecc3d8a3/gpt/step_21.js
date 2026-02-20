// BWV 1087 Canon 3 — Evolved REVISED 12 (Strudel: breath, curves, glowing space)

// Voices refined for phrasing, resonance, interplay, and sonic clarity
let upperVoice = x => x
  .sound("triangle")
  .gain(0.24)
  .attack(0.014)
  .decay(0.10)
  .sustain(0.25)
  .lpf(sine.range(1750,3150).slow(16))
  .pan(sine.range(0.13,0.42).slow(19))
  .room(sine.range(0.23,0.33).slow(14))

let lowerVoice = x => x
  .sound("square")
  .gain(0.12)
  .attack(0.019)
  .decay(0.15)
  .sustain(0.11)
  .bpf(sine.range(700,1450).slow(16))
  .room(sine.range(0.20,0.28).slow(17))
  .pan(sine.range(0.68,0.89).slow(15))

let bassVoice = x => x
  .sound("sawtooth")
  .gain(0.13)
  .attack(0.021)
  .decay(0.12)
  .lpf(sine.range(190,650).slow(14))
  .release(0.21)
  .room(0.22)
  .octave(-1)
  .pan(sine.range(0.07,0.28).slow(14))

let harpsiAccent = x => x
  .sound("piano")
  .gain(0.11)
  .attack(0.001)
  .decay(0.041)
  .sustain(0.025)
  .lpf(sine.range(4100,5300).slow(15))
  .room(sine.range(0.15,0.24).slow(13))
  .pan(rand.range(0.19,0.66))

setcps(110/60/4)

// Track 1 — upper canon: flowing phrasing, vowel and palindrome supported maturity
$: stack([
  note("~!32 d5 ~!9 e5 ~!6 gb5 ~!6 g5 ~!5 b5 ~!10 a5 ~!2 g5 ~!7 d6 ~!5 d5 ~!8 e5 ~!9 gb5 ~!3 g5 ~!13 b5 ~!8 a5 ~!5 ~ g5").slow(166/8/5.5),
  note("[<b4 e5>] ~ ~ [d5 g5] ~ ![g5 b5] ~").slow(33/8/8.5)
])
  .apply(upperVoice)
  .degradeBy(0.12)
  .lpf(sine.range(1500,2800).slow(14))
  .room(sine.range(0.15,0.27).slow(14))
  .every(4, x => x.vowel("i a o u"))
  .every(2, x => x.palindrome())
  .sometimesBy(0.15, x => x.swing(rand.range(0.07,0.15)))
  .rarely(x => x.delay(0.14).delayfeedback(rand.range(0.19,0.29)))
  .sometimes(x => x.rev())

// Track 2 — lower canon: more breath, deep bandpass shaper, rests
$: stack([
  note("~!12 g5 ~!6 gb5 ~!8 e5 ~!7 d5 ~!10 ~ b4 ~!5 c5 ~!4 d5 ~!9 g4 ~!8 gb5 ~!2 e5 ~!7 d5 ~!9 b4 ~!4 c5 ~!4 d5 ~!9 g4").slow(166/8/5.8),
  note("~!7 g4 ~!8 c5 ~ ~!4 d4").slow(34/8/9)
])
  .apply(lowerVoice)
  .degradeBy(0.13)
  .swing(0.11)
  .every(3, x => x.bpf(sine.range(630,1410).slow(14)).bpq(0.27))
  .every(7, x => x.vowel("u e o"))
  .sometimesBy(0.19, x => x.palindrome())
  .sometimes(x => x.rev())
  .pan(sine.range(0.64,0.97).slow(13))

// Track 3 — Bass: breathing spaces, rare vowel, rare long sustain
$: stack([
  note("~!20 d3 ~!7 g3 ~!4 ~ b2 ~!9 a2 ~!3 g3 ~!8 d3 ~!8 g2 ~!8 b2 ~!6 a2 ~!7 e3 ~!9 d3 ~!3 g2 ~!8 b2 ~!10 a2 ~!8 d2").slow(158/8/6),
  note("[g3~d4]").slow(74/8/15)
])
  .apply(bassVoice)
  .degradeBy(0.16)
  .shape(sine.range(0,0.18).slow(8))
  .every(9, x => x.transpose(-12))
  .sometimesBy(0.11, x => x.sustain(0.22))
  .rarely(x => x.vowel("o u a"))
  .rarely(x => x.rev())

// Track 4 — Accent triangle: prismatic pan, bold drive, more space
$: note("[g4] ~ ~ ~ [e4] ~ ~ [ds4] ~ ~ [b4] ~ [a4] ~ ~ ~ [g4] ~")
  .sound("triangle")
  .gain(0.054)
  .lpf(sine.range(860,1230).slow(14))
  .room(sine.range(0.12,0.19).slow(13))
  .pan(rand.range(0.14,0.87))
  .attack(0.011)
  .release(0.12)
  .degradeBy(0.21)
  .every(6, x=>x.palindrome())
  .every(3, x=>x.drive(0.33))

// Track 5 — Sparse harpsichord: clarity, slightly more overlap and breath
$: note("<d4 ~ ~ g4> ~ <c4 ~ e4 ~> ~ <b3 ~ ~ d5> ~ <a3 ds4 ~> ~ ~ <e4 ~ cs5> ~")
  .slow(13/8/3.7)
  .apply(harpsiAccent)
  .degradeBy(0.22)
  .velocity(rand.range(0.15,0.21))
  .lpf(sine.range(3300,5200).slow(11))
  .pan(rand.range(0.17,0.61))
  .sustain(0.052)
  .every(7, x=>x.rev())

// Ghost sine: delicate pan, bold shimmer, rising slides
$: note("g6 ~ ~ b5 ~ d6 ~ ~ fs6 ~ ~ gs6 ~ a6 ~ ~")
    .sound("sine")
    .gain(0.018)
    .attack(0.32)
    .release(1.52)
    .room(0.95)
    .pan(sine.range(0.14,0.97).slow(13))
    .slow(91/8/4.5)
    .degradeBy(0.29)
    .tremolo(sine.range(0.10,0.18).slow(15))
    .slide(rand.range(3,11))
    .every(9, x => x.vowel("i o a"))
    .delay(0.28).delayfeedback(sine.range(0.16,0.23).slow(14))
    .rarely(x=>x.rev())

// Percussive metal/noise: deeper reverb, more ghostly silence, rare crush
$: s("cp:1 ~ ~ ~ ~ [~ cp:2] ~ ~ ~ ~ ~ ~")
    .gain(0.017)
    .pan(rand.range(0.38,0.96))
    .room(sine.range(0.23,0.37).slow(15))
    .decay(0.11)
    .sometimes(x=>x.delay(0.17))
    .rarely(x=>x.crush(2))
    .velocity(rand.range(0.07,0.15))
    .slow(21/8/5)
    .degradeBy(sine.range(0.66,0.81).slow(12))
    .every(21, x => x.distort(0.19).gain(0.11))