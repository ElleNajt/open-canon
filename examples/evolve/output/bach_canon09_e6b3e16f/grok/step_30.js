// Evolved BWV 1087 Canon 14

// Baroque style voices
let upperVoice = x => x
  .s("pulse")
  .gain(0.22)
  .attack(0.03)
  .decay(0.15)
  .sustain(0.8)
  .lpf(saw.range(600,2800).slow(12))
  .lpq(5)
  .tremolo(0.25).tremolosync(6)
  .detune(cosine.range(-15,15).slow(20))
  .fmi(0.25)
  .delay(0.1).dt(0.25)
  .dfb(0.3)
  .room(0.3)
  .orbit(1)
  .compressor()
  .shape(0.02)
  .velocity(perlin.range(0.7,1))

let lowerVoice = x => x
  .s("supersaw")
  .gain(0.18)
  .attack(0.03)
  .decay(0.15)
  .sustain(0.8)
  .hpf(100)
  .lpf(1200).lpq(8)
  .tremolo(0.2).tremolosync(7)
  .distort(0.03)
  .slide(0.02)
  .fmi(0.15)
  .room(perlin.range(0.2,0.4).slow(16))
  .pan(0.15)
  .orbit(1)
  .velocity(perlin.range(0.65,0.92))

setcps(118/60/4)

let phrase1 = "g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 d6 ~ a5 ~ gb5 ~ d5"
let phrase2 = "~ ~ g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 d6 ~ a5 ~ gb5 ~ d5"
let bassPhrase = "~*4 [g3 bb3]*4 [eb4 g4]*4 ~*4 [d4 f4]*4 [bb3 d4]*4 ~*4 [c4 eb4]*4 ~*4 [d4 f4]*4 g3*8"

// Canon voices
$: stack(
  note(phrase1)
    .every(20, rev)
    .pan(sine.range(0.25,0.75).slow(18))
    .apply(upperVoice),
  note(phrase2)
    .every(24, rev)
    .pan(sine.range(0,0.25).slow(14))
    .apply(upperVoice)
    .gain(0.18)
    .detune(sine.range(-18,-5).slow(14))
).slow(8)

// Bass
$: note(bassPhrase)
  .slow(8)
  .every(24, rev)
  .apply(lowerVoice)
  .legato(0.9)

// Drums
$: stack(
  s("bd").euclid(7,16).gain(0.18),
  s("sn").euclid(4,16).gain(0.1).room(0.25).hpf(280).crush(15),
  s("hh").euclid(11,16).gain(0.06).hpf(6800).degradeBy(0.2).fast(1.5)
).pan(sine.range(0.15,0.85).slow(10))
  .room(0.28)
  .swing(0.1)
  .compressor()
  .orbit(2)
  .delay(0.12)