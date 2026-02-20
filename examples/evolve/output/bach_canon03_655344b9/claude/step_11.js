// BWV 1087 Canon 3 - Variation: Eye of the Storm

// Calm voice - sudden stillness, crystalline
let calmVoice = x => x
  .sound("sine")
  .gain(0.12)
  .attack(0.1)
  .decay(0.4)
  .sustain(0.6)
  .release(1.2)
  .lpf(2400)
  .room(0.6)

// Distant voice - echoes of chaos, far away
let distantVoice = x => x
  .sound("triangle")
  .gain(0.08)
  .attack(0.05)
  .decay(0.5)
  .sustain(0.3)
  .release(0.8)
  .lpf(1200)
  .room(0.7)

setcps(72/60/4)

// Track 1 - Theme now ASCENDS in pure major, hope emerging
$: note("d4 e4 fs4 g4 a4 b4 cs5 d5")
  .slow(8)
  .apply(calmVoice)
  .pan(0.5)
  .delay(0.5)
  .delaytime(0.25)
  .delayfeedback(0.6)

// Track 2 - Tremolo transforms to gentle pulsing thirds
$: note("[d4,fs4] ~ [e4,g4] ~ [fs4,a4] ~ [g4,b4] ~")
  .slow(2)
  .sound("sine")
  .gain(0.09)
  .attack(0.08)
  .decay(0.3)
  .sustain(0.5)
  .release(0.4)
  .lpf(1800)
  .room(0.5)
  .pan(0.6)

// Track 3 - Harmony resolves to luminous major suspensions
$: note("<[d3,a3,e4]> <[g3,b3,d4]> <[a3,cs4,e4]> <[d3,fs3,a3]>")
  .slow(8)
  .apply(calmVoice)
  .lpq(2)
  .pan(0.4)

// Track 4 - Heartbeat steadies, breath returns
$: note("d2 ~ ~ ~ d2 ~ ~ ~")
  .slow(2)
  .sound("sine")
  .gain(0.1)
  .attack(0.05)
  .decay(0.3)
  .sustain(0.4)
  .release(0.5)
  .lpf(400)
  .pan(0.5)

// Track 5 - Wind becomes a single sustained high tone, shimmering
$: note("a5")
  .slow(16)
  .sound("triangle")
  .gain(0.07)
  .attack(0.5)
  .decay(1)
  .sustain(0.8)
  .release(2)
  .lpf(cosine.range(2000, 4000).slow(8))
  .tremolo(0.3)
  .tremolosync(4)
  .room(0.6)
  .pan(0.5)

// Track 6 - Pedal now a perfect fifth, grounded
$: note("<[d2,a2]>")
  .slow(16)
  .apply(calmVoice)
  .lpf(500)
  .room(0.7)
  .pan(0.5)

// Track 7 - Bells become distant memory, sparse and pure
$: note("d5 ~ ~ ~ ~ ~ ~ ~ a4 ~ ~ ~ ~ ~ ~ ~")
  .slow(4)
  .sound("sine")
  .gain(0.08)
  .attack(0.01)
  .decay(1.5)
  .sustain(0.2)
  .release(2.5)
  .lpf(2000)
  .room(0.8)
  .delay(0.6)
  .delaytime(0.5)
  .delayfeedback(0.55)
  .pan(0.5)

// Track 8 - NEW: Birdsong returns, life after storm
$: note("fs6 ~ a6 ~ ~ e6 ~ ~ fs6 a6 ~ ~ ~ d6 ~ ~")
  .slow(4)
  .sometimesBy(0.3, x => x.add(12))
  .sound("sine")
  .gain(0.06)
  .attack(0.01)
  .decay(0.15)
  .sustain(0.1)
  .release(0.3)
  .lpf(5000)
  .hpf(2000)
  .room(0.5)
  .pan(rand.range(0.2, 0.8))