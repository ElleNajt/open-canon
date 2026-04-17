samples('shabda/speech/en-GB/f:forever,aria,remember,listen,breathe'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari,kokoro,tsuki'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(38/60/4)

// Variation XLVIII: 6:52pm. The waltz tripped over its own foot and
// caught itself laughing. A hemiola — three inside two, or two inside
// three, I've stopped arguing with it. The clarinet has left the room
// mid-sentence; a cello has taken the chair, lower, and speaks in long
// fifths. The drone climbed — D up to A — a fifth of patience. And a
// new voice: the harpsichord, or its ghost, plucking a gentle ostinato
// in 5, perpendicular to everything else. "hikari" — light — because
// the lampshade came off entirely. Pizzicato rim-taps only, no cymbal.

// Hemiola waltz — three pretending to be two
$: note("<[d3 a3] [f3 ~] [b3 g3] [a3 ~] [e4 c4] [d4 ~]>").slow(5)
  .sound("triangle")
  .attack(0.005).decay(0.25).sustain(0.15).release(0.6)
  .lpf(sine.range(1400, 2800).slow(9)).gain(0.13)
  .room(0.6)

// Drone climbed a fifth — D to A, patient
$: note("<d2 a2 d2 a2 g2 a2>").slow(12)
  .sound("sawtooth")
  .attack(3).release(5)
  .lpf(350).gain(0.13).pan(0.35)

// Cello in long fifths — lower chair, fewer words
$: note("<[a3 ~ e3] [d3 ~ ~] [g3 ~ d3] [a3 ~ ~]>").slow(8)
  .sound("sine")
  .attack(0.8).decay(0.4).sustain(0.7).release(2)
  .vowel("<o u o a>").gain(0.14)

// Harpsichord ghost — ostinato in 5, perpendicular
$: note("d5 f5 a5 g5 e5").fast(1.5)
  .sound("pulse")
  .attack(0.001).decay(0.15).sustain(0).release(0.1)
  .hpf(800).gain(0.08).pan(0.7)
  .delay(0.25).dt(0.375)

// Rim-taps only, no cymbal — pizzicato of the kit
$: s("rim ~ ~ rim ~ rim ~ ~ ~ rim ~").slow(4)
  .gain(0.1).hpf(2000).room(0.5).pan(0.25)

// hikari — light, because the lampshade came off
$: s("~ ~ ~ ~ hikari ~ ~ ~ ~ ~ ~ listen ~ ~ ~ ~ ~ ~").slow(15)
  .speed(0.82).gain(0.14)
  .lpf(1700).room(0.95).pan(sine.range(0.25, 0.8).slow(13))