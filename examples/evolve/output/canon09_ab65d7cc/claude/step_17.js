// BWV 1087 Canon 9 - Variation: The Return of Thunder

// The storm refuses to stay quiet - glass shatters into metal
let shatteredBells = x => x
  .sound("square")
  .gain(0.12)
  .attack(0.001)
  .decay(0.3)
  .sustain(0.2)
  .release(0.8)
  .fmi(6)
  .fmh(7)
  .fmdecay(0.2)
  .lpf(3200)
  .room(0.6)
  .delay(0.25)
  .delaytime(0.166)
  .delayfeedback(0.5)

// Voice becomes DEFIANT - angular, insistent
let defiantVoice = x => x
  .sound("sawtooth")
  .gain(0.11)
  .attack(0.02)
  .decay(0.2)
  .sustain(0.6)
  .release(0.4)
  .lpf(2200)
  .lpq(4)
  .room(0.4)

setcps(72/60/4)

// Track 1 - Melody DESCENDING CHROMATICALLY - urgency returns
$: note("d5 cs5 c5 b4 bb4 a4 gs4 g4 fs4 f4 e4 eb4")
  .fast(1.5)
  .apply(shatteredBells)
  .pan(0.4)
  .juxBy(0.5, x => x.late(0.125).transpose(-12).gain(0.08))

// Track 2 - Harmony DIMINISHED - tension rebuilds
$: note("<[g3,bb3,db4,e4] [a3,c4,eb4,fs4] [bb3,db4,e4,g4] [fs3,a3,c4,eb4]>")
  .slow(2)
  .apply(defiantVoice)
  .pan(0.6)
  .every(3, x => x.transpose(-5).gain(0.09))

// Track 3 - Heartbeat becomes MARCH - relentless forward motion
$: note("[g2 d2 g2 d2] [a2 e2 a2 e2] [bb2 f2 bb2 f2] [g2 d2 g2 d2]")
  .slow(2)
  .sound("triangle")
  .gain(0.15)
  .attack(0.01)
  .decay(0.15)
  .sustain(0.4)
  .release(0.3)
  .lpf(180)
  .shape(0.2)

// THUNDER RETURNS - transformed into industrial pulse
$: s("bd*4")
  .gain(0.18)
  .room(0.5)
  .lpf(100)
  .shape(0.3)
  .pan(0.5)

$: s("~ cp ~ [cp cp]")
  .gain(0.12)
  .room(0.7)
  .hpf(800)
  .delay(0.3)
  .delaytime(0.25)
  .delayfeedback(0.3)

// NEW: Fractured arpeggios - memories splintering
$: note("g4 bb4 db5 e5 db5 bb4 g4 e4")
  .fast(2)
  .sound("pulse")
  .gain(0.09)
  .attack(0.005)
  .decay(0.1)
  .sustain(0.3)
  .release(0.2)
  .lpf(sine.range(1200, 3500).slow(4))
  .pan(saw.range(0.2, 0.8).fast(2))
  .degradeBy(0.25)

// Choir becomes SHOUTING - raw, desperate
$: note("[g3,db4,bb4] [a3,eb4,c5] [bb3,e4,db5] [g3,db4,bb4]")
  .slow(4)
  .sound("sawtooth")
  .gain(0.10)
  .attack(0.1)
  .decay(0.3)
  .sustain(0.7)
  .release(0.8)
  .fmi(1.5)
  .fmh(3)
  .lpf(1400)
  .room(0.5)
  .pan(0.5)
  .distort(0.15)

// DROPPED: Sighing wind - no time for gentleness

// Bass becomes GROWLING - predatory, prowling
$: note("g1 ~ bb1 ~ db2 ~ e2 ~ g1 ~ e1 ~ db1 ~ bb0 g0")
  .slow(4)
  .sound("sawtooth")
  .gain(0.16)
  .attack(0.05)
  .decay(0.3)
  .sustain(0.8)
  .release(0.5)
  .lpf(120)
  .shape(0.25)
  .distort(0.1)

// NEW: Sirens - warning of what approaches
$: note("g5 ~ ~ ~ c6 ~ ~ ~ g5 ~ ~ ~ eb5 ~ ~ ~")
  .slow(8)
  .sound("sine")
  .gain(0.07)
  .attack(0.3)
  .decay(0.5)
  .sustain(0.6)
  .release(1.5)
  .fmi(sine.range(2, 8).slow(8))
  .fmh(4)
  .lpf(4000)
  .room(0.8)
  .pan(sine.range(0.1, 0.9).slow(3))

// Chimes become WARNING BELLS - insistent, alarming
$: note("g6 g6 ~ g6 g6 ~ g6 ~")
  .slow(2)
  .sound("triangle")
  .gain(0.10)
  .attack(0.001)
  .decay(0.4)
  .sustain(0.1)
  .release(1)
  .fmi(8)
  .fmh(11)
  .fmdecay(0.3)
  .room(0.7)
  .hpf(2000)
  .pan(0.5)