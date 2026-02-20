// Twinkle Twinkle Little Star — nocturne unfurls, mystery deepens, subtle shimmer, breath of stars

setcps(84/60/4)

// Melody: sine and triangle entwine, melodies stretch with night air, dreamlike echoes, new motifs glimmer
$: stack([
  note("c4 c4 g4 g4 a4 a4 <g4 b4 g5> ~ f4 f4 e4 e4 d4 d4 <c4 c5> ~ g4 g4 f4 f4 e4 e4 d4 ~ g4 g4 f4 f4 e4 e4 d4 ~ c4 c4 g4 g4 a4 a4 <g4 b4 g5> ~ f4 f4 e4 e4 d4 d4 <c4 c5> ~ e4 ~ ab4 ~ g4 ~")
    .sound("sine")
    .gain(0.36)
    .pan(sine.range(0.15,0.82).slow(9.5))
    .room(0.76).size(0.98)
    .lpf(sine.range(380, 1960).slow(18))
    .tremolo(0.18).tremolosync(7)
    .delay(0.22)
    .delayfeedback(0.72)
    .detune(sine.range(-24,12).slow(11))
    .ring(0.21).ringf(316)
    .every(5,x=>x.rev())
    .sometimesBy(0.27, x=>x.hpf(710))
    .every(6, x=>x.palindrome())
    .sometimesBy(0.16, x=>x.release(0.57)),

  // Shimmering triangle overlay floats, motif simplified, brightness breathes
  note("c5 g5 a5 <g5 b5 g6> ~ f5 e5 d5 <c5 c6> ~ <e5 g5 ab5> <e6> ~ <bb5 g5 c6> ~ ~")
    .sound("triangle")
    .gain(0.19)
    .pan(sine.range(0.08,0.98).slow(10.5))
    .room(0.61).size(0.97)
    .lpf(1570)
    .delay(0.34)
    .delayfeedback(0.29)
    .rarely(x=>x.rev())
    .sometimesBy(0.21, x=>x.hpf(1460))
    .every(4, x=>x.gain(0.24).lpf(830))
])
.slow(1.36)

// Echoed sine motif, cleaner tail, swirl in stereo, vaporous stretches
$: note("e5 ~ <d5 g5> ~ <g5 d6> ~ c6 ~ f5 ~ <bb5 eb5> ~ ab5 ~")
    .sound("sine")
    .gain(0.088)
    .pan(sine.range(0.36,0.72).slow(24))
    .delay(0.53)
    .delayfeedback(0.89)
    .room(0.91).size(0.96)
    .lpf(1780)
    .release(0.41)
    .every(3, x=>x.rev())
    .slow(19.9)

// Piano harmony: more hollow, spacious, notes voiced higher, ambiguity thickens
$: stack([
  note("<c3 g3 e4> ~ <ab3 eb4 bg3> <f3 d4 a3> ~ <eb3 bb3 g3> <c4 a4 f4> ~ <g4 e4 b4> <a3 f4 c4> <e3 eb4> ~").sound("piano")
    .gain(0.09)
    .hold(3.18)
    .sustain(0.07)
    .room(0.91).size(0.98)
    .lpf(sine.range(820, 1300).slow(13))
    .slow(10.7)
    .every(5, x=>x.hold(2.8).gain(0.065))
    .sometimes(x=>x.palindrome())
    .sometimesBy(0.13, x=>x.lpf(890)),
  
  note("<c4 e4 g4> ~ <g4 bb4 d5> <e4 g4 c5> ~ <bb3 eb4 g4> ~ <c5 d5 g4> ~ e5 ~").sound("piano")
    .gain(0.07)
    .hold(2.65)
    .sustain(0.07)
    .room(0.85).size(0.91)
    .every(3, x=>x.rev())
    .slow(21.8)
    .sometimesBy(0.13, x=>x.pan(0.87))
])

// Bass: deeper, more occasional, pulse smooths out, rare accent intervals
$: note("c2 ~ g2 ~ ab1 ~ ~ c2 ~ ~ f2 ~ ~ ~ ab1 ~ <g1 e1> ~ g2 ~")
  .sound("sine")
  .gain(0.075)
  .attack(0.021).decay(0.23).release(1.08)
  .vowel("<o u a>".slow(19))
  .room(0.68).size(0.94)
  .lpf(sine.range(38, 126).slow(17))
  .slide(1.73)
  .delay(0.19)
  .delayfeedback(0.28)
  .sometimesBy(0.13, x=>x.drive(0.43))
  .sometimesBy(0.15, x=>x.transpose("<-12 0 7 0>".slow(10)))
  .rarely(x=>x.octave(2))
  .every(8, x=>x.distort(0.19))
  .every(14, x=>x.crush(11))
  .slow(6.6)

// Percussion: more atmospheric, hats/effects spaced, subtle gestures prevail
$: stack([
  s("bd ~ [~ bd] ~ ~ [~ bd] ~").gain(0.016).room(0.09).degradeBy(0.67)
    .every(10, x=>x.delay(0.35).delayfeedback(0.09))
    .sometimesBy(0.26, x=>x.crush(10)),
  s("~ sn ~ [sn ~] ~ [~ sn] ~").gain(0.009).room(0.13)
    .degradeBy(0.79)
    .every(5,x=>x.rev())
    .every(4, x=>x.delay(0.28).delayfeedback(0.10)),
  s("[hh ~ [oh hh] ~] [~ ~] [hh <oh ~>] [~ cr]").gain(0.013).room(0.61).crush(14)
    .pan(sine.range(0.08,0.92).slow(23))
    .degradeBy(0.61)
    .every(6,x=>x.rev()),
  s("~ ~ cp ~ <rim ~> ~ ~ [cp ~] ~ [~ rim]").gain(0.005).room(0.36)
    .degradeBy(0.93)
    .every(9, x=>x.echo(7, 0.54, 0.17))
    .sometimesBy(0.37,x=>x.crush(9))
])
.slow(3.19)