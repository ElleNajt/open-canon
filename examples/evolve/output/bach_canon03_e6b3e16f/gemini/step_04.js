setcps(96/60/4)

let leadSynth = x => x
  .s("supersaw")
  .gain(0.4)
  .lpenv(2000)
  .lpattack(0.01)
  .lpdecay(0.2)
  .lprelease(0.4)
  .lpq(4)
  .lpf(1000)
  .room(0.3)
  .delay(0.4)
  .delaytime(3/8)
  .delayfeedback(0.5)
  .shape(0.2)

let bassSynth = x => x
  .s("square")
  .gain(0.5)
  .octave(-1)
  .lpf(400)
  .lpq(2)
  .attack(0.01)
  .release(0.4)
  .drive(0.4)
  .lpenv(800)
  .lpdecay(0.1)

let canonTheme = "d5 e5 fs5 g5 a5 fs5 e5 d5"
let bassLine = "d3 ~ a2 ~ g2 ~ c3"

$: n(canonTheme)
  .slow(2)
  .off(1/4, x => x.add(7).gain(0.6))
  .apply(leadSynth)

$: n(bassLine)
  .slow(2)
  .apply(bassSynth)

$: n("<g2 bb2 d3> <eb3 g3 bb3>")
  .s("sawtooth")
  .gain(0.3)
  .slow(8)
  .attack(4)
  .release(6)
  .lpf(500)
  .lpq(3)
  .room(0.5)
  .phaser(0.05)
  .pan(sine.range(0.2, 0.8).slow(12))

$: stack(
  s("bd ~ bd ~").gain(1).cut(1),
  s("~ cp").gain(0.7).room(0.3).shape(0.4).crush(6).late(0.02),
  s("hh").euclid(7, 8).sustain(0.05).hpf(7000).gain(0.5).lpf(12000)
).compressor()