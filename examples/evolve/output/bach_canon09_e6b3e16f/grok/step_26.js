// Evolved BWV 1087 Canon 14

// Baroque style voices
let upperVoice = x => x
  .s("sawtooth")
  .gain(0.28)
  .attack(0.04)
  .decay(0.2)
  .sustain(0.75)
  .lpf(sine.range(900,2800).slow(12))
  .lpq(5)
  .tremolo(0.25).tremolosync(6)
  .detune(sine.range(-10,10).slow(20))
  .fmi(0.25)
  .delay(0.15).dt(0.3)
  .dfb(0.2)
  .room(0.3)
  .orbit(1)
  .compressor()
  .shape(0.02)

let lowerVoice = x => x
  .s("triangle")
  .gain(0.24)
  .attack(0.04)
  .decay(0.2)
  .sustain(0.75)
  .hpf(90)
  .lpf(1200).lpq(5)
  .tremolo(0.2).tremolosync(6)
  .distort(0.03)
  .slide(0.01)
  .fmi(0.15)
  .room(perlin.range(0.2,0.4).slow(16))
  .pan(0.25)
  .orbit(1)

setcps(112/60/4)

let phrase1 = "g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 d6 ~ a5 ~ gb5 ~ d5"
let phrase2 = "~ ~ g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 d6 ~ a5 ~ gb5 ~ d5"
let bassPhrase = "~*4 [g3 bb3]*4 [eb4 g4]*4 ~*4 [d4 f4]*4 [bb3 d4]*4 ~*4 [c4 eb4]*4 ~*4 [d4 f4]*4 g3*8"

// Canon voices
$: stack(
  note(phrase1)
    .every(20, rev)
    .pan(sine.range(0.3,0.7).slow(20))
    .apply(upperVoice),
  note(phrase2)
    .every(24, rev)
    .pan(sine.range(0.05,0.3).slow(16))
    .apply(upperVoice)
    .gain(0.22)
    .detune(sine.range(-15,-8).slow(16))
).slow(8)

// Bass
$: note(bassPhrase)
  .slow(8)
  .every(24, rev)
  .apply(lowerVoice)

// Drums
$: stack(
  s("bd").euclid(5,16).gain(0.22),
  s("sn").euclid(3,16).gain(0.12).room(0.25).hpf(280).crush(12),
  s("hh").euclid(7,16).gain(0.08).hpf(7000).degradeBy(0.2)
).pan(sine.range(0.2,0.8).slow(12))
  .room(0.28)
  .swing(0.1)
  .compressor()
  .orbit(2)