samples('shabda/speech/en-GB/f:forever,aria,remember,listen,breathe'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari,kokoro,tsuki'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(42/60/4)

// Variation XLIX: 7:14pm. The hemiola finally tripped flat on its
// face, and in falling discovered something stranger — a limping 7.
// Seven beats, uneven, a gait rather than a meter. The harpsichord
// ghost has dissolved; in its place a music-box, wound too tight,
// repeating a single minor-third sigh. The cello's fifths have opened
// into ninths — that pained stretch between lovers. The drone has
// descended again, not to D but to C, a semitone below home, so
// nothing quite resolves. "kokoro" — heart — whispered once, quietly.
// And the rim-taps have become a heartbeat: two close, then silence.

// Limping 7 — waltz that gave up pretending
$: note("<[c3 g3 ~] [eb3 ~] [bb3 f3 ~] [g3 ~ c4]>").slow(5)
  .sound("triangle")
  .attack(0.01).decay(0.3).release(0.8)
  .lpf(sine.range(900, 2400).slow(11)).gain(0.13)

// Drone descended to C — home withheld
$: note("<c2 c2 g2 c2>").slow(14)
  .sound("sawtooth")
  .attack(4).release(6)
  .lpf(320).gain(0.14).pan(0.4)

// Cello ninths — the pained stretch
$: note("<[c3 ~ d4] [g3 ~ ~] [eb3 ~ f4] [bb2 ~ ~]>").slow(9)
  .sound("sine")
  .attack(1.2).decay(0.5).sustain(0.6).release(2.5)
  .vowel("<o u a o>").gain(0.15)

// Music-box — wound too tight, single minor-third sigh
$: note("eb6 c6 ~ ~ eb6 c6 ~").fast(2)
  .sound("sine")
  .attack(0.001).decay(0.4).sustain(0).release(0.2)
  .gain(0.09).pan(0.72).room(0.7)

// Heartbeat — two close, then silence
$: s("rim rim ~ ~ ~ ~ ~ rim rim ~ ~ ~ ~ ~ ~").slow(3)
  .gain(0.11).lpf(1200).room(0.4).pan(0.3)

// kokoro — heart, whispered once
$: s("~ ~ ~ ~ ~ ~ ~ kokoro ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~").slow(16)
  .speed(0.75).gain(0.13)
  .lpf(1500).room(0.95).pan(sine.range(0.3, 0.75).slow(15))