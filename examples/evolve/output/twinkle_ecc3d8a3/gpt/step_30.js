// Twinkle Twinkle Little Star — nocturne glimmers, mystery deepens, ever softer shimmer, stars inhale

setcps(77/60/4)

// Melody: sine, triangle, faint supersaw glint; echoes drift further, motif recedes, breaths growing, tone deepens, new whispers
$: stack([
  note("c4 c4 g4 g4 a4 a4 <g4 b4 g5> ~ f4 f4 <e4 ~> d4 d4 <c4 c5> ~ g4 g4 f4 f4 <e4 ~> d4 ~ c4 c4 g4 <g4 g4> a4 a4 <g4 b4 g5> ~ f4 f4 e4 e4 d4 d4 <c4 c5> ~ e4 ~ ab4 ~ g4 ~")
    .sound("sine")
    .gain(0.11)
    .pan(sine.range(0.11,0.81).slow(32.9))
    .room(0.997).size(1.0)
    .lpf(sine.range(98, 1230).slow(26))
    .tremolo(0.19).tremolosync(3.85)
    .delay(0.71)
    .delayfeedback(0.94)
    .detune(sine.range(-44,22).slow(24.3))
    .ring(0.09).ringf(36)
    .degradeBy(0.14)
    .every(10,x=>x.rev())
    .sometimesBy(0.4, x=>x.hpf(1200))
    .every(5, x=>x.palindrome())
    .sometimesBy(0.18, x=>x.lpf(220))
    .release(2.8)
    .slow(1),

  // Triangle overlay, increased fragility, fragments further, new vapor
  note("c5 ~ [g5 ~] ab5 <g5 ~ b5> ~ [f5 ~] <e5 d5> <c6 ~> ~ <e5 g5 ab5> ~ <bb5 ~ c6> ~ ~")
    .sound("triangle")
    .gain(0.036)
    .pan(sine.range(0.22,0.69).slow(41.9))
    .room(0.93).size(0.99)
    .lpf(470)
    .delay(0.41)
    .delayfeedback(0.34)
    .degradeBy(0.33)
    .sometimes(x=>x.rev())
    .sometimesBy(0.48, x=>x.hpf(900))
    .every(6, x=>x.gain(0.13).lpf(119))
    .release(1.78)
    .slow(1.32),

  // Supersaw shimmer, faint, spectral, further glassy, rare, reflecting
  note("g6 ~ <d5 ~> [f5 b4] ~ <a5 g5> [~ e5] <ab5 f5> ~ [e6 ~ b5] <d6 b5>").sound("supersaw")
    .gain(0.005)
    .pan(sine.range(0.06,0.94).slow(34.7))
    .lpf(1450)
    .delay(0.22)
    .delayfeedback(0.28)
    .room(0.91).size(1.0)
    .degradeBy(0.38)
    .sometimesBy(0.43, x=>x.octave("<4 5 6 7 6>".slow(30.4)))
    .attack(0.18)
    .release(0.7)
    .every(8, x=>x.cutoff(4100))
    .every(13, x=>x.crush(7))
    .slow(2.19),
  
  // Gentle triangle shadow glints, sporadic and faint
  note("eb5 ~ ~ ~ <bb5 ~> [g5 ~] <f5 ~> ~ ~ [ab5 ~]").sound("triangle")
    .gain(0.012)
    .room(0.73).size(0.96)
    .pan(sine.range(0.07,0.94).slow(32.2))
    .lpf(510)
    .delay(0.11)
    .delayfeedback(0.13)
    .degradeBy(0.29)
    .slow(4.11)
])
.slow(1.21)


// Slow sine echoes, motif ghost, shimmer rising ever gentler, floating away, almost none
$: note("e5 ~ ~ d5 ~ [g5 ~] ~ ~ [g5 ~ d6] ~ c6 ~ g5 ~ [bb5 ~ eb5] ~ ab5 ~ ~ f5 ~")
    .sound("sine")
    .gain(0.013)
    .pan(sine.range(0.08,0.98).slow(41.3))
    .delay(1.02)
    .delayfeedback(0.972)
    .room(1.0).size(1.00)
    .lpf(429)
    .release(3.09)
    .degradeBy(0.18)
    .every(7, x=>x.rev())
    .every(10, x=>x.gain(0.043).room(0.93))
    .slow(34.8)


