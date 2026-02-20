setcps(104/60/4)

let leadSynth = x => x
  .s("sawtooth")
  .gain(0.3)
  .attack(0.01)
  .release(0.4)
  .lpf(sine.range(2000, 3500).slow(8))
  .lpq(6)
  .fmi(cosine.range(0.1, 0.4).slow(3))
  .fmh(1.5)
  .room(0.2)
  .delay(0.4)
  .delaytime(3/8)
  .delayfeedback(0.55)

let bassSynth = x => x
  .s("square")
  .gain(0.4)
  .octave(-1)
  .lpf(400)
  .lpq(2)
  .drive(0.2)
  .attack(0.01)
  .release(0.5)
  .lpenv(1500)
  .lpdecay(0.25)
  .slide(0.01)

let melody = "[d5 fs5] a5 ~ [g5 e5] fs5 d5 a4"
let bassLine = "d3 ~ g2 ~ b2 ~ a2"

$: n(melody)
  .slow(2)
  .off(1/2, x => x.transpose(-7).s("triangle").gain(0.15).lpf(2500).room(0.4).pan(0.8))
  .pan(0.2)
  .apply(leadSynth)

$: n(bassLine)
  .slow(2)
  .apply(bassSynth)

$: n("d2")
  .s("sine")
  .gain(0.15)
  .attack(3)
  .release(5)
  .lpf(200)
  .lpq(1)
  .room(0.7)
  .slow(8)

$: stack(
  s("bd ~ bd ~").gain(0.9).cut(1),
  s("~ sn").gain(0.7).lpf(9000).delay(0.25).dt(3/16).dfb(0.25),
  s("hh").euclid(7, 8).every(4, x => x.rev()).gain(0.4).hpf(8000).sustain(0.05),
  s("~ ~ ~ oh").gain(0.4).hpf(8000).sustain(0.2)
).postgain(0.9)