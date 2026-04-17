samples('shabda/speech/en-GB/f:forever,aria,remember,listen,breathe'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari,kokoro'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(38/60/4)

// Variation XXXVI: 4:23pm. Six minutes later. The letter is on the table now,
// unfolded, face down. The person has walked to the window. The boy with
// the recorder has stopped — his mother called him to dinner. In the
// absence where the recorder was, a Japanese voice surfaces: "hikari" —
// light. Then "kokoro" — heart. The harmony tilts: G major bends toward
// E minor, the relative minor of its own relief, as if the room cannot
// quite believe its own forgiveness. A low piano note, struck once,
// holds the whole house in suspension. Outside, a door closes somewhere.

// The tilting harmony — G major leaning into E minor's shadow
$: note("<[g2,b3,d4,g4] [e2,b3,e4,g4] [a2,c4,e4,a4] [d3,a3,d4,fs4]>").slow(14)
  .sound("triangle")
  .lpf(sine.range(800, 1800).slow(12))
  .attack(5).release(7)
  .gain(0.12).room(0.9)

// Piano — a single note, struck once per long cycle, like a decision
$: note("<g2 ~ ~ e2 ~ ~ a2 ~>").slow(13)
  .sound("piano")
  .attack(0.02).release(8)
  .gain(0.16).room(0.92).lpf(1200)

// hikari — light, surfacing from the quiet
$: s("~ ~ ~ ~ hikari ~ ~ ~ ~ ~ ~ ~ kokoro ~ ~ ~").slow(15)
  .speed("<0.88 0.76>").gain(0.18)
  .lpf(2200).room(0.95).delay(0.45)

// The bell — now with a slight detune, no longer certain of its pitch
$: note("<g4 b4 e5 g4>").struct("1 ~ ~ ~ ~ ~ ~ ~ ~ ~").slow(14)
  .sound("sine")
  .detune("<0 8 -6 4>")
  .attack(0.01).release(9)
  .gain(0.17).room(0.95)

// A door closing somewhere — felt through the floor
$: s("breathe").struct("1 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~").slow(16)
  .speed(0.55).lpf(220).hpf(60)
  .gain(0.15).room(0.8)