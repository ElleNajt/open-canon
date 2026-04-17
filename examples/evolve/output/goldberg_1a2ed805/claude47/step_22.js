samples('shabda/speech/en-GB/f:forever,aria,remember,listen'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari,kokoro'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(42/60/4)

// Variation XXII: 1:41pm. The sun has moved. What was Pärt-like
// stillness tilts — a shadow passes across the floor and the room
// remembers it once had weather. The chorale cracks open: the
// tintinnabuli voice becomes a question, not an answer. The felt
// choir shifts to a Phrygian color — that flattened second, the
// Spanish ache inside the Nordic light. And a new voice: pizzicato,
// plucked, a heartbeat returning. Not pulse — heartbeat. Irregular.
// Human. "kokoro" — heart — answers "hikari" across the room.

// M-voice: the walking line turns Phrygian — F natural enters
$: note("<e4 f4 g4 a4 b4 a4 g4 f4 e4 f4 e4 d4 e4 g4>").slow(13)
  .sound("triangle")
  .attack(0.6).release(3).gain(0.22).room(0.9)

// T-voice as question: rising, unresolved, ending on the 2nd
$: note("<e5 g5 b5 e6 ~ b5 g5 f5>").slow(11)
  .sound("sine")
  .attack(0.2).release(3.5).gain(0.13)
  .room(0.96).delay(0.4)

// Phrygian choir — the flattened second glows
$: note("<[e3,b3,e4] [f3,c4,f4] [g3,d4,g4] [f3,b3,e4]>").slow(15)
  .sound("square")
  .lpf(sine.range(250, 1100).slow(11)).lpq(3)
  .attack(1.8).release(4).gain(0.1)

// Pizzicato heartbeat — irregular, human, euclidean 5 in 13
$: note("e2 ~ e2 ~ ~ b2 ~ ~ e2 ~ ~ ~ ~").slow(6)
  .sound("triangle")
  .attack(0.002).decay(0.18).sustain(0).release(0.25)
  .gain(0.26).lpf(1400).room(0.5)

// Kokoro answers hikari — call and response across silence
$: s("~ ~ ~ hikari ~ ~ ~ ~ ~ ~ kokoro ~ ~ ~ ~ ~").slow(14)
  .speed("<0.76 0.82>")
  .gain(0.24).hpf(440).room(0.97).delay(0.5)

// The sustained overtone stays — memory of the previous variation
$: note("b5").slow(16)
  .sound("sine")
  .attack(5).release(7)
  .gain(perlin.range(0.06, 0.09).slow(8))
  .room(0.98)