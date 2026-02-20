// Goldberg Variations - Aria Reimagined (Variation: The Letting Go)

let etherealStrings = x => x
  .sound("sawtooth")
  .gain(0.18)
  .attack(0.3)
  .decay(0.5)
  .sustain(0.6)
  .release(1.2)
  .lpf(1800)
  .lpq(2)
  .room(0.7)
  .size(0.8)
  .delay(0.4)
  .delaytime(0.5)
  .delayfeedback(0.5)

let glassChimes = x => x
  .sound("sine")
  .gain(0.15)
  .attack(0.001)
  .decay(0.8)
  .sustain(0.05)
  .release(1.5)
  .fmi(5)
  .fmh(11)
  .room(0.6)
  .delay(0.4)
  .delaytime(0.666)
  .delayfeedback(0.45)

setcps(54/60/4)

// The melody descends now - acceptance, release, falling like autumn
let releaseMelody = "g5 ~ fs5 e5 ~ d5 ~ c5 b4 ~ a4 g4 ~ fs4 ~ g4"

// Bass becomes sparse - breath returning, space between heartbeats
let breathingBass = "g2 ~ ~ ~ eb2 ~ ~ ~ c2 ~ ~ ~ d2 ~ ~ g1"

// Major 7ths and suspended chords - tension dissolving into light
let suspendedLight = "[g3,b3,d4,fs4] ~ ~ ~ [c3,e3,g3,b3] ~ ~ ~ [a2,e3,a3,d4] ~ ~ ~"

// Track 1 - melody descending, finally at peace
$: note(releaseMelody)
  .slow(8)
  .apply(etherealStrings)
  .pan(sine.range(0.3, 0.7).slow(16))
  .lpf(perlin.range(800, 2400).slow(8))

// Track 2 - breathing bass, whale-song depths
$: note(breathingBass)
  .slow(8)
  .sound("triangle")
  .gain(0.14)
  .octave(2)
  .attack(0.2)
  .decay(0.6)
  .sustain(0.4)
  .release(1)
  .lpf(300)
  .room(0.5)
  .pan(0.5)

// Track 3 - suspended harmonies like morning mist
$: note(suspendedLight)
  .slow(8)
  .sound("sine")
  .gain(0.12)
  .attack(0.15)
  .decay(0.4)
  .sustain(0.5)
  .release(1)
  .lpf(1400)
  .room(0.6)
  .pan(0.45)
  .delay(0.3)
  .delaytime(0.333)
  .delayfeedback(0.4)

// Track 4 - drums dissolve into texture, rain on leaves
$: s("~ hh ~ [~ hh] ~ ~ hh ~ ~ [hh ~] ~ ~ ~ hh ~ ~")
  .slow(4)
  .gain(0.08)
  .lpf(2500)
  .hpf(800)
  .room(0.7)
  .pan(rand.range(0.2, 0.8))
  .delay(0.5)
  .delaytime(0.25)
  .delayfeedback(0.5)

// Track 5 - lydian brightness emerging, hope
$: n("4 ~ 6 ~ 2 ~ 4 ~".slow(4))
  .scale("G:lydian")
  .slow(4)
  .apply(glassChimes)
  .octave(5)
  .pan(cosine.range(0.2, 0.8).slow(12))

// Track 6 - a new voice: arpeggiated piano, memory surfacing
$: note("g3 b3 d4 g4 b4 d5 b4 g4 d4 b3 g3 d3")
  .slow(6)
  .sound("piano")
  .gain(0.11)
  .release(1.5)
  .lpf(2000)
  .room(0.5)
  .pan(0.55)
  .velocity(sine.range(0.4, 0.8).slow(6))

// Track 7 - sub bass pulse, heartbeat slowing to rest
$: note("g1 ~ ~ ~ ~ ~ ~ ~ g1 ~ ~ ~ ~ ~ ~ ~")
  .slow(8)
  .sound("sine")
  .gain(0.12)
  .attack(0.3)
  .decay(1)
  .sustain(0.3)
  .release(2)
  .lpf(120)
  .pan(0.5)