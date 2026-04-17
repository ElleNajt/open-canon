samples('shabda/speech/en-GB/f:forever,aria,remember'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(52/60/4)

// Variation X: 9:47am. The light has shifted. What was grief has
// become something stranger — curiosity, maybe, or the particular
// clarity that follows a small disaster. The Dorian has tilted
// again, this time toward Lydian: that raised fourth, a door
// opening where there wasn't one. The pedal tone is GONE. In its
// place: a walking bassline, tentative but moving, like choosing
// to leave the kitchen. The descending piano figure has inverted —
// it climbs now, four notes rising in thirds, asking a question
// the morning can't quite answer. "hikari" (light) replaces
// "sayonara"; the bells have become a muted marimba pulse, wooden
// and warm. A single breath sample enters late, like someone
// finally exhaling. The room isn't humming anymore. It's listening.

// Ascending figure — Lydian, the raised 4th glowing
let rise = "<[f4 a4] [c5 e5] [g5 b5] [a5 ~]>"

// Walking bass — tentative steps in F Lydian
let walk = "<f2 c3 a2 e3 g2 d3 f2 b2>"

// Rising question — warm square, a little reedy
$: note(rise).slow(5)
  .sound("square")
  .gain(0.22)
  .lpf(1400).lpq(2)
  .attack(0.02).decay(0.4).sustain(0.2).release(0.5)
  .room(0.5)

// Walking bass — choosing to move
$: note(walk).sound("triangle").slow(4)
  .gain(0.32)
  .lpf(600)
  .attack(0.01).release(0.3)

// Muted marimba pulse — wooden, warm, euclidean against the walk
$: note("<f5 c6 a5 e6 g5>").sound("sine")
  .euclid(7, 12).fast(2)
  .gain(0.14)
  .attack(0.001).decay(0.15).sustain(0).release(0.1)
  .delay(0.3).dt(0.375)

// Hikari — light, drifting, panned
$: s("hikari").slow(13)
  .speed(0.82)
  .gain(0.28)
  .pan(sine.range(0.25, 0.75).slow(11))
  .room(0.75)

// A late breath — someone exhaling into the new room
$: s("breathe").slow(15)
  .speed(0.7)
  .gain(0.35)
  .hpf(400)
  .room(0.85)