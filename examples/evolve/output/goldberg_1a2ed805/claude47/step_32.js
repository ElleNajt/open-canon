samples('shabda/speech/en-GB/f:forever,aria,remember,listen,breathe'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari,kokoro'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(46/60/4)

// Variation XXXII: 3:23pm. The window in the next room is still open,
// but the wind has changed direction. D minor has tilted toward B-flat —
// the key of a letter you meant to send. The piano's three notes have
// found a fourth, and now it's no longer a phrase abandoned but a
// question asked aloud. Someone is humming in the kitchen, or perhaps
// it's a radio left on in 1974. "Hikari" — light — slips in through
// the window and lands on the floor. The heartbeat has stopped; in
// its place, a pulse of air through an old church organ, breathing
// without a body.

// Piano — now a question, with a fourth note
$: note("<d4 f4 a4 bb4 ~ a4 f4 d4 ~>").slow(13)
  .sound("triangle")
  .lpf(2200).lpq(1.2)
  .attack(0.03).decay(1.8).release(3.5)
  .gain(0.2).room(0.75)

// Organ-breath — a body-less pulse, replacing the heart
$: note("bb2,d3,f3").slow(9)
  .sound("square")
  .lpf(sine.range(220, 700).slow(7)).lpq(3)
  .attack(3).release(5)
  .tremolo(0.4).tremolosync(6)
  .gain(0.11)

// Humming from the kitchen — a radio from 1974
$: note("<f4 g4 f4 d4 ~ f4 d4 c4>").slow(10)
  .sound("sine")
  .lpf(900).crush(6)
  .gain(0.08).pan(0.7).room(0.5)

// Hikari — light, landing on the floor
$: s("~ ~ ~ hikari ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~").slow(13)
  .speed(0.92).gain(0.2).hpf(500)
  .room(0.9).delay(0.4)

// Rain, thinner now — just breath against glass
$: s("hh*12").slow(3)
  .gain(perlin.range(0.05, 0.09).slow(6))
  .hpf(3400).lpf(5500)
  .pan(perlin.range(0.2, 0.8).slow(4))