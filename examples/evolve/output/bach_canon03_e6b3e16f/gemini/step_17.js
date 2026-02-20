setcps(94/60/4)

// More aggressive lead with tremolo and random filter
let leadSynth = x => x
  .s("sawtooth")
  .detune(2)
  .gain(0.18)
  .attack(0.01)
  .release(0.5)
  .lpf(perlin.range(1000, 6000).slow(8))
  .lpq(8)
  .trem(0.2)
  .tremolosync(4)
  .room(0.4)
  .delay(0.5)
  .delaytime(3/8)
  .delayfeedback(0.5)

// Plucky, driven bass synth
let bassSynth = x => x
  .s("pulse")
  .gain(0.35)
  .octave(-1)
  .lpenv(2500)
  .lpdecay(0.2)
  .lpq(5)
  .drive(0.3)
  .attack(0.01)
  .release(0.3)

// Lead melody with octave layering
$: n("[a4 ~ g4 fs4] [d4 g4 fs4 e4]")
  .slow(4)
  .jux(x => x.octave(1).gain(0.7))
  .apply(leadSynth)

// More rhythmic bassline
$: n("[d2 d2]/2 g2 [d2 a2]/2 g2")
  .slow(2)
  .apply(bassSynth)

// Glassy, evolving FM pad with Dmin chord
$: n("[d3, f3, a3]")
  .s("sine")
  .gain(0.2)
  .fmi(perlin.range(0.2, 1.5).slow(24))
  .fmh(2)
  .attack(8)
  .release(16)
  .pan(sine.range(0.1, 0.9).slow(18))
  .room(0.8)
  .slow(16)

// Refined drum pattern with open hats
$: stack(
  s("bd*4").velocity("<1 0.7 0.9 0.7>").lpf(5000).cut(1),
  s("~ sn").distort(0.2).release(0.2).room(0.1),
  s("oh*8").gain("<0.7 0.4 0.6 0.3 0.7 0.4 0.5 0.2>").hpf(6000).decay(0.08)
).postgain(0.95)