setcps(124/60/4)

// Glassy, more percussive FM lead synth
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
  .delaytime("3/16")
  .delayfeedback(0.5)
  .room(0.3)
  .pan(perlin.range(0.1, 0.9).slow(6))

// Fatter, grittier bass synth
let bassSynth = x => x
  .s("sawtooth")
  .gain(0.25)
  .lpf(700)
  .lpq(8)
  .ftype(1) // Ladder filter
  .lpenv(1200)
  .lpdecay(0.1)
  .drive(0.2)
  .attack(0.01)
  .release(0.2)
  .cut(2)

// Faster, hypnotic arpeggio with variation
$: n("[a4 d5 f5 c5] [g4 d5 f5 b4]")
  .slow(2)
  .every(4, rev)
  .apply(leadSynth)

// More driving, syncopated bassline
$: n("d2 ~ d2 [~g2] g2 [g2 d2]")
  .slow(2)
  .apply(bassSynth)

// Evolving, textural pad with organic filter movement
$: n("<[d3,f3,a3,c4] [g2,b2,d3,f3]>")
  .s("sawtooth")
  .detune(6)
  .gain(0.2)
  .lpf(perlin.range(400, 2200).slow(16))
  .lpq(5)
  .attack(2.5)
  .release(5)
  .room(0.7)
  .slow(8)

// Evolved house groove
$: stack(
  s("bd ~ [~ bd] bd").gain(1.0).cut(1),
  s("~ cp ~ cp").gain(0.7).off("1/16", x=>x.gain(0.5).pan(0.6)),
  s("hh*4").velocity("[1 0.6 0.9 0.5]").hpf(8000).decay(0.03).gain(0.4).crush(10),
  s("~*3 oh").hpf(6000).decay(0.4).gain(0.3)
).postgain(0.9)