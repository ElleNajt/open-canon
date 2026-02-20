// BWV 1087 Canon 3 - Variation: Resurrection Through Fire

// Phoenix voice - rising from ashes, bright and triumphant
let phoenixVoice = x => x
  .sound("supersaw")
  .gain(0.18)
  .attack(0.01)
  .decay(0.3)
  .sustain(0.6)
  .release(0.8)
  .lpf(3500)
  .room(0.5)

// Ground voice - solid foundation returning
let groundVoice = x => x
  .sound("triangle")
  .gain(0.16)
  .attack(0.08)
  .decay(0.5)
  .sustain(0.6)
  .release(0.9)
  .lpf(600)
  .room(0.4)

setcps(108/60/4)

// Track 1 - Theme INVERTED and ascending triumphantly
$: note("d4 eb4 f4 g4 a4 b4 c5 b4")
  .slow(2)
  .apply(phoenixVoice)
  .pan(sine.range(0.3, 0.7).slow(4))
  .delay(0.2)
  .delaytime(0.18)
  .delayfeedback(0.3)

// Track 2 - Counter-melody now in rhythmic unison, driving forward
$: note("[a4 b4] [c5 d5] [e5 d5] [c5 b4] [a4 g4] [a4 b4] [c5 ~] [b4 a4]")
  .slow(2)
  .sound("pulse")
  .gain(0.15)
  .attack(0.01)
  .decay(0.2)
  .sustain(0.4)
  .release(0.4)
  .lpf(2200)
  .room(0.3)
  .pan(0.65)

// Track 3 - DROPPED cluster chaos, restored to pure fifths ascending
$: note("<[d2,a2]> <[e2,b2]> <[f2,c3]> <[g2,d3]>")
  .slow(4)
  .apply(groundVoice)
  .lpq(2)
  .pan(0.4)

// Track 4 - Heartbeat becomes steady pulse, life restored
$: note("d2 d2 d2 d2 e2 e2 f2 g2")
  .slow(2)
  .sound("square")
  .gain(0.14)
  .attack(0.001)
  .decay(0.08)
  .sustain(0.1)
  .release(0.15)
  .lpf(500)
  .distort(0.15)
  .pan(0.35)

// Track 5 - DROPPED ghostly choir, replaced with brass fanfare
$: note("[d4,fs4,a4] ~ [g4,b4,d5] ~ [a4,cs5,e5] ~ [d5,fs5,a5] ~")
  .slow(4)
  .sound("sawtooth")
  .gain(0.13)
  .attack(0.05)
  .decay(0.4)
  .sustain(0.7)
  .release(0.6)
  .lpf(1800)
  .lpq(3)
  .room(0.4)
  .pan(0.5)

// Track 6 - Pedal now ascending by fourths, building
$: note("<[d1,a1] [g1,d2] [c2,g2] [f2,c3]>")
  .slow(16)
  .apply(groundVoice)
  .lpf(400)
  .room(0.5)
  .pan(0.5)

// Track 7 - Chromatic wail INVERTED to rising scale of hope
$: note("d4 e4 fs4 g4 a4 b4 cs5 d5")
  .slow(4)
  .sound("sine")
  .gain(0.14)
  .attack(0.05)
  .decay(0.3)
  .sustain(0.5)
  .release(0.6)
  .lpf(sine.range(1200, 3500).slow(4))
  .vibrato(5)
  .pan(0.6)
  .room(0.4)

// Track 8 - NEW: Celebratory rhythmic ostinato replacing funeral bell
$: note("[d3 a3] [d3 a3] [e3 b3] [d3 a3] [fs3 a3] [g3 b3] [a3 d4] [d3 ~]")
  .slow(2)
  .sound("triangle")
  .gain(0.12)
  .attack(0.001)
  .decay(0.15)
  .sustain(0.2)
  .release(0.3)
  .lpf(1400)
  .pan(sine.range(0.3, 0.7).slow(3))