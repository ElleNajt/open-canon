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

// Track 1 — upper voice: clearer phrasing, simpler filter movement
$: note("~!40 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!15")
  .slow(208/8/4)
  .apply(upperVoice)
  .pan(0.23)
  .room(0.28)
  .degradeBy(0.015)
  .every(16, x => x.lpf(sine.range(1060, 1200).slow(24)).gain(0.21))
  .sometimesBy(0.13, x => x.vowel("a"))
  .sometimes(x => x.hpf(1150).gain(0.11).room(0.09))
  .sometimes(x => x.ring(0.15).gain(0.13))
  .every(22, x => x.rev())
  .every(24, x => x.attack(0.011).decay(0.08).sustain(0.13))

// Track 2 — lower voice: more muted, less drive, emphasize decay/space
$: note("~!8 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!15")
  .slow(208/8/4)
  .apply(lowerVoice)
  .pan(0.76)
  .room(0.10)
  .every(10, x => x.decay(0.11).room(0.12).lpf(640))
  .often(x => x.sustain(0.06))
  .sometimesBy(0.16, x => x.vowel("u"))
  .sometimes(x => x.attack(0.031).room(0.11))
  .every(16, x => x.sustain(0.08))
  .every(18, x => x.room(sine.range(0.09, 0.15).slow(19)))

// Track 3 — bass: no detune, rounder notes, less reverb, more presence
$: n("[d2 ~ a2] [d2 ~ fs2] [g2 ~ b1] [d2 ~ a1] [fs2 g2] [b1 a1]")
  .sound("piano")
  .gain(0.085)
  .sustain(0.13)
  .attack(0.016)
  .release(0.20)
  .lpf(sine.range(480, 850).slow(10))
  .lpq(8)
  .room(0.16)
  .pan(sine.range(0.41,0.46).slow(14))
  .every(18, x => x.lpf(390).room(0.1).gain(0.060))
  .sometimes(x => x.hpf(81).room(0.11))
  .compressor().compressorRatio(2)