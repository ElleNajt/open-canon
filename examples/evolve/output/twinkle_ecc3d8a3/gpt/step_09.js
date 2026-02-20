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
    .every(5,x=>x.rev()),
  
  // Shimmer: triangle glimmers, sometimes slips into palindrome, soft shape
  note("c5 c5 g5 g5 a5 a5 <g5 b5 g6> ~ f5 f5 e5 e5 d5 d5 <c5 c6> ~")
    .sound("triangle")
    .gain(0.199)
    .pan(sine.range(0.18,0.96).slow(23))
    .room(0.27).size(0.81)
    .lpf(1770)
    .delay(0.36)
    .delayfeedback(0.27)
    .sometimes(x=>x.palindrome())
]).slow(1)

// Piano harmony: chords shift, let the space in, occasional voicing change, glow from within
$: stack([
  note("<c3 g3 e4> <g3 d4 b3> <f3 d4 a3> ~ <eb3 bb3 g3> <c4 a4 f4> <g4 e4 b4> ~ <a3 f4 c4>").sound("piano")
    .gain(0.27)
    .hold(1.3)
    .sustain(0.24)
    .room(0.57).size(0.81)
    .slow(7)
    .sometimes(x=>x.palindrome())
    .sometimesBy(0.23, x=>x.lpf(1380)),
  
  note("<c4 e4 g4> <e4 g4 c5>").sound("piano")
    .gain(0.18)
    .hold(2)
    .sustain(0.14)
    .room(0.96).size(0.79)
    .every(4, x=>x.rev())
    .slow(14)
])

// Bass: gentle murmur, rare fifth or sub-octave, vowels more nocturnal, slight delay bloom, deeper slides
$: note("c2 ~ g2 ~ f2 ~ <c2 g1> ~").sound("sine")
  .gain(0.15)
  .attack(0.018).decay(0.12).release(0.38)
  .vowel("<u o a e o a>".slow(16))
  .room(0.12).size(0.42)
  .lpf(sine.range(72, 370).slow(21))
  .slide(0.67)
  .delay(0.15)
  .delayfeedback(0.23)
  .sometimesBy(0.19, x=>x.drive(0.19))
  .sometimesBy(0.14, x=>x.transpose("<-12 0 7>".slow(17)))
  .slow(4.2)

// Percussion: bd and sn even softer, hats lighter and more panned, rim rarely plays ghost notes, more echo but less density
$: stack([
  s("bd ~ ~ ~").gain(0.055).room(0.15).degradeBy(0.29)
    .every(14, x=>x.delay(0.28).delayfeedback(0.17)),
  s("~ ~ sn ~").gain(0.045).room(0.19)
    .degradeBy(0.47)
    .every(8,x=>x.rev())
    .every(7, x=>x.delay(0.51).delayfeedback(0.31)),
  s("[hh ~ hh ~] [oh ~ ~ ~] [hh ~ <oh ~>]") // hats more sparse
    .gain(0.031).room(0.23).crush(13)
    .pan(sine.range(0.02,0.98).slow(8))
    .degradeBy(0.45)
    .every(4,x=>x.rev()),
  s("~ ~ ~ cp ~ ~ <rim ~>").gain(0.017).room(0.23)
    .degradeBy(0.74)
    .every(7, x=>x.echo(2, 0.33, 0.2))
]).slow(2.7)