// BWV 1087 Canon 9 - Variation: The Machine Awakens

// The ghost voices transform into mechanical clockwork
let clockworkVoice = x => x
  .sound("pulse")
  .gain(0.3)
  .attack(0.005)
  .decay(0.15)
  .sustain(0.4)
  .release(0.3)
  .lpf(saw.range(800, 2400).slow(8))
  .lpq(4)
  .room(0.3)
  .delay(0.25)
  .delaytime(0.125)
  .delayfeedback(0.6)

// The bass becomes a grinding industrial engine
let engineBass = x => x
  .sound("sawtooth")
  .gain(0.4)
  .attack(0.01)
  .decay(0.3)
  .sustain(0.8)
  .lpf(400)
  .lpq(8)
  .shape(0.35)
  .room(0.2)

setcps(75/60/4)

// Track 1 - Original melody transformed into stuttering morse code
$: note("g5*2 ~ d6*3 ~ d6 ~ g5*2 ~ d5 ~ a5*3 ~ e5 cs6")
  .slow(8)
  .apply(clockworkVoice)
  .pan(sine.range(0.2, 0.8).slow(4))
  .sometimes(x => x.ply(2))

// Track 2 - REPLACED: Rising mechanical arpeggios, hope from the machine
$: note("g3 b3 d4 g4 b4 d5 g5 d5 b4 g4 d4 b3")
  .slow(6)
  .sound("triangle")
  .gain(0.25)
  .attack(0.01)
  .decay(0.2)
  .sustain(0.3)
  .release(0.4)
  .lpf(cosine.range(1000, 3000).slow(12))
  .pan(0.6)
  .late(0.0625)
  .every(4, x => x.transpose(7))

// Track 3 - Bass becomes a relentless driving fifth, propulsive energy
$: note("[g1 d2]*4")
  .slow(2)
  .apply(engineBass)
  .pan(0.5)
  .every(4, x => x.transpose(-5))

// NEW: Mechanical percussion lattice - interlocking gears
$: s("hh:2*8")
  .slow(2)
  .gain(0.2)
  .pan(perlin.range(0.3, 0.7))
  .speed(1.5)
  .hpf(6000)
  .euclid(11, 16)
  .jux(x => x.late(0.0625).speed(2))

// NEW: Factory whistle - piercing signal calls
$: note("<g6 d7 a6 e7>")
  .slow(16)
  .sound("sine")
  .gain(0.15)
  .attack(0.5)
  .decay(0.3)
  .sustain(0.6)
  .release(1)
  .fmi(2)
  .fmh(3)
  .fmdecay(0.8)
  .room(0.6)
  .pan(0.5)
  .tremolo(0.3)
  .tremolosync(4)

// NEW: Glitching data stream - the machine thinks
$: note("c5 e5 g5 b5 d6 f6 a5 cs6")
  .slow(4)
  .sound("square")
  .gain(0.12)
  .attack(0.001)
  .decay(0.05)
  .sustain(0)
  .lpf(4000)
  .crush(6)
  .pan(rand)
  .degradeBy(0.4)