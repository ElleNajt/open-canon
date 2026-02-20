// BWV 1087 Canon 9 — evolved with richer texture and subtle motion

let upperVoice = x => x
  .sound("triangle")
  .gain(0.42)
  .attack(0.02)
  .decay(0.18)
  .sustain(0.25)
  .release(0.12)
  .lpf(2800)
  .lpq(1.5)
  .room(0.25)
  .size(0.6)

let midVoice = x => x
  .sound("sine")
  .gain(0.38)
  .attack(0.04)
  .decay(0.2)
  .sustain(0.3)
  .release(0.15)
  .lpf(1800)
  .room(0.3)
  .size(0.55)

let lowerVoice = x => x
  .sound("square")
  .gain(0.36)
  .attack(0.03)
  .decay(0.2)
  .sustain(0.22)
  .release(0.1)
  .lpf(900)
  .lpq(2)
  .room(0.2)
  .size(0.5)

let bassVoice = x => x
  .sound("sawtooth")
  .gain(0.28)
  .attack(0.05)
  .decay(0.25)
  .sustain(0.3)
  .release(0.2)
  .lpf(500)
  .lpq(3)
  .room(0.15)

setcps(112/60/4)

// Track 1 — leading voice, triangle, slight left
$: note("g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~!7")
  .slow(264/8/4)
  .apply(upperVoice)
  .pan(0.25)
  .lpf(sine.range(2200, 3200).slow(32))

// Track 2 — canon follower, sine, center-left
$: note("~!2 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~!5")
  .slow(264/8/4)
  .apply(midVoice)
  .pan(0.45)

// Track 3 — inner voice, square, center-right, slow lpf sweep
$: note("~!8 g4 ~!7 gb4 ~!7 e4 ~!7 d4 ~!7 b3 ~!7 c4 ~!7 d4 ~!7 g3 ~!7 g4 ~!7 gb4 ~!7 e4 ~!7 d4 ~!7 b3 ~!7 c4 ~!7 d4 ~!7 g3 ~!7 g4 ~!7 gb4 ~!7 e4 ~!7 d4 ~!7 b3 ~!7 c4 ~!7 d4 ~!7 g3 ~!7 g4 ~!7 gb4 ~!7 e4 ~!7 d4 ~!7 b3 ~!7 c4 ~!7 d4 ~!7 g3 ~!7")
  .slow(264/8/4)
  .apply(lowerVoice)
  .pan(0.65)
  .lpf(sine.range(600, 1400).slow(48))

// Track 4 — slow harmonic bass pedals, sawtooth, far right
$: note("~!8 g2 ~!15 d2 ~!15 g2 ~!15 c2 ~!15 g2 ~!15 d2 ~!15 g2 ~!15 c2 ~!15 g2 ~!15 d2 ~!15 g2 ~!15 c2 ~!15 g2 ~!15 d2 ~!15 g2 ~!7")
  .slow(264/8/4)
  .apply(bassVoice)
  .pan(0.75)
  .gain(tri.range(0.22, 0.32).slow(64))