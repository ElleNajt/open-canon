samples('shabda/speech/en-GB/f:forever,aria,remember,listen,breathe'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari,kokoro,tsuki'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(36/60/4)

// Variation XLI: 5:02pm. The cello has set down its bow. In its place,
// a small upright piano — the kind with felt between the hammers and
// strings, muted, intimate. D dorian gives way to its relative: F
// lydian with a flatted seventh, the mode of half-remembered hymns.
// A child somewhere is practicing scales, but only the ascending
// half, never the descent. The Japanese voice has shifted: now it
// says "kokoro" — heart — and the word arrives doubled, once close
// and once from the next room, as if the room itself were answering.
// The breath is gone. In its place: a single sine tone, the pitch of
// a refrigerator's hum, holding the floor of the harmony like a
// patient hand.

// Refrigerator sine — the patient hand beneath everything
$: note("f2").sound("sine")
  .attack(8).release(12)
  .gain(0.14).lpf(180)

// Felt piano — F lydian b7, ascending only, never the descent
$: note("<f4 g4 a4 b4 c5 ~ ~ ~ d5 e5 ~ ~ ~ ~ ~ ~>").slow(12)
  .sound("triangle")
  .attack(0.005).decay(0.8).sustain(0.1).release(1.2)
  .lpf(2400).gain(0.12).room(0.7).pan(0.42)

// kokoro — heart — close
$: s("~ ~ ~ kokoro ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~").slow(11)
  .speed(0.92).gain(0.18)
  .lpf(2600).room(0.25).pan(0.35)

// kokoro — the room answering, from the next apartment
$: s("~ ~ ~ ~ ~ kokoro ~ ~ ~ ~ ~ ~ ~ ~ ~ ~").slow(11)
  .speed(0.84).gain(0.11)
  .lpf(900).room(0.94).delay(0.5).pan(0.78)

// High harmonic — a sympathetic string ringing somewhere unseen
$: note("<c6 ~ ~ ~ ~ ~ a5 ~>").slow(9)
  .sound("sine")
  .attack(0.01).decay(2).sustain(0).release(2)
  .gain(0.08).room(0.9).pan(sine.range(0.3, 0.7).slow(13))