samples('shabda/speech/en-GB/f:forever,aria,remember'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(48/60/4)

// Variation XIV: 11:58am. The conversation has turned inward.
// The two voices have merged into one — a single contralto line
// that carries both question and answer at once. We've slipped
// sideways into D Phrygian: the flat second (Eb) casts a shadow,
// a thread of melancholy pulling through the hopeful Dorian.
// The piano has grown bolder — no longer bells, but a rolling
// arpeggio, Debussy through half-closed eyes. The bass pulse is
// gone entirely. In its place: a low drone of cello-like sawtooth,
// breathing with a slow tremolo, the room itself inhaling.
// "Sayonara" has returned — farewell — but spoken gently, not
// as ending but as release. And beneath it all, a single heartbeat
// of kick drum every other bar, reminding the body it is here.

// Phrygian arpeggio — rolling, Debussy-adjacent
$: note("<[d4 f4 a4 eb5] [c4 eb4 g4 bb4] [bb3 d4 f4 a4] [a3 c4 eb4 g4]>")
  .slow(6)
  .sound("piano")
  .gain(0.24)
  .room(0.88)
  .delay(0.28).dt(0.666)

// The merged voice — one line carrying both
$: note("<d4 eb4 f4 a4 g4 f4 eb4 d4 c4 d4>").slow(8)
  .sound("triangle")
  .gain(0.28)
  .lpf(sine.range(900, 2200).slow(11))
  .attack(0.15).release(1.4)

// Cello drone — the room breathing
$: note("<d2 d2 bb2 a2>").slow(10)
  .sound("sawtooth")
  .gain(0.22)
  .lpf(320)
  .tremolo(0.4)
  .room(0.7)

// Sayonara — farewell as release, not ending
$: s("sayonara remember").slow(13)
  .speed("<0.7 0.85>")
  .gain(0.2)
  .hpf(450)
  .pan(sine.range(0.25, 0.75).slow(9))
  .room(0.92)

// Heartbeat — the body remembering it is here
$: s("bd ~ ~ ~ ~ ~ ~ ~").slow(2)
  .gain(0.34)
  .lpf(120)
  .room(0.4)