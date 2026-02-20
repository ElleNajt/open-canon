// Evolved BWV 1087 Canon 12

// Baroque style voices
let upperVoice = x => x
  .s("triangle")
  .gain(0.28)
  .attack(0.03)
  .decay(0.2)
  .sustain(0.55)
  .lpf(cosine.range(550,2900).slow(32))
  .lpq(3.5)
  .phaser(0.35).phaserdepth(0.28)
  .detune(sine.range(-7,7).slow(22))
  .delay(0.16).dt(0.26)
  .dfb(0.28)
  .room(0.32)
  .vowel("a e o".slow(7))
  .orbit(1)

let lowerVoice = x => x
  .s("sawtooth")
  .gain(0.32)
  .attack(0.03)
  .decay(0.25)
  .sustain(0.55)
  .hpf(95)
  .lpf(1100).lpq(4.5)
  .leslie(0.3)
  .distort(0.09)
  .ring(0.14)
  .slide(0.018)
  .room(perlin.range(0.28,0.42).slow(45))
  .pan(0.28)
  .orbit(1)

setcps(116/60/4)

let phrase1 = "g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 d6 ~ a5 ~ gb5 ~ d5"
let phrase2 = "~ ~ g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 d6 ~ a5 ~ gb5 ~ d5"
let bassPhrase = "~*4 g4*4 eb4*4 ~*4 d4*4 bb3*4 ~*4 c4*4 ~*4 d4*4 g3*8"

// Canon voices
$: stack(
  note(phrase1)
    .every(20, rev)
    .pan(sine.range(0.25,0.75).slow(22))
    .apply(upperVoice),
  note(phrase2)
    .every(24, rev)
    .pan(sine.range(0.1,0.35).slow(26))
    .apply(upperVoice)
    .gain(0.24)
    .detune(cosine.range(-14,-2).slow(30))
).slow(8)

// Bass
$: note(bassPhrase)
  .slow(8)
  .every(24, rev)
  .apply(lowerVoice)

// Drums
$: stack(
  s("bd").euclid(6,16).gain(0.2),
  s("sn ~ rim").euclid(3,16).gain(0.14).room(0.24).hpf(300).crush(14),
  s("hh*4 ~*4, oh*2 ~*6, mt*2").gain(0.075).hpf(6000).lpf(10500).degradeBy(0.25)
).pan(sine.range(0.2,0.8).slow(28))
  .room(0.28)
  .swing(0.04)
  .compressor()
  .orbit(3)