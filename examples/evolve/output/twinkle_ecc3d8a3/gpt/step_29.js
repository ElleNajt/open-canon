// Twinkle Twinkle Little Star — nocturne glimmers, mystery deepens, ever softer shimmer, stars inhale

setcps(79/60/4)

// Melody: sine, triangle, faint supersaw glint; echoes drift further, motif recedes, breaths growing, tone deepens, new whispers
$: stack([
  note("c4 c4 g4 g4 a4 a4 <g4 b4 g5> ~ f4 f4 <e4 ~> d4 d4 <c4 c5> ~ g4 g4 f4 f4 <e4 ~> d4 ~ c4 c4 g4 <g4 g4> a4 a4 <g4 b4 g5> ~ f4 f4 e4 e4 d4 d4 <c4 c5> ~ e4 ~ ab4 ~ g4 ~")
    .sound("sine")
    .gain(0.13)
    .pan(sine.range(0.18,0.78).slow(27.6))
    .room(0.995).size(1.0)
    .lpf(sine.range(57, 1020).slow(24))
    .tremolo(0.14).tremolosync(4.41)
    .delay(0.63)
    .delayfeedback(0.91)
    .detune(sine.range(-29,18).slow(17.6))
    .ring(0.13).ringf(45)
    .degradeBy(0.18)
    .every(8,x=>x.rev())
    .sometimesBy(0.37, x=>x.hpf(1950))
    .every(6, x=>x.palindrome())
    .sometimesBy(0.21, x=>x.lpf(165))
    .release(2.11)
    .slow(0.81),

  // Triangle overlay, increased fragility, fragments further, new vapor
  note("c5 ~ [g5 ~] ab5 <g5 ~ b5> ~ [f5 ~] <e5 d5> <c6 ~> ~ <e5 g5 ab5> ~ <bb5 ~ c6> ~ ~")
    .sound("triangle")
    .gain(0.039)
    .pan(sine.range(0.27,0.89).slow(36.6))
    .room(0.89).size(0.97)
    .lpf(430)
    .delay(0.35)
    .delayfeedback(0.28)
    .degradeBy(0.29)
    .sometimes(x=>x.rev())
    .sometimesBy(0.41, x=>x.hpf(1200))
    .every(7, x=>x.gain(0.09).lpf(112))
    .release(1.39)
    .slow(1.16),

  // Supersaw shimmer, faint, spectral, further glassy, rare, reflecting
  note("g6 ~ <d5 ~> [f5 b4] ~ <a5 g5> [~ e5] <ab5 f5> ~ [e6 ~ b5] <d6 b5>").sound("supersaw")
    .gain(0.010)
    .pan(sine.range(0.13,0.97).slow(31.2))
    .lpf(1720)
    .delay(0.16)
    .delayfeedback(0.22)
    .room(0.8).size(0.97)
    .degradeBy(0.34)
    .sometimesBy(0.38, x=>x.octave("<4 5 6 6 5>".slow(14.8)))
    .attack(0.29)
    .release(0.63)
    .every(5, x=>x.cutoff(3500))
    .every(15, x=>x.crush(9))
    .slow(1.67),
  
  // Gentle triangle shadow glints, sporadic and faint
  note("eb5 ~ ~ ~ <bb5 ~> [g5 ~] <f5 ~> ~ ~ [ab5 ~]").sound("triangle")
    .gain(0.017)
    .room(0.82).size(0.97)
    .pan(sine.range(0.19,0.86).slow(25.9))
    .lpf(740)
    .delay(0.16)
    .delayfeedback(0.18)
    .degradeBy(0.41)
    .slow(3.03)
])
.slow(1.33)


