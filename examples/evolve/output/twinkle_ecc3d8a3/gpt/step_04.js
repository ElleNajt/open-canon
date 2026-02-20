// Twinkle Twinkle Little Star — evolved (freshened and reimagined)

setcps(92/60/4)

// Melody: sparkling, more gentle stereo shimmer, increased tremolo, rare octave leaps
$: note("c4 c4 g4 g4 a4 a4 <g4 g5> ~ f4 f4 e4 e4 d4 d4 <c4 c5> ~ g4 g4 f4 f4 e4 e4 d4 ~ g4 g4 f4 f4 e4 e4 d4 ~ c4 c4 g4 g4 a4 a4 <g4 g5> ~ f4 f4 e4 e4 d4 d4 <c4 c5> ~")
  .sound("triangle")
  .gain(0.82)
  .pan(sine.range(0.18,0.82).slow(11))
  .room(0.27).size(0.33)
  .lpf(sine.range(970, 3600).slow(16))
  .tremolo(0.16).tremolosync(5)
  .delay(0.14)
  .delayfeedback(0.29)
  .every(6, x=>x.rev())

// Piano harmony: deeper chords, extra color, more swing, rare reversals
$: note("<c3 e3 g3> <g3 b3 d4> <f3 a3 d4> <eb3 g3 c4> <c4 f4 a4> <g4 b4 e4> <a3 c4 f4>").sound("piano")
  .gain(0.54)
  .hold(0.92)
  .sustain(0.23)
  .room(0.41).size(0.38)
  .swing(0.22)
  .slow(7)
  .sometimes(x=>x.rev())

// Bass: gentle movement with subtle up-glide, more filter morphing
$: note("c2 ~ g2 ~ f2 ~ c2 ~").sound("sine")
  .gain(0.39)
  .attack(0.021).decay(0.13).release(0.26)
  .vowel("<u o e a>".slow(13))
  .room(0.21).size(0.46)
  .lpf(sine.range(280, 900).slow(19))
  .slide(0.4)
  .slow(4)

// Percussion: more syncopation for hats, gentle random dropouts, rare clap echo
$: stack([
  s("bd ~ ~ ~").gain(0.13).room(0.13),
  s("~ ~ sn ~").gain(0.19).room(0.29),
  s("[hh ~ hh] [~ oh] [hh hh] [~ hh]").gain(0.10).room(0.14).crush(15)
    .pan(sine.range(0.13,0.87).slow(4))
    .degradeBy(0.13),
  s("~ ~ ~ cp").gain(0.07).room(0.22)
    .every(4, x=>x.echo(2, 0.16, 0.19))
]).slow(2)