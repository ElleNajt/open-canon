setcps(104/60/4)

let leadSynth = x => x
  .s("sawtooth")
  .gain(0.3)
  .attack(0.01)
  .release(0.4)
  .lpf(sine.range(1800, 4000).slow(6))
  .lpq(8)
  .fmi(cosine.range(0.05, 0.2).slow(4))
  .fmh(1.5)
  .room(0.25)
  .delay(0.4)
  .delaytime(3/8)
  .delayfeedback(0.55)

let bassSynth = x => x
  .s("square")
  .gain(0.45)
  .octave(-1)
  .lpf(350)
  .lpq(2)
  .drive(0.1)
  .attack(0.01)
  .release(0.2)
  .lpenv(2000)
  .lpdecay(0.15)
  .slide(0.01)

let melody = "~ a5 ~ g5 fs5 ~ d5 a4"
let bassLine = "d3 d3 g2 ~ [b2 a2] a2 ~ ~"

$: n(melody)
  .slow(2)
  .off(1/2, x => x.transpose(-7).s("pulse").gain(0.1).lpf(2000).room(0.5).pan(0.8))
  .pan(0.2)
  .apply(leadSynth)

$: n(bassLine)
  .slow(2)
  .apply(bassSynth)

$: n("d2")
  .s("supersaw")
  .gain(0.1)
  .attack(3)
  .release(6)
  .lpf(180)
  .lpq(2)
  .room(0.8)
  .pan(sine.range(0.1, 0.9).slow(16))
  .slow(8)

$: stack(
  s("bd").velocity("[1 0.6]*4").cut(1),
  s("~ sn").gain(0.7).lpf(9000).delay(0.25).dt(3/16).dfb(0.25).room(0.1),
  s("hh").fast(2).euclid(9, 16).gain(0.4).hpf(8000).sustain(0.05),
  s("~ ~ ~ oh").gain(0.4).hpf(8000).sustain(0.2)
).swing(0.5).postgain(0.9)