samples('shabda/speech/en-GB/f:forever,aria,remember'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(48/60/4)

// Variation XI: 11:13am. Something cracked open. The Lydian door
// the previous hour hinted at — someone walked through it. What
// was tentative is now almost playful, almost. We've moved to
// F Lydian proper, but with a persistent Bb creeping in from the
// old world, that raised-then-lowered 4th flickering like a
// lightbulb deciding. The walking bass is gone — in its place, a
// loping 7-beat pulse in the low register, uneven on purpose, the
// gait of someone humming while doing dishes. The rising question
// has become a call-and-response: the square asks, a detuned saw
// answers two beats later, softer, unsure. "remember" has entered
// — the past is allowed back in, but only as texture, chopped and
// scattered. The marimba is gone. The breath stays. A clock
// somewhere is ticking, or maybe that's just the heart.

// Call — Lydian ascent, the question
let call = "<[f4 a4 c5] [e5 g5 b5] [a5 c6] [~ d6 ~]>"

// Answer — two beats later, lower, hesitant
let answer = "<[c4 e4] [g4 bb4] [f4 a4] [~ ~]>"

// Loping 7 — uneven bass gait
let lope = "f2 ~ c3 ~ a2 f2 ~"

// The call — square, bright but cautious
$: note(call).slow(5)
  .sound("square")
  .gain(0.22)
  .lpf(sine.range(1100, 2200).slow(9)).lpq(3)
  .attack(0.02).release(0.5)
  .room(0.55)

// The answer — detuned saw, softer, unsure
$: note(answer).slow(5).late(0.25)
  .sound("sawtooth")
  .detune(0.2)
  .gain(0.16)
  .lpf(900)
  .attack(0.15).release(0.6)

// Loping bass — 7-beat gait, humming while doing dishes
$: note(lope).sound("triangle").slow(2)
  .gain(0.3)
  .lpf(500)
  .attack(0.01).release(0.35)

// Remember — chopped, scattered past, panned wide
$: s("remember").slow(11).chop(8)
  .speed("<0.85 0.9 0.8 1.0>")
  .gain(0.2)
  .pan(rand.range(0.15, 0.85))
  .room(0.7)

// The breath remains — exhaling into the new room
$: s("breathe").slow(14)
  .speed(0.72)
  .gain(0.32)
  .hpf(380)
  .room(0.85)

// The clock — or the heart — a soft tick, rim on the offbeat
$: s("rim").struct("~ x ~ x ~ ~ x ~")
  .gain(0.14)
  .hpf(2000)
  .room(0.3)