setcps(100/60/4)

// Grittier, more animated lead synth
let leadSynth = x => x
  .s("supersaw")
  .gain(0.15)
  .attack(0.01)
  .release(0.8)
  .lpf(perlin.range(500, 4500).slow(6))
  .lpq(8)
  .shape(0.2)
  .delay(0.4)
  .delaytime("3/16")
  .delayfeedback(0.5)
  .room(0.5)
  .pan(perlin.range(0.2, 0.8).slow(8))

// Shorter, pluckier bass synth
let bassSynth = x => x
  .s("pulse")
  .gain(0.3)
  .lpenv(2000)
  .lpdecay(0.05)
  .lpq(5)
  .drive(0.3)
  .attack(0.01)
  .release(0.15)

// Arpeggiated melody outlining the harmony
$: n("<a4 d5 f5 c5> <g4 d5 f5 b4>")
  .slow(8)
  .apply(leadSynth)

// Simpler, driving two-chord bassline
$: n("d2 ~ d2 ~ g2 ~ g2 ~")
  .slow(2)
  .apply(bassSynth)

// Rhythmic, pulsing supersaw pad
$: n("<[d3,f3,a3,c4] [g2,b2,d3,f3]>")
  .s("supersaw")
  .gain(0.25)
  .lpf(400)
  .lpq(4)
  .attack(3)
  .release(5)
  .tremolo(0.5)
  .tremolosync(2)
  .room(0.8)
  .slow(8)

// Tighter, more driving house groove
$: stack(
  s("bd ~ [~ bd] bd").gain(1.1).cut(1),
  s("~ cp ~ cp").gain(0.8),
  s("hh*4").velocity("[1 0.7 0.9 0.6]").hpf(9000).decay(0.025).gain(0.5)
).postgain(0.85)