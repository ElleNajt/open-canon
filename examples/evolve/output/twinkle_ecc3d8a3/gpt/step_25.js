// Twinkle Twinkle Little Star — nocturne glimmers, mystery deepens, ever softer shimmer, stars inhale

setcps(76/60/4)

// Melody: sine, triangle, and a faint supersaw glint; echoes drift, motif a dream remnant, deepening tone, breaths longer
$: stack([
  note("c4 c4 g4 g4 a4 a4 <g4 b4 g5> ~ f4 f4 <e4 ~> d4 d4 <c4 c5> ~ g4 g4 f4 f4 <e4 ~> d4 ~ c4 c4 g4 <g4 g4> a4 a4 <g4 b4 g5> ~ f4 f4 e4 e4 d4 d4 <c4 c5> ~ e4 ~ ab4 ~ g4 ~")
    .sound("sine")
    .gain(0.14)
    .pan(sine.range(0.19,0.79).slow(25.5))
    .room(0.98).size(1.0)
    .lpf(sine.range(120, 1950).slow(33.4))
    .tremolo(0.16).tremolosync(6.16)
    .delay(0.61)
    .delayfeedback(0.92)
    .detune(sine.range(-8,13).slow(27.7))
    .ring(0.14).ringf(75)
    .degradeBy(0.29)
    .every(8,x=>x.rev())
    .sometimesBy(0.25, x=>x.hpf(1700))
    .every(5, x=>x.palindrome())
    .release(1.37)
    .slow(0.97),

  // Triangle overlay, breathier, fragments ripple and dissolve
  note("c5 ~ [g5 ~] ab5 <g5 ~ b5> ~ [f5 ~] <e5 d5> <c6 ~> ~ <e5 g5 ab5> ~ <bb5 ~ c6> ~ ~")
    .sound("triangle")
    .gain(0.055)
    .pan(sine.range(0.09,0.99).slow(23))
    .room(0.81).size(0.97)
    .lpf(710)
    .delay(0.41)
    .delayfeedback(0.36)
    .degradeBy(0.32)
    .sometimes(x=>x.rev())
    .sometimesBy(0.23, x=>x.hpf(1700))
    .every(7, x=>x.gain(0.095).lpf(270))
    .release(0.67),

  // Supersaw shimmer, a little brighter, rare spectral leaps
  note("g6 ~ <d5 ~> [f5 b4] ~ <a5 g5> [~ e5] <ab5 f5> ~ [e6 ~] <d5 b5>").sound("supersaw")
    .gain(0.015)
    .pan(sine.range(0.22,0.80).slow(24.6))
    .lpf(2760)
    .delay(0.18)
    .delayfeedback(0.15)
    .room(0.70).size(0.92)
    .degradeBy(0.33)
    .sometimesBy(0.32, x=>x.octave("<4 5 6 7>".slow(10.2)))
    .attack(0.2)
    .release(0.39)
])
.slow(1.45)

// Slow sine echoes, motif ghost, shimmer rising gently, now even farther between, fading
$: note("e5 ~ [d5 ~ g5] ~ [g5 ~ d6] ~ c6 ~ g5 ~ [bb5 ~ eb5] ~ ab5 ~ f5 ~")
    .sound("sine")
    .gain(0.029)
    .pan(sine.range(0.16,0.89).slow(44.2))
    .delay(0.97)
    .delayfeedback(0.98)
    .room(1.00).size(1.00)
    .lpf(920)
    .release(1.27)
    .degradeBy(0.31)
    .every(3, x=>x.rev())
    .slow(29)

// Piano harmony: hazier, rare events, lower still, slow motion
$: stack([
  note("<c3 g3 e4> ~ ~ <ab3 eb4 bg3> <f3 d4 a3> ~ ~ <eb3 bb3 g3> <c4 a4 f4> ~ <g4 e4 b4> <a3 f4 c4> ~ ~ <e3 eb4> ~")
    .sound("piano")
    .gain(0.026)
    .hold(8.1)
    .sustain(0.04)
    .room(1).size(1)
    .lpf(sine.range(144, 410).slow(33))
    .detune(sine.range(-19,24).slow(17))
    .slow(23.4)
    .every(4, x=>x.hold(7.2).drive(0.19))
    .sometimesBy(0.18, x=>x.palindrome())
    .sometimesBy(0.15, x=>x.lpf(190)),

  note("<c4 e4 g4> ~ ~ <g4 bb4 d5> <e4 g4 c5> ~ ~ <bb3 eb4 g4> ~ <c5 d5 g4> ~ ~ e5 ~")
    .sound("piano")
    .gain(0.013)
    .hold(5.5)
    .sustain(0.04)
    .room(0.98).size(0.99)
    .detune(-17)
    .every(2, x=>x.rev())
    .slow(33.6)
    .sometimesBy(0.17, x=>x.pan(0.89))
])

// Bass: vowels wide as night, almost underwater, fewer notes, ghost resonance
$: note("c2 ~ ~ g2 ~ ab1 ~ ~ ab1 ~ ~ ~ f2 ~ g1 ~ [e1 ~] ~ ~ ~ ~")
  .sound("sine")
  .gain(0.015)
  .attack(0.018).decay(0.22).release(4.4)
  .vowel("<o a u i e>".slow(70))
  .room(0.75).size(1)
  .lpf(sine.range(11, 39).slow(44))
  .slide(6.4)
  .delay(0.09)
  .delayfeedback(0.13)
  .sometimesBy(0.19, x=>x.drive(0.59))
  .sometimesBy(0.11, x=>x.transpose("<-12 0 7 0>".slow(31)))
  .rarely(x=>x.octave(2))
  .every(16, x=>x.distort(0.44))
  .slow(17.5)

// Percussion: more erosion, almost wind-like textures, panned wide, ungraspable
$: stack([
  s("bd ~ ~ ~").gain(0.0032).room(0.10).degradeBy(0.994)
    .every(19, x=>x.delay(0.61).delayfeedback(0.13)),
  s("~ [cp ~] ~ ~ [~ sn] ~").gain(0.0021).room(0.14)
    .degradeBy(0.998)
    .every(5,x=>x.rev())
    .every(17, x=>x.delay(0.22).delayfeedback(0.15)),
  s("[hh ~ [oh ~] ~] [~ ~] [~ <oh ~>] ~").gain(0.0031).room(0.15).crush(20)
    .pan(sine.range(0.07,0.98).slow(27.6))
    .degradeBy(0.98)
    .every(15,x=>x.rev())
    .sometimesBy(0.13, x=>x.delay(0.15)),
  s("~ ~ cp ~ <rim ~> ~ ~ [cp ~] ~ [~ rim]").gain(0.0017).room(0.12)
    .degradeBy(0.999)
    .every(17, x=>x.echo(2, 0.22, 0.21))
    .sometimesBy(0.5,x=>x.crush(9))
])
.slow(15.8)