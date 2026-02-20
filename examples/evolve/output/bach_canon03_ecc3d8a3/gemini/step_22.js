setcps(118/60/4)

// --- Voices ---
let padVoice = x => x
  .sound("sawtooth")
  .gain(0.3)
  .attack(2)
  .release(6)
  .lpf(saw.range(400, 2000).slow(32))
  .lpq(8)
  .trem(sine.range(0.1, 0.3).slow(12))
  .room(0.5)
  .size(0.9)
  .delay(0.4)
  .dt(0.75)
  .dfb(0.6)

let bassVoice = x => x
  .sound("pulse")
  .gain(0.4)
  .attack(0.01)
  .release(0.3)
  .lpf(200)
  .lpenv(2500)
  .lpdecay(0.08)
  .octave(-2)
  .cut(1)
  .shape(0.1)
  .jux(p => p.octave(-1).sound("sine").gain(p.gain()*0.8).lpf(120))

let arpVoice = x => x
  .sound("triangle")
  .gain(0.2)
  .fmi(sine.range(0.5, 3).slow(13))
  .fmh(1.5)
  .release(0.25)
  .velocity(perlin.range(0.5, 1).slow(7))
  .delay(0.5)
  .dt(0.25)
  .dfb(0.7)
  .pan(perlin.range(0.1, 0.9).slow(12))

let leadVoice = x => x
  .sound("supersaw")
  .gain(0.25)
  .attack(0.02)
  .release(1)
  .lpf(1200)
  .lpenv(4000)
  .lpdecay(0.5)
  .phaser(sine.range(0.1, 2).slow(7))
  .room(0.7)
  .size(0.95)
  .delay(0.5)
  .dfb(0.6)
  .dt(0.375)

// --- Samples ---
samples('shabda/speech:deep_space,endless,voyage,celestial,journey')

// --- Harmony & Melody ---
const chords = n("c4 g3 ab3 f3").slow(4).scale("C:minor").chord("m9 m7 M7 m7")

$: chords.voicing().apply(padVoice)

$: n("c g ab f").slow(4).euclid(5, 8).apply(bassVoice).late(0.125)

$: chords.arp("updown").palindrome().fast(2).apply(arpVoice).late(2).degradeBy(0.05)

$: n("<g4 ~> <eb5 d5> c5 ~ <g5 f5> ab5~").slow(4).scale("C:natural_minor")
  .slide(-0.1)
  .sometimes(p => p.octave(1))
  .apply(leadVoice)
  .orbit(1)
  .late(8)

// --- Drums & Percussion ---
$: stack(
    s("bd*4").gain(1.1).cut(1),
    s("~ cp ~ cp").gain(0.7).lpf(8000).shape(0.1).release(0.2),
    s("hh*8").fast(2).gain(0.35).velocity(perlin.range(0.4, 0.9).slow(5))
      .crush(12).lpf(9000).swing(0.05),
    s("~ ~ ~ <oh mt>").gain(0.4).lpf(11000).release(0.4),
    s("~*7 cr").slow(8).every(2, p => p.rev()).gain(0.3).room(0.5).lpf(12000)
  ).gain(0.9)
   .compressor()
   .compressorRatio(10)
   .compressorAttack(0.01)
   .compressorRelease(0.25)
   .postgain(1.1)

// --- Vocals ---
$: s("<deep_space journey> <endless voyage> celestial*2").slow(8)
  .chop(perlin.range(2, 8).slow(9))
  .every(3, p => p.speed(perlin.range(0.8, 1.2)))
  .hpf(400).lpf(7000).room(0.4)
  .delay(0.5).dfb(0.6).dt("3/8")
  .gain(0.7)
  .pan(perlin.range(0.3, 0.7).slow(10))
  .late(4)