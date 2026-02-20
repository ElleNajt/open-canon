setcps(84/60/4)

let leadSynth = x => x
  .s("sawtooth")
  .gain(0.3)
  .lpenv(2500)
  .lpattack(0.01)
  .lpdecay(0.3)
  .lprelease(0.4)
  .lpq(5)
  .lpf(800)
  .room(0.4)
  .delay(0.5)
  .delaytime(3/8)
  .delayfeedback(0.6)
  .shape(0.3)

let bassSynth = x => x
  .s("pulse")
  .gain(0.4)
  .pan(0.5)
  .octave(-2)
  .lpf(300)
  .lpq(3)
  .attack(0.02)
  .release(0.6)
  .drive(0.2)
  .fmenv(8).fm(0.5).fmh(0.5).fmdecay(0.2)

let canonTheme = "d5 e5 fs5 g5 a5 fs5 e5 d5"
let bassCounterpoint = "g4 fs4 e4 d4 c4 d4 e4 g3"

$: n(canonTheme)
  .slow(2)
  .jux(x => x.add(7).lpf(3000).gain(0.8).delay(0))
  .apply(leadSynth)

$: n(bassCounterpoint)
  .slow(2)
  .apply(bassSynth)
  .early(1)

$: n("<g2 b2 d3> <c3 e3 g3>")
  .s("supersaw")
  .gain(0.2)
  .slow(8)
  .attack(3)
  .release(5)
  .lpf(400)
  .lpq(2)
  .room(0.6)
  .phaser(0.1)
  .pan(sine.range(0.1, 0.9).slow(16))

$: stack(
  s("bd ~ ~ [~ bd]").gain(0.9).cut(1),
  s("~ sn/2").gain(0.6).room(0.2).crush(8).shape(0.2).often(rev).late(0.05),
  s("[hh hh] hh [hh oh]").gain(0.4).sustain(0.05).hpf(6000)
).degradeBy(0.05)