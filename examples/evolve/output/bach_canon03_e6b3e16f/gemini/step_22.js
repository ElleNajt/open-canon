setcps(122/60/4)

// Glassy, percussive FM lead synth
let leadSynth = x => x
  .s("sine")
  .gain(0.2)
  .fmi(4)
  .fmh(1.5)
  .fmenv(12)
  .fmdecay(0.4)
  .attack(0.01)
  .release(0.6)
  .delay(0.5)
  .delaytime("3/16")
  .delayfeedback(0.6)
  .room(0.5)
  .pan(perlin.range(0.1, 0.9).slow(6))

// Grittier, more rhythmic bass synth
let bassSynth = x => x
  .s("sawtooth")
  .gain(0.25)
  .lpf(800)
  .lpenv(1200)
  .lpdecay(0.1)
  .lpq(6)
  .shape(0.25)
  .attack(0.01)
  .release(0.2)
  .cut(2)

// Faster, hypnotic arpeggio
$: n("[a4 d5 f5 c5] [g4 d5 f5 b4]")
  .slow(2)
  .apply(leadSynth)

// More syncopated, triplet-feel bassline
$: n("d2 ~ d2 [~g2] g2 ~")
  .slow(2)
  .apply(bassSynth)

// Rhythmic, filter-modulated pad
$: n("<[d3,f3,a3,c4] [g2,b2,d3,f3]>")
  .s("sawtooth")
  .detune(6)
  .gain(0.2)
  .lpf(square.range(400, 2500).slow(2))
  .lpq(5)
  .attack(2.5)
  .release(5)
  .room(0.7)
  .slow(8)

// More developed house groove
$: stack(
  s("bd ~ [~ bd] bd").gain(1.0).cut(1),
  s("~ cp ~ cp").gain(0.7),
  s("hh*4").velocity("[1 0.6 0.9 0.5]").hpf(8000).decay(0.03).gain(0.4),
  s("~*3 oh").hpf(7000).decay(0.2).gain(0.35)
).postgain(0.9)