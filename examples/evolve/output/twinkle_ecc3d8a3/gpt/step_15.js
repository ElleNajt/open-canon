// Twinkle Twinkle Little Star — nocturne unfurls, mystery deepens, subtle shimmer, breath of stars

setcps(86/60/4)

// Melody: sine and triangle entwine, melodies stretch with night air, dreamlike echoes, new motifs glimmer
$: stack([
  note("c4 c4 g4 g4 a4 a4 <g4 b4 g5> ~ f4 f4 e4 e4 d4 d4 <c4 c5> ~ g4 g4 f4 f4 e4 e4 d4 ~ g4 g4 f4 f4 e4 e4 d4 ~ c4 c4 g4 g4 a4 a4 <g4 b4 g5> ~ f4 f4 e4 e4 d4 d4 <c4 c5> ~ e4 ~ ab4 ~ g4 ~")
    .sound("sine")
    .gain(0.37)
    .pan(sine.range(0.11,0.91).slow(9))
    .room(0.67).size(0.95)
    .lpf(sine.range(420, 2320).slow(10))
    .tremolo(0.16).tremolosync(8)
    .delay(0.29)
    .delayfeedback(0.57)
    .detune(sine.range(-13,12).slow(10))
    .ring(0.21).ringf(304)
    .every(5,x=>x.rev())
    .sometimesBy(0.17, x=>x.hpf(550))
    .every(10, x=>x.palindrome())
    .sometimesBy(0.12, x=>x.release(0.44)),

  // Shimmering triangle overlay floats, new motif, gentle high notes linger above
  note("c5 c5 g5 g5 a5 a5 <g5 b5 g6> ~ f5 f5 e5 e5 d5 d5 <c5 c6> ~ <e5 g5 ab5> ~ <bb5 g5 c6> ~ e6 ~")
    .sound("triangle")
    .gain(0.14)
    .pan(sine.range(0.04,0.98).slow(12))
    .room(0.48).size(0.93)
    .lpf(1900)
    .delay(0.23)
    .delayfeedback(0.35)
    .sometimes(x=>x.palindrome())
    .rarely(x=>x.rev())
    .sometimesBy(0.31, x=>x.hpf(970))
    .every(15, x=>x.gain(0.20))
    .sometimes(x=>x.lpf(1320))
])
.slow(1.35)

// Echoed sine motif, reflects distant lights, gently through reverb
$: note("e5 ~ <d5 g5> ~ g5 ~ c6 ~ f5 ~ <bb5 eb5> ~")
    .sound("sine")
    .gain(0.12)
    .pan(0.57)
    .delay(0.41)
    .delayfeedback(0.79)
    .room(0.84).size(0.96)
    .lpf(2230)
    .release(0.39)
    .every(4, x=>x.rev())
    .slow(17.3)

// Piano harmony: widen the sense of space, more passing tones, lean into soft ambiguity
$: stack([
  note("<c3 g3 e4> ~ <ab3 eb4 bg3> <f3 d4 a3> ~ <eb3 bb3 g3> <c4 a4 f4> ~ <g4 e4 b4> <a3 f4 c4> <e3 eb4> ~").sound("piano")
    .gain(0.16)
    .hold(2.25)
    .sustain(0.16)
    .room(0.73).size(0.96)
    .lpf(sine.range(690, 1880).slow(12))
    .slow(7.4)
    .every(6, x=>x.hold(2.76).gain(0.09))
    .sometimes(x=>x.palindrome())
    .sometimesBy(0.16, x=>x.lpf(820)),
  
  note("<c4 e4 g4> ~ <g4 bb4 d5> <e4 g4 c5> ~ <bb3 eb4 g4> ~ <c5 d5 g4> ~").sound("piano")
    .gain(0.10)
    .hold(3.3)
    .sustain(0.13)
    .room(0.92).size(0.77)
    .every(3, x=>x.rev())
    .slow(17)
    .sometimesBy(0.13, x=>x.pan(0.97))
])

// Bass: deepen and blur, rare sudden drops, more shape in sustain, slightly more movement, occasional pulses
$: note("c2 ~ g2 ~ f2 ~ <c2 g1> ~ ~ a1 ~ ab1 ~ <f2 c2> ~ ~ c1 ~ ~ ~ ab1 ~ <g1 e1> ~")
  .sound("sine")
  .gain(0.13)
  .attack(0.03).decay(0.18).release(0.73)
  .vowel("<o u i e a>".slow(22))
  .room(0.46).size(0.91)
  .lpf(sine.range(60, 160).slow(15))
  .slide(1.72)
  .delay(0.25)
  .delayfeedback(0.46)
  .sometimesBy(0.18, x=>x.drive(0.68))
  .sometimesBy(0.09, x=>x.transpose("<-12 0 7 0>".slow(8)))
  .rarely(x=>x.octave(2))
  .every(7, x=>x.distort(0.21))
  .slow(5.2)

// Percussion: sustain delicacy, hats flutter wider, rim+cp even gentler
$: stack([
  s("bd ~ ~ [~ bd] ~").gain(0.022).room(0.13).degradeBy(0.63)
    .every(11, x=>x.delay(0.29).delayfeedback(0.11))
    .sometimesBy(0.25, x=>x.crush(7)),
  s("~ ~ [sn ~ ~] ~ ~").gain(0.012).room(0.11)
    .degradeBy(0.81)
    .every(6,x=>x.rev())
    .every(4, x=>x.delay(0.31).delayfeedback(0.07)),
  s("[hh ~ [oh hh] ~ ~] [~ ~] [hh <oh ~>] [hh ~]")
    .gain(0.017).room(0.52).crush(13)
    .pan(sine.range(0.17,0.96).slow(19))
    .degradeBy(0.62)
    .every(9,x=>x.rev()),
  s("~ ~ cp ~ <rim ~> ~ ~ [cp ~ ~]").gain(0.007).room(0.33)
    .degradeBy(0.97)
    .every(10, x=>x.echo(4, 0.41, 0.16))
    .sometimesBy(0.37,x=>x.crush(4))
])
.slow(3.04)