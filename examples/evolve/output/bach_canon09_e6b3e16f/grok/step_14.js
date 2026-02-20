// Evolved BWV 1087 Canon 12

// Baroque style voices
let upperVoice = x => x
  .s("sine")
  .gain(0.26)
  .attack(0.04)
  .decay(0.18)
  .sustain(0.6)
  .lpf(cosine.range(600,2800).slow(28))
  .lpq(4)
  .phaser(0.4).phaserdepth(0.3)
  .detune(sine.range(-6,6).slow(20))
  .fm(0.25)
  .fmh(1.5)
  .fmenv(0.2)
  .delay(0.18).dt(0.25)
  .dfb(0.25)
  .room(0.3)
  .vowel("a i o".slow(6))
  .orbit(1)

let lowerVoice = x => x
  .s("pulse")
  .gain(0.3)
  .attack(0.025)
  .decay(0.22)
  .sustain(0.5)
  .hpf(90)
  .lpf(1200).lpq(4)
  .leslie(0.25)
  .distort(0.08)
  .ring(0.12)
  .slide(0.015)
  .room(perlin.range(0.25,0.4).slow(40))
  .pan(0.25)
  .orbit(1)

setcps(112/60/4)

let phrase1 = "g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 d6 ~ a5 ~ gb5 ~ d5"
let phrase2 = "~ ~ g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 d6 ~ a5 ~ gb5 ~ d5"
let bassPhrase = "~*4 g4*4 eb4*4 ~*4 d4*4 bb3*4 ~*4 c4*4 ~*4 d4*4 g3*8"

// Canon voices
$: stack(
  note(phrase1)
    .every(18, rev)
    .pan(sine.range(0.2,0.8).slow(20))
    .apply(upperVoice),
  note(phrase2)
    .every(22, rev)
    .pan(sine.range(0,0.3).slow(24))
    .apply(upperVoice)
    .gain(0.22)
    .detune(cosine.range(-12,-1).slow(28))
).slow(8)

// Bass
$: note(bassPhrase)
  .slow(8)
  .every(22, rev)
  .apply(lowerVoice)

// Drums
$: stack(
  s("bd").euclid(5,16).gain(0.18),
  s("~ sn rim").euclid(4,16).gain(0.12).room(0.22).hpf(280).crush(15),
  s("hh*4 ~*4, oh ~*7, lt*2").gain(0.07).hpf(6500).lpf(11000).degradeBy(0.3)
).pan(cosine.range(0.15,0.85).slow(24))
  .room(0.25)
  .swing(0.035)
  .compressor()
  .orbit(3)