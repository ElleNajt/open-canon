// BWV 1087 Canon 9

// Baroque style voices
let upperVoice = x => x
  .sound("supersaw")
  .gain(0.4)
  .attack(0.015)
  .decay(0.18)
  .sustain(0.3)
  .lpf(sine.range(900, 3200).slow(24))
  .phaser(0.3)
  .detune(perlin.range(-10, 10).slow(20))
  .delay(0.12)
  .dfb(0.25)
  .room(perlin.range(0.15, 0.35).slow(28))
  .pan(0.3)

let lowerVoice = x => x
  .sound("triangle")
  .gain(0.52)
  .attack(0.01)
  .decay(0.18)
  .sustain(0.3)
  .hpf(75)
  .lpq(1.5)
  .tremolo(0.15).slow(6)
  .room(perlin.range(0.2, 0.4).slow(24))
  .pan(0.75)

setcps(102/60/4)

let phrase1 = "g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6"

// Track 1
$: note(phrase1)
  .slow(264/8/4)
  .apply(upperVoice)

// Track 2
$: note("~ ~ g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6")
  .slow(264/8/4)
  .apply(upperVoice)

// Track 3
$: note("~!8 g4 ~!7 gb4 ~!7 e4 ~!7 d4 ~!7 b3 ~!7 c4 ~!7 d4 ~!7 g3")
  .slow(264/8/4)
  .apply(lowerVoice)

// Drums
$: stack(
  s("bd").euclid(3, 8).gain(0.42),
  s("sn").euclid(2, 8).gain(0.26).room(0.22),
  s("hh").euclid(7, 16).gain(0.16).hpf(4500).lpf(9000),
  s("cp").degradeBy(0.5).gain(0.18)
).pan(0.5).room(0.18)