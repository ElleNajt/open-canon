// Bach - Canon 9 from Goldberg Variations (BWV 1087)

setcps(420/60/4)

let melody = "g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5"
let bass = "g4 ~!7 gb4 ~!7 e4 ~!7 d4 ~!7 b3 ~!7 c4 ~!7 d4 ~!7 g3 ~!7"

let effect = x => x.every(16, add(note(-12)))

// Leader
$: note(melody)
  .sound("triangle")
  .gain(0.45)
  .pan(0.3)
  .attack(0.02)
  .decay(0.3)
  .sustain(0.4)
  .lpf(2500)
  .room(0.15)
  .slow(8)
  .apply(effect)

// Follower (delayed by 2 beats)
$: note(melody)
  .late(2)
  .sound("square")
  .gain(0.5)
  .pan(0.7)
  .decay(0.3)
  .sustain(0.3)
  .room(0.15)
  .slow(8)
  .apply(effect)

// Bass
$: note(bass)
  .sound("sawtooth")
  .gain(0.5)
  .pan(0.5)
  .attack(0.03)
  .decay(0.4)
  .sustain(0.5)
  .lpf(600)
  .room(0.2)
  .slow(8)
