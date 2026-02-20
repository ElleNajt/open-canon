// Twinkle Twinkle Little Star — nocturne glimmers, mystery deepens, even softer shimmer, breath of stars

setcps(78/60/4)

// Melody: sine wears glass, triangle refines, echoes stretch, motif melts at edges
$: stack([
  note("c4 c4 g4 g4 a4 a4 <g4 b4 g5> ~ f4 f4 e4 e4 d4 d4 <c4 c5> ~ g4 g4 f4 f4 e4 e4 d4 ~ c4 c4 g4 g4 a4 a4 <g4 b4 g5> ~ f4 f4 e4 e4 d4 d4 <c4 c5> ~ e4 ~ ab4 ~ g4 ~")
    .sound("sine")
    .gain(0.26)
    .pan(sine.range(0.14,0.88).slow(13.5))
    .room(0.89).size(0.97)
    .lpf(sine.range(410, 2300).slow(22))
    .tremolo(0.23).tremolosync(9.2)
    .delay(0.34)
    .delayfeedback(0.88)
    .detune(sine.range(-6,12).slow(12.2))
    .ring(0.15).ringf(184)
    .every(4,x=>x.rev())
    .sometimesBy(0.2, x=>x.hpf(890))
    .every(8, x=>x.palindrome())
    .release(0.63)
    .degradeBy(0.09),

  // Refined triangle overlays, motif floats higher, fragmentary, airy
  note("c5 g5 a5 <g5 b5 g6> ~ f5 e5 d5 <c5 c6> ~ <e5 g5 ab5> <e6> ~ <bb5 g5 c6> ~ ~")
    .sound("triangle")
    .gain(0.12)
    .pan(sine.range(0.11,0.93).slow(21.3))
    .room(0.71).size(0.93)
    .lpf(1340)
    .delay(0.28)
    .delayfeedback(0.37)
    .rarely(x=>x.rev())
    .sometimesBy(0.15, x=>x.hpf(1220))
    .every(7, x=>x.gain(0.15).lpf(610))
])
.slow(1.25)

// Slow sine echoes, motif ghost, long swirl, almost reverberant memory
$: note("e5 ~ <d5 g5> ~ <g5 d6> ~ c6 ~ g5 ~ <bb5 eb5> ~ ab5 ~")
    .sound("sine")
    .gain(0.083)
    .pan(sine.range(0.27,0.77).slow(38))
    .delay(0.73)
    .delayfeedback(0.96)
    .room(0.99).size(0.99)
    .lpf(1750)
    .release(0.69)
    .every(3, x=>x.rev())
    .slow(19.4)

// Piano harmony: breathier, left hand extra soft, sonority rarefied and ambiguous
$: stack([
  note("<c3 g3 e4> ~ <ab3 eb4 bg3> <f3 d4 a3> ~ <eb3 bb3 g3> <c4 a4 f4> ~ <g4 e4 b4> <a3 f4 c4> <e3 eb4> ~").sound("piano")
    .gain(0.08)
    .hold(4.4)
    .sustain(0.07)
    .room(0.98).size(1)
    .lpf(sine.range(440, 1040).slow(16))
    .slow(15.1)
    .every(7, x=>x.hold(2.9).gain(0.045))
    .sometimes(x=>x.palindrome())
    .sometimesBy(0.13, x=>x.lpf(600)),

  note("<c4 e4 g4> ~ <g4 bb4 d5> <e4 g4 c5> ~ <bb3 eb4 g4> ~ <c5 d5 g4> ~ e5 ~").sound("piano")
    .gain(0.051)
    .hold(3.18)
    .sustain(0.08)
    .room(0.95).size(0.95)
    .every(4, x=>x.rev())
    .slow(19.2)
    .sometimesBy(0.21, x=>x.pan(0.73))
])

// Bass: earthier, gestures more sparse, more rests and low register
$: note("c2 ~ g2 ~ ab1 ~ ~ ~ ~ f2 ~ ~ ~ ab1 ~ <g1 e1> ~ ~")
  .sound("sine")
  .gain(0.051)
  .attack(0.022).decay(0.19).release(1.37)
  .vowel("<o u a>".slow(18))
  .room(0.71).size(0.94)
  .lpf(sine.range(34, 90).slow(15))
  .slide(2.27)
  .delay(0.11)
  .delayfeedback(0.33)
  .sometimesBy(0.10, x=>x.drive(0.33))
  .sometimesBy(0.14, x=>x.transpose("<-12 0 7 0>".slow(14)))
  .rarely(x=>x.octave(2))
  .every(13, x=>x.distort(0.17))
  .slow(8.2)

// Percussion: minimal, atmospheric, softly shifting, open textures, sparser, occasional shimmer
$: stack([
  s("bd ~ ~ ~").gain(0.011).room(0.11).degradeBy(0.85)
    .every(13, x=>x.delay(0.42).delayfeedback(0.13))
    .sometimesBy(0.17, x=>x.crush(8)),
  s("~ [cp ~] ~ ~ [~ sn] ~").gain(0.006).room(0.13)
    .degradeBy(0.98)
    .every(10,x=>x.rev())
    .every(7, x=>x.delay(0.19).delayfeedback(0.16)),
  s("[hh ~ [oh ~] ~] [~ ~] [~ <oh ~>] ~").gain(0.008).room(0.47).crush(19)
    .pan(sine.range(0.15,0.91).slow(27))
    .degradeBy(0.78)
    .every(9,x=>x.rev())
    .sometimesBy(0.18, x=>x.delay(0.09)),
  s("~ ~ cp ~ <rim ~> ~ ~ [cp ~] ~ [~ rim]").gain(0.006).room(0.38)
    .degradeBy(0.99)
    .every(8, x=>x.echo(6, 0.47, 0.25))
    .sometimesBy(0.39,x=>x.crush(12))
])
.slow(6.5)