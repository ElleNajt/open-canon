samples('shabda/speech/en-GB/f:forever,aria,remember'), samples('shabda/speech/ja-JP/f:yume')

setcps(64/60/4)

// Variation II: The club empties. 3am. The Aria fragments into memory.
// Harmony shifts to minor — Bach's G major becomes G minor, heavy with regret.
// The walking bass is gone; in its place, a pulsing sub and a distant koto-like pluck.
// Someone whispers in Japanese from the next room: "yume" — a dream.

// The soprano, now sparser, broken into phrases with silence between
let soprano = "g5 ~!3 bb5 ~!3 d6 ~!5 c6 bb5 ~!3 g5 f5 ~!3 eb5 d5 ~!7 ~!8 bb4 ~!3 d5 ~!3 f5 eb5 ~!3 d5 c5 ~!3 bb4 a4 g4 ~!5 ~!16"

// Minor-key pulse bass — just roots and fifths, brooding
let pulseBass = "<g2 ~ g2 d3 eb2 ~ eb2 bb2 c3 ~ c3 g3 d2 ~ d2 a2>"

// Koto-like pluck — fragile, askew
let koto = "<[g4 ~ bb4 ~ d5 ~ c5 bb4] [eb4 ~ g4 ~ bb4 ~ a4 g4] [f4 ~ a4 ~ c5 ~ bb4 a4] [d4 ~ fs4 ~ a4 ~ g4 fs4]>"

$: note(soprano).slow(16)
  .sound("triangle")
  .gain(0.32)
  .attack(0.15).release(1.2)
  .room(0.75)

$: note(koto).slow(4)
  .sound("square")
  .gain(0.22)
  .attack(0.005).decay(0.3).sustain(0).release(0.2)
  .lpf(2400)
  .room(0.5)

$: note(pulseBass).slow(2)
  .sound("sine")
  .gain(0.55)
  .attack(0.02).release(0.3)
  .lpf(280)

// Sparse brushed pulse — just a soft heartbeat now
$: s("bd ~ ~ [~ rim] ~ ~ [sn:1? ~] ~")
  .gain(0.4)
  .hpf(180)
  .room(0.4)
  .swing(2)

// Whispers from two rooms away, two languages, one ache
$: s("~!6 yume ~!9 forever ~!5 remember ~!8").slow(12)
  .speed(0.75)
  .gain(0.38)
  .lpf(1400)
  .room(0.85)
  .pan(sine.range(0.15, 0.85).slow(9))