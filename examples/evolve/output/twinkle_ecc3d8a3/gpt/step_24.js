// Twinkle Twinkle Little Star — nocturne glimmers, mystery deepens, ever softer shimmer, stars inhale

setcps(76/60/4)

// Melody: sine, triangle, and a faint supersaw glint; echoes drift, motif a dream remnant, deepening tone, breaths longer
$: stack([
  note("c4 c4 g4 g4 a4 a4 <g4 b4 g5> ~ f4 f4 <e4 ~> d4 d4 <c4 c5> ~ g4 g4 f4 f4 <e4 ~> d4 ~ c4 c4 g4 <g4 g4> a4 a4 <g4 b4 g5> ~ f4 f4 e4 e4 d4 d4 <c4 c5> ~ e4 ~ ab4 ~ g4 ~")
    .sound("sine")
    .gain(0.13)
    .pan(sine.range(0.21,0.78).slow(23.5))
    .room(0.98).size(1.0)
    .lpf(sine.range(120, 1600).slow(39))
    .tremolo(0.17).tremolosync(6.1)
    .delay(0.57)
    .delayfeedback(0.90)
    .detune(sine.range(-8,11).slow(25.2))
    .ring(0.12).ringf(91)
    .degradeBy(0.29)
    .every(8,x=>x.rev())
    .sometimesBy(0.23, x=>x.hpf(1100))
    .every(5, x=>x.palindrome())
    .release(1.25)
    .slow(1.07),

  // Triangle overlay, breathier, fragments ripple and dissolve
  note("c5 ~ [g5 ~] ab5 <g5 ~ b5> ~ [f5 ~] <e5 d5> <c6 ~> ~ <e5 g5 ab5> ~ <bb5 ~ c6> ~ ~")
    .sound("triangle")
    .gain(0.045)
    .pan(sine.range(0.11,0.97).slow(24.3))
    .room(0.85).size(0.97)
    .lpf(710)
    .delay(0.37)
    .delayfeedback(0.33)
    .degradeBy(0.32)
    .sometimes(x=>x.rev())
    .sometimesBy(0.18, x=>x.hpf(1500))
    .every(7, x=>x.gain(0.082).lpf(250))
    .release(0.65),

  // Supersaw shimmer, a little brighter, rare spectral leaps
  note("g6 ~ <d5 ~> [f5 b4] ~ <a5 g5> [~ e5] <ab5 f5> ~ [e6 ~] <d5 b5>").sound("supersaw")
    .gain(0.018)
    .pan(sine.range(0.27,0.69).slow(26))
    .lpf(2460)
    .delay(0.13)
    .delayfeedback(0.11)
    .room(0.61).size(0.92)
    .degradeBy(0.35)
    .sometimesBy(0.27, x=>x.octave("<4 5 6>".slow(8.3)))
    .attack(0.22)
    .release(0.36)
])
.slow(1.39)

// Slow sine echoes, motif ghost, shimmer rising gently, now even farther between, fading
$: note("e5 ~ [d5 ~ g5] ~ [g5 ~ d6] ~ c6 ~ g5 ~ [bb5 ~ eb5] ~ ab5 ~ f5 ~")
    .sound("sine")
    .gain(0.031)
    .pan(sine.range(0.19,0.87).slow(51))
    .delay(0.97)
    .delayfeedback(0.98)
    .room(1.00).size(1.00)
    .lpf(890)
    .release(1.19)
    .degradeBy(0.33)
    .every(3, x=>x.rev())
    .slow(25)

// Piano harmony: hazier, rare events, lower still, slow motion
$: stack([
  note("<c3 g3 e4> ~ ~ <ab3 eb4 bg3> <f3 d4 a3> ~ ~ <eb3 bb3 g3> <c4 a4 f4> ~ <g4 e4 b4> <a3 f4 c4> ~ ~ <e3 eb4> ~")
    .sound("piano")
    .gain(0.029)
    .hold(7.6)
    .sustain(0.06)
    .room(1).size(1)
    .lpf(sine.range(160, 400).slow(39))
    .detune(sine.range(-19,21).slow(20))
    .slow(21.2)
    .every(4, x=>x.hold(6.3).drive(0.21))
    .sometimesBy(0.11, x=>x.palindrome())
    .sometimesBy(0.11, x=>x.lpf(235)),

  note("<c4 e4 g4> ~ ~ <g4 bb4 d5> <e4 g4 c5> ~ ~ <bb3 eb4 g4> ~ <c5 d5 g4> ~ ~ e5 ~")
    .sound("piano")
    .gain(0.012)
    .hold(4.91)
    .sustain(0.05)
    .room(0.98).size(0.99)
    .detune(-17)
    .every(2, x=>x.rev())
    .slow(29.1)
    .sometimesBy(0.19, x=>x.pan(0.91))
])

// Bass: vowels wide as night, almost underwater, fewer notes, ghost resonance
$: note("c2 ~ ~ g2 ~ ab1 ~ ~ ab1 ~ ~ ~ f2 ~ g1 ~ [e1 ~] ~ ~ ~ ~")
  .sound("sine")
  .gain(0.011)
  .attack(0.021).decay(0.21).release(3.62)
  .vowel("<o a u i e>".slow(58))
  .room(0.69).size(1)
  .lpf(sine.range(11, 33).slow(38))
  .slide(6.67)
  .delay(0.12)
  .delayfeedback(0.13)
  .sometimesBy(0.17, x=>x.drive(0.54))
  .sometimesBy(0.09, x=>x.transpose("<-12 0 7 0>".slow(22)))
  .rarely(x=>x.octave(2))
  .every(16, x=>x.distort(0.49))
  .slow(14.7)

// Percussion: more erosion, almost wind-like textures, panned wide, ungraspable
$: stack([
  s("bd ~ ~ ~").gain(0.003).room(0.08).degradeBy(0.991)
    .every(19, x=>x.delay(0.71).delayfeedback(0.09)),
  s("~ [cp ~] ~ ~ [~ sn] ~").gain(0.0017).room(0.14)
    .degradeBy(0.997)
    .every(7,x=>x.rev())
    .every(17, x=>x.delay(0.27).delayfeedback(0.12)),
  s("[hh ~ [oh ~] ~] [~ ~] [~ <oh ~>] ~").gain(0.0025).room(0.22).crush(24)
    .pan(sine.range(0.09,0.97).slow(33))
    .degradeBy(0.97)
    .every(11,x=>x.rev())
    .sometimesBy(0.16, x=>x.delay(0.19)),
  s("~ ~ cp ~ <rim ~> ~ ~ [cp ~] ~ [~ rim]").gain(0.0012).room(0.12)
    .degradeBy(0.9985)
    .every(13, x=>x.echo(3, 0.29, 0.16))
    .sometimesBy(0.66,x=>x.crush(8))
])
.slow(14.6)