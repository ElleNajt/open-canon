samples('shabda/speech/en-GB/f:forever,aria,remember'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(46/60/4)

// Variation XII: 11:27am. The playfulness curdled — not into
// sadness exactly, but into recognition. The Lydian brightness
// has tilted: we're in F Lydian ♭7 now, that Mixolydian-Lydian
// hybrid the Beatles used to find, Eb natural sliding under the
// B natural like two truths held at once. The call-and-response
// has dissolved. In its place: a single line, a melody that
// remembers being a question but has become a statement the
// singer doesn't quite believe. The rim-clock is gone — time
// stopped mattering around 11:15. The loping bass has slowed
// into long held tones, cello-like, one note per measure,
// breathing. And "yume" — dream, in Japanese — has entered the
// room, whispered, barely there, a word from a language the
// piece doesn't speak but somehow understands. The breath stays.
// It always stays.

// The melody — a statement that remembers being a question
let melody = "<f4 a4 c5 eb5 d5 c5 a4 g4 f4 ~ ~ ~>"

// Held bass — one long breath per measure
let held = "<f2 eb2 bb2 c3>"

// Single line — warm triangle, center, exposed
$: note(melody).slow(6)
  .sound("triangle")
  .gain(0.28)
  .lpf(sine.range(1400, 2600).slow(11))
  .attack(0.08).release(0.9)
  .room(0.6)

// Ghost of the answer — saw, very soft, an octave below, late
$: note(melody).slow(6).late(0.5)
  .sound("sawtooth")
  .sub(12)
  .detune(0.15)
  .gain(0.09)
  .lpf(700)
  .room(0.75)

// Held bass — cello-breath, long tones
$: note(held).sound("sine").slow(4)
  .gain(0.32)
  .lpf(420)
  .attack(0.6).release(1.8)

// Yume — dream, whispered in a language the piece half-knows
$: s("yume").slow(13)
  .speed("<0.7 0.85 0.75>")
  .gain(0.22)
  .hpf(600)
  .pan(sine.range(0.25, 0.75).slow(7))
  .room(0.9)

// The breath remains — it always remains
$: s("breathe").slow(14)
  .speed(0.7)
  .gain(0.3)
  .hpf(360)
  .room(0.88)