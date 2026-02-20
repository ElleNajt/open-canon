// Twinkle Twinkle Little Star — nocturne glimmers, mystery deepens, ever softer shimmer, stars inhale

setcps(76/60/4)

// Melody: sine, triangle, and a faint supersaw glint; echoes drift, motif a dream remnant, slight more repose
$: stack([
  note("c4 c4 g4 g4 a4 a4 <g4 b4 g5> ~ f4 f4 e4 e4 d4 d4 <c4 c5> ~ g4 g4 f4 f4 e4 e4 d4 ~ c4 c4 g4 g4 a4 a4 <g4 b4 g5> ~ f4 f4 e4 e4 d4 d4 <c4 c5> ~ e4 ~ ab4 ~ g4 ~")
    .sound("sine")
    .gain(0.15)
    .pan(sine.range(0.25,0.78).slow(19.5))
    .room(0.97).size(0.99)
    .lpf(sine.range(170, 1500).slow(37))
    .tremolo(0.17).tremolosync(7.3)
    .delay(0.51)
    .delayfeedback(0.82)
    .detune(sine.range(-9,7).slow(19.5))
    .ring(0.09).ringf(139)
    .degradeBy(0.21)
    .every(8,x=>x.rev())
    .sometimesBy(0.31, x=>x.hpf(720))
    .every(7, x=>x.palindrome())
    .release(0.89),

  // Triangle overlays, more air, even sparser, flickers of memory
  note("c5 [~ g5] ab5 <g5 ~ b5> ~ [f5 ~] e5 d5 <~ c6> ~ <e5 g5 ab5> ~ <bb5 ~ c6> ~ ~")
    .sound("triangle")
    .gain(0.065)
    .pan(sine.range(0.13,0.91).slow(20))
    .room(0.77).size(0.91)
    .lpf(880)
    .delay(0.34)
    .delayfeedback(0.39)
    .degradeBy(0.27)
    .sometimes(x=>x.rev())
    .sometimesBy(0.16, x=>x.hpf(1200))
    .every(6, x=>x.gain(0.10).lpf(290)),

  // Supersaw shimmer, a touch more vivid, occasionally warped
  note("g6 ~ ~ [f5 b4] ~ ~ <a5 ~> g5 ~ [e5 ~] <ab5 f5> ~ [e6 ~]").sound("supersaw")
    .gain(0.021)
    .pan(sine.range(0.35,0.62).slow(30))
    .lpf(2210)
    .delay(0.15)
    .delayfeedback(0.15)
    .room(0.59).size(0.88)
    .degradeBy(0.29)
    .sometimesBy(0.22, x=>x.octave("<3 4 5>".slow(5.8)))
    .attack(0.19)
])
.slow(1.36)

// Slow sine echoes, motif ghost, shimmer rising gently, now even farther between
$: note("e5 ~ [d5 ~ g5] ~ [g5 ~ d6] ~ c6 ~ g5 ~ [bb5 ~ eb5] ~ ab5 ~")
    .sound("sine")
    .gain(0.041)
    .pan(sine.range(0.21,0.85).slow(41))
    .delay(0.95)
    .delayfeedback(0.98)
    .room(1.00).size(1.00)
    .lpf(1190)
    .release(1.04)
    .degradeBy(0.29)
    .every(3, x=>x.rev())
    .slow(22.5)

// Piano harmony: rarefied, distant harmonics, gentle detune, vapor trails
$: stack([
  note("<c3 g3 e4> ~ <ab3 eb4 bg3> <f3 d4 a3> ~ <eb3 bb3 g3> <c4 a4 f4> ~ <g4 e4 b4> <a3 f4 c4> <e3 eb4> ~")
    .sound("piano")
    .gain(0.039)
    .hold(5.9)
    .sustain(0.08)
    .room(1).size(1)
    .lpf(sine.range(230, 480).slow(31))
    .detune(sine.range(-7,13).slow(20))
    .slow(15.2)
    .every(8, x=>x.hold(3.7).drive(0.17))
    .sometimesBy(0.17, x=>x.palindrome())
    .sometimesBy(0.24, x=>x.lpf(350)),

  note("<c4 e4 g4> ~ <g4 bb4 d5> <e4 g4 c5> ~ <bb3 eb4 g4> ~ <c5 d5 g4> ~ e5 ~")
    .sound("piano")
    .gain(0.019)
    .hold(4.41)
    .sustain(0.11)
    .room(0.99).size(0.97)
    .detune(-11)
    .every(2, x=>x.rev())
    .slow(19.1)
    .sometimesBy(0.29, x=>x.pan(0.89))
])

// Bass: widen the vowels, even slower, more air, drive rare ghosts
$: note("c2 ~ ~ g2 ~ ab1 ~ ~ ~ ab1 ~ f2 ~ ~ ~ g1 ~ [e1 ~] ~ ~ ~ ~")
  .sound("sine")
  .gain(0.019)
  .attack(0.012).decay(0.32).release(2.82)
  .vowel("<o a u i e>".slow(41))
  .room(0.69).size(1)
  .lpf(sine.range(15, 43).slow(30))
  .slide(5.31)
  .delay(0.19)
  .delayfeedback(0.14)
  .sometimesBy(0.11, x=>x.drive(0.47))
  .sometimesBy(0.17, x=>x.transpose("<-12 0 7 0>".slow(15)))
  .rarely(x=>x.octave(2))
  .every(16, x=>x.distort(0.37))
  .slow(11.2)

// Percussion: barely-there velvet grains, distant, replaced with windier ghosts
$: stack([
  s("bd ~ ~ ~").gain(0.004).room(0.10).degradeBy(0.97)
    .every(19, x=>x.delay(0.61).delayfeedback(0.06)),
  s("~ [cp ~] ~ ~ [~ sn] ~").gain(0.002).room(0.13)
    .degradeBy(0.995)
    .every(11,x=>x.rev())
    .every(17, x=>x.delay(0.21).delayfeedback(0.15)),
  s("[hh ~ [oh ~] ~] [~ ~] [~ <oh ~>] ~").gain(0.004).room(0.26).crush(22)
    .pan(sine.range(0.13,0.89).slow(27))
    .degradeBy(0.93)
    .every(13,x=>x.rev())
    .sometimesBy(0.11, x=>x.delay(0.14)),
  s("~ ~ cp ~ <rim ~> ~ ~ [cp ~] ~ [~ rim]").gain(0.0015).room(0.16)
    .degradeBy(0.999)
    .every(13, x=>x.echo(4, 0.23, 0.12))
    .sometimesBy(0.78,x=>x.crush(9))
])
.slow(9.7)