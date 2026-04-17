samples('shabda/speech/en-GB/f:forever,aria,remember,listen,breathe'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari,kokoro'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(44/60/4)

// Variation XXXIII: 3:41pm. The letter has been written but not sealed.
// Outside, a bell tolls once — from the church three streets over, or
// from memory, which is the same thing at this hour. B-flat has
// settled into G minor, the key of a held breath before speaking.
// The piano is gone; in its place, a cello that was always there,
// underneath, waiting. The organ has widened into a chord that
// remembers Fauré. "Kokoro" — heart — returns the pulse that the
// organ took away. A single church bell, struck once every sixteen
// bars, marks time the way a lighthouse marks distance.

// Cello — low, bowed, the shape of the letter unsaid
$: note("<g3 bb3 d4 c4 ~ bb3 g3 ~ ~ f3 g3 ~>").slow(14)
  .sound("sawtooth")
  .lpf(sine.range(400, 1400).slow(11)).lpq(2.5)
  .attack(1.2).release(4)
  .gain(0.16).room(0.85)

// Organ — widened to a Fauré chord, still bodiless
$: note("g2,bb2,d3,f3,a3").slow(11)
  .sound("square")
  .lpf(sine.range(260, 850).slow(9)).lpq(2.5)
  .attack(4).release(6)
  .gain(0.1).room(0.7)

// Kokoro — heart, returning the pulse
$: s("~ kokoro ~ ~ ~ ~ ~ ~").slow(8)
  .speed(0.88).gain(0.18)
  .hpf(400).room(0.9)

// Church bell — once every sixteen bars, a lighthouse
$: note("bb4").struct("1 ~ ~ ~ ~ ~ ~ ~").slow(16)
  .sound("sine")
  .attack(0.01).release(7).decay(4)
  .gain(0.22).room(0.95).delay(0.5)

// Breath against glass — thinner still, almost absent
$: s("hh*8").slow(4)
  .gain(perlin.range(0.05, 0.08).slow(7))
  .hpf(4200).pan(perlin.range(0.3, 0.7).slow(5))