// Evolved BWV 1087 Canon 12

// Baroque style voices
let upperVoice = x => x
  .s("supersaw")
  .gain(0.25)
  .attack(0.02)
  .decay(0.18)
  .sustain(0.6)
  .lpf(sine.range(600,3000).slow(28))
  .lpq(4)
  .tremolo(0.2).tremolosync(4)
  .detune(cosine.range(-8,8).slow(24))
  .delay(0.14).dt(0.24)
  .dfb(0.25)
  .room(0.3)
  .vowel("e a o".slow(6))
  .orbit(1)
  .compressor()

let lowerVoice = x => x
  .s("square")
  .gain(0.3)
  .attack(0.025)
  .decay(0.22)
  .sustain(0.6)
  .hpf(85)
  .lpf(1200).lpq(4)
  .phaser(0.25).phaserdepth(0.25)
  .distort(0.08)
  .ring(0.12)
  .slide(0.015)
  .room(perlin.range(0.3,0.4).slow(40))
  .pan(0.3)
  .orbit(1)

setcps(120/60/4)

let phrase1 = "g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 d6 ~ a5 ~ gb5 ~ d5"
let phrase2 = "~ ~ g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 d6 ~ a5 ~ gb5 ~ d5"
let bassPhrase = "~*4 g4*4 eb4*4 ~*4 d4*4 bb3*4 ~*4 c4*4 ~*4 d4*4 g3*8"

// Canon voices
$: stack(
  note(phrase1)
    .every(22, rev)
    .pan(sine.range(0.3,0.7).slow(24))
    .apply(upperVoice),
  note(phrase2)
    .every(26, rev)
    .pan(sine.range(0.15,0.4).slow(28))
    .apply(upperVoice)
    .gain(0.22)
    .detune(sine.range(-12,-3).slow(32))
).slow(8)

// Bass
$: note(bassPhrase)
  .slow(8)
  .every(26, rev)
  .apply(lowerVoice)
  .degradeBy(0.08)

// Drums
$: stack(
  s("bd").euclid(5,16).gain(0.22),
  s("sn ~ cp").euclid(2,16).gain(0.12).room(0.22).hpf(280).crush(15),
  s("hh*8").gain(0.065).hpf(6200).lpf(10800).degradeBy(0.3)
).pan(sine.range(0.25,0.75).slow(30))
  .room(0.26)
  .swing(0.035)
  .compressor()
  .orbit(3)