// Twinkle Twinkle Little Star — nocturne unfurls, mystery deepens, subtle shimmer, breath of stars

setcps(84/60/4)

// Melody: sine and triangle entwine, melodies stretch with night air, dreamlike echoes, new motifs glimmer
$: stack([
  note("c4 c4 g4 g4 a4 a4 <g4 b4 g5> ~ f4 f4 e4 e4 d4 d4 <c4 c5> ~ g4 g4 f4 f4 e4 e4 d4 ~ g4 g4 f4 f4 e4 e4 d4 ~ c4 c4 g4 g4 a4 a4 <g4 b4 g5> ~ f4 f4 e4 e4 d4 d4 <c4 c5> ~ e4 ~ ab4 ~ g4 ~")
    .sound("sine")
    .gain(0.35)
    .pan(sine.range(0.12,0.88).slow(11))
    .room(0.72).size(0.98)
    .lpf(sine.range(420, 2440).slow(14))
    .tremolo(0.17).tremolosync(8)
    .delay(0.26)
    .delayfeedback(0.64)
    .detune(sine.range(-16,15).slow(13))
    .ring(0.26).ringf(290)
    .every(5,x=>x.rev())
    .sometimesBy(0.21, x=>x.hpf(650))
    .every(8, x=>x.palindrome())
    .sometimesBy(0.14, x=>x.release(0.52)),

  // Shimmering triangle overlay floats, new motif, gentle high notes linger above
  note("c5 c5 g5 g5 a5 a5 <g5 b5 g6> ~ f5 f5 e5 e5 d5 d5 <c5 c6> ~ <e5 g5 ab5> ~ <bb5 g5 c6> ~ e6 ~")
    .sound("triangle")
    .gain(0.18)
    .pan(sine.range(0.02,0.99).slow(13))
    .room(0.59).size(0.97)
    .lpf(1670)
    .delay(0.30)
    .delayfeedback(0.39)
    .sometimes(x=>x.palindrome())
    .rarely(x=>x.rev())
    .sometimesBy(0.27, x=>x.hpf(1130))
    .every(7, x=>x.gain(0.23).lpf(970))
    .sometimes(x=>x.lpf(1200))
])
.slow(1.36)

// Echoed sine motif, reflects distant lights, gently through reverb, growing more vaporous
$: note("e5 ~ <d5 g5> ~ g5 ~ c6 ~ f5 ~ <bb5 eb5> ~ ab5 ~")
    .sound("sine")
    .gain(0.13)
    .pan(0.69)
    .delay(0.44)
    .delayfeedback(0.92)
    .room(0.94).size(0.98)
    .lpf(2120)
    .release(0.46)
    .every(3, x=>x.rev())
    .slow(20.2)

// Piano harmony: widen the sense of space, more passing tones, ambiguous textures emerge
$: stack([
  note("<c3 g3 e4> ~ <ab3 eb4 bg3> <f3 d4 a3> ~ <eb3 bb3 g3> <c4 a4 f4> ~ <g4 e4 b4> <a3 f4 c4> <e3 eb4> ~").sound("piano")
    .gain(0.12)
    .hold(2.8)
    .sustain(0.11)
    .room(0.83).size(0.99)
    .lpf(sine.range(690, 1600).slow(14))
    .slow(9.4)
    .every(6, x=>x.hold(3.18).gain(0.085))
    .sometimes(x=>x.palindrome())
    .sometimesBy(0.13, x=>x.lpf(700)),
  
  note("<c4 e4 g4> ~ <g4 bb4 d5> <e4 g4 c5> ~ <bb3 eb4 g4> ~ <c5 d5 g4> ~").sound("piano")
    .gain(0.089)
    .hold(3.96)
    .sustain(0.09)
    .room(0.93).size(0.85)
    .every(3, x=>x.rev())
    .slow(18.2)
    .sometimesBy(0.079, x=>x.pan(0.82))
])

// Bass: deepen and blur, rare sudden pitches, more pulse, subtler shape and movement
$: note("c2 ~ g2 ~ f2 ~ <c2 g1> ~ ~ a1 ~ ab1 ~ <f2 c2> ~ ~ c1 ~ ~ ~ ab1 ~ <g1 e1> ~")
  .sound("sine")
  .gain(0.10)
  .attack(0.032).decay(0.2).release(0.78)
  .vowel("<o u i e a>".slow(16))
  .room(0.54).size(0.93)
  .lpf(sine.range(46, 148).slow(19))
  .slide(1.85)
  .delay(0.23)
  .delayfeedback(0.42)
  .sometimesBy(0.13, x=>x.drive(0.49))
  .sometimesBy(0.19, x=>x.transpose("<-12 0 5 0>".slow(8)))
  .rarely(x=>x.octave(2))
  .every(6, x=>x.distort(0.26))
  .every(13, x=>x.crush(12))
  .slow(4.1)

// Percussion: hats flicker, cr softer, gentle delay, more ghost notes, rare forward surges
$: stack([
  s("bd ~ [bd ~] ~ [~ bd] ~").gain(0.019).room(0.14).degradeBy(0.54)
    .every(9, x=>x.delay(0.31).delayfeedback(0.13))
    .sometimesBy(0.29, x=>x.crush(8)),
  s("~ sn ~ [sn ~ ~] ~ ~ [sn ~]").gain(0.011).room(0.15)
    .degradeBy(0.72)
    .every(5,x=>x.rev())
    .every(4, x=>x.delay(0.26).delayfeedback(0.11)),
  s("[hh ~ [oh hh] ~ ~] [~ ~] [hh <oh ~>] [hh ~ cr]").gain(0.018).room(0.58).crush(11)
    .pan(sine.range(0.06,0.99).slow(21))
    .degradeBy(0.58)
    .every(8,x=>x.rev()),
  s("~ ~ cp ~ <rim ~> ~ ~ [cp ~ ~] ~ [rim ~]").gain(0.006).room(0.31)
    .degradeBy(0.93)
    .every(8, x=>x.echo(5, 0.52, 0.20))
    .sometimesBy(0.41,x=>x.crush(6))
])
.slow(2.64)