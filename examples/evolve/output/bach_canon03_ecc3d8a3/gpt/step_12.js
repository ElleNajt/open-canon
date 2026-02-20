// BWV 1087 Canon 3 — Evolved REVISED 3 (strudel evolution)

// Baroque style voices
let upperVoice = x => x
  .sound("triangle")
  .gain(0.43)
  .attack(0.013)
  .decay(0.18)
  .sustain(0.22)
  .lpf(1920)
  .pan(sine.range(0.18,0.49).slow(17))
  .room(sine.range(0.18,0.28).slow(9))

let lowerVoice = x => x
  .sound("square")
  .gain(0.17)
  .attack(0.013)
  .decay(0.11)
  .sustain(0.12)
  .lpf(740)
  .room(sine.range(0.13,0.19).slow(15))
  .pan(sine.range(0.64,0.89).slow(14))

let bassVoice = x => x
  .sound("sawtooth")
  .gain(0.15)
  .attack(0.012)
  .decay(0.15)
  .lpf(sine.range(410,850).slow(13))
  .release(0.15)
  .room(0.15)
  .octave(-1)
  .pan(sine.range(0.35,0.65).slow(17))

let harpsiAccent = x => x
  .sound("piano")
  .gain(0.09)
  .attack(0.003)
  .decay(0.07)
  .sustain(0.045)
  .lpf(4900)
  .room(sine.range(0.12, 0.20).slow(8))
  .pan(sine.range(0.13,0.93).slow(13))

setcps(116/60/4)

// Track 1 — upper canon: added palindrome, more striking vowels
$: note("~!37 d5 ~!4 e5 ~!6 gb5 ~!7 g5 ~!4 b5 ~!8 a5 ~!3 g5 ~!7 d6 ~!6 d5 ~!7 e5 ~!5 gb5 ~!6 g5 ~!9 b5 ~!8 a5 ~!5 g5 ~!7 d6 ~!5 d5 ~!8 e5 ~!4 gb5 ~!8 g5 ~!10")
  .slow(189/8/5)
  .apply(upperVoice)
  .pan(sine.range(0.14,0.38).slow(9))
  .degradeBy(0.07)
  .lpf(sine.range(1390, 2170).slow(13))
  .room(sine.range(0.24, 0.31).slow(10))
  .every(6, x => x.vowel("<a o e>"))
  .every(8, x => x.palindrome())
  .rarely(x=>x.rev())

// Track 2 — Lower canon: less degrade, clearer bandpass movement
$: note("~!10 g5 ~!9 gb5 ~!5 e5 ~!8 d5 ~!5 b4 ~!9 c5 ~!4 d5 ~!7 g4 ~!6 g5 ~!6 gb5 ~!5 e5 ~!5 d5 ~!8 b4 ~!6 c5 ~!4 d5 ~!6 g4 ~!7 g5 ~!4 gb5 ~!7 e5 ~!5 d5 ~!8 b4 ~!4 c5 ~!7 d5 ~!5 g4 ~!8")
  .slow(189/8/5)
  .apply(lowerVoice)
  .pan(sine.range(0.57,0.89).slow(13))
  .room(sine.range(0.09,0.12).slow(13))
  .degradeBy(0.03)
  .swing(0.09)
  .often(x => x.bpf(sine.range(870,1390).slow(5)))
  .sometimes(x => x.vowel("<o u>"))

// Track 3 — Counterpoint bass: more rare octave jumps and sustain movement
$: note("~!19 d3 ~!8 g3 ~!7 b2 ~!9 a2 ~!6 g3 ~!6 d3 ~!10 g2 ~!7 b2 ~!8 a2 ~!8 e3 ~!6 d3 ~!8 g2 ~!7 b2 ~!8 e3 ~!7 d3 ~!8 g2 ~!4 b2 ~!6 a2 ~!7 e3 ~!11")
  .slow(189/8/5)
  .apply(bassVoice)
  .degradeBy(0.12)
  .shape(sine.range(0,0.09).slow(9))
  .every(20, x => x.transpose(12))
  .sometimes(x => x.lpf(330))
  .rarely(x => x.detune(sine.range(-8, 17).slow(9)))
  .sometimesBy(0.28, x => x.sustain(0.26))

// Track 4 — Accent rhythm: more syncopated pattern, more pronounced drive
$: stack([
  note("g4 ~ e4 ~ ds4 ~ b4 ~ a4 ~").sound("triangle").gain(0.099).lpf(sine.range(700,1120).slow(7)).room(sine.range(0.13,0.17).slow(8)).pan(sine.range(0.09,0.37).slow(12)).sometimes(x=>x.drive(0.08)),
  note("d4 ~ b3 ~ f4 ~ g4 ~ g3 ~").sound("triangle").gain(0.094).lpf(sine.range(490,1070).slow(11)).room(0.09).pan(sine.range(0.71,0.98).slow(10)).sometimes(x=>x.drive(0.06))
]).slow(28/8/4)
  .release(0.17)
  .degradeBy(0.12)
  .every(6,x=>x.palindrome())
  .often(x=>x.hpf(540))

// Track 5 — Harpsichord accent: more lively attack, pronounced panning
$: note("<d4 g4 b4> <e4 g4 c5> ~ <d4 g4 b4> <b3 e4 g4> ~ <d4 f4 a4> <c4 e4 g4> <fs4 b4 d5> <a3 ds4 f4> ~ <e4 gs4 b4>")
  .slow(16/8/4)
  .apply(harpsiAccent)
  .degradeBy(0.1)
  .velocity(rand.range(0.17,0.28))
  .pan(rand.range(0.09,0.97))
  .every(8,x=>x.rev())

// Ghost sine: more rare vowels, deeper room, less frequent note motion
$: note("g6 ~ b5 ~ d6 ~ e6 ~ f6 ~ gs6 ~")
    .sound("sine")
    .gain(0.042)
    .attack(0.24)
    .release(0.59)
    .room(0.62)
    .pan(sine.range(0.04,0.77).slow(15))
    .slow(38/8/4)
    .degradeBy(0.17)
    .tremolo(sine.range(0.11,0.24).slow(11))
    .every(17, x => x.vowel("u a o"))
    .delay(0.19).delayfeedback(sine.range(0.15,0.25).slow(10))

// Percussive metallic/noise: more syncopation, higher decay on hats, intensified claps
$: stack([
  s("hh:2 ~ ~ hh:2 ~ ~ ~ ~").gain(0.048).pan(sine.range(0.08,0.22).slow(12)).room(0.09).decay(0.10).sometimes(x => x.crush(4)).velocity(rand.range(0.17,0.23)),
  s("cp:1 ~ ~ ~ cp:1 ~").gain(0.057).pan(sine.range(0.81,0.96).slow(12)).room(sine.range(0.27,0.40).slow(9)).sometimes(x=>x.delay(0.19)).rarely(x=>x.crush(2)).velocity(rand.range(0.17,0.32))
]).slow(19/8/4)
  .degradeBy(sine.range(0.36,0.50).slow(9))