// BWV 1087 Canon 3 — Evolved REVISED 4 (Strudel evolved by AI)

// Baroque style voices
let upperVoice = x => x
  .sound("triangle")
  .gain(0.44)
  .attack(0.011)
  .decay(0.16)
  .sustain(0.23)
  .lpf(2080)
  .pan(sine.range(0.16,0.55).slow(14))
  .room(sine.range(0.16,0.29).slow(8))

let lowerVoice = x => x
  .sound("square")
  .gain(0.18)
  .attack(0.012)
  .decay(0.13)
  .sustain(0.14)
  .lpf(810)
  .room(sine.range(0.16,0.22).slow(11))
  .pan(sine.range(0.61,0.89).slow(12))

let bassVoice = x => x
  .sound("sawtooth")
  .gain(0.16)
  .attack(0.011)
  .decay(0.13)
  .lpf(sine.range(540,930).slow(11))
  .release(0.16)
  .room(0.17)
  .octave(-1)
  .pan(sine.range(0.28,0.59).slow(13))

let harpsiAccent = x => x
  .sound("piano")
  .gain(0.11)
  .attack(0.002)
  .decay(0.06)
  .sustain(0.05)
  .lpf(5100)
  .room(sine.range(0.14, 0.18).slow(10))
  .pan(sine.range(0.11,0.89).slow(12))

setcps(122/60/4)

// Track 1 — upper canon: more vowel evolution, varying palindromes, rare delay
$: note("~!37 d5 ~!4 e5 ~!6 gb5 ~!7 g5 ~!4 b5 ~!8 a5 ~!3 g5 ~!7 d6 ~!6 d5 ~!7 e5 ~!5 gb5 ~!6 g5 ~!9 b5 ~!8 a5 ~!5 g5 ~!7 d6 ~!5 d5 ~!8 e5 ~!4 gb5 ~!8 g5 ~!10")
  .slow(189/8/5)
  .apply(upperVoice)
  .pan(sine.range(0.11,0.46).slow(10))
  .degradeBy(0.06)
  .lpf(sine.range(1510, 2390).slow(12))
  .room(sine.range(0.21, 0.36).slow(7))
  .every(5, x => x.vowel("<a o i e>"))
  .every(6, x => x.palindrome())
  .sometimes(x=>x.delay(0.12).delayfeedback(0.18))
  .rarely(x=>x.rev())

// Track 2 — Lower canon: bandpass evolves, more interplay with upper
$: note("~!10 g5 ~!9 gb5 ~!5 e5 ~!8 d5 ~!5 b4 ~!9 c5 ~!4 d5 ~!7 g4 ~!6 g5 ~!6 gb5 ~!5 e5 ~!5 d5 ~!8 b4 ~!6 c5 ~!4 d5 ~!6 g4 ~!7 g5 ~!4 gb5 ~!7 e5 ~!5 d5 ~!8 b4 ~!4 c5 ~!7 d5 ~!5 g4 ~!8")
  .slow(189/8/5)
  .apply(lowerVoice)
  .pan(sine.range(0.53,0.81).slow(11))
  .room(sine.range(0.12,0.16).slow(12))
  .degradeBy(0.04)
  .swing(0.08)
  .every(3, x => x.bpf(sine.range(960,1430).slow(7)))
  .sometimesBy(0.22, x => x.vowel("<o u a>"))

// Track 3 — Counterpoint bass: wider lpf motion, rare jumps/overlap
$: note("~!19 d3 ~!8 g3 ~!7 b2 ~!9 a2 ~!6 g3 ~!6 d3 ~!10 g2 ~!7 b2 ~!8 a2 ~!8 e3 ~!6 d3 ~!8 g2 ~!7 b2 ~!8 e3 ~!7 d3 ~!8 g2 ~!4 b2 ~!6 a2 ~!7 e3 ~!11")
  .slow(189/8/5)
  .apply(bassVoice)
  .degradeBy(0.13)
  .shape(sine.range(0,0.12).slow(8))
  .every(17, x => x.transpose(12))
  .rarely(x => x.lpf(290))
  .sometimesBy(0.15, x => x.detune(sine.range(-14, 11).slow(8)))
  .sometimesBy(0.36, x => x.sustain(0.31))

// Track 4 — Accent rhythm: new groove, blend of dry and roomy events
$: stack([
  note("g4 ~ e4 ~ ds4 ~ b4 ~ a4 ~ g4 ~").sound("triangle").gain(0.098).lpf(sine.range(730,1190).slow(6)).room(sine.range(0.12,0.22).slow(7)).pan(sine.range(0.07,0.41).slow(13)).sometimes(x=>x.drive(0.09)),
  note("d4 ~ b3 ~ f4 ~ g4 ~ g3 ~ ~").sound("triangle").gain(0.092).lpf(sine.range(420,1110).slow(12)).room(0.07).pan(sine.range(0.81,0.96).slow(9)).sometimes(x=>x.drive(0.07))
]).slow(28/8/4)
  .release(0.19)
  .degradeBy(0.13)
  .every(7,x=>x.palindrome())
  .rarely(x=>x.hpf(590))

// Track 5 — Harpsichord accent: more velocity, evolving lpf
$: note("<d4 g4 b4> <e4 g4 c5> ~ <d4 g4 b4> <b3 e4 g4> ~ <d4 f4 a4> <c4 e4 g4> <fs4 b4 d5> <a3 ds4 f4> ~ <e4 gs4 b4>")
  .slow(18/8/4)
  .apply(harpsiAccent)
  .degradeBy(0.11)
  .velocity(rand.range(0.19,0.33))
  .pan(rand.range(0.07,0.95))
  .lpf(sine.range(4000,6350).slow(15))
  .every(6,x=>x.rev())

// Ghost sine: more delay depth, rare slow rev
$: note("g6 ~ b5 ~ d6 ~ e6 ~ f6 ~ gs6 ~")
    .sound("sine")
    .gain(0.045)
    .attack(0.18)
    .release(0.63)
    .room(0.65)
    .pan(sine.range(0.04,0.89).slow(13))
    .slow(40/8/4)
    .degradeBy(0.18)
    .tremolo(sine.range(0.09,0.20).slow(10))
    .every(19, x => x.vowel("<u a o>"))
    .delay(0.22).delayfeedback(sine.range(0.12,0.31).slow(12))
    .rarely(x=>x.rev())

// Percussive metallic/noise: new clap pattern, rare delays and velocity shifts
$: stack([
  s("hh:2 ~ ~ hh:2 ~ ~ hh:2 ~").gain(0.041).pan(sine.range(0.10,0.27).slow(11)).room(0.10).decay(0.12).sometimesBy(0.5, x => x.crush(3)).velocity(rand.range(0.13,0.19)),
  s("cp:1 ~ ~ cp:1 ~ cp:1 ~").gain(0.059).pan(sine.range(0.76,0.99).slow(10)).room(sine.range(0.23,0.42).slow(10)).sometimes(x=>x.delay(0.13)).rarely(x=>x.crush(2)).velocity(rand.range(0.17,0.34))
]).slow(17/8/4)
  .degradeBy(sine.range(0.37,0.49).slow(7))