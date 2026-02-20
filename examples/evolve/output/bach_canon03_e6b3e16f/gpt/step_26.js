// BWV 1087 Canon 3

// Baroque style voices
let upperVoice = x => x
  .sound("triangle")
  .gain(0.33)
  .attack(0.037)
  .decay(0.11)
  .sustain(0.17)
  .lpf(1200)
  .room(0.26)

let lowerVoice = x => x
  .sound("square")
  .gain(0.29)
  .attack(0.046)
  .decay(0.10)
  .sustain(0.17)
  .lpf(730)
  .room(0.15)

setcps(116/60/4)

// Track 1 — upper voice: more dynamic phrasing/focus, selective reverbs, soft phaser
$: note("~!40 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!15")
  .slow(208/8/4)
  .apply(upperVoice)
  .pan(0.23)
  .room(0.20)
  .degradeBy(0.010)
  .every(16, x => x.lpf(sine.range(1100, 1400).slow(18)).gain(0.22))
  .sometimesBy(0.22, x => x.vowel("e i"))
  .sometimes(x => x.hpf(1350).gain(0.13).room(0.08))
  .sometimes(x => x.phaser(0.075).gain(0.15))
  .every(22, x => x.rev())
  .every(24, x => x.attack(0.011).decay(0.08).sustain(0.13))
  .often(x => x.room(0.27))

// Track 2 — lower voice: soften, create depth via rare delay and vowel sweep, no reverb changes
$: note("~!8 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!15")
  .slow(208/8/4)
  .apply(lowerVoice)
  .pan(0.76)
  .room(0.10)
  .every(10, x => x.decay(0.11).room(0.12).lpf(600))
  .every(16, x => x.sustain(0.08).vowel("o u"))
  .sometimesBy(0.05, x => x.delay(0.20).delaytime(0.18).delayfeedback(0.13))
  .rarely(x => x.sustain(0.18).lpf(720).vowel("u"))
  .every(18, x => x.room(0.11))

// Track 3 — bass: vary sustain, tighter rhythm, occasional octave jump
$: n("[d2 ~ a2] [d2 ~ fs2] [g2 ~ b1] [d2 ~ a1] [fs2 g2] [b1 a1]")
  .sound("piano")
  .gain(0.09)
  .sustain(sine.range(0.12, 0.19).slow(10))
  .attack(0.016)
  .release(0.16)
  .lpf(sine.range(520, 870).slow(13))
  .lpq(8)
  .room(0.14)
  .pan(sine.range(0.41,0.46).slow(14))
  .every(20, x => x.lpf(410).release(0.09).gain(0.075))
  .sometimesBy(0.09, x => x.octave(1))
  .compressor().compressorRatio(2)