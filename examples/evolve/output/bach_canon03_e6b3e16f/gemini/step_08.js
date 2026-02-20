setcps(104/60/4)

let leadSynth = x => x
  .s("sawtooth")
  .gain(0.3)
  .attack(0.01)
  .release(0.4)
  .lpf(sine.range(1800, 3000).slow(8))
  .lpq(4)
  .fmi(cosine.range(0.1, 0.4).slow(3))
  .fmh(1.5)
  .room(0.2)
  .delay(0.4)
  .delaytime(3/8)
  .delayfeedback(0.5)

let bassSynth = x => x
  .s("square")
  .gain(0.45)
  .octave(-1)
  .lpf(350)
  .lpq(3)
  .attack(0.01)
  .release(0.5)
  .lpenv(1800)
  .lpdecay(0.3)
  .slide(0.01)

let melody = "[d5 fs5] a5 ~ [g5 e5] fs5 d5 a4"
let bassLine = "d3 ~ g2 ~ c3 ~ a2"

$: n(melody)
  .slow(2)
  .off(1/2, x => x.transpose(-7).s("pulse").gain(0.25).vowel("e o").lpf(3000))
  .pan(sine.range(0.2, 0.8).slow(5))
  .apply(leadSynth)

$: n(bassLine)
  .slow(2)
  .apply(bassSynth)

$: n("<d3 fs3 a3 e4> <g3 b3 d4 fs4>")
  .s("supersaw")
  .detune(3)
  .gain(0.2)
  .slow(4)
  .attack(2)
  .release(4)
  .lpf(sine.range(400, 1200).slow(12))
  .lpq(2)
  .room(0.5)
  .delay(0.2)
  .phaser(0.05)
  .phaserdepth(0.6)

$: stack(
  s("bd ~ ~ [~ bd]").gain(1.1).cut(1),
  s("~ sn:2").gain(0.7).room(0.25).lpf(8000),
  s("[hh*3 oh]*4").gain(0.4).hpf(9000).sustain(0.1)
).crush(8)