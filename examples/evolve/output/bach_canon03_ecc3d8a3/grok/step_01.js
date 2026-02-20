// Evolved BWV 1087 Canon 3 with supporting bass

let upperVoice = x => x
  .sound("triangle")
  .gain(0.42)
  .attack(0.02)
  .decay(0.18)
  .sustain(0.25)
  .release(0.1)
  .lpf(2600)
  .hpf(120)
  .lpq(2)
  .room(0.18)
  .compressor()

let lowerVoice = x => x
  .sound("square")
  .gain(0.48)
  .attack(0.02)
  .decay(0.18)
  .sustain(0.25)
  .release(0.1)
  .lpf(2200)
  .hpf(100)
  .lpq(1.5)
  .room(0.18)
  .compressor()

let bassVoice = x => x
  .sound("piano")
  .gain(0.6)
  .attack(0.015)
  .decay(0.25)
  .sustain(0.35)
  .release(0.7)
  .lpf(1300)
  .hpf(60)
  .room(0.25)
  .pan(0.5)
  .compressor()

setcps(126/60/4)

$: note("~!40 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!15")
  .slow(208/8/4)
  .apply(upperVoice)
  .pan(0.25)

$: note("~!8 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!15")
  .slow(208/8/4)
  .apply(lowerVoice)
  .pan(0.75)

$: note("g2 d3 bb2 f3 c3").euclid(5,16)
  .slow(1.5)
  .apply(bassVoice)