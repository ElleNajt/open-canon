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
    .detune(sine.range(-7,7).slow(8))
    .ring(0.19).ringf(401)
    .every(7,x=>x.rev())
    .sometimesBy(0.16, x=>x.hpf(690)),

  // Shimmering triangle overlay floats, new motif, gentle high notes linger above
  note("c5 c5 g5 g5 a5 a5 <g5 b5 g6> ~ f5 f5 e5 e5 d5 d5 <c5 c6> ~ <e5 g5 ab5> ~ <bb5 g5 c6> ~")
    .sound("triangle")
    .gain(0.14)
    .pan(sine.range(0.09,0.98).slow(14))
    .room(0.38).size(0.93)
    .lpf(1690)
    .delay(0.29)
    .delayfeedback(0.27)
    .sometimes(x=>x.palindrome())
    .sometimesBy(0.32, x=>x.hpf(1040))
    .every(8, x=>x.gain(0.18))
])
.slow(1.16)

// Piano harmony: widen the sense of space, more passing tones, lean into soft ambiguity
$: stack([
  note("<c3 g3 e4> ~ <ab3 eb4 bg3> <f3 d4 a3> ~ <eb3 bb3 g3> <c4 a4 f4> ~ <g4 e4 b4> <a3 f4 c4> <e3 eb4> ~").sound("piano")
    .gain(0.24)
    .hold(1.8)
    .sustain(0.14)
    .room(0.58).size(0.95)
    .slow(8.8)
    .every(5, x=>x.hold(2.2).gain(0.12))
    .sometimes(x=>x.palindrome())
    .sometimesBy(0.22, x=>x.lpf(950)),
  
  note("<c4 e4 g4> ~ <g4 bb4 d5> <e4 g4 c5> ~ <bb3 eb4 g4>").sound("piano")
    .gain(0.14)
    .hold(2.9)
    .sustain(0.11)
    .room(1).size(0.78)
    .every(4, x=>x.rev())
    .slow(15)
    .sometimesBy(0.08, x=>x.pan(0.91))
])

// Bass: deepen and blur, rare sudden drops, more shape in sustain, slightly more movement
$: note("c2 ~ g2 ~ f2 ~ <c2 g1> ~ ~ a1 ~ ab1 ~ <f2 c2> ~ ~").sound("sine")
  .gain(0.09)
  .attack(0.021).decay(0.19).release(0.54)
  .vowel("<o u i e a>".slow(18))
  .room(0.19).size(0.73)
  .lpf(sine.range(42, 180).slow(14))
  .slide(1.25)
  .delay(0.26)
  .delayfeedback(0.41)
  .sometimesBy(0.22, x=>x.drive(0.41))
  .sometimesBy(0.15, x=>x.transpose("<-12 0 7 0>".slow(17)))
  .sometimesBy(0.18, x=>x.octave(1))
  .slow(5.7)

// Percussion: more negative space, sparser bd/sn, hats brighten, texture flickers at edges
$: stack([
  s("bd ~ ~ ~ ~").gain(0.029).room(0.12).degradeBy(0.60)
    .every(15, x=>x.delay(0.39).delayfeedback(0.19)),
  s("~ ~ [sn ~ ~] ~").gain(0.017).room(0.14)
    .degradeBy(0.71)
    .every(6,x=>x.rev())
    .every(5, x=>x.delay(0.41).delayfeedback(0.16)),
  s("[hh ~ [oh hh] ~ ~] [~ ~] [hh <oh ~>]") // hats flicker gently
    .gain(0.023).room(0.36).crush(15)
    .pan(sine.range(0.11,0.95).slow(15))
    .degradeBy(0.52)
    .every(8,x=>x.rev()),
  s("~ ~ ~ cp ~ <rim ~> ~").gain(0.013).room(0.36)
    .degradeBy(0.91)
    .every(8, x=>x.echo(5, 0.36, 0.28))
]).slow(2.75)