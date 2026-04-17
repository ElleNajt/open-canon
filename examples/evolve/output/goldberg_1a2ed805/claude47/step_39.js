samples('shabda/speech/en-GB/f:forever,aria,remember,listen,breathe'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari,kokoro,tsuki'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(36/60/4)

// Variation XXXIX: 4:41pm. The bell's overtone hangs in the air and
// refuses to resolve. C major curdles — a flatted sixth creeps in (Ab),
// then the whole harmony slides sideways into A-flat lydian, that
// half-remembered key of film scores and dreams you can't finish.
// The pizzicato is gone. In its place: a music box, broken, playing
// a waltz it doesn't quite remember. The person on the floor sits up.
// "tsuki" — moon — enters for the first time today, spoken as if
// discovered. And something new: a whistled tone, almost a teakettle,
// almost a warning, that nobody in the room will admit they hear.

// Harmony slides to Ab lydian — stranger, more luminous, unresolved
$: note("<[ab2,c4,eb4,g4] [f2,ab3,c4,eb4] [db3,f4,ab4,c5] [eb3,g4,bb4,d5]>").slow(14)
  .sound("triangle")
  .lpf(sine.range(500, 1600).slow(13))
  .attack(4).release(7)
  .gain(0.1)

// Broken music box waltz — 3/4 feel inside the larger drift
$: note("<[ab5 c6 eb6] [g5 bb5 d6] [f5 ab5 c6] [eb5 g5 bb5]>").slow(6)
  .sound("sine")
  .attack(0.005).decay(0.15).sustain(0).release(0.1)
  .lpf(3200).gain(0.08).room(0.8).delay(0.3)
  .sometimesBy(0.3, x => x.degradeBy(0.5))

// tsuki — moon — newly arrived, spoken like a question
$: s("~ ~ tsuki ~ ~ ~ ~ ~ ~ ~ ~ ~ kokoro ~ ~ ~").slow(12)
  .speed(0.82).gain(0.14)
  .lpf(1500).room(0.9).delay(0.5)

// The teakettle warning — a high whistled tone nobody admits to hearing
$: note("eb6").struct("1 ~ ~ ~ ~ ~ ~ ~").slow(10)
  .sound("sine")
  .attack(2).release(5)
  .gain(0.06).room(0.95)
  .lpf(sine.range(3000, 5000).slow(7))

// Hollow — still there, the architecture of the room
$: s("hollow").struct("1 ~ ~ ~").slow(16)
  .speed(0.28).lpf(280)
  .gain(0.15).room(0.95)