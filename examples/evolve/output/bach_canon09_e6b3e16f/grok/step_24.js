// Evolved BWV 1087 Canon 14

// Baroque style voices
let upperVoice = x => x
  .s("triangle")
  .gain(0.3)
  .attack(0.03)
  .decay(0.25)
  .sustain(0.7)
  .lpf(sine.range(800,3000).slow(16))
  .lpq(6)
  .tremolo(0.3).tremolosync(4)
  .detune(sine.range(-12,12).slow(16))
  .fmi(0.3)
  .delay(0.18).dt(0.28)
  .dfb(0.25)
  .room(0.35)
  .vowel("a e".slow(8))
  .orbit(1)
  .compressor()
  .shape(0.025)
  .leslie(0.2)

let lowerVoice = x => x
  .s("pulse")
  .gain(0.26)
  .attack(0.03)
  .decay(0.22)
  .sustain(0.7)
  .hpf(100)
  .lpf(1300).lpq(4)
  .tremolo(0.25).tremolosync(4)
  .distort(0.035)
  .slide(0.015)
  .room(perlin.range(0.25,0.45).slow(12))
  .pan(0.3)
  .orbit(1)

setcps(108/60/4)

let phrase1 = "g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 d6 ~ a5 ~ gb5 ~ d5"
let phrase2 = "~ ~ g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 d6 ~ a5 ~ gb5 ~ d5"
let bassPhrase = "~*4 [g3 bb3]*4 [eb4 g4]*4 ~*4 [d4 f4]*4 [bb3 d4]*4 ~*4 [c4 eb4]*4 ~*4 [d4 f4]*4 g3*8"

// Canon voices
$: stack(
  note(phrase1)
    .every(24, rev)
    .pan(sine.range(0.35,0.75).slow(16))
    .apply(upperVoice),
  note(phrase2)
    .every(28, rev)
    .pan(sine.range(0.1,0.35).slow(20))
    .apply(upperVoice)
    .gain(0.24)
    .detune(sine.range(-18,-6).slow(20))
).slow(8)

// Bass
$: note(bassPhrase)
  .slow(8)
  .every(28, rev)
  .apply(lowerVoice)

// Drums
$: stack(
  s("bd").euclid(3,16).gain(0.24),
  s("sn").euclid(2,16).gain(0.13).room(0.28).hpf(260).crush(11),
  s("hh").euclid(9,16).gain(0.07).hpf(6500).degradeBy(0.25)
).pan(sine.range(0.25,0.85).slow(10))
  .room(0.32)
  .swing(0.08)
  .compressor()
  .orbit(2)