samples('shabda/speech/en-GB/f:forever,aria,remember,listen,breathe'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari,kokoro,tsuki'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(38/60/4)

// Variation XLVI: 6:27pm. The dripping sink has found a rhythm — or I have
// imposed one on it, the way the mind insists on pattern. The cello ghost
// has opened its mouth and become a choir of one, multiplying in the hall.
// D dorian tips toward B-flat lydian for a moment (that raised fourth, a
// staircase I didn't know was there), then settles. "hikari" — light —
// replaces "kokoro" because the window is open wider now. The humming has
// stopped. In its place: a pizzicato, plucked, almost cheerful, which
// surprises me. I didn't know I still knew how to be surprised.

// Drip-rhythm — the mind imposing pattern
$: s("drip ~ ~ cp ~ ~ drip ~ ~ ~ cp ~ ~ drip ~ ~").fast(1.1)
  .gain(0.08).hpf(2800).lpf(6000).room(0.75)

// Bb lydian tilt — the staircase I didn't know was there
$: note("<d2 [bb2,d3,f3] d2 [bb2,e3,a3] d2 [a2,e3,g3] d2 [d3,f3,a3]>").slow(12)
  .sound("sine").attack(3).release(6)
  .lpf(sine.range(300, 900).slow(14)).gain(0.12)

// Choir-of-one — cello multiplied in the hall
$: note("<d3 f3 e3 g3 a3 f3>").slow(14)
  .sound("sawtooth")
  .detune(sine.range(-20, 20).slow(7))
  .attack(2.5).release(5)
  .lpf(1100).lpq(3).gain(0.1)

// Pizzicato — plucked, almost cheerful, surprising
$: note("[d4 ~ a3 f4] [~ e4 ~ d4] [a3 ~ d4 ~] [~ f4 e4 ~]").slow(2)
  .sound("triangle")
  .attack(0.005).decay(0.18).sustain(0).release(0.3)
  .lpf(2400).gain(0.14).pan(sine.range(0.3, 0.7).slow(5))
  .room(0.6).delay(0.25)

// hikari — light, wider window
$: s("~ ~ ~ hikari ~ ~ ~ ~ ~ ~ listen ~ ~ ~ ~ ~").slow(13)
  .speed(0.78).gain(0.14)
  .lpf(1600).room(0.92).pan(sine.range(0.35, 0.7).slow(9))