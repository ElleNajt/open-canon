samples('shabda/speech/en-GB/f:forever,aria,remember,listen,breathe'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari,kokoro,tsuki'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(40/60/4)

// Variation L: 7:21pm. The limping 7 has straightened — not into
// meter, but into a long exhalation. Something broke at fifty:
// the music-box spring finally snapped, and in its absence a
// human voice took up the minor-third sigh. The cello is gone.
// The heartbeat has slowed and widened — a single thud, answered
// by its own echo from across the room. The drone rose a fourth
// to F, and for the first time in hours, there is a major third
// somewhere in the harmony — A natural, tentative, like daylight
// reaching a shuttered window. "hikari" — light — spoken twice,
// the second time softer, as if the word itself were fading.

// Exhalation — the 7 unfurled into 5, slow tide
$: note("<[f3 a3] [c4 ~ ~] [g3 ~] [a3 c4] [~ f3]>").slow(7)
  .sound("triangle")
  .attack(0.8).release(2.5)
  .lpf(sine.range(700, 1900).slow(13)).gain(0.14)

// Drone — risen to F, breathing
$: note("<f2 f2 c3 f2>").slow(15)
  .sound("sawtooth")
  .attack(5).release(7)
  .lpf(380).gain(0.15).pan(0.55)

// Human sigh — replacing the broken music-box
$: s("breathe:1 ~ ~ ~ ~ ~ ~ breathe ~ ~ ~").slow(12)
  .speed(0.7).gain(0.12)
  .lpf(2200).room(0.85).pan(sine.range(0.35, 0.7).slow(17))

// Single thud and its distant answer
$: s("~ ~ rim ~ ~ ~ ~ ~ ~ ~ rim:2 ~ ~ ~ ~ ~").slow(6)
  .gain(0.13).lpf(900).room(0.7).delay(0.4).dt(0.666)

// hikari — light, spoken twice, second time fading
$: s("~ ~ ~ ~ hikari ~ ~ ~ ~ ~ ~ ~ ~ hikari ~ ~ ~ ~ ~ ~ ~ ~").slow(16)
  .speed("<0.8 0.65>").gain("<0.14 0.08>")
  .lpf(1600).room(0.95).pan(0.5)

// Tentative daylight — high A, the first major third in hours
$: note("a5").struct("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ x ~ ~ ~ ~").slow(8)
  .sound("sine")
  .attack(0.5).release(3).gain(0.09).room(0.9)