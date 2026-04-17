samples('shabda/speech/en-GB/f:forever,aria,remember'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(52/60/4)

// Variation VIII: 8:47am. The window is open now, and with it something
// unruly has entered. The Lydian brightness curdles into Mixolydian —
// that flat seventh like a half-remembered blues, like coffee going
// cold. The walking bass quits its job and a syncopated, broken thing
// takes over: a limp, a stagger, a person dancing alone in a kitchen.
// The clean triangle melody is gone. In its place: a pizzicato motif
// that ASKS instead of answers, three notes repeated with small
// rhythmic lies. And the voices — no longer "remember." They whisper
// "hikari" (light) against "hollow," the two languages arguing about
// what morning actually is. A snare, brushed, irregular, enters like
// someone tapping a table while thinking.

// The asking motif — three notes, rhythmically unstable
let ask = "<[g4 a4 b4] [g4 a4 d5] [g4 b4 a4] [f4 a4 b4]>"

// Broken, limping bass — Mixolydian, with that flat 7
let limp = "g2 ~ ~ d3 ~ f3 ~ g2 ~ c3 ~ ~ bb2 ~ d3 ~"

// Brushed snare, thinking at a table
$: s("sn:2*8").gain(perlin.range(0.08, 0.28).fast(3))
  .hpf(1200).room(0.4)
  .pan(perlin.range(0.35, 0.65).slow(5))

// The asking pizzicato — pulse with small lies
$: note(ask).slow(5)
  .sound("square")
  .gain(0.24)
  .attack(0.002).decay(0.18).sustain(0).release(0.08)
  .lpf(sine.range(1400, 2800).slow(9))

// Limping bass — Mixolydian stagger
$: note(limp).slow(4)
  .sound("sawtooth")
  .gain(0.26)
  .lpf(380).lpq(4)
  .shape(0.3)

// A distant handclap, much rarer now, almost forgotten
$: s("cp").euclid(3, 16).slow(3)
  .gain(0.22)
  .hpf(800).delay(0.4).dt(0.375)

// Hikari vs hollow — two languages arguing about morning
$: stack(
  s("hikari").slow(6).speed(1.1).pan(0.15),
  s("hollow").slow(8).speed(0.82).pan(0.85),
  s("hikari").slow(11).speed(0.7).pan(0.5)
)
  .gain(0.28)
  .lpf(2400)
  .room(0.7)

// A low drone underneath — the room itself, humming
$: note("g2").sound("sine").slow(8)
  .gain(0.15)
  .attack(2).release(3)
  .tremolo(0.3).tremolosync(7)