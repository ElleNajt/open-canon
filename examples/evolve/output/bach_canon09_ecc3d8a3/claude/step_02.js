// BWV 1087 Canon 9 — further evolved: richer FM color, phaser motion, dynamic panning

let upperVoice = x => x
  .sound("triangle")
  .gain(0.4)
  .attack(0.015)
  .decay(0.2)
  .sustain(0.22)
  .release(0.14)
  .lpf(3000)
  .lpq(1.8)
  .room(0.28)
  .size(0.65)
  .phaser(0.3)
  .phaserdepth(0.4)

let midVoice = x => x
  .sound("sine")
  .fm(1.5)
  .fmh(2)
  .fmdecay(0.12)
  .gain(0.36)
  .attack(0.04)
  .decay(0.22)
  .sustain(0.28)
  .release(0.18)
  .lpf(2000)
  .room(0.32)
  .size(0.58)

let lowerVoice = x => x
  .sound("square")
  .gain(0.33)
  .attack(0.03)
  .decay(0.22)
  .sustain(0.2)
  .release(0.12)
  .lpf(1100)
  .lpq(2.5)
  .room(0.22)
  .size(0.52)
  .delay(0.12)
  .delaytime(0.375)
  .delayfeedback(0.25)

let bassVoice = x => x
  .sound("sawtooth")
  .gain(0.26)
  .attack(0.06)
  .decay(0.3)
  .sustain(0.28)
  .release(0.25)
  .lpf(420)
  .lpq(3.5)
  .room(0.18)
  .size(0.45)
  .distort(0.08)

setcps(108/60/4)

// Track 1 — leading voice, triangle+phaser, panned left, slow lpf breath
$: note("g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~!7")
  .slow(264/8/4)
  .apply(upperVoice)
  .pan(sine.range(0.18, 0.38).slow(40))
  .lpf(sine.range(2000, 3400).slow(28))

// Track 2 — canon follower, FM sine, center, tremolo shimmer
$: note("~!2 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~!5")
  .slow(264/8/4)
  .apply(midVoice)
  .pan(0.5)
  .tremolo(0.18)
  .tremolosync(3)

// Track 3 — inner voice, square+delay, right of center, slow lpf sweep
$: note("~!8 g4 ~!7 gb4 ~!7 e4 ~!7 d4 ~!7 b3 ~!7 c4 ~!7 d4 ~!7 g3 ~!7 g4 ~!7 gb4 ~!7 e4 ~!7 d4 ~!7 b3 ~!7 c4 ~!7 d4 ~!7 g3 ~!7 g4 ~!7 gb4 ~!7 e4 ~!7 d4 ~!7 b3 ~!7 c4 ~!7 d4 ~!7 g3 ~!7 g4 ~!7 gb4 ~!7 e4 ~!7 d4 ~!7 b3 ~!7 c4 ~!7 d4 ~!7 g3 ~!7")
  .slow(264/8/4)
  .apply(lowerVoice)
  .pan(sine.range(0.58, 0.72).slow(56))
  .lpf(sine.range(700, 1600).slow(44))

// Track 4 — slow harmonic bass pedals, distorted sawtooth, far right, gain breathes
$: note("~!8 g2 ~!15 d2 ~!15 g2 ~!15 c2 ~!15 g2 ~!15 d2 ~!15 g2 ~!15 c2 ~!15 g2 ~!15 d2 ~!15 g2 ~!15 c2 ~!15 g2 ~!15 d2 ~!15 g2 ~!7")
  .slow(264/8/4)
  .apply(bassVoice)
  .pan(0.78)
  .gain(perlin.range(0.2, 0.34).slow(72))