// Slow sine echoes, motif ghost, shimmer rising ever gentler, floating away, almost none
$: note("e5 ~ ~ d5 ~ [g5 ~] ~ ~ [g5 ~ d6] ~ c6 ~ g5 ~ [bb5 ~ eb5] ~ ab5 ~ ~ f5 ~")
    .sound("sine")
    .gain(0.019)
    .pan(sine.range(0.11,0.93).slow(35.8))
    .delay(0.93)
    .delayfeedback(0.984)
    .room(1.0).size(1.00)
    .lpf(610)
    .release(2.67)
    .degradeBy(0.22)
    .every(6, x=>x.rev())
    .every(8, x=>x.gain(0.031).room(0.92))
    .slow(29.5)


// Piano harmony: mist and shadow, more veiled, rare, longer held, pan opens gently right
$: stack([
  note("<c3 g3 e4> ~ ~ <ab3 eb4 bg3> ~ <f3 d4 a3> ~ ~ <eb3 bb3 g3> <c4 a4 f4> ~ <g4 e4 b4> <a3 f4 c4> ~ ~ <e3 eb4> ~")
    .sound("piano")
    .gain(0.017)
    .hold(11.7)
    .sustain(0.028)
    .room(1).size(1)
    .lpf(sine.range(67, 180).slow(24.7))
    .detune(sine.range(-30,11).slow(17.7))
    .slow(19.6)
    .every(8, x=>x.hold(15.6).drive(0.17))
    .sometimesBy(0.36, x=>x.palindrome())
    .every(13, x=>x.lpf(81))
    .pan(sine.range(0.21, 0.44).slow(49)),

  note("<c4 e4 g4> ~ ~ <g4 bb4 d5> <e4 g4 c5> ~ <bb3 eb4 g4> ~ <c5 d5 g4> ~ ~ e5 ~")
    .sound("piano")
    .gain(0.009)
    .hold(8.4)
    .sustain(0.029)
    .room(0.98).size(0.99)
    .detune(-31)
    .every(7, x=>x.rev())
    .slow(37.3)
    .sometimesBy(0.34, x=>x.pan(0.76))
])

// Bass: a veil, vowels low, moves slower, more fleeting subharmonic, ever more withdrawn
$: note("c2 ~ ~ ~ ~ g2 ~ ab1 ~ ~ ~ ~ ~ f2 ~ g1 ~ [e1 ~] ~ ~ ~ ~ ~ ~ ~")
  .sound("sine")
  .gain(0.013)
  .attack(0.039).decay(0.51).release(10.2)
  .vowel("<o a u i e>".slow(112))
  .room(0.81).size(0.91)
  .lpf(sine.range(9, 19).slow(51))
  .slide(18.9)
  .delay(0.11)
  .delayfeedback(0.18)
  .sometimesBy(0.23, x=>x.drive(0.64))
  .sometimesBy(0.13, x=>x.transpose("<-12 0 0 7 -5>".slow(60)))
  .rarely(x=>x.octave(2))
  .every(27, x=>x.distort(0.29))
  .degradeBy(0.27)
  .slow(31.5)


// Percussion: flakes rarely, wind, silvery and soft, distant, micro textures, almost lost
$: stack([
  s("bd ~ ~ ~ ~ ~").gain(0.0023).room(0.07).degradeBy(0.9997)
    .every(39, x=>x.delay(0.33).delayfeedback(0.16))
    .sometimesBy(0.19, x=>x.crush(13)),
  s("~ [cp ~] ~ ~ [~ sn] ~").gain(0.001).room(0.11)
    .degradeBy(0.99978)
    .every(13,x=>x.rev())
    .every(23, x=>x.delay(0.12).delayfeedback(0.13)),
  s("[hh ~ [oh ~] ~] [~ ~] [~ <oh ~>] ~ [~] ~").gain(0.0014).room(0.18).crush(19)
    .pan(sine.range(0.23,0.86).slow(31.7))
    .degradeBy(0.995)
    .every(13,x=>x.rev())
    .sometimesBy(0.15, x=>x.delay(0.27)),
  s("~ ~ <cp ~> ~ [rim ~] ~ ~").gain(0.0009).room(0.13)
    .degradeBy(0.9997)
    .every(31, x=>x.echo(2, 0.21, 0.13))
    .sometimesBy(0.31,x=>x.crush(17))
])
.slow(19.8)