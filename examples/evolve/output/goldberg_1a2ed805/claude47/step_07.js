samples('shabda/speech/en-GB/f:forever,aria,remember'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(48/60/4)

// Variation VII: 8:12am. The sun has crested the rooftops. The room is warm
// now and something has shifted — not resolved, but turned. We abandon
// Phrygian entirely and step sideways into Lydian, that fourth raised like
// a window thrown open. The heartbeat goes. In its place: a hand-clap,
// irregular, human, as if someone across the courtyard is rehearsing a
// dance. The bells step aside for a small, stubborn bass pulse — walking,
// not sleeping. And the ascending question is answered by a descending
// phrase, the first real melody in hours, sung almost. The voices say
// only one word now: "remember." Over and over, at different speeds,
// different pitches — memory itself, refracted.

// Descending Lydian answer — the first real melody
let answer = "b4 a4 gs4 fs4 e4 ds4 cs4 b3 ~ e4 fs4 gs4 a4 b4 cs5 b4"

// Walking bass, stubborn and alive
let walk = "e2 ~ b2 ~ fs2 ~ gs2 ~ a2 ~ e2 b2 ~ fs2 ~ gs2"

// Irregular hand-claps — someone rehearsing across the courtyard
$: s("cp").euclid(5, 13).slow(2)
  .gain(0.35)
  .hpf(600)
  .room(0.7)
  .pan(sine.range(0.3, 0.7).slow(11))

// The descending answer, sung almost
$: note(answer).slow(8)
  .sound("triangle")
  .gain(0.32)
  .attack(0.05).decay(0.3).sustain(0.4).release(0.6)
  .lpf(sine.range(1800, 3600).slow(13))

// Walking bass — the piece finally stands up
$: note(walk).slow(6)
  .sound("sawtooth")
  .gain(0.22)
  .lpf(420).lpq(3)
  .attack(0.01).release(0.35)

// A single high bell, punctuation, rare
$: note("e6 ~ ~ ~ ~ ~ ~ b6").slow(9)
  .sound("sine")
  .gain(0.18)
  .attack(0.003).release(1.2)
  .delay(0.5).dt(0.75)

// "Remember" — memory refracted at different speeds
$: stack(
  s("remember").slow(7).speed(0.78).pan(0.2),
  s("remember").slow(9).speed(1.05).pan(0.8),
  s("remember").slow(11).speed(0.64).pan(0.5)
)
  .gain(0.3)
  .lpf(2200)
  .room(0.85)