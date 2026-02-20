// Evolved BWV 1087 Canon 14

// Baroque style voices
let upperVoice = x => x
  .s("pulse")
  .gain(0.28)
  .attack(0.025)
  .decay(0.22)
  .sustain(0.75)
  .lpf(sine.range(600,2800).slow(12))
  .lpq(5)
  .tremolo(0.25).tremolosync(6)
  .detune(sine.range(-15,15).slow(12))
  .fmi(0.4)
  .delay(0.2).dt(0.3)
  .dfb(0.3)
  .room(0.4)
  .vowel("e a".slow(6))
  .orbit(1)
  .compressor()
  .shape(0.03)

let lowerVoice = x => x
  .s("square")
  .gain(0.28)
  .attack(0.025)
  .decay(0.2)
  .sustain(0.75)
  .hpf(120)
  .lpf(1400).lpq(5)
  .tremolo(0.2).tremolosync(3)
  .distort(0.04)
  .slide(0.02)
  .room(perlin.range(0.3,0.5).slow(16))
  .pan(0.25)
  .orbit(1)

setcps(115/60/4)

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
    .gain(0.22)
    .detune(sine.range(-20,-4).slow(24))
).slow(8)

// Bass
$: note(bassPhrase)
  .slow(8)
  .every(32, rev)
  .apply(lowerVoice)

// Drums
$: stack(
  s("bd").euclid(3,16).gain(0.22),
  s("sn").euclid(2,16).gain(0.12).room(0.25).hpf(250).crush(12),
  s("hh").euclid(9,16).gain(0.06).hpf(6000).degradeBy(0.3)
).pan(sine.range(0.2,0.8).slow(8))
  .room(0.3)
  .swing(0.06)
  .compressor()
  .orbit(2)