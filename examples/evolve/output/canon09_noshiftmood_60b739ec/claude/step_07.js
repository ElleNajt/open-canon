// BWV 1087 Canon 9 - The Awakening

// The memory doesn't just crystallize — it fractures and reforms.
// What was modal becomes chromatic. What walked now leaps.

let glassVoice = x => x
  .sound("sine")
  .gain(0.19)
  .attack(0.002)
  .decay(1.2)
  .sustain(0.05)
  .release(1.5)
  .lpf(sine.range(2000, 5000).slow(12))
  .room(0.7)
  .delay(0.45)
  .delaytime(0.333)
  .delayfeedback(0.5)

let breathVoice = x => x
  .sound("sawtooth")
  .gain(0.15)
  .attack(0.5)
  .decay(0.4)
  .sustain(0.6)
  .release(1.2)
  .lpf(800)
  .lpq(3)
  .room(0.55)

let sparkVoice = x => x
  .sound("triangle")
  .gain(0.1)
  .attack(0.001)
  .decay(0.08)
  .sustain(0)
  .lpf(2500)
  .room(0.2)

setcps(88/60/4)

// Track 1 - The fanfare inverts, falls instead of rises, questions instead of proclaims
$: note("d6 ~ a5 ~ g5 ~ ~ ~ c6 ~ ~ b5 ~ fs5 ~ ~ g5 ~ ~ ~ ~ ~ e5 ~ ~ ~ d5 ~ ~ ~ ~ ~")
  .slow(16)
  .apply(glassVoice)
  .pan(0.4)
  .juxBy(0.5, x => x.transpose(-12).gain(0.12).late(0.125))

// Track 2 - DROPPED motor pulse, replaced with scattered rain
$: note("g5 ~ d5 ~ ~ b4 ~ ~ g5 ~ ~ ~ e5 ~ ~ fs5")
  .slow(4)
  .apply(sparkVoice)
  .pan(rand.range(0.2, 0.8))
  .degradeBy(0.3)
  .sometimes(x => x.transpose(12))

// Track 3 - Drone becomes a tritone suspension, unresolved tension
$: note("<g1 cs2> <d1 ab1>")
  .slow(10)
  .sound("sawtooth")
  .gain(0.13)
  .attack(4)
  .decay(3)
  .sustain(0.6)
  .release(5)
  .lpf(cosine.range(90, 280).slow(16))
  .lpq(2)
  .pan(0.5)
  .room(0.7)

// Track 4 - REWRITTEN: Chorale dissolves into cluster chords, Messiaen colors
$: note("[g3,b3,cs4,f4] ~ ~ ~ [ab3,c4,e4,g4] ~ ~ ~ [a3,d4,fs4,bb4] ~ ~ ~ [b3,eb4,g4,c5] ~ ~ ~")
  .slow(8)
  .apply(breathVoice)
  .pan(0.5)
  .off(0.5, x => x.transpose(7).gain(0.08))

// Track 5 - Walking bass becomes angular leaps, Webern intervals
$: note("g2 ~ eb3 ~ b1 ~ f2 ~ cs3 ~ a1 ~ d2 ~ bb2 ~ fs2 ~")
  .slow(8)
  .sound("triangle")
  .gain(0.18)
  .attack(0.01)
  .decay(0.25)
  .sustain(0.25)
  .release(0.5)
  .lpf(600)
  .pan(0.45)
  .room(0.35)

// Track 6 - Ghost harmonics now sing a counter-melody, reaching upward
$: note("~ b5 ~ ~ c6 ~ d6 ~ ~ ~ eb6 ~ ~ d6 ~ ~ c6 ~ ~ b5 ~ ~ ~ a5 ~ ~ ~ g5 ~ ~ ~ ~")
  .slow(16)
  .sound("sine")
  .gain(0.14)
  .attack(0.15)
  .decay(0.5)
  .sustain(0.35)
  .release(1)
  .lpf(2200)
  .room(0.8)
  .delay(0.55)
  .delaytime(0.5)
  .delayfeedback(0.6)
  .pan(0.65)

// Track 7 - NEW: Tolling bells replaced with heartbeat pulse, life returning
$: note("g1 g1 ~ ~ ~ ~ ~ ~ g1 g1 ~ ~ ~ ~ ~ ~")
  .slow(8)
  .sound("sine")
  .gain(0.2)
  .attack(0.01)
  .decay(0.4)
  .sustain(0.1)
  .release(0.3)
  .lpf(150)
  .room(0.4)
  .pan(0.5)

// Track 8 - NEW: High spectral shimmer, the ghost finally speaks its name
$: note("d7 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ fs7 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ b6 ~ ~ ~ ~ ~ ~ ~")
  .slow(16)
  .sound("triangle")
  .gain(0.06)
  .attack(0.001)
  .decay(2)
  .sustain(0)
  .release(3)
  .lpf(6000)
  .room(0.9)
  .delay(0.7)
  .delaytime(0.75)
  .delayfeedback(0.65)
  .pan(cosine.range(0.25, 0.75).slow(6))