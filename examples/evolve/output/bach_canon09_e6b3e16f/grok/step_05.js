// BWV 1087 Canon 9

// Baroque style voices
let upperVoice = x => x
  .sound("triangle")
  .gain(0.32)
  .attack(0.03)
  .decay(0.2)
  .sustain(0.45)
  .lpf(sine.range(800, 3400).slow(12))
  .leslie(0.4).lrate(0.25)
  .detune(perlin.range(-12, 12).slow(20))
  .fm(0.35)
  .fmenv(0.25)
  .delay(0.18)
  .dfb(0.25)
  .room(perlin.range(0.25, 0.42).slow(20))
  .pan(tri.range(0.2, 0.4).slow(6))
  .orbit(1)

let lowerVoice = x => x
  .sound("square")
  .gain(0.42)
  .attack(0.015)
  .decay(0.16)
  .sustain(0.3)
  .hpf(110)
  .lpf(1200).lpq(2.3)
  .tremolo(0.25).slow(5).tremolodepth(0.3)
  .distort(0.08)
  .slide(0.015)
  .room(perlin.range(0.28, 0.48).slow(20))
  .pan(cosine.range(0.6, 0.75).slow(10))
  .orbit(1)

setcps(112/60/4)

let phrase1 = "g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6"

// Track 1
$: note(phrase1)
  .slow(264/8/4)
  .every(16, rev)
  .apply(upperVoice)

// Track 2
$: note("~ ~ g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6")
  .slow(264/8/4)
  .apply(upperVoice)

// Track 3
$: note("~!8 g4*2 ~!6 gb4*2 ~!6 e4*2 ~!6 d4*2 ~!6 b3*2 ~!6 c4*2 ~!6 d4*2 ~!6 g3*4")
  .slow(264/8/4)
  .every(32, x => x.add(12).transpose(-12))
  .apply(lowerVoice)

// Drums
$: stack(
  s("bd").euclid(6,16).gain(0.36),
  s("sn").euclid(3,16).gain(0.2).room(0.3).hpf(220),
  s("hh*4,hh*8,hh*8,hh*2").gain(0.14).hpf(5000).lpf(9600).degradeBy(0.1)
).pan(sine.range(0.48,0.52).slow(8))
  .room(0.25)
  .swing(0.035)
  .compressor()
  .orbit(2)