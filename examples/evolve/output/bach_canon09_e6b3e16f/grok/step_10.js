// Evolved BWV 1087 Canon 11

// Baroque style voices
let upperVoice = x => x
  .s("sawtooth")
  .gain(0.28)
  .attack(0.03)
  .decay(0.22)
  .sustain(0.5)
  .lpf(sine.range(700,3000).slow(20))
  .phaser(0.25).phaserdepth(0.35)
  .tremolo(0.2).tremolosync(6)
  .detune(sine.range(-8,8).slow(16))
  .fm(0.35)
  .fmenv(0.3)
  .delay(0.18).dt(0.22)
  .dfb(0.25)
  .room(0.3)
  .orbit(1)

let lowerVoice = x => x
  .s("pulse")
  .gain(0.35)
  .attack(0.025)
  .decay(0.2)
  .sustain(0.35)
  .hpf(100)
  .lpf(1600).lpq(4)
  .leslie(0.3)
  .distort(0.12)
  .ring(0.2)
  .slide(0.015)
  .room(perlin.range(0.25,0.4).slow(24))
  .pan(0.25)
  .orbit(1)

setcps(112/60/4)

let phrase1 = "g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 d6 ~ a5 ~ gb5 ~ d5"
let phrase2 = "~ ~ g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 d6 ~ a5 ~ gb5 ~ d5"
let bassPhrase = "~*4 g4*4 eb4*4 ~*4 d4*4 bb3*4 ~*4 c4*4 ~*4 d4*4 g3*8"

// Upper voice (canon lead)
$: note(phrase1)
  .sometimes(rev)
  .pan(cosine.range(0.35,0.65).slow(16))
  .slow(264/8/4)
  .apply(upperVoice)

// Canon voice 2
$: note(phrase2)
  .sometimes(rev)
  .pan(cosine.range(0.15,0.45).slow(18))
  .slow(264/8/4)
  .apply(upperVoice)
  .gain(0.24)
  .detune(sine.range(-12,-2).slow(24))

// Bass
$: note(bassPhrase)
  .slow(264/8/4)
  .every(24, rev)
  .apply(lowerVoice)

// Drums
$: stack(
  s("bd").euclid(5,16).gain(0.22),
  s("sn ~ cp").euclid(3,16).gain(0.16).room(0.22).hpf(280).crush(12),
  s("hh*3, oh*5 ~ hh*3, ht*3").gain(0.1).hpf(6500).lpf(9500).degradeBy(0.15)
).pan(sine.range(0.4,0.6).slow(12))
  .room(0.25)
  .swing(0.05)
  .compressor()
  .orbit(2)