setcps(122/60/4)

// --- Voices ---
let padVoice = x => x
  .sound("supersaw")
  .gain(0.25)
  .attack(3)
  .release(9)
  .lpf(sine.range(800, 3500).slow(32))
  .lpq(4)
  .room(0.6)
  .size(0.95)
  .delay(0.5)
  .dt(0.75)
  .dfb(0.65)

let bassVoice = x => x
  .sound("pulse")
  .gain(0.38)
  .attack(0.01)
  .release(0.3)
  .lpf(180)
  .lpenv(2500)
  .lpdecay(0.05)
  .octave(-2)
  .cut(1)
  .shape(0.25)
  .drive(0.5)
  .crush(7)
  .jux(p => p.octave(-1).sound("sine").gain(p.gain()*0.9).lpf(120))

let arpVoice = x => x
  .sound("sawtooth")
  .gain(0.1)
  .lpf(1200)
  .lpenv(4000)
  .lpdecay(0.08)
  .release(0.15)
  .velocity(perlin.range(0.3, 1).slow(9))
  .delay(0.6)
  .dt("3/16")
  .dfb(0.7)
  .pan(perlin.range(0.05, 0.95).slow(13))
  .crush(9)

let leadVoice = x => x
  .sound("supersaw")
  .gain(0.2)
  .attack(0.01)
  .release(1)
  .vowel("a*4 e*4 i*4 o*4 u*4")
  .lpf(2000)
  .lpenv(3000)
  .lpdecay(0.4)
  .shape(0.25)
  .room(0.7)
  .size(0.95)
  .delay(0.5)
  .dfb(0.6)
  .dt(0.375)

// --- Samples ---
samples('shabda/speech:deep_space,endless,voyage,celestial,journey')

// --- Harmony & Melody ---
const chords = n("c4 g3 ab3 eb4 | f4 bb3 eb4 g4").slow(8).scale("C:minor").chord("m9 m7 M7 M7 | m7 m7 M7 m7")

$: chords.voicing().apply(padVoice)

$: n("c3 ~ c3 ~ g2 ~ ab2 ~ | f2 ~ bb2 ~ eb3 g2 ~ g2").slow(8).apply(bassVoice)

$: chords.arp("up down rand").fast(2)
  .every(8, p => p.transpose(7))
  .apply(arpVoice)
  .late(0.5)
  .degradeBy(0.02)

$: n("g4 ~ eb5 d5 c5 | bb4 f4 ab4 g4 | c5 bb4 g4 f4 | eb4 f4 g4 ~").slow(8).scale("C:natural_minor")
  .slide(0.05)
  .sometimesBy(0.2, p => p.octave(1))
  .apply(leadVoice)
  .orbit(1)
  .late(4)

// --- Drums & Percussion ---
$: stack(
    s("bd*4").gain(1.1).cut(1),
    s("~ cp ~ cp").gain(0.8).every(4, p => p.rev()),
    s("~ ~ [rim rim] ~ ~ rim ~").fast(2).gain(0.4).lpf(3000),
    s("[hh hh] hh [~ hh] hh").fast(2)
      .velocity(perlin.range(0.5, 1).slow(5)).gain(0.5)
      .crush(10).lpf(9000).hpf(100).swing(0.1),
    s("~ oh").fast(2).gain(0.4).lpf(11000).release(0.4),
    s("~*15 cr").slow(8).every(2, p => p.rev().speed(1.2)).gain(0.3).room(0.5).lpf(12000)
  ).gain(0.9)
   .compressor().compressorRatio(8).compressorAttack(0.01).compressorRelease(0.25)
   .postgain(1.2)

// --- Vocals ---
$: s("deep_space ~ endless journey ~ | celestial ~ voyage ~ deep_space").slow(8)
  .chop(16)
  .speed(perlin.range(0.85, 1.15).slow(18))
  .sometimesBy(0.15, p => p.speed(-1))
  .hpf(400).lpf(7000).room(0.4)
  .delay(0.5).dfb(0.6).dt(0.375)
  .gain(0.65)
  .pan(perlin.range(0.2, 0.8).slow(18))
  .late(0.25)