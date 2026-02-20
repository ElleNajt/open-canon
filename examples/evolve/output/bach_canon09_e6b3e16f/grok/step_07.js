// Evolved BWV 1087 Canon 10

// Baroque style voices
let upperVoice = x => x
  .s("sawtooth")
  .gain(0.32)
  .attack(0.03)
  .decay(0.2)
  .sustain(0.4)
  .lpf(tri.range(800,3000).slow(12))
  .leslie(0.4).lrate(0.25)
  .detune(sine.range(-12,12).slow(16))
  .phaser(0.25)
  .fm(0.35)
  .fmenv(0.3)
  .delay(0.18).dt(0.125)
  .dfb(0.25)
  .room(perlin.range(0.3,0.42).slow(16))
  .orbit(1)

let lowerVoice = x => x
  .s("pulse")
  .gain(0.4)
  .attack(0.015)
  .decay(0.16)
  .sustain(0.35)
  .hpf(110)
  .lpf(1200).lpq(3)
  .tremolo(0.25).tremolosync(5).tremolodepth(0.3)
  .distort(0.08)
  .ring(0.14)
  .slide(0.015)
  .room(perlin.range(0.32,0.46).slow(16))
  .pan(saw.range(0.2,0.8).slow(8))
  .orbit(1)

setcps(116/60/4)

let phrase1 = "g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 d6 ~ a5 ~ gb5 ~ d5"
let phrase2 = "~ ~ g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 d6 ~ a5 ~ gb5 ~ d5"
let bassPhrase = "~*8 g4*2 eb4*2 ~*6 d4*2 bb3*2 ~*6 c4*2 ~*6 d4*2 g3*4"

// Upper voice - simplified to single evolving line
$: note(phrase1)
  .every(20, rev)
  .off(0.5, x => note(phrase2).rev())
  .pan(sine.range(0.2,0.4).slow(8))
.slow(264/8/4)
.apply(upperVoice)

// Lower voice
$: note(bassPhrase)
  .slow(264/8/4)
  .every(24, rev)
  .apply(lowerVoice)

// Drums - refined
$: stack(
  s("bd").euclid(4,16).gain(0.32),
  s("sn ~ rim").euclid(3,16).gain(0.22).room(0.3).hpf(220),
  s("hh*8,lt*4 ~ hh*8").gain(0.11).hpf(5200).lpf(9600).degradeBy(0.14)
).pan(cosine.range(0.46,0.54).slow(7))
  .room(0.26)
  .swing(0.04)
  .compressor()
  .orbit(2)