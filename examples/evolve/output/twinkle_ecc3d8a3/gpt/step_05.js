// Twinkle Twinkle Little Star — evolved (even more organic shimmer and warmth)

setcps(92/60/4)

// Melody: more breath, rare 7th, gentle pitch modulation, shimmer delay, rare whirls
$: note("c4 c4 g4 g4 a4 a4 <g4 b4 g5> ~ f4 f4 e4 e4 d4 d4 <c4 c5> ~ g4 g4 f4 f4 e4 e4 d4 ~ g4 g4 f4 f4 e4 e4 d4 ~ c4 c4 g4 g4 a4 a4 <g4 b4 g5> ~ f4 f4 e4 e4 d4 d4 <c4 c5> ~")
  .sound("triangle")
  .gain(0.76)
  .pan(sine.range(0.18,0.82).slow(13))
  .room(0.29).size(0.36)
  .lpf(sine.range(1100, 3900).slow(19))
  .tremolo(0.15).tremolosync(7)
  .delay(0.18)
  .delayfeedback(0.33)
  .detune(sine.range(-9,14).slow(8))
  .sometimes(x=>x.rev())
  .every(8, x=>x.palindrome())

// Piano harmony: more lift, rare wide voicings, let more ring, swelling space
$: note("<c3 e3 g4> <g3 b3 d4> <f3 a3 d4> <eb3 g3 bb3> <c4 f4 a4> <g4 b4 e4> <a3 c4 f4>").sound("piano")
  .gain(0.49)
  .hold(1.06)
  .sustain(0.29)
  .room(0.51).size(0.47)
  .swing(0.25)
  .slow(7)
  .every(6, x=>x.rev())
  .sometimesBy(0.2, x=>x.palindrome())

// Bass: warm pulse, slower vowel morph, subtle detune on rare notes
$: note("c2 ~ g2 ~ f2 ~ c2 ~").sound("sine")
  .gain(0.36)
  .attack(0.019).decay(0.12).release(0.28)
  .vowel("<u o a e>".slow(23))
  .room(0.28).size(0.61)
  .lpf(sine.range(210, 800).slow(29))
  .slide(0.46)
  .sometimes(x=>x.detune(8))
  .slow(4)

// Percussion: hats swing with more randomness, rare rimshot spice, hats swirl & drop, snare reborn
$: stack([
  s("bd ~ ~ ~").gain(0.12).room(0.12),
  s("~ ~ sn ~").gain(0.19).room(0.33).every(9,x=>x.rev()),
  s("[hh ~ hh ~] [oh ~ ~ ~] [hh hh ~ hh]").gain(0.10).room(0.19).crush(17)
    .pan(sine.range(0.09,0.87).slow(6))
    .degradeBy(0.19)
    .every(4,x=>x.rev()),
  s("~ ~ ~ cp ~ rim").gain(0.07).room(0.26)
    .every(6, x=>x.echo(2, 0.14, 0.26))
]).slow(2)