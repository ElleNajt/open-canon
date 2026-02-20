// Evolved BWV 1087 Canon 14

// Baroque style voices
let upperVoice = x => x
  .s("sine")
  .gain(0.25)
  .attack(0.028)
  .decay(0.22)
  .sustain(0.62)
  .lpf(cosine.range(800,2500).slow(16))
  .lpq(4)
  .tremolo(0.22).tremolosync(4)
  .detune(sine.range(-12,12).slow(24))
  .fmi(0.3)
  .delay(0.1).dt(0.25)
  .dfb(0.25)
  .room(0.3)
  .vowel("a e i".slow(6))
  .orbit(0)
  .compressor()

let lowerVoice = x => x
  .s("pulse")
  .gain(0.3)
  .attack(0.025)
  .decay(0.28)
  .sustain(0.6)
  .hpf(100)
  .lpf(1200).lpq(4.2)
  .phaser(0.25).phaserdepth(0.28)
  .distort(0.08)
  .ring(0.12)
  .leslie(0.35)
  .slide(0.018)
  .room(perlin.range(0.25,0.38).slow(64))
  .pan(0.3)
  .orbit(0)

setcps(112/60/4)

let phrase1 = "g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 d6 ~ a5 ~ gb5 ~ d5"
let phrase2 = "~ ~ g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 d6 ~ a5 ~ gb5 ~ d5"
let bassPhrase = "~*4 [g4 bb4]*4 [eb4 g4]*4 ~*4 [d4 f4]*4 [bb3 d4]*4 ~*4 [c4 eb4]*4 ~*4 [d4 f4]*4 g3*8"

// Canon voices
$: stack(
  note(phrase1)
    .every(26, rev)
    .pan(sine.range(0.3,0.7).slow(24))
    .apply(upperVoice),
  note(phrase2)
    .every(30, rev)
    .pan(sine.range(0.15,0.4).slow(28))
    .apply(upperVoice)
    .gain(0.22)
    .detune(sine.range(-14,-3).slow(32))
).slow(8)

// Bass
$: note(bassPhrase)
  .slow(8)
  .every(30, rev)
  .apply(lowerVoice)
  .degradeBy(0.08)

// Drums
$: stack(
  s("bd").euclid(3,16).gain(0.22),
  s("sn ~ cp").euclid(2,16).gain(0.12).room(0.22).hpf(320).crush(15),
  s("hh*12 ~*4").gain(0.065).hpf(6800).lpf(10500).degradeBy(0.28)
).pan(sine.range(0.25,0.75).slow(16))
  .room(0.26)
  .swing(0.035)
  .compressor()
  .orbit(2)