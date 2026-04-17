samples('shabda/speech/en-GB/f:forever,aria,remember'), samples('shabda/speech/ja-JP/f:yume,sayonara'), samples('shabda/speech/en-US/m:breathe,hollow')

setcps(54/60/4)

// Variation IV: Post-dawn. 6:47am. The bus has stopped. The city exhales.
// We abandon Lydian's false hope for something more honest: Dorian, a mode that
// knows both sorrow and acceptance. The soprano is gone — she's asleep now.
// In her place: a call-and-response between a low male murmur ("breathe", "hollow")
// and the old ghosts. The choir has thinned to two voices, wider apart, like
// people who've stopped pretending to hold hands. A kick drum has replaced the
// garage shuffle with something slower, funereal, almost a heartbeat.
// And a new element: a high bell-like pulse, ticking off the seconds of
// a morning that refuses to fully arrive.

// D Dorian — ancient, patient, neither sad nor hopeful
let bass = "<d2 ~ a2 f2 ~ c2 g2 ~ d2 ~ ~ f2>"

// Two-voice choir — open fifths and fourths, the sound of rooms with the lights off
let choir = "<[d3,a3] [f3,c4] [g3,d4] [c3,g3] [f3,c4] [a3,e4]>"

// Bell pulse — a clock that doesn't quite believe in time
let bells = "d6 ~ a5 ~ f6 ~ ~ e6 d6 ~ ~ a5"

$: note(choir).slow(6)
  .sound("supersaw")
  .detune(0.4)
  .gain(0.2)
  .attack(2.5).release(3)
  .lpf(sine.range(400, 1600).slow(13))

$: note(bass).slow(3)
  .sound("sine")
  .gain(0.4)
  .attack(0.02).release(1.2)
  .lpf(300)
  .room(0.4)

$: note(bells).slow(4)
  .sound("triangle")
  .gain(perlin.range(0.08, 0.22).fast(2))
  .attack(0.005).decay(0.4).sustain(0).release(0.3)
  .delay(0.4).dt(0.5)

// Heartbeat — slow, deliberate, human
$: s("bd ~ ~ ~ bd bd ~ ~").slow(2)
  .gain(0.55)
  .lpf(140)
  .room(0.3)
  .sometimesBy(0.15, x => x.fast(2))

// Male murmur — the one who stayed awake
$: s("~!3 breathe ~!5 hollow ~!7").slow(11)
  .speed(0.85)
  .gain(0.32)
  .lpf(900)
  .room(0.8)
  .pan(0.25)

// Ghosts answering from the other channel
$: s("~!6 yume ~!4 remember ~!8 sayonara ~!5").slow(13)
  .speed(0.72)
  .gain(0.3)
  .hpf(400)
  .room(0.95)
  .pan(0.78)