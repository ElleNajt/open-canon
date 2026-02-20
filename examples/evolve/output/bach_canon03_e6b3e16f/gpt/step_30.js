// BWV 1087 Canon 3

// Baroque style voices
let upperVoice = x => x
  .sound("triangle")
  .gain(0.32)
  .attack(0.029)
  .decay(0.11)
  .sustain(0.15)
  .lpf(1230)
  .room(0.24)

let lowerVoice = x => x
  .sound("square")
  .gain(0.23)
  .attack(0.042)
  .decay(0.10)
  .sustain(0.13)
  .lpf(590)
  .room(0.17)

setcps(116/60/4)

// Track 1 — upper voice: evolving phrasing, timbral movement, less reverb, more contour
$: note("~!40 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!15")
  .slow(208/8/4)
  .apply(upperVoice)
  .pan(0.16)
  .room(0.15)
  .every(10, x => x.lpf(sine.range(900, 1620).slow(12)).gain(0.28))
  .sometimesBy(0.13, x => x.vowel("e i").hpf(1940))
  .every(18, x => x.rev())
  .sometimes(x => x.room(0.26))
  .every(22, x => x.attack(0.019).decay(0.12).sustain(0.18))
  .degradeBy(0.017)

// Track 2 — lower voice: bolder phrasing, drop runny effects, increase some clarity
$: note("~!8 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!15")
  .slow(208/8/4)
  .apply(lowerVoice)
  .pan(0.63)
  .room(0.13)
  .attack(0.033)
  .every(12, x => x.decay(0.13).lpf(630))
  .every(18, x => x.sustain(0.11).lpf(740))
  .sometimesBy(0.09, x => x.vowel("a u").gain(0.19))
  .sometimes(x => x.room(0.11).hpf(490))

// Track 3 — bass: increase clarity, slightly more body, alternate octave
$: n("[d2 ~ a2] [d2 ~ fs2] [g2 ~ b1] [d2 ~ a1] [fs2 g2] [b1 a1]")
  .sound("piano")
  .gain(0.088)
  .sustain(0.19)
  .attack(0.013)
  .release(0.17)
  .lpf(sine.range(550, 970).slow(6))
  .lpq(13)
  .room(0.16)
  .pan(sine.range(0.42,0.55).slow(8))
  .every(11, x => x.lpf(400).release(0.14).gain(0.072))
  .every(8, x => x.octave(1))
  .sometimesBy(0.13, x => x.gain(0.099))

// Track 4 — remove “halo” for clarity and restraint