// BWV 1087 Canon 9 - The Memory Crystallizes

// The ghost finds its voice. Not arguing, not mourning — singing.
let crystalVoice = x => x
  .sound("triangle")
  .gain(0.22)
  .attack(0.01)
  .decay(0.8)
  .sustain(0.1)
  .release(1.2)
  .lpf(sine.range(1200, 3500).slow(10))
  .lpq(5)
  .room(0.6)
  .delay(0.35)
  .delaytime(0.375)
  .delayfeedback(0.4)

let choirVoice = x => x
  .sound("sawtooth")
  .gain(0.18)
  .attack(0.3)
  .decay(0.6)
  .sustain(0.5)
  .release(1)
  .lpf(1100)
  .lpq(2)
  .room(0.5)

let pulseVoice = x => x
  .sound("square")
  .gain(0.12)
  .attack(0.001)
  .decay(0.15)
  .sustain(0)
  .lpf(900)
  .room(0.3)

setcps(80/60/4)

// Track 1 - REWRITTEN: The melody becomes a fanfare, rising fourths and fifths
$: note("g4 c5 ~ d5 ~ g5 ~ ~ d5 g5 a5 ~ ~ ~ d6 ~ ~ ~ ~ ~ c6 ~ g5 ~ ~ ~ ~ ~ ~ ~ ~ ~")
  .slow(16)
  .apply(crystalVoice)
  .pan(0.35)
  .juxBy(0.4, x => x.transpose(12).gain(0.08).late(0.0625))

// Track 2 - DROPPED bells, replaced with pulsing motor rhythm
$: note("g3 ~ g3 g3 ~ g3 ~ ~ c4 ~ c4 c4 ~ ~ d4 ~")
  .slow(4)
  .apply(pulseVoice)
  .pan(0.6)
  .every(3, x => x.fast(2).gain(0.09))

// Track 3 - The drone shifts to fifths, breathing slowly
$: note("<g1 d2> <d1 a1>")
  .slow(8)
  .sound("sawtooth")
  .gain(0.14)
  .attack(3)
  .decay(2)
  .sustain(0.7)
  .release(4)
  .lpf(cosine.range(120, 350).slow(14))
  .lpq(1)
  .pan(0.5)
  .room(0.65)

// Track 4 - Chorale shifts to modal harmony, Dorian color
$: note("[g3,bb3,d4,f4] ~ ~ [a3,c4,eb4,g4] ~ ~ [bb3,d4,f4,a4] ~ [c4,eb4,g4,bb4] ~ ~ ~ ~ ~ ~ ~ ~")
  .slow(8)
  .apply(choirVoice)
  .pan(0.5)
  .off(0.25, x => x.transpose(12).gain(0.1))

// Track 5 - Bass becomes a walking line, finally moving forward
$: note("g2 a2 bb2 c3 d3 eb3 d3 c3 bb2 a2 g2 f2 eb2 d2 c2 d2")
  .slow(8)
  .sound("triangle")
  .gain(0.2)
  .attack(0.02)
  .decay(0.3)
  .sustain(0.3)
  .release(0.4)
  .lpf(700)
  .pan(0.5)
  .room(0.3)

// Track 6 - NEW: Ghost harmonics, singing in parallel tenths above the bass
$: note("~ ~ d5 ~ ~ eb5 ~ ~ f5 ~ ~ g5 ~ ~ a5 ~ ~ bb5 ~ ~ a5 ~ ~ g5 ~ ~ f5 ~ ~ eb5 ~ ~")
  .slow(16)
  .sound("sine")
  .gain(0.13)
  .attack(0.1)
  .decay(0.4)
  .sustain(0.3)
  .release(0.8)
  .lpf(2000)
  .room(0.75)
  .delay(0.5)
  .delaytime(0.666)
  .delayfeedback(0.55)
  .pan(0.7)

// Track 7 - NEW: Distant chimes marking the downbeats
$: note("g6 ~ ~ ~ ~ ~ ~ ~ c7 ~ ~ ~ ~ ~ ~ ~ d7 ~ ~ ~ ~ ~ ~ ~ g6 ~ ~ ~ ~ ~ ~ ~")
  .slow(16)
  .sound("sine")
  .gain(0.08)
  .attack(0.001)
  .decay(1.5)
  .sustain(0)
  .release(2)
  .lpf(4000)
  .room(0.8)
  .pan(sine.range(0.3, 0.7).slow(8))