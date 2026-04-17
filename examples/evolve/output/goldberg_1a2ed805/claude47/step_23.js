samples('shabda/speech/en-GB/f:forever,aria,remember,listen'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari,kokoro'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(46/60/4)

// Variation XXIII: 1:47pm. The shadow has deepened. The Phrygian
// ache wasn't enough — it needed to become something stranger.
// The heartbeat grows teeth: a detuned bass pulse, not quite in
// tune with itself, like two clocks almost agreeing. The choir
// drops out entirely — in its place, a bell-like figure in fifths,
// austere, almost medieval. The voice shifts: "yume" (dream) and
// "sayonara" (farewell) — the room is saying goodbye to its
// earlier self. The T-voice becomes a descending lament.

// M-voice: the Phrygian walk descends now, heavier, slower
$: note("<e4 d4 c4 b3 a3 b3 c4 d4 e4 f4 e4 d4>").slow(14)
  .sound("sawtooth")
  .lpf(700).attack(0.8).release(3.5).gain(0.18)

// T-voice as lament: descending, hollow, with tremolo breath
$: note("<b5 a5 g5 f5 e5 ~ f5 e5>").slow(12)
  .sound("sine")
  .attack(0.4).release(4).gain(0.14)
  .tremolo(0.3).room(0.97)

// Bell fifths — austere, medieval, open
$: note("<[e4,b4] ~ [a4,e5] ~ [g4,d5] ~ [f4,c5] ~>").slow(13)
  .sound("triangle")
  .attack(0.005).decay(2).sustain(0).release(3)
  .gain(0.16).room(0.95)

// Detuned heartbeat — two clocks almost agreeing
$: note("e2 ~ ~ e2 ~ ~ ~ b1 ~ ~").slow(5)
  .sound("sawtooth")
  .detune(0.15)
  .attack(0.004).decay(0.25).release(0.4)
  .gain(0.24).lpf(900)

// Yume / sayonara — the room says goodbye
$: s("~ ~ yume ~ ~ ~ ~ ~ sayonara ~ ~ ~").slow(15)
  .speed("<0.72 0.88 0.8>")
  .gain(0.26).hpf(380).room(0.98).delay(0.55)

// Sustained overtone — memory persists, now wavering
$: note("<b5 e6>").slow(16)
  .sound("sine")
  .attack(6).release(8)
  .gain(perlin.range(0.05, 0.1).slow(9))
  .room(0.98)