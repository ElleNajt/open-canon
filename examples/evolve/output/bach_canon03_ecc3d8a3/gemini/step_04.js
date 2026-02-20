setcps(130/60/4)

// Voices
let leadVoice = x => x
  .sound("supersaw")
  .gain(0.35)
  .attack(0.01)
  .release(0.2)
  .lpf(800)
  .lpenv(2500)
  .lpdecay(0.3)
  .room(0.3)
  .delay(0.4)
  .dt(3/16)
  .dfb(0.4)

let bassVoice = x => x
  .sound("square")
  .gain(0.45)
  .attack(0.01)
  .release(0.2)
  .lpf(100)
  .lpenv(1500)
  .lpdecay(0.15)
  .octave(-1)
  .cut(1)
  .room(0.1)

// Canon voice 1 (Lead)
$: note("~!40 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!15")
  .slow(208/8/4)
  .apply(leadVoice)
  .pan(0.3)

// Canon voice 2 (Bass)
$: note("~!8 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!15")
  .slow(208/8/4)
  .apply(bassVoice)
  .octave(-1)
  .pan(0.7)

// Drums
$: s("bd*4")
  .gain(0.9)

$: s("~ sn")
  .slow(2)
  .gain(0.6)
  .room(0.2)

$: s("<~ hh> <~ [hh hh]>")
  .gain(0.5)
  .hpf(6000)
  .pan(sine.range(0.4, 0.6).slow(13))