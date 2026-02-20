setcps(128/60/4)

// Glassy, percussive FM lead synth
let leadSynth = x => x
  .s("sine")
  .gain(0.2)
  .fmi(4)
  .fmh(1.25)
  .fmenv(14)
  .fmdecay(0.2)
  .attack(0.01)
  .release(0.4)
  .delay(0.5)
  .delaytime("1/8")
  .delayfeedback(0.6)
  .room(0.3)
  .pan(perlin.range(0.1, 0.9).slow(6))

// Fatter, breathing bass synth
let bassSynth = x => x
  .s("sawtooth")
  .gain(0.25)
  .lpf(sine.range(500, 1500).slow(8))
  .lpq(8)
  .ftype(1)
  .lpenv(1200)
  .lpdecay(0.1)
  .drive(0.3)
  .attack(0.01)
  .release(0.2)
  .cut(2)

// Hypnotic, shifting arpeggio
$: n("d5 f5 a4 c5")
  .iter(1)
  .slow(2)
  .apply(leadSynth)

// Groovier, more mobile bassline
$: n("d2 ~ d2 <g1 d2> [g1 d2] g1")
  .slow(2)
  .apply(bassSynth)

// Tighter, swingier house groove
$: stack(
  s("bd ~ [~ bd] bd").gain(1.0).cut(1),
  s("~ cp ~ cp").gain(0.7).crush(8),
  s("hh*4").velocity("[1 0.6 0.9 0.5]").hpf(8000).decay(0.03).gain(0.4).swing(0.5),
  s("~ oh").slow(2).hpf(6000).decay(0.4).gain(0.3)
).postgain(0.9)