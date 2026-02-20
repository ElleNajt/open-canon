// BWV 1087 Canon 3 — Evolved REVISED

// Baroque style voices
let upperVoice = x => x
  .sound("triangle")
  .gain(0.41)
  .attack(0.014)
  .decay(0.20)
  .sustain(0.27)
  .lpf(2420)
  .pan(sine.range(0.14,0.48).slow(11))
  .room(sine.range(0.21,0.31).slow(18))

let lowerVoice = x => x
  .sound("square")
  .gain(0.22)
  .attack(0.016)
  .decay(0.145)
  .sustain(0.18)
  .lpf(980)
  .room(sine.range(0.10,0.19).slow(15))

let bassVoice = x => x
  .sound("sawtooth")
  .gain(0.17)
  .attack(0.021)
  .decay(0.17)
  .lpf(sine.range(560,920).slow(12))
  .release(0.21)
  .room(0.23)
  .octave(-1)
  .pan(sine.range(0.27,0.79).slow(14))

let harpsiAccent = x => x
  .sound("piano")
  .gain(0.11)
  .attack(0.004)
  .decay(0.10)
  .sustain(0.07)
  .lpf(3930)
  .room(sine.range(0.12, 0.23).slow(9))
  .pan(sine.range(0.24,0.82).slow(18))

setcps(120/60/4)

// Track 1 — upper canon: slightly more vocal, more filter movement, lighter degrade, vowel more varied
$: note("~!37 d5 ~!4 e5 ~!6 gb5 ~!7 g5 ~!4 b5 ~!8 a5 ~!3 g5 ~!7 d6 ~!6 d5 ~!7 e5 ~!5 gb5 ~!6 g5 ~!9 b5 ~!8 a5 ~!5 g5 ~!7 d6 ~!5 d5 ~!8 e5 ~!4 gb5 ~!8 g5 ~!10")
  .slow(189/8/5)
  .apply(upperVoice)
  .pan(sine.range(0.21,0.44).slow(10))
  .degradeBy(0.06)
  .lpf(sine.range(1500, 2900).slow(13))
  .room(sine.range(0.19, 0.31).slow(12))
  .every(8, x => x.vowel("<a o i e u>"))
  .sometimes(x=>x.hpf(290))
  .rarely(x=>x.rev())

// Track 2 — Lower canon: focus on bpf, rare vowel, more degrade
$: note("~!10 g5 ~!9 gb5 ~!5 e5 ~!8 d5 ~!5 b4 ~!9 c5 ~!4 d5 ~!7 g4 ~!6 g5 ~!6 gb5 ~!5 e5 ~!5 d5 ~!8 b4 ~!6 c5 ~!4 d5 ~!6 g4 ~!7 g5 ~!4 gb5 ~!7 e5 ~!5 d5 ~!8 b4 ~!4 c5 ~!7 d5 ~!5 g4 ~!8")
  .slow(189/8/5)
  .apply(lowerVoice)
  .pan(sine.range(0.59,0.95).slow(14))
  .room(sine.range(0.10,0.16).slow(10))
  .degradeBy(0.08)
  .swing(0.13)
  .sometimes(x => x.vowel("<o u>"))
  .every(7, x => x.bpf(sine.range(820,1350).slow(9)))

// Track 3 — Counterpoint bass: added chord roots, slightly less degrade, rare octave jumps
$: note("~!19 d3 ~!8 g3 ~!7 b2 ~!9 a2 ~!6 g3 ~!6 d3 ~!10 g2 ~!7 b2 ~!8 a2 ~!8 e3 ~!6 d3 ~!8 g2 ~!7 b2 ~!8 e3 ~!7 d3 ~!8 g2 ~!4 b2 ~!6 a2 ~!7 e3 ~!11")
  .slow(189/8/5)
  .apply(bassVoice)
  .degradeBy(0.12)
  .shape(sine.range(0,0.15).slow(17))
  .every(28, x => x.transpose(12))
  .sometimes(x => x.lpf(330))
  .rarely(x => x.detune(sine.range(-9, 19).slow(13)))

// Track 4 — Accent rhythm, more variety, panned farther, add rare overdrive
$: stack([
  note("g4 ~ e4 ~ ds4 ~ b4 ~").sound("triangle").gain(0.096).lpf(sine.range(710,1050).slow(6)).room(sine.range(0.07,0.17).slow(9)).pan(sine.range(0.07,0.41).slow(13)).rarely(x=>x.drive(0.09)),
  note("d4 ~ b3 ~ f4 ~ g4 ~").sound("triangle").gain(0.10).lpf(sine.range(580,1100).slow(8)).room(0.06).pan(sine.range(0.71,0.97).slow(11)).rarely(x=>x.drive(0.07))
]).slow(34/8/4)
  .release(0.10)
  .degradeBy(0.16)
  .every(5,x=>x.palindrome())
  .sometimes(x=>x.hpf(330))

// Track 5 — Harpsichord accent: more random, slightly brighter, velocity more lively
$: note("<d4 g4 b4> <e4 g4 c5> ~ <d4 g4 b4> <b3 e4 g4> ~ <d4 f4 a4> <c4 e4 g4> <fs4 b4 d5> <a3 ds4 f4> ~ <e4 gs4 b4>")
  .slow(18/8/4)
  .apply(harpsiAccent)
  .degradeBy(0.09)
  .velocity(rand.range(0.13,0.21))
  .pan(rand.range(0.13,0.95))

// Expressive ghost-sine, denser, rare vowel, tremolo varies
$: note("g6 ~ b5 ~ d6 ~ e6 ~ f6 ~ gs6 ~")
    .sound("sine")
    .gain(0.059)
    .attack(0.13)
    .release(0.33)
    .room(0.59)
    .pan(sine.range(0.09,0.75).slow(16))
    .slow(37/8/4)
    .degradeBy(0.22)
    .tremolo(sine.range(0.09,0.19).slow(8))
    .every(12, x => x.vowel("i o"))
    .delay(0.14).delayfeedback(sine.range(0.14,0.26).slow(9))

// Percussive metallic/noise: hats sparse, claps more room, rare crush and delay, velocity varies
$: stack([
  s("hh:2 ~ ~ ~").gain(0.059).pan(sine.range(0.19,0.28).slow(11)).room(0.10).rarely(x => x.crush(5)).velocity(rand.range(0.13,0.21)),
  s("cp:1 ~ ~ ~").gain(0.042).pan(sine.range(0.81,0.97).slow(9)).room(sine.range(0.18,0.25).slow(4)).sometimes(x=>x.delay(0.21)).rarely(x=>x.crush(4)).velocity(rand.range(0.15,0.24))
]).slow(25/8/4)
  .degradeBy(sine.range(0.44,0.61).slow(8))