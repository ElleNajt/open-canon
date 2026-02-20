setcps(122/60/4)

// --- Voices ---
let padVoice = x => x
  .sound("supersaw")
  .gain(0.22)
  .attack(2.5)
  .release(8)
  .bpf(sine.range(500, 2500).slow(32))
  .bpq(9)
  .trem(sine.range(0.05, 0.15).slow(24))
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
  .lpf(sine.range(150, 220).fast(8))
  .lpenv(2800)
  .lpdecay(0.06)
  .octave(-2)
  .cut(1)
  .shape(0.2)
  .drive(0.4)
  .crush(8)
  .jux(p => p.octave(-1).sound("sine").gain(p.gain()*0.9).lpf(120))

let arpVoice = x => x
  .sound("sawtooth")
  .gain(0.12)
  .lpf(900)
  .lpenv(4500)
  .lpdecay(0.1)
  .release(0.25)
  .velocity(perlin.range(0.3, 1).slow(9))
  .delay(0.6)
  .dt("3/16")
  .dfb(0.7)
  .pan(perlin.range(0.05, 0.95).slow(13))
  .crush(10)

let leadVoice = x => x
  .sound("supersaw")
  .gain(0.22)
  .attack(0.01)
  .release(1)
  .penv(120)
  .pdecay(0.05)
  .lpf(2000)
  .lpenv(3000)
  .lpdecay(0.4)
  .shape(0.25)
  .trem(perlin.range(0.1, 0.4).slow(8))
  .room(0.7)
  .size(0.95)
  .delay(0.5)
  .dfb(0.6)
  .dt(0.375)

// --- Samples ---
samples('shabda/speech:deep_space,endless,voyage,celestial,journey')

// --- Harmony & Melody ---
const chords = n("c4 g3 ab3 eb4 | f4 c4 g4 g4").slow(8).scale("C:minor").chord("m9 m7 M7 M7 | m7 m9 m7 m7")

$: chords.voicing().apply(padVoice)

$: n("c ~ c ~ g ~ ab ~ | eb ~ f ~ c ~ g ~").slow(8).apply(bassVoice)

$: chords.arp("updown").fast(2)
  .every(8, p => p.transpose(5))
  .apply(arpVoice)
  .late(6)
  .degradeBy(0.05)

$: n("g4~3 eb5 d5 c5~ | g4~3 f4 ab4 g4 | g4~3 eb5 d5 c5~ | g5 f5 g5 ab5 g5 f5 eb5 d5").slow(8).scale("C:natural_minor")
  .slide(0.05)
  .sometimesBy(0.2, p => p.octave(1))
  .apply(leadVoice)
  .orbit(1)
  .late(4)

// --- Drums & Percussion ---
$: stack(
    s("bd*4").gain(1.1).cut(1),
    s("~ cp ~ cp").gain(0.8).every(8, p => p.s("[~ cp]!4").fast(2)),
    s("[hh hh] hh [~ hh] hh").fast(2)
      .velocity(perlin.range(0.5, 1).slow(5)).gain(0.5)
      .crush(10).lpf(9000).hpf(100).swing(0.05),
    s("~ oh").fast(2).gain(0.4).lpf(11000).release(0.4),
    s("~*15 cr").slow(8).every(2, p => p.rev().speed(1.2)).gain(0.3).room(0.5).lpf(12000)
  ).gain(0.9)
   .compressor().compressorRatio(8).compressorAttack(0.01).compressorRelease(0.25)
   .postgain(1.2)

// --- Vocals ---
$: s("<deep_space ~> voyage <~ endless> <~ journey> celestial").slow(8)
  .chop(16)
  .speed(perlin.range(0.85, 1.15).slow(18))
  .sometimesBy(0.15, p => p.speed(-1))
  .hpf(400).lpf(7000).room(0.4)
  .delay(0.5).dfb(0.6).dt(0.375)
  .gain(0.65)
  .pan(perlin.range(0.2, 0.8).slow(18))
  .late(6)