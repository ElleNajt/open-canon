// Evolved BWV 1087 Canon 11

// Baroque style voices
let upperVoice = x => x
  .s("supersaw")
  .gain(0.25)
  .attack(0.025)
  .decay(0.18)
  .sustain(0.45)
  .lpf(sine.range(600,2800).slow(16))
  .phaser(0.3).phaserdepth(0.4)
  .tremolo(0.25).tremolosync(4)
  .detune(sine.range(-10,10).slow(20))
  .fm(0.4)
  .fmenv(0.35)
  .delay(0.2).dt(0.25)
  .dfb(0.3)
  .room(0.35)
  .orbit(1)

let lowerVoice = x => x
  .s("triangle")
  .gain(0.32)
  .attack(0.02)
  .decay(0.18)
  .sustain(0.3)
  .hpf(120)
  .lpf(1400).lpq(3)
  .phaser(0.25).phaserdepth(0.3)
  .leslie(0.35)
  .distort(0.1)
  .ring(0.18)
  .slide(0.02)
  .room(perlin.range(0.3,0.45).slow(20))
  .pan(0.3)
  .orbit(1)

setcps(118/60/4)

let phrase1 = "g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 d6 ~ a5 ~ gb5 ~ d5"
let phrase2 = "~ ~ g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 d6 ~ a5 ~ gb5 ~ d5"
let bassPhrase = "~*4 g4*4 eb4*4 ~*4 d4*4 bb3*4 ~*4 c4*4 ~*4 d4*4 g3*8"

// Upper voice (canon lead)
$: note(phrase1)
  .every(16, rev)
  .pan(cosine.range(0.3,0.7).slow(12))
  .slow(264/8/4)
  .apply(upperVoice)

// Canon voice 2
$: note(phrase2)
  .every(16, rev)
  .pan(cosine.range(0.2,0.5).slow(14))
  .slow(264/8/4)
  .apply(upperVoice)
  .gain(0.22)
  .detune(sine.range(-15,0).slow(20))

// Bass
$: note(bassPhrase)
  .slow(264/8/4)
  .every(20, rev)
  .apply(lowerVoice)

// Drums
$: stack(
  s("bd").euclid(3,16).gain(0.25),
  s("sn ~ rim").euclid(4,16).gain(0.18).room(0.25).hpf(250).crush(14),
  s("hh*4, hh*4 ~ hh*4, lt*4").gain(0.09).hpf(6000).lpf(10000).degradeBy(0.2)
).pan(sine.range(0.45,0.55).slow(8))
  .room(0.28)
  .swing(0.06)
  .compressor()
  .orbit(2)