// Evolved BWV 1087 Canon 11

// Baroque style voices
let upperVoice = x => x
  .s("sine")
  .gain(0.27)
  .attack(0.045)
  .decay(0.18)
  .sustain(0.5)
  .lpf(sine.range(600,3200).slow(24))
  .lpq(2.8)
  .phaser(0.25).phaserdepth(0.45)
  .tremolo(0.25).tremolosync(4.8)
  .detune(sine.range(-12,12).slow(16))
  .fm(0.35)
  .fmh(1.3)
  .fmenv(0.3)
  .delay(0.18).dt(0.19)
  .dfb(0.25)
  .room(0.3)
  .orbit(1)

let lowerVoice = x => x
  .s("pulse")
  .gain(0.35)
  .attack(0.025)
  .decay(0.22)
  .sustain(0.4)
  .hpf(90)
  .lpf(1600).lpq(4)
  .leslie(0.25)
  .distort(0.12)
  .ring(0.18)
  .slide(0.015)
  .room(perlin.range(0.25,0.4).slow(32))
  .pan(0.25)
  .orbit(1)

setcps(115/60/4)

let phrase1 = "g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 d6 ~ a5 ~ gb5 ~ d5"
let phrase2 = "~ ~ g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 d6 ~ a5 ~ gb5 ~ d5"
let bassPhrase = "~*4 g4*4 eb4*4 ~*4 d4*4 bb3*4 ~*4 c4*4 ~*4 d4*4 g3*8"

// Canon voices
$: stack(
  note(phrase1)
    .every(16, rev)
    .pan(sine.range(0.3,0.7).slow(20))
    .apply(upperVoice),
  note(phrase2)
    .every(18, rev)
    .pan(sine.range(0.1,0.4).slow(22))
    .apply(upperVoice)
    .gain(0.22)
    .detune(cosine.range(-15,-3).slow(28))
).slow(8)

// Bass
$: note(bassPhrase)
  .slow(8)
  .every(16, rev)
  .apply(lowerVoice)

// Drums
$: stack(
  s("bd").euclid(4,16).gain(0.22),
  s("sn ~ cp").euclid(4,16).gain(0.16).room(0.22).hpf(280).crush(12),
  s("hh*4, oh*4 ~ hh*2").gain(0.1).hpf(6500).lpf(9500).degradeBy(0.2)
).pan(cosine.range(0.3,0.7).slow(16))
  .room(0.26)
  .swing(0.035)
  .compressor()
  .orbit(3)