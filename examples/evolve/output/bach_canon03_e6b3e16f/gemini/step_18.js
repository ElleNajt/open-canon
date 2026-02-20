setcps(90/60/4) // Slowed down slightly

// Softer, more melodic lead synth with rhythmic delay
let leadSynth = x => x
  .s("triangle")
  .detune(1)
  .gain(0.22)
  .attack(0.01)
  .release(0.8)
  .lpf(perlin.range(800, 4000).slow(6))
  .lpq(4)
  .delay(0.6)
  .delaytime("<3/8 3/16>".slow(2))
  .delayfeedback(0.6)
  .room(0.5)

// Cleaner, plucky bass synth
let bassSynth = x => x
  .s("pulse")
  .gain(0.3)
  .octave(-1)
  .lpenv(2000)
  .lpdecay(0.2)
  .lpq(4)
  .drive(0.2)
  .attack(0.01)
  .release(0.3)

// Sparse, floating lead melody
$: n("[d5 ~ a4 f4] g4 a4 [~ a4]")
  .slow(4)
  .apply(leadSynth)

// Groovier bassline following the chord progression
$: n("<d2 [d2 f2] a1 [f1 g1]>")
  .slow(2)
  .apply(bassSynth)

// Evolving pad with a Dm7 -> G7 progression
$: n("<[d3,f3,a3,c4] [g3,b3,d4,f4]>")
  .s("sine")
  .gain(0.25)
  .fmi(perlin.range(0.2, 1.5).slow(16))
  .fmh(2)
  .attack(4)
  .release(8)
  .pan(sine.range(0.1, 0.9).slow(12))
  .room(0.8)
  .slow(8)

// Refined drum pattern with a crunchier snare
$: stack(
  s("bd*4").velocity("<1 0.7 0.9 0.7>").cut(1),
  s("~ sn").distort(0.2).crush(5).release(0.2).gain(0.7),
  s("hh*8").gain(perlin.range(0.3, 0.7)).hpf(7000).decay(0.05)
).postgain(0.9)