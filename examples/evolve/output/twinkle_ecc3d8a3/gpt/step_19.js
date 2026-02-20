// Twinkle Twinkle Little Star — nocturne glimmers, mystery deepens, even softer shimmer, breath of stars

setcps(80/60/4)

// Melody: sine wears glass, triangle refines, echoes stretch, motif melts at edges
$: stack([
  note("c4 c4 g4 g4 a4 a4 <g4 b4 g5> ~ f4 f4 e4 e4 d4 d4 <c4 c5> ~ g4 g4 f4 f4 e4 e4 d4 ~ c4 c4 g4 g4 a4 a4 <g4 b4 g5> ~ f4 f4 e4 e4 d4 d4 <c4 c5> ~ e4 ~ ab4 ~ g4 ~")
    .sound("sine")
    .gain(0.29)
    .pan(sine.range(0.17,0.84).slow(10.5))
    .room(0.84).size(0.98)
    .lpf(sine.range(410, 2100).slow(19))
    .tremolo(0.27).tremolosync(7.2)
    .delay(0.29)
    .delayfeedback(0.86)
    .detune(sine.range(-8,10).slow(10.2))
    .ring(0.15).ringf(254)
    .every(5,x=>x.rev())
    .sometimesBy(0.22, x=>x.hpf(870))
    .every(7, x=>x.palindrome())
    .release(0.59)
    .degradeBy(0.13),

  // Refined triangle overlays, motif floats higher, fragmentary, airy
  note("c5 g5 a5 <g5 b5 g6> ~ f5 e5 d5 <c5 c6> ~ <e5 g5 ab5> <e6> ~ <bb5 g5 c6> ~ ~")
    .sound("triangle")
    .gain(0.15)
    .pan(sine.range(0.08,0.98).slow(17.1))
    .room(0.7).size(0.96)
    .lpf(1070)
    .delay(0.34)
    .delayfeedback(0.33)
    .rarely(x=>x.rev())
    .sometimesBy(0.18, x=>x.hpf(1270))
    .every(6, x=>x.gain(0.19).lpf(520))
])
.slow(1.38)

// Slow sine echoes, motif ghost, long swirl, almost reverberant memory
$: note("e5 ~ <d5 g5> ~ <g5 d6> ~ c6 ~ f5 ~ <bb5 eb5> ~ ab5 ~")
    .sound("sine")
    .gain(0.094)
    .pan(sine.range(0.32,0.72).slow(32))
    .delay(0.62)
    .delayfeedback(0.95)
    .room(0.97).size(0.98)
    .lpf(1590)
    .release(0.62)
    .every(2, x=>x.rev())
    .slow(22.2)

// Piano harmony: breathier, left hand extra soft, sonority rarefied and ambiguous
$: stack([
  note("<c3 g3 e4> ~ <ab3 eb4 bg3> <f3 d4 a3> ~ <eb3 bb3 g3> <c4 a4 f4> ~ <g4 e4 b4> <a3 f4 c4> <e3 eb4> ~").sound("piano")
    .gain(0.09)
    .hold(4.3)
    .sustain(0.08)
    .room(0.96).size(0.99)
    .lpf(sine.range(510, 1060).slow(19))
    .slow(13.6)
    .every(6, x=>x.hold(2.7).gain(0.056))
    .sometimes(x=>x.palindrome())
    .sometimesBy(0.18, x=>x.lpf(540)),

  note("<c4 e4 g4> ~ <g4 bb4 d5> <e4 g4 c5> ~ <bb3 eb4 g4> ~ <c5 d5 g4> ~ e5 ~").sound("piano")
    .gain(0.062)
    .hold(3.35)
    .sustain(0.09)
    .room(0.93).size(0.97)
    .every(3, x=>x.rev())
    .slow(21.7)
    .sometimesBy(0.15, x=>x.pan(0.82))
])

// Bass: earthier, gestures more sparse, more rests and low register
$: note("c2 ~ g2 ~ ab1 ~ ~ ~ ~ f2 ~ ~ ~ ab1 ~ <g1 e1> ~ ~")
  .sound("sine")
  .gain(0.049)
  .attack(0.019).decay(0.17).release(1.44)
  .vowel("<o u a>".slow(25))
  .room(0.69).size(0.92)
  .lpf(sine.range(33, 88).slow(13))
  .slide(2.37)
  .delay(0.13)
  .delayfeedback(0.24)
  .sometimesBy(0.14, x=>x.drive(0.47))
  .sometimesBy(0.13, x=>x.transpose("<-12 0 7 0>".slow(21)))
  .rarely(x=>x.octave(2))
  .every(11, x=>x.distort(0.14))
  .slow(7.9)

// Percussion: minimal, atmospheric, softly shifting
$: stack([
  s("bd ~ ~ ~").gain(0.015).room(0.13).degradeBy(0.81)
    .every(11, x=>x.delay(0.34).delayfeedback(0.09))
    .sometimesBy(0.29, x=>x.crush(11)),
  s("~ [cp ~] ~ ~ [~ sn] ~").gain(0.008).room(0.15)
    .degradeBy(0.93)
    .every(8,x=>x.rev())
    .every(9, x=>x.delay(0.14).delayfeedback(0.13)),
  s("[hh ~ [oh ~] ~] [~ ~] [hh <oh ~>] ~").gain(0.007).room(0.57).crush(16)
    .pan(sine.range(0.08,0.94).slow(24))
    .degradeBy(0.74)
    .every(7,x=>x.rev()),
  s("~ ~ cp ~ <rim ~> ~ ~ [cp ~] ~ [~ rim]").gain(0.004).room(0.48)
    .degradeBy(0.97)
    .every(9, x=>x.echo(7, 0.55, 0.19))
    .sometimesBy(0.48,x=>x.crush(16))
])
.slow(5.5)