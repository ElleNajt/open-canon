samples('shabda/speech/en-GB/f:forever,aria,remember,listen,breathe'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari,kokoro'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(42/60/4)

// Variation XXXIV: 3:58pm. The letter is sealed. Light has gone amber.
// G minor has tilted — a Picardy third is coming but hasn't arrived yet,
// the way forgiveness is coming but hasn't arrived. The cello has
// climbed into its tenor register, almost vocal. The organ has
// dissolved into open fifths — Pärt, not Fauré now. "Hikari" — light —
// replaces "kokoro", because what returns at dusk is not the heart
// but the slant of light across the floorboards. The bell is closer.
// And underneath: a low pulse, felt more than heard, like someone
// on the floor below moving a chair.

// Cello — risen into its singing register, the letter read aloud
$: note("<d4 f4 g4 bb4 a4 g4 f4 d4 ~ c4 d4 eb4 d4 ~>").slow(13)
  .sound("sawtooth")
  .lpf(sine.range(600, 2200).slow(9)).lpq(3)
  .attack(0.8).release(3.5)
  .gain(0.17).room(0.88)

// Open fifths — Pärt tintinnabuli, bodiless and bright
$: note("<[g2,d3] [f2,c3] [eb2,bb2] [d2,a2]>").slow(16)
  .sound("triangle")
  .lpf(1200).attack(3).release(5)
  .gain(0.11).room(0.8)

// Hikari — light, slanting across the room
$: s("~ ~ hikari ~ ~ ~ ~ hikari ~ ~ ~ ~").slow(10)
  .speed(0.92).gain(0.16)
  .hpf(500).room(0.92).delay(0.35)

// Church bell — closer now, a minor third added (b4 + d5)
$: note("<bb4 d5>").struct("1 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~").slow(14)
  .sound("sine")
  .attack(0.01).release(6).decay(3.5)
  .gain(0.2).room(0.95)

// Floorboard pulse — someone below, moving a chair
$: s("bd ~ ~ ~ ~ ~ ~ ~").slow(6)
  .lpf(90).gain(0.24).room(0.4)
  .attack(0.02).release(0.8)