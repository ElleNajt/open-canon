setcps(90/60/4)

// Animated, richer lead synth
let leadSynth = x => x
  .s("supersaw")
  .gain(0.18)
  .attack(0.01)
  .release(0.8)
  .lpf(perlin.range(700, 3500).slow(8))
  .lpq(6)
  .delay(0.5)
  .delaytime("3/8")
  .delayfeedback(0.55)
  .room(0.6)
  .pan(perlin.range(0.2, 0.8).slow(6))

// Tighter, punchier bass synth
let bassSynth = x => x
  .s("pulse")
  .gain(0.35)
  .octave(-1)
  .lpenv(1800)
  .lpdecay(0.1)
  .lpq(4)
  .drive(0.25)
  .attack(0.01)
  .release(0.2)

// More active and melodic lead line
$: n("[a4 f5] g5 [~ d5] c5 [~ a4]")
  .slow(4)
  .apply(leadSynth)

// More syncopated groovy bassline
$: n("d2 ~ d2 f2 ~ a1 ~ g1")
  .legato(0.8)
  .slow(2)
  .apply(bassSynth)

// Pad with added slow modulation for movement
$: n("<[d3,f3,a3,c4] [g3,b3,d4,f4]>")
  .s("sine")
  .gain(0.22)
  .fmi(perlin.range(0.2, 1.2).slow(16))
  .fmh(2)
  .attack(4)
  .release(8)
  .pan(sine.range(0.1, 0.9).slow(12))
  .phaser(0.05)
  .phaserdepth(4)
  .room(0.8)
  .slow(8)

// More dynamic and syncopated drum groove
$: stack(
  s("bd ~ [bd bd] ~").gain(1.1).cut(1),
  s("~ cp").gain(0.7).jux(x => x.delay(0.4).delaytime(3/16).delayfeedback(0.2).gain(0.5)),
  s("~ sn").distort(0.1).gain(0.6),
  s("hh").euclid(7, 8).hpf(8000).decay(0.03).gain(perlin.range(0.2, 0.6))
).postgain(0.9)