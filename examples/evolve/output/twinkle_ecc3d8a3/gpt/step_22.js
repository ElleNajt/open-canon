// Twinkle Twinkle Little Star — nocturne glimmers, mystery deepens, ever softer shimmer, stars inhale

setcps(76/60/4)

// Melody: sine, triangle, and now a faint supersaw glint; echoes drift, motif a dream remnant
$: stack([
  note("c4 c4 g4 g4 a4 a4 <g4 b4 g5> ~ f4 f4 e4 e4 d4 d4 <c4 c5> ~ g4 g4 f4 f4 e4 e4 d4 ~ c4 c4 g4 g4 a4 a4 <g4 b4 g5> ~ f4 f4 e4 e4 d4 d4 <c4 c5> ~ e4 ~ ab4 ~ g4 ~")
    .sound("sine")
    .gain(0.18)
    .pan(sine.range(0.21,0.83).slow(18.5))
    .room(0.91).size(0.98)
    .lpf(sine.range(280, 2000).slow(33))
    .tremolo(0.13).tremolosync(5.6)
    .delay(0.44)
    .delayfeedback(0.87)
    .detune(sine.range(-13,9).slow(15.2))
    .ring(0.11).ringf(129)
    .every(6,x=>x.rev())
    .sometimesBy(0.23, x=>x.hpf(770))
    .every(7, x=>x.palindrome())
    .release(0.81)
    .degradeBy(0.17),

  // Triangle overlays, more air, rare appearances, glimpses rather than voices
  note("c5 [g5 ~] a5 <g5 b5 g6> ~ f5 e5 d5 <c5 c6> ~ <e5 g5 ab5> <e6> ~ <bb5 g5 c6> ~ ~")
    .sound("triangle")
    .gain(0.079)
    .pan(sine.range(0.09,0.91).slow(16.7))
    .room(0.75).size(0.93)
    .lpf(920)
    .delay(0.28)
    .delayfeedback(0.41)
    .sometimes(x=>x.rev())
    .sometimesBy(0.20, x=>x.hpf(1130))
    .every(4, x=>x.gain(0.11).lpf(340)),

  // Fleeting supersaw shimmer, subtle, weaves between octaves, stars’ shimmer
  note("g6 ~ ~ <f5 b4> ~ ~ a5 ~ g5 ~ e5 ~ <ab5 f5> ~ e6 ~").sound("supersaw")
    .gain(0.027)
    .pan(sine.range(0.33,0.66).slow(25))
    .lpf(2600)
    .delay(0.22)
    .delayfeedback(0.19)
    .room(0.61).size(0.88)
    .degradeBy(0.21)
    .sometimesBy(0.18, x=>x.octave("<3 4 5>".slow(8)))
    .attack(0.11)
])
.slow(1.22)

// Slow sine echoes, motif ghost, swirl condensed, shimmer rising
$: note("e5 ~ [d5 ~ g5] ~ [g5 ~ d6] ~ c6 ~ g5 ~ [bb5 ~ eb5] ~ ab5 ~")
    .sound("sine")
    .gain(0.059)
    .pan(sine.range(0.25,0.79).slow(33))
    .delay(0.84)
    .delayfeedback(0.93)
    .room(0.99).size(0.99)
    .lpf(1430)
    .release(0.93)
    .every(2, x=>x.rev())
    .slow(19.3)

// Piano harmony: even more vaporous, floating, left hand occasionally blurred by overdrive
$: stack([
  note("<c3 g3 e4> ~ <ab3 eb4 bg3> <f3 d4 a3> ~ <eb3 bb3 g3> <c4 a4 f4> ~ <g4 e4 b4> <a3 f4 c4> <e3 eb4> ~")
    .sound("piano")
    .gain(0.043)
    .hold(4.8)
    .sustain(0.10)
    .room(0.99).size(1)
    .lpf(sine.range(290, 720).slow(27))
    .slow(13.8)
    .every(7, x=>x.hold(3.2).drive(0.13))
    .sometimesBy(0.19, x=>x.palindrome())
    .sometimesBy(0.21, x=>x.lpf(430)),

  note("<c4 e4 g4> ~ <g4 bb4 d5> <e4 g4 c5> ~ <bb3 eb4 g4> ~ <c5 d5 g4> ~ e5 ~")
    .sound("piano")
    .gain(0.027)
    .hold(3.69)
    .sustain(0.12)
    .room(0.95).size(0.93)
    .every(3, x=>x.rev())
    .slow(15.7)
    .sometimesBy(0.34, x=>x.pan(0.81))
])

// Bass: even sparser, longer silences, vowel shifts, more overtone
$: note("c2 ~ ~ g2 ~ ab1 ~ ~ ~ ~ f2 ~ ~ ab1 ~ [g1 ~ e1] ~ ~ ~")
  .sound("sine")
  .gain(0.029)
  .attack(0.028).decay(0.27).release(1.81)
  .vowel("<o a u i>".slow(37))
  .room(0.67).size(0.96)
  .lpf(sine.range(19, 61).slow(28))
  .slide(3.18)
  .delay(0.23)
  .delayfeedback(0.17)
  .sometimesBy(0.22, x=>x.drive(0.37))
  .sometimesBy(0.14, x=>x.transpose("<-12 0 7 0>".slow(11)))
  .rarely(x=>x.octave(2))
  .every(12, x=>x.distort(0.29))
  .slow(8.9)

// Percussion: breath becomes more apparent, shimmer rare, open space reigns
$: stack([
  s("bd ~ ~ ~").gain(0.007).room(0.17).degradeBy(0.92)
    .every(13, x=>x.delay(0.71).delayfeedback(0.08)),
  s("~ [cp ~] ~ ~ [~ sn] ~").gain(0.004).room(0.12)
    .degradeBy(0.99)
    .every(9,x=>x.rev())
    .every(7, x=>x.delay(0.31).delayfeedback(0.13)),
  s("[hh ~ [oh ~] ~] [~ ~] [~ <oh ~>] ~").gain(0.006).room(0.35).crush(18)
    .pan(sine.range(0.09,0.97).slow(23))
    .degradeBy(0.89)
    .every(8,x=>x.rev())
    .sometimesBy(0.09, x=>x.delay(0.18)),
  s("~ ~ cp ~ <rim ~> ~ ~ [cp ~] ~ [~ rim]").gain(0.0031).room(0.31)
    .degradeBy(0.99)
    .every(9, x=>x.echo(4, 0.29, 0.17))
    .sometimesBy(0.51,x=>x.crush(15))
])
.slow(7.0)