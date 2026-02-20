// Twinkle Twinkle Little Star — evolved (freshened)

setcps(88/60/4)

// Melody: sparkling, plus bit of stereo movement & gentle modulation
$: note("c4 c4 g4 g4 a4 a4 g4 ~ f4 f4 e4 e4 d4 d4 c4 ~ g4 g4 f4 f4 e4 e4 d4 ~ g4 g4 f4 f4 e4 e4 d4 ~ c4 c4 g4 g4 a4 a4 g4 ~ f4 f4 e4 e4 d4 d4 c4 ~")
  .sound("triangle")
  .gain(0.8)
  .pan(sine.range(0.25,0.75).slow(8))
  .room(0.23).size(0.29)
  .lpf(sine.range(800, 3600).slow(12))
  .tremolo(0.1).tremolosync(7)
  .delay(0.13)
  .delayfeedback(0.25)

// Piano harmony: more warmth, some passing chords, further swing
$: note("<c3 e3> <g3 c4> <f3 a3> <eb3 g3> <c4 f4> <g4 b4> <a3 c4>").sound("piano")
  .gain(0.54)
  .hold(0.98)
  .room(0.37).size(0.36)
  .sustain(0.21)
  .swing(0.19)
  .slow(8)

// Evolving sine bass, subtle vowel filter, reverb bloom
$: note("c2 ~ g2 ~ f2 ~ c2 ~").sound("sine")
  .gain(0.36)
  .attack(0.018).decay(0.13).release(0.23)
  .vowel("<u o e a>".slow(10))
  .room(0.19).size(0.39)
  .slow(4)

// Percussion: occasional clap, more motion in hats, gentle crush
$: stack([
  s("bd ~ ~ ~").gain(0.12).room(0.13),
  s("~ ~ sn ~").gain(0.16).room(0.26),
  s("[hh ~] [~ hh] [oh ~] [~ hh]").gain(0.09).room(0.11).crush(14).pan(sine.range(0,1).slow(4)),
  s("~ ~ ~ cp").gain(0.06).room(0.2).every(3, x=>x.fast(2))
]).slow(2)