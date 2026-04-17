samples('shabda/speech/en-GB/f:forever,aria,remember,listen,breathe'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari,kokoro,tsuki'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(36/60/4)

// Variation XXXVIII: 4:33pm. Something shifts. The person on the floor
// tilts their head — a bell is ringing somewhere, maybe three streets
// away, maybe only in memory. The harmony pivots suddenly to C major
// (a deceptive resolution, the wrong door opening into the right room).
// The cello is gone. In its place: a plucked pizzicato figure, almost
// playful, as if grief had briefly forgotten itself. "kokoro" — heart —
// repeats like a pulse. And beneath it all, a low drone of "hollow"
// stretched so long it becomes architecture, not voice.

// Pivot to C major — warmer, unexpected, like light through a keyhole
$: note("<[c3,e4,g4,c5] [a2,c4,e4,a4] [f2,a3,c4,f4] [g2,b3,d4,g4]>").slow(14)
  .sound("triangle")
  .lpf(sine.range(700, 1800).slow(11))
  .attack(3).release(6)
  .gain(0.1)

// Pizzicato figure — the piano returns, but playful now
$: note("c5 e5 g5 ~ a4 c5 e5 ~ g4 b4 d5 ~ e4 g4 c5 ~").slow(8)
  .sound("triangle")
  .attack(0.01).decay(0.3).sustain(0).release(0.2)
  .lpf(2400).gain(0.09).room(0.7)

// kokoro — heart — a quiet pulse
$: s("kokoro ~ ~ kokoro ~ ~ ~ ~").slow(8)
  .speed(0.88).gain(0.13)
  .lpf(1700).room(0.85).delay(0.4)

// Hollow — stretched into architecture, a room-tone of breath
$: s("hollow").struct("1 ~ ~ ~").slow(16)
  .speed(0.3).lpf(320)
  .gain(0.15).room(0.95)

// A single high harmonic, now a clearer bell
$: note("<g5 ~ ~ c6 ~ ~ ~ e6 ~ ~ ~ ~>").slow(12)
  .sound("sine")
  .attack(0.2).release(8)
  .gain(0.08).room(0.97).delay(0.45)