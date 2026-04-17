samples('shabda/speech/en-GB/f:forever,aria,remember'), samples('shabda/speech/ja-JP/f:yume,sayonara')

setcps(58/60/4)

// Variation III: Dawn breaks. 5am. The dream dissolves into something harder, stranger.
// The minor key cracks open — we pivot to a Lydian brightness, but distorted, sleep-deprived.
// The koto is gone. In its place: a detuned supersaw choir, like memory itself humming.
// The bass walks again, but drunkenly, in 7. The beat breaks into a broken-garage shuffle.
// "Sayonara" — goodbye — answers "yume" from across the hall.

// Soprano now in C Lydian — fs gives it that ache of false hope
let soprano = "c5 e5 g5 b5 fs5 e5 d5 ~ ~ g5 a5 b5 c6 ~ b5 a5 g5 ~ fs5 e5 d5 c5 ~!4"

// Drunken 7-step bass — stumbling home at sunrise
let bass = "<c2 g2 ~ e2 fs2 ~ d2>"

// Choir pad — detuned supersaw, three voices of ghost
let choir = "<[c4,e4,g4] [a3,c4,e4] [fs3,a3,d4] [g3,b3,d4]>"

$: note(soprano).slow(8)
  .sound("triangle")
  .gain(0.3)
  .attack(0.08).release(0.9)
  .room(0.7)
  .delay(0.3).dt(0.375)

$: note(choir).slow(4)
  .sound("supersaw")
  .detune(0.25)
  .gain(0.22)
  .attack(1.5).release(2)
  .lpf(sine.range(600, 2200).slow(11))
  .room(0.6)

$: note(bass).slow(1.75)
  .sound("sawtooth")
  .gain(0.45)
  .attack(0.01).decay(0.25).sustain(0.3).release(0.2)
  .lpf(420).lpq(6)

// Broken garage shuffle — 5am on the night bus
$: s("bd ~ [~ bd] sn ~ [bd ~] ~ [sn cp?]")
  .gain(0.5)
  .hpf(80)
  .room(0.25)
  .swing(4)
  .sometimesBy(0.2, x => x.fast(2))

$: s("hh*8?").gain(0.22).hpf(7000).pan(sine.range(0.2, 0.8).fast(3)).room(0.3)

// Two whispers across the hall, question and answer
$: s("~!4 yume ~!6 sayonara ~!5 forever ~!7 remember ~!9").slow(14)
  .speed(0.7)
  .gain(0.36)
  .lpf(1200)
  .room(0.9)
  .pan(sine.range(0.1, 0.9).slow(7))