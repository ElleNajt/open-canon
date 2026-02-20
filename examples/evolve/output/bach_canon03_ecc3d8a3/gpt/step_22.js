// BWV 1087 Canon 3 — Evolved REVISED 13 (Strudel: breath, curves, glowing space, organic lift)

// Voices refined for phrasing, resonance, interplay, and sonic clarity
let upperVoice = x => x
  .sound("triangle")
  .gain(0.23)
  .attack(0.012)
  .decay(0.11)
  .sustain(0.29)
  .lpf(sine.range(1550,3350).slow(23))
  .pan(sine.range(0.19,0.39).slow(19))
  .room(sine.range(0.22,0.34).slow(15))

let lowerVoice = x => x
  .sound("square")
  .gain(0.11)
  .attack(0.017)
  .decay(0.16)
  .sustain(0.14)
  .bpf(sine.range(540,1600).slow(18))
  .room(sine.range(0.19,0.29).slow(19))
  .pan(sine.range(0.66,0.93).slow(16))

let bassVoice = x => x
  .sound("sawtooth")
  .gain(0.11)
  .attack(0.026)
  .decay(0.13)
  .lpf(sine.range(160,770).slow(21))
  .release(0.19)
  .room(0.24)
  .octave(-1)
  .pan(sine.range(0.08,0.22).slow(12))

let harpsiAccent = x => x
  .sound("piano")
  .gain(0.13)
  .attack(0.001)
  .decay(0.038)
  .sustain(0.027)
  .lpf(sine.range(4200,5400).slow(14))
  .room(sine.range(0.15,0.22).slow(11))
  .pan(rand.range(0.13,0.60))

setcps(116/60/4)

// Track 1 — upper canon: brighter lilt, enhanced curves, rare long reverb
$: stack([
  note("~!34 d5 ~!9 e5 ~!7 gb5 ~!5 g5 ~!6 b5 ~!13 a5 ~!2 g5 ~!8 d6 ~!4 d5 ~!8 e5 ~!7 gb5 ~!4 g5 ~!12 b5 ~!8 a5 ~!5 ~ g5").slow(165/8/5.2),
  note("[<b4 e5>] ~ ~ [d5 g5] ~ ![g5 b5] ~").slow(36/8/8.1)
])
  .apply(upperVoice)
  .degradeBy(0.11)
  .lpf(sine.range(1430,3350).slow(10))
  .room(sine.range(0.18,0.29).slow(15))
  .every(4, x => x.vowel("i a o u"))
  .every(3, x => x.palindrome())
  .sometimesBy(0.18, x => x.swing(rand.range(0.09,0.18)))
  .rarely(x => x.delay(0.18).delayfeedback(rand.range(0.22,0.31)))
  .sometimes(x => x.rev())

// Track 2 — lower canon: gentle depth, more long notes, interplay
$: stack([
  note("~!13 g5 ~!7 gb5 ~!9 e5 ~!6 d5 ~!11 ~ b4 ~!6 c5 ~!4 d5 ~!12 g4 ~!7 gb5 ~!3 e5 ~!6 d5 ~!10 b4 ~!3 c5 ~!6 d5 ~!7 g4").slow(172/8/6.2),
  note("~!6 g4 ~!9 c5 ~ ~!5 d4").slow(32/8/7.7)
])
  .apply(lowerVoice)
  .degradeBy(0.14)
  .swing(0.13)
  .every(2, x => x.bpf(sine.range(600,1500).slow(16)).bpq(0.22))
  .every(7, x => x.vowel("u e o"))
  .sometimesBy(0.23, x => x.palindrome())
  .sometimes(x => x.rev())
  .pan(sine.range(0.60,0.97).slow(11))

// Track 3 — Bass: occasional sub drop, breathy 
$: stack([
  note("~!21 d3 ~!7 g3 ~!4 ~ b2 ~!9 a2 ~!4 g3 ~!7 d3 ~!7 g2 ~!8 b2 ~!7 a2 ~!8 e3 ~!10 d3 ~!3 g2 ~!7 b2 ~!11 a2 ~!7 d2").slow(160/8/6.3),
  note("[g3~d4]").slow(71/8/15)
])
  .apply(bassVoice)
  .degradeBy(0.18)
  .shape(sine.range(0,0.21).slow(7))
  .every(9, x => x.transpose(-12))
  .sometimesBy(0.15, x => x.sustain(0.28))
  .rarely(x => x.vowel("o u a"))
  .sometimesBy(0.1, x => x.release(0.28))
  .rarely(x => x.rev())

// Track 4 — Accent triangle: more spark, occasional reverse
$: note("[g4] ~ ~ ~ [e4] ~ ~ [ds4] ~ ~ [b4] ~ [a4] ~ ~ ~ [g4] ~")
  .sound("triangle")
  .gain(0.060)
  .lpf(sine.range(900,1250).slow(13))
  .room(sine.range(0.14,0.21).slow(14))
  .pan(rand.range(0.20,0.83))
  .attack(0.013)
  .release(0.13)
  .degradeBy(0.23)
  .every(6, x=>x.palindrome())
  .every(4, x=>x.rev())
  .every(3, x=>x.drive(0.29))

// Track 5 — Sparse harpsichord: more sustain clarity and space
$: note("<d4 ~ ~ g4> ~ <c4 ~ e4 ~> ~ <b3 ~ ~ d5> ~ <a3 ds4 ~> ~ ~ <e4 ~ cs5> ~")
  .slow(15/8/3.4)
  .apply(harpsiAccent)
  .degradeBy(0.24)
  .velocity(rand.range(0.15,0.22))
  .lpf(sine.range(3500,5100).slow(13))
  .pan(rand.range(0.19,0.59))
  .sustain(0.061)
  .every(8, x=>x.rev())

// Ghost sine: more shimmer, longer tail, rare slide
$: note("g6 ~ ~ b5 ~ d6 ~ ~ fs6 ~ ~ gs6 ~ a6 ~ ~")
    .sound("sine")
    .gain(0.021)
    .attack(0.38)
    .release(1.85)
    .room(0.97)
    .pan(sine.range(0.09,0.98).slow(15))
    .slow(93/8/4.1)
    .degradeBy(0.31)
    .tremolo(sine.range(0.13,0.21).slow(19))
    .sometimesBy(0.18, x=>x.slide(rand.range(7,14)))
    .every(11, x => x.vowel("i o a"))
    .delay(0.32).delayfeedback(sine.range(0.15,0.29).slow(16))
    .rarely(x=>x.rev())

// Percussive metal/noise: more sizzle, thinner muscles, rare crush
$: s("cp:1 ~ ~ ~ ~ [~ cp:2] ~ ~ ~ ~ ~ ~")
    .gain(0.014)
    .pan(rand.range(0.41,0.95))
    .room(sine.range(0.27,0.39).slow(18))
    .decay(0.13)
    .sometimes(x=>x.delay(0.15))
    .rarely(x=>x.crush(2))
    .velocity(rand.range(0.08,0.15))
    .slow(23/8/5)
    .degradeBy(sine.range(0.71,0.86).slow(15))
    .every(18, x => x.distort(0.17).gain(0.14))