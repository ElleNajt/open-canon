// Evolved BWV 1087 Canon 13

// Baroque style voices
let upperVoice = x => x
  .s("sawtooth")
  .gain(0.28)
  .attack(0.025)
  .decay(0.2)
  .sustain(0.65)
  .lpf(sine.range(700,2800).slow(32))
  .lpq(3.5)
  .tremolo(0.25).tremolosync(6)
  .detune(cosine.range(-10,10).slow(28))
  .fmi(0.25)
  .delay(0.12).dt(0.22)
  .dfb(0.28)
  .room(0.32)
  .vowel("a e o".slow(8))
  .orbit(1)
  .compressor()

let lowerVoice = x => x
  .s("triangle")
  .gain(0.32)
  .attack(0.03)
  .decay(0.25)
  .sustain(0.65)
  .hpf(90)
  .lpf(1100).lpq(5)
  .phaser(0.3).phaserdepth(0.3)
  .distort(0.1)
  .ring(0.15)
  .leslie(0.4)
  .slide(0.02)
  .room(perlin.range(0.28,0.42).slow(48))
  .pan(0.25)
  .orbit(1)

setcps(110/60/4)

let phrase1 = "g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 d6 ~ a5 ~ gb5 ~ d5"
let phrase2 = "~ ~ g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 d6 ~ a5 ~ gb5 ~ d5"
let bassPhrase = "~*4 [g4 bb4]*4 [eb4 g4]*4 ~*4 [d4 f4]*4 [bb3 d4]*4 ~*4 [c4 eb4]*4 ~*4 [d4 f4]*4 g3*8"

// Canon voices
$: stack(
  note(phrase1)
    .every(24, rev)
    .pan(sine.range(0.25,0.75).slow(28))
    .apply(upperVoice),
  note(phrase2)
    .every(28, rev)
    .pan(sine.range(0.1,0.35).slow(32))
    .apply(upperVoice)
    .gain(0.24)
    .detune(sine.range(-15,-2).slow(36))
).slow(8)

// Bass
$: note(bassPhrase)
  .slow(8)
  .every(28, rev)
  .apply(lowerVoice)
  .degradeBy(0.1)

// Drums
$: stack(
  s("bd").euclid(3,16).gain(0.24),
  s("sn ~ rim").euclid(3,16).gain(0.14).room(0.25).hpf(300).crush(14),
  s("hh*16").gain(0.07).hpf(6500).lpf(11000).degradeBy(0.25)
).pan(sine.range(0.2,0.8).slow(32))
  .room(0.28)
  .swing(0.04)
  .compressor()
  .orbit(3)