// BWV 1087 Canon 3 - Variation: Subterranean Bells

let bellVoice = x => x
  .sound("triangle")
  .gain(0.35)
  .attack(0.001)
  .decay(0.8)
  .sustain(0.05)
  .release(1.5)
  .lpf(2800)
  .room(0.7)
  .delay(0.4)
  .delaytime(0.375)
  .delayfeedback(0.5)

let darkOrgan = x => x
  .sound("sawtooth")
  .gain(0.22)
  .attack(0.4)
  .decay(0.5)
  .sustain(0.8)
  .release(2.5)
  .lpf(600)
  .lpq(3)
  .room(0.8)

let ghostVoice = x => x
  .sound("sine")
  .gain(0.15)
  .attack(0.3)
  .decay(0.2)
  .sustain(0.6)
  .release(1.2)
  .lpf(1800)

setcps(54/60/4)

// Track 1 - the melody now descends into darkness, inverted and haunted
$: note("e4 ~ a4 ~ cs5 ~ ~ e5 ~ ~ d5 b4 ~ ~ a4 ~")
  .slow(4)
  .apply(bellVoice)
  .pan(0.3)
  .every(3, x => x.octave(3).gain(0.25))

// Track 2 - shifted to phrygian darkness, organ drones
$: note("<e2 f2> <a2 bf2> <d2 e2> <a2 g2>")
  .slow(8)
  .apply(darkOrgan)
  .pan(0.7)
  .jux(x => x.note("<b2 c3> <e3 f3> <a2 bf2> <e3 d3>"))

// Track 3 - replaced nervous pulse with tolling funeral bells
$: note("e2 ~ ~ ~ a1 ~ ~ ~ e2 ~ a1 ~ ~ ~ ~ ~")
  .slow(4)
  .sound("triangle")
  .gain(0.28)
  .attack(0.01)
  .decay(1.2)
  .sustain(0.1)
  .release(2)
  .lpf(400)
  .room(0.9)
  .pan(0.5)

// Track 4 - spectral voices rising from below, new counter-melody
$: n("0 3 7 10 7 3 0 -2")
  .scale("A:phrygian")
  .octave(5)
  .slow(5)
  .apply(ghostVoice)
  .delay(0.6)
  .delaytime(0.5)
  .delayfeedback(0.55)
  .pan(sine.range(0.2, 0.8).slow(7))

// Track 5 - whispering high harmonics, new texture
$: note("e7 ~ b6 ~ ~ a6 ~ ~ ~ e7 ~ ~ b6 ~ ~ ~")
  .slow(6)
  .sound("sine")
  .gain(0.08)
  .attack(0.2)
  .decay(0.3)
  .sustain(0.4)
  .release(1)
  .lpf(5000)
  .delay(0.7)
  .delaytime(0.666)
  .delayfeedback(0.4)
  .pan(0.9)
  .room(0.6)

// Track 6 - the abyss speaks, deep sub presence
$: note("a0 ~ ~ ~ ~ ~ ~ ~ e1 ~ ~ ~ ~ ~ ~ ~")
  .slow(16)
  .sound("sawtooth")
  .gain(0.25)
  .attack(2)
  .decay(2)
  .sustain(0.5)
  .release(4)
  .lpf(120)
  .room(0.9)
  .pan(0.5)