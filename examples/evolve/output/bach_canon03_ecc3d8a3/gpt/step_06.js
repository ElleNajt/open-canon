// BWV 1087 Canon 3

// Baroque style voices
let upperVoice = x => x
  .sound("triangle")
  .gain(0.41)
  .attack(0.02)
  .decay(0.18)
  .sustain(0.23)
  .lpf(2400)
  .room(0.23)

let lowerVoice = x => x
  .sound("square")
  .gain(0.36)
  .attack(0.02)
  .decay(0.16)
  .sustain(0.19)
  .lpf(1150)
  .room(0.16)

let bassVoice = x => x
  .sound("sawtooth")
  .gain(0.26)
  .attack(0.03)
  .decay(0.23)
  .lpf(700)
  .release(0.23)
  .room(0.24)
  .octave(-1)

// Light harpsichord-style accent for period feel
let harpsiAccent = x => x
  .sound("piano")
  .gain(0.15)
  .attack(0.005)
  .decay(0.14)
  .sustain(0.1)
  .lpf(3930)
  .room(0.18)
  .pan(0.5)

setcps(124/60/4)

// Track 1 - Evolving upper canon, gradual widening and reverb increase
$: note("~!40 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!15")
  .slow(208/8/4)
  .apply(upperVoice)
  .pan(sine.range(0.09,0.39).slow(17))
  .degradeBy(0.04)
  .lpf(sine.range(1800, 3100).slow(19))
  .room(sine.range(0.19, 0.5).slow(20))
  .every(20, x => x.vowel("<a o i u e>"))
  .every(24, x => x.rev())
  .sometimes(x=>x.hpf(290))

// Track 2 - Lower canon with subtle growl and soft bandpass shifts
$: note("~!8 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!15")
  .slow(208/8/4)
  .apply(lowerVoice)
  .pan(sine.range(0.58,0.94).slow(18))
  .room(sine.range(0.13,0.26).slow(14))
  .degradeBy(0.035)
  .swing(0.12)
  .sometimes(x => x.vowel("o a o"))
  .rarely(x => x.bpf(1075))
  .sometimes(x => x.distort(0.04))

// Track 3 - Contrapuntal bass, more shape and periodic detune
$: note("~!48 d3 ~!7 g3 ~!7 b2 ~!7 a2 ~!7 g3 ~!7 d3 ~!7 g2 ~!7 b2 ~!7 a2 ~!7 e3 ~!7 d3 ~!7 g2 ~!7 b2 ~!7 e3 ~!7 d3 ~!7 g2 ~!7 b2 ~!7 a2 ~!7 e3 ~!15")
  .slow(208/8/4)
  .apply(bassVoice)
  .pan(rand.range(0.43,0.57))
  .degradeBy(0.1)
  .lpf(sine.range(590,1000).slow(24))
  .shape(sine.range(0,0.08).slow(11))
  .every(32, x => x.transpose(12))
  .sometimes(x => x.lpf(440))
  .sometimes(x => x.detune(sine.range(-16,16).slow(22)))

// Track 4 - Accent rhythm, now with chromatic splashes and rare high cutoff
$: stack([
  note("g4 ~ e4 ~ ds4 ~").sound("triangle").gain(0.12).lpf(sine.range(700,1500).slow(12)).pan(sine.range(0.07,0.31).slow(19)),
  note("d4 ~ b3 ~ f4 ~").sound("triangle").gain(0.13).lpf(sine.range(650,1050).slow(7)).pan(sine.range(0.68,0.99).slow(18))
]).slow(52/8/4)
.release(0.09)
.degradeBy(0.2)
.every(8,x=>x.rev())
.sometimes(x=>x.hpf(420))

// Track 5 - Harpsichord accent chords, subtle chord expansion
$: note("<d4 g4 b4> <e4 g4 c5> ~ <d4 g4 b4> <b3 e4 g4> ~ <d4 f4 a4> <c4 e4 g4> <fs4 b4 d5> ~")
  .slow(26/8/4)
  .apply(harpsiAccent)
  .degradeBy(0.13)
  .sometimes(x => x.rev())
  .velocity(rand.range(0.13,0.2))
  .pan(rand.range(0.13,0.87))

// Extra: More expressive ghost-sine with delayed echoes and evolving treble
$: stack([
  note("g6 ~ b5 ~ d6 ~ e6 ~").sound("sine")
    .gain(0.065)
    .attack(0.19)
    .release(0.37)
    .room(0.56)
    .pan(sine.range(0.13,0.53).slow(15))
    .slow(52/8/4)
    .degradeBy(0.38)
    .tremolo(0.16)
    .every(8, x => x.vowel("e"))
    .delay(0.13).delayfeedback(0.18),
  note("g6 d6").sound("sine")
    .gain(0.037)
    .attack(0.08)
    .release(0.26)
    .room(0.45)
    .pan(0.45)
    .slow(156/8/4)
    .degradeBy(0.47)
])

// Baroque clockwork, rare metallic sparkle, entropy rising to glitch
$: stack([
  s("hh:2 ~ cp:1 ~").gain(0.09).pan(0.09).room(0.05).sometimes(x => x.crush(6)),
  s("oh:3 ~ ~ ~").gain(0.045).pan(0.93).room(0.09).sometimes(x=>x.delay(0.13))
]).slow(52/8/4)
  .degradeBy(sine.range(0.48,0.81).slow(24))