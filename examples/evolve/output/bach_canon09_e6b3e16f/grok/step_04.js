// BWV 1087 Canon 9

// Baroque style voices
let upperVoice = x => x
  .sound("sawtooth")
  .gain(0.35)
  .attack(0.025)
  .decay(0.18)
  .sustain(0.4)
  .lpf(sine.range(700, 3200).slow(16))
  .phaser(0.3).phaserdepth(0.35)
  .detune(perlin.range(-15, 15).slow(16))
  .fm(0.4)
  .fmenv(0.3)
  .delay(0.16)
  .dfb(0.3)
  .room(perlin.range(0.2, 0.4).slow(24))
  .pan(sine.range(0.25, 0.35).slow(8))
  .orbit(1)

let lowerVoice = x => x
  .sound("square")
  .gain(0.45)
  .attack(0.01)
  .decay(0.15)
  .sustain(0.28)
  .hpf(95)
  .lpf(1100).lpq(2.1)
  .tremolo(0.2).slow(6).tremolodepth(0.28)
  .distort(0.09)
  .room(perlin.range(0.25, 0.45).slow(24))
  .pan(cosine.range(0.65, 0.8).slow(12))
  .orbit(1)

setcps(108/60/4)

let phrase1 = "g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6"

// Track 1
$: note(phrase1)
  .slow(264/8/4)
  .every(8, rev)
  .apply(upperVoice)

// Track 2
$: note("~ ~ g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6")
  .slow(264/8/4)
  .apply(upperVoice)

// Track 3
$: note("~!8 g4*2 ~!6 gb4*2 ~!6 e4*2 ~!6 d4*2 ~!6 b3*2 ~!6 c4*2 ~!6 d4*2 ~!6 g3*4")
  .slow(264/8/4)
  .apply(lowerVoice)

// Drums
$: stack(
  s("bd").euclid(5,16).gain(0.38),
  s("sn").euclid(3,16).gain(0.22).room(0.28).hpf(200),
  s("hh*8,hh*8,hh*4").gain(0.13).hpf(4800).lpf(9800).degradeBy(0.12)
).pan(sine.range(0.45,0.55).slow(6))
  .room(0.22)
  .swing(0.04)
  .compressor()
  .orbit(2)