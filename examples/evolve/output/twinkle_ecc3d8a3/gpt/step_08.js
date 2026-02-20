// Twinkle Twinkle Little Star — moonlit hush, dusk deepens, gentle transformation

setcps(80/60/4)

// Melody: sine and triangle braid closer, touch ephemeral, melody wraps in subtle delay, more echoes at night’s edge
$: stack([
  note("c4 c4 g4 g4 a4 a4 <g4 b4 g5> ~ f4 f4 e4 e4 d4 d4 <c4 c5> ~ g4 g4 f4 f4 e4 e4 d4 ~ g4 g4 f4 f4 e4 e4 d4 ~ c4 c4 g4 g4 a4 a4 <g4 b4 g5> ~ f4 f4 e4 e4 d4 d4 <c4 c5> ~")
    .sound("sine")
    .gain(0.53)
    .pan(sine.range(0.22,0.82).slow(14))
    .room(0.44).size(0.61)
    .lpf(sine.range(540, 2600).slow(13))
    .tremolo(0.12).tremolosync(5)
    .delay(0.39)
    .delayfeedback(0.51)
    .detune(sine.range(-9,9).slow(7))
    .ring(0.16).ringf(510)
    .every(5,x=>x.rev()),
  
  // Shimmer: triangle glimmers, sometimes slips into palindrome, soft shape
  note("c5 c5 g5 g5 a5 a5 <g5 b5 g6> ~ f5 f5 e5 e5 d5 d5 <c5 c6> ~")
    .sound("triangle")
    .gain(0.23)
    .pan(sine.range(0.21,0.93).slow(19))
    .room(0.31).size(0.78)
    .lpf(1950)
    .delay(0.44)
    .delayfeedback(0.23)
    .sometimes(x=>x.palindrome())
]).slow(1)

// Piano harmony: chords shift, let the space in, occasional voicing change, glow from within
$: stack([
  note("<c3 g3 e4> <g3 d4 b3> <f3 d4 a3> ~ <eb3 bb3 g3> <c4 a4 f4> <g4 e4 b4> ~ <a3 f4 c4>").sound("piano")
    .gain(0.32)
    .hold(1.3)
    .sustain(0.27)
    .room(0.73).size(0.75)
    .slow(8)
    .sometimes(x=>x.palindrome())
    .sometimesBy(0.18, x=>x.lpf(1700)),
  
  note("<c4 e4 g4> <e4 g4 c5>").sound("piano")
    .gain(0.13)
    .hold(1.7)
    .sustain(0.18)
    .room(0.86).size(0.76)
    .every(6, x=>x.rev())
    .slow(16)
])

// Bass: gentle murmur, rare fifth or sub-octave, vowels more nocturnal, slight delay bloom
$: note("c2 ~ g2 ~ f2 ~ <c2 g1> ~").sound("sine")
  .gain(0.18)
  .attack(0.021).decay(0.13).release(0.35)
  .vowel("<u o a e>".slow(20))
  .room(0.09).size(0.36)
  .lpf(sine.range(90, 410).slow(19))
  .slide(0.52)
  .delay(0.13)
  .delayfeedback(0.22)
  .sometimesBy(0.13, x=>x.drive(0.18))
  .sometimesBy(0.10, x=>x.transpose("<-12 0 7>".slow(13)))
  .slow(4)

// Percussion: bd and sn more hushed, hats shimmer/echo more, rim rare, extra ghostly effects
$: stack([
  s("bd ~ ~ ~").gain(0.08).room(0.1).degradeBy(0.23)
    .every(12, x=>x.delay(0.21).delayfeedback(0.17)),
  s("~ ~ sn ~").gain(0.08).room(0.22)
    .degradeBy(0.41)
    .every(10,x=>x.rev())
    .every(6, x=>x.delay(0.48).delayfeedback(0.29)),
  s("[hh ~ hh ~] [oh ~ ~ ~] [hh hh ~ <hh oh>]") // hats now sometimes open
    .gain(0.045).room(0.22).crush(13)
    .pan(sine.range(0,1).slow(10))
    .degradeBy(0.38)
    .every(3,x=>x.rev()),
  s("~ ~ ~ cp ~ <rim ~>").gain(0.03).room(0.19)
    .degradeBy(0.67)
    .every(8, x=>x.echo(3, 0.23, 0.16))
]).slow(2.4)