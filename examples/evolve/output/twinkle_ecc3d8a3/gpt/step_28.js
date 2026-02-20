// Twinkle Twinkle Little Star — nocturne glimmers, mystery deepens, ever softer shimmer, stars inhale

setcps(79/60/4)

// Melody: sine, triangle, faint supersaw glint; echoes drift further, motif recedes, breaths growing, tone deepens, new whispers
$: stack([
  note("c4 c4 g4 g4 a4 a4 <g4 b4 g5> ~ f4 f4 <e4 ~> d4 d4 <c4 c5> ~ g4 g4 f4 f4 <e4 ~> d4 ~ c4 c4 g4 <g4 g4> a4 a4 <g4 b4 g5> ~ f4 f4 e4 e4 d4 d4 <c4 c5> ~ e4 ~ ab4 ~ g4 ~")
    .sound("sine")
    .gain(0.11)
    .pan(sine.range(0.13,0.84).slow(34.7))
    .room(0.995).size(1.0)
    .lpf(sine.range(57, 1420).slow(35))
    .tremolo(0.17).tremolosync(5.41)
    .delay(0.74)
    .delayfeedback(0.93)
    .detune(sine.range(-34,26).slow(23.2))
    .ring(0.17).ringf(52)
    .degradeBy(0.23)
    .every(8,x=>x.rev())
    .sometimesBy(0.37, x=>x.hpf(1950))
    .every(6, x=>x.palindrome())
    .sometimesBy(0.18, x=>x.lpf(180))
    .release(2.61)
    .slow(0.74),

  // Triangle overlay, increased fragility, fragments further, new vapor
  note("c5 ~ [g5 ~] ab5 <g5 ~ b5> ~ [f5 ~] <e5 d5> <c6 ~> ~ <e5 g5 ab5> ~ <bb5 ~ c6> ~ ~")
    .sound("triangle")
    .gain(0.029)
    .pan(sine.range(0.20,0.93).slow(41.1))
    .room(0.9).size(0.98)
    .lpf(570)
    .delay(0.47)
    .delayfeedback(0.33)
    .degradeBy(0.34)
    .sometimes(x=>x.rev())
    .sometimesBy(0.29, x=>x.hpf(1100))
    .every(7, x=>x.gain(0.065).lpf(133))
    .release(1.29)
    .slow(1.34),

  // Supersaw shimmer, faint, spectral, further glassy, rare, reflecting
  note("g6 ~ <d5 ~> [f5 b4] ~ <a5 g5> [~ e5] <ab5 f5> ~ [e6 ~ b5] <d6 b5>").sound("supersaw")
    .gain(0.008)
    .pan(sine.range(0.18,0.96).slow(42.6))
    .lpf(2090)
    .delay(0.23)
    .delayfeedback(0.25)
    .room(0.74).size(0.97)
    .degradeBy(0.38)
    .sometimesBy(0.31, x=>x.octave("<4 6 6 7 5>".slow(22.7)))
    .attack(0.27)
    .release(0.48)
    .every(7, x=>x.cutoff(4700))
    .every(14, x=>x.crush(11))
    .slow(1.55),
  
  // Gentle triangle shadow glints, sporadic and faint
  note("eb5 ~ ~ ~ <bb5 ~> [g5 ~] <f5 ~> ~ ~ [ab5 ~]").sound("triangle")
    .gain(0.011)
    .room(0.74).size(0.96)
    .pan(sine.range(0.24,0.76).slow(30.9))
    .lpf(880)
    .delay(0.18)
    .delayfeedback(0.21)
    .degradeBy(0.56)
    .slow(3.15)
])
.slow(1.20)


// Slow sine echoes, motif ghost, shimmer rising ever gentler, floating away, almost none
$: note("e5 ~ ~ d5 ~ [g5 ~] ~ ~ [g5 ~ d6] ~ c6 ~ g5 ~ [bb5 ~ eb5] ~ ab5 ~ ~ f5 ~")
    .sound("sine")
    .gain(0.013)
    .pan(sine.range(0.07,0.99).slow(53.1))
    .delay(0.99)
    .delayfeedback(0.989)
    .room(1.0).size(1.00)
    .lpf(670)
    .release(1.97)
    .degradeBy(0.39)
    .every(6, x=>x.rev())
    .every(8, x=>x.gain(0.02).room(0.95))
    .slow(39.5)


