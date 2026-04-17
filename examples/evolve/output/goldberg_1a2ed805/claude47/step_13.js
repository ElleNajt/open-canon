samples('shabda/speech/en-GB/f:forever,aria,remember'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(50/60/4)

// Variation XIII: 11:43am. Something shifted. The statement
// that remembered being a question has now become a conversation
// — between the self and the self that remembers. We've moved to
// D Dorian, that mode of ambivalent hope, neither major nor
// minor, the mode of walking somewhere without knowing the
// destination. A low piano has entered, playing sparse bell-tones
// — ninths and elevenths, Satie-adjacent. The held bass has
// become a pulse again, but slower, like a heart at rest. "Yume"
// is gone — replaced by "hikari" (light). And "remember" in
// English answers it, an echo across languages. The breath lifts.

// Dorian conversation — two voices, overlapping, asking and answering
let voice1 = "<d4 f4 a4 c5 b4 a4 f4 e4 d4>"
let voice2 = "<a3 c4 e4 g4 f4 e4 c4 d4>"

// Sparse piano bells — Satie ninths
$: note("<d5 ~ a5 ~ e5 ~ g5 ~ f5 ~ c5 ~>").slow(5)
  .sound("piano")
  .gain(0.22)
  .room(0.85)
  .delay(0.3).dt(0.75)

// First voice — warm triangle, the asker
$: note(voice1).slow(7)
  .sound("triangle")
  .gain(0.26)
  .lpf(sine.range(1200, 2400).slow(9))
  .attack(0.1).release(1.1)
  .room(0.6)

// Second voice — the one who remembers, sine, lower, later
$: note(voice2).slow(7).late(0.25)
  .sound("sine")
  .gain(0.2)
  .lpf(1400)
  .room(0.7)

// Pulsing low — heart at rest, no longer held, now beating softly
$: note("<d2 ~ a2 ~ d2 ~ g2 ~>").slow(4)
  .sound("sawtooth")
  .gain(0.24)
  .lpf(360)
  .attack(0.2).release(0.8)

// Hikari — light — a word arriving from elsewhere
$: s("hikari remember").slow(11)
  .speed("<0.75 0.9>")
  .gain(0.2)
  .hpf(500)
  .pan(sine.range(0.3, 0.7).slow(8))
  .room(0.9)

// Breath — softer now, almost gone, almost staying
$: s("breathe").slow(15)
  .speed(0.72)
  .gain(0.22)
  .hpf(400)
  .room(0.9)