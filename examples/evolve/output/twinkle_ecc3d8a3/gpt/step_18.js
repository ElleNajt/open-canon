// Twinkle Twinkle Little Star — nocturne glimmers, mystery deepens, even softer shimmer, breath of stars

setcps(78/60/4)

// Melody: sine wears glass, triangle refines, echoes stretch, motif melts at edges
$: stack([
  note("c4 c4 g4 g4 a4 a4 <g4 b4 g5> ~ f4 f4 e4 e4 d4 d4 <c4 c5> ~ g4 g4 f4 f4 e4 e4 d4 ~ c4 c4 g4 g4 a4 a4 <g4 b4 g5> ~ f4 f4 e4 e4 d4 d4 <c4 c5> ~ e4 ~ ab4 ~ g4 ~")
    .sound("sine")
    .gain(0.32)
    .pan(sine.range(0.11,0.91).slow(10.5))
    .room(0.82).size(0.97)
    .lpf(sine.range(320, 1750).slow(21))
    .tremolo(0.23).tremolosync(8.15)
    .delay(0.26)
    .delayfeedback(0.84)
    .detune(sine.range(-18,16).slow(11.7))
    .ring(0.19).ringf(298)
    .every(5,x=>x.rev())
    .sometimesBy(0.16, x=>x.hpf(830))
    .every(7, x=>x.palindrome())
    .release(0.49)
    .degradeBy(0.11),

  // Refined triangle overlays, motif floats higher, fragmentary, airy
  note("c5 g5 a5 <g5 b5 g6> ~ f5 e5 d5 <c5 c6> ~ <e5 g5 ab5> <e6> ~ <bb5 g5 c6> ~ ~")
    .sound("triangle")
    .gain(0.17)
    .pan(sine.range(0.17,0.95).slow(12.7))
    .room(0.64).size(0.98)
    .lpf(1240)
    .delay(0.42)
    .delayfeedback(0.40)
    .rarely(x=>x.rev())
    .sometimesBy(0.23, x=>x.hpf(1030))
    .every(6, x=>x.gain(0.22).lpf(640))
])
.slow(1.54)

// Slow sine echoes, motif ghost, long swirl, almost reverberant memory
$: note("e5 ~ <d5 g5> ~ <g5 d6> ~ c6 ~ f5 ~ <bb5 eb5> ~ ab5 ~")
    .sound("sine")
    .gain(0.075)
    .pan(sine.range(0.22,0.81).slow(27))
    .delay(0.68)
    .delayfeedback(0.92)
    .room(0.95).size(0.97)
    .lpf(1590)
    .release(0.57)
    .every(3, x=>x.rev())
    .slow(23.2)

// Piano harmony: breathier, left hand extra soft, sonority rarefied and ambiguous
$: stack([
  note("<c3 g3 e4> ~ <ab3 eb4 bg3> <f3 d4 a3> ~ <eb3 bb3 g3> <c4 a4 f4> ~ <g4 e4 b4> <a3 f4 c4> <e3 eb4> ~").sound("piano")
    .gain(0.08)
    .hold(3.5)
    .sustain(0.06)
    .room(0.95).size(0.98)
    .lpf(sine.range(710, 1140).slow(15))
    .slow(12.8)
    .every(7, x=>x.hold(2.3).gain(0.055))
    .sometimes(x=>x.palindrome())
    .sometimesBy(0.15, x=>x.lpf(650)),
  
  note("<c4 e4 g4> ~ <g4 bb4 d5> <e4 g4 c5> ~ <bb3 eb4 g4> ~ <c5 d5 g4> ~ e5 ~").sound("piano")
    .gain(0.06)
    .hold(3.02)
    .sustain(0.06)
    .room(0.87).size(0.92)
    .every(4, x=>x.rev())
    .slow(24)
    .sometimesBy(0.11, x=>x.pan(0.94))
])

// Bass: earthier, gestures more sparse, more rests and low register
$: note("c2 ~ g2 ~ ab1 ~ ~ ~ ~ f2 ~ ~ ~ ab1 ~ <g1 e1> ~ ~")
  .sound("sine")
  .gain(0.052)
  .attack(0.025).decay(0.19).release(1.29)
  .vowel("<o u a>".slow(25))
  .room(0.72).size(0.92)
  .lpf(sine.range(31, 101).slow(21))
  .slide(2.01)
  .delay(0.12)
  .delayfeedback(0.21)
  .sometimesBy(0.19, x=>x.drive(0.51))
  .sometimesBy(0.15, x=>x.transpose("<-12 0 7 0>".slow(13)))
  .rarely(x=>x.octave(2))
  .every(11, x=>x.distort(0.11))
  .slow(8.1)

// Percussion: even more minimal, mostly atmospheric, gestures rarefied, space grows
$: stack([
  s("bd ~ ~ ~").gain(0.012).room(0.12).degradeBy(0.73)
    .every(14, x=>x.delay(0.42).delayfeedback(0.13))
    .sometimesBy(0.37, x=>x.crush(13)),
  s("~ [cp ~] ~ ~ [~ sn] ~").gain(0.006).room(0.14)
    .degradeBy(0.89)
    .every(9,x=>x.rev())
    .every(7, x=>x.delay(0.19).delayfeedback(0.16)),
  s("[hh ~ [oh ~] ~] [~ ~] [hh <oh ~>] ~").gain(0.010).room(0.68).crush(17)
    .pan(sine.range(0.04,0.97).slow(39))
    .degradeBy(0.72)
    .every(8,x=>x.rev()),
  s("~ ~ cp ~ <rim ~> ~ ~ [cp ~] ~ [~ rim]").gain(0.003).room(0.41)
    .degradeBy(0.95)
    .every(11, x=>x.echo(5, 0.62, 0.21))
    .sometimesBy(0.51,x=>x.crush(14))
])
.slow(4.1)