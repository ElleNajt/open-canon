// Twinkle Twinkle Little Star — nocturne glimmers, mystery deepens, even softer shimmer, breath of stars

setcps(78/60/4)

// Melody: sine wears glass, triangle refines, echoes stretch, motif melts at edges
$: stack([
  note("c4 c4 g4 g4 a4 a4 <g4 b4 g5> ~ f4 f4 e4 e4 d4 d4 <c4 c5> ~ g4 g4 f4 f4 e4 e4 d4 ~ c4 c4 g4 g4 a4 a4 <g4 b4 g5> ~ f4 f4 e4 e4 d4 d4 <c4 c5> ~ e4 ~ ab4 ~ g4 ~")
    .sound("sine")
    .gain(0.22)
    .pan(sine.range(0.18,0.84).slow(10.5))
    .room(0.91).size(0.97)
    .lpf(sine.range(320, 2400).slow(27))
    .tremolo(0.20).tremolosync(7.7)
    .delay(0.41)
    .delayfeedback(0.83)
    .detune(sine.range(-7,11).slow(17.4))
    .ring(0.17).ringf(146)
    .every(4,x=>x.rev())
    .sometimesBy(0.26, x=>x.hpf(910))
    .every(6, x=>x.palindrome())
    .release(0.69)
    .degradeBy(0.13),

  // Refined triangle overlays, motif floats higher, fragmentary, airy
  note("c5 g5 a5 <g5 b5 g6> ~ f5 e5 d5 <c5 c6> ~ <e5 g5 ab5> <e6> ~ <bb5 g5 c6> ~ ~")
    .sound("triangle")
    .gain(0.097)
    .pan(sine.range(0.11,0.93).slow(18.8))
    .room(0.73).size(0.93)
    .lpf(1210)
    .delay(0.25)
    .delayfeedback(0.37)
    .sometimes(x=>x.rev())
    .sometimesBy(0.19, x=>x.hpf(1420))
    .every(5, x=>x.gain(0.14).lpf(510))
])
.slow(1.08)

// Slow sine echoes, motif ghost, long swirl, almost reverberant memory
$: note("e5 ~ [d5 ~ g5] ~ [g5 ~ d6] ~ c6 ~ g5 ~ [bb5 ~ eb5] ~ ab5 ~")
    .sound("sine")
    .gain(0.067)
    .pan(sine.range(0.22,0.81).slow(28))
    .delay(0.81)
    .delayfeedback(0.92)
    .room(0.99).size(0.99)
    .lpf(1850)
    .release(0.81)
    .every(2, x=>x.rev())
    .slow(16.2)

// Piano harmony: breathier, left hand extra soft, sonority rarefied and ambiguous
$: stack([
  note("<c3 g3 e4> ~ <ab3 eb4 bg3> <f3 d4 a3> ~ <eb3 bb3 g3> <c4 a4 f4> ~ <g4 e4 b4> <a3 f4 c4> <e3 eb4> ~").sound("piano")
    .gain(0.07)
    .hold(4.6)
    .sustain(0.09)
    .room(0.98).size(1)
    .lpf(sine.range(360, 900).slow(22))
    .slow(11.2)
    .every(6, x=>x.hold(3.4).gain(0.035))
    .sometimesBy(0.23, x=>x.palindrome())
    .sometimesBy(0.17, x=>x.lpf(480)),

  note("<c4 e4 g4> ~ <g4 bb4 d5> <e4 g4 c5> ~ <bb3 eb4 g4> ~ <c5 d5 g4> ~ e5 ~").sound("piano")
    .gain(0.041)
    .hold(3.91)
    .sustain(0.10)
    .room(0.93).size(0.95)
    .every(3, x=>x.rev())
    .slow(13.2)
    .sometimesBy(0.31, x=>x.pan(0.78))
])

// Bass: earthier, gestures more sparse, more rests and low register
$: note("c2 ~ g2 ~ ab1 ~ ~ ~ ~ f2 ~ ~ ~ ab1 ~ [g1 ~ e1] ~ ~")
  .sound("sine")
  .gain(0.043)
  .attack(0.019).decay(0.22).release(1.44)
  .vowel("<o a u>".slow(28))
  .room(0.69).size(0.89)
  .lpf(sine.range(22, 71).slow(22))
  .slide(2.84)
  .delay(0.17)
  .delayfeedback(0.27)
  .sometimesBy(0.18, x=>x.drive(0.29))
  .sometimesBy(0.19, x=>x.transpose("<-12 0 7 0>".slow(9)))
  .rarely(x=>x.octave(2))
  .every(10, x=>x.distort(0.23))
  .slow(7.2)

// Percussion: minimal, atmospheric, softly shifting, open textures, sparser, occasional shimmer
$: stack([
  s("bd ~ ~ ~").gain(0.009).room(0.11).degradeBy(0.87)
    .every(11, x=>x.delay(0.62).delayfeedback(0.12))
    .sometimesBy(0.26, x=>x.crush(10)),
  s("~ [cp ~] ~ ~ [~ sn] ~").gain(0.005).room(0.16)
    .degradeBy(0.97)
    .every(8,x=>x.rev())
    .every(6, x=>x.delay(0.25).delayfeedback(0.19)),
  s("[hh ~ [oh ~] ~] [~ ~] [~ <oh ~>] ~").gain(0.007).room(0.41).crush(16)
    .pan(sine.range(0.12,0.95).slow(19))
    .degradeBy(0.84)
    .every(6,x=>x.rev())
    .sometimesBy(0.14, x=>x.delay(0.12)),
  s("~ ~ cp ~ <rim ~> ~ ~ [cp ~] ~ [~ rim]").gain(0.0052).room(0.29)
    .degradeBy(0.98)
    .every(7, x=>x.echo(5, 0.37, 0.21))
    .sometimesBy(0.41,x=>x.crush(13))
])
.slow(5.8)