// Piano harmony: mist and shadow, more veiled, rare, longer held, pan opens gently right
$: stack([
  note("<c3 g3 e4> ~ ~ <ab3 eb4 bg3> ~ <f3 d4 a3> ~ ~ <eb3 bb3 g3> <c4 a4 f4> ~ <g4 e4 b4> <a3 f4 c4> ~ ~ <e3 eb4> ~")
    .sound("piano")
    .gain(0.013)
    .hold(10.4)
    .sustain(0.032)
    .room(1).size(1)
    .lpf(sine.range(87, 210).slow(38.9))
    .detune(sine.range(-39,8).slow(23.7))
    .slow(27.4)
    .every(6, x=>x.hold(13.6).drive(0.14))
    .sometimesBy(0.43, x=>x.palindrome())
    .every(11, x=>x.lpf(90))
    .pan(sine.range(0.14, 0.38).slow(81)),

  note("<c4 e4 g4> ~ ~ <g4 bb4 d5> <e4 g4 c5> ~ <bb3 eb4 g4> ~ <c5 d5 g4> ~ ~ e5 ~")
    .sound("piano")
    .gain(0.007)
    .hold(7.6)
    .sustain(0.024)
    .room(0.99).size(0.99)
    .detune(-38)
    .every(5, x=>x.rev())
    .slow(49.1)
    .sometimesBy(0.27, x=>x.pan(0.81))
])

// Bass: a veil, vowels low, moves slower, more fleeting subharmonic, ever more withdrawn
$: note("c2 ~ ~ ~ ~ g2 ~ ab1 ~ ~ ~ ~ ~ f2 ~ g1 ~ [e1 ~] ~ ~ ~ ~ ~ ~ ~")
  .sound("sine")
  .gain(0.008)
  .attack(0.031).decay(0.56).release(9.7)
  .vowel("<o a u i e>".slow(172))
  .room(0.74).size(0.98)
  .lpf(sine.range(8, 28).slow(80))
  .slide(18.2)
  .delay(0.13)
  .delayfeedback(0.23)
  .sometimesBy(0.19, x=>x.drive(0.56))
  .sometimesBy(0.17, x=>x.transpose("<-12 0 0 7 -5>".slow(90)))
  .rarely(x=>x.octave(2))
  .every(33, x=>x.distort(0.43))
  .degradeBy(0.36)
  .slow(35.5)


// Percussion: flakes rarely, wind, silvery and soft, distant, micro textures, almost lost
$: stack([
  s("bd ~ ~ ~ ~ ~").gain(0.0015).room(0.04).degradeBy(0.99995)
    .every(41, x=>x.delay(0.59).delayfeedback(0.19))
    .sometimesBy(0.29, x=>x.crush(15)),
  s("~ [cp ~] ~ ~ [~ sn] ~").gain(0.0008).room(0.06)
    .degradeBy(0.99998)
    .every(17,x=>x.rev())
    .every(24, x=>x.delay(0.17).delayfeedback(0.25)),
  s("[hh ~ [oh ~] ~] [~ ~] [~ <oh ~>] ~ [~] ~").gain(0.0011).room(0.15).crush(22)
    .pan(sine.range(0.15,0.92).slow(42.7))
    .degradeBy(0.997)
    .every(11,x=>x.rev())
    .sometimesBy(0.11, x=>x.delay(0.43)),
  s("~ ~ <cp ~> ~ [rim ~] ~ ~").gain(0.0006).room(0.05)
    .degradeBy(0.9999)
    .every(37, x=>x.echo(2, 0.21, 0.13))
    .sometimesBy(0.48,x=>x.crush(15))
])
.slow(25.5)