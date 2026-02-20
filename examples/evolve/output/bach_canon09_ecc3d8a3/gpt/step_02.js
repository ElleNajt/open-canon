// BWV 1087 Canon 9

// Baroque style voices
let upperVoice = x => x
  .sound("triangle")
  .gain(0.45)
  .attack(0.02)
  .decay(0.15)
  .sustain(0.2)
  .lpf(2500)
  .room(0.18)
  .delay(0.13)
  .delaytime(0.25)
  .delayfeedback(0.18)

let lowerVoice = x => x
  .sound("square")
  .gain(0.51)
  .attack(0.025)
  .decay(0.14)
  .sustain(0.18)
  .lpf(1700)
  .room(0.15)
  .delay(0.09)
  .delaytime(0.21)
  .delayfeedback(0.13)

let bassVoice = x => x
  .sound("sine")
  .gain(0.37)
  .attack(0.01)
  .decay(0.33)
  .sustain(0.15)
  .lpf(950)
  .room(0.25)
  .octave(-1)

setcps(124/60/4)

// Track 1
$: note("g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~!7")
  .slow(264/8/4)
  .apply(upperVoice)
  .pan(0.18)
  .every(8, x => x.rev())
  .every(12, x => x.hpf(600).room(0.29))

// Track 2
$: note("~!2 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~!5")
  .slow(264/8/4)
  .apply(upperVoice)
  .pan(0.38)
  .every(16, x => x.lpf(1600).room(0.27))
  .every(8, x => x.palindrome())

// Track 3 (Lower Counterpoint)
$: note("~!8 g4 ~!7 gb4 ~!7 e4 ~!7 d4 ~!7 b3 ~!7 c4 ~!7 d4 ~!7 g3 ~!7 g4 ~!7 gb4 ~!7 e4 ~!7 d4 ~!7 b3 ~!7 c4 ~!7 d4 ~!7 g3 ~!7 g4 ~!7 gb4 ~!7 e4 ~!7 d4 ~!7 b3 ~!7 c4 ~!7 d4 ~!7 g3 ~!7 g4 ~!7 gb4 ~!7 e4 ~!7 d4 ~!7 b3 ~!7 c4 ~!7 d4 ~!7 g3 ~!7")
  .slow(264/8/4)
  .apply(lowerVoice)
  .pan(0.66)
  .every(24, x => x.distort(0.12).room(0.13))
  .sometimes(x => x.rev())

// Track 4 (Subtle Sine Bass, now with gentle room evolution)
$: note("g2 ~ gb2 ~ e2 ~ d2 ~ b1 ~ c2 ~ d2 ~ g1 ~ g2 ~ gb2 ~ e2 ~ d2 ~ b1 ~ c2 ~ d2 ~ g1")
  .slow(264/8/4)
  .apply(bassVoice)
  .pan(0.72)
  .every(32, x => x.gain(0.39).lpf(720).room(0.36))
  .sometimes(x => x.lpf(750).room(0.19))

// Track 5 (gentle brush hats, modern touch)
$: s("hh(3,8) ~ hh ~!2 hh ~ cp(2,8) ~ hh ~!3")
  .gain(0.15)
  .pan(0.54)
  .delay(0.06)
  .delaytime(0.19)
  .delayfeedback(0.07)
  .room(0.18)
  .slow(2)
  .every(8, x => x.degradeBy(0.33))
  .sometimes(x => x.lpf(8000))