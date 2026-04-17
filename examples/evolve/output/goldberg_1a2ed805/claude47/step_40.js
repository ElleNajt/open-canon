samples('shabda/speech/en-GB/f:forever,aria,remember,listen,breathe'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari,kokoro,tsuki'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(34/60/4)

// Variation XL: 4:47pm. The teakettle has been turned off — or was
// never on. In the sudden absence, a cello enters: one long bowed note
// that bends, almost imperceptibly, a quartertone flat and back.
// The harmony has given up on Ab lydian and settled into something
// modal and ancient — D dorian, the key of plainchant and things that
// endure. The music box is gone, replaced by its ghost: plucked
// harmonics, spaced like drops from a faucet in another apartment.
// The person on the floor speaks, in Japanese, the word for "light"
// — hikari — and it is the first human sound in the room that does
// not echo. Somewhere, a door closes. We do not hear it, but we feel
// the pressure change.

// Bowed cello drone — D dorian, bending slightly, the longest breath
$: note("<d3 a3 f3 c4>").slow(16)
  .sound("sawtooth")
  .lpf(sine.range(300, 900).slow(11))
  .attack(6).release(9)
  .detune(sine.range(-8, 8).slow(13))
  .gain(0.11)

// Plucked harmonics — drops from a faucet in another apartment
$: note("<a5 ~ ~ d6 ~ f5 ~ ~ ~ c6 ~ ~ ~ ~ e5 ~>").slow(10)
  .sound("triangle")
  .attack(0.001).decay(0.4).sustain(0).release(0.3)
  .hpf(1200).lpf(4000)
  .gain(0.09).room(0.92).delay(0.4)

// hikari — light — the first unechoed human sound
$: s("~ ~ ~ ~ hikari ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~").slow(14)
  .speed(0.88).gain(0.17)
  .lpf(2200).room(0.4)

// Distant breath — pressure change, a door closing elsewhere
$: s("breathe").struct("1 ~ ~ ~ ~ ~ ~ ~").slow(13)
  .speed(0.5).lpf(600)
  .gain(0.12).room(0.88).pan(sine.range(0.2, 0.8).slow(9))

// Hollow — the room itself, quieter now, almost listening
$: s("hollow").struct("1 ~ ~ ~").slow(16)
  .speed(0.26).lpf(240)
  .gain(0.13).room(0.95)