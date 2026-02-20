// BWV 1087 Canon 3 — Evolved REVISED

// Baroque style voices
let upperVoice = x => x
  .sound("triangle")
  .gain(0.44)
  .attack(0.015)
  .decay(0.18)
  .sustain(0.26)
  .lpf(2450)
  .room(sine.range(0.19,0.29).slow(21))

let lowerVoice = x => x
  .sound("square")
  .gain(0.25)
  .attack(0.017)
  .decay(0.13)
  .sustain(0.19)
  .lpf(990)
  .room(sine.range(0.11,0.16).slow(17))

let bassVoice = x => x
  .sound("sawtooth")
  .gain(0.18)
  .attack(0.025)
  .decay(0.16)
  .lpf(sine.range(570,870).slow(10))
  .release(0.25)
  .room(0.19)
  .octave(-1)
  .pan(sine.range(0.33,0.74).slow(31))

// Subtle harpsichord accent for period feel
let harpsiAccent = x => x
  .sound("piano")
  .gain(0.10)
  .attack(0.003)
  .decay(0.12)
  .sustain(0.08)
  .lpf(3950)
  .room(sine.range(0.13, 0.18).slow(15))
  .pan(sine.range(0.17,0.74).slow(15))

setcps(118/60/4)

// Track 1 — upper canon: flowing, more intervalic color, clear pan movement, varied filter, light vowel
$: note("~!38 d5 ~!5 e5 ~!6 gb5 ~!7 g5 ~!4 b5 ~!7 a5 ~!4 g5 ~!8 d6 ~!5 d5 ~!7 e5 ~!5 gb5 ~!6 g5 ~!8 b5 ~!7 a5 ~!5 g5 ~!7 d6 ~!6 d5 ~!8 e5 ~!4 gb5 ~!8 g5 ~!11")
  .slow(187/8/5)
  .apply(upperVoice)
  .pan(sine.range(0.18,0.42).slow(15))
  .degradeBy(0.08)
  .lpf(sine.range(1600, 3050).slow(17))
  .room(sine.range(0.17, 0.29).slow(17))
  .every(10, x => x.vowel("<a o u e i>"))
  .sometimes(x=>x.hpf(310))
  .rarely(x=>x.rev())

// Track 2 — Lower canon: lighter, transparent, more space, floaty bpf, rare vowel
$: note("~!8 g5 ~!7 gb5 ~!5 e5 ~!8 d5 ~!4 b4 ~!7 c5 ~!5 d5 ~!8 g4 ~!6 g5 ~!7 gb5 ~!4 e5 ~!6 d5 ~!6 b4 ~!7 c5 ~!6 d5 ~!6 g4 ~!8 g5 ~!5 gb5 ~!7 e5 ~!5 d5 ~!7 b4 ~!4 c5 ~!7 d5 ~!6 g4 ~!8")
  .slow(187/8/5)
  .apply(lowerVoice)
  .pan(sine.range(0.59,0.92).slow(16))
  .room(sine.range(0.10,0.13).slow(12))
  .degradeBy(0.04)
  .swing(0.12)
  .sometimes(x => x.vowel("o u"))
  .every(9, x => x.bpf(sine.range(970,1450).slow(6)))

// Track 3 — Counterpoint bass: clarified, rare octave, occasional detune, more rest space
$: note("~!28 d3 ~!9 g3 ~!6 b2 ~!8 a2 ~!8 g3 ~!7 d3 ~!8 g2 ~!8 b2 ~!8 a2 ~!6 e3 ~!8 d3 ~!7 g2 ~!5 b2 ~!8 e3 ~!6 d3 ~!8 g2 ~!6 b2 ~!7 a2 ~!8 e3 ~!13")
  .slow(187/8/5)
  .apply(bassVoice)
  .degradeBy(0.15)
  .shape(sine.range(0,0.11).slow(15))
  .every(24, x => x.transpose(12))
  .sometimes(x => x.lpf(320))
  .sometimes(x => x.detune(sine.range(-14, 15).slow(17)))

// Track 4 — Accent rhythm, shorter, palindromic
$: stack([
  note("g4 ~ e4 ~ ds4 ~ b4 ~").sound("triangle").gain(0.09).lpf(sine.range(790,1250).slow(7)).room(sine.range(0.06,0.12).slow(8)).pan(sine.range(0.09,0.35).slow(10)),
  note("d4 ~ b3 ~ f4 ~ g4 ~").sound("triangle").gain(0.095).lpf(sine.range(610,1030).slow(6)).room(0.05).pan(sine.range(0.68,0.99).slow(12))
]).slow(30/8/4)
  .release(0.09)
  .degradeBy(0.19)
  .every(6,x=>x.palindrome())
  .sometimes(x=>x.hpf(340))

// Track 5 — Harpsichord accent: slightly more harmonic variety, velocity and pan random
$: note("<d4 g4 b4> <e4 g4 c5> ~ <d4 g4 b4> <b3 e4 g4> ~ <d4 f4 a4> <c4 e4 g4> <fs4 b4 d5> <a3 ds4 f4> ~ <e4 gs4 b4>")
  .slow(16/8/4)
  .apply(harpsiAccent)
  .degradeBy(0.13)
  .velocity(rand.range(0.13,0.16))
  .pan(rand.range(0.18,0.91))

// Expressive ghost-sine, slightly more dense, evolving pan
$: note("g6 ~ b5 ~ d6 ~ e6 ~ f6 ~")
    .sound("sine")
    .gain(0.048)
    .attack(0.12)
    .release(0.37)
    .room(0.51)
    .pan(sine.range(0.18,0.69).slow(13))
    .slow(32/8/4)
    .degradeBy(0.26)
    .tremolo(0.14)
    .every(9, x => x.vowel("i"))
    .delay(0.13).delayfeedback(sine.range(0.16,0.22).slow(8))

// Percussive metallic/noise: hats, claps, sparkly, rare random crush, more room
$: stack([
  s("hh:2 ~ ~ ~").gain(0.068).pan(sine.range(0.13,0.19).slow(13)).room(0.07).rarely(x => x.crush(6)),
  s("cp:1 ~ ~ ~").gain(0.038).pan(sine.range(0.78,0.94).slow(7)).room(sine.range(0.09,0.16).slow(7)).sometimes(x=>x.delay(0.17))
]).slow(28/8/4)
  .degradeBy(sine.range(0.39,0.58).slow(11))