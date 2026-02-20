// BWV 1087 Canon 9 - Variation: The Collapse Into Stillness

// After the thunder - exhaustion. The defiance breaks into fragments
let exhaustedGlass = x => x
  .sound("sine")
  .gain(0.08)
  .attack(0.3)
  .decay(0.8)
  .sustain(0.1)
  .release(2)
  .fmi(2)
  .fmh(5)
  .fmdecay(0.6)
  .lpf(1800)
  .room(0.85)
  .delay(0.4)
  .delaytime(0.333)
  .delayfeedback(0.6)

// Voice finally SURRENDERS - hollow, floating
let hollowVoice = x => x
  .sound("triangle")
  .gain(0.09)
  .attack(0.15)
  .decay(0.4)
  .sustain(0.3)
  .release(1.2)
  .lpf(900)
  .lpq(2)
  .room(0.7)

setcps(52/60/4)

// Track 1 - Melody becomes SPARSE - only the essential tones remain
$: note("g5 ~ ~ ~ ~ eb5 ~ ~ ~ ~ d5 ~ ~ ~ ~ ~")
  .slow(4)
  .apply(exhaustedGlass)
  .pan(0.45)
  .juxBy(0.3, x => x.late(0.5).transpose(-19).gain(0.06))

// Track 2 - Harmony OPENS UP - major creeping in like dawn
$: note("<[g3,b3,d4] ~ ~ [c4,e4,g4] ~ ~>")
  .slow(3)
  .apply(hollowVoice)
  .pan(0.55)

// Track 3 - Heartbeat becomes BREATH - barely there
$: note("[g2 ~ ~ ~] [~ ~ d2 ~] [~ g2 ~ ~] [~ ~ ~ d2]")
  .slow(4)
  .sound("sine")
  .gain(0.12)
  .attack(0.2)
  .decay(0.5)
  .sustain(0.2)
  .release(0.8)
  .lpf(90)

// Thunder GONE - replaced by distant rumble memory
$: s("bd ~ ~ ~ ~ ~ bd ~")
  .slow(4)
  .gain(0.10)
  .room(0.9)
  .lpf(60)
  .pan(0.5)

// DROPPED: cp track - silence where violence was

// NEW: Music box memory - innocence surfacing through wreckage
$: note("b5 d6 g5 b5 d6 g6 d6 b5")
  .slow(2)
  .sound("sine")
  .gain(0.07)
  .attack(0.001)
  .decay(0.2)
  .sustain(0.1)
  .release(0.6)
  .fmi(3)
  .fmh(4)
  .fmdecay(0.15)
  .lpf(5000)
  .pan(sine.range(0.3, 0.7).slow(6))
  .degradeBy(0.4)

// Choir becomes HUMMING - closed mouth, internal
$: note("[g3,d4] ~ [b3,d4] ~ [c4,e4] ~ [g3,d4] ~")
  .slow(4)
  .sound("sine")
  .gain(0.10)
  .attack(0.4)
  .decay(0.3)
  .sustain(0.6)
  .release(1.5)
  .lpf(700)
  .room(0.6)
  .pan(0.5)

// Bass ASCENDS - rising from the depths toward light
$: note("g1 ~ ~ d2 ~ ~ g2 ~ ~ d3 ~ ~ g3 ~ ~ ~")
  .slow(8)
  .sound("triangle")
  .gain(0.13)
  .attack(0.3)
  .decay(0.5)
  .sustain(0.5)
  .release(1)
  .lpf(200)

// NEW: Ghost melodies - echoes of the defiant theme, dissolving
$: note("d5 cs5 ~ ~ c5 ~ ~ ~ b4 ~ ~ ~ ~ ~ ~ ~")
  .slow(4)
  .sound("square")
  .gain(0.06)
  .attack(0.1)
  .decay(0.3)
  .sustain(0.2)
  .release(1.5)
  .lpf(1200)
  .room(0.9)
  .delay(0.5)
  .delaytime(0.5)
  .delayfeedback(0.7)
  .pan(0.3)

// Warning bells become WIND CHIMES - random, gentle
$: note("g6 ~ ~ ~ b6 ~ ~ ~ d7 ~ ~ ~ ~ ~ ~ ~")
  .slow(8)
  .sound("sine")
  .gain(0.06)
  .attack(0.01)
  .decay(0.8)
  .sustain(0)
  .release(2)
  .fmi(6)
  .fmh(9)
  .fmdecay(0.5)
  .room(0.95)
  .hpf(3000)
  .pan(rand.range(0.2, 0.8))
  .degradeBy(0.5)

// NEW: A single voice emerges - the theme reborn, simple, pure
$: note("~ ~ ~ ~ ~ ~ ~ ~ g4 ~ b4 ~ d5 ~ g5 ~")
  .slow(8)
  .sound("sine")
  .gain(0.11)
  .attack(0.5)
  .decay(0.3)
  .sustain(0.7)
  .release(2)
  .lpf(2000)
  .room(0.7)
  .pan(0.5)