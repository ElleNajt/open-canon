// Evolved BWV 1087 Canon 9

// Baroque style voices
let upperVoice = x => x
  .sound("triangle")
  .gain(0.3)
  .attack(0.025)
  .decay(0.18)
  .sustain(0.42)
  .lpf(sine.range(900, 3200).slow(10))
  .leslie(0.35).lrate(0.22)
  .detune(perlin.range(-14, 14).slow(18))
  .phaser(0.22)
  .fm(0.32)
  .fmenv(0.28)
  .delay(0.16)
  .dfb(0.22)
  .room(perlin.range(0.28, 0.4).slow(18))
  .orbit(1)

let lowerVoice = x => x
  .sound("square")
  .gain(0.38)
  .attack(0.012)
  .decay(0.14)
  .sustain(0.32)
  .hpf(120)
  .lpf(1100).lpq(2.5)
  .tremolo(0.22).slow(4.5).tremolodepth(0.28)
  .distort(0.07)
  .ring(0.12)
  .slide(0.012)
  .room(perlin.range(0.3, 0.45).slow(18))
  .pan(cosine.range(0.62, 0.78).slow(9))
  .orbit(1)

setcps(112/60/4)

let phrase1 = "g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6"
let phrase2 = "~ ~ g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6"
let bassPhrase = "~!8 g4*2 ~!6 gb4*2 ~!6 e4*2 ~!6 d4*2 ~!6 b3*2 ~!6 c4*2 ~!6 d4*2 ~!6 g3*4"

// Upper voices
$: stack(
  note(phrase1).every(16, rev).pan(tri.range(0.18, 0.38).slow(7)),
  note(phrase2).pan(cosine.range(0.58, 0.82).slow(9))
)
.slow(264/8/4)
.apply(upperVoice)

// Lower voice
$: note(bassPhrase)
  .slow(264/8/4)
  .every(32, rev)
  .apply(lowerVoice)

// Drums
$: stack(
  s("bd").euclid(5,16).gain(0.34),
  s("sn ~ cp").euclid(3,16).gain(0.2).room(0.28).hpf(200),
  s("hh*8,hh*4 ~ hh*4,hh*12 ~*4,hh*16").gain(0.12).hpf(4800).lpf(9800).degradeBy(0.11)
).pan(sine.range(0.45,0.55).slow(6))
  .room(0.24)
  .swing(0.038)
  .compressor()
  .orbit(2)