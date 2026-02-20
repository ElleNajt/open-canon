// BWV 1087 Canon 3 — Evolved REVISED 18 (Strudel: spacious, shimmering, pulse, breath, luminous air, inner bloom)

let upperVoice = x => x
  .sound("triangle")
  .gain(0.19)
  .attack(0.01)
  .decay(0.13)
  .sustain(0.32)
  .lpf(sine.range(1380,3520).slow(17))
  .room(sine.range(0.22,0.43).slow(23))
  .pan(sine.range(0.07,0.39).slow(19))
  .every(5, z => z.tremolo(0.11).tremolosync(6))

let lowerVoice = x => x
  .sound("square")
  .gain(0.099)
  .attack(0.018)
  .decay(0.19)
  .sustain(0.22)
  .bpf(sine.range(470,1210).slow(13))
  .room(sine.range(0.13,0.29).slow(15))
  .pan(sine.range(0.59,0.91).slow(23))
  .every(6, z => z.tremolo(0.09).tremolosync(5))

let bassVoice = x => x
  .sound("sawtooth")
  .gain(0.113)
  .attack(0.021)
  .decay(0.13)
  .lpf(sine.range(130,900).slow(15))
  .release(0.31)
  .room(0.22)
  .octave(-1)
  .pan(sine.range(0.13,0.33).slow(15))

let harpsiAccent = x => x
  .sound("piano")
  .gain(0.081)
  .attack(0.003)
  .decay(0.059)
  .sustain(0.037)
  .lpf(sine.range(4200,7000).slow(7))
  .room(sine.range(0.17,0.30).slow(16))
  .pan(rand.range(0.22,0.51))

setcps(116/60/4)

// Track 1 — upper canon: glass clarity, mosaic shimmer, luminous
$: stack([
  note("~!32 d5 ~!5 e5 ~!7 gb5 ~!9 g5 ~!15 b5 ~!13 a5 ~!4 g5 ~!16 d6 ~!7 d5 ~!7 e5 ~!6 gb5 ~!7 g5 ~!17 b5 ~!7 a5 ~ g5").slow(176/8/5.38),
  note("[<b4 e5>] ~ [d5 g5] ~ ![g5 b5] ~").slow(31/8/8)
])
  .apply(upperVoice)
  .degradeBy(0.12)
  .lpf(sine.range(1270,3420).slow(9))
  .room(sine.range(0.27,0.38).slow(19))
  .every(4, x => x.vowel("o i u a"))
  .every(6, x => x.palindrome())
  .sometimesBy(0.2, x => x.swing(rand.range(0.13,0.18)))
  .often(x => x.delay(0.13).delayfeedback(rand.range(0.12,0.16)))
  .sometimesBy(0.18, x => x.rev())

// Track 2 — lower canon: breath moving, nuance, glinted
$: stack([
  note("~!13 g5 ~!8 gb5 ~!16 e5 ~!3 d5 ~!9 ~ b4 ~!6 c5 ~!4 d5 ~!10 g4 ~!7 gb5 ~!3 e5 ~!8 d5 ~!8 b4 ~!2 c5 ~!16 d5 ~!5 g4").slow(181/8/7.14),
  note("~!7 g4 ~!13 c5 ~ ~!6 d4 ~!3").slow(29/8/8)
])
  .apply(lowerVoice)
  .degradeBy(0.11)
  .swing(0.11)
  .every(5, x => x.bpf(sine.range(450,1080).slow(13)).bpq(0.19))
  .every(10, x => x.vowel("u o e"))
  .sometimesBy(0.24, x => x.palindrome())
  .rarely(x => x.rev())
  .pan(sine.range(0.64,0.97).slow(9))

// Track 3 — Bass: glowing anchor, breath, deep shimmer
$: stack([
  note("~!21 d3 ~!8 g3 ~ b2 ~!18 a2 ~!5 g3 ~!6 d3 ~!13 g2 ~!4 b2 ~!11 a2 ~!6 e3 ~!10 d3 ~!7 g2 ~!9 b2 ~!12 a2 ~!4 d2").slow(159/8/7.13),
  note("[g3~d4] ~ ~ ~").slow(67/8/13)
])
  .apply(bassVoice)
  .degradeBy(0.13)
  .shape(sine.range(0.13,0.19).slow(17))
  .every(7, x => x.transpose(-12))
  .sometimesBy(0.26, x => x.sustain(0.46))
  .sometimesBy(0.14, x => x.release(0.59))
  .rarely(x => x.vowel("a"))
  .rarely(x => x.rev())

// Track 4 — Accent triangle: hovering points, air, mild ignition
$: note("[g4] ~ ~ ~ [e4] ~ [ds4] ~ [b4] ~ [a4] ~ ~ ~ [g4] ~")
  .sound("triangle")
  .gain(0.025)
  .lpf(sine.range(890,1370).slow(21))
  .room(sine.range(0.13,0.19).slow(14))
  .pan(rand.range(0.22,0.85))
  .attack(0.028)
  .release(0.19)
  .degradeBy(0.28)
  .every(9, x=>x.palindrome())
  .every(6, x=>x.rev())
  .sometimesBy(0.17, x=>x.drive(0.27))

// Track 5 — Harpsichord: illumined accents, brief gold, rarified
$: note("<d4 ~ g4~> ~ <c4 ~ e4 ~> ~ <b3 ~ d5~> ~ <a3 ds4 ~> ~ ~ <e4 ~ cs5> ~")
  .slow(24/8/3.6)
  .apply(harpsiAccent)
  .degradeBy(0.2)
  .velocity(rand.range(0.09,0.18))
  .lpf(sine.range(4300,5900).slow(15))
  .pan(rand.range(0.14,0.47))
  .sustain(0.081)
  .every(10, x=>x.rev())

// Ghost sine: radiant veil, spacious shimmer, breathing delay
$: note("g6 ~ b5 ~ d6 ~ fs6 ~ gs6 ~ a6 ~ ~")
    .sound("sine")
    .gain(0.027)
    .attack(0.66)
    .release(3.1)
    .room(0.94)
    .pan(sine.range(0.13,0.97).slow(17))
    .slow(87/8/5.2)
    .degradeBy(0.36)
    .tremolo(sine.range(0.08,0.23).slow(18))
    .sometimesBy(0.21, x=>x.slide(rand.range(22,41)))
    .every(14, x => x.vowel("a i o"))
    .delay(0.53).delayfeedback(sine.range(0.13,0.25).slow(21))
    .rarely(x=>x.rev())

// Percussive metal/noise: spectral spark, wide, rare intensity
$: s("cp:2 ~ ~ ~ [~ cp:1] ~ ~ ~ ~ ~ ~")
    .gain(0.012)
    .pan(rand.range(0.39,0.97))
    .room(sine.range(0.18,0.36).slow(21))
    .decay(0.13)
    .sometimes(x=>x.delay(0.21))
    .rarely(x=>x.crush(2))
    .velocity(rand.range(0.08,0.12))
    .slow(37/8/5.9)
    .degradeBy(sine.range(0.74,0.96).slow(16))
    .every(15, x => x.distort(0.22).gain(0.16))