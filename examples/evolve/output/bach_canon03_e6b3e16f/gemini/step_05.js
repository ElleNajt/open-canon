setcps(88/60/4)

let leadSynth = x => x
  .s("triangle")
  .gain(0.4)
  .attack(0.05)
  .release(0.5)
  .lpf(2000)
  .lpq(2)
  .fmi(sine.range(0.1, 0.4).slow(8))
  .fmh(2)
  .room(0.4)
  .delay(0.5)
  .delaytime(3/8)
  .delayfeedback(0.6)

let bassSynth = x => x
  .s("sawtooth")
  .gain(0.5)
  .octave(-1)
  .lpf(300)
  .lpq(3)
  .attack(0.01)
  .release(0.3)
  .drive(0.2)
  .lpenv(1200)
  .lpdecay(0.15)

let canonTheme = "d5 e5 fs5 g5 a5 fs5 e5 d5"
let bassLine = "d3 d3 ~ a2 ~ g2 g2 c3"

$: n(canonTheme)
  .slow(2)
  .off(1/2, x => x.add(7).gain(0.6))
  .apply(leadSynth)

$: n(bassLine)
  .slow(2)
  .apply(bassSynth)

$: n("<g2 bb2 d3> <eb3 g3 bb3>")
  .s("supersaw")
  .detune(4)
  .gain(0.25)
  .slow(8)
  .attack(5)
  .release(7)
  .lpf(sine.range(400, 1200).slow(16))
  .lpq(4)
  .room(0.6)

$: stack(
  s("bd ~ [bd bd] ~").gain(1).cut(1),
  s("~ sn").gain(0.6).room(0.5).lpf(6000).release(0.2),
  s("hh").euclid(5, 8).sustain(0.02).hpf(8000).gain(0.4).swing(0.5)
).compressor()