// Twinkle Twinkle Little Star — nocturne unfurls, mystery deepens, subtle shimmer, breath of stars

setcps(84/60/4)

// Melody: sine and triangle entwine, melodies stretch with night air, dreamlike echoes
$: stack([
  note("c4 c4 g4 g4 a4 a4 <g4 b4 g5> ~ f4 f4 e4 e4 d4 d4 <c4 c5> ~ g4 g4 f4 f4 e4 e4 d4 ~ g4 g4 f4 f4 e4 e4 d4 ~ c4 c4 g4 g4 a4 a4 <g4 b4 g5> ~ f4 f4 e4 e4 d4 d4 <c4 c5> ~")
    .sound("sine")
    .gain(0.4)
    .pan(sine.range(0.22,0.81).slow(14))
    .room(0.59).size(0.77)
    .lpf(sine.range(410, 2160).slow(15))
    .tremolo(0.17).tremolosync(8)
    .delay(0.39)
    .delayfeedback(0.66)
    .detune(sine.range(-9,9).slow(12))
    .ring(0.18).ringf(400)
    .every(7,x=>x.rev())
    .sometimesBy(0.19, x=>x.hpf(560)),

  // Shimmering triangle overlay floats, glistening high notes wander, sometimes drift away on breeze
  note("c5 c5 g5 g5 a5 a5 <g5 b5 g6> ~ f5 f5 e5 e5 d5 d5 <c5 c6> ~")
    .sound("triangle")
    .gain(0.16)
    .pan(sine.range(0.13,0.99).slow(18))
    .room(0.34).size(0.91)
    .lpf(1520)
    .delay(0.33)
    .delayfeedback(0.32)
    .sometimes(x=>x.palindrome())
    .sometimesBy(0.29, x=>x.hpf(880))
    .every(10, x=>x.gain(0.26))
]).slow(1.11)

// Piano harmony: less resolution between chords, unexpected voicings, luminous haze
$: stack([
  note("<c3 g3 e4> ~ <ab3 eb4 bg3> <f3 d4 a3> ~ <eb3 bb3 g3> <c4 a4 f4> ~ <g4 e4 b4> <a3 f4 c4>").sound("piano")
    .gain(0.28)
    .hold(1.57)
    .sustain(0.19)
    .room(0.61).size(0.87)
    .slow(8.2)
    .every(6, x=>x.hold(2.5).gain(0.17))
    .sometimes(x=>x.palindrome())
    .sometimesBy(0.27, x=>x.lpf(1200)),
  
  note("<c4 e4 g4> ~ <g4 bb4 d5> <e4 g4 c5>").sound("piano")
    .gain(0.12)
    .hold(2.6)
    .sustain(0.13)
    .room(1).size(0.83)
    .every(5, x=>x.rev())
    .slow(16)
    .sometimesBy(0.11, x=>x.pan(0.93))
])

// Bass: deeper, more spaced, breaths between notes, warm vowel drift, slides and rare octave drops
$: note("c2 ~ g2 ~ f2 ~ <c2 g1> ~ ~ a1 ~ ~ <f2 c2> ~").sound("sine")
  .gain(0.11)
  .attack(0.025).decay(0.13).release(0.47)
  .vowel("<o u e i a>".slow(21))
  .room(0.2).size(0.64)
  .lpf(sine.range(44, 210).slow(13))
  .slide(1.09)
  .delay(0.22)
  .delayfeedback(0.38)
  .sometimesBy(0.2, x=>x.drive(0.29))
  .sometimesBy(0.11, x=>x.transpose("<-12 0 7 0>".slow(14)))
  .sometimesBy(0.13, x=>x.octave(1))
  .slow(5.25)

// Percussion: dissolve further, hush and scatter, hats cluster in gentle bursts, rim/cp linger in memory
$: stack([
  s("bd ~ ~ ~").gain(0.033).room(0.1).degradeBy(0.53)
    .every(17, x=>x.delay(0.32).delayfeedback(0.23)),
  s("~ [~ sn] ~ ~").gain(0.021).room(0.18)
    .degradeBy(0.63)
    .every(6,x=>x.rev())
    .every(7, x=>x.delay(0.51).delayfeedback(0.19)),
  s("[hh ~ ~ [oh hh] ~ ~] [~ ~ ~] [hh ~ <oh ~>]") // hats dissolve/cluster
    .gain(0.018).room(0.33).crush(12)
    .pan(sine.range(0.07,0.91).slow(13))
    .degradeBy(0.56)
    .every(9,x=>x.rev()),
  s("~ ~ ~ cp ~ ~ <rim ~> ~ ~").gain(0.011).room(0.31)
    .degradeBy(0.9)
    .every(8, x=>x.echo(4, 0.38, 0.39))
]).slow(2.7)