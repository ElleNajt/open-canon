// BWV 1087 Canon 3 — Evolved REVISED 15 (Strudel: breath, curves, glowing space, organic lift, glowing clarity, added suspension, subtle drama)

let upperVoice = x => x
  .sound("triangle")
  .gain(0.21)
  .attack(0.012)
  .decay(0.13)
  .sustain(0.26)
  .lpf(sine.range(1420,3140).slow(23))
  .pan(sine.range(0.16,0.39).slow(21))
  .room(sine.range(0.18,0.39).slow(15))

let lowerVoice = x => x
  .sound("square")
  .gain(0.12)
  .attack(0.014)
  .decay(0.17)
  .sustain(0.15)
  .bpf(sine.range(470,1390).slow(17))
  .room(sine.range(0.16,0.31).slow(13))
  .pan(sine.range(0.61,0.94).slow(15))

let bassVoice = x => x
  .sound("sawtooth")
  .gain(0.15)
  .attack(0.027)
  .decay(0.11)
  .lpf(sine.range(170,900).slow(16))
  .release(0.27)
  .room(0.21)
  .octave(-1)
  .pan(sine.range(0.13,0.23).slow(18))

let harpsiAccent = x => x
  .sound("piano")
  .gain(0.13)
  .attack(0.001)
  .decay(0.055)
  .sustain(0.041)
  .lpf(sine.range(4700,6100).slow(10))
  .room(sine.range(0.21,0.31).slow(12))
  .pan(rand.range(0.13,0.62))

setcps(116/60/4)

// Track 1 — upper canon: even more flowing, evolving delays, subtle swing and shimmer
$: stack([
  note("~!36 d5 ~!6 e5 ~!6 gb5 ~!5 g5 ~!8 b5 ~!13 a5 ~!3 g5 ~!8 d6 ~!5 d5 ~!10 e5 ~!5 gb5 ~!5 g5 ~!13 b5 ~!6 a5 ~ g5").slow(167/8/5.1),
  note("[<b4 e5>] ~ [d5 g5] ~ ![g5 b5] ~").slow(35/8/8)
])
  .apply(upperVoice)
  .degradeBy(0.13)
  .lpf(sine.range(1290,3230).slow(15))
  .room(sine.range(0.21,0.37).slow(19))
  .every(4, x => x.vowel("o i u a"))
  .every(5, x => x.palindrome())
  .sometimesBy(0.23, x => x.swing(rand.range(0.09,0.17)))
  .often(x => x.delay(0.22).delayfeedback(rand.range(0.15,0.22)))
  .sometimesBy(0.15, x => x.rev())

// Track 2 — lower canon: more interplay, filter shimmer, dramatic resonance
$: stack([
  note("~!14 g5 ~!6 gb5 ~!12 e5 ~!5 d5 ~!9 ~ b4 ~!7 c5 ~!4 d5 ~!14 g4 ~!8 gb5 ~!3 e5 ~!4 d5 ~!9 b4 ~!3 c5 ~!12 d5 ~!7 g4").slow(179/8/6.5),
  note("~!8 g4 ~!12 c5 ~ ~!6 d4 ~!2").slow(33/8/8)
])
  .apply(lowerVoice)
  .degradeBy(0.16)
  .swing(0.13)
  .every(2, x => x.bpf(sine.range(570,1250).slow(17)).bpq(0.22))
  .every(6, x => x.vowel("u o e"))
  .sometimesBy(0.22, x => x.palindrome())
  .rarely(x => x.rev())
  .pan(sine.range(0.65,0.93).slow(13))

// Track 3 — Bass: expanded range, subtle shape, bold presence
$: stack([
  note("~!19 d3 ~!8 g3 ~ b2 ~!13 a2 ~!5 g3 ~!5 d3 ~!10 g2 ~!8 b2 ~!7 a2 ~!5 e3 ~!7 d3 ~!6 g2 ~!8 b2 ~!14 a2 ~!6 d2").slow(160/8/6.2),
  note("[g3~d4]").slow(75/8/15)
])
  .apply(bassVoice)
  .degradeBy(0.17)
  .shape(sine.range(0.06,0.22).slow(10))
  .every(8, x => x.transpose(-12))
  .sometimesBy(0.19, x => x.sustain(0.36))
  .sometimesBy(0.13, x => x.release(0.4))
  .rarely(x => x.vowel("o a"))
  .rarely(x => x.rev())

// Track 4 — Accent triangle: sparser, greater space, shimmer, softer edges
$: note("[g4] ~ ~ ~ [e4] ~ [ds4] ~ [b4] ~ [a4] ~ ~ ~ [g4] ~")
  .sound("triangle")
  .gain(0.036)
  .lpf(sine.range(900,1200).slow(15))
  .room(sine.range(0.15,0.21).slow(14))
  .pan(rand.range(0.19,0.73))
  .attack(0.019)
  .release(0.17)
  .degradeBy(0.21)
  .every(7, x=>x.palindrome())
  .every(6, x=>x.rev())
  .sometimesBy(0.21, x=>x.drive(0.28))

// Track 5 — Sparse harpsichord: delicate, more rare, glowing tails
$: note("<d4 ~ g4~> ~ <c4 ~ e4 ~> ~ <b3 ~ d5~> ~ <a3 ds4 ~> ~ ~ <e4 ~ cs5> ~")
  .slow(19/8/2.7)
  .apply(harpsiAccent)
  .degradeBy(0.25)
  .velocity(rand.range(0.11,0.18))
  .lpf(sine.range(3500,5200).slow(13))
  .pan(rand.range(0.12,0.47))
  .sustain(0.062)
  .every(9, x=>x.rev())

// Ghost sine: more pronounced float, longer echo, bold slide
$: note("g6 ~ b5 ~ d6 ~ fs6 ~ gs6 ~ a6 ~ ~")
    .sound("sine")
    .gain(0.022)
    .attack(0.44)
    .release(2.5)
    .room(0.99)
    .pan(sine.range(0.19,0.99).slow(17))
    .slow(97/8/4.6)
    .degradeBy(0.38)
    .tremolo(sine.range(0.12,0.22).slow(21))
    .sometimesBy(0.18, x=>x.slide(rand.range(18,24)))
    .every(11, x => x.vowel("a i o"))
    .delay(0.39).delayfeedback(sine.range(0.14,0.28).slow(11))
    .rarely(x=>x.rev())

// Percussive metal/noise: very subtle, more transient, dark echo
$: s("cp:2 ~ ~ ~ [~ cp:1] ~ ~ ~ ~ ~ ~")
    .gain(0.012)
    .pan(rand.range(0.33,0.91))
    .room(sine.range(0.31,0.45).slow(15))
    .decay(0.093)
    .sometimes(x=>x.delay(0.18))
    .rarely(x=>x.crush(2))
    .velocity(rand.range(0.07,0.12))
    .slow(31/8/5)
    .degradeBy(sine.range(0.69,0.91).slow(16))
    .every(15, x => x.distort(0.18).gain(0.13))