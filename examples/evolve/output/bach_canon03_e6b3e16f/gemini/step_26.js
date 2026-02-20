setcps(116/60/4)

// Glassy, atmospheric FM lead synth
let leadSynth = x => x
  .s("sine")
  .gain(0.25)
  .fmi(3)
  .fmh(1.5)
  .fmenv(10)
  .fmdecay(0.3)
  .attack(0.01)
  .release(0.5)
  .distort(0.2)
  .delay(0.5)
  .delaytime("3/16")
  .delayfeedback(0.6)
  .room(0.4)
  .pan(perlin.range(0.1, 0.9).slow(8))

// Warm, round square bass
let bassSynth = x => x
  .s("square")
  .gain(0.35)
  .lpf(sine.range(300, 1000).slow(12))
  .lpq(12)
  .ftype(1)
  .attack(0.01)
  .release(0.4)
  .cut(2)

// More melodic, evolving arpeggio in A minor
$: n("<a4 c5 e5> <g4 d5 c5>").scale("a:minor")
  .palindrome()
  .slow(4)
  .apply(leadSynth)

// Foundational, chordal bassline with new progression
$: n("a1 f1 c1 g1")
  .slow(4)
  .apply(bassSynth)

// Groovier, punchier house beat
$: stack(
  s("bd ~ [~ bd] bd").gain(0.8).cut(1),
  s("~ sn").gain(0.6).drive(0.4).room(0.3).crush(8),
  s("hh").euclid(5, 8).velocity("[1 0.5 0.8 0.6 0.7]").hpf(7000).decay(0.02).gain(0.3),
  s("~ oh").slow(2).hpf(6000).decay(0.4).gain(0.2).pan(0.7)
).compressor().postgain(0.9)