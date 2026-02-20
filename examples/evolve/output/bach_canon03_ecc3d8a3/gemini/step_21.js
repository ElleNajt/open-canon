setcps(120/60/4)

// --- Voices ---
let padVoice = x => x
  .sound("sawtooth")
  .gain(0.3)
  .attack(3)
  .release(8)
  .lpf(saw.range(500, 2500).slow(32))
  .lpq(6)
  .trem(sine.range(0.1, 0.4).slow(16))
  .room(0.5)
  .size(0.9)
  .delay(0.4)
  .dt(0.75)
  .dfb(0.6)

let bassVoice = x => x
  .sound("square")
  .gain(0.45)
  .attack(0.01)
  .release(0.25)
  .lpf(250)
  .lpenv(2200)
  .lpdecay(0.1)
  .octave(-2)
  .cut(1)
  .drive(0.2)
  .jux(p => p.octave(-1).gain(p.gain()*0.7).lpf(150))

let arpVoice = x => x
  .sound("triangle")
  .gain(0.2)
  .distort(0.1)
  .shape(0.1)
  .release(0.25)
  .velocity(perlin.range(0.6, 1).slow(6))
  .delay(0.5)
  .dt(0.25)
  .dfb(0.7)
  .pan(perlin.range(0.2, 0.8).slow(9))

let leadVoice = x => x
  .sound("supersaw")
  .gain(0.25)
  .attack(0.02)
  .release(0.8)
  .lpf(800)
  .lpenv(5000)
  .lpdecay(0.4)
  .delay(0.6)
  .dfb(0.7)
  .dt(0.375)
  .room(0.6)

// --- Samples ---
samples('shabda/speech:deep_space,endless,voyage')

// --- Harmony & Melody ---
const chords = n("c4 g3 ab3 f3").slow(4).scale("C:minor").chord("m9 m7 M7 m7")

$: chords.voicing().apply(padVoice)

$: n("c g ab f").slow(4).euclid(5, 8).apply(bassVoice).late(4)

$: chords.arp("updown").fast(2).apply(arpVoice).late(2).degradeBy(0.1)

$: n("g4 ~ eb5 ~ d5 ~ c5 eb5 g5 ~").slow(2).scale("C:natural_minor")
  .sometimes(p => p.add(12))
  .apply(leadVoice)
  .orbit(1)
  .late(8)

// --- Drums & Percussion ---
$: stack(
    s("bd*4").gain(1.1).cut(1),
    s("~ cp").gain(0.8).lpf(9000).shape(0.2).release(0.2),
    s("hh*8").fast(2).gain(0.4).velocity(perlin.range(0.5, 0.9).slow(5))
      .lpf(8000).swing(0.05),
    s("~ ~ ~ oh").gain(0.5).lpf(11000).release(0.4).room(0.2),
    s("~*15 cr").slow(16).gain(0.4).room(0.8).lpf(12000)
  ).gain(0.9)
   .compressor()
   .compressorRatio(10)
   .compressorAttack(0.01)
   .compressorRelease(0.25)
   .postgain(1.1)

// --- Vocals ---
$: s("<deep_space endless voyage>").slow(4)
  .chop(perlin.range(4,12).slow(7))
  .every(3, p => p.rev())
  .speed(perlin.range(0.9, 1.1).slow(11))
  .hpf(400).lpf(7000).room(0.4)
  .delay(0.5).dfb(0.6).dt("3/8")
  .gain(0.8)
  .late(4)