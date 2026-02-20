// Twinkle Twinkle Little Star — moonlit hush, dusk deepens, gentle transformation

setcps(84/60/4)

// Melody: sine and triangle braid closer, touch ephemeral, melody wraps in subtle delay, more echoes at night’s edge
$: stack([
  note("c4 c4 g4 g4 a4 a4 <g4 b4 g5> ~ f4 f4 e4 e4 d4 d4 <c4 c5> ~ g4 g4 f4 f4 e4 e4 d4 ~ g4 g4 f4 f4 e4 e4 d4 ~ c4 c4 g4 g4 a4 a4 <g4 b4 g5> ~ f4 f4 e4 e4 d4 d4 <c4 c5> ~")
    .sound("sine")
    .gain(0.47)
    .pan(sine.range(0.17,0.87).slow(16))
    .room(0.51).size(0.68)
    .lpf(sine.range(540, 2300).slow(12))
    .tremolo(0.13).tremolosync(6)
    .delay(0.32)
    .delayfeedback(0.56)
    .detune(sine.range(-7,7).slow(9))
    .ring(0.13).ringf(380)
    .every(5,x=>x.rev())
    .sometimesBy(0.13, x=>x.hpf(420)),
  
  // Shimmer: triangle glimmers, sometimes slips into palindrome, soft shape, deeper echoes at night
  note("c5 c5 g5 g5 a5 a5 <g5 b5 g6> ~ f5 f5 e5 e5 d5 d5 <c5 c6> ~")
    .sound("triangle")
    .gain(0.199)
    .pan(sine.range(0.18,0.96).slow(23))
    .room(0.27).size(0.81)
    .lpf(1770)
    .delay(0.36)
    .delayfeedback(0.27)
    .sometimes(x=>x.palindrome())
    .sometimesBy(0.21, x=>x.hpf(720))
    .every(8, x=>x.gain(0.29))
]).slow(1)

// Piano harmony: chords shift, let the space in, occasional voicing change, glow from within, subtle filters
$: stack([
  note("<c3 g3 e4> <g3 d4 b3> <f3 d4 a3> ~ <eb3 bb3 g3> <c4 a4 f4> <g4 e4 b4> ~ <a3 f4 c4>").sound("piano")
    .gain(0.31)
    .hold(1.3)
    .sustain(0.21)
    .room(0.57).size(0.81)
    .slow(7)
    .sometimes(x=>x.palindrome())
    .sometimesBy(0.23, x=>x.lpf(1380))
    .every(6, x=>x.hold(2.1).gain(0.21)),
  
  note("<c4 e4 g4> <e4 g4 c5>").sound("piano")
    .gain(0.18)
    .hold(2)
    .sustain(0.14)
    .room(0.96).size(0.79)
    .every(4, x=>x.rev())
    .slow(14)
    .sometimesBy(0.16, x=>x.pan(0.82))
])

// Bass: gentle murmur, rare fifth or sub-octave, vowels more nocturnal, slight delay bloom, deeper slides, rare octave sweeps
$: note("c2 ~ g2 ~ f2 ~ <c2 g1> ~").sound("sine")
  .gain(0.15)
  .attack(0.018).decay(0.12).release(0.38)
  .vowel("<u o a e o a>".slow(16))
  .room(0.17).size(0.52)
  .lpf(sine.range(56, 340).slow(17))
  .slide(0.73)
  .delay(0.17)
  .delayfeedback(0.28)
  .sometimesBy(0.19, x=>x.drive(0.21))
  .sometimesBy(0.14, x=>x.transpose("<-12 0 7>".slow(17)))
  .sometimesBy(0.09, x=>x.octave(1))
  .slow(4.2)

// Percussion: bd and sn softer still, hats lighter with rare offbeat clusters, rim rare ghost, cp echoes
$: stack([
  s("bd ~ ~ ~").gain(0.044).room(0.13).degradeBy(0.41)
    .every(14, x=>x.delay(0.28).delayfeedback(0.21)),
  s("~ [~ sn] ~ ~").gain(0.035).room(0.24)
    .degradeBy(0.52)
    .every(8,x=>x.rev())
    .every(5, x=>x.delay(0.61).delayfeedback(0.33)),
  s("[hh ~ ~ hh ~ <hh hh> ~] [oh ~ ~ ~] [hh ~ <oh ~>]") // hats more sparse and softly clustered
    .gain(0.027).room(0.29).crush(13)
    .pan(sine.range(0.01,0.99).slow(11))
    .degradeBy(0.49)
    .every(8,x=>x.rev()),
  s("~ ~ ~ cp ~ ~ <rim ~>").gain(0.011).room(0.29)
    .degradeBy(0.82)
    .every(7, x=>x.echo(3, 0.33, 0.29))
]).slow(2.95)