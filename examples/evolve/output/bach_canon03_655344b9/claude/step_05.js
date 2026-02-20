// BWV 1087 Canon 3 - Variation: Tempest Rising

// Sharp percussive voice
let sharpVoice = x => x
  .sound("sawtooth")
  .gain(0.22)
  .attack(0.001)
  .decay(0.15)
  .sustain(0.2)
  .release(0.4)
  .lpf(2500)
  .room(0.3)

// Dark rumbling voice
let darkVoice = x => x
  .sound("square")
  .gain(0.15)
  .attack(0.08)
  .decay(0.5)
  .sustain(0.6)
  .release(0.8)
  .lpf(600)
  .room(0.5)

setcps(108/60/4)

// Track 1 - Theme transformed: urgent, minor, driving downward
$: note("[g4 fs4 e4] [d4 c4 b3] [a3 b3 c4] [d4 ~ ~]")
  .slow(2)
  .apply(sharpVoice)
  .pan(sine.range(0.3, 0.7).slow(3))

// Track 2 - Canon inverted and compressed, chasing
$: note("[d5 cs5 b4] [a4 g4 fs4] [e4 fs4 g4] [a4 ~ ~]")
  .slow(2)
  .late(0.25)
  .apply(sharpVoice)
  .pan(sine.range(0.7, 0.3).slow(3))

// Track 3 - Harmony darkens: minor with tritone tension
$: note("<[g2,bb2,d3] [c3,e3,gb3]> <[d2,f2,ab2] [g2,bb2,d3]>")
  .slow(4)
  .apply(darkVoice)
  .pan(0.5)

// Track 4 - DROPPED pizzicato, replaced with driving ostinato
$: note("g2 g2 [g2 g2] g2 f2 f2 [f2 f2] f2")
  .fast(2)
  .sound("triangle")
  .gain(0.2)
  .attack(0.001)
  .decay(0.08)
  .sustain(0.1)
  .release(0.15)
  .lpf(500)
  .room(0.2)
  .pan(0.4)

// Track 5 - Bird calls become alarm bells, insistent
$: note("[d6 d6] ~ [eb6 eb6] ~ [d6 eb6 d6 eb6] ~")
  .slow(2)
  .sound("triangle")
  .gain(0.14)
  .attack(0.001)
  .decay(0.05)
  .sustain(0.02)
  .release(0.2)
  .ring(0.4)
  .ringf(1200)
  .delay(0.2)
  .delaytime(0.166)
  .delayfeedback(0.5)
  .pan(rand.range(0.2, 0.8))

// Track 6 - NEW: Thundering pedal point with dissonance
$: note("[g1,d2] ~ ~ [g1,ab1,d2] ~ [g1,d2] [f1,c2] ~")
  .slow(4)
  .sound("sawtooth")
  .gain(0.18)
  .attack(0.1)
  .decay(0.6)
  .sustain(0.7)
  .release(1)
  .lpf(400)
  .lpq(3)
  .room(0.6)
  .pan(0.5)

// Track 7 - NEW: Syncopated middle voice adding urgency
$: note("~ [bb3 c4] ~ [a3 bb3] ~ [g3 a3] [f3 ~] ~")
  .slow(2)
  .sound("pulse")
  .gain(0.13)
  .attack(0.01)
  .decay(0.2)
  .sustain(0.3)
  .release(0.3)
  .lpf(1800)
  .pan(0.6)