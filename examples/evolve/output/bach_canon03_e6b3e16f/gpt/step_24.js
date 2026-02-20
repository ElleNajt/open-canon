// BWV 1087 Canon 3

// Baroque style voices
let upperVoice = x => x
  .sound("triangle")
  .gain(0.37)
  .attack(0.027)
  .decay(0.12)
  .sustain(0.21)
  .lpf(1320)
  .room(0.27)

let lowerVoice = x => x
  .sound("square")
  .gain(0.32)
  .attack(0.04)
  .decay(0.10)
  .sustain(0.2)
  .lpf(890)
  .room(0.18)

setcps(116/60/4)

// Track 1 — upper voice: more phrasing detail, gentle leslie modulation
$: note("~!40 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!15")
  .slow(208/8/4)
  .apply(upperVoice)
  .pan(0.22)
  .room(0.3)
  .degradeBy(0.03)
  .every(16, x => x.lpf(sine.range(1060, 1420).slow(20)).gain(0.23).decay(0.16))
  .every(22, x => x.rev())
  .sometimesBy(0.18, x => x.vowel("a"))
  .sometimes(x => x.hpf(1200).gain(0.13).room(0.12))
  .sometimes(x => x.ring(0.18).gain(0.15))
  .every(24, x => x.attack(0.013).decay(0.09).sustain(0.14))
  .sometimes(x => x.leslie(0.11).lrate(0.26).lsize(0.17))

// Track 2 — lower voice: remove phaser, further soften, adds subtle reverb morph
$: note("~!8 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!15")
  .slow(208/8/4)
  .apply(lowerVoice)
  .pan(0.77)
  .room(0.12)
  .every(10, x => x.decay(0.12).room(0.14).lpf(680))
  .often(x => x.sustain(0.07))
  .sometimesBy(0.13, x => x.vowel("u"))
  .sometimes(x => x.attack(0.029).room(0.13))
  .sometimesBy(0.17, x => x.drive(0.05))
  .every(16, x => x.sustain(0.09))
  .every(18, x => x.room(sine.range(0.1, 0.18).slow(16)))

// Track 3 — bass: lighter, piano-like with room, remove pulse blend for clarity
$: n("[d2 ~ a2] [d2 ~ fs2] [g2 ~ b1] [d2 ~ a1] [fs2 g2] [b1 a1]")
  .sound("piano")
  .gain(0.078)
  .sustain(0.10)
  .attack(0.015)
  .release(0.24)
  .lpf(sine.range(420, 720).slow(12))
  .lpq(7)
  .room(0.29)
  .pan(sine.range(0.38,0.47).slow(15))
  .every(18, x => x.lpf(375).room(0.13).gain(0.049))
  .sometimes(x => x.hpf(74).room(0.13))
  .detune(2)
  .compressor().compressorRatio(2.5)