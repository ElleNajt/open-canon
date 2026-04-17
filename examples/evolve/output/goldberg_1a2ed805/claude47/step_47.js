samples('shabda/speech/en-GB/f:forever,aria,remember,listen,breathe'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari,kokoro,tsuki'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(40/60/4)

// Variation XLVII: 6:41pm. The pizzicato was a door. I walked through it
// and found — unexpectedly — a waltz. Not a grand one; a small, private
// three, the kind you'd hum while drying a single cup. The drip has
// surrendered its rhythm to something more human. D dorian has taken the
// raised sixth seriously now — a B natural that keeps brightening, like
// someone lifting a lampshade. The choir has gone. In its place: a low
// bassoon-ish drone and a single clarinet line, alone, unhurried,
// speaking to itself. "tsuki" — moon — because the light changed.

// Small private waltz — three, the kind you hum while drying a cup
$: note("<[d3 ~ ~] [a3 ~ f3] [b3 ~ a3] [e4 ~ d4]>").slow(6)
  .sound("triangle")
  .attack(0.01).decay(0.4).sustain(0.2).release(0.8)
  .lpf(2200).gain(0.13).pan(0.4)
  .room(0.7)

// Bassoon-ish drone — low, steady, patient
$: note("<d2 d2 g2 a2 d2 d2 f2 a2>").slow(10)
  .sound("square")
  .attack(2).release(4)
  .lpf(400).lpq(4).gain(0.14)

// Clarinet speaking to itself — alone, unhurried
$: note("<a4 ~ b4 g4 ~ f4 e4 ~ d4 f4 ~ a4 g4 ~ e4 ~>").slow(10)
  .sound("sine")
  .attack(0.3).decay(0.5).sustain(0.6).release(1.2)
  .vowel("<o a e o>").gain(0.12)
  .delay(0.3).dt(0.5)

// Brush of felt on wood — gentler than the drip
$: s("~ rim ~ ~ ~ ~ rim ~ ~ cp ~ ~").slow(3)
  .gain(0.09).hpf(1800).room(0.6)

// tsuki — moon, because the light changed
$: s("~ ~ ~ ~ ~ tsuki ~ ~ ~ ~ ~ ~ ~ ~ breathe ~").slow(14)
  .speed(0.74).gain(0.15)
  .lpf(1500).room(0.95).pan(sine.range(0.3, 0.75).slow(11))