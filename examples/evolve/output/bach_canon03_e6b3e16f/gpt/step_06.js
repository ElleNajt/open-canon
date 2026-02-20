// BWV 1087 Canon 3

// Baroque style voices
let upperVoice = x => x
  .sound("triangle")
  .gain(0.42)
  .attack(0.025)
  .decay(0.14)
  .sustain(0.23)
  .lpf(2200)
  .room(0.23)

let lowerVoice = x => x
  .sound("square")
  .gain(0.42)
  .attack(0.04)
  .decay(0.19)
  .sustain(0.18)
  .lpf(1200)
  .room(0.18)

setcps(116/60/4)

// Track 1
$: note("~!40 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!15")
  .slow(208/8/4)
  .apply(upperVoice)
  .pan(0.13)
  .room(0.23)
  .degradeBy(0.05)
  .every(16, x => x.lpf(1400).gain(0.36))
  .every(24, x => x.rev())
  .sometimes(x => x.hpf(1200).gain(0.24))
  .every(12, x => x.vowel("e i"))

// Track 2
$: note("~!8 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!15")
  .slow(208/8/4)
  .apply(lowerVoice)
  .pan(0.85)
  .room(0.18)
  .degradeBy(0.04)
  .every(12, x => x.lpf(700).gain(0.33))
  .every(20, x => x.hpf(350))
  .sometimes(x => x.vowel("a o").gain(0.29))
  .every(24, x => x.rev())

// Track 3 — bass, subtle, periodic brighter attack, evolving resonance
$: n("[d2 ~ ~ a2] [d2 ~ fs2 ~] [g2 ~ b1 ~] [d2 ~ a1 ~] [fs2 g2] [b1 a1]")
  .sound("sine")
  .gain(0.21)
  .sustain(0.19)
  .attack(0.012)
  .release(0.25)
  .room(0.25)
  .pan(0.49)
  .lpf(tri.range(400, 800).slow(16))
  .every(8, x => x.gain(0.31).octave(0))
  .every(16, x => x.lpf(1000).room(0.33))
  .every(12, x => x.hpf(45))
  .sometimes(x => x.lpf(1200).room(0.18))
  .sometimes(x => x.attack(0.025).gain(0.23))