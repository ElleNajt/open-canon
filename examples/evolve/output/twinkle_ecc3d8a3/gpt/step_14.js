// Twinkle Twinkle Little Star — nocturne unfurls, mystery deepens, subtle shimmer, breath of stars

setcps(84/60/4)

// Melody: sine and triangle entwine, melodies stretch with night air, dreamlike echoes, new motifs glimmer
$: stack([
  note("c4 c4 g4 g4 a4 a4 <g4 b4 g5> ~ f4 f4 e4 e4 d4 d4 <c4 c5> ~ g4 g4 f4 f4 e4 e4 d4 ~ g4 g4 f4 f4 e4 e4 d4 ~ c4 c4 g4 g4 a4 a4 <g4 b4 g5> ~ f4 f4 e4 e4 d4 d4 <c4 c5> ~ e4 ~ ab4 ~ g4 ~")
    .sound("sine")
    .gain(0.35)
    .pan(sine.range(0.13,0.88).slow(7))
    .room(0.62).size(0.92)
    .lpf(sine.range(420, 2120).slow(12))
    .tremolo(0.17).tremolosync(9)
    .delay(0.32)
    .delayfeedback(0.51)
    .detune(sine.range(-8,8).slow(8))
    .ring(0.27).ringf(351)
    .every(7,x=>x.rev())
    .sometimesBy(0.14, x=>x.hpf(650))
    .every(14, x=>x.palindrome()),

  // Shimmering triangle overlay floats, new motif, gentle high notes linger above
  note("c5 c5 g5 g5 a5 a5 <g5 b5 g6> ~ f5 f5 e5 e5 d5 d5 <c5 c6> ~ <e5 g5 ab5> ~ <bb5 g5 c6> ~ e6 ~")
    .sound("triangle")
    .gain(0.15)
    .pan(sine.range(0.08,0.97).slow(13))
    .room(0.41).size(0.92)
    .lpf(1720)
    .delay(0.29)
    .delayfeedback(0.31)
    .sometimes(x=>x.palindrome())
    .rarely(x=>x.rev())
    .sometimesBy(0.38, x=>x.hpf(1030))
    .every(13, x=>x.gain(0.19))
])
.slow(1.26)

// Echoed sine motif, reflects distant lights, gently through reverb
$: note("e5 ~ <d5 g5> ~ g5 ~ c6 ~ f5 ~")
    .sound("sine")
    .gain(0.10)
    .pan(0.61)
    .delay(0.46)
    .delayfeedback(0.73)
    .room(0.79).size(0.94)
    .lpf(2020)
    .release(0.32)
    .every(6, x=>x.rev())
    .slow(19.5)

// Piano harmony: widen the sense of space, more passing tones, lean into soft ambiguity
$: stack([
  note("<c3 g3 e4> ~ <ab3 eb4 bg3> <f3 d4 a3> ~ <eb3 bb3 g3> <c4 a4 f4> ~ <g4 e4 b4> <a3 f4 c4> <e3 eb4> ~").sound("piano")
    .gain(0.19)
    .hold(2.1)
    .sustain(0.13)
    .room(0.58).size(0.94)
    .lpf(sine.range(710, 1710).slow(10))
    .slow(8.8)
    .every(5, x=>x.hold(2.45).gain(0.10))
    .sometimes(x=>x.palindrome())
    .sometimesBy(0.22, x=>x.lpf(1080)),
  
  note("<c4 e4 g4> ~ <g4 bb4 d5> <e4 g4 c5> ~ <bb3 eb4 g4> ~ <c5 d5 g4> ~").sound("piano")
    .gain(0.13)
    .hold(3.0)
    .sustain(0.14)
    .room(0.98).size(0.81)
    .every(4, x=>x.rev())
    .slow(15)
    .sometimesBy(0.18, x=>x.pan(0.95))
])

// Bass: deepen and blur, rare sudden drops, more shape in sustain, slightly more movement, occasional pulses
$: note("c2 ~ g2 ~ f2 ~ <c2 g1> ~ ~ a1 ~ ab1 ~ <f2 c2> ~ ~ c1 ~ ~ ~ ab1 ~ <g1 e1> ~")
  .sound("sine")
  .gain(0.11)
  .attack(0.03).decay(0.19).release(0.67)
  .vowel("<o u i e a>".slow(21))
  .room(0.33).size(0.89)
  .lpf(sine.range(50, 150).slow(19))
  .slide(1.62)
  .delay(0.22)
  .delayfeedback(0.41)
  .sometimesBy(0.21, x=>x.drive(0.63))
  .sometimesBy(0.11, x=>x.transpose("<-12 0 3 0>".slow(10)))
  .rarely(x=>x.octave(2))
  .every(11, x=>x.distort(0.12))
  .slow(5.7)

// Percussion: sustain delicacy, hats flutter wider, rim+cp even gentler
$: stack([
  s("bd ~ ~ [~ bd] ~").gain(0.021).room(0.11).degradeBy(0.61)
    .every(14, x=>x.delay(0.33).delayfeedback(0.09)),
  s("~ ~ [sn ~ ~] ~ ~").gain(0.013).room(0.13)
    .degradeBy(0.79)
    .every(7,x=>x.rev())
    .every(5, x=>x.delay(0.37).delayfeedback(0.09)),
  s("[hh ~ [oh hh] ~ ~] [~ ~] [hh <oh ~>] [hh ~]")
    .gain(0.018).room(0.43).crush(14)
    .pan(sine.range(0.23,0.93).slow(22))
    .degradeBy(0.59)
    .every(8,x=>x.rev()),
  s("~ ~ cp ~ <rim ~> ~ ~ [cp ~ ~]").gain(0.008).room(0.28)
    .degradeBy(0.95)
    .every(12, x=>x.echo(3, 0.54, 0.19))
    .sometimesBy(0.29,x=>x.crush(5))
]).slow(3.1)