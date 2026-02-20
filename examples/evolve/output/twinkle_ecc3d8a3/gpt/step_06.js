// Twinkle Twinkle Little Star — evolved again (dreamlike bloom and hushed depth)

setcps(92/60/4)

// Melody: breathier, gentle tremolos swirl, bright ring on peaks, delays float
$: note("c4 c4 g4 g4 a4 a4 <g4 b4 g5> ~ f4 f4 e4 e4 d4 d4 <c4 c5> ~ g4 g4 f4 f4 e4 e4 d4 ~ g4 g4 f4 f4 e4 e4 d4 ~ c4 c4 g4 g4 a4 a4 <g4 b4 g5> ~ f4 f4 e4 e4 d4 d4 <c4 c5> ~")
  .sound("triangle")
  .gain(0.78)
  .pan(sine.range(0.17,0.83).slow(15))
  .room(0.32).size(0.5)
  .lpf(sine.range(800, 3500).slow(19))
  .tremolo(0.18).tremolosync(6.5)
  .delay(0.22)
  .delayfeedback(0.37)
  .detune(sine.range(-11,12).slow(9))
  .ring(0.16).ringf(840).sometimes(x=>x.ring(0.33).ringf(1120))
  .every(8, x=>x.palindrome())
  .rarely(x=>x.rev())

// Piano harmony: hushed floor, rare wide voicing shimmer, gentle swells
$: note("<c3 g3 e4> <g3 d4 b3> <f3 d4 a3> <eb3 bb3 g3> <c4 a4 f4> <g4 e4 b4> <a3 f4 c4>").sound("piano")
  .gain(0.43)
  .hold(1.19)
  .sustain(0.33)
  .room(0.58).size(0.61)
  .slow(7)
  .every(6, x=>x.rev())
  .sometimesBy(0.17, x=>x.palindrome())
  .sometimesBy(0.1, x=>x.lpf(3100))

// Bass: blurred vowels bloom, touch more pulse, rare gentle overdrive
$: note("c2 ~ g2 ~ f2 ~ c2 ~").sound("sine")
  .gain(0.32)
  .attack(0.024).decay(0.13).release(0.31)
  .vowel("<u o a e>".slow(21))
  .room(0.21).size(0.58)
  .lpf(sine.range(140, 610).slow(23))
  .slide(0.55)
  .sometimesBy(0.2, x=>x.drive(0.09))
  .slow(4)

// Percussion: hats flicker a little softer, rim more buried, rare delayed snare, hats pulse wider
$: stack([
  s("bd ~ ~ ~").gain(0.13).room(0.12),
  s("~ ~ sn ~").gain(0.18).room(0.35)
    .every(8,x=>x.rev())
    .every(12, x=>x.delay(0.33).delayfeedback(0.41)),
  s("[hh ~ hh ~] [oh ~ ~ ~] [hh hh ~ hh]").gain(0.077).room(0.18).crush(17)
    .pan(sine.range(0.04,0.91).slow(8))
    .degradeBy(0.22)
    .every(3,x=>x.rev()),
  s("~ ~ ~ cp ~ rim").gain(0.05).room(0.20)
    .every(9, x=>x.echo(2, 0.23, 0.18))
]).slow(2)