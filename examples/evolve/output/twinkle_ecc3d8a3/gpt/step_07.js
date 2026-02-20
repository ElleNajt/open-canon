// Twinkle Twinkle Little Star — moonlit hush, a new gentle flow

setcps(84/60/4)

// Melody: softer, delicate sine with ribbons of triangle above, shimmering delays, ghostly reversals
$: stack([
  note("c4 c4 g4 g4 a4 a4 <g4 b4 g5> ~ f4 f4 e4 e4 d4 d4 <c4 c5> ~ g4 g4 f4 f4 e4 e4 d4 ~ g4 g4 f4 f4 e4 e4 d4 ~ c4 c4 g4 g4 a4 a4 <g4 b4 g5> ~ f4 f4 e4 e4 d4 d4 <c4 c5> ~")
    .sound("sine")
    .gain(0.60)
    .pan(sine.range(0.20,0.77).slow(9))
    .room(0.36).size(0.55)
    .lpf(sine.range(650, 3000).slow(13))
    .tremolo(0.11).tremolosync(7)
    .delay(0.28)
    .delayfeedback(0.41)
    .detune(sine.range(-5,7).slow(8))
    .ring(0.10).ringf(620)
    .sometimes(x=>x.rev()),

  // Delicate shimmer, floats an octave up in triangle
  note("c5 c5 g5 g5 a5 a5 <g5 b5 g6> ~ f5 f5 e5 e5 d5 d5 <c5 c6> ~")
    .sound("triangle")
    .gain(0.29)
    .pan(sine.range(0.31,0.95).slow(17))
    .room(0.22).size(0.74)
    .lpf(2700)
    .delay(0.37)
    .delayfeedback(0.19)
    .every(7, x=>x.rev())
]).slow(1)

// Piano harmony: quieter, warm, more open voicing for air, shimmer chord on phrase end
$: stack([
  note("<c3 g3 e4> <g3 d4 b3> <f3 d4 a3> <eb3 bb3 g3> <c4 a4 f4> <g4 e4 b4> <a3 f4 c4>").sound("piano")
    .gain(0.36)
    .hold(1.23)
    .sustain(0.29)
    .room(0.66).size(0.68)
    .slow(8)
    .sometimes(x=>x.palindrome())
    .sometimesBy(0.12, x=>x.lpf(2200)),

  note("<c4 e4 g4>").sound("piano")
    .gain(0.11)
    .hold(1.6)
    .sustain(0.19)
    .room(0.80).size(0.74)
    .every(8, x=>x.palindrome())
    .slow(16)
])

// Bass: even more hushed, subtle slide, vowels sway gently, rare octave drop
$: note("c2 ~ g2 ~ f2 ~ c2 ~").sound("sine")
  .gain(0.21)
  .attack(0.018).decay(0.11).release(0.39)
  .vowel("<u o a e>".slow(17))
  .room(0.13).size(0.41)
  .lpf(sine.range(120, 430).slow(19))
  .slide(0.44)
  .sometimesBy(0.18, x=>x.drive(0.12))
  .sometimesBy(0.07, x=>x.transpose(-12))
  .slow(4)

// Percussion: hats shade wider and softer, ghost rim deeply, snare quieter and sparser, rare echo swirl, sporadic silence
$: stack([
  s("bd ~ ~ ~").gain(0.10).room(0.08).degradeBy(0.16),
  s("~ ~ sn ~").gain(0.13).room(0.28)
    .degradeBy(0.33)
    .every(8,x=>x.rev())
    .every(10, x=>x.delay(0.41).delayfeedback(0.31)),
  s("[hh ~ hh ~] [oh ~ ~ ~] [hh hh ~ hh]").gain(0.059).room(0.16).crush(17)
    .pan(sine.range(0.01,0.97).slow(7))
    .degradeBy(0.35)
    .every(4,x=>x.rev()),
  s("~ ~ ~ cp ~ rim").gain(0.04).room(0.17)
    .degradeBy(0.55)
    .every(7, x=>x.echo(2, 0.29, 0.21))
]).slow(2.2)