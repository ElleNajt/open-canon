// Evolved BWV 1087 Canon 12

// Baroque style voices
let upperVoice = x => x
  .s("triangle")
  .gain(0.28)
  .attack(0.05)
  .decay(0.2)
  .sustain(0.55)
  .lpf(sine.range(500,3000).slow(32))
  .lpq(3)
  .tremolo(0.2).tremolosync(6)
  .detune(sine.range(-8,8).slow(24))
  .fm(0.3)
  .fmh(1.4)
  .fmenv(0.25)
  .delay(0.2).dt(0.22)
  .dfb(0.28)
  .room(0.32)
  .orbit(1)

let lowerVoice = x => x
  .s("sawtooth")
  .gain(0.32)
  .attack(0.03)
  .decay(0.25)
  .sustain(0.45)
  .hpf(80)
  .lpf(1400).lpq(3.5)
  .leslie(0.3)
  .distort(0.1)
  .ring(0.15)
  .slide(0.02)
  .room(perlin.range(0.2,0.35).slow(48))
  .pan(0.3)
  .orbit(1)

setcps(108/60/4)

let phrase1 = "g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 d6 ~ a5 ~ gb5 ~ d5"
let phrase2 = "~ ~ g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 d6 ~ a5 ~ gb5 ~ d5"
let bassPhrase = "~*4 g4*4 eb4*4 ~*4 d4*4 bb3*4 ~*4 c4*4 ~*4 d4*4 g3*8"

// Canon voices
$: stack(
  note(phrase1)
    .every(16, rev)
    .pan(sine.range(0.25,0.75).slow(24))
    .apply(upperVoice),
  note(phrase2)
    .every(20, rev)
    .pan(sine.range(0.05,0.35).slow(26))
    .apply(upperVoice)
    .gain(0.24)
    .detune(cosine.range(-10,-2).slow(32))
).slow(8)

// Bass
$: note(bassPhrase)
  .slow(8)
  .every(20, rev)
  .apply(lowerVoice)

// Drums
$: stack(
  s("bd").euclid(3,16).gain(0.2),
  s("sn ~ cp").euclid(3,16).gain(0.14).room(0.25).hpf(250).crush(14),
  s("hh*8, oh*2 ~*6").gain(0.08).hpf(7000).lpf(10000).degradeBy(0.25)
).pan(cosine.range(0.2,0.8).slow(20))
  .room(0.28)
  .swing(0.04)
  .compressor()
  .orbit(3)