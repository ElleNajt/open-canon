// Evolved BWV 1087 Canon 11

// Baroque style voices
let upperVoice = x => x
  .s("triangle")
  .gain(0.26)
  .attack(0.04)
  .decay(0.2)
  .sustain(0.45)
  .lpf(cosine.range(650,2900).slow(22))
  .lpq(2.5)
  .phaser(0.22).phaserdepth(0.4)
  .tremolo(0.22).tremolosync(5.5)
  .detune(sine.range(-10,10).slow(14))
  .fm(0.32)
  .fmh(1.4)
  .fmenv(0.28)
  .delay(0.16).dt(0.21)
  .dfb(0.22)
  .room(0.28)
  .orbit(1)

let lowerVoice = x => x
  .s("square")
  .gain(0.33)
  .attack(0.03)
  .decay(0.19)
  .sustain(0.38)
  .hpf(85)
  .lpf(1500).lpq(3.8)
  .leslie(0.28)
  .distort(0.11)
  .ring(0.16)
  .slide(0.012)
  .room(perlin.range(0.22,0.38).slow(28))
  .pan(0.22)
  .orbit(1)

setcps(112/60/4)

let phrase1 = "g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 d6 ~ a5 ~ gb5 ~ d5"
let phrase2 = "~ ~ g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 d6 ~ a5 ~ gb5 ~ d5"
let bassPhrase = "~*4 g4*4 eb4*4 ~*4 d4*4 bb3*4 ~*4 c4*4 ~*4 d4*4 g3*8"

// Canon voices
$: stack(
  note(phrase1)
    .sometimes(rev)
    .pan(cosine.range(0.35,0.65).slow(16))
    .apply(upperVoice),
  note(phrase2)
    .sometimes(rev)
    .pan(cosine.range(0.15,0.45).slow(18))
    .apply(upperVoice)
    .gain(0.24)
    .detune(sine.range(-12,-2).slow(24))
).slow(8)

// Bass
$: note(bassPhrase)
  .slow(8)
  .every(24, rev)
  .apply(lowerVoice)

// Drums
$: stack(
  s("bd").euclid(5,16).gain(0.2),
  s("sn ~ cp").euclid(3,16).gain(0.15).room(0.2).hpf(260).crush(11),
  s("hh*3, oh*5 ~ hh*3, ht*3").gain(0.095).hpf(6800).lpf(9200).degradeBy(0.18)
).pan(sine.range(0.38,0.62).slow(14))
  .room(0.24)
  .swing(0.04)
  .compressor()
  .orbit(2)