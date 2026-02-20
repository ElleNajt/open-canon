setcps(96/60/4)

let leadSynth = x => x
  .s("triangle")
  .gain(0.4)
  .attack(0.05)
  .release(0.5)
  .lpf(2500)
  .lpq(1.5)
  .fmi(sine.range(0.2, 0.5).slow(6))
  .fmh(2)
  .room(0.3)
  .delay(0.5)
  .delaytime(3/8)
  .delayfeedback(0.55)

let bassSynth = x => x
  .s("sawtooth")
  .gain(0.5)
  .octave(-1)
  .lpf(400)
  .lpq(2.5)
  .attack(0.01)
  .release(0.4)
  .drive(0.4)
  .shape(0.2)
  .lpenv(1000)
  .lpdecay(0.2)
  .slide(0.02)

let canonTheme = "d5 fs5 a5 g5 e5 fs5 d5 a4"
let bassLine = "[d3 d3] a2 [g2 g2] [c3 c2]"

$: n(canonTheme)
  .slow(2)
  .off(1/2, x => x.transpose(-5).s("sine").gain(0.4))
  .apply(leadSynth)

$: n(bassLine)
  .slow(2)
  .apply(bassSynth)

$: n("<g2 d3 f3 a3> <c3 e3 g3>")
  .s("supersaw")
  .detune(5)
  .gain(0.2)
  .slow(8)
  .attack(4)
  .release(6)
  .lpf(sine.range(300, 1500).slow(12))
  .lpq(3)
  .room(0.5)

$: stack(
  s("bd [~ bd] bd [~ bd]").gain(1).cut(1),
  s("~ [sn cp]").gain(0.7).jux(x=>x.lpf(5000)).off(0.02, x=>x.pan(0.6)),
  s("hh*8").degradeBy(0.25).sustain(0.03).hpf(9000).gain(0.35)
).compressor().postgain(1.1)