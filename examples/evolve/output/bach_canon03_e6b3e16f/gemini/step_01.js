// BWV 1087 Canon 3 - Evolved

let leadSynth = x => x
  .sound("triangle")
  .gain(0.4)
  .attack(0.01)
  .release(0.4)
  .lpf(sine.range(1500, 5000).slow(6))
  .lpq(3)
  .delay(0.4)
  .delaytime(3/8)
  .delayfeedback(0.5)
  .pan(0.3)
  .room(0.2)
  
let bassSynth = x => x
  .sound("square")
  .gain(0.4)
  .octave(-1)
  .attack(0.02)
  .release(0.5)
  .lpf(800)
  .lpq(1)
  .shape(0.1)
  .pan(0.7)
  .room(0.1)

setcps(90/60/4)

// Track 1
$: note("~!40 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!15")
  .slow(208/8/4)
  .apply(leadSynth)

// Track 2
$: note("~!8 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!15")
  .slow(208/8/4)
  .apply(bassSynth)

// Drone
$: n("g1")
  .sound("sine")
  .gain(0.6)
  .slow(16)
  .attack(1)
  .release(4)
  .lpf(150)