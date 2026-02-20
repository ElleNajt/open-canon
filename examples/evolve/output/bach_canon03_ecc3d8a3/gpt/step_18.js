// BWV 1087 Canon 3 — Evolved REVISED 9 (Strudel: expanded interplay, more spectral shimmer and whispers)

// Voices simplified subtly for improved breath, phrase variation, color, and spectral space
let upperVoice = x => x
  .sound("triangle")
  .gain(0.27)
  .attack(0.013)
  .decay(0.14)
  .sustain(0.21)
  .lpf(sine.range(2080,3000).slow(17))
  .pan(sine.range(0.09,0.52).slow(15))
  .room(sine.range(0.17,0.29).slow(13))

let lowerVoice = x => x
  .sound("square")
  .gain(0.10)
  .attack(0.017)
  .decay(0.15)
  .sustain(0.11)
  .bpf(sine.range(810,1350).slow(11))
  .room(sine.range(0.13,0.22).slow(13))
  .pan(sine.range(0.65,0.89).slow(19))

let bassVoice = x => x
  .sound("sawtooth")
  .gain(0.09)
  .attack(0.025)
  .decay(0.14)
  .lpf(sine.range(320,810).slow(17))
  .release(0.23)
  .room(0.21)
  .octave(-1)
  .pan(sine.range(0.09,0.33).slow(19))

let harpsiAccent = x => x
  .sound("piano")
  .gain(0.082)
  .attack(0.002)
  .decay(0.053)
  .sustain(0.029)
  .lpf(sine.range(4300,5700).slow(12))
  .room(sine.range(0.13,0.20).slow(12))
  .pan(rand.range(0.24,0.76))

setcps(109/60/4)

// Track 1 — upper canon: slight phrasing split, more color in vowels & rare chord gesture
$: stack([
  note("~!36 d5 ~!5 e5 ~!7 gb5 ~!7 g5 ~!5 b5 ~!7 a5 ~!3 g5 ~!5 d6 ~!8 d5 ~!7 e5 ~!6 gb5 ~!4 g5 ~!10 b5 ~!6 a5 ~!6 ~ g5").slow(165/8/5),
  note("[<b4 e5>] ~ [d5 g5] ~").slow(33/8/8) // rare fleeting chord accent
])
  .apply(upperVoice)
  .pan(sine.range(0.13,0.52).slow(11))
  .degradeBy(0.10)
  .lpf(sine.range(1680, 2780).slow(12))
  .room(sine.range(0.14,0.23).slow(10))
  .every(5, x => x.vowel("i a e o u"))
  .every(8, x => x.palindrome())
  .sometimesBy(0.13, x => x.swing(rand.range(0.04,0.11)))
  .rarely(x=>x.delay(0.13).delayfeedback(0.21))

// Track 2 — lower canon: motif fragmentation, spectral vowels, gentle bpq
$: stack([
  note("~!8 g5 ~!7 gb5 ~!5 e5 ~!7 d5 ~!4 ~ b4 ~!6 c5 ~!5 ~ d5 ~!6 g4 ~!5 gb5 ~!4 e5 ~!5 d5 ~!7 b4 ~!3 c5 ~!4 d5 ~!5 g4").slow(165/8/5),
  note("~!8 g4 ~!5 c5").slow(33/8/8)
])
  .apply(lowerVoice)
  .pan(sine.range(0.71,0.88).slow(14))
  .room(sine.range(0.17,0.24).slow(9))
  .degradeBy(0.11)
  .swing(0.14)
  .every(4, x => x.bpf(sine.range(710,1330).slow(10)).bpq(0.31))
  .every(7, x => x.vowel("u i e o"))
  .sometimesBy(0.26, x => x.palindrome())

// Track 3 — Bass: more breath, rare 5th leap, and dynamic resonance
$: stack([
  note("~!15 d3 ~!7 g3 ~!5 ~ b2 ~!6 a2 ~!5 g3 ~!6 d3 ~!7 g2 ~!7 b2 ~!6 a2 ~!7 e3 ~!5 d3 ~!7 g2 ~!8 b2 ~!7 e3 ~!8 d3 ~!5 g2 ~!7 b2 ~!8 a2").slow(165/8/5),
  note("[g3~d4]").slow(66/8/16)
])
  .apply(bassVoice)
  .degradeBy(0.17)
  .shape(sine.range(0,0.25).slow(6))
  .every(12, x => x.transpose(-12))
  .sometimesBy(0.22, x => x.sustain(0.27))
  .rarely(x => x.lpf(140))
  .rarely(x => x.rev())

// Track 4 — Accent triangle: increased rests, panning more fluid, rare overdrive
$: note("[g4] ~ ~ [e4] ~ [ds4] ~ [b4] ~ ~ [a4] ~ [g4] ~")
  .sound("triangle")
  .gain(0.073)
  .lpf(sine.range(930,1190).slow(11))
  .room(sine.range(0.13,0.17).slow(14))
  .pan(rand.range(0.11,0.84))
  .release(0.17)
  .degradeBy(0.19)
  .every(9, x=>x.palindrome())
  .sometimesBy(0.39, x=>x.drive(0.28))
  .rarely(x=>x.hpf(1150))

// Track 5 — Sparse harpsichord, now more atmospheric, more negative space
$: note("<d4 ~ g4 b4> ~ <c4 ~ e4 g4> ~ <b3 ~ fs4 d5> ~ <a3 ds4 ~ f4> ~ ~ <e4 a4 cs5> ~")
  .slow(12/8/4)
  .apply(harpsiAccent)
  .degradeBy(0.23)
  .velocity(rand.range(0.11,0.18))
  .pan(rand.range(0.29,0.57))
  .lpf(sine.range(3800,5100).slow(11))
  .sustain(0.055)
  .every(5,x=>x.rev())

// Ghost sine: sparser, added slow pitch slide, rare delay mirror, more spectral air
$: note("g6 ~ b5 ~ d6 ~ ~ fs6 ~ gs6 ~ a6 ~ ~")
    .sound("sine")
    .gain(0.016)
    .attack(0.30)
    .release(1.41)
    .room(0.99)
    .pan(sine.range(0.02,0.98).slow(19))
    .slow(81/8/4)
    .degradeBy(0.29)
    .tremolo(sine.range(0.07,0.15).slow(7))
    .slide(rand.range(-3,4))
    .every(7, x => x.vowel("i o"))
    .delay(0.34).delayfeedback(sine.range(0.10,0.17).slow(18))
    .rarely(x=>x.rev())
    .rarely(x=>x.delay(0.36).delayfeedback(0.13))

// Percussive metal/noise: sparser, bright cutoff, rare distortion burst
$: s("cp:1 ~ ~ ~ ~ [~ cp:2] ~ ~")
    .gain(0.025)
    .pan(rand.range(0.37,0.87))
    .room(sine.range(0.10,0.39).slow(9))
    .decay(0.09)
    .sometimes(x=>x.delay(0.09))
    .rarely(x=>x.crush(3))
    .velocity(rand.range(0.09,0.27))
    .slow(11/8/4)
    .degradeBy(sine.range(0.43,0.61).slow(8))
    .every(12, x => x.distort(0.33).gain(0.10))