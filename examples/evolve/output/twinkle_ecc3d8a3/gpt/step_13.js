// Twinkle Twinkle Little Star — nocturne unfurls, mystery deepens, subtle shimmer, breath of stars

setcps(84/60/4)

// Melody: sine and triangle entwine, melodies stretch with night air, dreamlike echoes, new motifs glimmer
$: stack([
  note("c4 c4 g4 g4 a4 a4 <g4 b4 g5> ~ f4 f4 e4 e4 d4 d4 <c4 c5> ~ g4 g4 f4 f4 e4 e4 d4 ~ g4 g4 f4 f4 e4 e4 d4 ~ c4 c4 g4 g4 a4 a4 <g4 b4 g5> ~ f4 f4 e4 e4 d4 d4 <c4 c5> ~ e4 ~ ab4 ~ g4 ~")
    .sound("sine")
    .gain(0.38)
    .pan(sine.range(0.18,0.85).slow(11))
    .room(0.62).size(0.82)
    .lpf(sine.range(380, 2320).slow(15))
    .tremolo(0.13).tremolosync(7)
    .delay(0.36)
    .delayfeedback(0.55)
    .detune(sine.range(-11,11).slow(12))
    .ring(0.23).ringf(451)
    .every(7,x=>x.rev())
    .sometimesBy(0.17, x=>x.hpf(800))
    .every(14, x=>x.palindrome()),

  // Shimmering triangle overlay floats, new motif, gentle high notes linger above
  note("c5 c5 g5 g5 a5 a5 <g5 b5 g6> ~ f5 f5 e5 e5 d5 d5 <c5 c6> ~ <e5 g5 ab5> ~ <bb5 g5 c6> ~ e6 ~")
    .sound("triangle")
    .gain(0.18)
    .pan(sine.range(0.05,0.98).slow(16))
    .room(0.41).size(0.97)
    .lpf(1820)
    .delay(0.32)
    .delayfeedback(0.33)
    .sometimes(x=>x.palindrome())
    .rarely(x=>x.rev())
    .sometimesBy(0.35, x=>x.hpf(1200))
    .every(13, x=>x.gain(0.23))
])
.slow(1.18)

// Piano harmony: widen the sense of space, more passing tones, lean into soft ambiguity
$: stack([
  note("<c3 g3 e4> ~ <ab3 eb4 bg3> <f3 d4 a3> ~ <eb3 bb3 g3> <c4 a4 f4> ~ <g4 e4 b4> <a3 f4 c4> <e3 eb4> ~").sound("piano")
    .gain(0.21)
    .hold(1.8)
    .sustain(0.16)
    .room(0.58).size(0.97)
    .lpf(sine.range(640, 1950).slow(12))
    .slow(8.8)
    .every(5, x=>x.hold(2.25).gain(0.11))
    .sometimes(x=>x.palindrome())
    .sometimesBy(0.19, x=>x.lpf(900)),
  
  note("<c4 e4 g4> ~ <g4 bb4 d5> <e4 g4 c5> ~ <bb3 eb4 g4> ~ <c5 d5 g4> ~").sound("piano")
    .gain(0.15)
    .hold(3.2)
    .sustain(0.14)
    .room(0.99).size(0.86)
    .every(4, x=>x.rev())
    .slow(15)
    .sometimesBy(0.11, x=>x.pan(0.92))
])

// Bass: deepen and blur, rare sudden drops, more shape in sustain, slightly more movement, occasional pulses
$: note("c2 ~ g2 ~ f2 ~ <c2 g1> ~ ~ a1 ~ ab1 ~ <f2 c2> ~ ~ c1 ~ ~ ~ ab1 ~ <g1 e1> ~")
  .sound("sine")
  .gain(0.12)
  .attack(0.02).decay(0.21).release(0.57)
  .vowel("<o u i e a>".slow(23))
  .room(0.25).size(0.81)
  .lpf(sine.range(48, 142).slow(17))
  .slide(1.52)
  .delay(0.23)
  .delayfeedback(0.36)
  .sometimesBy(0.17, x=>x.drive(0.53))
  .sometimesBy(0.12, x=>x.transpose("<-12 0 5 0>".slow(15)))
  .rarely(x=>x.octave(2))
  .every(11, x=>x.distort(0.19))
  .slow(6)

// Percussion: more negative space, sparser bd/sn, hats brighten, texture flickers at edges, delicate rim/oh/flutter
$: stack([
  s("bd ~ ~ [~ bd] ~").gain(0.027).room(0.09).degradeBy(0.61)
    .every(14, x=>x.delay(0.35).delayfeedback(0.15)),
  s("~ ~ [sn ~ ~] ~ ~").gain(0.018).room(0.17)
    .degradeBy(0.74)
    .every(7,x=>x.rev())
    .every(5, x=>x.delay(0.42).delayfeedback(0.17)),
  s("[hh ~ [oh hh] ~ ~] [~ ~] [hh <oh ~>] [hh ~]") // hats flicker gently
    .gain(0.024).room(0.38).crush(14)
    .pan(sine.range(0.11,0.97).slow(17))
    .degradeBy(0.54)
    .every(6,x=>x.rev()),
  s("~ ~ cp ~ <rim ~> ~ ~ [cp ~ ~]").gain(0.012).room(0.33)
    .degradeBy(0.93)
    .every(9, x=>x.echo(4, 0.41, 0.23))
    .sometimesBy(0.31,x=>x.crush(8))
]).slow(3.1)