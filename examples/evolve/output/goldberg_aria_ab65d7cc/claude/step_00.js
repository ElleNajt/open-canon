// Goldberg Variations - Aria (BWV 988)

let upperVoice = x => x
  .sound("triangle")
  .gain(0.45)
  .attack(0.02)
  .decay(0.15)
  .sustain(0.2)
  .lpf(2500)
  .room(0.15)

let lowerVoice = x => x
  .sound("square")
  .gain(0.5)
  .decay(0.15)
  .sustain(0.2)
  .room(0.15)

setcps(72/60/4)

// Soprano melody
let soprano = "g5 ~!7 g5 ~!7 a5 ~!5 b5 ~ a5 ~!2 g5 gb5 ~!2 e5 d5 ~!15 g4 ~!7 g4 ~!11 gb4 ~ g4 ~ a4 g4 gb4 ~ g4 gb4 e4!2 d4 ~!15 d5 ~!7 d5 ~!7 e5 ~!5 f5 ~ e5 ~!2 d5 c5 ~!2 b4 a4 ~!11 gb5 ~!3 g5 gb5 ~!2 a5 g5 ~!2 gb5 e5 ~!2 d5 c5 ~ c5 a5 ~!5 c5 ~ b4 g4 ~!2 gb4 ~!2 gb4 g4 ~!15 b4 ~!7 b4 ~!7 db5 ~!5 d5 ~ d5 ~ db5 ~ b4 ~ a4 ~!17 g4 ~!7 g5 ~!11 gb5 ~ g5 ~ g5 ~!2 gb5 e5 ~!3 db5 ~!11 e5 ~!3 a5 ~ g5 ~ gb5 ~ e5 ~ d5 ~!3 a4 ~!8 b4 c5 ~ b4 ~ a4 ~ g4 ~ gb4 ~ e4 ~!2 d5 db5 ~!8 d5 e5 ~ gb4 ~ db5 ~ b4 ~ a4 ~ g5 ~!3 b4 ~ gb4 ~ g4 ~!3 db5 ~!2 db5 d5 ~!4 e5 d5 db5 gb4 ~!15 a4 ~!7 a4 ~!9 a4 b4 c5 d5 e5!2 d5 ~!2 c5 b4 ~!2 a4 g4 ~!11 g5 ~!2 gb5 e5 ~!5 gb5 eb5 e5 ~!11 a5 b5 a5 g5 a5 ~!5 gb5 e5 eb5 ~!11 b4 ~!3 g5 ~!5 gb5!2 e5 ~!9 b4 ~ c5 b4 a4 b4 g5 e5 ~!2 gb5 eb5 ~ eb5 e5 ~!9 g4 ~ gb4 ~ e4 ~ gb4 ~!6 e5 eb5 ~!3 a5 ~!3 g5 ~!3 a4 ~!2 gb5 e5 ~!5 gb5 eb5 e5 ~!15 e5 ~!2 d5 c5 ~!2 b4 a4 ~!11 b4 ~ c5 ~ d5 c5 b4 ~ c5 b4 a4!2 g4 ~!11 a4 ~ b4 ~ c5 ~ d5 ~ c5 ~ b4 ~ c5 ~ a4 ~ e4 ~!3 c5 ~ b4 ~ a4 ~ g4 ~ gb4 ~ d5 ~ c5 ~ b4 ~ c5 ~ a4 ~ gb4 ~!3 c5 ~ e5 ~ d5 ~ c5 ~ b4 ~ c5 ~ b4 ~ a4 ~ b4 ~ g4 ~ d4 ~!3 b4 ~ g4 ~!3 d5 ~ e5 ~ f5 ~ e5 ~ d5 ~ e5 ~ c5 ~ g4 ~!3 e5 ~ c5 ~!3 g5 ~ a5 ~ c5 ~ b4 ~ a4 ~ b4 ~ c5 ~ d5 ~ g4 ~ b4 ~ a4 ~ g4 ~ gb4 ~ g4 ~!3 b3 ~ a3 ~ b3 ~ d4 ~ g4 ~ gb4!2 g4 ~!7"

