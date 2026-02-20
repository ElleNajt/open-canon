// Evolved BWV 1087 Canon 14

// Baroque style voices
let upperVoice = x => x
  .s("triangle")
  .gain(0.28)
  .attack(0.03)
  .decay(0.25)
  .sustain(0.65)
  .lpf(sine.range(700,2800).slow(12))
  .lpq(3.8)
  .tremolo(0.18).tremolosync(6)
  .detune(sine.range(-8,8).slow(20))
  .fmi(0.4)
  .delay(0.12).dt(0.28)
  .dfb(0.22)
  .room(0.32)
  .vowel("e a o".slow(8))
  .orbit(1)
  .compressor()

let lowerVoice = x => x
  .s("square")
  .gain(0.32)
  .attack(0.022)
  .decay(0.26)
  .sustain(0.64)
  .hpf(120)
  .lpf(1400).lpq(3.8)
  .phaser(0.3).phaserdepth(0.25)
  .distort(0.06)
  .ring(0.1)
  .leslie(0.42)
  .slide(0.02)
  .room(perlin.range(0.22,0.4).slow(48))
  .pan(0.25)
  .orbit(1)

setcps(116/60/4)

let phrase1 = "g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 d6 ~ a5 ~ gb5 ~ d5"
let phrase2 = "~ ~ g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 d6 ~ a5 ~ gb5 ~ d5"
let bassPhrase = "~*4 [g3 bb3]*4 [eb4 g4]*4 ~*4 [d4 f4]*4 [bb3 d4]*4 ~*4 [c4 eb4]*4 ~*4 [d4 f4]*4 g3*8"

// Canon voices
$: stack(
  note(phrase1)
    .every(28, rev)
    .pan(sine.range(0.3,0.7).slow(20))
    .apply(upperVoice),
  note(phrase2)
    .every(32, rev)
    .pan(sine.range(0.15,0.4).slow(24))
    .apply(upperVoice)
    .gain(0.24)
    .detune(sine.range(-16,-2).slow(28))
).slow(8)

// Bass
$: note(bassPhrase)
  .slow(8)
  .every(32, rev)
  .apply(lowerVoice)

// Drums
$: stack(
  s("bd").euclid(3,16).gain(0.25),
  s("sn").euclid(2,16).gain(0.14).room(0.25).hpf(300).crush(16),
  s("hh").euclid(7,16).gain(0.07).hpf(7200).degradeBy(0.32)
).pan(sine.range(0.25,0.75).slow(12))
  .room(0.28)
  .swing(0.04)
  .compressor()
  .orbit(2)