// Piano harmony: mist and shadow, more veiled, rare, longer held, pan opens gently right
$: stack([
  note("<c3 g3 e4> ~ ~ <ab3 eb4 bg3> ~ <f3 d4 a3> ~ ~ <eb3 bb3 g3> <c4 a4 f4> ~ <g4 e4 b4> <a3 f4 c4> ~ ~ <e3 eb4> ~")
    .sound("piano")
    .gain(0.019)
    .hold(13.1)
    .sustain(0.033)
    .room(1).size(1)
    .lpf(sine.range(90, 144).slow(32.2))
    .detune(sine.range(-33,17).slow(22.2))
    .slow(22.3)
    .every(10, x=>x.hold(17.1).drive(0.22))
    .sometimesBy(0.44, x=>x.palindrome())
    .every(10, x=>x.lpf(60))
    .pan(sine.range(0.29, 0.53).slow(61)),

  note("<c4 e4 g4> ~ ~ <g4 bb4 d5> <e4 g4 c5> ~ <bb3 eb4 g4> ~ <c5 d5 g4> ~ ~ e5 ~")
    .sound("piano")
    .gain(0.008)
    .hold(10.2)
    .sustain(0.036)
    .room(0.98).size(0.99)
    .detune(-33)
    .every(11, x=>x.rev())
    .slow(43.9)
    .sometimesBy(0.29, x=>x.pan(0.72))
])

// Bass: a veil, vowels low, moves slower, more fleeting subharmonic, ever more withdrawn
$: note("c2 ~ ~ ~ ~ g2 ~ ab1 ~ ~ ~ ~ ~ f2 ~ g1 ~ [e1 ~] ~ ~ ~ ~ ~ ~ ~")
  .sound("sine")
  .gain(0.009)
  .attack(0.022).decay(0.74).release(12.1)
  .vowel("<u o a i e>".slow(89))
  .room(0.88).size(0.97)
  .lpf(sine.range(7, 16).slow(70))
  .slide(22.6)
  .delay(0.18)
  .delayfeedback(0.15)
  .sometimesBy(0.29, x=>x.drive(0.51))
  .sometimesBy(0.11, x=>x.transpose("<-12 0 0 7 -5>".slow(61)))
  .rarely(x=>x.octave(2))
  .every(31, x=>x.distort(0.33))
  .degradeBy(0.34)
  .slow(37.9)


// Percussion: flakes rarely, wind, silvery and soft, distant, micro textures, almost lost
$: stack([
  s("bd ~ ~ ~ ~ ~").gain(0.0018).room(0.11).degradeBy(0.99975)
    .every(55, x=>x.delay(0.41).delayfeedback(0.21))
    .sometimesBy(0.15, x=>x.crush(11)),
  s("~ [cp ~] ~ ~ [~ sn] ~").gain(0.0006).room(0.13)
    .degradeBy(0.99982)
    .every(23,x=>x.rev())
    .every(31, x=>x.delay(0.19).delayfeedback(0.21)),
  s("[hh ~ [oh ~] ~] [~ ~] [~ <oh ~>] ~ [~] ~").gain(0.0007).room(0.22).crush(23)
    .pan(sine.range(0.18,0.89).slow(41.3))
    .degradeBy(0.995)
    .every(19,x=>x.rev())
    .sometimesBy(0.37, x=>x.delay(0.44)),
  s("~ ~ <cp ~> ~ [rim ~] ~ ~").gain(0.0005).room(0.19)
    .degradeBy(0.9998)
    .every(43, x=>x.echo(2, 0.27, 0.19))
    .sometimesBy(0.23,x=>x.crush(13))
])
.slow(23.7)