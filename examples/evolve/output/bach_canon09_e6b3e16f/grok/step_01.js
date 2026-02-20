// BWV 1087 Canon 9

// Baroque style voices
let upperVoice = x => x
  .sound("triangle")
  .gain(0.45)
  .attack(0.02)
  .decay(0.15)
  .sustain(0.2)
  .lpf(sine.range(1000, 3500).slow(16))
  .phaser(0.2)
  .detune(sine.range(-8, 8).slow(12))
  .room(perlin.range(0.1, 0.3).slow(24))
  .pan(0.3)

let lowerVoice = x => x
  .sound("square")
  .gain(0.5)
  .decay(0.15)
  .sustain(0.2)
  .hpf(80)
  .room(perlin.range(0.15, 0.35).slow(20))
  .pan(0.75)

setcps(100/60/4)

let phrase1 = "g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6"

// Track 1
$: note(phrase1)
  .slow(264/8/4)
  .apply(upperVoice)

// Track 2
$: note("~ ~ g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6")
  .slow(264/8/4)
  .apply(upperVoice)
  .pan(0.55)

// Track 3
$: note("~!8 g4 ~!7 gb4 ~!7 e4 ~!7 d4 ~!7 b3 ~!7 c4 ~!7 d4 ~!7 g3")
  .slow(264/8/4)
  .apply(lowerVoice)

// Drums
$: stack(
  s("bd").euclid(5, 16).gain(0.45),
  s("sn").euclid(3, 16).gain(0.25).room(0.15),
  s("hh").euclid(9, 16).gain(0.18).hpf(4000).lpf(10000)
).pan(0.5).room(0.2)