// Upper inner voices
let upperInner1 = "~!208 e4 ~!15 d5 ~!15 b4 ~!31 e4 ~!55 e4 ~!7 d5 ~!7 e4 ~!23 d5 ~!95 gb4 ~!69 e5 ~!5 c5 ~!3 b4 ~!3 gb5 ~!11 g4 ~!77 a4 ~!23 a4 ~!9 g4 ~!13 g4 ~!5 c5 ~!17 c5 ~!5 gb5 ~!29 c4 ~!21"
let upperInner2 = "~!240 e5 ~!527"
let upperInner3 = "~!240 g5 ~!527"

// Bass line
let bass = "g3 ~!23 gb3 ~!23 e3 ~!23 d3 ~!19 c3 ~!3 b2 ~!23 c3 ~!19 d3 ~!3 e3 ~!3 c3 ~!3 d3 ~!3 b3 ~ a3 ~ g3 ~ gb3 ~ e3 ~ gb3 ~ g2 ~!3 a3 ~!3 b3 ~!3 d3 ~!3 e3 ~!5 gb3 ~ g3 ~!23 a3 ~!7 gb3 ~!3 e3 ~!3 gb3 ~!3 b3 ~!3 e3 ~!7 e4 ~!3 e3 ~!3 gb3 ~!3 g3 ~!3 a3 ~!3 d4 ~!7 b3 ~!3 a3 ~!3 g3 ~!3 gb3 ~!23 g3 ~!23 a3 ~!23 d3 ~!15 d4 ~!7 d4 ~!7 gb4 ~!7 c4 ~!7 b3 ~!7 d4 ~!3 a3 ~!3 b3 ~!7 c4 ~!7 g4 ~!3 b3 ~!3 a3 ~!3 e4 ~!3 b3 ~!3 e4 ~!7 a3 ~!3 g3 ~!3 gb3 ~!3 e3 ~!7 g3 ~!3 gb3 ~!3 d3 ~!7 c3 ~!7 g3 ~!3 gb3 ~!3 b2 ~!3 b3 ~!3 a2 ~!3 c3 ~!3 b2 ~!3 a2 ~!3 b2 ~!7 e3 ~!7 e2 ~!3 b2 ~!3 e3 ~!3 d3 ~!3 c3 ~!23 b2 ~!3 gb3 ~!2 e3 d3 ~!3 e3 ~ gb3 ~ g3 ~ gb3 ~ g3 ~!3 a2 ~!3 e3 ~!3 a3 ~!3 g2 ~!3 gb2 ~!3 e2 ~!3 d2 ~!3 a2 ~!3 d3 ~!3 c3 ~!3 b2 ~!3 a2 ~!3 g2 ~!3 d3 ~!3 g3 ~!3 f3 ~!3 e3 ~!3 d3 ~!3 c3 ~!3 g3 ~!3 c4 ~!3 b3 ~!3 a3 ~!3 g3 ~!3 gb3 ~!3 d3 ~!3 g3 ~!3 b3 ~!3 d4 ~!3 d3 ~!3 g3 ~!11 d3 ~!3 g2 ~!7"

// Lower inner voices
let lowerInner1 = "~!8 b3 ~!23 a3 ~!23 g3 ~!23 gb3 ~!23 d3 ~!23 e3 ~!19 c4 ~!19 g3 ~!31 b3 ~!43 b3 ~!15 d4 ~!3 db4 ~!31 a3 ~!23 b3 ~!51 a3 ~!15 e4 ~!23 c4 ~!23 e4 ~!11 gb4 ~!7 eb4 ~!27 a3 ~!11 g3 ~!11 a3 ~!11 g3 ~!27 eb3 ~!7 b2 ~!27 e3 ~!183"
let lowerInner2 = "~!16 d4 ~!23 d4 ~!23 db4 ~!23 a3 ~!23 g3 ~!23 a3 ~!167 d4 ~!287 a3 ~!175"

// Track 1 - right hand (soprano + inner voices)
$: stack(note(soprano), note(upperInner1), note(upperInner2), note(upperInner3))
  .slow(24)
  .apply(upperVoice)
  .pan(0.3)

// Track 2 - left hand (bass + inner voices)
$: stack(note(bass), note(lowerInner1), note(lowerInner2))
  .slow(24)
  .apply(lowerVoice)
  .pan(0.7)
