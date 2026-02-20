// BWV 1087 Canon 3 — Evolved REVISED 20 (Strudel: silvered distance, crystalline, pulse, breath, radiant air, new contours, lucid constellations)

let upperVoice = x => x
  .sound("triangle")
  .gain(0.19)
  .attack(0.012)
  .decay(0.13)
  .sustain(0.41)
  .lpf(sine.range(1400,4120).slow(21))
  .room(sine.range(0.27,0.45).slow(22))
  .pan(sine.range(0.19,0.49).slow(18))
  .every(4, z => z.tremolo(0.11).tremolosync(6))
  .sometimesBy(0.18, z => z.lpf(4800))

let lowerVoice = x => x
  .sound("square")
  .gain(0.12)
  .attack(0.019)
  .decay(0.17)
  .sustain(0.21)
  .bpf(sine.range(420,1240).slow(13))
  .room(sine.range(0.18,0.29).slow(16))
  .pan(sine.range(0.59,0.94).slow(22))
  .every(5, z => z.tremolo(0.12).tremolosync(8))
  .sometimesBy(0.16, z => z.hpf(190))

let bassVoice = x => x
  .sound("sawtooth")
  .gain(0.096)
  .attack(0.028)
  .decay(0.15)
  .lpf(sine.range(170,720).slow(21))
  .release(0.32)
  .room(0.33)
  .octave(-1)
  .pan(sine.range(0.13,0.38).slow(15))
  .every(10, z => z.detune(sine.range(-18,18).slow(32)))
  .sometimesBy(0.14, z => z.bandf(710))

let harpsiAccent = x => x
  .sound("piano")
  .gain(0.067)
  .attack(0.002)
  .decay(0.058)
  .sustain(0.036)
  .lpf(sine.range(5100,8200).slow(6))
  .room(sine.range(0.24,0.36).slow(12))
  .pan(rand.range(0.17,0.54))
  .sometimesBy(0.13, z => z.hpf(880))

setcps(120/60/4)

// Track 1 — upper canon: new phrase contours, shimmer, lucid
$: stack([
  note("~!33 d5 ~!6 e5 ~!11 gb5 ~!9 g5 ~!17 b5 ~!13 a5 ~!7 g5 ~!14 d6 ~!6 d5 ~!9 e5 ~!7 gb5 ~!8 g5 ~!17 b5 ~!5 a5 ~ g5").slow(196/8/6.3),
  note("[<b4 e5>] ~ [d5 g5] ~ ![g5 b5] ~").slow(35/8/8.3)
])
  .apply(upperVoice)
  .degradeBy(0.12)
  .lpf(sine.range(1380,3870).slow(13))
  .room(sine.range(0.33,0.48).slow(21))
  .every(4, x => x.vowel("i o u a"))
  .every(8, x => x.palindrome())
  .sometimesBy(0.15, x => x.swing(rand.range(0.14,0.22)))
  .often(x => x.delay(0.13).delayfeedback(rand.range(0.14,0.22)))
  .sometimesBy(0.25, x => x.rev())

// Track 2 — lower canon: spiraling further, luminous, refracted
$: stack([
  note("~!17 g5 ~!9 gb5 ~!15 e5 ~!2 d5 ~!8 ~ b4 ~!9 c5 ~!3 d5 ~!11 g4 ~!5 gb5 ~!7 e5 ~!4 d5 ~!11 b4 ~!2 c5 ~!19 d5 ~!2 g4").slow(202/8/8.8),
  note("~!11 g4 ~!7 c5 ~ ~!8 d4 ~!2").slow(29/8/6.7)
])
  .apply(lowerVoice)
  .degradeBy(0.13)
  .swing(0.17)
  .every(8, x => x.bpf(sine.range(410,1260).slow(18)).bpq(0.24))
  .every(12, x => x.vowel("o u i"))
  .sometimesBy(0.23, x => x.palindrome())
  .rarely(x => x.rev())
  .pan(sine.range(0.67,0.95).slow(13))

// Track 3 — Bass: deep veil, evolving shimmer
$: stack([
  note("~!21 d3 ~!8 g3 ~ b2 ~!18 a2 ~!3 g3 ~!6 d3 ~!12 g2 ~!4 b2 ~!13 a2 ~!8 e3 ~!7 d3 ~!10 g2 ~!5 b2 ~!15 a2 ~!7 d2").slow(163/8/7.4),
  note("[g3~d4] ~ ~ ~").slow(58/8/9.7)
])
  .apply(bassVoice)
  .degradeBy(0.13)
  .shape(sine.range(0.10,0.29).slow(13))
  .every(7, x => x.transpose(-12))
  .sometimesBy(0.2, x => x.sustain(0.51))
  .sometimesBy(0.12, x => x.release(0.71))
  .rarely(x => x.vowel("a"))
  .rarely(x => x.rev())

// Track 4 — Accent triangle: brief sparks, air
$: note("[g4] ~ ~ ~ [e4] ~ [ds4] ~ [b4] ~ [a4] ~ ~ ~ [g4] ~")
  .sound("triangle")
  .gain(0.020)
  .lpf(sine.range(1100,1400).slow(15))
  .room(sine.range(0.16,0.22).slow(17))
  .pan(rand.range(0.17,0.84))
  .attack(0.027)
  .release(0.11)
  .degradeBy(0.23)
  .every(8, x=>x.palindrome())
  .every(9, x=>x.rev())
  .sometimesBy(0.23, x=>x.drive(0.21))

// Track 5 — Harpsichord: lucid gold, ephemeral, expanded hue
$: note("<d4 ~ g4~> ~ <c4 ~ e4 ~> ~ <b3 ~ d5~> ~ <a3 ds4 ~> ~ ~ <e4 ~ cs5> ~")
  .slow(22/8/2.7)
  .apply(harpsiAccent)
  .degradeBy(0.19)
  .velocity(rand.range(0.13,0.18))
  .lpf(sine.range(5300,7500).slow(8))
  .pan(rand.range(0.13,0.61))
  .sustain(0.088)
  .every(11, x=>x.rev())

// Ghost sine: floating shimmer, velvet, more radiant
$: note("g6 ~ b5 ~ d6 ~ fs6 ~ gs6 ~ a6 ~ ~")
    .sound("sine")
    .gain(0.027)
    .attack(0.7)
    .release(3.7)
    .room(0.97)
    .pan(sine.range(0.12,0.88).slow(19))
    .slow(109/8/7.1)
    .degradeBy(0.32)
    .tremolo(sine.range(0.11,0.23).slow(13))
    .sometimesBy(0.17, x=>x.slide(rand.range(34,46)))
    .every(16, x => x.vowel("i o a"))
    .delay(0.43).delayfeedback(sine.range(0.15,0.33).slow(21))
    .rarely(x=>x.rev())

// Percussive metal/noise: rare flashes, denser mist, softer
$: s("cp:2 ~ ~ ~ [~ cp:1] ~ ~ ~ ~ ~ ~")
    .gain(0.009)
    .pan(rand.range(0.38,0.99))
    .room(sine.range(0.22,0.38).slow(17))
    .decay(0.10)
    .sometimes(x=>x.delay(0.15))
    .rarely(x=>x.crush(1))
    .velocity(rand.range(0.13,0.15))
    .slow(53/8/4.7)
    .degradeBy(sine.range(0.81,0.97).slow(21))
    .every(18, x => x.distort(0.13).gain(0.17))