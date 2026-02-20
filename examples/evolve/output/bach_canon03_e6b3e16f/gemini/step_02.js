setcps(90/60/4)

let leadSynth = x => x
  .s("sawtooth")
  .gain(0.35)
  .pan(0.3)
  .lpenv(3000)
  .lpattack(0.01)
  .lpdecay(0.25)
  .lprelease(0.3)
  .lpq(4)
  .lpf(700)
  .room(0.3)
  .delay(0.4)
  .delaytime(3/8)
  .delayfeedback(0.5)
  .crush(6)

let bassSynth = x => x
  .s("square")
  .gain(0.4)
  .pan(0.7)
  .octave(-2)
  .lpf(sine.range(300, 800).slow(8))
  .lpq(2)
  .attack(0.01)
  .release(0.5)
  .drive(0.25)

let canonTheme = "d5 e5 fs5 g5 b5 a5 g5 d6"
let bassCounterpoint = "g4 fs4 e4 d4 b3 c4 d4 g3"

$: n(canonTheme)
  .slow(2)
  .apply(leadSynth)

$: n(bassCounterpoint)
  .slow(2)
  .apply(bassSynth)
  .early(1)

$: n("g2 b2 d3")
  .s("supersaw")
  .gain(0.25)
  .slow(4)
  .attack(2)
  .release(4)
  .lpf(500)
  .room(0.5)
  .pan(sine.range(0.2, 0.8).slow(13))

$: stack(
  s("bd ~ [~ bd] [bd bd/2]").gain(0.7).cut(1),
  s("[~hh]*8").hpf(4000).gain(0.25).degradeBy(0.15).crush(8)
)