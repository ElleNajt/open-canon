// Evolved BWV 1087 Canon 14

// Baroque style voices
let upperVoice = x => x
  .s("triangle")
  .gain(0.3)
  .attack(0.03)
  .decay(0.24)
  .sustain(0.7)
  .lpf(sine.range(800,3000).slow(16))
  .lpq(4)
  .tremolo(0.2).tremolosync(4)
  .detune(sine.range(-12,12).slow(16))
  .fmi(0.5)
  .delay(0.15).dt(0.25)
  .dfb(0.25)
  .room(0.35)
  .vowel("a e i".slow(4))
  .orbit(1)
  .compressor()
  .shape(0.04)

let lowerVoice = x => x
  .s("sawtooth")
  .gain(0.3)
  .attack(0.02)
  .decay(0.24)
  .sustain(0.7)
  .hpf(100)
  .lpf(1600).lpq(4)
  .phaser(0.25).phaserdepth(0.3)
  .distort(0.05)
  .ring(0.08)
  .leslie(0.35)
  .slide(0.015)
  .room(perlin.range(0.25,0.45).slow(32))
  .pan(0.3)
  .orbit(1)

setcps(110/60/4)

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
  s("bd").euclid(3,16).gain(0.24),
  s("sn").euclid(2,16).gain(0.13).room(0.28).hpf(280).crush(14),
  s("hh").euclid(9,16).gain(0.065).hpf(6800).degradeBy(0.28)
).pan(sine.range(0.2,0.8).slow(8))
  .room(0.3)
  .swing(0.05)
  .compressor()
  .orbit(2)