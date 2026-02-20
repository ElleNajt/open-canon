// BWV 1087 Canon 3 — Evolved REVISED 2

// Baroque style voices
let upperVoice = x => x
  .sound("triangle")
  .gain(0.41)
  .attack(0.014)
  .decay(0.20)
  .sustain(0.27)
  .lpf(2120)
  .pan(sine.range(0.14,0.47).slow(11))
  .room(sine.range(0.24,0.32).slow(10))

let lowerVoice = x => x
  .sound("square")
  .gain(0.19)
  .attack(0.016)
  .decay(0.13)
  .sustain(0.17)
  .lpf(850)
  .room(sine.range(0.11,0.15).slow(17))

let bassVoice = x => x
  .sound("sawtooth")
  .gain(0.17)
  .attack(0.013)
  .decay(0.19)
  .lpf(sine.range(480,930).slow(10))
  .release(0.18)
  .room(0.17)
  .octave(-1)
  .pan(sine.range(0.32,0.68).slow(11))

let harpsiAccent = x => x
  .sound("piano")
  .gain(0.11)
  .attack(0.004)
  .decay(0.08)
  .sustain(0.05)
  .lpf(4100)
  .room(sine.range(0.13, 0.19).slow(9))
  .pan(sine.range(0.22,0.85).slow(14))

setcps(112/60/4)

// Track 1 — upper canon: subtle filter, lighter degrade, clearer vowels, rare reverse
$: note("~!37 d5 ~!4 e5 ~!6 gb5 ~!7 g5 ~!4 b5 ~!8 a5 ~!3 g5 ~!7 d6 ~!6 d5 ~!7 e5 ~!5 gb5 ~!6 g5 ~!9 b5 ~!8 a5 ~!5 g5 ~!7 d6 ~!5 d5 ~!8 e5 ~!4 gb5 ~!8 g5 ~!10")
  .slow(189/8/5)
  .apply(upperVoice)
  .pan(sine.range(0.19,0.40).slow(8))
  .degradeBy(0.04)
  .lpf(sine.range(1620, 2340).slow(15))
  .room(sine.range(0.25, 0.34).slow(11))
  .every(8, x => x.vowel("<a o e>"))
  .rarely(x=>x.rev())

// Track 2 — Lower canon: bandpass mod, less degrade, rare vowel, subtle swing
$: note("~!10 g5 ~!9 gb5 ~!5 e5 ~!8 d5 ~!5 b4 ~!9 c5 ~!4 d5 ~!7 g4 ~!6 g5 ~!6 gb5 ~!5 e5 ~!5 d5 ~!8 b4 ~!6 c5 ~!4 d5 ~!6 g4 ~!7 g5 ~!4 gb5 ~!7 e5 ~!5 d5 ~!8 b4 ~!4 c5 ~!7 d5 ~!5 g4 ~!8")
  .slow(189/8/5)
  .apply(lowerVoice)
  .pan(sine.range(0.61,0.85).slow(16))
  .room(sine.range(0.10,0.13).slow(12))
  .degradeBy(0.05)
  .swing(0.08)
  .sometimes(x => x.vowel("<o u>"))
  .every(7, x => x.bpf(sine.range(950,1410).slow(7)))

// Track 3 — Counterpoint bass: more consistent, subtle detune, rare octave up
$: note("~!19 d3 ~!8 g3 ~!7 b2 ~!9 a2 ~!6 g3 ~!6 d3 ~!10 g2 ~!7 b2 ~!8 a2 ~!8 e3 ~!6 d3 ~!8 g2 ~!7 b2 ~!8 e3 ~!7 d3 ~!8 g2 ~!4 b2 ~!6 a2 ~!7 e3 ~!11")
  .slow(189/8/5)
  .apply(bassVoice)
  .degradeBy(0.10)
  .shape(sine.range(0,0.12).slow(10))
  .every(25, x => x.transpose(12))
  .sometimes(x => x.lpf(390))
  .rarely(x => x.detune(sine.range(-5, 11).slow(6)))

// Track 4 — Accent rhythm, clearer syncopation, subtle drive, rare highpass
$: stack([
  note("g4 ~ e4 ~ ds4 ~ b4 ~").sound("triangle").gain(0.085).lpf(sine.range(620,940).slow(8)).room(sine.range(0.09,0.15).slow(7)).pan(sine.range(0.08,0.38).slow(11)).sometimes(x=>x.drive(0.06)),
  note("d4 ~ b3 ~ f4 ~ g4 ~").sound("triangle").gain(0.09).lpf(sine.range(430,970).slow(10)).room(0.07).pan(sine.range(0.69,0.98).slow(9)).sometimes(x=>x.drive(0.04))
]).slow(28/8/4)
  .release(0.13)
  .degradeBy(0.13)
  .every(6,x=>x.palindrome())
  .rarely(x=>x.hpf(420))

// Track 5 — Harpsichord accent: livelier velocity, rare reverse, more panned
$: note("<d4 g4 b4> <e4 g4 c5> ~ <d4 g4 b4> <b3 e4 g4> ~ <d4 f4 a4> <c4 e4 g4> <fs4 b4 d5> <a3 ds4 f4> ~ <e4 gs4 b4>")
  .slow(16/8/4)
  .apply(harpsiAccent)
  .degradeBy(0.08)
  .velocity(rand.range(0.16,0.23))
  .pan(rand.range(0.07,0.98))
  .rarely(x=>x.rev())

// Expressive ghost-sine, rare vowel, longer release, tremolo cycles
$: note("g6 ~ b5 ~ d6 ~ e6 ~ f6 ~ gs6 ~")
    .sound("sine")
    .gain(0.043)
    .attack(0.17)
    .release(0.47)
    .room(0.54)
    .pan(sine.range(0.05,0.81).slow(13))
    .slow(30/8/4)
    .degradeBy(0.16)
    .tremolo(sine.range(0.07,0.21).slow(10))
    .every(14, x => x.vowel("u a"))
    .delay(0.17).delayfeedback(sine.range(0.11,0.24).slow(9))

// Percussive metallic/noise: hats sparser, claps more prominent and roomy, sometimes delay/crush
$: stack([
  s("hh:2 ~ ~ ~").gain(0.043).pan(sine.range(0.09,0.18).slow(13)).room(0.07).sometimes(x => x.crush(5)).velocity(rand.range(0.13,0.19)),
  s("cp:1 ~ ~ ~").gain(0.049).pan(sine.range(0.82,0.96).slow(13)).room(sine.range(0.21,0.32).slow(7)).sometimes(x=>x.delay(0.23)).rarely(x=>x.crush(3)).velocity(rand.range(0.14,0.27))
]).slow(19/8/4)
  .degradeBy(sine.range(0.39,0.51).slow(10))