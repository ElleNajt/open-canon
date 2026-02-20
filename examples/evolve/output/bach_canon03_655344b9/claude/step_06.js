// BWV 1087 Canon 3 - Variation: Cathedral Collapse

// Fractured voice - broken, stuttering
let fracturedVoice = x => x
  .sound("pulse")
  .gain(0.2)
  .attack(0.002)
  .decay(0.1)
  .sustain(0.15)
  .release(0.25)
  .lpf(1800)
  .room(0.4)

// Subterranean voice - deep, grinding
let subVoice = x => x
  .sound("sawtooth")
  .gain(0.16)
  .attack(0.15)
  .decay(0.7)
  .sustain(0.5)
  .release(1.2)
  .lpf(350)
  .room(0.6)

setcps(92/60/4)

// Track 1 - Theme shattered into fragments, gasping
$: note("[g4 ~] [~ fs4] [e4 ~] [~ ~] [d4 c4] [~ b3] [~ a3] [b3 ~]")
  .slow(2)
  .apply(fracturedVoice)
  .pan(sine.range(0.2, 0.8).slow(5))
  .delay(0.3)
  .delaytime(0.33)
  .delayfeedback(0.4)

// Track 2 - Canon now augmented, stretching painfully
$: note("d5 ~ cs5 ~ b4 ~ a4 ~ g4 ~ fs4 ~ e4 ~ fs4 g4")
  .slow(4)
  .sound("triangle")
  .gain(0.18)
  .attack(0.05)
  .decay(0.4)
  .sustain(0.5)
  .release(0.6)
  .lpf(1200)
  .room(0.5)
  .pan(0.7)

// Track 3 - DROPPED dark harmony, replaced with cluster chaos
$: note("<[g2,ab2,a2,bb2]> <[f2,gb2,g2]> <[eb2,e2,f2,gb2]> <[d2,eb2,e2]>")
  .slow(8)
  .apply(subVoice)
  .lpq(4)
  .pan(0.5)

// Track 4 - Ostinato becomes erratic heartbeat
$: note("g2 ~ [g2 g2 g2] ~ ~ g2 ~ [g2 ~] f2 ~ ~ [f2 f2] ~ f2")
  .slow(2)
  .sound("square")
  .gain(0.17)
  .attack(0.001)
  .decay(0.06)
  .sustain(0.08)
  .release(0.1)
  .lpf(400)
  .distort(0.3)
  .pan(0.35)

// Track 5 - DROPPED alarm bells, replaced with ghostly choir
$: note("<[g5,b5,d6] [f5,a5,c6] [eb5,g5,bb5] [d5,fs5,a5]>")
  .slow(8)
  .sound("sine")
  .gain(0.12)
  .attack(0.3)
  .decay(0.5)
  .sustain(0.6)
  .release(1.5)
  .vibrato(4)
  .room(0.7)
  .pan(sine.range(0.3, 0.7).slow(6))

// Track 6 - Pedal now grinding semitone descent
$: note("<[g1,d2] [gb1,db2] [f1,c2] [e1,b1]>")
  .slow(16)
  .apply(subVoice)
  .lpf(300)
  .room(0.7)
  .pan(0.5)

// Track 7 - NEW: Descending chromatic wail
$: note("bb4 a4 ab4 g4 gb4 f4 e4 eb4")
  .slow(4)
  .sound("sawtooth")
  .gain(0.14)
  .attack(0.02)
  .decay(0.3)
  .sustain(0.4)
  .release(0.5)
  .lpf(sine.range(800, 2500).slow(4))
  .slide(0.1)
  .pan(0.6)
  .delay(0.25)
  .delaytime(0.25)
  .delayfeedback(0.35)

// Track 8 - NEW: Tolling funeral bell
$: note("[g2 ~] ~ ~ ~ [g2 ~] ~ [f2 ~] ~")
  .slow(4)
  .sound("triangle")
  .gain(0.15)
  .attack(0.001)
  .decay(0.8)
  .sustain(0.3)
  .release(1.5)
  .ring(0.5)
  .ringf(200)
  .room(0.6)
  .pan(0.4)