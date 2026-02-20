setcps(120/60/4)

// Glassy, atmospheric FM lead synth
let leadSynth = x => x
  .s("sine")
  .gain(0.25)
  .fmi(3)
  .fmh(1.25)
  .fmenv(10)
  .fmdecay(0.3)
  .attack(0.01)
  .release(0.5)
  .shape(0.4)
  .delay(0.5)
  .delaytime("3/16")
  .delayfeedback(0.6)
  .room(0.4)
  .pan(perlin.range(0.1, 0.9).slow(8))

// Warm, round square bass
let bassSynth = x => x
  .s("square")
  .gain(0.3)
  .lpf(sine.range(400, 1200).slow(16))
  .lpq(10)
  .ftype(1)
  .attack(0.01)
  .release(0.3)
  .cut(2)

// Melodic, evolving arpeggio in A minor
$: n("<a4 e5> <c5 g4>").scale("a:minor")
  .palindrome()
  .slow(4)
  .apply(leadSynth)

// Foundational, chordal bassline
$: n("a1 g1 c1 f1")
  .slow(4)
  .apply(bassSynth)

// Deeper, groovier house beat
$: stack(
  s("bd ~ [~ bd] bd").gain(0.9).cut(1),
  s("~ sn").gain(0.6).drive(0.4).room(0.2),
  s("hh*4").velocity("[1 0.5 0.8 0.4]").hpf(7000).decay(0.02).gain(0.35).phaser(0.1).swing(0.5),
  s("~ oh").slow(2).hpf(6000).decay(0.4).gain(0.25)
).postgain(0.9)