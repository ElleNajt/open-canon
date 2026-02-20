// BWV 1087 Canon 9

// Baroque style voices
let upperVoice = x => x
  .sound("supersaw")
  .gain(0.38)
  .attack(0.02)
  .decay(0.2)
  .sustain(0.35)
  .lpf(tri.range(800, 3400).slow(32))
  .phaser(0.25).phaserdepth(0.4)
  .detune(perlin.range(-12, 12).slow(24))
  .fm(0.35)
  .fmenv(0.25)
  .delay(0.14)
  .dfb(0.28)
  .room(perlin.range(0.18, 0.38).slow(32))
  .pan(0.28)
  .orbit(1)

let lowerVoice = x => x
  .sound("pulse")
  .gain(0.48)
  .attack(0.012)
  .decay(0.16)
  .sustain(0.32)
  .hpf(85)
  .lpq(1.8)
  .tremolo(0.18).slow(7).tremolodepth(0.25)
  .distort(0.08)
  .room(perlin.range(0.22, 0.42).slow(28))
  .pan(0.72)
  .orbit(1)

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
  s("bd").euclid(3,16).gain(0.4),
  s("sn").euclid(3,16).gain(0.24).room(0.25).hpf(180),
  s("hh").euclid(11,32).gain(0.15).hpf(4200).lpf(9500)
).pan(sine.range(0.4,0.6).slow(8))
  .room(0.2)
  .swing(0.03)
  .orbit(2)